import React, { useState, useCallback, useEffect, useRef } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //Use Ref
  const passwordCopyRef = useRef();

  
  const passwordGenrator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numAllow){
      str+= "1234567890";
    }
    if(charAllow){
      str+= "!@#$%*><{)(}"
    }

  for(let i = 1; i <=  length; i++){
    let char = Math.floor(Math.random() *str.length +1);
    pass += str.charAt(char);
  }
  setPassword(pass);
  }, [length, charAllow, numAllow, setPassword])

  //Password Copy
  const copyPasswordToClipBoard = useCallback(
    async ()=>{
      passwordCopyRef.current?.select();
    await window.navigator.clipboard.writeText(password)
  },
    [password]
  )
  useEffect(()=>{
    passwordGenrator();
  }, [length, numAllow, passwordGenrator, charAllow])
  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      <div className='w-[40%] bg-slate-700 p-6 rounded-lg'>
        <div className='w-full flex justify-center items-center mb-6'>
          <input 
          ref={passwordCopyRef}
            type="text" 
            value={password}
            placeholder='Your password' 
            className='bg-white rounded-l-lg w-[70%] h-[50px] text-lg placeholder-black font-bold pl-5' 
          />
          <button 
          className='bg-blue-600 h-[50px] rounded-r-lg w-[20%] text-xl font-semibold' 
          onClick={()=>copyPasswordToClipBoard}>copy</button>
        </div>

        <div className='flex  items-center gap-x-8'>
          <div className='flex items-center justify-between gap-x-8'>
            <input 
            type="range" 
            className='cursor-pointer' 
            max={99} 
            min={16} 
            value={length} 
            onChange={(e)=>{setLength(e.target.value)}}
            
            />
            {/* <label htmlFor="length" className='text-white text-lg font-semibold'>Length</label> */}
            <p className='text-lg font-semibold text-white'>Length({length})</p>
          </div>

          <div className=' flex justify-between gap-x-8'>
            <div className='flex items-center'>
              <input 
              defaultChecked={numAllow}
              type="checkbox" 
              name="numbers" 
              id="numbers" 
              className='mr-2' 
              onChange={() => setNumAllow(prev => !prev)}

              />
              <label htmlFor="numbers" className='text-white text-lg font-semibold'>Numbers</label>
            </div>

            <div className='flex items-center'>
              <input type="checkbox"
               name="characters"
                id="characters"
                 className='mr-2'
                 onChange={() => setCharAllow(prev => !prev)}
                 />
              <label htmlFor="characters" className='text-white text-lg font-semibold'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App