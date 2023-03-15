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

  let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/orders`, {
    method: "POST",
    body: JSON.stringify(send_data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  const emptyCart = async () => {
    let usrDetail = JSON.parse(localStorage.getItem("userDetail"))
    console.log(`https://busy-gold-dhole-boot.cyclic.app/Cart?customer_Id=${usrDetail.token}&id=4`);
    let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/Cart?customer_Id=${usrDetail.token}`)
    let data = await res.json()
    console.log(data)
    data.forEach(async (pd, i) => {
      console.log(`https://busy-gold-dhole-boot.cyclic.app/Cart/${pd.id}`, 'lllll');
      let res = await fetch(`https://busy-gold-dhole-boot.cyclic.app/Cart/${pd.id}`, {
        method: 'DELETE'
      })
      location = "./end.html";
    })
  }

  emptyCart()

}