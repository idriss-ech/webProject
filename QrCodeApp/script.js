function generateQR() {
  const inputText = document.getElementById("inputText").value;
  const img = document.getElementById("qrCode");
  if (inputText === "") {

    document.querySelector('.hi').classList.add("move");
    setTimeout(() => {
         document.querySelector('.hi').classList.remove("move");
    }, 1000);
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;
    img.style.display = "block";
  }
}

// function

