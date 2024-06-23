import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "./baseUrl";
import './App.css';

function App() {
  const [test, setTest] = useState('');
  useEffect(() => {
    axios
      .get(`${baseUrl}/test`)
      .then((res) => setTest(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App bg-slate-100">
      Hello cloud!
      <h1>{test}</h1>
    </div>
  );
}

export default App;
