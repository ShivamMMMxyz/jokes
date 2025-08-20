import express from "express"
import cors from'cors'
import dotenv from 'dotenv'

dotenv.config();

const app =express();

app.use(cors());

app.use(express.json())

const PORT =process.env.PORT || 5000;

app.use(cors({
  origin: ["http://localhost:5173"]
}));


const jokes = [
  { id: 1, joke: "Why don’t programmers like nature? It has too many bugs." },
  { id: 2, joke: "Why did the computer go to therapy? It had a hard drive." },
  { id: 3, joke: "Why was the JavaScript developer sad? They didn’t Node how to Express themselves." },
  { id: 4, joke: "Why did the database admin break up? Too many relations." },
  { id: 5, joke: "Why did the function break up with the loop? Better scope." },
  { id: 6, joke: "Why do Java developers wear glasses? Because they don’t C#." },
  { id: 7, joke: "Why did the frontend developer quit? Because they didn’t get arrays." },
  { id: 8, joke: "Why did the CSS file go to the party? To get styled." },
  { id: 9, joke: "Why did the server go broke? Because it kept getting requests without payment." },
  { id: 10, joke: "Why do Python programmers prefer snakes? Because they don’t like Java." }
];

// Endpoint to send jokes
app.get("/jokes", (req, res) => {
  res.json(jokes);
});


app.get('/',(req,res)=>{
    res.status(200).json.end('hello')
})




app.listen(PORT,()=>{
    console.log(`✅ Server running on http://localhost:${PORT}`)
})