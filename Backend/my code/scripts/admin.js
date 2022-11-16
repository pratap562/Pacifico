// import navbar from "./components/logo.js"

// let dash = document.getElementById("logo")
// dash.innerHTML = navbar();

// let arr = ['kumpratap562@gmail.com', , 'ram53243@gmail.com']
// let clr = ['pink', 'orange']
// let team = document.getElementById('team')
// arr.forEach((el, i) => {
//     let div = document.createElement('div')
//     let cir = document.createElement('div')
//     let p = document.createElement('p')
//     cir.style.width = '20px'
//     cir.style.height = '20px'
//     cir.innerText = el.slice(0, 2)
//     cir.style.borderRadius = '50%'
//     cir.style.backgroundColor = clr[i]
//     p.innerText = el
//     cir.id = 'sml'
//     div.append(cir, p)
//     div.style.display = 'flex'
//     div.style.flexDirection = 'row'
//     team.append(div)
// })
// let sec = document.querySelectorAll('#section > div')
// sec.forEach((el) => {
//     console.log(el)
//     el.Onlick = () => {
//         el.style.backgroundColor = 'rgb(220, 220, 220)'
//         console.log((object));
//     }
// })
let display_div = document.getElementById("display")


let order_div = document.getElementById("order_div");
order_div.style.display = "none"


let product_list_div = document.getElementById("product_list_div");
product_list_div.style.display = "none";

let add_product_div = document.getElementById("add_product_div");
add_product_div.style.display = "none";

let customers_div = document.getElementById("customers_div");
customers_div.style.display = "none";


let orderBtn = document.getElementById("order")
orderBtn.onclick = () => {
    product_list_div.style.display = "none";
    add_product_div.style.display = "none";
    customers_div.style.display = "none";
    // order_div.style.display = "block"
    document.getElementById('sorted_data').innerHTML = null
    orders()
}
// let data = await fetch("http://localhost:3000/posts")

// let arrr = [1]
const orders = async () => {
    order_div.style.display = "block";

    let res = await fetch(`http://localhost:3000/orders`)
    let data = await res.json()
    let div = document.getElementById("order_body")
    div.innerHTML = null
    data = data.reverse()
    data.forEach((el, i) => {

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.textContent = `#${i + 1}`;

        let td2 = document.createElement("td")
        td2.textContent = el.email;

        let td3 = document.createElement("td")
        td3.textContent = el.amount

        tr.append(td1, td2, td3)
        div.append(tr)
    })
}
display_div.style.display = orders()
// orders()


let productListBtn = document.getElementById("product_list")
productListBtn.onclick = () => {
    order_div.style.display = "none";
    add_product_div.style.display = "none";
    customers_div.style.display = "none";

    defaultData()
}

const productList = async () => {
    product_list_div.style.display = "block"

    let res = await fetch("http://localhost:3000/products")
    let data = await res.json();

    let div = document.getElementById("product_list_body")
    div.innerHTML = null
    data.forEach((el) => {

        let tr = document.createElement("tr");

        let td1 = document.createElement("td")
        td1.textContent = el.name;

        let td2 = document.createElement("td")
        td2.textContent = el.category

        let td3 = document.createElement("td")
        td3.textContent = el.status;

        let td4 = document.createElement("td")
        td4.textContent = el.inventory;

        tr.append(td1, td2, td3, td4)
        div.append(tr)

        // product_list_div.append(div)
    })

}

//end of day-2


//start of day-3


let ProductsBtn = document.getElementById("add_product")
ProductsBtn.onclick = () => {
    // order_div.style.display = "none";
    // product_list_div.style.display = "none";
    // customers_div.style.display = "none";
    // add_product_div.style.display = "block"

    // addProducts()

    window.location.href = "add-products.html"
}

// let addProductsBtn = document.getElementById("p_add");
// addProductsBtn.onclick = () => {
//     // addProducts()

// }

// const addProducts = async () => {
// add_product_div.style.display = "block";

// let name = document.getElementById("p_name").value;
// let category = document.getElementById("p_type").value;
// let price = document.getElementById("p_price").value;
// let inventory = document.getElementById("p_stock").value;
// let image = document.getElementById("p_image").value;

// let send_data = {
//     name,
//     category,
//     price,
//     inventory,
//     image,
//     status:"Published"
// }

// let res = await fetch(`http://localhost:3000/posts`,{
//     method:"POST",
//     body:JSON.stringify(send_data),
//     headers:{
//         "Content-Type":"application/json"
//     }
// })

// }

let customers_div_btn = document.getElementById("customer")
customers_div_btn.onclick = () => {
    order_div.style.display = "none"
    product_list_div.style.display = "none"
    add_product_div.style.display = "none"
    // customers_div_btn.style.backgroundColor = 'rgb(220, 220, 220)'
    // customers_div.style.display = "block"
    document.getElementById('sorted_data').innerHTML = null
    customers()
}

const customers = async () => {
    customers_div.style.display = "block"


    let res = await fetch(`http://localhost:3000/customer`)
    let data = await res.json()
    document.getElementById("customer_body").innerHTML = null

    data.forEach((el) => {
        let div = document.getElementById("customer_body");

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.textContent = el.name

        let td2 = document.createElement("td")
        td2.textContent = el.email

        let td3 = document.createElement("td")
        td3.textContent = el.orders;

        tr.append(td1, td2, td3)

        div.append(tr);

        // customers_div.append(div)
    })
}


//Start day-4

let search = document.getElementById("search");
search.onkeypress = (e) => {
    if (e.key == "Enter") {
        searchFun()
        order_div.style.display = "none"
        product_list_div.style.display = "none"
        add_product_div.style.display = "none"
        customers_div.style.display = "none"
    }

}
let searchData = [];
const searchFun = async (e) => {

    // console.log("hy")

    let search_term = document.getElementById("search").value;

    let res = await fetch(`http://localhost:3000/products?q=${search_term}`)
    let postData = await res.json()

    console.log(postData)
    appendSearch(postData)
}



const appendSearch = async (data) => {
    let sort_div = document.getElementById("sorted_data")
    sort_div.innerHTML = null

    order_div.style.display = "none"
    product_list_div.style.display = "none"
    add_product_div.style.display = "none"
    customers_div.style.display = "none"

    data.forEach((el) => {
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = el.image

        let name = document.createElement("h4")
        name.textContent = el.name;

        let category = document.createElement("p")
        category.textContent = el.category;

        let price = document.createElement("h3")
        price.textContent = el.price

        let stock = document.createElement("p")
        stock.textContent = `Stock remaining : ${el.inventory}`

        div.append(image, name, category, price, stock)

        sort_div.append(div)
    })
}

let sortLow = document.getElementById("lh")
sortLow.onclick = () => {
    lowData()
}

const lowData = async () => {
    let res = await fetch(`http://localhost:3000/products?_sort=price&_order=asc`)
    let data = await res.json()
    // console.log(data)
    appendSearch(data)
}

const defaultData = async () => {
    let res = await fetch(`http://localhost:3000/products`)
    let data = await res.json()
    // console.log(data)
    appendSearch(data)
}


let sortHigh = document.getElementById("hl")
sortHigh.onclick = () => {
    highData()
}

const highData = async () => {
    let res = await fetch(`http://localhost:3000/products?_sort=price&_order=desc`)
    let data = await res.json();
    appendSearch(data)
}

let lessThan = document.getElementById("lt");
lessThan.onclick = () => {
    lessData()
}

const lessData = async () => {
    let res = await fetch(`http://localhost:3000/products?price_lte=2000`)
    let data = await res.json()
    // console.log(data)
    appendSearch(data)
}

let greatThan = document.getElementById("gt")
greatThan.onclick = () => {
    greatData()
}

const greatData = async () => {
    let res = await fetch(`http://localhost:3000/products?price_gte=2001`)
    let data = await res.json()
    // console.log(data)
    appendSearch(data)
}
