//   let currentIndex = 0;
//     const images = document.querySelectorAll('#slider img');
//     const totalImages = images.length;

//     function showImage(index) {
//       images.forEach((image, i) => {
//         image.style.opacity = i === index ? '1' : '0';
//         image.style.transition = 'opacity 1s ease-in-out';
//       });
//     }

//     function nextImage() {
//       currentIndex = (currentIndex + 1) % totalImages;
//       showImage(currentIndex);
//     }

//     function prevImage() {
//       currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//       showImage(currentIndex);
//     }

//     setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos al pasar al siguiente

// import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0
  const navbar = document.getElementById('barraNavegacion')

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      // Scroll hacia abajo
      navbar.classList.add('navbar-hidden')
    } else {
      // Scroll hacia arriba
      navbar.classList.remove('navbar-hidden')
    }

    lastScrollTop = scrollTop;
  })
})

// let carta = document.getElementById("variedad")

// carta.addEventListener('click', mostrarCarta)

function mostrarCarta() {
  Swal.fire({
    imageUrl: "../img/carta1Cofi.png",
    imageHeight: 700,
    imageWidth: 500,
    imageAlt: "A tall image"
  });
}

// cards items

document.addEventListener("DOMContentLoaded", () => {
  const benefits = document.querySelectorAll('.benefit');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  benefits.forEach(benefit => {
    observer.observe(benefit);
  });
});


// ARMÁ TU MERIENDA

function calcularTotal() {
  const cafe = document.getElementById('cafe')
  const seleccionCafe = cafe.options[cafe.selectedIndex]
  const precioCafe = parseFloat(seleccionCafe.getAttribute('data-price'))

  const acompanamientos = document.querySelectorAll('input[name="acompanamiento"]:checked')
  let precioAcompanamientos = 0
  acompanamientos.forEach((acompanamiento) => {
    precioAcompanamiento = parseFloat(acompanamiento.getAttribute('data-price'))
    precioAcompanamientos += precioAcompanamiento
  });

  // método de pago
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "debito": "binance",
        "credito": "master",
        "otro": "transferencia"
      });
    }, 1000)
  })

  const total = precioCafe + precioAcompanamientos;
  // document.getElementById('total').innerText = `Total a pagar: $${total}`;

  const { value: pay } = Swal.fire({
    title: `El total de su compra es de ${total}. Selecciona método de pago`,
    input: "radio",
    inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return (

          `Por favor, ¡seleccione el método de pago!`
        )
      }
    }
  })

  if (pay) {
    Swal.fire({ html: `Tu método de pago es: ${pay}` })
  }

  // const total = precioCafe + precioAcompanamientos;
  // document.getElementById('total').innerText = `Total a pagar: $${total}`;
}

var typed = new Typed('#element', {
  strings: ['Humberto Primo 123', 'Córdoba Capital'],
  typeSpeed: 50,
  // fadeOutClass: 'typed-fade-out',
  showCursor: true,
  cursorChar: '|',
})
