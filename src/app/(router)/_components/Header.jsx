import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineStars } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white  py-3  " style={{paddingRight:"80px", paddingLeft:"100px", text:"#8064A2"}}>
      <div className="container-fluid bg-white">
  <Link className="navbar-brand d-md-block d-none" href="#">
    <Image src='/logo.png' alt='logo' width={290} height={40} className='mt-10 ml-97' />
  </Link>
  <div>
  <form className="ms-auto d-none d-lg-flex" role="search">
  <div className="input-group">
    <input type="search" className="form-control" style={{ width: "300px", color: "#fff" }} placeholder="Search here..." aria-label="Input group example" aria-describedby="btnGroupAddon" />
    <button className="btn btn-outline-secondary text-white" type="button" id="btnGroupAddon" style={{backgroundColor: "#8064A2"}}><CiSearch /></button>
  </div>
</form>


          <div className='d-block d-md-none'>
          <Image src='/logo2.png' alt='logo' width={40} height={40} className='mt-10 ml-97' />
</div>
        </div>
        <div className="d-block d-lg-none"> {/* Show only on small screens */}
        <div className='d-block d-md-none w-5'><CiSearch /></div>


        </div>
       
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 gap-4">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mt-4 mt-md-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <MdOutlineExplore className="fs-4" /> Explore
      </a>
      <ul className="dropdown-menu dropdown-menu-end" style={{ width: "200px" }}>
        <li><a className="dropdown-item" href="#">People - Community</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Places - Venues</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Programs - Events</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Products - Store</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Blogs</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <MdOutlineStars className="fs-4" /> Hobbies
      </a>
    </li>
    <li className="nav-item d-flex align-items-center">
      <FaBookmark className="fs-4" />
    </li>
    <li className="nav-item d-flex align-items-center">
      <IoIosNotifications className="fs-4" />
    </li>
    <li className="nav-item d-flex align-items-center">
      <FaShoppingCart className="fs-4" />
    </li>
    <li className="nav-item">
  <button className="btn btn-outline" type="submit" style={{color: "#8064A2", borderColor: "#8064A2"}}>Sign in</button>
</li>

  </ul>
</div>

      </div>
    </nav>
  )
}

export default Header
