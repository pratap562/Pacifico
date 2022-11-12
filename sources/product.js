let key = JSON.parse(localStorage.getItem("pro_key"));
let p_images = JSON.parse(localStorage.getItem("pro_images"));

console.log(key, p_images);
const detail = async (value) => {
  let res = await fetch(
    `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?productcode=${value}`,
    {
      params: {
        country: "in",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": "ac6ca5b643msh3d3bf01d93278adp1458dfjsn66f2b23af94c",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    }
  );

  let data = await res.json();
  console.log(data.product);
  localStorage.setItem("product_detail", JSON.stringify(data.product));
  Append(data.product);
};
detail(key);

product = {
  brand: "abc",
  name: "xyz",
  rating: 4.3,
  rating_count: 100,
  D_price: 599,
  MRP: 1500,
  discount: 60,
  size: [38, 40, 42, 44],
  details: `Black checked opaque Casual shirt ,has a spread collar, button placket, 1 patch pocket, long roll-up sleeves, curved hem`,
  size: `Regular Fit`,
  fit: `The model(height 6') is wearing a size 40`,
  material: `100% Cotton`,
  care: `Machine-wash`,
  specifications: [
    [`Sleeve Length`, `Long Sleeves`],
    [`Fit`, `Regular Fit`],
    [`Occasion `, `Casual`],
    [`Hemline`, `Curved`],
    [`Placket Length`, `Full`],
    [`Pocket Type`, `Patch`],
    [`Transparency`, `Opaque`],
    [`Surface Styling`, `Chest Pocket`],
    [`Collar`, `Spread Collar`],
    [`Print or Pattern Type`, `Other Checks`],
    [`Number of Pockets`, `1`],
    [`Cluff`, `Button`],
    [`Weave Patter`, `Twill`],
    [`Main Trend`, `New Basics`],
  ],
};

// let p_data = JSON.parse(localStorage.getItem("product_detail"));
// console.log(p_data);
// Append(p_data);

function Append(info) {
  //left side
  p_images.forEach((el, i) => {
    if (i < 6) {
      let img_parent = document.getElementById("images");
      let img_div = document.createElement("div");
      let img = document.createElement("img");
      img.src = el.url;
      img_div.append(img);
      img_parent.append(img_div);
      if (i == 1) {
        let img_parent = document.getElementById("images");
        let img_div = document.createElement("div");
        let desc_div = document.createElement("div");
        desc_div.textContent = info.description;
        img_div.append(desc_div);

        let desc_mat = document.createElement("div");
        desc_mat.textContent = "Material used:";
        img_div.append(desc_mat);
        info.materialDetails.forEach((el) => {
          let desc_mat = document.createElement("div");
          desc_mat.textContent = el.name;
          img_div.append(desc_mat);
        });

        let desc_mat1 = document.createElement("div");
        desc_mat1.textContent = "Art No--" + info.code;
        img_div.append(desc_mat1);
        img_parent.append(img_div);
      }
    }
  });

  //right side
  let pro_prices = JSON.parse(localStorage.getItem("prices"));
  let parent = document.getElementById("p_detail");
  let p_name = document.createElement("h3");
  p_name.textContent = info.name;

  let p_price = document.createElement("div");
  p_price.id = "prices";
  let p_prc = document.createElement("h3");
  p_prc.textContent = `Rs. ${pro_prices[0]} `;
  let p_MRP = document.createElement("h3");
  p_MRP.className = "MRP";
  p_MRP.textContent = `Rs. ${pro_prices[1]} `;
  p_MRP.style.textDecoration = "line-through";
  let p_discount = document.createElement("h3");
  p_discount.textContent = `(${pro_prices[2]}%)`;
  p_price.append(p_prc, p_MRP, p_discount);

  let color = document.createElement("h4");
  color.textContent = info.color.text;
  let pImage_div = document.createElement("div");
  pImage_div.id = "small_images";
  let img1_div = document.createElement("div");
  let img1 = document.createElement("img");
  img1.src = p_images[0].url;
  img1_div.append(img1);

  let img2_div = document.createElement("div");
  let img2 = document.createElement("img");
  img2.src = p_images[1].url;
  img2_div.append(img2);

  pImage_div.append(img1_div, img2_div);
  parent.append(p_name, p_price, color, pImage_div);

  let cart = document.getElementById("cart");
  cart.addEventListener("click", () => {
    let size = document.getElementById("size").value;
    console.log(size);
    pro_prices[3]=size
    console.log("added to cart",pro_prices);
    localStorage.setItem('p_details',JSON.stringify(pro_prices))

    addCartData()
  });
  let wishlist = document.getElementById("wishlist");
  wishlist.addEventListener("click", () => {
    console.log("added to wishlist");
    
    addWishData()
  });
}

const addWishData = async () => {

  let customerData = JSON.parse(localStorage.getItem("userDetail")) || []
  let productData = JSON.parse(localStorage.getItem("product_detail")) || []
  let imageData = JSON.parse(localStorage.getItem("pro_images")) || []
  let priceData = JSON.parse(localStorage.getItem("prices")) || []

    let send_data = {
      customer_Id : customerData.token,
      product_Name : productData.name,
      image_url : imageData[0].url,
      discounted_price : `0 ${priceData[0]}`,
      actual_price : `0 ${priceData[1]}`,
      discount : `${priceData[2]}`
    }

    if(customerData.token === undefined){
      window.location.href = "signup.html"
    }else{
      let res = await fetch(`http://localhost:3000/Whishlist`,{
        method:"POST",
        body:JSON.stringify(send_data),
        headers:{
          "Content-Type":"application/json"
        }
      })
    }
  
}

const addCartData = async () => {
  let customerData = JSON.parse(localStorage.getItem("userDetail")) || []
  let productData = JSON.parse(localStorage.getItem("product_detail")) || []
  let imageData = JSON.parse(localStorage.getItem("pro_images")) || []
  let priceData = JSON.parse(localStorage.getItem("prices")) || []

    let send_data = {
      customer_Id : customerData.token,
      product_Name : productData.name,
      image_url : imageData[0].url,
      discounted_price : `0 ${priceData[0]}`,
      actual_price : `0 ${priceData[1]}`,
      discount : `${priceData[2]}`
    }

    if(customerData.token === undefined){
      window.location.href = "signup.html"
    }else{
      let res = await fetch(`http://localhost:3000/Cart`,{
        method:"POST",
        body:JSON.stringify(send_data),
        headers:{
          "Content-Type":"application/json"
        }
      })
    }
}
