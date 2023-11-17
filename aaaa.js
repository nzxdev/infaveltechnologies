// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller  

document.querySelectorAll('.scroller').forEach((scroller) => {
  scroller.addEventListener('mousedown',function(){
    active = true;
    // Add our scrolling class so the scroller has full opacity while active
    scroller.classList.add('scrolling');
  });
});

// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelectorAll('.scroller').forEach((scroller) => {
    scroller.classList.remove('scrolling');
  });
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelectorAll('.scroller').forEach((scroller) => {
    scroller.classList.remove('scrolling');
  });
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  // but we want it relative to our wrapper

  document.querySelectorAll('.wrapper').forEach((wrapper) => {

    let x = e.pageX;

    x -= wrapper.getBoundingClientRect().left;

    // Okay let's change our state
    scrollIt(x);
  });
});

// Let's use this function
function scrollIt(x){
  document.querySelectorAll('.wrapper').forEach((wrapper) => {
    let transform = Math.max(0,(Math.min(x,wrapper.offsetWidth)));

    document.querySelectorAll('.after').forEach((after) => {
      after.style.width = transform+"px";
    });

    document.querySelectorAll('.scroller').forEach((scroller) => {
      scroller.style.left = transform-25+"px";
    });
  });
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...

document.querySelectorAll('.scroller').forEach((scroller) => {
  scroller.addEventListener('touchstart',function(){
    active = true;
    // Add our scrolling class so the scroller has full opacity while active
    scroller.classList.add('scrolling');
  });
});

document.querySelector('.scroller').addEventListener('touchstart',function(){
  active = true;
  document.querySelectorAll('.scroller').forEach((scroller) => {
    scroller.classList.add('scrolling');
  });
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelectorAll('.scroller').forEach((scroller) => {
    scroller.classList.remove('scrolling');
  });
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelectorAll('.scroller').forEach((scroller) => {
    scroller.classList.remove('scrolling');
  });
});


window.addEventListener('load', () => {
    document.getElementsByTagName("main")[0].style.animation = "onload 0.3s ease-out forwards";
});

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const offset = button.dataset.carouselButton === "next" ?  1 : -1;
    button.addEventListener("click", () => {
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})




console.log('%c infavel menu', 'color: #5B86C6'); 