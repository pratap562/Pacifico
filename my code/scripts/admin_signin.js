

class User {

    constructor() {

    }

    async Login(u, p) {
        const login_data = {
            username: u,
            password: p,
        };

        const login_api = 'https://masai-api-mocker.herokuapp.com/auth/login'

        const response = await fetch(login_api, {
            method: 'POST',
            body: JSON.stringify(login_data),

            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data)
        return data;
    }
}

let user = new User()

const Login = async () => {
    const username = document.getElementById('email').value
    const password = document.getElementById("password").value

    let { token } = await user.Login(username, password);
    // console.log(token)

    profile(username, token)

    if (token !== null) {
        window.location.href = "admin.html";
    }
}

const loginBtn = document.getElementById("login")
loginBtn.onclick = () => {
    // window.location.href = "admin.html";
    Login()
}

const profile = async (username, token) => {
    let api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`

    let response = await fetch(api_link, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
    let data = await response.json();
    // console.log(data)

    let user_name = data.username
    localStorage.setItem("name", JSON.stringify(user_name))
}

//End of day-2


//start of day-3


// orders = {
//     date, customerName, customerId, productId, productName, price, paymentStatus, productUrl
// }


// wishList = {
//     proeductName, price, imgUrl, customerId
// }

// cart = {
//     proeductName, price, imgUrl, customerId
// }