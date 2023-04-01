import "./App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TextField = (props) => (
  <Form.Group as={Row} controlId={`formTextInput-${props.label}`}>
    <Form.Label column sm="4">
      {props.label}
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="value" />
    </Col>
  </Form.Group>
);

function App() {
  return (
    <div className="App">
      <Form>
        <TextField label="Principal" />
      </Form>
    </div>
  );
}

export default App;
