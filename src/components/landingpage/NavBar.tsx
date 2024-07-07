import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center w-screen">
      <section className="nav_company_container">
        <Image
          width={50}
          height={50}
          className="nav_logo"
          src="/assets/logo_hamdun.png"
          alt=""
        />
      </section>
      <nav className="">
        <a href="">Home</a>
        <a href="">About us</a>
        <a href="">
          <button className="btn1">Order Now</button>
        </a>
      </nav>
      <section className="nav_links_container-mobile">
        hi
        <i className="ri-menu-fill"></i>
      </section>
    </header>
  );
};

export default NavBar;
