document.getElementById('url-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let url = document.getElementById('url-input').value.trim();

  // Prepend https:// if missing
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }

  document.getElementById('viewer').src = url;
});
