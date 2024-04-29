document.addEventListener("DOMContentLoaded", function() {
    const addImageButton = document.getElementById("addImageButton");
    const submissionMessage = document.getElementById("submissionMessage");
    const nameInput = document.getElementById("nameInput");
    const imageUpload = document.getElementById("imageUpload");
    const agreeCheckbox = document.getElementById("agreeCheckbox");
  
    addImageButton.addEventListener("click", function() {
      const name = nameInput.value;
      const image = imageUpload.files[0];
  
      if (name.trim() === "") {
        alert("Please enter your name.");
        return;
      }
  
      if (!agreeCheckbox.checked) {
        alert("Please agree to the terms.");
        return;
      }
  
      if (!image) {
        alert("Please select an image.");
        return;
      }
  
      // Simulate image submission process
      // For demonstration purposes, we're just showing the submission message
      submissionMessage.style.display = "block";
  
      // Clear input fields
      nameInput.value = "";
      imageUpload.value = "";
      agreeCheckbox.checked = false;
  
      // After 3 seconds, hide the submission message
      setTimeout(function() {
        submissionMessage.style.display = "none";
      }, 5000);
    });
  });