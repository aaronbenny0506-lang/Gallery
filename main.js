const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames from MDN's live server */
const images = [
  'https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images/pic1.jpg',
  'https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images/pic2.jpg',
  'https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images/pic3.jpg',
  'https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images/pic4.jpg',
  'https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images/pic5.jpg'
];

/* Declaring the alternative text for each image */
const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from an ancient Egyptian tomb',
  'pic5.jpg' : 'Large white butterfly on a green leaf'
};

/* Looping through images to build the thumbnail bar */
images.forEach((imgUrl, index) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', imgUrl);
  
  const shortName = `pic${index + 1}.jpg`;
  newImage.setAttribute('alt', alts[shortName]);
  thumbBar.appendChild(newImage);
  
  /* Adding a click event listener to each thumbnail image */
  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});