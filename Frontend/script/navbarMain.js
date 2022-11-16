import navbar from "../COMPONENT/navbar.js";

document.querySelector('#header').innerHTML = navbar()

//adding loader
// don't add loader to navbar it will create problem with others page loader it will make class delete very fast
// document.getElementById('loder').classList = 'loder'
// document.getElementById('spin').classList = 'spin'
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

const wmnSndDiv = [
    { name: "Shop by Product", value: null },
    { name: "View All", value: "ladies_all" },
    { name: "Dresses", value: "ladies_dresses" },
    { name: "Cardigans & Sweaters", value: "ladies_cardigansjumpers" },
    { name: "Basics", value: "ladies_basics" },
    { name: "Lingerie", value: "ladies_lingerie" },
    { name: "Loungewear", value: "ladies_loungewear" },
    { name: "Sleepwear", value: "ladies_nightwear" },
    { name: "Sportswear", value: "ladies_sport" },
    { name: "Maternity Wear", value: "ladies_maternity" },
    { name: "Premium Selection", value: "ladies_premium_selection" },
    { name: "Beauty", value: "ladies_beauty" },
    { name: "Accessories", value: "ladies_accessories" },
    // { name: "Care products", value: "ladies_takecare" }
    // { name:, value:},
]
const wmnTopDiv = [
    { name: "Top Wear", value: null },
    { name: "Blazers & Vests", value: "ladies_blazerswaistcoats" },
    { name: "Hoodies & Sweatshirts", value: "ladies_hoodiessweatshirts" },
    { name: "Overalls & Jumpsuits", value: "ladies_jumpsuits" },
    { name: "Shirts & Blouses", value: "ladies_shirtsblouses" },
    { name: "Jackets & Coats", value: "ladies_jacketscoats" },
    { name: "Tops", value: "ladies_tops" },
    { name: "Skirts", value: "ladies_skirts" },
]

const wmnBotDiv = [
    { name: "Bottom Wear", value: null },
    { name: "Pants", value: "ladies_trousers" },
    { name: "Shorts", value: "ladies_shorts" },
    { name: "Jeans", value: "ladies_jeans" },
    { name: "Shoes", value: "ladies_shoes" },
    { name: "Socks & Tights", value: "ladies_sockstights" },
    { name: "Swimwear & Beachwear", value: "ladies_swimwear" },
    { name: "Plus Sizes", value: "ladies_plus" },


]

const wmnThirdDiv = [
    { name: "Shop by Occasion", value: null },
    { name: "Wedding", value: "ladies_occasion_wedding" },
    { name: "Party Wear", value: "ladies_occasion_partywear" },
    { name: "Office Wear", value: "ladies_occasion_officewear" }
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

const kidAllData = [
    [kidShopByProd],
    [kidBoyBig],
    [kidGirlBig],
    [kidsPopular]
]



const babyAllData = [
    [kidGirlSml],
    [kidBoySml]
]

const wmnAllData = [
    [wmnBotDiv, wmnThirdDiv],
    [wmnSndDiv],
    [wmnFstDiv],
    [wmnTopDiv]
]

const manAllData = [
    [manTopWear, extraIndianFest],
    [botManWear, menSndDiv],
    [menThirdDiv],
    [menFstDiv, sportWear]
]

console.log(manAllData);
window.onload = () => {
    console.log('onload function working')
    // removing loader
    // document.getElementById('loder').classList.remove('loder')
    // document.getElementById('spin').classList.remove('spin')
    ifLogin()
    // when we hover then show
    document.querySelectorAll('nav > ul > li').forEach((el, i) => {
        el.onmouseenter = () => {
            if (document.querySelector('.slideshow-container') && document.querySelector('#prod-container')) {
                document.querySelector('.slideshow-container').style.filter = 'blur(3px)'
                document.querySelector('#prod-container').style.filter = 'blur(3px)'
            } else {
                document.getElementById('Products_data').style.filter = 'blur(3px)'
            }
            // document.querySelector('.slideshow-container').style.filter = 'blur(3px)'
            // document.querySelector('#prod-container').style.backgroundColor = '#1E1E1E'
            // document.querySelector('body').style.filter = 'blur(0px)'
            // document.querySelector('#header').style.filter = 'blur(0px)'
            let cat = el.children[0].innerText
            let mainBannerData
            if (cat == 'MEN') {
                mainBannerData = manAllData
            } else if (cat == 'WOMEN') {
                mainBannerData = wmnAllData
            } else if (cat == 'KIDS') {
                mainBannerData = kidAllData
            } else if (cat == 'BABY') {
                mainBannerData = babyAllData
            } else {
                // mainBannerData = manAllData
            }

            console.log(mainBannerData)
            el.style.borderBottom = ' 3px solid red'
            let mainBanner = el.children[1]
            mainBanner.innerHTML = null
            // let mainBanner = document.createElement('div')
            console.log(mainBanner)

            mainBannerData.forEach((colData) => {
                // columnDiv with class megaitems
                let div = document.createElement('div')
                div.classList = 'megaitems'
                colData.forEach((sectionData) => {
                    let ul = document.createElement('ul')
                    sectionData.forEach((item, ind) => {
                        let li = document.createElement('li')
                        console.log(item)
                        li.innerText = item.name
                        if (ind != 0) {
                            li.style.fontSize = '15px'
                        } else {
                            li.style.fontSize = '15px'
                        }
                        if (item.value) {
                            li.onclick = () => {
                                openProdPage(item)
                            }

                        }
                        ul.append(li)
                    })
                    div.append(ul)
                })
                mainBanner.append(div)

            })
            console.log(mainBanner.innerHTML)


        }
    })

    document.querySelectorAll('nav > ul > li').forEach((el) => {
        el.onmouseleave = () => {
            if (document.querySelector('.slideshow-container') && document.querySelector('#prod-container')) {
                document.querySelector('.slideshow-container').style.filter = 'blur(0px)'
                document.querySelector('#prod-container').style.filter = 'blur(0px)'

            } else {
                document.getElementById('Products_data').style.filter = 'blur(0px)'
            }
            el.style.borderBottom = null
            // document.querySelector('.megamenu').style.visibility = 'hidden'
            // document.querySelector('.megamenu').style.display = 'none'
            // document.querySelector('.megamenu').style.opacity = '0'
        }
    })

    ifLogin()
}

let openProdPage = ({ value }) => {
    localStorage.setItem('category', value)
    location = './category.html'
    console.log(value)

}
const ifLogin = () => {
    let userDetail = localStorage.getItem('userDetail')
    userDetail = JSON.parse(userDetail) || null
    console.log(userDetail, 'userdetail');
    // let isLogin = true
    if (userDetail) {
        console.log('haya')
        // when user login we should show user detail insted of login logout button
        let temp = document.querySelector('#profiledropdown > ul > li:first-child')
        temp.remove()
        document.querySelector('#profiledropdown p:first-child').innerText = 'Hello ' + userDetail.name
        document.querySelector('#profiledropdown p:first-child').style.color = 'black'
        document.querySelector('#profiledropdown p:nth-child(2)').innerText = userDetail.email

        logoutFun()
    } else {
        //delete logout and profileDetail if User isn't login
        console.log('hello')
        document.getElementById('lastHr').remove()
        document.getElementById('editProfileLi').remove()
        document.getElementById('logoutLi').remove()
        // if user is not login then we should these things
        // logoutFun()
    }
}

const logoutFun = () => {
    document.getElementById('logoutLi').onclick = () => {
        localStorage.setItem('userDetail', null)
        location.reload()
    }
}
// localStorage.setItem('myCat', 'Tom');