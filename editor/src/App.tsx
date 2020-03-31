import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [text, setText] = useState("")
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    const f = async () => {
      const res = await axios
      .get(`api/text/${language}/1`)
      .catch(e => {
        console.log(e);
      });

    if (!res) {
      console.log(res);
      return;
    }

    setText(res.data);
    }
    f()
  }, [language, value])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleClick = async () => {
    if (!value) return;
    const res = await axios
      .post(`api/execute_code/${language}`, { code: value })
      .catch(e => {
        console.log(e);
      });

    if (!res) {
      console.log(res);
      return;
    }

    setResult(res.data);
  };

  return (
    <Row className="p-4 m-0">
      <Col style={{ width: "100%" }}>

      </Col>
      <Col style={{ width: "100%"}}>
        <Row className="pt-2 m-0">
          <Editor language={language} value={value} setValue={setValue} />
          <div
            className="d-flex justify-content-end mt-4"
            style={{ width: "100%" }}
          >
            <select onChange={handleChange} value={language} className="mr-4">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
            <Button variant="success" onClick={handleClick}>
              Console
            </Button>
          </div>
        </Row>
        <Row className="m-0 mt-2">
          <div
            style={{
              border: "1px solid gray",
              width: "100%",
              minHeight: "150px",
              borderRadius: 3,
              background: "whitesmoke"
            }}
            className="p-4"
          >
            {result}
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default App;
