import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-yellow-200 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-250 h-243 md:w-20 md:h-auto md:rounded-none rounded-full mx-auto" src="/my-pic.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hello I am Mubashir.I am AI student.I am very happy to learn about AI.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          M.MUBASHIR
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          AI Student,R.Y.K.
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page