// import navbar from "./components/logo.js"

// let dash = document.getElementById("logo")
// dash.innerHTML = navbar();


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
    orders()
}
// let data = await fetch("http://localhost:3000/posts")

const orders = async () => {
    order_div.style.display = "block";

    let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/customer`)
    let data = await res.json()

    data.forEach((el) => {
        let div = document.getElementById("order_body")

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.textContent = `#${el.id}`;

        let td2 = document.createElement("td")
        td2.textContent = el.name;

        let td3 = document.createElement("td")
        td3.textContent = el.price

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

    productList()
}

const productList = async () => {
    product_list_div.style.display = "block"

    let res = await fetch("https://busy-gold-dhole-boot.cyclic.app/products")
    let data = await res.json();

    data.forEach((el) => {
        let div = document.getElementById("product_list_body")

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
    // customers_div.style.display = "block"
    customers()
}

const customers = async () => {
    customers_div.style.display = "block"

    let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/customer`)
    let data = await res.json()

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

    let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/products?q=${search_term}`)
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
    let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/products?_sort=price&_order=asc`)
    let data = await res.json()
    // console.log(data)
    appendSearch(data)
}

let sortHigh = document.getElementById("hl")
sortHigh.onclick = () => {
    highData()
}

const highData = async () => {
    let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/products?_sort=price&_order=desc`)
    let data = await res.json();
    appendSearch(data)
}

let lessThan = document.getElementById("lt");
lessThan.onclick = () => {
    lessData()
}

const lessData = async () => {
    let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/products?price_lte=2000`)
    let data = await res.json()
    // console.log(data)
    appendSearch(data)
}

let greatThan = document.getElementById("gt")
greatThan.onclick = () => {
    greatData()
}

const greatData = async () => {
    let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/products?price_gte=2001`)
    let data = await res.json()
    // console.log(data)
    appendSearch(data)
}
