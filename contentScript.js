function setCursorToGoogleSearchInput() {
    const searchInput = document.querySelector('.goog-textarea');
    if (searchInput) {
      searchInput.focus();
    }
  }
  
  // Execute the function when the page has finished loading
  window.addEventListener('load', setCursorToGoogleSearchInput);
  