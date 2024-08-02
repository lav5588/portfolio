import {  useState } from "react";
import { BsSend } from "react-icons/bs";
import Button from "./Button";
import emailjs from '@emailjs/browser';
import toast, { ToastBar, Toaster } from 'react-hot-toast';


function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}


const Contact = () => {
  const [form,setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const sendMail = (e)=>{
    e.preventDefault();
    const {name,email,message} = form;
    
    if(!name || !email || !message){
      // console.log("Please enter all the required fields")
      toast.error("Please enter all the required field");
      return;
    } 
    if(!validateEmail(email)){
      // console.log("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      setForm({
        ...form,
        email: '',
      })
      return;
    }
    const toastId = toast.loading("Please wait your message has been sending...");
    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.dismiss(toastId);
          // console.log('SUCCESS!');
          toast.success("Successfully your message has been sent. We will contact You.");
        },
        (error) => {
          toast.dismiss(toastId);
          // console.log('FAILED...', error.text);
          toast.error(`Failed to send query: ${error.text}`);
        },
      );
      setForm({
        name: '',
        email: '',
        message: '',
      })
  }
  return (
    <div  className="gap-10 flex flex-col justify-center items-center">

      <div>
        <h1 className="text-center text-Brand1 text-3xl border border-2 border-Brand1 px-5 py-2 rounded-tl-[2rem] rounded-br-[2rem]">Send me a Message</h1>
      </div>
      <div className="flex flex-wrap gap-3 justify-between items-center w-full">
        <div className="flex flex-col flex-1 min-w-[200px] md:max-w-[calc(50%-1rem)]">
          <label htmlFor="name" className="text-Brand1 text-xs">Your Name*</label>
          <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required type="text" className="bg-BG2 text-White outline-none p-2 w-full" placeholder="Enter Your Name" />
          <div className="h-[0.1rem] bg-Brand1"></div>
        </div>
        <div className="flex flex-col flex-1 min-w-[200px] md:max-w-[calc(50%-1rem)]">
          <label htmlFor="email" className="text-Brand1 text-xs">Your Email*</label>
          <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required type="text" className="bg-BG2 text-White outline-none p-2 w-full" placeholder="Enter Your Email" />
          <div className="h-[0.1rem] bg-Brand1"></div>
        </div>
      </div>
      <div className="flex flex-col w-full md:max-w-[calc(100%-1rem)]">
        <label htmlFor="message" className="text-Brand1 text-xs">Your Message*</label>
        <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}  required type="text" className="bg-BG2 text-White outline-none p-2 w-full" placeholder="Enter Your needs" />
        <div className="h-[0.1rem] bg-Brand1"></div>
      </div>
      <div onClick={sendMail}>
        <Button  className="bg-Brand1">
          Send Message &nbsp;
          <BsSend className="inline" />
        </Button>
      </div>
      <Toaster />
    </div>
  )
}

export default Contact;
