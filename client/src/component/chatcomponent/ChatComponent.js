import React, { useRef } from 'react';
import './chatComponent.css';
import send from './assets/send.svg';
import user from './assets/user.svg';
import bot from './assets/bot.svg';


const ChatComponent = () => {
  const form = useRef(null);
  const chatContainer = useRef(null);
  

  let loadInterval;

  const loader = (element) => {
    element.textContent = '';
    loadInterval = setInterval(() => {
      element.textContent += '.';

      if (element.textContent === '....') {
        element.textContent = '';
      }
    }, 300);
  };

  const typeText = (element, text) => {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);
  };

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  };

  const chatStripe = (isAi, value, uniqueId) => {
    return `
      <div class="wrapper ${isAi ? 'ai' : ''}">
        <div class="chatComponent">
          <div class="profile">
            <img src="${isAi ? bot : user}" alt="${isAi ? 'bot' : 'user'}" />
          </div>
          <div class="message" id=${uniqueId}>${value}</div>
        </div>
      </div>
    `;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(form.current);

    // user's chatStripe
    chatContainer.current.innerHTML += chatStripe(false, data.get('prompt'), generateUniqueId());

    form.current.reset();

    // bot's chatStripe
    const uniqueId = generateUniqueId();
    chatContainer.current.innerHTML += chatStripe(true, '', uniqueId);

    chatContainer.current.scrollTop = chatContainer.current.scrollHeight;

    const messageDiv = document.getElementById(uniqueId);

    loader(messageDiv);

    const response = await fetch('https://etude-facile.onrender.com', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json", 
      },
      body: JSON.stringify({
        prompt: data.get('prompt')
      })
    })

    clearInterval(loadInterval)
    messageDiv.innerHTML = ''

    if(response.ok){
      const data = await response.json();
      const parseData = data.bot.trim();

      typeText(messageDiv, parseData)
    } else {
      const err = await response.text()
      messageDiv.innerHTML = "quelque choses ne va pas"
      console.log(err)
    }

  }

  return (
    <>
      
      <div className='content'>
        
        <div ref={chatContainer} className="chat_container"></div>
        <form ref={form} onSubmit={handleSubmit} onKeyUp={(e) => (e.keyCode === 13 ? handleSubmit(e) : null)}>
          <textarea name="prompt" rows="1" cols="1" placeholder="Que cherchez-vous" />
          <button type="submit">
            <img src={send} alt="send" />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatComponent;
