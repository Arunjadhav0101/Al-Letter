import { Link } from "@remix-run/react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Templatz</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to **Templatz**, your go-to AI-powered letter-writing assistant.  
          Whether you need a **formal business letter, a personal letter, or a professional email**, our AI helps you write in seconds.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">Why Choose Templatz?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>📄 **Instant Letter Generation** – No more struggling with wording!</li>
          <li>🎯 **Customizable Templates** – Tailor your letters to fit your needs.</li>
          <li>🔍 **Professional & Error-Free** – AI ensures clear and polished writing.</li>
          <li>📥 **Download & Share** – Easily save and send your letters.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">How It Works</h2>
        <p className="text-lg text-gray-600">
          Simply enter a few details, select your letter type, and let AI craft a **perfect** letter for you.  
          It’s fast, easy, and completely hassle-free!
        </p>

        <div className="mt-6 text-center">
          <Link to={"/generate"} className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800">
            Try It Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
