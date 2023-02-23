// Initialize the Glide.js slideshow
let glide = new Glide('#slideshow', {
    type: 'carousel',
    perView: 1,
    autoplay: 5000,
    hoverpause: true,
    animationDuration: 1000,
});

// Get random photos from an Instagram account using the Instagram API
fetch('https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=ACCESS_TOKEN')
.then(response => response.json())
.then(data => {
    // Shuffle the photos randomly
    data.data.sort(() => Math.random() - 0.5);

    // Add the photos to the slideshow
    data.data.forEach(photo => {
    var img = document.createElement('img');
    img.src = photo.media_url;
    glide.add(img);
    });

    // Start the slideshow
    glide.mount();
});