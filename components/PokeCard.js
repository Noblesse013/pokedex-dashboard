import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

const pokeQuotes = [
  "Be strong like Machamp! 💪",
  "Train hard like Pikachu and never give up! ⚡",
  "Stay calm and strategic like Alakazam! 🧠",
  "Fly high like Charizard and reach your goals! 🔥",
  "Adapt and evolve like Eevee to overcome challenges! ✨",
  "Keep going like Ash , your journey is just beginning! 🌟",
  "Face obstacles head-on like Onix! 🚀",
  "Stay determined like Bulbasaur, even when things are tough! 🍃"
];

const PokeCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const randomId = Math.floor(Math.random() * 151) + 1; // Random Pokémon (1-151)
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      setPokemon(response.data);

      // Pick a random quote
      const randomQuote = pokeQuotes[Math.floor(Math.random() * pokeQuotes.length)];
      setQuote(randomQuote);
    };

    fetchPokemon();
  }, []);

  return (
    <Card style={{ margin: "20px", textAlign: "center", padding: "10px" }}>
      <CardContent>
        {pokemon ? (
          <>
            <Typography variant="h5">{pokemon.name.toUpperCase()}</Typography>
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
              style={{ width: "100px" }} 
            />
            <Typography variant="body2" style={{ marginTop: "10px", fontStyle: "italic" }}>
              {quote}
            </Typography>
          </>
        ) : (
          <CircularProgress />
        )}
      </CardContent>
    </Card>
  );
};

export default PokeCard;
