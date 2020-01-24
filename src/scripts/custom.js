
let $themeCustomizationButton = document.querySelector('#customization-options')
let $themeCustomizationToggles = document.querySelector('#customization-toggles')

let $themeToggleButton = document.querySelector('#theme_toggle')
let $fontToggleButton = document.querySelector('#font_toggle')

$themeCustomizationButton.onclick = () => {
  if ($themeCustomizationToggles.style.display === "" || $themeCustomizationToggles.style.display === "none") {
    $themeCustomizationToggles.style.display = 'block'
    console.log('its either none or ;;')
  } else {
    $themeCustomizationToggles.style.display = 'none'
    console.log('its was block')
  }
}

$themeToggleButton.onclick = () => {
  if (document.body.getAttribute('data-theme') === 'light') {
    document.body.setAttribute('data-theme', 'dark')
  } else {
    document.body.setAttribute('data-theme', 'light')
  }
}

$fontToggleButton.onclick = () => {
  if (document.body.getAttribute('data-font') === 'sansserif') {
    document.body.setAttribute('data-font', 'serif')
  } else {
    document.body.setAttribute('data-font', 'sansserif')
  }
}