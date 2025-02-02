import React, {useId} from 'react'
import './currCard.css'

function currCard({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {
  const amountId = useId()
  return (
    <>
    <div className="card">
        <div className="notation">
            <span id={amountId}>{label}</span>
            <span>Currency Type</span>
        </div>
        <div className="input">
            <input 
            id={amountId}
            type="number" 
            placeholder='Enter your Amount' 
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
            <select
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option 
                value={currency}
                key={currency}
                >
                  {currency}
                </option>
              ))}
            </select>
        </div>
        
    </div>
    </>
  )
}

export default currCard