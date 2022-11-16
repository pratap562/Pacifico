let submitBtn = document.getElementById("submit");
submitBtn.style.display = "none"
submitBtn.onclick = () => {
    addProduct()
}

let image_url;

let file = document.getElementById("p_image");
file.onchange = () => {
    addImage()
}

const addImage = async () => {
    submitBtn.style.display = "block";

    let image = document.getElementById("p_image")

    let actual_image = image.files[0]

    let form = new FormData()

    form.append("image",actual_image)

    let res = await fetch(`https://api.imgbb.com/1/upload?key=37b5836c9415a8f88344b2e1d3787f80`,{
        method:"POST",
        body:form
    })

    let data = await res.json();
    console.log(data)

    image_url = data.data.display_url;
}

const addProduct = async (el) => {

    let name = document.getElementById("p_name").value;
    let category = document.getElementById("p_type").value;
    let price = document.getElementById("p_price").value;
    let inventory = document.getElementById("p_stock").value;
    // let image = document.getElementById("p_image").value;

    let send_data = {
        name,
        category,
        price,
        inventory,
        image:image_url,
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