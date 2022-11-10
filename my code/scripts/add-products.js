let form = document.getElementById("submit");
form.onclick = () => {
    addProduct()
}

const addProduct = async (el) => {

    let name = document.getElementById("p_name").value;
    let category = document.getElementById("p_type").value;
    let price = document.getElementById("p_price").value;
    let inventory = document.getElementById("p_stock").value;
    let image = document.getElementById("p_image").value;

    let send_data = {
        name,
        category,
        price,
        inventory,
        image,
        status:"Published"
    }

    let res = await fetch(`http://localhost:3000/posts`,{
        method:"POST",
        body:JSON.stringify(send_data),
        headers:{
            "Content-Type":"application/json"
        }
    })
}