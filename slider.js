// document.addEventListener("DOMContentLoaded", () => {
//     const sliders = document.querySelectorAll(".slider");
  
//     sliders.forEach((slider) => {
//       let index = 0;
//       const wrapper = slider.querySelector(".slider-wrapper");
//       const slides = slider.querySelectorAll(".slide");
//       const slidesControls = slider.querySelector(".slider-controls");
//       const leftBtn = slider.querySelector(".slide-control-left");
//       const rightBtn = slider.querySelector(".slide-control-right");
  
//       if (!slides) return;
  
//       function controls() {
//         if (index === 0) {
//           leftBtn.classList.add("slide-control-disabled");
//         } else {
//           leftBtn.classList.remove("slide-control-disabled");
//         }
  
//         if (index === slides.length - 2) {
//           rightBtn.classList.add("slide-control-disabled");
//         } else {
//           rightBtn.classList.remove("slide-control-disabled");
//         }
//       }
  
//       function setSlides() {
//         slides.forEach((slide) => {
//           slide.style.left =
//             -(
//               slidesControls.clientWidth * index +
//               (window.innerWidth >= 768 ? 24 : 36) * index
//             ) + "px";
//           slide.classList.remove("slide-active");
//         });
  
//         slides[index].classList.add("slide-active");
//       }
  
//       if (leftBtn && rightBtn) {
//         leftBtn.addEventListener("click", () => {
//           if (index > 0 && index <= slides.length) {
//             index--;
//             setSlides();
//           }
  
//           controls();
//         });
  
//         rightBtn.addEventListener("click", () => {
//           if (index >= 0 && index < slides.length - 2) {
//             index++;
//             setSlides();
//           }
  
//           controls();
//         });
//       }
  
//       const resize = () => {
//         slider.classList.remove('slider-transitions');
//         setSlides();
//         slider.classList.add('slider-transitions');
//       };
  
//       setSlides();
//       controls();
//       window.addEventListener('load', () => {
//         slider.classList.add('slider-transitions');
//       });
//       window.addEventListener("resize", resize);
//     });
//   });
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
  
    sliders.forEach((slider) => {
      let index = 0;
      let autoSlideInterval;
      const wrapper = slider.querySelector(".slider-wrapper");
      const slides = slider.querySelectorAll(".slide");
      const slidesControls = slider.querySelector(".slider-controls");
      const leftBtn = slider.querySelector(".slide-control-left");
      const rightBtn = slider.querySelector(".slide-control-right");
  
      if (!slides) return;
  
      // Smooth transition effect
      slider.style.transition = "transform 0.5s ease-in-out";
  
      function controls() {
        if (index === 0) {
          leftBtn.classList.add("slide-control-disabled");
        } else {
          leftBtn.classList.remove("slide-control-disabled");
        }
  
        if (index === slides.length - 1) {
          rightBtn.classList.add("slide-control-disabled");
        } else {
          rightBtn.classList.remove("slide-control-disabled");
        }
      }
  
      function setSlides() {
        slides.forEach((slide) => {
          slide.style.left =
            -(
              slidesControls.clientWidth * index +
              (window.innerWidth >= 768 ? 24 : 36) * index
            ) + "px";
          slide.classList.remove("slide-active");
        });
  
        slides[index].classList.add("slide-active");
      }
  
      // Auto-slider functionality
      function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
          if (index < slides.length - 1) {
            index++;
          } else {
            index = 0;
          }
          setSlides();
          controls();
        }, 3000); // Change slide every 3 seconds
      }
  
      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }
  
      // Event listeners for the manual controls
      if (leftBtn && rightBtn) {
        leftBtn.addEventListener("click", () => {
          stopAutoSlide();
          if (index > 0 && index <= slides.length) {
            index--;
            setSlides();
          }
          controls();
          startAutoSlide();
        });
  
        rightBtn.addEventListener("click", () => {
          stopAutoSlide();
          if (index >= 0 && index < slides.length - 1) {
            index++;
            setSlides();
          }
          controls();
          startAutoSlide();
        });
      }
  
      // Handle slider resizing
      const resize = () => {
        slider.classList.remove("slider-transitions");
        setSlides();
        slider.classList.add("slider-transitions");
      };
  
      // Start the slider on page load
      setSlides();
      controls();
      window.addEventListener("load", () => {
        slider.classList.add("slider-transitions");
        startAutoSlide(); // Start the auto-slide when the page loads
      });
      window.addEventListener("resize", resize);
  
      // Pause auto-slide on mouse hover
      slider.addEventListener("mouseover", stopAutoSlide);
      slider.addEventListener("mouseout", startAutoSlide);
    });
  });


  // =============================================

  // scard css start from heree

  VanillaTilt,init(document.querySelectorAll('scard'),{
    max:25,
    speed:5000,
    glare:true,
    'max-glare':0.5,
  });
  