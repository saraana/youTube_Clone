import React from 'react'
import Sidebar from '../components/Sidebar'
import { SideBarItems } from '../static/data'
import { CategoryItems } from '../static/data'

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className='w-[calc(100%-240px)] h-[calc(100%-53px)] pt-16 bg-yt-black ml-60'>
          <div className='flex flex-row px-3 overflow-x-scroll relative scrollbar-hide'>
              {CategoryItems.map((item,i) => 
                <h2 className='text-yt-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-yt-light mr-3 my-3 cursor-pointer rounded-lg hover:bg-yt-light-black' key={i}>
                  {item}
                </h2>
              )}
          </div>
      </div>
    </>
  )
}

export default Home