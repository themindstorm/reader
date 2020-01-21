
let $form = document.querySelector('form')
let $articleInput = document.querySelector('#article_input')

$form.addEventListener('submit', function(e) {
  e.preventDefault()
  let articleUrl = $articleInput.value
  console.log(articleUrl)

  location.reload()
  window.location.href = `article.html#${articleUrl}`
})
