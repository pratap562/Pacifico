document.getElementById('loder').classList = 'loder'
document.getElementById('spin').classList = 'spin'

setTimeout(() => {
    document.getElementById('loder').classList.remove('loder')
    document.getElementById('spin').classList.remove('spin')
}, 1000);

let dealofthedayarr = [
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/11/2/76d5d5e2-691c-4a5b-8110-73555d9237ea1667369472255-Upto_70.jpg",
        value: "men_all",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/49939a83-5bf1-4c78-b55d-40d7545f843e1660744474034-Kurtas--4-.jpg",
        value: "ladies_dresses",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/d5f885c5-4a54-4634-81da-6333aa51c1a11660744537981-Dresses--13-.jpg",
        value: "ladies_dresses",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/ca8aa842-a6ed-4c53-b85a-5d7551a650121660744817501-Work-Ready-Shoes--1-.jpg",
        value: "men_shoes",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/04672f44-d01c-4f5a-b005-8e01c00582261660744864260-Casual-Shoes---Flip-Flops--4-.jpg",
        value: "men_shoes",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/9e19d40a-6720-4d62-92e0-32cd1ee6bee91660744897243-Flats---Heels--3-.jpg",
        value: "ladies_shoes",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/0e56c483-33e8-4ea5-bae0-96020b7b31401660744930158-Dinnerware---Kitchenware.jpg",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/ffa236ca-da08-4fb8-bec3-9b4950c943851660745008808-KAMA.jpg",
        value: "ladies_beauty",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/948bd0a5-5b50-4b1e-93cc-234a9be8cfe11660744976622-Accessories--2-.jpg",
        value: "men_accessories",
    },
];
let topBrandArr = [
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg",
        value: "ladies_all",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg",
        value: "ladies_dresses",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg",
        value: "ladies_dresses",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg",
        value: "ladies_tops",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg",
        value: "men_shirts",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg",
        value: "ladies_skirts",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg",
        value: "men_tshirtstanks",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg",
        value: "ladies_tops",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg",
        value: "men_tshirtstanks",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg",
        value: "men_shirts",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg",
        value: "men_trousers",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/745cec57-af58-4ba6-8ae1-a3ccbe7c54e91644407437930-Lingerie_-_Loungewear_-_DB-_ETC.jpg",
        value: "ladies_loungewear",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg",
        value: "men_jeans",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg",
        value: "ladies_sport",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg",
        value: "men_blazerssuits",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg",
        value: "ladies_jeans",
    },
];
let topPickArr = [
    {
        url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg",
        value: "ladies_dresses",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg",
        value: "ladies_dresses",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg",
        value: "ladies_tops",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg",
        value: "ladies_jeans",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg",
        value: "men_shirts",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg",
        value: "men_tshirtstanks",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg",
        value: "men_trousers",
    },
];
let categoriestobagArr = [
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg",
        value: "ladies_dresses",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg",
        value: "ladies_accessories",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg",
        value: "ladies_tops",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg",
        value: "men_tshirtstanks",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg",
        value: "ladies_dresses",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg",
        value: "men_shirts",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg",
        value: "ladies_accessories",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg",
        value: "kids_boys_viewall",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg",
        value: "ladies_beauty",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg",
        value: "ladies_plus",
    },
    {
        url: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg",
        value: "men_jeans",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg",
        value: "men_sport",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg",
        value: "men_trousers",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg",
        value: "men_shoes",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg",
        value: "men_shorts",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg",
        value: "men_underwear",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg",
        value: "ladies_shorts",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg",
        value: "ladies_tops",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg",
        value: "kids_boys_newarrivals",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg",
        value: "kids_boys_shoes",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg",
        value: "kids_boys_clothing",
    },
    {
        url: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg",
        value: "ladies_dresses",
    },
];

console.log('hello')

window.onload = () => {
    // document.getElementById('loder').classList.remove('loder')
    // document.getElementById('spin').classList.remove('spin')
    console.log('soch he nahi');
}
let delOfDay = document.getElementById('cat-1')
dealofthedayarr.forEach((el) => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = el.url
    div.onclick = () => {
        localStorage.setItem('category', el.value)
        console.log(el.value)
        console.log(el.url)
        console.log('object');
        location = './category.html'
    }
    div.append(img)
    delOfDay.append(div)
})
console.log('hello')

let topBrnd = document.getElementById('cat-2')
topBrandArr.forEach((el) => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = el.url
    div.onclick = () => {
        localStorage.setItem('category', el.value)
        console.log(el.value)
        console.log(el.url)
        console.log('object');
        location = './category.html'
    }
    div.append(img)
    topBrnd.append(div)
})

let topPic = document.getElementById('cat-3')
topPickArr.forEach((el) => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = el.url
    div.onclick = () => {
        localStorage.setItem('category', el.value)
        console.log(el.value)
        console.log(el.url)
        console.log('object');
        location = './category.html'
    }
    div.append(img)
    topPic.append(div)
})


let catBag = document.getElementById('cat-4')
categoriestobagArr.forEach((el) => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = el.url
    div.onclick = () => {
        localStorage.setItem('category', el.value)
        console.log(el.value)
        console.log(el.url)
        console.log('object');
        location = './category.html'
    }
    div.append(img)
    catBag.append(div)
})

