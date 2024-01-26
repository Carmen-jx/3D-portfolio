import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { OrbitControls } from "@react-three/drei";
import { Shiba} from '../models/Shiba';
import useAlert from "../hooks/useAlert";
import { Alert } from '../components/Alert';


const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading]= useState(false);
  const formRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setIsTyping(true);
    setForm({...form, [e.target.name]: e.target.value});
  };


  const handleSubmit =(e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Carmen",
        from_email: form.email,
        to_email: 'carmen.jx.lam@gmail.com',
        message: form.message 
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(()=> {
      setIsLoading(false);
      showAlert({show: true, text: 'Message sent successfully!', type: 'success'})
      
      setTimeout(()=>{
        setIsTyping(false)
        hideAlert();
        setForm({name: '', email: '', message: ''});
      }, [3000])
      
      
    }).catch((error)=>{
      setIsLoading(false);
      showAlert({show: true, text: "I didn't receive your message.", type: 'danger'})

      console.log(error);
    })
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[80% flex flex-col text-slate-100'>
        <h1 className='head-text'>Let's talk!</h1>

        <form className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}>
          <label className='text-slate-300 font-semibold'>
            Name
            <input type='text' 
            name='name' 
            className='input' 
            placeholder='Jane' 
            required
            value={form.name}
            onChange={handleChange}
            />
      
          </label>
          <label className='text-slate-300 font-semibold'>
            Email
            <input type='email' 
            name='email' 
            className='input' 
            placeholder=' ex. jane@gmail.com' 
            required
            value={form.email}
            onChange={handleChange}
            />
      
          </label>

          <label className='text-slate-300font-semibold'>
            Your Message
            <textarea 
            name='message'
            rows='4' 
            className='textarea' 
            placeholder='Let me know how I can help you!' 
            required
            value={form.message}
            onChange={handleChange}
            />
      
          </label>
          <button 
            type="submit"
            className="btn"
            disabled={isLoading}
          >
           { isLoading? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </div>

      <div className='= "lg:w-1/2 w-1/2 lg:h-auto md:h-[500px] h-[350px]'>
       
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={<Loader />}>
            
            <Shiba 
              isTyping={isTyping}
              position={[0.8, 0.5, 0.5]}
              rotation={[12, 0, 0]}
              scale={[2.5, 2.5, 2.5]}
            />
            <OrbitControls />
          </Suspense>
        </Canvas>
        <div className='draggable-overlay items-center' style={{
            position: 'absolute', // Positions the div over the Canvas
            top: '200px', // Adjust these values as needed
            left: '700px',
            cursor: 'move',
            backgroundColor: 'lightblue',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 1000 // Ensures the div is above the Canvas
          }}>
            Click and drag me around!
        </div>
      </div>
    </section>
  )
}

export default Contact