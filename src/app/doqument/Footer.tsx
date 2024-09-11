import React from 'react'
import Link from 'next/link'
export const Footer = () => {
  return (
    <div className='flex gap-3 p-6 bg-green-400'>
       <Link href="/">home page</Link>
       <Link href="/about">about page</Link>
    </div>
  )
}
