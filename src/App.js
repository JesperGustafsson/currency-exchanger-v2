import logo from './logo.svg';
import './App.css';
import styled  from 'styled-components';
import createGlobalStyle from 'styled-components'
import { useState, useEffect } from 'react'

//#region styles 

const fontSize = "18px"
const hoverColor = "white"

const Container = styled.div`
  margin: 1em auto;
  background-color: #81f479;
  border-radius: 0.125em;
  padding: 0.5em;
  box-shadow: 0.25em 0.25em 20px black;
  display: flex;
  align-items: center;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

const InnerContainer = styled.div`
  background-color: lightsteelblue;
  display: flex;
  flex-direction: column;
  height: 4em;
  

`;

const CurrencySelect = styled.select`
  height: 4em;
  background-color: #41a83f;
  width: 100%;
  border: none;
  font-size: ${fontSize};
  padding: 0.25em 0.5em;
  :hover {
    color: ${hoverColor}
  }
`;

const Option = styled.option`
  background-color: lightblue;
`;

const Swapper = styled.button`
  background-color: transparent;
  margin: .25em .25em;
  height: 100%;
  border: none;
  font-size: 60px;
  line-height: 60px;
  font-weight: 900;
  :hover {
    color: ${hoverColor}
  }
  ::after {
    content: ' ⮂ '
  }

  @media (max-width: 930px) {
    ::after {
      content: "⮃";
    }
  }
`;

const ValueSelect = styled.div`
  height: 4em;
  background-color: #6ac43d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const ValueInput = styled.input`
  background-color: transparent;
    border: none;
    font-size: ${fontSize};
    padding: 0.25em 0.5em;
    outline: none;
`;

const CurrencySymbol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: ${fontSize};
  height: 100%;
  color: black;
  min-width: 3em;
`;


//#endregion


const CurrencySelecter = ( { value, currency, setOtherValue, setCurrency, currencyData, currencySelectOrder } ) => {

  const currencySymbol = currencyData[currency] && currencyData[currency]["currencySymbol"] || currency;
 
  return (
  <InnerContainer> 
  <CurrencySelect
    value={currency} onChange = {(e) => setCurrency(e.target.value)}> 

    {
      currencySelectOrder && currencySelectOrder.map((currency, index) => {
      const currencyID = currency; 
      const currencyName = currencyData[currency]["currencyName"];
      return <Option key = {index} value={currencyID}>{currencyName} - {currencyID}</Option>
    }) 
    }
  </CurrencySelect> 
  
  <ValueSelect> 
    <ValueInput value = {value} onChange = {(e) => setOtherValue(e.target.value)}></ValueInput>
    <CurrencySymbol>
      {currencySymbol ? currencySymbol : currency ? currency : "HMM"}</CurrencySymbol>
  </ValueSelect>
  
  </InnerContainer>

  )

}




function App() {  

  const [currencyData, setCurrencyData] = useState("N/A")
  const [currencyOrder, setCurrencyOrder] = useState()

  const [sourceCurrency, setSourceCurrency] = useState("N/A") 
  const [targetCurrency, setTargetCurrency] = useState("N/A") 
  const [sourceValue, setSourceValue] = useState(1)
  const [targetValue, setTargetValue] = useState("N/A")

  const [exchangeRate, setExchangeRate] = useState(2);

  const [errorMessage, setErrorMessage] = useState()

  const fetchCurrencies = async () => {

    const result = await fetch(`https://free.currconv.com/api/v7/currencies?&apiKey=87b4f9fb2be631bed0c8`);


    if (result) {
      if (!result.ok) {
        setErrorMessage("Something went wrong with fetching from the API, likely due to free-limit reached. Try again in 30 minutes.")
        return;
      }
      setErrorMessage("API fetch successful. This site uses a free API and has a limit of calls per hour, which may break down if you change currencies too frequently.")
      const json = await result.json();
      setCurrencyData(json.results);
      //Do some ordering here maybe? another function creating an array of just the ID, in prefered order?
      orderCurrencySelectOrder(json.results);
    }
    
  }

  const orderCurrencySelectOrder = (data) => {
    //Orders by CurrencyID
    const orderByCurrencyID = Object.keys(data).sort();
    setCurrencyOrder(orderByCurrencyID);
    setSourceCurrency(orderByCurrencyID[0])
    setTargetCurrency(orderByCurrencyID[1])
    updateExchangeRate();
    
  }


  useEffect(() => {
    fetchCurrencies();
  }, [])


  const updateFromSource = (value) => {
    setSourceValue(value);
    setTargetValue(value*exchangeRate); 
  }
 
  const updateFromTarget = (value) => {
    setTargetValue(value);
    setSourceValue(value/exchangeRate); 
  }

  const updateExchangeRate = async () => {

    const result = await fetch(`https://free.currconv.com/api/v7/convert?q=${sourceCurrency}_${targetCurrency}&compact=ultra&apiKey=87b4f9fb2be631bed0c8`)

    if (result) {
      if (!result.ok) {
        setErrorMessage("Something went wrong with fetching from the API, likely due to free-limit reached. Try again in 30 minutes.")
        return;
      }
      setErrorMessage("API fetch successful. This site uses a free API to get currency rates and has a limit of calls per hour, which may break down if you change currencies too frequently.")
      const json = await result.json();

      const newExchangeRate = json[`${sourceCurrency}_${targetCurrency}`]
    
      setExchangeRate(newExchangeRate);
      setTargetValue(sourceValue*newExchangeRate)
    }
  }

  useEffect(() => {
    updateExchangeRate();
    setTargetValue(sourceValue*exchangeRate);
  }, [sourceCurrency, targetCurrency])

  const swapCurrencies = () => {
    const oldSourceCurrency = sourceCurrency;
    setSourceCurrency(targetCurrency);
    setTargetCurrency(oldSourceCurrency);
  }

  return (

    <div className="App">
      <header className="App-header">
        <h2>Currency Exchanger</h2>

        <Container> 
          <CurrencySelecter
            value={sourceValue}
            currency={sourceCurrency}
            setOtherValue={(e) => updateFromSource(e)}
            setCurrency={(e) => setSourceCurrency(e)}
            currencyData = {currencyData}
            currencySelectOrder = {currencyOrder}
          /> 

          <Swapper onClick = {(e) => swapCurrencies()}/>

          <CurrencySelecter
            value={targetValue}
            currency={targetCurrency}
            setOtherValue={(e) => updateFromTarget(e)}
            setCurrency={(e) => setTargetCurrency(e)}
            currencyData = {currencyData}
            currencySelectOrder = {currencyOrder}
          />

        </Container>
        <h6>{errorMessage}</h6>
      </header>
    </div>
  );
}

export default App;
