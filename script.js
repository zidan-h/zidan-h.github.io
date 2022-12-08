
// Set the initial index for the slideshow
var currentIndex = 0;

// Define an array of image URLs for the slideshow
var images = [  "https://drive.google.com/file/d/1nFuYCKyDRPAlAwBVHBYLdCFDYXgwoAmB/view?usp=share_link",  "https://drive.google.com/file/d/1c3qAu7ypsGhrjFW4HYCZZvlenta2JWzu/view?usp=share_link"];

// Get the element that will contain the slideshow
var slideshow = document.getElementById("slideshow");

// Set the initial image for the slideshow
slideshow.src = images[currentIndex];

// Define a function for moving to the next image in the slideshow
function nextImage() {
  // Increment the current index
  currentIndex = currentIndex + 1;

  // If the current index is greater than the number of images, reset it to 0
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }

  // Update the slideshow image with the next image
  slideshow.src = images[currentIndex];
}

// Set an interval for moving to the next image every 5 seconds
setInterval(nextImage, 5000);
