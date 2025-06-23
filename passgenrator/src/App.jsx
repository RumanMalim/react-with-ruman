import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(3);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}:,./][";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => alert('Password copied!'))
        .catch(() => alert('Failed to copy.'));
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center bg-[#f3f2e9] px-4'>
        <div className='w-full max-w-md shadow-md rounded-lg px-8 py-10 text-[#4d4730] bg-white text-center'>
          <h1 className='text-[#2f2b1d] text-3xl font-bold mb-6'>Password Generator</h1>

          <div className='flex items-center mb-6 border border-[#b2aa8e] rounded-md bg-white overflow-hidden'>
            <input
              type="text"
              value={password}
              className='flex-grow py-2 px-4 text-black text-sm outline-none bg-transparent'
              placeholder='Password'
              readOnly
            />
            <button
              onClick={copyPasswordToClipboard}
              className='h-full px-4 py-2 bg-[#4d4730] text-[#f3f2e9] text-sm font-medium hover:bg-[#3e3a28] active:scale-95 transition'
            >
              Copy
            </button>
          </div>

          <div className='flex flex-col gap-4 text-sm text-left leading-none'>
            <div className='flex flex-col'>
              <label className='mb-1'>Length: <strong>{length}</strong></label>
              <input
                type="range"
                min={3}
                max={100}
                value={length}
                className='w-full cursor-pointer'
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>

            <div className='flex items-center gap-x-2 leading-none'>
              <input
                type='checkbox'
                id='numberinput'
                checked={numberAllowed}
                onChange={() => setNumberAllowed(prev => !prev)}
              />
              <label htmlFor='numberinput'>Include Numbers</label>
            </div>

            <div className='flex items-center gap-x-2 leading-none'>
              <input
                type='checkbox'
                id='characterinput'
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
              />
              <label htmlFor='characterinput'>Include Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
