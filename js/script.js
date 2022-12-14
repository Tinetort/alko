const buttons = document.querySelectorAll('.popup-btn')
const closePopUp = document.getElementById('pop-up-close')
const popUp = document.getElementById('pop-up')

buttons.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    popUp.classList.add('active')
  })
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active')
})
