const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
