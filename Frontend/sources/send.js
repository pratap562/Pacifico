const menFstDiv = [
    { name: "New Arrivals", value: null },
    { name: "View All", value: "new-arrivals" },
    { name: "Clothes", value: "new-arrivals" },
    { name: "Shoes and Accessories", value: "new-arrivals" },
    { name: "Sportswear", value: "men_newarrivals_sportswear" },
]
const menSndDiv = [
    { name: "Trending Now", value: null },
    { name: "Top sellers from $5.99", value: "WK40_bestsellers_shop" },
    { name: "The Party Edit", value: "men_party" },
    { name: "Loungewear", value: "men_loungewear" }
]

const menThirdDiv = [
    { name: "Shop by Product", value: null },
    { name: "View All", value: "men_all" },
    { name: "Accessories", value: "men_accessories" },
    { name: "Shoes", value: "men_shoes" },
    { name: "Swimwear", value: "men_swimweear" },
    { name: "Sportswear", value: "men_sport" },
    { name: "Basics", value: "men_basics" },
    { name: "Socks", value: "men_socks" },
    { name: "Sleepwear", value: "men_nightwearloungewear" },
    { name: "Premium Selection", value: "men_premium_selection" },
]

const manTopWear = [
    { name: "Top Wear", value: null },
    { name: "Cardigans & Sweaters", value: "men_cardigansjumpers" },
    { name: "Shirts", value: "men_shirts" },
    { name: "T-shirts & Tanks", value: "men_tshirtstanks" },
    { name: "Suits & Blazers", value: "men_blazerssuits" },
    { name: "Jackets & Coats", value: "men_jacketscoats" },
    { name: "Hoodies & Sweatshirts", value: "men_hoodiessweatshirts" },
]

const botManWear = [
    { name: "Bottom Wear", value: null },
    { name: "Shorts", value: "men_shorts" },
    { name: "Jeans", value: "men_jeans" },
    { name: "Pants", value: "men_trousers" },
    { name: "Underwear", value: "men_underwear" },
]

const extraIndianFest = [
    { name: "Indian and Festive Wears", value: null },
    { name: "Kurtas and Kurta Set", value: null },
    { name: "Shervani", value: null },
    { name: "Nehru Jackets", value: null },
    { name: "Dhoti", value: null },
]

const sportWear = [
    { name: "Sports and Active Wear", value: null },
    { name: "Sports Shoes", value: null },
    { name: "Sports Sadals", value: null },
    { name: "Active", value: null },
    { name: "T-shirts", value: null },
    { name: "Track Pants", value: null },
    { name: "Tracksuits", value: null },
    { name: "Jackets", value: null },
]

// you can access every data from this manAllData 
const manAllData = [
    [manTopWear, extraIndianFest],
    [botManWear, menSndDiv],
    [menThirdDiv],
    [menFstDiv, sportWear]
]



// detail of a product valur of every product you will get inside defaultArtice via key name 'code'
const detail = async (value) => {
    let res = await fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?productcode=${value}`, {
        params: {
            country: 'in',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '31f2736250msh48c93593272b450p1e55dejsnd248bee3b607',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    })

    let data = await res.json()
    console.log(data)

}

// fetching all 30 product which we goono show on produc page where we have filter option

const fetching = async (value) => {
    let res = await fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=${value}&pagesize=30&currentpage=1&`, {
        params: {
            country: 'in',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '31f2736250msh48c93593272b450p1e55dejsnd248bee3b607',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    })

    let data = await res.json()
    console.log(data)

}
function fetchData(){
    console.log('working');
    fetching('men_party');
    detail('1040615001');
}