fetch('./massive.txt') 
            .then(response => response.text())
            .then(data => {
                document.getElementById('ascii-art').innerText = data;
            })
            .catch(error => {
                console.error('Chyba při načítání ASCII artu:', error);
            });

function copyAsciiArt() {
    const asciiArt = document.querySelector('.ascii-art').innerText;
    navigator.clipboard.writeText(asciiArt).then(() => {
        alert('ASCII art copied to clipboard!');
    });
}

function saveAsciiArt() {
    const asciiArt = document.querySelector('.ascii-art').innerText;
    const blob = new Blob([asciiArt], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ascii-art.txt';
    link.click();
}