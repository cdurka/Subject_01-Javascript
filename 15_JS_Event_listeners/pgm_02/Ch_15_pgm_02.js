// Function to update the displayed key code details
function updateKeyCode(event) {
    const keyNameElement = document.getElementById('key-name');
    const keyCodeElement = document.getElementById('key-code');
    
    // Get the key name and key code from the event object
    const keyName = event.key === '' ? 'Space' : event.key;
    const keyCode = event.code;
    
    // Update the elements with the key name and key code
    keyNameElement.textContent = keyName;
    keyCodeElement.textContent = keyCode;
}

// Add an event listener to the document to handle keydown events
document.addEventListener('keydown', updateKeyCode);
