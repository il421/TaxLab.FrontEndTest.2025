import "./reset.css";
import "./libs/ui/global-styles/variables.css";
import "./index.css";
import "animate.css";

import { Header } from "./core-components/Header.tsx";
import { TaxesCalculatorScreen } from "./screens/taxes-calculator";
import { ReactQueryProvider } from "./libs/providers/react-query.provider.tsx";

function App() {
  return (
    <ReactQueryProvider>
      <main id="main">
        <Header />
        <TaxesCalculatorScreen />
      </main>
    </ReactQueryProvider>
  );
}

export default App;
