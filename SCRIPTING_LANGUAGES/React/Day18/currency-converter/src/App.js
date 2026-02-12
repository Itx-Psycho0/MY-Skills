import React, { useEffect } from 'react'

const App = () => {
  const [amount, setAmount] = React.useState('');
  const [fromCurrency, setFromCurrency] = React.useState('USD');
  const [toCurrency, setToCurrency] = React.useState('EUR');
  const [convertedAmount, setConvertedAmount] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // function handleConvert() {
  //   async function convertCurrency() {
  //     setIsLoading(true);
  //     const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
  //     const data = await response.json();
  //     const rate = data.rates[toCurrency];
  //     setConvertedAmount(amount * rate);
  //     setIsLoading(false);
  //   }
  //   convertCurrency();
  //   if (amount) {
  //     convertCurrency();
  //   } else {
  //     setConvertedAmount(null);
  //   }
  // }
    
  useEffect(() => {
    async function convertCurrency() {
      setIsLoading(true);
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setConvertedAmount(amount * rate);
      setIsLoading(false);
    }
    convertCurrency();
    if (amount) {
      convertCurrency();
    } else {
      setConvertedAmount(null);
    }
    
  }, [amount, fromCurrency, toCurrency]);


  return (
    <div className='Container'>
      <input
        className='Input'
        type="text"
        placeholder="Enter Your Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select className='Select' value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="CNY">CNY</option>
        <option value="HKD">HKD</option>
        <option value="NZD">NZD</option>
        <option value="RUB">RUB</option>
        <option value="SGD">SGD</option>
        <option value="ZAR">ZAR</option>
      </select>
      <p>To</p>
      <select className='Select' value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="CNY">CNY</option>
        <option value="HKD">HKD</option>
        <option value="NZD">NZD</option>
        <option value="RUB">RUB</option>
        <option value="SGD">SGD</option>
        <option value="ZAR">ZAR</option>
      </select>
      {/* <button onClick={handleConvert}>Convert</button> */}
      {isLoading && <p>Loading...</p>}
      <h3 className='ConvertedAmount'>Converted Amount: {convertedAmount !== null ? convertedAmount.toFixed(2) : 'N/A'}</h3>
    </div>
  )
}

export default App
