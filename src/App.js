import logo from "./logo.svg";
import "./App.css";
import Routing from "./services/config/router";
import SignupHeader from "./components/SignupHeader";

function App() {
  return (
    <>
      <SignupHeader />
      <Routing />
    </>
  );
}

export default App;
