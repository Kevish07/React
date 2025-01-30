import React from 'react'
import './currCard.css'

function currCard() {
  return (
    <>
    <div className="card">
        <div className="notation">
            <span>From</span>
            <span>Currency Type</span>
        </div>
        <div className="input">
            <input type="number" placeholder='0' />
            <select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
            </select>
        </div>
        
    </div>
    </>
  )
}

export default currCard