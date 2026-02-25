"use client";

import Image from "next/image";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaPhone, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { galleryData } from "./data/galleryData";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===== Gallery Logic ===== */
  const categories = Object.keys(galleryData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

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
          <section id="categories" className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

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

          {/* ===== Title ===== */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Our Gallery
          </h2>

          {/* ===== Gallery Grid ===== */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {galleryData[activeCategory].map((img, index) => (
              <div
                key={index}
                className="relative h-60 overflow-hidden rounded-xl shadow-md group"
              >
                <Image
                  src={img}
                  alt="Cake"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= Order ================= */}
      <section id="order" className="py-20 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold text-pink-600">Place Your Order</h2>

        <form className="mt-8 max-w-md mx-auto flex flex-col gap-4">
          <input className="p-3 border rounded-lg" placeholder="Your Name" />
          <input className="p-3 border rounded-lg" placeholder="Phone Number" />
          <textarea
            className="p-3 border rounded-lg"
            placeholder="Cake Details"
          ></textarea>

          <button className="bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
            Order Now 🎂
          </button>
        </form>
      </section>

      {/* ================= Footer ================= */}
      <section id="footer" className="py-4 bg-white text-center">
          {/* footer */}
        <p className="mt-4 text-blue-900 max-w-xl mx-auto">
          &copy; {new Date().getFullYear()} <a className="hover:underline text-pink-600" href="https://jannatullima.vercel.app/">Jannatul Lima</a>. All rights reserved.
        </p>
      </section>
    </main>
  );
}