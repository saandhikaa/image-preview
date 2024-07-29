function displayImage() {
  const imageUrl = document.getElementById("imageUrlInput").value;
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image from URL">`;
}

function clearInput() {
  document.getElementById("imageUrlInput").value = '';
  document.getElementById("imageContainer").innerHTML = '';
}
