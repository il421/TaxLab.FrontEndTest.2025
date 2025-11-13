import "./reset.css";
import "./libs/ui/global-styles/variables.css";
import "./index.css";
import "animate.css";

import { Header } from "./core-components/Header.tsx";
import { TaxesCalculatorScreen } from "./screens/taxes-calculator";

function App() {
  return (
    <main id="main">
      <Header />
      <TaxesCalculatorScreen />
    </main>
  );
}

export default App;
