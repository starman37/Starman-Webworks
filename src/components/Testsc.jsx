
import React, { useState, useEffect } from 'react'

const Testsc = () => {
    const [age, setAge] = useState(0);
    const updateAge = () => {
        setAge(age => age+1);
    }
    const declineAge = () => {
        setAge(age => age-1);
    }
    const resetAge = () => {
        setAge(age => 0);
    }

    const colors = [
    'bg-blue-400',
    'bg-violet-400',
    'bg-purple-400',
    'bg-red-400',
    'bg-pink-400',
    'bg-indigo-400',
  ];
    const [colorIn, setcolorIn] = useState(0)
    const changeColor = () => {
      if (colorIn != 5) {
      setcolorIn(colorIn => colorIn+1);
      }
      if (colorIn == 5) {
        setcolorIn(colorIn => 0)
      }
    }


    useEffect(() => {
      document.title = `Count: ${age}`
    })
  return (
    <div className={`flex justify-center items-center w-screen h-screen ${colors[colorIn]} transition-colors`}>
    <div className='space-y-5 border-amber-700 rounded-full'>
      <p className='w-40 text-center text-black p-2 rounded-full bg-amber-300'>Age: {age}</p>
      <button onClick={updateAge} className='w-40 block text-black rounded-full bg-amber-300 hover:bg-amber-400 cursor-pointer p-2'>Count up</button>
      <button onClick={declineAge} className='w-40 block text-black rounded-full bg-amber-300 hover:bg-amber-400 cursor-pointer p-2'>Count down</button>
      <button onClick={resetAge} className='w-40 block text-black rounded-full bg-amber-300 hover:bg-amber-400 cursor-pointer p-2'>Reset</button>
      <button onClick={changeColor} className='w-40 block text-black rounded-full bg-amber-300 hover:bg-amber-400 cursor-pointer p-2'>Change color</button>
    </div>
    </div>
  )
}

export default Testsc
