const form = document.querySelector("#form")
form.addEventListener("submit", e => validate(e))

function showMsg(text, type = 0) {
  const msg = document.getElementById("msg")
  msg.innerText = text

  msg.classList = ""
  msg.classList.add(type ? "bg-success" : "bg-danger")
}

let errCount = 0
function validate(event) {
  event.preventDefault()

  const email = document.querySelector("#email").value
  const textLength = document.querySelector("#text").value.length

  const emailRegEx = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/
  if (!emailRegEx.test(email)) {
    showMsg("Invalid email address!")
    errCount++
  }
  if (textLength > 200) {
    showMsg("Message too long! Max length is 200 charachters.")
    errCount++
  }
  if (errCount == 0) showMsg("Message sent sucessfuly!", 1)
  else errCount = 0
}
