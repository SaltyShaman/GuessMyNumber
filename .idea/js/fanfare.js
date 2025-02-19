function playFanfare() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Function to play a tone
    function playTone(frequency, duration) {
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine'; // Sine wave gives a smoother sound
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // Set frequency
        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(1, audioContext.currentTime); // Max volume

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration); // Stop after 'duration' seconds
    }

    // Play the "ding" tone (High C - 523 Hz) for 0.3 seconds
    playTone(523, 0.3);  // High C

    // Play the "dong" tone (Lower frequency) for 0.6 seconds after a short delay
    setTimeout(() => {
        playTone(400, 0.6); // Lower tone (like "dong")
    }, 300); // Delay for 300ms

    // Use SpeechSynthesis API to say "Hallo"
    const speech = new SpeechSynthesisUtterance('Hallo');
    speech.lang = 'da-DK'; // Danish language
    speechSynthesis.speak(speech);

    speechSynthesis.speak(speech);
}
