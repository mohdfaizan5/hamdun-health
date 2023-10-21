// Image slider
// const images = document.querySelectorAll(".sliding_carasol img");

// let i = 0;

// setInterval(function () {

//   images.forEach((img, i) => {
//     img.style.display = 'none';
//   })

//   if (i == images.length) {
//     i = 0;
//   }

//   images[i].style.display = 'block';

//   i++;

// }, 3000);



// Faq toggles

document.querySelectorAll(".faq").forEach(eachFaq => {

  eachFaq.querySelector('.question').addEventListener("click", () => {

    eachFaq.querySelector('.answer').classList.toggle("reveal_answer")
    document.querySelector(".question i").classList.toggle("ri-arrow-up-s-line")
  
  })
})


// Offer Popup
setTimeout(()=>{
  document.querySelector('header').style.filter = "blur(10px)"
  // document.querySelector('.sliding_carasol').style.filter = "blur(10px)"
  document.querySelector('main').style.filter = "blur(10px)"
  document.querySelector('.popup_wraper').style.display = 'flex'
  
}, 5000)

document.querySelector('.icon_popup').addEventListener('click', ()=>{
  document.querySelector('header').style.filter = "blur(0px)"
  // document.querySelector('.sliding_carasol').style.filter = "blur(0px)"
  document.querySelector('main').style.filter = "blur(0px)"
  document.querySelector('.popup_wraper').style.display = 'none'
  
})