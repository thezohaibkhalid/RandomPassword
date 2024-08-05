import React from 'react'

const App = () => {
  return (
    <div className='bg-black w-screen h-screen flex justify-center '>
      <div className='w-[40%] h-[20%] mt-20'>
      <div className='bg-slate-700 w-full h-full pt-4 '>
        <input type="text" placeholder='Your password' className='bg-white rounded-lg w-[90%] h-[50px] text-lg placeholder-blue-700' />
      </div>
      </div>
    </div>
  )
}

export default App