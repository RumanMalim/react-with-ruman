import { useState } from 'react'
import { Inputbox } from './components'
import usecurrencyInfo from './assets/hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedamount, setConvertedamount] = useState(0)
  const currencyinfo = usecurrencyInfo(from)

  const option = Object.keys(currencyinfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamount)
  }

  const convert = () => {
    setConvertedamount(amount * currencyinfo[to])
  }

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat font-serif text-[#2f2f2f]'
      style={{
  backgroundImage: `url('https://img.freepik.com/free-photo/old-safe-bank-vault-door-3d-illustration_76964-1119.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-[#d6c7a1] rounded-xl p-6 backdrop-blur-sm bg-white/30 shadow-md'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className='mb-4'>
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={option}
                onAmountChange={(val) => setAmount(val)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectcurrency={from}
              />
            </div>

            <div className='relative w-full flex justify-center mb-4'>
              <button
                type='button'
                className='border-2 border-[#d6c7a1] rounded-md bg-[#3a3a3a] text-white px-3 py-1 text-sm shadow'
                onClick={swap}
              >
                SWAP
              </button>
            </div>

            <div className='mb-6'>
              <Inputbox
                label="To"
                amount={convertedamount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setTo(currency)}
                selectcurrency={to}
                amountdisable
              />
            </div>

            <button
              type='submit'
              className='w-full bg-[#3a3a3a] text-[#f1e3c6] px-4 py-3 rounded-lg shadow-md hover:bg-[#2f2f2f] transition-all duration-200'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
