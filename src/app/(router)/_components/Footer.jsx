import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <>
    
<div class="container my-5">

  <footer
          class="text-center text-lg-start text-black"
          style={{backgroundColor: "#fff"}}
          >
    <section className='p-2'>
      

    </section>
   
    <section class="">
      <div class="container text-center text-md-start mt-5">

        <div class="row mt-3">

          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Hobbycue</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
           <p>
              <a href="#!" class="text-black">About</a>
            </p>
            <p>
              <a href="#!" class="text-black"> Our Services</a>
            </p>
             <p>
              <a href="#!" class="text-black">Work with Us</a>
            </p> 
            <p>
              <a href="#!" class="text-black">FAQ</a>
            </p> 
            <p>
              <a href="#!" class="text-black">Contact Us</a>
            </p>
            
          </div>



          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> <i class="fab fa-facebook-f"></i>
            <h6 class="text-uppercase fw-bold">How Do I</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:" 60px", backgroundColor: "#7c4dff", height: "2px"
}}                />
            <p>
              <a href="#!" class="text-black">Sign up</a>
            </p>
            <p>
              <a href="#!" class="text-black">Add a Listing</a>
            </p>
            <p>
              <a href="#!" class="text-black">Claim Listing</a>
            </p>
            <p>
              <a href="#!" class="text-black">Post a Query</a>
            </p>
            <p>
              <a href="#!" class="text-black">Add a BLog Post</a>
            </p>
            <p>
              <a href="#!" class="text-black">Other Queries</a>
            </p>
          </div>



          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Quick links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:" 60px", backgroundColor: "#7c4dff", height: "2px"
              }}                      />
            <p>
              <a href="#!" class="text-black">Listings</a>
            </p>
            <p>
              <a href="#!" class="text-black">Blog Posts</a>
            </p>
            <p>
              <a href="#!" class="text-black">Shop / Store</a>
            </p>
            <p>
              <a href="#!" class="text-black">Community</a>
            </p>
          </div>



          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold">Social Media</h6>

      <div>
        <a href="" class="text-black me-4">
         <CiFacebook/>
        </a>
        <a href="" class="text-black me-4">
<FaTwitter/>
        </a>
        <a href="" class="text-black me-4">
<FaInstagram/>
        </a>
        <a href="" class="text-black me-4">
<FaPinterest/>
        </a>
        <a href="" class="text-black me-4">

<FaGooglePlusG/>
        </a>
        
        <a href="" class="text-black me-4">
<MdEmail/>
        </a>
        <a href="" class="text-black me-4">
<IoIosSend/>
        </a>
        
      </div>
            <h6 class="text-uppercase fw-bold mb-2 mt-5">Invite Friends</h6>
            <div className="input-group">
            <input type="search" className="form-control" placeholder="Email id" aria-label="Input group example" aria-describedby="btnGroupAddon" />
              <div className="input-group-text d-block text-white" id="btnGroupAddon" style={{background:"#8064A2"}}>Invite</div>
          </div>
</div>
        </div>

      </div>
    </section>

    <div
         class="text-center p-3"
         style={{backgroundColor: "#F7F5F9"}}
         >
© Purple Cues Private Limited        
    </div>
  </footer>

</div>
    </>
  )
}

export default Footer