import { useState } from 'react'
import CurrCard from './components/currCard'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
    <div className="container">
      <div className="box">
        <form 
        action=""
        onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}
        >
          < CurrCard 
          label={"From"} 
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
          />
          <button 
          className='swap'
          onClick={swap}
          >Swap</button>
          <div className="position">
            < CurrCard 
            label={"To"} 
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={from}
            amountDisable
            />
          </div>
        
          <button className="convert">
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
