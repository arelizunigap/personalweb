document.getElementById('imgUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('portfolio-img').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
