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

    const ms1 = { name: 'User', message: text };
    setMessages([...messages, ms1]);

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: text }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const msg2 = { name: 'Thera', message: response.answer };
        setMessages([...messages, msg2]);
        setText('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setText('');
      });
  };

  const updateChatText = () => {
    return messages
      .slice()
      .reverse()
      .map((item, index) => (
        <div
          key={index}
          className={`messages__item messages__item--${item.name.toLowerCase()}`}
        >
          {item.message}
        </div>
      ));
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
