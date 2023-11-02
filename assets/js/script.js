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



// Function to render chat messages for a specific chat container
function renderChatMessages(chatContainer, messages) {
    chatContainer.innerHTML = '';

    messages.forEach((message) => {
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

// Sample chat containers
const chatContainers = document.querySelectorAll('.chat-container');

// Sample chat data for each chat container
const chatData = [
    // Array of chat messages for the first chat container
    [
        { type: 'my-message', text: 'Hello!', time: '10:00 AM' },
        { type: 'friend-message', text: 'Hi there!', time: '10:05 AM' },
    ],
    // Array of chat messages for the second chat container
    [
        { type: 'my-message', text: 'Where are you?', time: '11:00 AM' },
        { type: 'friend-message', text: 'I\'ll be there', time: '10:49 AM' },
    ],
    // Array of chat messages for the second chat container
    [
        { type: 'my-message', text: 'How are you?', time: '11:00 AM' },
        { type: 'friend-message', text: '“Make somebody\'s day.”', time: '09:49 AM' },
    ],
    // Array of chat messages for the second chat container
    [
        { type: 'my-message', text: 'Hey?', time: '11:00 AM' },
        { type: 'friend-message', text: 'Dreams come true', time: '08:49 AM' },
    ],
    // Array of chat messages for the second chat container
    [
        { type: 'my-message', text: 'Are you ready?', time: '11:00 AM' },
        { type: 'friend-message', text: 'Awesome! I\'ll start a videocall', time: '11:05 AM' },
    ],
    // Array of chat messages for the second chat container
    [
        { type: 'my-message', text: 'How are you?', time: '11:00 AM' },
        { type: 'friend-message', text: 'I am good, thanks!', time: '11:05 AM' },
    ],
    // Array of chat messages for the second chat container
    [
        { type: 'my-message', text: 'How are you?', time: '11:00 AM' },
        { type: 'friend-message', text: 'I am good, thanks!', time: '11:05 AM' },
    ],
    // Array of chat messages for the second chat container
    [
        { type: 'my-message', text: 'How are you?', time: '11:00 AM' },
        { type: 'friend-message', text: 'I am good, thanks!', time: '11:05 AM' },
    ]
];

// Call the function to initially render chat messages for each chat container
chatContainers.forEach((chatContainer, index) => {
    renderChatMessages(chatContainer, chatData[index]);
});

// Get references to the input boxes and send buttons
const inputBoxes = document.querySelectorAll('[id^="messageInput"]');
const sendButtons = document.querySelectorAll('.fa-solid.fa-paper-plane');

// Add event listeners for each input box and send button
inputBoxes.forEach((inputBox, index) => {
    inputBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent line breaks in the input box

            const messageText = inputBox.value.trim();
            if (messageText) {
                chatData[index].push({ type: 'my-message', text: messageText, time: getCurrentTime() });
                renderChatMessages(chatContainers[index], chatData[index]);
                inputBox.value = '';
            }
        }
    });

    sendButtons[index].addEventListener('click', () => {
        const messageText = inputBox.value.trim();
        if (messageText) {
            chatData[index].push({ type: 'my-message', text: messageText, time: getCurrentTime() });
            renderChatMessages(chatContainers[index], chatData[index]);
            inputBox.value = '';
        }
    });
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
