
let $form = document.querySelector('form')
let $articleInput = document.querySelector('#article_input')

$form.addEventListener('submit', function(e) {
  e.preventDefault()
  let articleUrl = $articleInput.value
  console.log(articleUrl)

  window.location.href = '/a/' + articleUrl
  // window.location.href = `article.html#${articleUrl}`
  // if (location.href.includes('article')) {
  //   location.reload(true)
  // } else {
  // }
})
