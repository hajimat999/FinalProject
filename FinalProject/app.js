if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify([]))
}
let button = document.getElementById('button')
button.addEventListener('click', (e) => {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem('users'))
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let div = document.getElementById('div')
    div.style.display = 'none'
    let div2 = document.getElementById('div2')
    div2.style.display = 'none'
    let div3 = document.getElementById('div3')
    div3.style.display = 'none'
    let findUsername = users.find(x => x.Username === username);
    let findPassword = users.find(x => x.Password === password);
    if (!(isNaN(username[0]))) {
        div2.style.display = 'block'   
    }
    if(password.length < 8) {
        div3.style.display = 'block'
    }
    if(findUsername === undefined || findPassword === undefined){
        div.style.display = 'block'       
    }
    else {
        let first = document.getElementById('first')
        let h1 = document.getElementById('h1')
        first.style.display = 'none'
        h1.style.opacity = '1'
    }

})


