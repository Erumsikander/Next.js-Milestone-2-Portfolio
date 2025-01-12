import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'>Stay Connected</h2>
            <p className='text-yellow-600 text-[20px] pt-2'>
            Contact us! send a message, make a call, or fill form to connect.
            </p>
            
            <div className='flex gap-3 items-center text-[20px] '>
            <IoIosMail size={30} /> mrsikanderghouri@gmail.com
            </div>

            <div className='flex gap-3 items-center  text-[20px] '>
            <FaPhoneVolume size={30} /> 1234-567-890
            </div>

        </div>
       
        <div className='space-y-8'>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="name">Name :</label>
            <input type="text" placeholder='   Full Name'
            className='h-[40px] w-[450px] bg-transparent border border-amber-400
            ' 
            id='name'/>
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="email">Email @:</label>
            <input type="text" placeholder='   Email Address'
            className='h-[40px] w-[450px] bg-transparent border border-amber-400
            ' 
            id='email'/>
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="msg">Message:</label>
            <textarea placeholder='   --------'
            className='w-[450px] bg-transparent border border-amber-400
            ' 
            id='msg' rows={4}>
            </textarea>
          </div>
          <button className='bg-accent p-2 px-6 '></button>
        </div>

      </div>
{/* <div>
  Made by Erum Sikander
</div> */}

    </div>
  )
}

export default Contact
