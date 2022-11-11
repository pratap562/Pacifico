let navbar = () => {
  return `<div id="navbar">
      <div id="logo">
        <a href="index.html">
        <img src="./image/Pacifico.png" alt="" />
        </a>
      </div>
      <nav>
        <ul id="popup">
          <li>
            <a href="">MEN</a>
            <div class="megamenu">
            </div>
          </li>
          <li>
            <a href="">WOMEN</a>
            <div class="megamenu">
            </div>
          </li>
          <li>
            <a href="">KIDS</a>
            <div class="megamenu">
            </div>
          </li>
          <li>
            <a href="">BABY</a>
            <div class="megamenu">
            </div>
          </li>
          <li>
            <a href="">BEAUTY</a>
            <div class="megamenu">
            </div>
          </li>
          <li><a href="">STUDIO</a></li>
        </ul>
        <div id="searchdiv">
          <input type="text" placeholder="search for product, brands  " />
        </div>
        <div class="icon" id="profile">
          <a href="">
            <i class="fa-solid fa-user"></i>
            <div><p>profile</p></div>
          </a>
          <div id="profiledropdown">
            <p>Welcome</p>
            <p>To access account and manage orders</p>

            <ul>
              <li><a href="signup.html">Login/Signup</a></li>
              <hr>
              <li>order</li>
              <li>Wishlist</li>
              <li>Gift Card</li>
              <li>Myntra Insider</li>
              <hr>
              <li>Myntra Credit</li>
              <li>coupen</li>
              <li>Saved cards</li> 
              <li>Saved VPA</li> 
              <li>Saved Address</li>
              <hr id="lastHr">
              <li id="editProfileLi">Edit Profile</li>
              <li id="logoutLi">Logout</li>
              <li>
            </ul>
          </div>
        </div>
        <div class="icon">
          <a href=""
            >
            <i class="fa-regular fa-heart"></i>
            <p>wishlist</p></a
          >
        </div>
        <div class="icon">
          <a href="">
          <i class="fa-solid fa-bag-shopping"></i>
            <p>bag</p>
          </a>
        </div>
      </nav>
    </div>`;
}
export default navbar