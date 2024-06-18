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
  
let carta = document.getElementById("variedad")

carta.addEventListener('click', mostrarCarta)

function mostrarCarta() {
  Swal.fire({
    imageUrl: "../img/carta1Cofi.png",
    imageHeight: 700,
    imageWidth: 500,
    imageAlt: "A tall image"
  });
}