import { useState } from 'react';
import {
    Container, 
    Row, 
    Col, 
    FormControl, 
    InputGroup, Form
} from 'react-bootstrap';

function HeightAndWeight() {
    const data = [
        { text: 'Less than 15', description: 'Very severely underweight', min: null, max: 14.99, color: '#FF7D7A' },
        { text: 'Between 15 and 16', description: 'Severely underweight', min: 15, max: 16, color: '#FF7D7A' },
        { text: 'Between 16 and 18.5', description: 'Underweight', min: 16.91, max: 18.5, color: '#FFF380' },
        { text: 'Between 18.5 and 25', description: 'Normal (healthy weight)', min: 18.51, max: 25, color: '#98FF98' },
        { text: 'Between 25 and 30', description: 'Overweight', min: 25.01, max: 30, color: '#FFF380' },
        { text: 'Between 30 and 35', description: 'Moderately obese', min: 30.01, max: 35, color: '#FFF380' },
        { text: 'Between 35 and 40', description: 'Severely obese', min: 35.01, max: 40, color: '#FF7D7A' },
        { text: 'Over 40', description: 'Very severely obese', min: 40.01, max: null, color: '#FF7D7A' },
    ];

    const [height, setHeight] = useState(0.0);
    const [weight, setWeight] = useState(0.0);
    

    const onHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const onWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const calculateBMI = (weight, height) => {
        const bmi = (weight > 0 && height > 0) ? (weight / (height * height)) : null;
        return parseFloat(bmi).toFixed(2); 
    };

    const calculateWeight = function (bmi, height){
        const weight = bmi * height * height
        return parseFloat(weight).toFixed(2);
    };

    const showInfo = () => {
        return height > 0 && weight > 0 
    };

    return (
        <Container fluid>
            <Row className="mb-2">
                <Col xs={12} sm={{span: 6, offset: 3}} xl={{span: 4, offset: 4}}>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>Height</InputGroup.Text>
                        <FormControl type="number"
                                     min={1}
                                     max={2.5}
                                     step={0.1}
                                     placeholder="Height"
                                     aria-label="Height" 
                                     value={height}
                                     onChange={onHeightChange} 
                                     style={{ textAlign: 'right' }} />
                        <InputGroup.Text>mts.</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>Weight</InputGroup.Text>
                        <FormControl type="number"
                                     min={1}
                                     max={500}
                                     step={1}
                                     placeholder="Weight"
                                     aria-label="Weight" 
                                     value={weight}
                                     onChange={onWeightChange}
                                     style={{ textAlign: 'right' }} />
                        <InputGroup.Text>kgs.</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
            <hr />
            { showInfo() &&  (
                <Row className="mb-2 text-center">
                    <Col xs={12}>
                        <Form.Label style={{ fontWeight: '700' }}>
                                Result: {calculateBMI(weight, height)}
                        </Form.Label>
                    </Col>
                </Row>
            )}
            {showInfo() && (
                <Row className="mb-2">
                    <Col className="d-none d-sm-block fw-bold" 
                        xs={12} 
                        sm={4}>Threshold</Col>
                    <Col className="d-none d-sm-block fw-bold" 
                        xs={12} 
                        sm={4}>Description</Col>
                    <Col className="d-none d-sm-block fw-bold" 
                        xs={12} 
                        sm={2} 
                        style={{ textAlign: 'right' }}>Min</Col>
                    <Col className="d-none d-sm-block fw-bold" 
                        xs={12} 
                        sm={2} 
                        style={{ textAlign: 'right' }}>Max</Col>
                </Row> 
            )}
            { showInfo() && data.map(function(ele, idx) {
                const bmi = calculateBMI(weight, height);
                const selected = ((bmi >= ele.min && bmi <= ele.max) || (bmi <= ele.max && ele.min === null) || (ele.max === null && bmi >= ele.min));
                return (
                    <Row style={{ 
                            backgroundColor: ele.color, 
                            }} 
                            className={`mb-2 ${selected ? 'text-decoration-underline fw-bold' : ''}`}>
                        <Col xs={12} 
                             sm={4}>{ele.text}</Col>
                        <Col xs={12} 
                             sm={4}>{ele.description}</Col>
                        <Col xs={12} 
                             sm={2} 
                             style={{ textAlign: 'right' }}>
                            {ele.min ? calculateWeight(ele.min, height) + ' kgs.' : '-'} 
                        </Col>
                        <Col xs={12} 
                             sm={2} 
                             style={{ textAlign: 'right' }}>
                            {ele.max ? calculateWeight(ele.max, height) + 'kgs.' : '-'} 
                        </Col>
                    </Row>)       
            }) }
        </Container>
    );
}

export default HeightAndWeight;
