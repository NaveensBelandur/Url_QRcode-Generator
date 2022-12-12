const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')




const onGeneSubmit = (e) =>{
  e.preventDefault()
  const url = document.getElementById('url').value
  console.log(url)

  if(url === ''){
    alert('Please enter a URL')
  }else {
     console.log(document.getElementById('qrcode'))
      generateRCode(url)
     
     
    }
  

}


const  generateRCode = (url)=>{
  const qrcode = new QRCode('qrcode',{
    text:url,
    width:200,
    height:200
  })
  
}



setTimeout(()=>{
  alert('QR Code Expired')
  window.location.reload()

},15000)




form.addEventListener('submit',onGeneSubmit)

