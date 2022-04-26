const loginForm = document.getElementById('login-form')
const baseEndpoint = "http://localhost:8000/api"
if (loginForm) {
    loginForm.addEventListener('submit', hangleLogin)
}

function hangleLogin(event) {
    console.log(event)
    event.preventDefault()
    const loginEndpoint = `${baseEndpoint}/token/`
    let loginFormData = new FormData(loginFrom)
    let loginObjectData = Object.fromEntries(loginFormData)
    let bodyStr = JSON.stringify(loginObjectData)
    const options = {
        method: "POST",
        headers: {
            "ContentType": "application/json"
        },
        body: bodyStr
    }
    fetch(loginEndpoint, options)
    .then(response=>{
        return response.json()
    })
    .then(x =>{
        console.log(x)
    })
    .catch(err =>{
        console.log(err)
    })
}