import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import profile from './profile.jpg'



const Navbar = () => {
 const [show, setShow] = useState(false)


    const uploadImg = () => {
        document.querySelector('input').click();
        document.querySelector('input').onchange = () => {
            const file = document.querySelector('input').files[0]
            document.querySelector('img').src = URL.createObjectURL(file)
        }

    }

    const handlehide = () => {
       if(show){
     document.querySelector('.sidebar').classList.add('hidden')
     document.querySelector('.overlay').classList.add('hidden')
        setShow(false)
       }else{
        document.querySelector('.sidebar').classList.remove('hidden')
        document.querySelector('.overlay').classList.remove('hidden')
        setShow(true)
       }
    }
    return (
       <>
       <nav className='flex justify-between items-center px-5 h-16 bg-blue-900 text-white shadow-lg fixed top-0 w-full z-50 '>
     
      <div className='flex justify-between items-center w-full md:w-auto'>
      <i class="fa-solid fa-bars md:hidden text-3xl text-white" onClick={handlehide}></i>
        <img src={profile} alt="" className='w-14 h-14 rounded-full hover:opacity-50' onClick={uploadImg} />
        <input type="file" name="" id="" className='hidden' />
      </div>
        
       <div className='hidden md:flex sidebar'>
       <ul className=' flex flex-col px-3 py-3  gap-4  items-center font-bold absolute h-screen w-52 bottom-0 top-16 bg-blue-900 left-0 md:static md:flex-row md:gap-10 md:px-2 md:py-0 md:h-auto md:w-auto'>
            <li className=' hover:text-gray-300 '>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-300" : ""} >Home</NavLink>
            </li>
            <li className=' hover:text-gray-300'>
               <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-300" : ""}>About</NavLink>
            </li>
            <li className=' hover:text-gray-300'>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-300" : ""}>Contact</NavLink>
            </li>
            <li className=' hover:text-gray-300'>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-blue-300" : ""}>Portfolio</NavLink>
            </li>
          <li className=' md:hidden mt-3 flex gap-3 '>
          <Link to="/login" className='px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white border border-blue-600  rounded-md me-2 no-underline font-semibold'>Login</Link>
          <Link to="/signup" className='px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md me-2 no-underline font-semibold border border-green-600'>Signup</Link>
          </li>
        </ul>
       </div>
        <div className='hidden md:flex'>
            <Link to="/login" className='px-3 py-2 bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-md text-white me-2 no-underline font-semibold'>Login</Link>
            <Link to="/signup" className='px-3 py-2 bg-green-600 hover:bg-green-700 border border-green-600 text-white rounded-md me-2 no-underline font-semibold'>Signup</Link>
        </div>
       </nav>
       <div className='hidden h-screen w-screen md:hidden opacity-70 overlay bg-[#000000] fixed' onClick={handlehide}>

       </div>
       </>
    );
};

export default Navbar;