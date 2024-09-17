import React from 'react'
import Image from 'next/image'
import homeimage from "@/component/images/p-pic.png"
const page = () => {
  return (
    <div><figure className="md:flex gap-6 p-3 bg-yellow-200 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-20 md:h-auto md:rounded-none rounded-full mx-auto" src={homeimage} alt="" width="384" height="512"/>
    <div className="pt-6 md:p-20 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I am Ai Student.My contact number 
          03253072531.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          M.MUBASHIR
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page