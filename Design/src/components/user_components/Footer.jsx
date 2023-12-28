import React from 'react'
import {AiOutlineCar} from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-slate-100  text-black">
        <aside className="items-center grid-flow-col">
          <p className='text-4xl'><AiOutlineCar/></p>
          <p>Copyright © 2023 - Developed by  ❤ Bhargav </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        </nav>
      </footer>
    </div>
  )
}

export default Footer
