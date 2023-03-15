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

            const register_api = 'https://busy-gold-dhole-boot.cyclic.app/customer'

            try {
                let res = await fetch(`${register_api}?email=${this.email}`)
                let data = await res.json()
                console.log(data);
                if (data.length == 0) {
                    // console.log(result, 'yes');
                    let res = await fetch(register_api, {
                        method: 'POST',
                        body: JSON.stringify(this),
                        headers: { 'content-type': 'application/json' }
                    })
                    console.log(res);
                    location = './signin.html'
                } else {
                    document.getElementById('error').style.display = 'flex'
                    document.getElementById('error').innerText = 'Register fail user Alredy exist sorry'
                    document.getElementById('email').style = "text-decoration: underline wavy red"
                }


                // const response = await fetch(register_api, {
                //     method: 'POST',
                //     // mode: 'cors',
                //     body: JSON.stringify(this),
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // })
                // const result = await response.json()
                // console.log(result)
                // if (result.error) {
                //     console.log('nahi hoga bhai tererere')

                // } else {
                //     location = './signin.html'
                // }

            } catch (err) {
                document.getElementById('error').style.display = 'flex'
                document.getElementById('error').innerText = 'Internal server error! Try after some time'
                // document.getElementById('email').style = "text-decoration: underline wavy red"
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
        const login_data = {
            username: u,
            password: p,
        }
        console.log(login_data, 'login_data');
        const register_api = 'https://busy-gold-dhole-boot.cyclic.app/customer'
        console.log(`${register_api}?email=${login_data.username}`);
        try {
            let res = await fetch(`${register_api}?email=${login_data.username}`)
            let data = await res.json()
            console.log(data);
            if (data.length > 0) {
                console.log('result', `${register_api}?email=${login_data.username}&password=${login_data.password}`);
                let res = await fetch(`${register_api}?email=${login_data.username}&password=${login_data.password}`)
                res = await res.json()
                console.log(res);
                if (res.length >= 1) {
                    let { email, username, name } = res[0]
                    let newData = { email, username, name, token: Math.random() }
                    // console.log(email);
                    console.log(newData, 'boy');
                    localStorage.setItem('userDetail', JSON.stringify(newData))
                    location = './'
                    console.log('res');
                } else {
                    document.getElementById('error').style.display = 'flex'
                    document.getElementById('error').innerText = 'Bad Credentials'
                }
            } else {
                document.getElementById('error').style.display = 'flex'
                document.getElementById('error').innerText = 'User dont exist'
                document.getElementById('email').style = "text-decoration: underline wavy red"
                setTimeout(() => {
                    location = './signup.html'
                }, 2000);
            }

        } catch (err) {
            document.getElementById('error').style.display = 'flex'
            document.getElementById('error').innerText = 'Internal server error! Try after some time'
            // document.getElementById('email').style = "text-decoration: underline wavy red"
            console.log(err)
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
