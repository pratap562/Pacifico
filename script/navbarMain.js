import navbar from "../COMPONENT/navbar.js";

document.querySelector('#header').innerHTML = navbar()
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

const manAllData = [
    [manTopWear, extraIndianFest],
    [botManWear, menSndDiv],
    [menThirdDiv],
    [menFstDiv, sportWear]
]

console.log(manAllData);
window.onload = () => {
    ifLogin()
    // when we hover then show
    document.querySelectorAll('nav > ul > li').forEach((el, i) => {
        el.onmouseenter = () => {
            document.querySelector('.slideshow-container').style.filter = 'blur(3px)'
            document.querySelector('#prod-container').style.filter = 'blur(3px)'
            // document.querySelector('.slideshow-container').style.filter = 'blur(3px)'
            // document.querySelector('#prod-container').style.backgroundColor = '#1E1E1E'
            // document.querySelector('body').style.filter = 'blur(0px)'
            // document.querySelector('#header').style.filter = 'blur(0px)'
            let cat = el.children[0].innerText == 'MEN'
            let mainBannerData
            if (cat == 'MEN') {
                mainBannerData = manAllData
            } else if (cat == 'WOMEN') {
                mainBannerData = manAllData
            } else if (cat == 'KIDS') {
                mainBannerData = manAllData
            } else if (cat == 'HOME & LIVING') {
                mainBannerData = manAllData
            } else {
                mainBannerData = manAllData
            }

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
            document.querySelector('.slideshow-container').style.filter = 'blur(0px)'
            document.querySelector('#prod-container').style.filter = 'blur(0px)'
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
    location = './prod.html'
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