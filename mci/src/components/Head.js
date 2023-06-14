import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navSlice';

const Head = () => {
    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-1 m-1 shadow-lg'>
        <div className='flex col-span-1 justify-around items-center'>
            <img onClick={toggleMenuHandler} className='h-10 cursor-pointer' alt="menu" src='https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png'/>
            <img className='h-16' alt="yotube-logo" src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'/>
        </div>
        <div className='col-span-10 pl-44 flex items-center'>
            <input className="w-1/2 p-2 border border-gray-400 rounded-l-full" type='text'/>
            <button className='border border-gray-400 p-2 rounded-r-full'>Search</button>
        </div>
        <div className='col-span-1 flex items-center'>
            <img className='h-10 border border-gray-600 rounded-full' alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        </div>
    </div>
  )
}

export default Head