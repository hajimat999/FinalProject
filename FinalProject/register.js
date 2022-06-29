let button2 = document.getElementById('button2')
button2.addEventListener('click', (e)=>{
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users'))
    let username = document.getElementById('username').value
    
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value
    let div2 = document.getElementById('div2')
    div2.style.display = 'none'
    let div3 = document.getElementById('div3')
    div3.style.display = 'none'
    let div4 = document.getElementById('div4')
    div4.style.display = 'none'
    if (!(isNaN(username[0])) || username === '' || username===null){
        div2.style.display = 'block'
    }
    if(password.length < 8 || password ==='' || password ===null) {
        div3.style.display = 'block'
    }
    if(email === '' || email === null){
        div4.style.display = 'block'
    }

    let existUsername = users.find(x=> x.Username === username)
    let existPassword = users.find(x=> x.Password === password)
    let exisEmail = users.find(x=> x.email === email)
    if(existUsename === undefined ){
        users.push({
            Username:username,
            Password: password,
            Email: email
        })
    }

})