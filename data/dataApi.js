console.log('ehl')
const options = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
    params: {
        country: 'us',
        lang: 'en',
        currentpage: '0',
        pagesize: '30',
        categories: 'men_all',
        concepts: 'H&M MAN'
    },
    headers: {
        'X-RapidAPI-Key': '31f2736250msh48c93593272b450p1e55dejsnd248bee3b607',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
};

const options2 = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
    params: { lang: 'en', country: 'us' },
    headers: {
        'X-RapidAPI-Key': '31f2736250msh48c93593272b450p1e55dejsnd248bee3b607',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
};


const categories = async () => {

    let res = await fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list`, {
        params: { lang: 'en', country: 'us' },
        headers: {
            'X-RapidAPI-Key': '31f2736250msh48c93593272b450p1e55dejsnd248bee3b607',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    })

    let data = await res.json()
    console.log(data)
}

// categories()
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
// detail('1013956005')

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
fetching('men_shirts')

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


mainSection = {
    'MEN': 'men',
    'WOMEN': 'women',
    'KIDS': 'kids',
    'BABY': 'baby',
    'SPORT': 'sport',
    'H&M HOME': 'home'
}
// categories

//mens

men = [
    "New Arrivals",
    // "The essentials": "the-essentials",
    // "Winter lookbook": "lookbook",
    "Trending Now",
    "Shop by Product"
    // "Sustainability": "sustainability"
]

const menFstDiv = [
    { name: "New Arrivals", value: null },
    { name: "View All", value: "new-arrivals" },
    { name: "Clothes", value: "new-arrivals" },
    { name: "Shoes and Accessories", value: "men_shoes" },
    { name: "Sportswear", value: "men_newarrivals_sportswear" },
]

const menSndDiv = [
    { name: "Trending Now", value: null },
    { name: "Top sellers from $5.99", value: "WK40_bestsellers_shop" },
    { name: "The Party Edit", value: "men_party" },
    { name: "Loungewear", value: "men_loungewear" }
]


// menThirdDiv
// manTopWear
//botManWear
const menThirdDiv = [
    { name: "Shop by Product", value: null },
    { name: "View All", value: "men_all" },
    { name: "Accessories", value: "men_accessories" },
    { name: "Shoes", value: "men_shoes" },
    { name: "Swimwear", value: "men_swimweear" },
    { name: "Sportswear", value: "men_sport" },
    { name: "Basics", value: "men_basics" },
    { name: "Sleepwear & Loungewear", value: "men_nightwearloungewear" },
    { name: "Socks", value: "men_socks" },
    { name: "Premium Selection", value: "men_premium_selection" }
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
    { name: "Jackets", value: null }
]

const manAllData = [
    [manTopWear, extraIndianFest],
    [botManWear, menSndDiv],
    [menThirdDiv],
    [menFstDiv, sportWear]
]
// menThirdDiv.forEach((el) => {
//     setTimeout(() => {
//         fetching(el)
//     }, 5000 * count);
// })




women = [
    "Holiday & Trending Now",
    "Shop by Product",
    "Shop by Occasion"
]

const wmnFstDiv = [
    { name: "Holiday & Trending Now", value: null },
    { name: "Holiday & Trending Now", value: null },
    { name: "The Holiday Shop", value: "ladies_christmas" },
    { name: "Winter must-haves", value: "ladies_winter" },
    { name: "Trend edit", value: "ladies_trendconcept" },
    { name: "A new minimalism", value: "ladies_neutral" },
    { name: "Y2K fashion", value: "Y2k_s5" },
    { name: "Sunny Styles", value: "NAL_LOCAL_EQ" }
]


// fetching(wmnFstDiv[ind].value)
//wenSnDiv
const wmnSndDiv = [
    { name: "Shop by Product", value: null },
    { name: "View All", value: "ladies_all" },
    { name: "Dresses", value: "ladies_dresses" },
    { name: "Tops", value: "ladies_tops" },
    { name: "Shirts & Blouses", value: "ladies_shirtsblouses" },
    { name: "Pants", value: "ladies_trousers" },
    { name: "Cardigans & Sweaters", value: "ladies_cardigansjumpers" },
    { name: "Jackets & Coats", value: "ladies_jacketscoats" },
    { name: "Blazers & Vests", value: "ladies_blazerswaistcoats" },
    { name: "Jeans", value: "ladies_jeans" },
    { name: "Overalls & Jumpsuits", value: "ladies_jumpsuits" },
    { name: "Skirts", value: "ladies_skirts" },
    { name: "Shoes", value: "ladies_shoes" },
    { name: "Accessories", value: "ladies_accessories" },
    { name: "Hoodies & Sweatshirts", value: "ladies_hoodiessweatshirts" },
    { name: "Basics", value: "ladies_basics" },
    { name: "Lingerie", value: "ladies_lingerie" },
    { name: "Loungewear", value: "ladies_loungewear" },
    { name: "Sleepwear", value: "ladies_nightwear" },
    { name: "Socks & Tights", value: "ladies_sockstights" },
    { name: "Sportswear", value: "ladies_sport" },
    { name: "Swimwear & Beachwear", value: "ladies_swimwear" },
    { name: "Shorts", value: "ladies_shorts" },
    { name: "Maternity Wear", value: "ladies_maternity" },
    { name: "Plus Sizes", value: "ladies_plus" },
    { name: "Premium Selection", value: "ladies_premium_selection" },
    { name: "Beauty", value: "ladies_beauty" },
    // { name: "Care products", value: "ladies_takecare" }
    // { name:, value:},
]

const wmnThirdDiv = [
    { name: "Shop by Occasion", value: null },
    { name: "Wedding", value: "ladies_occasion_wedding" },
    { name: "Party Wear", value: "ladies_occasion_partywear" },
    { name: "Office Wear", value: "ladies_occasion_officewear" }
]

// loop()


// kids section

kids = [
    "Girls (2-8Y)",
    "Boys (2-8Y)",
    "Girls (9-14Y)",
    "Boys (9-14Y)",
    "Shop by Product",
    "Popular Now",
    // "Kids room",
]

const kidGirlSml = [
    { name: "Girls (2-8Y)", value: null },
    { name: "View all", value: "kids_girls_viewall" },
    { name: "New Arrivals", value: "kids_girls_newarrivals" },
    { name: "Clothing", value: "kids_girls_clothing" },
    { name: "Outerwear", value: "kids_girls_outerwear" },
    { name: "Activewear", value: "kids_girls_sportswear" },
    { name: "Accessories", value: "kids_girls_accessories" },
    { name: "Shoes", value: "kids_girls_shoes" },
    { name: "Costumes", value: null }

]

const kidBoySml = [
    { name: "Boys (2-8Y)", value: null },
    { name: "View all", value: "kids_boys_viewall" },
    { name: "New Arrivals", value: "kids_boys_newarrivals" },
    { name: "Clothing", value: "kids_boys_clothing" },
    { name: "Outerwear", value: "kids_boys_outerwear" },
    { name: "Activewear", value: "kids_boys_sportswear" },
    { name: "Accessories", value: "kids_boys_accessories" },
    { name: "Shoes", value: "kids_boys_shoes" },
    { name: "Costumes", value: null }
]

const kidGirlBig = [
    { name: "Girls (9-14Y)", value: null },
    { name: "View all", value: "kids_oldergirls_viewall" },
    { name: "New Arrivals", value: "kids_oldergirls_newarrivals" },
    { name: "Clothing", value: "kids_oldergirls_clothing" },
    { name: "Outerwear", value: "kids_oldergirls_outerwear" },
    { name: "Activewear", value: "kids_oldergirls_sportswear" },
    { name: "Accessories", value: "kids_oldergirls_accessories" },
    { name: "Shoes", value: "kids_oldergirls_shoes" },
    { name: "Costumes", value: null }
]

const kidBoyBig = [
    { name: "Boys (9-14Y)", value: null },
    { name: "View all", value: "kids_olderboys_viewall" },
    { name: "New Arrivals", value: "kids_olderboys_newarrivals" },
    { name: "Clothing", value: "kids_olderboys_clothing" },
    { name: "Outerwear", value: "kids_olderboys_outerwear" },
    { name: "Activewear", value: "kids_olderboys_sportswear" },
    { name: "Accessories", value: "kids_olderboys_accessories" },
    { name: "Shoes", value: "kids_olderboys_shoes" },
    { name: "Costumes", value: null },
    { name: "Party Occasion", value: "kids_olderboys_viewall" }
]


const kidShopByProd = [
    { name: "Shop by Product", value: null },
    { name: "View all", value: "kids_viewall" },
    { name: "New Arrivals", value: "kids_newarrivals" },
    { name: "Clothing", value: "kids_clothing" },
    { name: "Outerwear", value: "kids_outerwear" },
    { name: "Activewear", value: "kids_sportswear" },
    { name: "Accessories", value: "kids_accessories" },
    { name: "Shoes", value: "kids_shoes" },
    { name: "Costumes", value: null }
]

const kidsPopular = [
    { name: "Popular Now", value: null },
    { name: "winter", value: "WK44_Kids_WellDressed_Shop" },
    { name: "kids-exclusive", value: "kids_kids_exclusive" },
    { name: "character", value: "kids_characters" },
    { name: "basics", value: "kids_basic" },
    { name: "holiday", value: "kids_christmas" }
]

// const kidsRom = [
//     { name: "Decorations", value: null },
//     { name: "Storage", value: "kids_kidsroom_products_storage" },
//     { name: "Pillows", value: "kids_kidsroom_products_cushions" },
//     { name: "Bedding Sets", value: "kids_kidsroom_products_bedding" },
//     { name: "Blankets", value: "kids_kidsroom_products_blankets" },
//     { name: "Rugs", value: "kids_kidsroom_products_rugs" },
//     { name: "Kitchenware", value: "kids_kidsroom_products_table_kitchenware" },
//     { name: "Bath & Shower", value: "kids_kidsroom_products_shower_bath" },
//     { name: "Toys", value: "kids_kidsroom_products_toys" }
// ]


{ }

//baby

baby = [
    "Newborn",
    "Baby Girl",
    "Baby Boy",
    "Shop by Product",
    "Popular Now",

]

let ind = 1

const loop = () => {
    fetching(menThirdDiv[ind].value)
}
// loop()









