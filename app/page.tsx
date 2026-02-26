"use client";

import Image from "next/image";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaPhone, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import { MdDeliveryDining, MdEmail } from "react-icons/md";
import { galleryData } from "./data/galleryData";
import { CiLocationOn } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===== Gallery Logic ===== */
  type Category = keyof typeof galleryData;

  const categories = Object.keys(galleryData) as Category[];

  const [activeCategory, setActiveCategory] =
    useState<Category>(categories[0]);

  const [showAll, setShowAll] = useState(false);

  return (
    <main className="scroll-smooth">
      {/* ================= HERO + NAVBAR WRAPPER ================= */}
      <section className="relative min-h-screen text-center">
        {/* Background Image */}
        <Image
          src="/banner.jpg"
          alt="Background"
          fill
          priority
          className="object-cover -z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 -z-10"></div>

        {/* ================= TOP NAVBAR ================= */}

        {/* Upper Pink Bar */}
        <div className="bg-pink-500 text-white">
          <div className="container mx-auto text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <FaPhone />
              <span>01304-857347</span>

              <MdEmail />
              <span>homiecakes02@gmail.com</span>
            </div>

            <div className="flex gap-4 mt-2 md:mt-0">
              <a
                href="https://www.facebook.com/homiecakes02"
                className="hover:opacity-80"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/homiecakes02"
                className="hover:opacity-80"
              >
                <BsInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@homie.cakes"
                className="hover:opacity-80"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Lower White Navbar */}
        <div className="bg-white/90 backdrop-blur-md relative">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-600">
              HomieCakes 🎂
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 font-medium text-blue-900">
              <li>
                <a href="#home" className="hover:text-pink-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#categories" className="hover:text-pink-500">
                  Categories
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-pink-500">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#order" className="hover:text-pink-500">
                  Order
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-pink-500">
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Menu Icon */}
            <div
              className="md:hidden text-2xl text-pink-600 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-pink-500 border-t">
              <ul className="flex flex-col text-white font-medium">
                <li className="">
                  <a
                    href="#home"
                    className="block py-3 px-6 hover:bg-pink-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>

                <li className="">
                  <a
                    href="#categories"
                    className="block py-3 px-6 hover:bg-pink-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Categories
                  </a>
                </li>

                <li className="">
                  <a
                    href="#order"
                    className="block py-3 px-6 hover:bg-pink-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Order
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="block py-3 px-6 hover:bg-pink-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ================= HERO CONTENT ================= */}

        <div
          id="home"
          className="flex flex-col items-center justify-center text-center px-4 min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vlg:min-h-[75vh] animate-fadeIn"
        >
          {/* Title */}
          <h1 className="font-bold text-pink-600 text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight animate-slideUp">
            Freshly Baked Happiness 🎂
          </h1>

          {/* Description */}
          <p
            className="
    mt-4
    text-blue-900
    max-w-xl
    
    text-sm
    sm:text-base
    md:text-lg
    
    animate-slideUp delay-200
    "
          >
            Homemade cakes made with love for every celebration.
          </p>

          {/* Buttons */}
          <div
            className="
    mt-6 
    flex 
    gap-3 
    sm:gap-4 
    flex-wrap 
    justify-center
    
    animate-slideUp delay-300
    "
          >
            <a
              href="#categories"
              className="
       border
      border-pink-500
      text-pink-500
      
      px-5 py-2.5
      sm:px-6 sm:py-3
      
      rounded-full
      
      text-sm
      sm:text-base
      
      hover:bg-pink-600 hover:text-white
      
      transition
      duration-300
      hover:scale-105
      "
            >
              View Categories
            </a>

            <a
              href="#order"
              className="
      border
      border-pink-500
      text-pink-500
      
      px-5 py-2.5
      sm:px-6 sm:py-3
      
      rounded-full
      
      text-sm
      sm:text-base
      
      hover:bg-pink-500
      hover:text-white
      
      transition
      duration-300
      hover:scale-105
      "
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= Categories ================= */}
      <section id="categories" className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
          Choose Your Cake
        </h2>

        <p className="text-blue-900 mt-2">1 Pound Regular Cake Price</p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {/* Vanilla Cake */}
          <div className="bg-pink-50 rounded-xl shadow-md overflow-hidden transition">
            <div className="relative w-full h-56">
              <Image
                src="/venila.jpg"
                alt="Vanilla Cake"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Vanilla Cake</h3>
              <p className="text-pink-600 font-bold mt-2">650 TK / Pound</p>
            </div>
          </div>

          {/* Strawberry Mango Cake */}
          <div className="bg-pink-50 rounded-xl shadow-md overflow-hidden transition">
            <div className="relative w-full h-56">
              <Image
                src="/strawberry.jpg"
                alt="Strawberry Cake"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Strawberry / Mango Cake</h3>
              <p className="text-pink-600 font-bold mt-2">700 TK / Pound</p>
            </div>
          </div>

          {/* Chocolate Cake */}
          <div className="bg-pink-50 rounded-xl shadow-md overflow-hidden transition">
            <div className="relative w-full h-56">
              <Image
                src="/chocolate.jpg"
                alt="Chocolate Cake"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Chocolate Cake</h3>
              <p className="text-pink-600 font-bold mt-2">750 TK / Pound</p>
            </div>
          </div>
        </div>

        {/* Custom Cake Info */}
        <div className="mt-10 text-blue-900 text-lg px-6">
          <p className="font-bold">Custom Cake Available 🎂</p>

          <p className="text-sm mt-2 ">
            Customized cakes price will be added based on materials and design.
          </p>
        </div>
      </section>

      {/* ================= CATEGORY + GALLERY SECTION ================= */}
      <section id="gallery" className="py-20 bg-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* ===== Title ===== */}
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-10 text-center">
            Our Gallery
          </h2>

          {/* ===== Category Buttons ===== */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border transition duration-300 
                  ${
                    activeCategory === cat
                      ? "bg-pink-500 text-white border-pink-500"
                      : "border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ===== Gallery Grid ===== */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {(showAll
              ? galleryData[activeCategory]
              : galleryData[activeCategory].slice(0, 3)
            ).map((img, index) => (
              <div
                key={index}
                className="relative h-60 overflow-hidden rounded-xl shadow-md group"
              >
                <Image src={img} alt="Cake" fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* ===== Show More Button ===== */}
          {galleryData[activeCategory].length > 3 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-white hover:border hover:border-pink-600 hover:text-pink-600 transition duration-300"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= DELIVERY INFO BANNER ================= */}
      <section className="py-10 md:py-16 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="flex flex-col md:flex-row items-center 
    bg-pink-200 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Left Image */}
            <div className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-80">
              <Image
                src="/card.png"
                alt="Cake Delivery"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-3 md:mb-4">
                Delivery Available in Bishwanath
              </h2>

              <p className="text-blue-900 text-sm sm:text-base mb-2">
                <CiLocationOn className="inline mr-1 text-pink-500 text-2xl" />{" "}
                Location:{" "}
                <span className="font-semibold">Bishwanath, Sylhet</span>
              </p>

              <p className="text-blue-900 text-sm sm:text-base mb-2">
                <MdDeliveryDining className="inline mr-1 text-2xl text-pink-600" />
                Delivery is{" "}
                <span className="font-semibold text-pink-600">FREE</span> within
                Bishwanath Bazar.
              </p>

              <p className="text-gray-600 text-sm sm:text-base mb-2">
                <BiWorld className="inline mr-1 text-pink-600 text-2xl" /> All
                over Bishwanath including:
              </p>

              <ul className="list-disc md:ml-6 list-inside text-gray-600 text-sm sm:text-base mb-4">
                <li>Roshidpur 120tk</li>
                <li>Lala Bazar 100tk</li>
                <li>Sondiful 50tk</li>
              </ul>

              <button
                className="mt-2 w-full sm:w-auto px-6 py-2
        bg-pink-500 text-white rounded-full 
        hover:bg-white hover:border hover:border-pink-600 
        hover:text-pink-600 transition duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Order ================= */}
      <section
        id="order"
        className="py-20 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
              Place Your Order 🎂
            </h2>
            <p className="text-center text-gray-500 mb-10">
              Fill out the form below and we’ll contact you shortly.
            </p>

            <form className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative">
                <input
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your Name"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Phone Number"
                />
              </div>

              {/* Address */}
              <input
                className="p-3 border rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Delivery Address"
              />

              {/* Details */}
              <textarea
                rows={4}
                className="p-3 border rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Cake Details (Flavor, Weight, Design...)"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="md:col-span-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                Submit Order 🎀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= Contact ================= */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
            Contact Us 💌
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Phone */}
            <a
              href="tel:+8801XXXXXXXXX"
              className="bg-pink-50 p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 block"
            >
              <FaPhone className="text-4xl text-pink-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-gray-600">+880 1XXXXXXXXX</p>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              className="bg-pink-50 p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 block"
            >
              <FaFacebook className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-1">Facebook</h3>
              <p className="text-gray-600">fb.com/yourpage</p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              className="bg-pink-50 p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 block"
            >
              <BsInstagram className="text-4xl text-pink-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-1">Instagram</h3>
              <p className="text-gray-600">@yourhandle</p>
            </a>

            {/* Email */}
            <a
              href="mailto:youremail@gmail.com"
              className="bg-pink-50 p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 block"
            >
              <MdEmail className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600">youremail@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <section id="footer" className="py-4 bg-white text-center">
        {/* footer */}
        <p className="mt-4 text-blue-900 max-w-xl mx-auto">
          &copy; {new Date().getFullYear()}{" "}
          <a
            className="hover:underline text-pink-600"
            href="https://jannatullima.vercel.app/"
          >
            Jannatul Lima
          </a>
          . All rights reserved.
        </p>
      </section>
    </main>
  );
}
