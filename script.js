document.getElementById('startButton').addEventListener('click', function() {
    var lyrics = '';
    for (var i = 99; i >= 0; i--) {
        if (i > 1) {
            lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
            lyrics += `Take one down and pass it around, ${i-1} bottles of beer on the wall.\n\n`;
        } else if (i === 1) {
            lyrics += `1 bottle of beer on the wall, 1 bottle of beer.\n`;
            lyrics += `Take one down and pass it around, no more bottles of beer on the wall.\n\n`;
        } else {
            lyrics += `No more bottles of beer on the wall, no more bottles of beer.\n`;
        }
    }
    document.getElementById('lyrics').innerText = lyrics;
});
