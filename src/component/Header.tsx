import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (

    <div className='flex gap-56 p-90 bg-yellow-500'>
      <Link href="/">Home page</Link>
      <Link href="/about">about page</Link>
      <Link href="/address">adress page</Link>
      <Link href="/contact">contact page</Link>
    </div>
  )
}

export default Header