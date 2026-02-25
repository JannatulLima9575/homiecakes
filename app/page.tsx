export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600">
          Freshly Baked Happiness 🎂
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          Homemade cakes made with love for every celebration.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#categories" className="bg-pink-500 text-white px-6 py-3 rounded-full">
            View Categories
          </a>
          <a href="#order" className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full">
            Order Now
          </a>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-pink-600">Our Categories</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6 px-6">
          <div className="bg-pink-100 p-6 rounded-xl">Chocolate Cakes</div>
          <div className="bg-pink-100 p-6 rounded-xl">Birthday Cakes</div>
          <div className="bg-pink-100 p-6 rounded-xl">Wedding Cakes</div>
          <div className="bg-pink-100 p-6 rounded-xl">Custom Cakes</div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-20 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold text-pink-600">Place Your Order</h2>
        <form className="mt-8 max-w-md mx-auto flex flex-col gap-4">
          <input className="p-3 border rounded-lg" placeholder="Your Name" />
          <input className="p-3 border rounded-lg" placeholder="Phone Number" />
          <textarea className="p-3 border rounded-lg" placeholder="Cake Details"></textarea>
          <button className="bg-pink-500 text-white py-3 rounded-lg">
            Order Now 🎂
          </button>
        </form>
      </section>
    </main>
  );
}