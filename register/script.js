// Formatar Número de Celular //

const formato = {

    phone (value) {
  
      return value
  
        .replace(/\D/g, '')
  
        .replace(/(\d{2})(\d)/, '($1)$2')
  
        .replace(/(\d{4})(\d)/, '$1-$2')
  
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
  
        .replace(/(-\d{4})\d+?$/, '$1')
    }
  }
  document.querySelectorAll('input').forEach(($input) => {
  
    const field = $input.dataset.js
  
    $input.addEventListener('input', (e) => {
  
      e.target.value = formato[field](e.target.value)
  
    }, false)
  })
  
   
// Alternar entre Dark Theme //

const $html = document.querySelector('html')
const $checkbox = document.querySelector('.checkbox')

$checkbox.addEventListener('change', function() { 
    $html.classList.toggle('dark-mode')
})