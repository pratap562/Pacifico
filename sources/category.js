let People_type = ["Men", "Women", "Boys", "Girls"];
People_type.forEach((el, i) => {
  let prnt = document.getElementById("people_type");
  let person = document.createElement("div");
  person.addEventListener("click", (el1) => {
    Click_unclick_0(el1, i);
    // console.log(el.target.parentElement.childNodes[0].checked);
  });
  let input = document.createElement("input");
  input.type = "radio";
  input.id = `pType${i}`;
  let pType = document.createElement("span");
  pType.textContent = el;

  person.append(input, pType);
  prnt.append(person);
});
function Click_unclick_0(el, i) {
  // console.log(el,i);
  el.target.parentElement.childNodes[0].checked = true;
  People_type.forEach((el2, ind) => {
    if (ind != i) {
      document.getElementById(`pType${ind}`).checked = false;
    }
  });
}

let concepts = [
  { code: "BASICS", count: 10 },
  { code: "H&M MAN", count: 23 },
  { code: "H&M Move", count: 1 },
  { code: "MODERN CLASSIC", count: 50 },
];
concepts = concepts.sort((a, b) => b.count - a.count);
concepts.forEach((el, i) => {
  let prnt = document.getElementById("brand");
  let brd = document.createElement("div");
  brd.addEventListener("click", (el1) => {
    Click_unclick_1(el1, i);
    // console.log(el.target.parentElement.childNodes[0].checked);
  });
  let input = document.createElement("input");
  input.type = "radio";
  input.id = `brand${i}`;
  let brdName = document.createElement("span");
  brdName.textContent = el.code;
  let brdCount = document.createElement("span");
  brdCount.textContent = ` (${el.count})`;

  brd.append(input, brdName, brdCount);
  prnt.append(brd);
});
function Click_unclick_1(el, i) {
  // console.log(el,i);
  el.target.parentElement.childNodes[0].checked = true;
  concepts.forEach((el2, ind) => {
    if (ind != i) {
      document.getElementById(`brand${ind}`).checked = false;
    }
  });
}

let colorWithNames = [
  { code: "red", count: 28 },
  { code: "yellow", count: 38 },
  { code: "green", count: 18 },
  { code: "pink", count: 15 },
  { code: "blue", count: 20 },
  { code: "green", count: 38 },
  { code: "white", count: 8 },
  { code: "purple", count: 23 },
  { code: "green", count: 18 },
  { code: "turquoise", count: 25 },
  { code: "orange", count: 10 },
];
colorWithNames = colorWithNames.sort((a, b) => b.count - a.count);
colorWithNames.forEach((el, i) => {
  let prnt = document.getElementById("colors");
  let clr = document.createElement("div");
  clr.addEventListener("click", (el1) => {
    Click_unclick_2(el1, i);
    // console.log(el.target.parentElement.childNodes[0].checked);
  });
  let input = document.createElement("input");
  input.type = "radio";
  input.id = `color${i}`;
  input.style.accentColor = el.code;
  let clrName = document.createElement("span");
  clrName.textContent = el.code;
  let clrCount = document.createElement("span");
  clrCount.textContent = ` (${el.count}) `;
  clr.append(input, clrName, clrCount);
  prnt.append(clr);
});

function Click_unclick_2(el, i) {
  // console.log(el,i);

  el.target.parentElement.childNodes[0].checked = true;
  colorWithNames.forEach((el2, ind) => {
    if (ind != i) {
      document.getElementById(`color${ind}`).checked = false;
    }
  });
}

const fetching = async (value) => {
  let res = await fetch(
    `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=${value}&pagesize=5&currentpage=1&`,
    {
      params: {
        country: "in",
        lang: "en",
      },
      headers: {
        'X-RapidAPI-Key': 'ac6ca5b643msh3d3bf01d93278adp1458dfjsn66f2b23af94c',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    }
  );

  let data = await res.json();
  console.log(data.results);
  localStorage.setItem("tempData", JSON.stringify(data.results));
  append(data.results);
};
// fetching("men_party");

let tempo_data = JSON.parse(localStorage.getItem("tempData")) || [];
append(tempo_data);
function append(Rdata) {
  //   let Pdata = [
  //     {
  //       image: Rdata[0].images[0].url,

  //       title: Rdata[0].name,
  //       MRP: Math.floor(Rdata[0].price.value * 80.97),
  //       discount: 10,
  //       actual_price: 150,
  //     },
  //     {
  //       image: Rdata[1].images[0].url,

  //       title: Rdata[1].name,
  //       MRP: Math.floor(Rdata[1].price.value * 80.97),
  //       discount: 10,
  //       actual_price: 150,
  //     },
  //     {
  //       image: Rdata[2].images[0].url,

  //       title: Rdata[2].name,
  //       MRP: Math.floor(Rdata[2].price.value * 80.97),
  //       discount: 10,
  //       actual_price: 1503
  //     },
  //   ];

  Rdata.forEach((el, i) => {
    let discnt = Math.floor(Math.random() * 10) + 10;
    let parent = document.getElementById("data");

    let card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", () => {
      console.log(`working${i}`);
      localStorage.setItem("pro_key", JSON.stringify(el.articleCodes[0]));
      localStorage.setItem("pro_images", JSON.stringify(el.galleryImages));
      let prices = [Math.floor(mrp - mrp / discnt), mrp, discnt];
      localStorage.setItem("prices", JSON.stringify(prices));

      window.location.href = "product.html";
    });
    let image = document.createElement("img");
    image.src = el.images[0].url;

    let title = document.createElement("h3");
    title.textContent = el.name;

    let prices = document.createElement("div");
    prices.className = "prices";
    let MRP = document.createElement("p");
    let mrp = Math.floor(el.price.value * 80.97);
    MRP.textContent = "Rs." + mrp + " ";
    MRP.style.textDecoration = "line-through";
    let discount = document.createElement("p");
    discount.textContent = discnt + "% OFF";
    discount.style.color = "red";
    let actual_price = document.createElement("h4");
    actual_price.textContent = "Rs:" + Math.floor(mrp - mrp / discnt) + "  ";
    prices.append(actual_price, MRP, discount);

    card.append(image, title, prices);
    parent.append(card);
  });
}

// actual_price: this.MRP-((this.MRP/this.discount)*100)
