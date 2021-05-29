const productsModels = require("../models/productsModel.js")

const brandList = (req, res) => {
    productsModels.find()
        .then((result) => {
            console.log(result)
            res.json(result);
        })
        .catch((err) => {
            console.log(err)
        })
};

module.exports = {
    brandList
};