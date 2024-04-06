'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const data = [
  {
    id: 1,
    icon: <FaPeopleGroup />,
    name: 'People',
    desc: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
    btn: 'Connect'
  },
  {
    id: 2,
    icon: <MdPlace />,
    name: 'Place',
    desc: 'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.',
    btn: 'Meet up'
  },
  {
    id: 3,
    icon: <FaCartFlatbedSuitcase />,
    name: 'Product',
    desc: 'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.',
    btn: 'Get it'
  },
  {
    id: 4,
    icon: <AiFillSchedule />,
    name: 'Program',
    desc: 'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.',
    btn: 'Attend'
  },
]

const LandingPage = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleToggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div className="container p-5">
      <div className="row p-5" style={{background:'#F7F5F9'}}>
        {/* Left Section */}
        {/* style={{text: '#8064A2'}} */}
        <div className="col-md-6 p-2">
          <h1 style={{text:"bold"}}>Explore your <span className='text-primary '>hobby</span> or <span style={{text:'#8064A2'}}>passion</span></h1>
          <p className='text-'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
          </p>
          <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
          <div style={{ maxWidth: '100%' }}>
  <Image src={'/peopleimg1.png'} alt='peopleimage' height={40} width={390} style={{ height: 'auto', width: '100%', objectFit: 'cover' }} />
</div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
  <div className="container">
    <div className="row">
      {/* Buttons */}
      <div className="col">
      <p className="btn outline-none" onClick={() => setShowSignIn(true)} style={{ borderBottom: showSignIn ? '2px solid transparent' : '2px solid #8064A2' }}>Sign In</p>
        <p className="btn outline-none" onClick={() => setShowSignIn(false)} style={{ borderBottom: showSignIn ? '2px solid #8064A2' : '2px solid transparent' }}>Join In</p>
      </div>
    </div>
    <div className="row mt-3">
      <div className="row d-flex gap-2 justify-between mb-5">
        {/* Updated styles for the social media buttons */}
        <button type="button" className="btn btn-outline-info me-2 mb-2 mb-md-0" style={{ borderColor: '#8064A2', color: '#000',  }}><span style={{ marginRight: '0.5rem' }}><FaFacebookF /></span> Continue with Facebook</button>
        <button type="button" className="btn btn-outline-info" style={{ borderColor: '#8064A2', color: '#000' }}><span><FaGoogle /> </span> Continue with Google</button>
      </div>
    </div>
    {/* Form */}
    <div className="row">
      <div className="col">
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
          </div>
          <button type="submit" className="btn btn-primary">{showSignIn ? 'Continue' : 'Agree & Continue'}</button>
        </form>
      </div>
    </div>
  </div>
</div>


      </div>

      <div className='col-12 p-10' style={{padding:"20px"}}>
  {data.map((product, index) => (
    index % 2 === 0 && (
      <div className='row' key={index}>
        <div className='col-md-6 col-12'>
          <div className="card mx-2 my-2 p-3"> {/* Adjusted padding */}
            <div className='p-3'>
              <span className={index === 0 ? 'text-info fs-3 mr-3' : index === 1 ? 'text-success fs-3 mr-3' : index === 2 ? 'text-danger fs-3 mr-3' : 'text-primary fs-3 mr-3'}>
                {product.icon}
              </span>
              <span className="align-middle ml-2">{product.name}</span> {/* Adjusted spacing */}
            </div>
            <div className="card-body">
              <p className="card-text">{product.desc}</p>
              <a href="#" className="btn btn-outline-primary">{product.btn}</a>
            </div>
          </div>
        </div>
        {index + 1 < data.length && (
          <div className='col-md-6 col-12'>
            <div className="card mx-2 my-2 p-3"> 
              <div className='p-3 '>
                <span className={index + 1 === 0 ? 'text-info fs-3 mr-2 me-2' : index + 1 === 1 ? 'text-success fs-3 mr-2' : index + 1 === 2 ? 'text-danger fs-3 mr-2' : 'text-primary fs-3 mr-2'}>
                  {data[index + 1].icon}
                </span>
                <span className="align-middle">{data[index + 1].name}</span> {/* Adjusted spacing */}
              </div>
              <div className="card-body">
                <p className="card-text">{data[index + 1].desc}</p>
                <a href="#" className="btn btn-outline-primary">{data[index + 1].btn}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  ))}
</div>



<div className="p-md-5 md-2" style={{ backgroundColor: '#F7FDFF', marginTop: '25px', padding: "20px" }}>
  <div className='row'>
    <div className='col-md-12 '>
      <div className="card mx-2 my-2 p-3">
        <div className="d-flex align-items-center">
          <div className="rounded-circle bg-primary text-white p-2 me-1">
            <IoMdAdd />
          </div>
          <span>Add your Own</span>
        </div>
        <div className="card-body">
          <p className="card-text">Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
          <a href="#" className="btn btn-outline-primary">Add New</a>
        </div>
      </div>
    </div>
  </div>
</div>


<div className=" p-md-5" style={{backgroundColor: '#F7F5F9', padding:"10px",marginTop:'55px'}}>
  <div className='col-12'>
    <div className="card mx-2 my-2 p-md-2 p-2">
      <div className="d-flex align-items-center">
        <div className="rounded-circle  text-white p-2 me-1" style={{backgroundColor: '#8064A2'}}>
          <FaQuoteLeft />
        </div>
        <span>Testimonials</span>
      </div>
      <div className="card-body">
        <p className="card-text">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
        <div class="audio-player d-flex align-items-center justify-content-end mt-4">
        {/* <audio controls>
              <source src="testimony_audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
             */}
          <img src="/images.jpeg" className='rounded-circle mr-5 bold' width={50} height={50} alt="User Avatar" />
          <div>
            <span class="username" style={{text: '#8064A2'}}>Shubha Nagarajan</span><br/>
            <span className='text-primary'>Classical Dancer</span>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

       

<div style={{backgroundColor: '#F7FDFF', marginTop:'25px'}}>
  <div className='p-5'>
  <h1 className='p-2'>Your <span style={{text:'#8064A2'}}>Hobby</span>, Your <span className='text-primary'>Community...</span></h1>
  <button className='btn text-white ' style={{backgroundColor: '#8064A2'}}>Get Started</button>
  </div>
  <div style={{ maxWidth: '100%' }}>
  <Image src={'/footerimg.png'} alt='peopleimage' height={1200} width={400} style={{ height: 'auto', width: '100%', objectFit: 'cover' }} />
</div>

</div>
    </div>
  );
};

export default LandingPage;
