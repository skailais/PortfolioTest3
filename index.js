function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function upgateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(upgateCounter, delay);
  }

  upgateCounter();
}

startLoader();

gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
});

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

const $ = jQuery;
// Button Variables
const portfolioBtn = $(".portfolioBtn");
const aboutBtn = $(".aboutBtn");
const returnHomeBtn = $(".returnHomeBtn");
// Container Variables
const mainIndexMe = $(".main-index-me");
const swipero = $(".swiper");
const badBox = $(".bad-container");
const introHead = $(".main-index-intro-head");
const introText = $(".main-index-intro-text");
const portfolioHead = $(".main-index-intro-portfolio-head");
const portfolioText = $(".main-index-intro-portfolio-text");
const aboutHead = $(".main-index-intro-about-head");
const aboutText = $(".main-index-intro-about-text");

portfolioHead.hide();
portfolioText.hide();
aboutHead.hide();
aboutText.hide();
swipero.hide();

// Show the great form and hide the rating container
portfolioBtn.click(() => {
  mainIndexMe.hide();
  introHead.hide();
  introText.hide();
  portfolioHead.show();
  portfolioText.show();
  swipero.show();
  aboutHead.hide();
  aboutText.hide();
});

// Show the bad form and hide the rating container
aboutBtn.click(() => {
  mainIndexMe.hide();
  introHead.hide();
  introText.hide();
  aboutHead.show();
  aboutText.show();
  portfolioHead.hide();
  portfolioText.hide();
});

returnHomeBtn.click(() => {
  mainIndexMe.show();
  introHead.show();
  introText.show();
  aboutHead.hide();
  aboutText.hide();
  portfolioHead.hide();
  portfolioText.hide();
  swipero.hide();
});
