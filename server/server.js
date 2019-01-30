require('dotenv').config();

const { Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

// app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

client.connect();

app.get("/api/ideas", function(req, res) {
  const query = 'SELECT * FROM ideas';
  client.query(query, (err, results) => {
    if (err) throw err;
    const ideas = results.rows;
    // console.log(ideas)
    res.send({ ideas })
    // res.render("home", {data: count});
  });
});

app.get("/api/create", function(req, res) {
  const query = 'INSERT INTO ideas(category, name, description, target, user_id) VALUES ($1, $2, $3, $4, $5)'
  const values = ['Web app1', 'Syder Ideas1', 'A solution for people who wants to store their ideas1', 'People who wants to store their ideas1', 1];
  client.query(query, values, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(`I have received your POST request. This is what you sent me: ${req.body.post}`);
// });

app.listen(port, () => console.log(`Listening on port ${port}`))