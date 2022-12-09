import { Fragment } from "preact";

const data = [
    {
        text: "Less than 15",
        description: "Very severely underweight",
        min: null,
        max: 14.99,
        color: "#FF7D7A",
    },
    {
        text: "Between 15 and 16",
        description: "Severely underweight",
        min: 15,
        max: 16,
        color: "#FF7D7A",
    },
    {
        text: "Between 16 and 18.5",
        description: "Underweight",
        min: 16.91,
        max: 18.5,
        color: "#FFF380",
    },
    {
        text: "Between 18.5 and 25",
        description: "Normal (healthy weight)",
        min: 18.51,
        max: 25,
        color: "#98FF98",
    },
    {
        text: "Between 25 and 30",
        description: "Overweight",
        min: 25.01,
        max: 30,
        color: "#FFF380",
    },
    {
        text: "Between 30 and 35",
        description: "Moderately obese",
        min: 30.01,
        max: 35,
        color: "#FFF380",
    },
    {
        text: "Between 35 and 40",
        description: "Severely obese",
        min: 35.01,
        max: 40,
        color: "#FF7D7A",
    },
    {
        text: "Over 40",
        description: "Very severely obese",
        min: 40.01,
        max: null,
        color: "#FF7D7A",
    },
];

const calculateWeight = function (bmi, height) {
    const weight = bmi * height * height
    return parseFloat(weight).toFixed(2);
};

function Results({ bmi, height }) {
    if (bmi && height) {
        return (
            <table>
                <tr>
                    <th>*</th>
                    <th>Threshold</th>
                    <th>Description</th>
                    <th>Min</th>
                    <th>Max</th>
                </tr>
                {data.map(function (value, index) {
                    const selected = ((bmi >= value.min
                        && bmi <= value.max)
                        || (bmi <= value.max
                            && value.min === null)
                        || (value.max === null
                            && bmi >= value.min));
                    return (<tr>
                        <td>{selected ? '*' : ''}</td>
                        <td>{value.text}</td>
                        <td>{value.description}</td>
                        <td>{value.min ? calculateWeight(value.min, height) + ' kgs.' : '-'}</td>
                        <td>{value.max ? calculateWeight(value.max, height) + ' kgs.' : '-'}</td>
                    </tr>)
                })}
            </table>
        );
    }
    return (<Fragment></Fragment>);
}

export default Results;
