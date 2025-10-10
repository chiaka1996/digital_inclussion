import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-transparent backdrop-blur-lg py-14 px-10 flex justify-between'>
        <Link href={'/'} className='text-[var(--color-highlight)] text-3xl font-black'>DODO</Link>
        <div className="flex justify-between gap-3 text text-[#FEF7EA] font-thin">
          <Link href={'/'}>Contact us</Link>
          <span>Menu</span>
        </div>
    </nav>
  )
}
