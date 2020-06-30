import * as ReactDOM from "react-dom";
import * as React from "react";

interface TestProps {
  message: string;
}

function Test(props: TestProps) {
  return <div>Message: {props.message}</div>;
}

ReactDOM.render(<Test message="Test props" />, document.getElementById("root"));
