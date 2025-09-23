import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// GCD using Euclidean algorithm with BigInt
const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));

// LCM using BigInt
const lcm = (a, b) => {
  if (a === 0n) return a;
  else if ( b === 0n) return b
  return (a * b) / gcd(a, b);
};

app.get("/task3/gedeikissimas_gmail_com", (req, res) => {
  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    if (x < 0n || y < 0n || isNaN(x) || isNaN(y)) {
      return res.send("NaN");
    }

    const result = lcm(x, y);
    res.send(result.toString()); 
  } catch (err) {
    res.send("NaN");
  }
});
app.get("/gedeikissimas_gmail_com", (req, res) => {
  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    // Ensure both are positive integers (natural numbers)
    if (x <= 0n || y <= 0n) return res.send("NaN");

    const result = lcm(x, y);
    res.send(result.toString());
  } catch (err) {
    res.send("NaN");
  }
});


app.listen(PORT, () => {
});
