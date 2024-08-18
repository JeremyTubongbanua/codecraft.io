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
      const host = '166.48.20.39'; // 166.48.20.39

      const url = `http://${host}:3000/prompt`;
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            // If there's an error, display it
            setMessages((prevMessages) => [
              ...prevMessages,
              { sender: 'Wolfram', text: `Error: ${data.error}` },
            ]);
          } else {
            // Otherwise, display the result
            const botResponse =
              data.result || "Sorry, I couldn't find an answer.";
            setMessages((prevMessages) => [
              ...prevMessages,
              { sender: 'Wolfram', text: botResponse },
            ]);
          }
        })
        .catch((err) => {
          console.log(err);
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'Wolfram', text: 'Error: ' + err.message },
          ]);
        });

      setInput('');
    }
  };

  return (
    <div className="fixed bottom-2 right-2 w-72 rounded-lg bg-blue-500 text-white shadow-lg">
      <div
        className="flex cursor-pointer items-center justify-between rounded-t-lg p-3"
        onClick={toggleChat}
      >
        <span className="font-semibold">Wolfram Personal Tutor</span>
        <span className="text-xl font-semibold">&times;</span>
      </div>
      {isOpen && (
        <div className="rounded-b-lg bg-gray-600 p-3">
          <div className="mb-3 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 max-w-xs rounded-lg p-2 ${
                  msg.sender === 'You'
                    ? 'self-end bg-blue-400 text-white'
                    : 'self-start bg-gray-300 text-black'
                }`}
                style={{
                  alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                  borderRadius:
                    msg.sender === 'You'
                      ? '20px 20px 0 20px'
                      : '20px 20px 20px 0',
                }}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            className="w-full rounded border border-white bg-gray-600 p-2 font-semibold focus:outline-white"
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
