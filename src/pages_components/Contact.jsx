import React from 'react';
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { ImWhatsapp } from 'react-icons/im'
import { useRef } from 'react';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_17pyr9r', 'template_1m8zakk', form.current, 'XqT6PBNLhbBRW2ZYO')

        e.target.reset()

    };


    return (
        <section id='contact'>
            <div className='contact-head'>
                <h5>Restons en contact</h5>
                <h2>Contactez Nous !</h2>
            </div>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>contact@lookgrandma.com</h5>
                        <a href="mailto:contact@lookgrandma.com" target='_blank'>Envoyez un message</a>

                    </article>
                    <article className='contact__option'>
                        <AiOutlineLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>

                        <h5>Look Grand'MA !</h5>
                        <a href="https://www.linkedin.com/in/jeremy-francois/" target='_blank'> Retrouvez nous</a>

                    </article>
                    <article className='contact__option'>
                        <ImWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>06 69 69 69 69</h5>
                        <a href="https://wa.me/0669696969" target='_blank'>Appelez nous</a>

                    </article>
                </div>
                {/*END OF CONTACT OPTION*/}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Votre Nom' required />
                    <input type="email" name='email' placeholder='Votre Email' required />
                    <textarea name="message" rows="7" placeholder="Votre Message" required></textarea>
                    <button type='submit' className='btn-primary'>Envoyez</button>

                </form>

            </div>
        </section>
    )
}

export default Contact
