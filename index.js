const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded());

const pokedex = [
  {
    id: 0,
    nome: "Bulbasaur",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 1,
    nome: "Charmander",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 2,
    nome: "Squirtle",
    descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    id: 3,
    nome: "Pikachu",
    descricao:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    tipo: "Eletric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
];
let message = ""

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {    
      setTimeout(() => {
        message = "";
      }, 1000);
      res.render("index", {
      pokedex,
      message,
      
    });
  });

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id];
  res.render("details", {
    pokemon,
    
  });
});


app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});
  
app.post("/cadastrar", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length;
  pokedex.push(pokemon);
    
  res.redirect("/");
}); 

  

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);