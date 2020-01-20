const Mercury = require('@postlight/mercury-parser')

module.exports = async (req, res) => {
  const {
    query: { escapedArticleUrl }
  } = req

  // replacing $ with /
  let articleUrl = escapedArticleUrl.replace(/\$/g, "/")

  await Mercury.parse(articleUrl).then(result => {
    res.json(result)
  })
}