import "./App.css";
import dataArr from "./Description/FoldersData";
import { PrintFolder } from "./container/PrintFolder";

function App() {
  return (
    <div className="App">
      <PrintFolder dataArr={dataArr} />
    </div>
  );
}

export default App;
