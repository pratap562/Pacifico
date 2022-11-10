let display_div = document.getElementById("display")



let order_div = document.getElementById("order_div");
// order_div.innerHTML = null;
// display_div.append(order_div)
let product_list_div = document.getElementById("product_list_div");
// product_list_div.innerHTML = null;
let add_product_div = document.getElementById("add_product_div");
// add_product_div.innerHTML = null;
let customers_div = document.getElementById("customers_div");
// customers_div.innerHTML = null;


let orderBtn = document.getElementById("order")
orderBtn.onclick = () => {
    orders()
    // display_div.innerHTML = null
    product_list_div.style.display = "none"
    add_product_div.innerHTML = null;
    customers_div.innerHTML  = null;
    
}

const orders = () => {
    // display_div.innerHTML = null;
    
    

    let div = document.getElementById("order_body")
    // // div.innerHTML = ;
    // // let orderTable = document.createElement("tbody")

    // let tr1 = document.createElement("tr")
    
    // let td1 = document.createElement("td")
    // td1.textContent = "#1"

    // let td2 = document.createElement("td")
    // td2.textContent = "Lebron"

    // let td3 = document.createElement("td")
    // td3.textContent = "200$"

    // tr1.append(td1,td2,td3);

    // div.append(tr1);

    order_div.append(div);
    display_div.append(order_div)
}
// orders()

let productListBtn = document.getElementById("product_list")
productListBtn.onclick = () => {
    productList()
    add_product_div.innerHTML = null;
    customers_div.innerHTML  = null;
    order_div.innerHTML = null;

}

const productList = () => {

    let tbody = document.getElementById("product_list_body");

    product_list_div.append(tbody)

    display_div.append(product_list_div)
}