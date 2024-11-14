"use client";
import React, { useState } from "react";
import { LampContainer } from './lamp'
import { FaCircleCheck, FaEnvelope, FaExclamation, FaFacebook, FaFile, FaGithub, FaHouse, FaInstagram, FaLinkedin, FaPhone, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";

interface FormData {
    FullName: string;
    Email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const [submissionError, setSubmissionError] = useState<string | null>(null);
    const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

    const form = useForm<FormData>({
        defaultValues: {
            FullName: "",
            Email: "",
            subject: "",
            message: ""
        },
        mode: "onChange"
    })
    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState


    const onSubmit = (data: FormData) => {
        setSubmissionError(null); 
        setSubmissionSuccess(false);
        fetch(process.env.NEXT_PUBLIC_EMAIL as string || '', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.FullName,
                email: data.Email,
                subject: data.subject,
                message: data.message
            })
        })
        .then(response => response.json())
        .then(data => {
            setSubmissionError(null); 
            setSubmissionSuccess(true);
            reset(); 
        })
        .catch(error => {
            setSubmissionError(error.message);
            setSubmissionSuccess(false); 
        });
    }

  return (
    <div id="contact" className="mt-52">
        <LampContainer>
            <div className="flex items-stretch justify-around w-4/5 mx-auto flex-col md:flex-row py-8 md:py-0 gap-4">
                <div className="flex flex-col items-center justify-center gap-8">
                    <ul className="flex gap-4 text-xl md:text-3xl justify-around">
                        <li><a href="https://www.instagram.com/abe16s/" target="_blank" className="hover:text-blue-500"><FaInstagram/></a></li>
                        <li><a href="https://www.facebook.com/abenezer.seifu" target="_blank" className="hover:text-blue-500"><FaFacebook/></a></li>
                        <li><a href="https://twitter.com/AbenezerSeifu5" target="_blank" className="hover:text-blue-500"><FaXTwitter/></a></li>
                        <li><a href="https://www.linkedin.com/in/abenezer-seifu/" target="_blank" className="hover:text-blue-500"><FaLinkedin/></a></li>
                        <li><a href="https://t.me/Abe16s" target="_blank" className="hover:text-blue-500"><FaTelegram/></a></li>
                        <li><a href="https://github.com/abe16s" target="_blank" className="hover:text-blue-500"><FaGithub/></a></li>
                    </ul>
                    <ul>
                        <li><a className="flex gap-2 items-baseline" href="https://maps.app.goo.gl/G7qLqXABwttEgCfZA" target="_blank"><FaHouse/><span className="hover:text-blue-500">King George VI St, Addis Ababa, Ethiopia</span></a></li>
                        <li><a className="flex gap-2 items-baseline" href="tel:+251936120470"><FaPhone/> <span className="hover:text-blue-500">+251936120470</span></a></li>
                        <li><a className="flex gap-2 items-baseline" href="mailto:abenezerseifu123@gmail.com"><FaEnvelope/> <span className="hover:text-blue-500">abenezerseifu123@gmail.com</span></a></li>
                        <li><a className="flex gap-2 items-baseline" href="https://drive.google.com/file/d/1W_xrPx0gxsqU3cV0XAl6V9adj9y4SYNl/view?usp=sharing" target="_blank"><FaFile/><span className="hover:text-blue-500">Resume</span></a></li>
                    </ul>
                </div>
                <form className="p-3 flex flex-col text-black w-full max-w-[500px]"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate    
                >
                    <p className="text-center text-white text-extrabold text-xl font-bold">Get in touch</p>
                    <div>
                        <input 
                            className="block my-1 mx-auto rounded-md p-1 border-2 border-blue-500 text-white bg-transparent md:w-4/5 w-full" 
                            id="name" 
                            type="text" 
                            placeholder="Full Name" 
                            {...register("FullName", { required: 'What shall I call you'})}
                        />
                        <p className='text-red-500 text-xs w-4/5 mx-auto'>{errors.FullName?.message}</p>
                    </div>
                    <div>
                        <input 
                            className="block my-1 mx-auto rounded-md p-1 border-2 border-blue-500 text-white bg-transparent md:w-4/5 w-full" 
                            id="email" type="email" placeholder="Email"
                            {...register("Email", { required: "I have to know how to reach you", 
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                }})}
                        />
                        <p className='text-red-500 text-xs w-4/5 mx-auto'>{errors.Email?.message}</p>
                    </div>
                    <div>
                        <input 
                            className="block my-1 mx-auto rounded-md p-1 border-2 border-blue-500 text-white bg-transparent md:w-4/5 w-full" 
                            id="subject" type="text" placeholder="Subject" 
                            {...register("subject")}
                        />
                    </div>
                    <div>
                        <textarea 
                            className="block my-1 mx-auto rounded-md px-1 border-2 border-blue-500 text-white bg-transparent md:w-4/5 w-full" 
                            id="message" cols={30} rows={5} placeholder="Message"
                            {...register("message", { required: "You have to write at least hello", maxLength: {value: 1000, message: "Too many characters"} })}
                        />
                        <p className='text-red-500 text-xs w-4/5 mx-auto'>{errors.message?.message}</p>
                    </div>
                    {submissionSuccess && <p className="text-slate-200 flex justify-center gap-2 items-center"><FaCircleCheck /> Submitted successfully! Thank you for your message!</p>}
                    {submissionError && <p className="text-slate-200 flex justify-center gap-2 items-baseline"><FaExclamation />There was an error submitting your message. Please try again.</p>} 
                    <button type="submit" className="mt-5 border-2 border-blue-500 text-white rounded-md w-1/3 p-2 mx-auto relative overflow-hidden group">
                        <span className="relative z-10">Submit</span>
                        <span className="absolute inset-0 bg-blue-500 -z-10 group-hover:w-full w-0 transition-all duration-1000 ease-in-out"></span>
                    </button>
                </form>
            </div> 
        </LampContainer>
    </div>
  )
}

export default Contact
