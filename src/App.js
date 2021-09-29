import "./App.css";
import DisplayChanges from "./components/DisplayChanges";
import { useState } from "react";
import DisplayAll from "./components/DisplayAll";
import RegistrationFruits from "./components/RegistrationFruits";
import TotalFruits from "./components/TotalFruits";

function App() {
  const [products, setProducts] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  return (
    <main className="App">
      <RegistrationFruits setFruits={setProducts} fruits={products} />
      <DisplayChanges fruits={products} />
      <DisplayAll fruits={products} />
      <TotalFruits fruits={products} />
    </main>
  );
}

export default App;
