var body =document.querySelector('body');
body.style.visibility = 'hidden';

document.addEventListener("DOMContentLoaded", function() {
  adjustStyles();

  window.addEventListener('resize', adjustStyles);
});

function adjustStyles() {
  var tabs = document.querySelector('.md-tabs');
  var headerInner = document.querySelector('.md-header__inner.md-grid');
  var title = document.querySelector('.md-header__title');
  var ellipsis = document.querySelector('.md-ellipsis');
  var source = document.querySelector('.md-header__source');
  var content = document.querySelector('.md-content');
  var primarySidebar = document.querySelector('.md-sidebar--primary');
  var secondarySidebar = document.querySelector('.md-sidebar--secondary');


  if (tabs && headerInner && title && ellipsis && source && content && primarySidebar && secondarySidebar) {
    // get computed styles
    var tabsDisplay = window.getComputedStyle(tabs).display;
    var primaryDisplay = window.getComputedStyle(primarySidebar).display;
    var secondaryDisplay = window.getComputedStyle(secondarySidebar).display;

    // Reset all styles
    headerInner.style.width = '';
    content.style.width = '';
    content.style.flexGrow = '';
    headerInner.style.marginLeft = '';
    headerInner.style.visibility = 'visible'; // Always visible
    title.style.visibility = '';
    ellipsis.style.visibility = '';
    source.style.display = '';
    content.style.marginRight = '';
    body.style.visibility = 'hidden';

    // Check the conditions and apply styles accordingly
    if (tabsDisplay !== 'none') {
      var tabsWidth = tabs.offsetWidth + 'px';
      headerInner.style.width = tabsWidth;
      title.style.visibility = 'hidden';
      ellipsis.style.visibility = 'hidden';
      source.style.display = 'block';

      if (primaryDisplay !== 'none' || secondaryDisplay !== 'none') {
        content.style.width = tabsWidth;
        content.style.flexGrow = '0';
      }

      if (primaryDisplay !== 'none' && secondaryDisplay === 'none') {
        content.style.marginRight = primarySidebar.offsetWidth + 'px';
      }
    } else {
      headerInner.style.width = '100%';
      headerInner.style.marginLeft = '0';
      source.style.display = 'none';
      title.style.visibility = 'visible';
      ellipsis.style.visibility = 'visible';
    }

    if (primaryDisplay === 'none' && secondaryDisplay === 'none') {
      content.style.width = '95%';
      content.style.flexGrow = '1';
    }
  } else {
    console.log("One or more elements are missing from the DOM.");
  }
  body.style.visibility = 'visible';
}

// set paths of the footer logos dynamically depending on host
document.addEventListener('DOMContentLoaded', () => {
  var copy1;
  var copy2;
  var copy3;
  var hostname = window.location.hostname;
  var pathname = window.location.pathname;

  if (hostname === 'localhost') {
    copy1 = "/medien/logo-rub.png";
    copy2 = "/medien/logo-worldfactory.png";
    copy3 = "/medien/logo-esc.png";
  } 
  else if (hostname.includes('makerspace.ruhr-uni-bochum.de')) {
    copy1 = "/medien/logo-rub.png";
    copy2 = "/medien/logo-worldfactory.png";
    copy3 = "/medien/logo-esc.png";
  } 
  else if (hostname.includes('ruhr-uni-bochum.de') && pathname.includes('/makerspace/')) {
    copy1 = "/makerspace/medien/logo-rub.png";
    copy2 = "/makerspace/medien/logo-worldfactory.png";
    copy3 = "/makerspace/medien/logo-esc.png";
  }

  document.getElementById('copyright1').src = copy1;
  document.getElementById('copyright2').src = copy2;
  document.getElementById('copyright3').src = copy3;
});




