
let $form = document.querySelector('form')
let $articleInput = document.querySelector('#article_input')

$form.addEventListener('submit', function(e) {
  e.preventDefault()
  let articleUrl = $articleInput.value
  console.log(articleUrl)
  window.location.href = `article.html#${articleUrl}`
  location.reload()
})
