// function endfunct() {

// }
console.log('hilsdlifjas');


const endfunct = async (el) => {

  console.log('object');
  // let name = document.getElementById("p_name").value;
  // let category = document.getElementById("p_type").value;
  // let price = document.getElementById("p_price").value;
  // let inventory = document.getElementById("p_stock").value;
  // // let image = document.getElementById("p_image").value;
  let ud = JSON.parse(localStorage.getItem('userDetail'))
  let name = ud.name
  let email = ud.email
  let amount = JSON.parse(localStorage.getItem('amount'))


  let send_data = {
    name,
    email,
    amount
  }

  let res = await fetch(`http://localhost:3000/orders`, {
    method: "POST",
    body: JSON.stringify(send_data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  let data = await res.json()
  console.log(data)

  window.location.href = "../end.html";
}