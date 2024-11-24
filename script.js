function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*Animacion del texto*/
const animatedText = document.querySelector(".animated-text");
const texts = [
    "Marketing Specialist",
    "Project Manager",
    "Digital Marketing",
    "Gamer",
    "Amateur FrontEnd"
];

let index = 0;

const typeText = (text) => {
    animatedText.textContent = ""; // Limpia el texto actual
    let i = 0;

    const typingInterval = setInterval(() => {
        if (i < text.length) {
            animatedText.textContent += text.charAt(i); // Agrega una letra a la vez
            i++;
        } else {
            clearInterval(typingInterval); // Detiene la animación de escritura
            setTimeout(() => {
                eraseText(); // Llama a la función para borrar el texto después de un breve retraso
            }, 1000); // Cambia este valor a 1000 para 1 segundo de espera antes de borrar
        }
    }, 50); // Cambia este valor a 50 para una escritura más rápida (50ms por letra)
};

const eraseText = () => {
    let text = animatedText.textContent;
    let i = text.length;

    const erasingInterval = setInterval(() => {
        if (i > 0) {
            animatedText.textContent = text.substring(0, i - 1); // Elimina una letra a la vez
            i--;
        } else {
            clearInterval(erasingInterval); // Detiene la animación de borrado
            index = (index + 1) % texts.length; // Incrementa el índice y reinicia si es necesario
            setTimeout(() => {
                typeText(texts[index]); // Comienza a escribir el siguiente texto
            }, 500); // Cambia este valor a 500 para medio segundo de espera antes de comenzar a escribir el siguiente texto
        }
    }, 50); // Cambia este valor a 50 para un borrado más rápido (50ms por letra)
};

// Inicia la animación con el primer texto
typeText(texts[index]);