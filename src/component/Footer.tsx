import React from 'react'
import Link from 'next/link'
export const Footer = () => {
  return (
    <div className='flex gap-3 p-6 bg-yellow-200'>
         <Link href="/">private page</Link>
         <Link href="/about">about page</Link>
    </div>
  )
}
export default Footer