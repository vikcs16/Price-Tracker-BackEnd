const cheerio = require("cheerio");

function priceparser(response) {
  const $ = cheerio.load(response.data);
  let price = $(
    ".a-price-whole",
    "#corePriceDisplay_desktop_feature_div"
  ).text();
  price += $(
    ".a-price-fraction",
    "#corePriceDisplay_desktop_feature_div"
  ).text();
  return price
}

module.exports = priceparser;
