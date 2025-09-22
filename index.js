import express from "express";

const app = express();
const port = 3000;

// GCD + LCM functions
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

app.get("/gedeikissimas_gmail_com", (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);

  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
    return res.send("NaN");
  }

  res.send(String(lcm(x, y)));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/gedeikissimas_gmail_com`);
});
