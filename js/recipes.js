document.addEventListener("DOMContentLoaded", function () {
  const box=document.getElementById("carousel");
  // all the chile elements in the carousel (slides)
  const slidesNodes=box.children;
  //convert into an array so we can loop it
  const slides=Array.from(slidesNodes);
  //the width of one slide
  const firstSlide=slides[0]
  const slideWidth=firstSlide.offsetWidth + 16;

  //duplicate slides one time and append to the end of the carousel
  //using double loops so that slides can be duplicated more
  for (let j=0;j<4;j=j+1){

    for(let i=0;i<slides.length;i=i+1){

      const originalSlide=slides[i];
      const clone=originalSlide.cloneNode(true);
      box.appendChild(clone);
    }
  }

  // initialise variable for autoscroll when to pause
  let isPaused=false;

  function autoScroll() {
    if (isPaused == false) {
      box.scrollLeft=box.scrollLeft + 0.5;

      // Reset scroll position when halfway through
      if (box.scrollLeft >= box.scrollWidth / 2) {
        box.scrollLeft = 0;
      }
    }
    //ask browser to call autoScroll again before the browser renders again
    requestAnimationFrame(autoScroll);
  }
  //make it loop over and over
  autoScroll();

  // Pause on hover or touch (including arrows)
  const arrowNode = document.querySelectorAll(".arrow");
  const pauseTargets = [box, ...arrowNode];
  
  for (let i=0;i< pauseTargets.length;i=i+1){
    const element=pauseTargets[i];
    element.addEventListener("mouseenter", function(){
      isPaused=true;
    });
    element.addEventListener("mouseleave", function(){
      isPaused=false;
    });
    element.addEventListener("touchstart", function(){
      isPaused=true;
    });
    element.addEventListener("touchend", function(){
      isPaused=false;
    });
  }

  // Manual navigation
  const leftArrow=document.querySelector(".arrow-left");
  const rightArrow=document.querySelector(".arrow-right");

  leftArrow.addEventListener("click", function(){
    box.scrollBy({
      left: -slideWidth/2,
      behavior: "smooth"
    });
  });

  rightArrow.addEventListener("click", function(){
    box.scrollBy({
      left: slideWidth/2,
      behavior: "smooth"
    });
  });
});