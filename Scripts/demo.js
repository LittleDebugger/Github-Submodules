
    var canvas = document.getElementById('canvas');
 
    var sineWaveGeneratorInstance = sineWaveGenerator(waveOffset, canvas.width);
    var 

    // Reference the sineWave generator.
    var sineWaveGenerator = littleDebugger.daw.dsp.generator.sineWave;

    var signal = [canvas.width];

    for (var i = 0; i < canvas.width + 1; i++) {
        // get sine wave samples at 2 cycles per sample rate.
        var y = sineWaveGeneratorInstance.getSample(2);
        signal[i] = y;
    }    
};
