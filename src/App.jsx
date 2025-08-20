import "./App.css";
import Header from "./components/templates/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main className="w-11/12 max-w-[50rem] m-auto">
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
