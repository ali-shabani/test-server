const express = require("express");

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/mqtt", (req, res) => {
  const { username, password } = req.body;

  res.send({
    mqtt: {
      url: "url",
      username: "username",
    },
    station: {},
  });
});

app.listen(port, () => {
  console.log(`app is running on port: ${port}`);
});
