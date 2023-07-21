import React from 'react'
import {HiOutlineBars3, HiMagnifyingGlass} from "react-icons/hi2"
import { MdMic } from 'react-icons/md'
import { BiVideoPlus } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import logo from "../assets/yt-logo.png"
import ytlogo from "../assests/ytlogo.png"

const Navbar = () => {
  return (
    <div className='bg-yt-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10'>
        <div className='flex justify-between items-center'>
            <div className='text-yt-white p-2 w-10 text-2xl text-center hover:bg-yt-light-black rounded-xl cursor-pointer'>
                <HiOutlineBars3 />
            </div>
            <div className='w-20'>
                <Link to="/">
                    <img src={ytlogo} alt="" />
                </Link>
            </div>
        </div>
        <h2>Kiyaareeeeee</h2>
        <div className='flex flex-row items-center'>
            <div className='w-[593px] bg-yt-black flex border border-yt-light-black items-center rounded-3xl h-10'>
                <input 
                    type='text'
                    placeholder='Search'
                    className='w-full bg-yt-black h-6 ml-4 text-yt-white text-start focus:outline-none pl-4'
                />
                <button className='w-16 h-10 bg-yt-light-black px-1 py-0.5 rounded-r-3xl border-l-2 border-yt-light-black'>
                    <HiMagnifyingGlass 
                        size={22}
                        className="text-yt-white inline-block text-center"
                    />
                </button>
            </div>
            <div className='text-yt-white bg-yt-light w-10 h-10 items-center flex justify-center rounded-full ml-4 hover:bg-yt-light-black cursor-pointer'>
                <MdMic className='text-center' size={23}/>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='flex flex-row items-center'>
                <div className='mr-2 p-2 bg-yt-light w-10 hover:bg-yt-light-black rounded-full cursor-pointer'>
                    <BiVideoPlus size={25} className='text-yt-white text-center'/>
                </div>
                <div className='mx-3 p-2 bg-yt-light w-10 hover:bg-yt-light-black rounded-full cursor-pointer'>
                    <FaRegBell size={20} className='text-center text-yt-white'/>
                </div>
                <div className='mx-3 items-center cursor-pointer'>
                    <button className='bg-yt-red py-1 px-4 text-yt-white rounded-md'> Sign In </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar