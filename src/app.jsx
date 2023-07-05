import { Container } from "@mui/system";
import { useState, useMemo } from "preact/hooks";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () => createTheme(
      {
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    );

  function calculateHandler(weight, height) {
    const bmi = calculateBMI(weight, height);
    set_bmi(bmi);
    set_height(height);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fluid>
        <h1 className="title">Body Mass Index</h1>
        <HeightAndWeightInput onCalculate={calculateHandler} />
        <hr />
        <Results bmi={bmi} height={height} />
      </Container>
    </ThemeProvider>
  );
}
