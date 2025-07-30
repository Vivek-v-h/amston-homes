import React from 'react'
import Aboutus from "@/components/Aboutus";
import Narrow from "@/components/Narrow";
import ContactUs from "@/components/ContactUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import MeetTheFounder from "@/components/MeetTheFounder";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Locations from "@/components/locations";
import WhyUs from "@/components/WhyUs";

const page = () => {
  return (
    <div>
      <div className="fixed absolute top-0 z-30 w-full">
          <Navbar />
      </div>
      <HomePage />
      <Aboutus />

      
      <Services />
      <Locations />
      <Portfolio />
      <WhyUs />
      <ContactUs />
      <MeetTheFounder/>
      <Narrow />
      <Footer />
    </div>
  )
}

export default page