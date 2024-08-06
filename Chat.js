import React, { useState } from 'react';
import './Chat.scss';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { content: input, sender: 'User' }]);
    setInput('');
  };

  return (
    <section id="chat" className="chat">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg.content}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب رسالة..."
        />
        <button type="submit">أرسل</button>
      </form>
    </section>
  );
};

export default Chat;
