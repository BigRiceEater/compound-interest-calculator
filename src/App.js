import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect, useCallback } from "react";

const InputField = (props) => (
  <Form.Group
    as={Row}
    controlId={`formTextInput-${props.label}`}
    className="mb-3"
  >
    <Form.Label column sm="7">
      {props.label}
    </Form.Label>
    <Col sm="5">{props.children}</Col>
  </Form.Group>
);

const TextField = (props) => (
  <InputField label={props.label}>
    <Form.Control
      type="number"
      placeholder="value"
      value={props.value}
      readOnly={props.readOnly ? true : false}
      onChange={props.onChange}
    />
  </InputField>
);

const SelectField = ({ label, options, onChange }) => (
  <InputField label={label}>
    <Form.Select onChange={onChange}>
      {options.map(({ label, value }) => (
        <option key={`${label}-${value}`} value={value}>
          {label}
        </option>
      ))}
    </Form.Select>
  </InputField>
);

const MonthsPerYear = 12;
const WeeksPerMonth = 4;
const DaysPerWeek = 7;

function App() {
  const [principalValue, setPrincipalValue] = useState(10000);
  const [interestRatePerAnnum, setInterestRatePerAnnum] = useState(0.00635);
  const [compoundFrequencyPerYear, setCompoundFrequencyPerYear] = useState(12);
  const [depositTenorInYears, setDepositTenorInYears] = useState(0.5);
  const [futureValue, setFutureValue] = useState(0);
  const [gainValue, setGainValue] = useState(0);

  const calculateCompoundInterest = useCallback(() => {
    const result =
      principalValue *
      (1 + interestRatePerAnnum / compoundFrequencyPerYear) **
        (compoundFrequencyPerYear * depositTenorInYears);
    setFutureValue(result);
    setGainValue(result - principalValue);
  }, [
    principalValue,
    interestRatePerAnnum,
    compoundFrequencyPerYear,
    depositTenorInYears,
  ]);

  useEffect(() => {
    calculateCompoundInterest();
  }, [calculateCompoundInterest]);

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
        <SelectField
          label="Compound Frequency Per Year"
          options={[
            { label: "Yearly", value: 1 },
            { label: "Monthly", value: 12 },
            { label: "Weekly", value: 52 },
            { label: "Daily", value: 365 },
          ]}
          onChange={(evt) => setCompoundFrequencyPerYear(evt.target.value)}
        />
        <SelectField
          label="Deposit Tenor in Years"
          options={[
            { label: "1 Year", value: 12 / MonthsPerYear },
            { label: "9 Months", value: 9 / MonthsPerYear },
            { label: "6 Months", value: 6 / MonthsPerYear },
            { label: "3 Months", value: 3 / MonthsPerYear },
            { label: "2 Months", value: 2 / MonthsPerYear },
            { label: "1 Month", value: 1 / MonthsPerYear },
            { label: "1 Week", value: 1 / WeeksPerMonth / MonthsPerYear },
            {
              label: "A Day",
              value: 1 / DaysPerWeek / WeeksPerMonth / MonthsPerYear,
            },
          ]}
          onChange={(evt) => setDepositTenorInYears(evt.target.value)}
        />
        <TextField label="Future Value" value={futureValue} readOnly />
        <TextField label="Gain" value={gainValue} readOnly />
      </Form>
    </div>
  );
}

export default App;
