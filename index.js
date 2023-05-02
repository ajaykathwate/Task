let file = document.getElementById("myfile");
let message = document.getElementById("message");
let logoName = document.getElementById("logo-name");

file.addEventListener("input", () => {
  console.log(file.files);
  if (file.files.length) {
    console.log(file.value);

    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg)$/i;

    if (!allowedExtensions.exec(file.value)) {
      message.style.color = "red";
      message.innerHTML = "File is not an image & .png and .jpg files only.";
      return;
    }

    let fileName = file.files[0].name;

    let typeOfFile = "";
    if (/(\.jpg)$/i.exec(file.value)) {
      typeOfFile = ".jpg";
      fileName =
        fileName.length > 10
          ? fileName.substring(0, 10) + "... " + typeOfFile
          : fileName;
    } else {
      typeOfFile = ".jpeg";
      fileName =
        fileName.length > 10
          ? fileName.substring(0, 10) + "... " + typeOfFile
          : fileName;
    }
    console.log("filename: " + fileName);

    if (file.files[0].size > 5000 * 1024) {
      message.style.color = "red";
      message.innerHTML = "File size exceeds 5MB!";
      return;
    }

    const logoSrc = URL.createObjectURL(file.files[0]);
    const logoPreviewElement = document.querySelector("#logo-preview");
    logoPreviewElement.src = logoSrc;
    logoPreviewElement.style.display = "block";

    console.log(file.files[0].name);
    logoName.innerHTML = `${fileName}`;
  }
});

const changeUmbrella = (newColor) => {
  var newColorNow = newColor.src;
  console.log(newColorNow);
  let selectedColor = document.getElementById("img-umbrella");
  selectedColor.src = newColorNow;
  console.log(selectedColor.src);
};
