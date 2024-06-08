import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaRegCopyright } from "react-icons/fa6";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kd6bdoq', 'template_t79wrrh', form.current, '2gK5oqZ0x9YePSIee');
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <h5>Get In Touch</h5>
      <div className='container contact_us_container'>
        <div className='form-div'>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name="name" placeholder='Your Full Name' required />
            <input type='email' name="email" placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'> <FaLocationArrow/> Send Message</button>
          </form>
        </div>
        <div className='contact-content'>
          <div className='info-content'>
            <div className='info-title'><FaLocationDot/> Address</div>
            <div> 123 Main Street</div>
            <div>Citytown, Stateville 98765</div>
            <div>Countryland</div>
          </div>
          <div className='info-content'>
            <div className='info-title'><IoCallSharp/> Contact</div>
            <div>+91 9025186639 </div>
          </div>
          <div className='info-content'>
            <div className='info-title'><IoShareSocial/> Follow Us</div>
            <div><MdAlternateEmail/> vShirt12iob@email.com</div>
            <div><TiSocialInstagram/> https://www.instagram.com/v-shirt</div>
            <div><TiSocialLinkedin/> https://www.linkedin.com/in/v-shirt</div>
          </div>
          <div className='copy-rigth'>
            http://www.v-shirt-12asdas-iob.com
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact