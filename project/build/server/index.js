const getNavigatorList = function(app) {
  app.get("/getNavigatorList", (req, res) => {
    let data = require("./data/navigator.json");
    res.send(data);
  })
}

const getCarouselList = function(app) {
  app.get("/getCarouselList", (req, res) => {
    let data = require("./data/carousel.json");
    res.send(data);
  })
}

const getDropDownList = function(app) {
  app.get("/getDropDownList", (req, res) => {
    let data = require("./data/dropdown.json");
    res.send(data);
  })
}

module.exports = function(app) {
  getNavigatorList(app);
  getCarouselList(app);
  getDropDownList(app);
}
