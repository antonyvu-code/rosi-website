// ROSI — Web Audio API Programmatic Ocean Synthesizer

let audioCtx = null;
let waveGain = null;
let noiseNode = null;
let lfoNode = null;
let isPlaying = false;

function initOceanSynthesizer() {
    // 1. Create Audio Context
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();

    // 2. Generate White Noise Buffer (represents ocean foam)
    const bufferSize = 2 * audioCtx.sampleRate;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
    }

    // 3. Create Noise Source Node
    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    // 4. Create Biquad Filter (filters high pitches, leaving deep sea rumbles)
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 1.0;

    // 5. Create Main Volume Gain Node
    waveGain = audioCtx.createGain();
    waveGain.gain.value = 0.0; // Start silent

    // 6. Create LFO (Low Frequency Oscillator) to modulate waves in and out
    // A sine wave running at 0.08Hz (approx. 12-second cycle)
    lfoNode = audioCtx.createOscillator();
    lfoNode.frequency.value = 0.08; 

    // Gain node to control modulation depth on the filter frequency
    const filterModGain = audioCtx.createGain();
    filterModGain.gain.value = 250; // Sweeps filter between 150Hz and 650Hz
    
    // Connect LFO to modulate filter cutoff
    filter.frequency.value = 400; 
    lfoNode.connect(filterModGain);
    filterModGain.connect(filter.frequency);

    // Gain node to control modulation depth on volume (Gain)
    // Simulates waves getting louder and quieter
    const volumeModGain = audioCtx.createGain();
    volumeModGain.gain.value = 0.035; // Volume variance (0.015 to 0.085)
    
    lfoNode.connect(volumeModGain);
    // Offset volume base level
    const volumeOffset = audioCtx.createGain();
    volumeOffset.gain.value = 0.045; 
    
    volumeModGain.connect(waveGain.gain);
    volumeOffset.connect(waveGain.gain);

    // 7. Establish Audio Graph connections
    noiseNode.connect(filter);
    filter.connect(waveGain);
    waveGain.connect(audioCtx.destination);

    // 8. Start nodes
    noiseNode.start(0);
    lfoNode.start(0);
}

function toggleOceanAudio() {
    const audioBtn = document.getElementById('audio-btn');
    const audioIcon = document.getElementById('audio-icon');
    const eqVisualizer = document.getElementById('eq-visualizer');
    const wrapper = document.getElementById('audio-toggle-container');

    if (!audioCtx) {
        initOceanSynthesizer();
    }

    if (!isPlaying) {
        // Play audio
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        // Transition volume in smoothly
        waveGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        waveGain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 1.5);

        isPlaying = true;
        audioIcon.setAttribute('name', 'volume-high-outline');
        eqVisualizer.classList.add('audio-active');
        wrapper.classList.add('audio-active');
    } else {
        // Suspend context or ramp gain to 0
        if (waveGain) {
            waveGain.gain.setValueAtTime(waveGain.gain.value, audioCtx.currentTime);
            waveGain.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.8);
        }
        
        setTimeout(() => {
            if (audioCtx && !isPlaying) {
                audioCtx.suspend();
            }
        }, 800);

        isPlaying = false;
        audioIcon.setAttribute('name', 'volume-mute-outline');
        eqVisualizer.classList.remove('audio-active');
        wrapper.classList.remove('audio-active');
    }
}

// Bind event on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const audioToggle = document.getElementById('audio-toggle-container');
    if (audioToggle) {
        audioToggle.addEventListener('click', toggleOceanAudio);
    }
});
