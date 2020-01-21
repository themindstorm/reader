
let $form = document.querySelector('form')
let $articleInput = document.querySelector('#article_input')

$form.addEventListener('submit', function(e) {
  e.preventDefault()
  let articleUrl = $articleInput.value
  document.location = document.location.host + `/article.html#${articleUrl}`
})
