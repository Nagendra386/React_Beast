


import { Header } from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import ExamplesComponent from "./components/ExamplesComponent";

function App() {
  return (
    <div>
      <Header value="Fundamental" />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts/>
        <ExamplesComponent/>
      </main>
    </div>
  );
}

export default App;
