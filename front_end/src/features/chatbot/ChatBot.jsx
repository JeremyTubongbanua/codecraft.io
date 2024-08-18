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
  
      const prompt = encodeURIComponent(input);
      const hosts = ['166.48.20.39', 'jeremymark.ca'];
      
      const tryFetch = async (host) => {
        const url = `http://${host}:3000/prompt`;
        
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: prompt }),
          });
  
          const data = await response.json();
  
          if (!response.ok || data.error) {
            throw new Error(data.error || 'Request failed');
          }
  
          return data;
        } catch (err) {
          console.log(`Failed to connect to ${host}: ${err.message}`);
          throw err; // Re-throw to handle in the calling loop
        }
      };
  
      (async () => {
        for (const host of hosts) {
          try {
            const data = await tryFetch(host);
  
            const botResponse = data.result || "Sorry, I couldn't find an answer.";
            setMessages((prevMessages) => [
              ...prevMessages,
              { sender: 'Wolfram', text: botResponse },
            ]);
            break; // Exit the loop once successful
          } catch (err) {
            if (host === hosts[hosts.length - 1]) { // If this was the last host
              setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'Wolfram', text: 'Error: ' + err.message },
              ]);
            }
          }
        }
      })();
  
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-2 right-2 w-72 rounded-lg bg-yellow-300 text-gray-700 shadow-lg">
      <div
        className="flex cursor-pointer items-center justify-between rounded-t-lg p-3"
        onClick={toggleChat}
      >
        <span className="font-bold">Wolfram Personal Tutor</span>
        <span className="text-xl font-semibold">&times;</span>
      </div>
      {isOpen && (
        <div className="rounded-b-lg bg-gradient-to-t from-gray-600 to-yellow-300 p-3">
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
            className="w-full rounded border border-white bg-gray-600 p-2 font-semibold text-white focus:outline-white"
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
