// var cartarr = [
//   {
//     image_url:
//       "https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/15190446/2021/8/18/bc830114-c6fd-47d9-826a-04e60d5e20fc1629292544274SmartyPantswomenssilksatingreycolorbutterflydancingdollprint1.jpg",
//     price: "0 783",
//     strikedoffprice: "0 1500",
//     brand: "naya",
//     offer: 55,
//     para: "abcdefghingshjjhbhcdsbhbshb",
//   },
//   {
//     image_url:
//       "https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/15190446/2021/8/18/bc830114-c6fd-47d9-826a-04e60d5e20fc1629292544274SmartyPantswomenssilksatingreycolorbutterflydancingdollprint1.jpg",
//     price: "0 783",
//     strikedoffprice: "0 1500",
//     brand: "naya",
//     offer: 55,
//     para: "abcdefghingshjjhbhcdsbhbshb",
//   },
//   {
//     image_url:
//       "https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/15190446/2021/8/18/bc830114-c6fd-47d9-826a-04e60d5e20fc1629292544274SmartyPantswomenssilksatingreycolorbutterflydancingdollprint1.jpg",
//     price: "0 783",
//     strikedoffprice: "0 1500",
//     brand: "naya",
//     offer: 55,
//     para: "abcdefghingshjjhbhcdsbhbshb",
//   },
//   {
//     image_url:
//       "https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/15190446/2021/8/18/bc830114-c6fd-47d9-826a-04e60d5e20fc1629292544274SmartyPantswomenssilksatingreycolorbutterflydancingdollprint1.jpg",
//     price: "0 783",
//     strikedoffprice: "0 1500",
//     brand: "naya",
//     offer: 55,
//     para: "abcdefghingshjjhbhcdsbhbshb",
//   },
// ];
// var cartarr = JSON.parse(localStorage.getItem("BagListObj")) || [];
const fetchingFun = async () => {
  let usrDetail = JSON.parse(localStorage.getItem("userDetail"))
  let res = await fetch(`http://localhost:3000/Cart?customer_Id=${usrDetail.token}`)
  let data = await res.json()
  console.log(data)
  // fetchingFun(data)
  run(data)
  append(data)
}

fetchingFun()

const run = (cartarr) => {

  var itemcount = cartarr.length;
  localStorage.setItem("itemcount", itemcount);

  var MRP = cartarr.reduce(function (sum, a, ind) {
    return sum + +cartarr[ind].strikedoffprice.split(" ")[1];
  }, 0);
  localStorage.setItem("MRP", MRP);

  var amount = cartarr.reduce(function (sum, a, ind) {
    return sum + +cartarr[ind].price.split(" ")[1];
  }, 0);
  localStorage.setItem("amount", amount);

  var discount = MRP - amount;
  localStorage.setItem("discount", discount);

  document.querySelector(".amount_pay").innerText = amount;
  document.querySelector(".filldiscount").innerText = "- " + discount;
  document.querySelector(".totalprice").innerText = MRP;
  document.querySelector(
    ".pricedets"
  ).innerText = `PRICE DETAILS ( ${itemcount} Items)`;

}

const append = (cartarr) => {

  document.querySelector(".container").innerHTML = null
  cartarr.map(function (ele, ind) {

    // document.querySelector(".container").innerText = ""
    var box = document.createElement("div");
    box.className = "main";

    var imgbox = document.createElement("div");

    var image = document.createElement("img");
    image.src = ele.image_url;
    imgbox.append(image);

    var detailsbox = document.createElement("div");

    var name = document.createElement("p");
    name.innerText = ele.brand;
    name.style.fontSize = "20px";
    name.style.marginBottom = "-8px";

    var para = document.createElement("p");
    para.innerText = ele.para;
    para.style.color = "gray";

    var price = document.createElement("span");
    price.innerText = "Rs " + ele.price.split(" ")[1];

    var strikedprice = document.createElement("span");
    strikedprice.innerText = ele.strikedoffprice.split(" ")[1];
    strikedprice.style.textDecoration = "line-through";
    strikedprice.style.color = "gray";

    var offer = document.createElement("span");
    offer.innerText = ele.offer + "%";
    offer.style.color = "red";

    var pricepara = document.createElement("p");
    pricepara.append(price, strikedprice);

    detailsbox.append(name, para, pricepara, offer);

    var buttonbox = document.createElement("div");

    var remove = document.createElement("button");

    remove.innerText = "REMOVE";
    remove.addEventListener("click", function (event) {
      removeitem(ind, ele.id, event);
    });

    buttonbox.append(remove);

    box.append(imgbox, detailsbox, buttonbox);

    document.querySelector(".container").append(box);
  });



  document.querySelector(".wishlistlink").addEventListener("click", sendtowish);
  function sendtowish() {
    window.location.href = "wishlist.html";
  }

  async function removeitem(ind, id, event) {
    cartarr.splice(ind, 1);
    // localStorage.setItem("BagListObj", JSON.stringify(cartarr));
    let res = await fetch(`http://localhost:3000/Cart/${id}`, {
      method: 'DELETE'
    })
    // console.log(event.target.parentNode.parentNode.remove());
    // event.target
    fetchingFun()
    // window.location.href = "cart.html";

  }




  // console.log( amount, discount)
}
document.querySelector(".makeorder").addEventListener("click", profile);
document.querySelector(".apply").addEventListener("click", discountfun);
function profile() {
  window.location.href = "../payment.html";
}

function discountfun() {
  var payable_amount = +localStorage.getItem("amount");
  var int_promo = document.querySelector("#promo").value;
  var discount = +JSON.parse(localStorage.getItem('discount'))

  if (payable_amount > 500 && int_promo == "MASAI500") {
    let amount = payable_amount - 500;
    discount = discount + 300;
    localStorage.setItem("amount", amount)
    localStorage.setItem("discount", discount);
    document.querySelector(".amount_pay").innerText = amount;
    document.querySelector(".filldiscount").innerText = "- " + discount;

    document.querySelector(".apply").removeEventListener("click", discountfun);
  } else {
    console.log('nahi');
  }
  document.getElementById("landingPage").addEventListener("click", function () {
    window.location.href = "../Landingpage/index.html";
  });

  document.querySelector("#second").addEventListener("click", function () {
    window.location.href = "../Profile/signup.html";
  });


}