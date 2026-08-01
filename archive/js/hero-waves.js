/* ROSI — Hero real-time WebGL Ocean
   Full-screen fragment-shader sea: animated swell, sunset specular glints,
   horizon glow and an interactive mouse ripple. Falls back to a static
   gradient if WebGL is unavailable or prefers-reduced-motion is set. */
(function () {
    const canvas = document.getElementById('wave-canvas');
    if (!canvas) return;

    const reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const glOpts = { antialias: true, alpha: true, preserveDrawingBuffer: false };
    const gl = canvas.getContext('webgl', glOpts) ||
               canvas.getContext('experimental-webgl', glOpts);

    // ---- 2D gradient fallback (no WebGL) ----
    if (!gl) {
        const ctx = canvas.getContext('2d');
        function paintFallback() {
            const w = canvas.width = canvas.offsetWidth || window.innerWidth;
            const h = canvas.height = canvas.offsetHeight || window.innerHeight;
            const g = ctx.createLinearGradient(0, 0, 0, h);
            g.addColorStop(0, '#0a2230');
            g.addColorStop(0.55, '#0b3d52');
            g.addColorStop(1, '#155d78');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, w, h);
        }
        paintFallback();
        window.addEventListener('resize', paintFallback);
        return;
    }

    const vertSrc = `
        attribute vec2 aPos;
        void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
    `;

    const fragSrc = `
        precision highp float;
        uniform vec2  uRes;
        uniform float uTime;
        uniform vec2  uMouse;     // pixel coords, origin bottom-left
        uniform float uMouseOn;   // 0..1 ripple intensity

        const vec3 DEEP   = vec3(0.043, 0.239, 0.322); // #0B3D52
        const vec3 MID    = vec3(0.082, 0.365, 0.471); // #155d78
        const vec3 TEAL   = vec3(0.122, 0.659, 0.627); // #1FA8A0
        const vec3 CORAL  = vec3(1.000, 0.478, 0.302); // #FF7A4D
        const vec3 SKYTOP = vec3(0.024, 0.078, 0.118);

        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){
            vec2 i = floor(p), f = fract(p);
            float a = hash(i), b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        float waveH(vec2 p, float t){
            float h = 0.0;
            h += sin(p.x * 0.65 + t * 1.10) * 0.50;
            h += sin(p.y * 0.85 - t * 0.90) * 0.40;
            h += sin((p.x + p.y) * 0.50 + t * 1.60) * 0.28;
            h += (noise(p * 1.4 + vec2(t * 0.25, t * 0.18)) - 0.5) * 1.10;
            return h;
        }

        void main(){
            vec2 res = max(uRes, vec2(1.0));      // guard against zero -> NaN
            vec2 uv = gl_FragCoord.xy / res;       // 0..1, y up
            float hor = 0.56;
            vec3 col;

            if (uv.y > hor) {
                // Sky / sunset
                float t = (uv.y - hor) / (1.0 - hor);
                col = mix(MID * 0.85, SKYTOP, smoothstep(0.0, 1.0, t));
                float glow = pow(1.0 - t, 2.2);
                float horizGlow = smoothstep(1.0, 0.0, abs(uv.x - 0.5) * 1.6);
                col += CORAL * glow * horizGlow * 0.55;
                col += TEAL  * glow * 0.10;
            } else {
                // Water (faux-perspective plane)
                float depth = hor - uv.y;
                float persp = 0.10 / (depth + 0.025);
                vec2 wp = vec2((uv.x - 0.5) * persp * 9.0, persp * 7.0);
                wp.y -= uTime * 0.55;

                vec2 m = uMouse / res;
                float md = distance(uv, m);
                float ripple = sin(md * 55.0 - uTime * 6.0) * exp(-md * 9.0) * uMouseOn;

                float t = uTime;
                float h = waveH(wp, t) + ripple * 2.0;
                float e = 0.045;
                float hx = waveH(wp + vec2(e, 0.0), t) - h;
                float hy = waveH(wp + vec2(0.0, e), t) - h;
                vec3 n = normalize(vec3(-hx, -hy, e * 6.0));

                float fade = smoothstep(0.0, 1.0, depth / hor);
                vec3 water = mix(TEAL * 0.85, DEEP, fade);
                water = mix(water, MID, 0.25);

                vec3 L = normalize(vec3(0.0, 0.55, 0.6));
                float spec = pow(max(dot(n, L), 0.0), 28.0);
                float sunCol = smoothstep(1.0, 0.0, abs(uv.x - 0.5) * 1.3);
                col = water + mix(vec3(1.0, 0.85, 0.6), CORAL, 0.5) * spec * (0.6 + sunCol * 1.6);

                float g = noise(wp * 3.2 + vec2(t * 1.6, -t * 1.2));
                col += vec3(1.0, 0.92, 0.78) * smoothstep(0.92, 1.0, g) * 0.5 * (1.0 - fade);
                col = mix(col, mix(CORAL, MID, 0.4), smoothstep(0.12, 0.0, depth) * 0.6);
            }

            float vig = smoothstep(1.25, 0.35, distance(uv, vec2(0.5, 0.55)));
            col *= 0.85 + vig * 0.15;
            gl_FragColor = vec4(col, 1.0);
        }
    `;

    function compile(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.error('Hero shader compile error:', gl.getShaderInfoLog(s));
            return null;
        }
        return s;
    }

    const vs = compile(gl.VERTEX_SHADER, vertSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fragSrc);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error('Hero shader link error:', gl.getProgramInfoLog(prog));
        return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uMouse = gl.getUniformLocation(prog, 'uMouse');
    const uMouseOn = gl.getUniformLocation(prog, 'uMouseOn');

    // Render at a capped internal resolution (it is a soft background).
    const MAX_DIM = 1280;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    function resize() {
        const w = canvas.offsetWidth || canvas.clientWidth || window.innerWidth;
        const h = canvas.offsetHeight || canvas.clientHeight || window.innerHeight;
        const scale = DPR * Math.min(1, MAX_DIM / Math.max(w, h));
        const bw = Math.max(8, Math.floor(w * scale));
        const bh = Math.max(8, Math.floor(h * scale));
        if (canvas.width !== bw || canvas.height !== bh) {
            canvas.width = bw;
            canvas.height = bh;
        }
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    window.addEventListener('load', function () { resize(); draw(performance.now()); });
    resize();

    // Mouse ripple
    let mx = canvas.width * 0.5, my = canvas.height * 0.5, mOn = 0, mOnSmooth = 0;
    window.addEventListener('mousemove', function (e) {
        const r = canvas.getBoundingClientRect();
        if (!r.width || !r.height) return;
        mx = (e.clientX - r.left) * (canvas.width / r.width);
        my = (r.height - (e.clientY - r.top)) * (canvas.height / r.height);
        mOn = 1.0;
    });
    window.addEventListener('mouseout', function () { mOn = 0.0; });

    const start = performance.now();
    function draw(now) {
        const t = reduceMotion ? 3.5 : (now - start) * 0.001;
        mOnSmooth += (mOn - mOnSmooth) * 0.06;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, t);
        gl.uniform2f(uMouse, mx, my);
        gl.uniform1f(uMouseOn, mOnSmooth);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    function loop(now) {
        draw(now);
        if (!reduceMotion) requestAnimationFrame(loop);
    }
    draw(performance.now());
    if (!reduceMotion) requestAnimationFrame(loop);
})();
