import { useEffect, useState } from "react";
import "./App.css"; 

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jokes")
      .then((res) => res.json())
      .then((data) => setJokes(data));
  }, []);

  return (
    <div className="app-container">
           <h1>Jokes </h1>
      <ul className="jokes-list">
        {jokes.map((j) => (
          <li key={j.id} className="joke-item">
            {j.joke}
             </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
