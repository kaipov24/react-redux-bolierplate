const { readFile, writeFile } = require("fs").promises

exports.getAll = async (req, res) => {
  const productsFromTheServer = await readFile(`${__dirname}/products.json`, {
    encoding: "utf8",
  })
    .then((data) => JSON.parse(data))
    .catch(async () => [])

  res.status(200).json(productsFromTheServer)
}
