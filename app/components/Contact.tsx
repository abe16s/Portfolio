"use client";
import React from "react";
import { LampContainer } from './lamp'
import { FaEnvelope, FaFacebook, FaGithub, FaHouse, FaInstagram, FaLinkedin, FaPhone, FaTelegram, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="mt-52">
        <LampContainer>
            <div></div>
            <div className="flex items-stretch justify-around">
                <div className="flex flex-col items-center justify-center gap-8">
                    <ul className="flex gap-4 text-3xl justify-around">
                        <li><a href="https://www.instagram.com/abe16s/" target="_blank"><FaInstagram/></a></li>
                        <li><a href="https://www.facebook.com/abenezer.seifu" target="_blank"><FaFacebook/></a></li>
                        <li><a href="https://twitter.com/AbenezerSeifu5" target="_blank"><FaXTwitter/></a></li>
                        <li><a href="https://www.linkedin.com/in/abenezer-seifu/" target="_blank"><FaLinkedin/></a></li>
                        <li><a href="https://t.me/Abe16s" target="_blank"><FaTelegram/></a></li>
                        <li><a href="https://github.com/abe16s" target="_blank"><FaGithub/></a></li>
                    </ul>
                    <ul>
                        <li><a className="flex gap-2" href="https://maps.app.goo.gl/G7qLqXABwttEgCfZA" target="_blank"><FaHouse/><span>King George VI St, Addis Ababa, Ethiopia</span></a></li>
                        <li><a className="flex gap-2" href="tel:+251936120470"><FaPhone/> <span>+251936120470</span></a></li>
                        <li><a className="flex gap-2" href="mailto:abenezerseifu123@gmail.com"><FaEnvelope/> <span>abenezerseifu123@gmail.com</span></a></li>
                    </ul>
                </div>
                <form className="p-3 flex flex-col text-black w-11/12 max-w-[500px]">
                    <p className="text-center text-white text-extrabold text-lg">Get in touch</p>
                    <input className="my-1 mx-auto rounded-md p-1 border-2 border-blue-500 text-white bg-transparent w-4/5" id="name" type="text" placeholder="Full Name" name="FullName"/>
                    <input className="my-1 mx-auto rounded-md p-1 border-2 border-blue-500 text-white bg-transparent w-4/5" id="email" type="email" placeholder="Email" name="Email"/>
                    <input className="my-1 mx-auto rounded-md p-1 border-2 border-blue-500 text-white bg-transparent w-4/5" id="subject" type="text" placeholder="Subject" name="subject"/>
                    <textarea className="my-1 mx-auto rounded-md px-1 border-2 border-blue-500 text-white bg-transparent w-4/5" name="message" id="message" cols={30} rows={5} placeholder="Message"></textarea>
                    {/* <p className="text-slate-200"><i className="fa-regular fa-circle-check"></i>Submitted successfully! Thank you for your message!</p>
                    <p className="text-slate-200"><i className="fa-solid fa-exclamation"></i>There was an error submitting your message. Please try again.</p> */}
                    <button type="submit" className="mt-5 border-2 border-blue-500 text-white rounded-md w-1/3 p-2 mx-auto">Submit</button>
                </form>
            </div> 
        </LampContainer>
    </div>
  )
}

export default Contact