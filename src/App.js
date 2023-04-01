import "./App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
      <Form.Control type="text" placeholder="value" />
    </Col>
  </Form.Group>
);

function App() {
  return (
    <div className="App">
      <Form>
        <TextField label="Principal" />
        <TextField label="Interest Rate Per Annum" />
        <TextField label="Compound Frequency Per Year" />
        <TextField label="Deposit Tenor in Years" />
      </Form>
    </div>
  );
}

export default App;
