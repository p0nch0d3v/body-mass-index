import { useState } from "preact/hooks";
import "./app.css";
import HeightAndWeightInput from "./components/height-and-weight";
import Results from "./components/results";

const calculateBMI = (weight, height) => {
  const bmi = weight > 0 && height > 0 ? weight / (height * height) : null;
  return parseFloat(bmi).toFixed(2);
};

export function App() {
  const [bmi, set_bmi] = useState(NaN);
  const [height, set_height] = useState(NaN);

  function calculateHandler(weight, height) {
    const bmi = calculateBMI(weight, height);
    set_bmi(bmi);
    set_height(height);
  }

  return (
    <div>
      <h1>Body Mass Index</h1>
      <HeightAndWeightInput onCalculate={calculateHandler} />
      <hr />
      <Results bmi={bmi} height={height} />
    </div>
  );
}
