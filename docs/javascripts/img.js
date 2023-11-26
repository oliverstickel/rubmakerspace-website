window.onload = function() {
  // Extract the path from the URL
  var path = window.location.pathname;

  // If the path includes "news", return and do nothing
  if (path.toLowerCase().includes("news")) {
    return;
  }

  // The original padding-top ratio
  var originalPaddingTopRatio = 66.42 / 100;

  // Select all p elements
  var paragraphs = document.querySelectorAll('p');

  // Loop through all p elements
  paragraphs.forEach(function(p) {
    // Select all img elements within the current p element
    var images = p.querySelectorAll('img');

    // If there are two or more images
    var multipleImages = images.length >= 2;

    // Loop through the img elements
    images.forEach(function(img) {
      // Check if the alt text includes "logo"
      if (img.alt.toLowerCase().includes("logo")) {
        return; // Skip this image
      }

      // Initially hide the image
      img.style.visibility = 'hidden';

      // Create a new div with the class "image-container"
      var container = document.createElement('div');
      container.className = 'image-container';

      // Replace the img in the DOM with the container
      img.parentNode.replaceChild(container, img);

      // If multiple images, adjust the container's width and padding-top
      if (multipleImages) {
        container.style.width = '48%';
        var newPaddingTopRatio = originalPaddingTopRatio * 0.75;
        container.style.paddingTop = newPaddingTopRatio * 100 + '%';
      }

      // Append the img to the container
      container.appendChild(img);

      // If multiple images, adjust the img's width and height
      if (multipleImages) {
        img.style.width = '100%';
      }

      // Extract copyright info from alt text
      var altText = img.alt;
      var copyrightIndex = altText.indexOf("@");
      var copyrightText = copyrightIndex !== -1 ? altText.substring(copyrightIndex) : '';

      // Replace "@" with "©" in the copyright text
      copyrightText = copyrightText.replace("@", "©");

      // Assign copyright text and create copyright div only if there's a copyright text
      if (copyrightText) {
        var copyright = document.createElement('div');
        copyright.className = 'custom-copyright';
        copyright.textContent = copyrightText;
        container.appendChild(copyright);
      }

      // Make the image visible again after it has been formatted
      img.style.visibility = 'visible';
    });
  });
}
