const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Array pointing directly to your uploaded image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Alt texts assigned dynamically to your specific images */
const alts = {
  'pic1.jpg' : 'Cute cat looking closely',
  'pic2.jpg' : 'Friendly dog sitting down',
  'pic3.jpg' : 'Beautiful butterfly on a flower',
  'pic4.jpg' : 'Scenic nature view',
  'pic5.jpg' : 'Bright moon glowing in the night sky'
};

/* Dynamically looping through your repository files to construct the thumb bar */
images.forEach((imgFile) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', imgFile);
  newImage.setAttribute('alt', alts[imgFile]);
  thumbBar.appendChild(newImage);
  
  /* Changes the main showcase box when you click any thumbnail */
  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
});

/* Darken/Lighten dimmer effect filter logic */
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
