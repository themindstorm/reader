const Mercury = require('@postlight/mercury-parser')

module.exports = async (req, res) => {
  const {
    query: { escapedArticleUrl }
  } = req

  // replacing $ with /
  let articleUrl = escapedArticleUrl.replace(/\$/g, "/")

  // res.json({'t': 'a'})

  await Mercury.parse(articleUrl).then(result => {
    res.json({
      "articleUrl": articleUrl,
      "title": result.title,
      "content": result.content
    })
  })
}