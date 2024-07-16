const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const routes = require("./routes");

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));

// Configurer le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, "views")));

// Utiliser les routes définies
app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = app;
