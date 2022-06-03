const express = require("express");

const PORT = 3001;
const HOST = "0.0.0.0";

const app = express();

app.use(express.json());

app.post("/", (request, response) => {
  const body = request.body;
  console.log(body);
  response.json({
    user: {
      receiver: {
        name: "Gabriel Muller",
        idade: "19 anos",
        sexo: "Masculino",
        ano_nasc: "2002",
      },
      sender: {
        name: "Ricardo",
        idade: "XX anos",
        sexo: "Masculino",
        ano_nasc: "YYYY",
      },
    },
  });
});

app.listen(PORT, HOST);
