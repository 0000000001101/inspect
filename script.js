(function() {
  const form = document.getElementById('url-form');
  const input = document.getElementById('url-input');
  const viewer = document.getElementById('viewer');

  // Load URL from query param on start
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('url');
  if (initial) {
    input.value = initial;
    loadURL(initial);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let url = input.value.trim();
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
      input.value = url;
    }
    // update address bar without reload
    const newURL = new URL(window.location);
    newURL.searchParams.set('url', url);
    window.history.replaceState({}, '', newURL);
    loadURL(url);
  });

  function loadURL(url) {
    viewer.src = url;
  }
})();
