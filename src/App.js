import "./App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";

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
        type="text"
        placeholder="value"
        value={props.value}
        readOnly={props.readOnly ? true : false}
        onChange={props.onChange}
      />
    </Col>
  </Form.Group>
);

function App() {
  const [principalValue, setPrincipalValue] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  const calculateCompoundInterest = () => {};

  return (
    <div className="App">
      <Form>
        <TextField
          label="Principal"
          onChange={(evt) => setPrincipalValue(evt.target.value)}
        />
        <TextField label="Interest Rate Per Annum" />
        <TextField label="Compound Frequency Per Year" />
        <TextField label="Deposit Tenor in Years" />
        <TextField label="Future Value" value={principalValue} readOnly />
        <TextField label="Gain" readOnly />
      </Form>
    </div>
  );
}

export default App;
