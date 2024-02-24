function genQR() {
  // Base URL for Google Chart API
  const baseURL = "https://chart.googleapis.com/chart";

  // Get DOM elements
  const myimg = document.getElementById("img");
  const mytext = document.getElementById("qrtext").value.trim();
  const mysize = parseInt(document.getElementById("size").value, 10);

  // Check if text input is empty
  if (mytext === "") {
    alert("Please Enter Text");
    return;
  }

  // Validate size input
  if (isNaN(mysize) || mysize < 100 || mysize > 300 || mysize % 50 !== 0) {
    alert("Invalid size. Please enter a size between 100 and 300 in multiples of 50.");
    return;
  }

  // Construct URL
  const qrURL = `${baseURL}?cht=qr&chs=${mysize}x${mysize}&chl=${encodeURIComponent(mytext)}`;

  // Set image source
  myimg.src = qrURL;
}
