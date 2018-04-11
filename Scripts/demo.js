var canvas = document.getElementById('canvas');

var sineWaveGeneratorInstance = littleDebugger.audioProcessing.waveGenerators.sineWave(0, canvas.width);
var simpleVisualiser = littleDebugger.audioProcessing.ui.visualisers.simpleVisualiser(canvas, true, 'red');

var signal = [canvas.width];

for (var i = 0; i < canvas.width + 1; i++) {
    // get sine wave samples at 2 cycles per sample rate.
    var y = sineWaveGeneratorInstance.getSample(2);
    signal[i] = y;
}

simpleVisualiser.drawWave(signal);