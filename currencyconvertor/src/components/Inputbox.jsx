import React, { useId } from 'react'

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectcurrency = "usd",
  amountdisable = false,
  currencydisable = false,
  className = ""
}) {
  const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex items-end justify-between gap-4 ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className="text-[#2f2f2f] mb-1 block">{label}</label>
        <input
          id={amountInputId}
          className='outline-none w-full bg-transparent py-1.5 border-b border-[#d6c7a1] focus:border-[#2f2f2f] transition-all'
          type='number'
          placeholder='Amount'
          disabled={amountdisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 text-right'>
        <p className='text-[#2f2f2f] mb-1'>Currency</p>
        <select
          className='rounded-lg px-2 py-1 bg-[#f5f3eb] text-black cursor-pointer outline-none'
          value={selectcurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencydisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox
