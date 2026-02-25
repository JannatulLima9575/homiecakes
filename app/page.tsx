"use client";

import Image from "next/image";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaPhone, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

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
              <a href="https://www.facebook.com/homiecakes02" className="hover:opacity-80">
                <FaFacebook />
              </a>

              <a href="https://www.instagram.com/homiecakes02" className="hover:opacity-80">
                <BsInstagram />
              </a>

              <a href="https://www.tiktok.com/@homie.cakes" className="hover:opacity-80">
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
          className="flex flex-col items-center justify-center px-4 pt-32"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600">
            Freshly Baked Happiness 🎂
          </h1>

          <p className="mt-4 text-gray-700 max-w-xl">
            Homemade cakes made with love for every celebration.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <a
              href="#categories"
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
            >
              View Categories
            </a>

            <a
              href="#order"
              className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-500 hover:text-white transition"
            >
              Order Now
            </a>
          </div>
        </div>

      </section>

      {/* ================= Categories ================= */}
      <section id="categories" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-pink-600">Our Categories</h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6 px-6">
          <div className="bg-pink-100 p-6 rounded-xl">Chocolate Cakes</div>
          <div className="bg-pink-100 p-6 rounded-xl">Birthday Cakes</div>
          <div className="bg-pink-100 p-6 rounded-xl">Wedding Cakes</div>
          <div className="bg-pink-100 p-6 rounded-xl">Custom Cakes</div>
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

      {/* ================= Contact ================= */}
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-pink-600">Get in Touch</h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Have questions? Reach out to us!
        </p>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="mailto:contact@homiecakes.com"
            className="text-pink-500 hover:underline"
          >
            Email Us
          </a>

          <a
            href="tel:+8801234567890"
            className="text-pink-500 hover:underline"
          >
            Call Us
          </a>
        </div>
      </section>

    </main>
  );
}