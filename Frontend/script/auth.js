class user {
    constructor() {
    }

    vaildateUsername(username) {
        return username.includes('@') ? true : false;
    }

    validatePassword(password) {
        return password.length >= 8 ? true : false;
    }

    async signUp(n, e, u, p, m, d) {
        console.log(u, p, 'up');
        //check if username is submiting valid username and password
        let isValidated = this.vaildateUsername(u) && this.validatePassword(p);
        console.log(isValidated, 'valid');
        if (isValidated) {
            // now we can store the data


            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = String(m);
            this.description = d;
            console.log(this)

            // now userData is stored and now we can send it to server show we can register our new user

            const register_api = 'https://masai-api-mocker.herokuapp.com/auth/register'

            try {
                const response = await fetch(register_api, {
                    method: 'POST',
                    // mode: 'cors',
                    body: JSON.stringify(this),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const result = await response.json()
                console.log(result)
                if (result.error) {
                    console.log('nahi hoga bhai tererere')
                    document.getElementById('error').style.display = 'flex'
                    document.getElementById('error').innerText = result.message
                    document.getElementById('email').style = "text-decoration: underline wavy red"

                } else {
                    location = './signin.html'
                }

            } catch (err) {
                console.log(err)
            }

            // window.location.href = './signin.html'


        } else {
            // alert(`
            // Email or password is not valid 
            // > Your Password should be greater then 8 
            // > Your Password must containe any special character
            // > Email also should be valid email`)
            document.getElementById('error').style.display = 'flex'
            document.getElementById('error').innerText = `Email or password is not valid`
            if (!this.vaildateUsername(u)) {
                document.getElementById('email').style = "text-decoration: underline wavy red"
            }
            if (!this.vaildateUsername(p)) {
                document.getElementById('password').style = "text-decoration: underline wavy red"
            }
            document.getElementById('signupform').onclick = () => {
                document.getElementById('email').style = "text-decoration: none"
                document.getElementById('password').style = "text-decoration: none"
            }
            // console.log('username or password is not valid')
        }

        // remove signup loader
        document.getElementById('loder').classList.remove('loder')
        document.getElementById('spin').classList.remove('spin')
    }

    async login(u, p) {

        try {
            const login_data = {
                username: u,
                password: p,
            }

            const login_api = 'https://masai-api-mocker.herokuapp.com/auth/login'

            const response = await fetch(login_api, {
                method: 'POST',
                // origin: '*',
                // mode: 'cors',
                body: JSON.stringify(login_data),
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': 'https://masai-api-mocker.herokuapp.com'
                }
            })

            const data = await response.json()
            console.log(data, 'skjdf')
            return data
        }
        catch (err) {
            console.log('errrr:', err)
            document.getElementById('error').style.display = 'flex'
            document.getElementById('error').innerText = `Wrong Credentials`
            console.log('sdfasf')
            let loginDiv = document.getElementById('loginform')
            loginDiv.style.animation = "user 0.1s linear 5"
            setTimeout(() => {
                if (loginDiv.style.removeProperty) {
                    console.log('sahi laga')
                    loginDiv.style.removeProperty('animation');
                } else {
                    console.log('sahi laga thora sa')
                    loginDiv.style.removeAttribute('animation');
                }
            }, 2000);

        }

        // remove signin loader
        document.getElementById('loder').classList.remove('loder')
        document.getElementById('spin').classList.remove('spin')
    }

    async profileDetail(username, token) {
        try {
            const profile_api = `https://masai-api-mocker.herokuapp.com/user/${username}`

            const response = await fetch(profile_api, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            let data = await response.json()
            console.log(data, 'data')
            localStorage.setItem('userDetail', JSON.stringify(data))
            location = './index.html'
            // console.log(username, token)

        }
        catch (err) {
            console.log('err:', err)
        }


    }
}

let person = new user()

let Register = (event) => {
    event.preventDefault()
    // loader start
    document.getElementById('loder').classList = 'loder'
    document.getElementById('spin').classList = 'spin'

    const reg_form = document.querySelector('#signupform')
    const name = reg_form.name.value;
    const email = reg_form.email.value;
    const username = email
    const password = reg_form.password.value;
    const mobile = (23423434) * (Math.ceil(Math.random() * 10000))
    const description = email;



    person.signUp(name, email, username, password, mobile, description)
    console.log(name, email, username, password, mobile, description)
}

let Login = async (event) => {
    event.preventDefault()
    // loader start
    document.getElementById('loder').classList = 'loder'
    document.getElementById('spin').classList = 'spin'

    const username = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (username == "") {
        document.getElementById('email').style.animation = "animation: user 0.1s linear 5;"
    } if (password == "") {
        document.getElementById('password').style.animation = "animation: user 0.1s linear 5;"
    } if (username != "" && password != "") {
        let { token } = await person.login(username, password)
        person.profileDetail(username, token)
    }
}


// document.querySelector("#signupform").addEventListener("submit", Register);


// function formfunc(event) {
//     event.preventDefault();
//     // let name = document.querySelector("#name").value;
//     // let email = document.querySelector("#email").value;
//     // let password = document.querySelector("#password").value;

//     window.location.href = "./signin.html";
//     // window.open("signin.html");
// }
