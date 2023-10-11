// Faq toggling
const faqContainer = document.querySelector("#faqContainer")
const toggleFaqBtns = faqContainer.querySelectorAll('button')

faqContainer.addEventListener('click', (event)=>{
  
  console.log(event.target.classList.contains('faq-toggle'))
})
