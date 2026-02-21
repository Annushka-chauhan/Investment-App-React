import {useState} from 'react';
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx";
import Results from './components/Results.jsx';

function App() {
  // State to store all user inputs in one object
  //We have lifted the userInput state here up from the userInput.jsx to App.jsx
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputISValid= userInput.duration>=1;
  // Function to update a specific field in userInput
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // + converts string to number
      };
    });
  }

  return (
    <>
    <Header/>
    <UserInput userInput= {userInput} onChange ={handleChange} />
    {!inputISValid&& <p className="center">Please enter a duration greater than 0</p>}
   {inputISValid && <Results input={ userInput}/>}
   </>
  //  results go here 
  );
}

export default App
