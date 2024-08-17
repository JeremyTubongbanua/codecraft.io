import React, { useState } from 'react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = () => {
        if (input.trim() !== '') {
            const newMessages = [...messages, { sender: 'You', text: input }];
            setMessages(newMessages);

            // Make API call to Wolfram Alpha
            const prompt = encodeURIComponent(input);
            const url = `http://166.48.20.39:3000/prompt`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: prompt })
            })
            .then(response => response.json())
            .then(data => {
                // Ensure data is valid
                console.log(data);
                if (data.error) {
                    console.log(data.error);
                }
                const botResponse = data.result;
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'Wolfram', text: botResponse }
                ]);
            })
            .catch(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'Wolfram', text: 'Error: Unable to get a response.' }
                ]);
            });

            setInput('');
        }
    };

    return (
        <div className="fixed bottom-5 right-5 w-72 bg-gray-800 text-white rounded-lg shadow-lg">
            <div
                className="bg-gray-900 p-3 rounded-t-lg cursor-pointer flex justify-between items-center"
                onClick={toggleChat}
            >
                <span>Chat Bot</span>
                <span className="text-xl">&times;</span>
            </div>
            {isOpen && (
                <div className="bg-gray-700 p-3 rounded-b-lg">
                    <div className="h-64 overflow-y-auto mb-3">
                        {messages.map((msg, index) => (
                            <div key={index} className="mb-2">
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        className="w-full p-2 rounded bg-gray-600 border-none"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                </div>
            )}
        </div>
    );
};

export default ChatBot;