import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";

const TextField = (props) => (
  <Form.Group
    as={Row}
    controlId={`formTextInput-${props.label}`}
    className="mb-3"
  >
    <Form.Label column sm="7">
      {props.label}
    </Form.Label>
    <Col sm="5">
      <Form.Control
        type="number"
        placeholder="value"
        value={props.value}
        readOnly={props.readOnly ? true : false}
        onChange={props.onChange}
      />
    </Col>
  </Form.Group>
);

function App() {
  const [principalValue, setPrincipalValue] = useState(10000);
  const [interestRatePerAnnum, setInterestRatePerAnnum] = useState(0.00635);
  const [compoundFrequencyPerYear, setCompoundFrequencyPerYear] = useState(12);
  const [depositTenorInYears, setDepositTenorInYears] = useState(0.5);
  const [futureValue, setFutureValue] = useState(0);
  const [gainValue, setGainValue] = useState(0);

  useEffect(() => {
    calculateCompoundInterest();
  }, [
    principalValue,
    interestRatePerAnnum,
    compoundFrequencyPerYear,
    depositTenorInYears,
  ]);

  const calculateCompoundInterest = () => {
    const result =
      principalValue *
      (1 + interestRatePerAnnum / compoundFrequencyPerYear) **
        (compoundFrequencyPerYear * depositTenorInYears);
    setFutureValue(result);
    setGainValue(result - principalValue);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Row>
          <Col>
            <FontAwesomeIcon
              className="mb-5"
              icon={faHandHoldingDollar}
              style={{ fontSize: "128" }}
            />
          </Col>
        </Row>
      </div>
      <Form>
        <TextField
          label="Principal"
          value={principalValue}
          onChange={(evt) => setPrincipalValue(evt.target.value)}
        />
        <TextField
          label="Interest Rate Per Annum"
          value={interestRatePerAnnum}
          onChange={(evt) => setInterestRatePerAnnum(evt.target.value)}
        />
        <TextField
          label="Compound Frequency Per Year"
          value={compoundFrequencyPerYear}
          onChange={(evt) => setCompoundFrequencyPerYear(evt.target.value)}
        />
        <TextField
          label="Deposit Tenor in Years"
          value={depositTenorInYears}
          onChange={(evt) => setDepositTenorInYears(evt.target.value)}
        />
        <TextField label="Future Value" value={futureValue} readOnly />
        <TextField label="Gain" value={gainValue} readOnly />
      </Form>
    </div>
  );
}

export default App;
