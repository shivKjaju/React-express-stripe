const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Stripecharge = res => (serr, sres) => {
    if (serr){
        res.status(500).send({error: serr});
    }
    else{
        res.status(200).send({success: sres});
    }
};

const payApi = app => {
    app.get('/', (req, res) => {
        res.send({
            message: "Stripe checkout server",
            timestamp: new Date(). toISOString()
        });
    });

    app.post('/', (req,res) => {
        const body = {
            source: req.body.token.id,
            amount: req.body.amount,
            currency: "usd"
        };
        stripe.charges.create(body, Stripecharge(res));
    });
    return app;
};

module.exports = payApi;

