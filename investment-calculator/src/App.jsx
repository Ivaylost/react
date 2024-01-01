import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";

function App() {

  const initialInputData = {
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 6,
    duration: 12,
  };

  const [inputData, setInputData] = useState(initialInputData);

  const inputIsValid = inputData.duration >= 1;

  function handleInputChange(inputIdentifier, inputValue) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [inputIdentifier]: + inputValue,
      };
    });
  }
  

  return (
    <>
      <Header />
      <Input inputData={inputData} handleInputChange={handleInputChange} />
      {!inputIsValid && <p className="center">Please enter valid data!</p>}
      {inputIsValid && <Results inputData={inputData} />}
    </>
  );
}

export default App;
