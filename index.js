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
