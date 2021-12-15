const Tmr = require("../models/Tmr");
const axios = require("axios");

const Ctrl = {};

Ctrl.addPrice = async (req, res) => {
  try {
    // condition for job
    var id = req.body.id == undefined ? "bitcoin" : req.body.id;
    // get price crypto
    let { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/" + id //Previous link did not work
    );
    const tmr = new Tmr({ price: data.market_data.current_price.usd });
    await tmr.save();
    res.status(200).send({ message: "data inserted" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

Ctrl.getPrices = async (req, res) => {
  try {
    let data = await Tmr.find();
    res.json({ data: data });
  } catch (error) {
    console.log(error)
    res.status(402).send(error);
  }
};

module.exports = Ctrl;
