
let $title = document.querySelector('#title')
let $domain = document.querySelector('#domain')
let $author = document.querySelector('#author')
let $datePublished = document.querySelector('#date_published')
let $content = document.querySelector('#content')

let articleUrl = document.location.href.split('#')[1]

fetchArticle(articleUrl).then((response) => {
  setContent(response)
}) 

// functions
async function fetchArticle(url) {
  // replaceing / with $$
  let escapedArticleUrl = url.replace(/\//g, "\$")

  return new Promise((resolve, reject) => {
    fetch('/api/content/' + escapedArticleUrl)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log('JSON in function')
      console.log(json)
      resolve(json)
    })
  })
}
function setContent(articleJson) {
  $title.innerText = articleJson.title
  $content.innerHTML = articleJson.content

  $domain.innerText = articleJson.domain
  $author.innerText = articleJson.author
  $datePublished.innerText = articleJson.date_published
}