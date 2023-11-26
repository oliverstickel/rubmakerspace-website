// Listen for the 'load' event of the window to ensure all elements and resources are fully loaded.
window.addEventListener('load', function() {
    
    // Get a reference to the iframe with the ID 'calendar'.
    const iframe = document.getElementById('calendar');

    /**
     * Update the color scheme of the iframe based on the palette stored in localStorage.
     */
    var updateIframeColor = function() {
        // Use setTimeout to delay the execution. This can be useful in scenarios where
        // the iframe's content might not be immediately accessible.
        setTimeout(function() {
            
            // Try fetching the palette from two different keys in localStorage to account for 
            // different hosting environments.
            var palette = JSON.parse(localStorage.getItem('/homepage/.__palette')) || JSON.parse(localStorage.getItem('/.__palette'));
            
            let colorSchemeValue;
            // Check if the palette exists and has an index value of 1 (indicating the 'slate' color scheme).
            if (palette && palette.index === 1) {
                colorSchemeValue = 'slate';
            } else {
                // Default to 'default' color scheme if the condition isn't met.
                colorSchemeValue = 'default';
            }
            
            // Check if the iframe's contentDocument and body are accessible.
            if (iframe.contentDocument && iframe.contentDocument.body) {
                // Set the color scheme attribute on the iframe's body.
                iframe.contentDocument.body.setAttribute('data-md-color-scheme', colorSchemeValue);
            }
            
        }, 100); // Execute the inner function after a delay of 100 milliseconds.
    };

    // Initially call the updateIframeColor function to set the color scheme when the page loads.
    updateIframeColor();

    // Get references to the input elements for light mode and dark mode.
    var lightModeInput = document.getElementById('__palette_1');
    var darkModeInput = document.getElementById('__palette_2');

    // Check if both input elements are present in the document.
    if(lightModeInput && darkModeInput) {
        // If the inputs exist, attach event listeners to them to update the iframe color scheme
        // whenever the user changes the input value (i.e., selects a different color scheme).
        lightModeInput.addEventListener('input', updateIframeColor);
        darkModeInput.addEventListener('input', updateIframeColor);
    }
});

