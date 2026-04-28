import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      {/* THIS IS IMPORTANT */}
      <main className="flex-grow">
        {/* your page content */}
      </main>

      <Footer />

    </div>
  );
}