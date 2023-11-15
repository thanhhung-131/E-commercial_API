const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY || 'sk_test_51NjI35LtxMLrCM1HxLZxjB3t9oO1YFK5tp28bxiR9ypZ9av9jgCscllf4iBBdMSgNpsbr7zyrhwf8eGsSRgBZAQt00AWduF4MN'
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;