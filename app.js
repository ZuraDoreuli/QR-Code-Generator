const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const qrCodeImg = document.querySelector('.qr-code-img')
const errorText = document.querySelector('.error-text')
const loader = document.querySelector('.loader')

const show = (element => {
  element.style.display = 'block'
})
const hide = (element => {
  element.style.display = 'none'
})

btn.addEventListener('click', () => {
  let qrCodeUrl = input.value
  if(qrCodeUrl === '') {
    qrCodeImg.src = ''
    hide(qrCodeImg)
    hide(errorText)
    show(loader)
    setTimeout(() => {
      hide(loader)
      show(errorText)
    }, 2000)
  } else {
    hide(errorText)
    show(loader)
    hide(qrCodeImg)
    setTimeout(() => {
      hide(loader)
      qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${qrCodeUrl}`
      show(qrCodeImg)
      input.value = ''
    }, 2000)
  }
})