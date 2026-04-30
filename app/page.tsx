import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";
import HowItWorks from "./components/how-it-works";
import HelpDreamCompany from "./components/help-section";



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative w-full overflow-hidden bg-[#F4F4F4]">
          {/* GREEN RIGHT SIDE */}
          <div className="absolute right-0 top-0 z-0 hidden h-full w-[605px] rounded-bl-[60px] bg-[#00CC99] lg:block"></div>

          {/* CONTENT */}
          <div className="relative z-10">
            <Navbar />
            <Banner />
          </div>
        </section>
        <HowItWorks />
        <HelpDreamCompany />
      </main>

      <Footer />
    </div>
  );
}