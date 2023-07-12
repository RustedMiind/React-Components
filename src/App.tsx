import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ValidInput from "./components/validInput/ValidInput";
import SnakeCursor from "./components/snake-cursor/SnakeCursor";

function App() {
  const inputState = useState("");
  return (
    <div className="App">
      <SnakeCursor />
      {/* <Navbar
        className="bg-red"
        loginCallback={() => {
          console.log("Login button targeted");
        }}
        logo={{
          type: "image",
          payload:
            "https://www.thebalancemoney.com/thmb/1Du74z2oTAVhbL98WTXsMvop9A8=/fit-in/1500x1000/filters:format(png):fill(transparent):max_bytes(150000):strip_icc()/Summitsoft-d3565227c58a4471ab17e9b3186bc24d.jpg",
        }}
        navLinks={
          <>
            <a href="/home">Home</a>
            <a href="/home">Menu</a>
            {true && <a href="/home">Cart</a>}
          </>
        }
        userDropdown={
          <>
            Any JSX Element
            <input type="text" placeholder="Test" />
          </>
        }
        isUser={false}
      />
      <div>
        <ValidInput
          errorMessage="Invalid Input"
          inputState={inputState}
          type="PHONE"
        />
      </div>
      <div>
        <ValidInput inputState={inputState} type="NUMBER" />
      </div> */}
    </div>
  );
}

export default App;
