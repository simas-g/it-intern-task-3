import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// GCD using Euclidean algorithm with BigInt
const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));

// LCM using BigInt
const lcm = (a, b) => {
  if (a === 0n || b === 0n) return 0n;
  return (a * b) / gcd(a, b);
};

app.get("/gedeikissimas_gmail_com", (req, res) => {
  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    if (x < 0n || y < 0n) {
      return res.send("NaN");
    }

    const result = lcm(x, y);
    res.send(result.toString()); 
  } catch (err) {
    res.send("NaN");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/gedeikissimas_gmail_com?x=12&y=18`);
});
