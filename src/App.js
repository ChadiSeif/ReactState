import React from "react";
import "./App.css";
import Person from "./Components/Person";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  state = {
    isShown: false,
  };

  render() {
    return (
      <div className="App">
        <Button
          onClick={() => this.setState({ isShown: !this.state.isShown })}
          variant="light"
        >
          PROFILE
        </Button>
        {this.state.isShown && <Person />}
      </div>
    );
  }
}

export default App;
