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

let parent = document.getElementById("p_name");
let p_brand = document.createElement("div");
p_brand.textContent = product.brand;
let p_name = document.createElement("div");
p_name.textContent = product.name;
let p_rating=document.createElement("div");
p_rating.textContent=product.rating+'⭐| '+product.rating_count;

let hr_line=document.createElement('hr');

let p_price = document.createElement("div");
let p_prc=document.createElement('span');
p_prc.textContent=`Rs. ${product.MRP-(product.MRP*product.discount/100)} `;
let p_MRP=document.createElement('span');
p_MRP.className='MRP';
p_MRP.textContent=`Rs. ${product.MRP} `;
let p_discount=document.createElement('span');
p_discount.textContent=`${product.discount}%`;
p_price.append(p_prc,p_MRP,p_discount);

let text=document.createElement('h6');
text.textContent=`inclusive all taxes`;
parent.append(p_brand,p_name,p_rating,hr_line,p_price,text);

