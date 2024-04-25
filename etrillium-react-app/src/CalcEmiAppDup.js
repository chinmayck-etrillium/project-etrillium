//Here the form does not have submit button and results are shown dynamically

import React, { useState } from "react";
import "./styles/CalcEmiApp.css";

function CalcEmiAppDup() {
  const [monthlyIncome, setMonthlyIncome] = useState();
  const [monthlyEmi, setMonthlyEmi] = useState();

  const calculateEmiHealth = () => {
    if (!monthlyIncome || !monthlyEmi)
      return "Enter Monthly Income And Total Monthly EMIs !";

    const emiRatio = (monthlyEmi / monthlyIncome) * 100;
    if (emiRatio < 30) return "Good";
    if (emiRatio <= 40) return "Needs Improvement";
    return "Bad";
  };

  return (
    <div>
      <h1>EMI Health Calculator</h1>
      <form>
        <label>
          Enter Your Monthly Income :
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          Enter Your Total Monthly Emi :
          <input
            type="number"
            value={monthlyEmi}
            onChange={(e) => setMonthlyEmi(parseInt(e.target.value))}
          />
        </label>
      </form>
      <h2>Your EMI Health is :</h2>
      <p
        style={{
          color:
            calculateEmiHealth() === "Good"
              ? "green"
              : calculateEmiHealth() === "Needs Improvement"
              ? "orange"
              : calculateEmiHealth() ===
                "Enter Monthly Income And Total Monthly EMIs !"
              ? "blue"
              : "red",
          fontWeight: "bold",
        }}
      >
        {calculateEmiHealth()}
      </p>
    </div>
  );
}

export default CalcEmiAppDup;
