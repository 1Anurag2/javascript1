document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    addMessage(userInput, 'user-message');

    // Simulate bot response after a delay
    setTimeout(() => {
        const botResponse = generateBotResponse(userInput);
        addMessage(botResponse, 'bot-message');
    }, 1000);

    // Clear the input field
    document.getElementById('user-input').value = '';
});

function addMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.className = `chat-message ${className}`;
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userInput) {
    // Simple bot logic (replace with your own logic or API call)
    return "You said: " + userInput;
}
