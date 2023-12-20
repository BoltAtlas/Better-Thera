import React, { useState } from 'react';
import { Button } from './Button';
import '../Styles/Thera.css';

function Thera() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      return;
    }

    const userMessage = { name: 'User', message: text };
    const theramessage = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: text }),
    })
      .then((response) => response.json())
      .then((response) => ({ name: 'Thera', message: response.answer }))
      .catch((error) => {
        console.error('Error:', error);
        return { name: 'Thera', message: 'An error occurred' };
      });

    setMessages([...messages, userMessage, theramessage]);
    setText('');
  };



  const updateChatText = () => {
    const messagesDiv = document.getElementById('chatMessageDiv');

    return messages
      .slice()
      .map((item, index) => (
        <div
          key={index}
          className={`messages__item messages__item--${item.name.toLowerCase()}`}
        >
          {item.message}
        </div>
      ))
      .concat(
        <div key="scrollToBottomRef" ref={(el) => el && el.scrollIntoView({ behavior: 'smooth' })} />
      );
  };

  return (
    <>
      <div className="chatbox">
        <div className="Chathead">
          <div className="Chatheadtext">Welcome to Thera</div>
        </div>
        <div className="Chatmessage">{updateChatText()}</div>
        <form onSubmit={handleSubmit} className="chatfoot">
          <label htmlFor="Message"></label>
          <input
            type="text"
            autoComplete="off"
            placeholder=" Write here...."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter'}
          />
          <Button type="submit" buttonStyle="btn--outline">
            Send
          </Button>
        </form>
      </div>
    </>
  );
}

export default Thera;
