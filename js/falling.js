function createFallingIcon() {
    // Get the dimensions of the viewport
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
  
    // Generate a random position for the pineapple icon
    let randomX = Math.floor(Math.random() * viewportWidth);
    let randomY = Math.floor(Math.random() * viewportHeight);
    let startX = Math.floor(Math.random() * viewportWidth);
    let startY = -100;
  
     // Define an array of image URLs
    let imageUrls = [
        './img/fork.png',
        './img/pineapple.png',
        './img/banana.png'
    ];

    // Pick a random image URL from the array
    let randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    // Create a new image element with the random URL
    let imageElement = document.createElement('img');
    imageElement.src = randomImageUrl;
    imageElement.classList.add('falling-icon');
    imageElement.style.top = randomY + 'px';
    imageElement.style.left = randomX + 'px';
  
    // Add the pineapple icon to the page
    document.body.appendChild(imageElement);

    // Calculate the parameters of the parabolic equation
    let a = -viewportHeight / (viewportWidth * viewportWidth);
    let b = viewportHeight / viewportWidth;
    let c = 1;

    // Calculate the x-coordinate of the highest point of the parabolic trajectory
    let apexX = startX + (viewportWidth / 2);

    // Animate the pineapple icon falling along the parabolic trajectory
    let t = 0;
    let interval = setInterval(function() {
    // Calculate the x and y coordinates of the pineapple icon
    let x = startX + t;
    let y = a * (x - apexX) * (x - apexX) + b * (x - apexX) + c;

    // Update the position of the pineapple icon
    imageElement.style.top = y + 'px';
    imageElement.style.left = x + 'px';

    // Increment the time letiable
    t += 5;

    // Remove the pineapple icon when it falls off the bottom of the screen
    if (y > viewportHeight) {
        clearInterval(interval);
        imageElement.parentNode.removeChild(imageElement);
    }
    }, 20);

    // Make the image visible after a random delay
    let randomDelay = Math.floor(Math.random() * 5000);
    setTimeout(function() {
    imageElement.style.visibility = 'visible';
    }, randomDelay);
  
    // Remove the pineapple icon after it falls off the bottom of the screen
    setTimeout(function() {
        imageElement.parentNode.removeChild(imageElement);
    }, 2000);
  }
  
  // Call the function every 2 seconds to create a new pineapple icon
  setInterval(createFallingIcon, 2000);