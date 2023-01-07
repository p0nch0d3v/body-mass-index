import { Fragment } from "preact";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const data = [
  {
    text: "Less than 15",
    description: "Very severely underweight",
    min: null,
    max: 14.99,
    color: "#FF7D7A80",
  },
  {
    text: "Between 15 and 16",
    description: "Severely underweight",
    min: 15,
    max: 16,
    color: "#FF7D7A80",
  },
  {
    text: "Between 16 and 18.5",
    description: "Underweight",
    min: 16.91,
    max: 18.5,
    color: "#FFF38080",
  },
  {
    text: "Between 18.5 and 25",
    description: "Normal (healthy weight)",
    min: 18.51,
    max: 25,
    color: "#98FF9880",
  },
  {
    text: "Between 25 and 30",
    description: "Overweight",
    min: 25.01,
    max: 30,
    color: "#FFF38080",
  },
  {
    text: "Between 30 and 35",
    description: "Moderately obese",
    min: 30.01,
    max: 35,
    color: "#FFF38080",
  },
  {
    text: "Between 35 and 40",
    description: "Severely obese",
    min: 35.01,
    max: 40,
    color: "#FF7D7A80",
  },
  {
    text: "Over 40",
    description: "Very severely obese",
    min: 40.01,
    max: null,
    color: "#FF7D7A80",
  },
];

const calculateWeight = function (bmi, height) {
  const weight = bmi * height * height;
  return parseFloat(weight).toFixed(2);
};

function Results({ bmi, height }) {
  if (bmi && height) {
    return (
      <TableContainer component={"none"}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Threshold</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Min</TableCell>
              <TableCell align="left">Max</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(function (value, index) {
              const selected =
                (bmi >= value.min && bmi <= value.max) ||
                (bmi <= value.max && value.min === null) ||
                (value.max === null && bmi >= value.min);
              return (
                <TableRow
                  sx={{
                    backgroundColor: value.color,
                    textDecoration: selected ? "underline" : "none",
                    fontWeight: selected ? "900" : "400",
                    fontStyle: selected ? "italic" : "normal",
                  }}
                >
                  <TableCell>{value.text}</TableCell>
                  <TableCell>{value.description}</TableCell>
                  <TableCell>
                    {value.min
                      ? calculateWeight(value.min, height) + " kgs."
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {value.max
                      ? calculateWeight(value.max, height) + " kgs."
                      : "-"}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return <Fragment></Fragment>;
}

export default Results;
