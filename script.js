document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown-container > a');

    // Toggle para el menú hamburguesa
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Toggle para los submenús en móvil
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Solo activar en vista móvil
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevenir navegación en el enlace principal
                const parent = dropdown.parentElement;
                parent.classList.toggle('open');
            }
        });
    });
});

// ...existing code...
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Solo activar en vista móvil
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevenir navegación en el enlace principal
                const parent = dropdown.parentElement;
                parent.classList.toggle('open');
            }
        });
    });

    // Funcionalidad para copiar código de armas
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentDiv = button.parentElement;
            const pre = contentDiv.querySelector('pre');
            if (pre) {
                navigator.clipboard.writeText(pre.innerText).then(() => {
                    button.innerText = '¡Copiado!';
                    setTimeout(() => {
                        button.innerText = 'Copiar Código';
                    }, 2000); // Vuelve al texto original después de 2 segundos
                }).catch(err => {
                    console.error('Error al copiar: ', err);
                    button.innerText = 'Error';
                });
            }
        });
    });
    