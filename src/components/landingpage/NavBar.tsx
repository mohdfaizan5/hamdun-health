import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <section className="nav_company_container">
          <Image
            width={50}
            height={50}
            className="nav_logo"
            src="static/assets/product_images/favicon.png"
            alt=""
          />
        </section>
        <section className="nav_links_container">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">
            <button className="btn1">Order Now</button>
          </a>
        </section>
        <section className="nav_links_container-mobile">
          <i className="ri-menu-fill"></i>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
