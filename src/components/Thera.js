import React, { useState } from 'react';
import { Button } from './Button';
import "../Styles/Thera.css";




function Thera() {

    const [Input, setInput] = useState({
        Message: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setInput({...Input,[name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_input: Input }),
          });

        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <>
            <div className="chatbox">
                <div className="Chathead">
                    <div className="ChatheadImage">
                        <img src="/Images/Therabeta.png" alt="thera"/>
                    </div>
                    <div className="Chatheadtext">
                        Chat away!
                    </div>
                </div>
                <div className="Chatmessage">
                </div>
                <form type="submit" onSubmit={handleSubmit} className="chatfoot">
                    <label htmlFor="Message"></label>
                    <input type="text" autoComplete='off'
                    placeholder='Write here'
                    value={Input.Message}
                    onChange={handleInput}
                    name="Message" id="Message"/>
                <Button type="submit" buttonStyle='btn--outline'>
                        Send
                </Button>
                </form>
            </div>
        </>
    )
}

export default Thera;