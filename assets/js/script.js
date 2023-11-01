// Sample chat data in JSON format
const chatData = [
    { type: 'my-message', text: 'Hi, how can I help you?', time: '10:00 AM' },
    { type: 'friend-message', text: 'Hi, I have a question about the project.', time: '10:05 AM' },
    // Add more messages as needed
];



// Function to render chat messages
function renderChatMessages() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.innerHTML = '';

    chatData.forEach((message) => {
        const messageBox = document.createElement('div');
        messageBox.className = `message-box ${message.type}`;

        const messageText = document.createElement('p');
        messageText.textContent = message.text;

        const messageTime = document.createElement('span');
        messageTime.textContent = message.time;

        messageText.appendChild(messageTime);

        messageBox.appendChild(messageText);

        chatContainer.appendChild(messageBox);
    });
}

// Call the function to initially render chat messages
renderChatMessages();

function updateUser2FromUser1(user1ClassName, user2ClassName) {
    // Get the user1 elements
    const user1Elements = document.querySelectorAll(`.${user1ClassName}`);
    
    // Get the user2 elements
    const user2Elements = document.querySelectorAll(`.${user2ClassName}`);

    // Loop through each pair of user1 and user2 elements
    for (let i = 0; i < user1Elements.length; i++) {
        const user1Element = user1Elements[i];
        const user2Element = user2Elements[i];

        // Fetch the name from user1
        const userName = user1Element.textContent;

        // Create a new h4 element for user2 with the desired format
        const newUser2Element = document.createElement('h4');
        newUser2Element.innerHTML = `${userName}<br><span>Online</span>`;

        // Replace the content of user2 with the new element
        user2Element.innerHTML = newUser2Element.innerHTML;
    }
}

// Usage
updateUser2FromUser1('user1', 'user2');


function copyImageSrc(dp1ClassName, dp2ClassName) {
    const dp1Elements = document.querySelectorAll(`.${dp1ClassName}`);
    const dp2Elements = document.querySelectorAll(`.${dp2ClassName}`);

    dp1Elements.forEach((dp1Element, index) => {
        const dp2Element = dp2Elements[index];

        if (dp1Element.tagName === 'IMG' && dp2Element.tagName === 'IMG') {
            dp2Element.setAttribute('src', dp1Element.getAttribute('src'));
        }
    });
}

// Usage
copyImageSrc('dp1', 'dp2');



// Get references to the input box and send button
const inputBox = document.getElementById('messageInput');
const sendButton = document.querySelector('.fa-solid.fa-paper-plane');

// Add an event listener to the input box for the "Enter" key press
inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent line breaks in the input box

        const messageText = inputBox.value.trim();
        if (messageText) {
            chatData.push({ type: 'my-message', text: messageText, time: getCurrentTime() });
            renderChatMessages();
            inputBox.value = '';
        }
    }
});

// Add a click event listener to the send button
sendButton.addEventListener('click', () => {
    const messageText = inputBox.value.trim();
    if (messageText) {
        chatData.push({ type: 'my-message', text: messageText, time: getCurrentTime() });
        renderChatMessages();
        inputBox.value = '';
    }
});


// Function to get the current time in HH:mm AM/PM format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
