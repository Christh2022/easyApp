import React, { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
    
    const form = useRef();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [done, setDone]= useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2cm3wa2', 'template_7bjx2p6', form.current, 'BGucEd0ISzKnnMVsl')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
        setName("")
        setEmail("")
        setMessage("")
    };
    return (
        <div id='Contact' className='contact-form'>
            <div className='w-left'>
                <div className='awesome'>
                    <span>Entrer en contact</span>
                    <span>Nous contacter</span>
                    <div 
                        className='blur' 
                        style={{background: '#ABF1FF94',  left: '-5rem', top: '8rem'}}
                    ></div>
                </div>
            </div>
            <div className='c-right'>        
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Nom' value={name} onChange={(e)=>setName(e.target.value)} />
                    <input type='email' name='user_email' className='user' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <textarea  name='message' className='user' placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)} />
                    <button className='button' type='submit'>Envoyer</button>
                    <span>{done && "Merci de nous avoir contacté"}</span>
                    <div
                        className='blur c-blur1' 
                        style={{background: 'var(--purple)',
                        top: '-8rem',
                        left: '50rem'
                    }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;