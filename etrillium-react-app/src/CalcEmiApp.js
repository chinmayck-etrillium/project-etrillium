//Here the form has submit button and results are shown after user presses the submit button

//Change the component name to CalcEmiApp to access this UI

import "./App.css";
import { useState } from "react";

function GetUserInputs({ onCalculate }) {
  const [monthlyIncome, setMonthlyIncome] = useState();
  const [monthlyEmi, setMonthlyEmi] = useState();

  const handleIncomeChange = (event) => {
    setMonthlyIncome(parseInt(event.target.value));
  };

  const handleEmiChange = (event) => {
    setMonthlyEmi(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCalculate(monthlyIncome, monthlyEmi);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Your Monthly Income :{" "}
        <input
          type="number"
          value={monthlyIncome}
          onChange={handleIncomeChange}
        />
      </label>
      <br />
      <label>
        Enter Your Total Monthly Emi :{" "}
        <input type="number" value={monthlyEmi} onChange={handleEmiChange} />
      </label>
      <br />
      <button type="submit">Calculate EMI Health</button>
    </form>
  );
}

function CalcEmiApp() {
  const [emiHealth, setEmiHealth] = useState(null);

  const calculateEmiHealth = (monthlyIncome, monthlyEmi) => {
    const emiRatio = (monthlyEmi / monthlyIncome) * 100;
    if (emiRatio < 30) {
      setEmiHealth("Good");
    } else if (emiRatio >= 30 && emiRatio <= 40) {
      setEmiHealth("Needs Improvement");
    } else if (monthlyIncome == null || monthlyEmi == null) {
      setEmiHealth("Enter Monthly Income And Total Monthly EMIs !");
    } else {
      setEmiHealth("Bad");
    }
  };

  return (
    <>
      <h1>EMI Health Calculator</h1>
      <GetUserInputs onCalculate={calculateEmiHealth} />
      {emiHealth && (
        <>
          <h2>Your EMI Health is :</h2>
          <p
            style={{
              color:
                emiHealth === "Good"
                  ? "green"
                  : emiHealth === "Needs Improvement"
                  ? "orange"
                  : emiHealth ===
                    "Enter Monthly Income And Total Monthly EMIs !"
                  ? "blue"
                  : "red",
              fontWeight: "bold",
            }}
          >
            {emiHealth}
          </p>
        </>
      )}
    </>
  );
}

export default CalcEmiApp;
