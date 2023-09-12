export const copyToClipboard = () => {
  const emailToCopy = "ahannath.portfoliosite@gmail.com";

  // Create a temporary input element
  const tempInput = document.createElement("input");
  tempInput.value = emailToCopy;
  document.body.appendChild(tempInput);

  // Select the text within the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Execute the copy command
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Alert the user that the email has been copied
  alert("Email has been copied to the clipboard");
};
