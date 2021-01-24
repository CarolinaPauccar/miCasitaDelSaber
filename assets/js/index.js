// Sliding Header
const responsiveSlider = () => {
  
    const slider = document.querySelector("#slider");
    let sliderWidth = slider.offsetWidth;
    const slideList = document.querySelector("#sliderWrap");
    const items = slideList.querySelectorAll("li").length;
    
    let count = 0;
    
    const num = document.querySelector("#num");
    slideNums = num.querySelectorAll("div");
    
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    
    const addColor = function(pos){
      slideNums[pos].style.boxShadow = "0 0 10px 2px rgb(196, 253, 255)";
      slideNums[pos].style.background = "#fff";
    }
    
    const removeColor = function(pos){
      slideNums[pos].style.boxShadow = "0 0 10px 2px transparent";
      slideNums[pos].style.background = "rgba(255, 255, 255, .3)";
    }
    
    addColor(0);
    
    slideNums[0].addEventListener("click", () => {
      removeColor(count);
      count = 0;
      addColor(count);
      slideList.style.left = "0px";
    });
    slideNums[1].addEventListener("click", () => {
      removeColor(count);
      count = 1;
      addColor(count);
      slideList.style.left = "-" + count * sliderWidth + "px";
    });
    slideNums[2].addEventListener("click", () => {
      removeColor(count);
      count = 2;
      addColor(count);
      slideList.style.left = "-" + count * sliderWidth + "px";
    });
    slideNums[3].addEventListener("click", () => {
      removeColor(count);
      count = 3;
      addColor(count);
      slideList.style.left = "-" + count * sliderWidth + "px";
    });

    
    window.addEventListener("resize", () => {
      sliderWidth = slider.offsetWidth;
      slideList.style.left = "-" + count * sliderWidth + "px";
    });
    
    const prevSlide = () => {
      removeColor(count);
      if(!count) count = items - 1;
      else count--;
      addColor(count);
      slideList.style.left = "-" + count * sliderWidth + "px";
    }
    
    const nextSlide = () => {
      removeColor(count);
      if(count == items - 1) count = 0;
      else count++;
      addColor(count);
      slideList.style.left =  "-" + count * sliderWidth + "px";
    }
   
    next.addEventListener("click", () =>{
      nextSlide();
    }); 
   
    prev.addEventListener("click", () => {
      prevSlide();
    });
    
    setInterval(() => {
      nextSlide();
    }, 6000);
  }
  
  window.onload = () => {
    responsiveSlider();
  }  
  
  // Parallax Effect
  parallax = (element, distance, speed) => {
    const item = document.querySelector(element);
    const clouds = document.querySelector('.clouds')
    item.style.transform = `translateY(${distance * speed}px)`;
    clouds.style.transform = `translateX(${distance * speed}px)`;
  }

  window.addEventListener("scroll", () => {
    parallax(".parallax-text", window.scrollY, 0.1);
    parallax(".clouds", window.scrollX, 0.1);
    parallax(".girl", window.scrollY, 0.2);
    parallax(".boy", window.scrollY, 0.09);
  });

  