import './App.css';
import FundCard from "./components/fundcard/fundcard.js"
import Options from "./components/options/options.js"
import Items from "./components/items/items.js"
import Modal from "./components/expenseModal/modal.js";

function App() {
  return (
    <>
    <FundCard funds="3000"/>
    <Options />
    <Items />
    </>
  );
}

export default App;
