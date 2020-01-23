
let $title = document.querySelector('#title')
let $domain = document.querySelector('#domain')
let $author = document.querySelector('#author')
let $datePublished = document.querySelector('#date_published')
let $content = document.querySelector('#content')
let $originalLink = document.querySelector('#original')

let articleUrl = document.location.pathname.split('/a/')[1].split(':')[1]
// let articleUrl = document.location.pathname

// when pasting links, sometimes a / after https:// gets removed
if (articleUrl[0] === "/") {
  articleUrl = articleUrl.substr(1)
}

articleUrl = 'http://' + articleUrl


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// link to original article
$originalLink.href = articleUrl

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
      console.log(json)
      resolve(json)
    })
  })
}
function setContent(articleJson) {
  $title.innerText = articleJson.title
  document.title = articleJson.title

  $content.innerHTML = articleJson.content

  $domain.innerText = articleJson.domain
  $author.innerText = articleJson.author

  let date = new Date(articleJson.date_published)
  console.log(articleJson.date_published)
  console.log(date)
  console.log(date.getDate())
  $datePublished.innerText = `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`

  // make css normal
  // TODO
  // console.log($content.style.height)
  // $content.style.height = 'unset'
}