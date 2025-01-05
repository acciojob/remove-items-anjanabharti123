//your JS code here. If required.
// Get the select element and the button
const colorSelect = document.getElementById('colorSelect');
const removeButton = document.querySelector('input[type="button"]');

// Function to remove the selected color from the dropdown
const removeColor = () => {
  // Get the selected option
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  
  // If an option is selected, remove it from the dropdown list
  if (selectedOption) {
    colorSelect.removeChild(selectedOption);
  }
};

// Add event listener to the button
removeButton.addEventListener('click', removeColor);
