import { Button } from "@repo/ui";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Desktop</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}

export default App;