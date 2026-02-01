import { useState } from "react";
import Home from "./components/Home";
import DiagnosisForm from "./components/DiagnosisForm"; 
import DiagnosticChat from "./components/DiagnosticChat"; 

function App() {
  const [view, setView] = useState("home");

  return (
    <div className="App">
      {view === "home" && (
        <Home onGetStarted={() => setView("form")} />
      )}

      {view === "form" && (
        <DiagnosisForm onStart={() => setView("chat")} />
      )}

      {view === "chat" && (
        <DiagnosticChat />
      )}
    </div>
  );
}

export default App;