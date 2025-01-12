document.addEventListener('DOMContentLoaded', function() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const container = document.getElementById('alphabet-container');

    alphabet.split('').forEach(letter => {
        const section = document.createElement('div');
        section.className = 'alphabet-section';
        
        const heading = document.createElement('h2');
        heading.textContent = `Cita ${letter}`;
        section.appendChild(heading);

        const img = document.createElement('img');
        img.src = `images/${letter}.jpg`; // Ruta de ejemplo para las imágenes
        img.alt = `Foto de la cita ${letter}`;
        img.className = 'photo';
        section.appendChild(img);

        const textArea = document.createElement('textarea');
        textArea.placeholder = `Escribe algo sobre la cita ${letter}...`;
        section.appendChild(textArea);

        container.appendChild(section);
    });
});
