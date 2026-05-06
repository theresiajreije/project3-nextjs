import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";
import HowItWorks from "./components/how-it-works";
import HelpDreamCompany from "./components/help-section";
import JobCategories from "./components/job-categories";
import AddedJobs from "./components/added-jobs";
import Feedback from "./components/feedback";




export default function Home() {
  return (
   <main className="w-full">
    <section className="relative w-full overflow-hidden bg-[var(--left)] md:bg-[linear-gradient(to_right,var(--left)_0%,var(--left)_64%,var(--brand)_64%,var(--brand)_100%)]">
        <Navbar />
        <Banner />
      </section>

      <section className="w-full bg-white">
        <HowItWorks />
        <HelpDreamCompany/>
        <JobCategories />
        <AddedJobs/>
        <Feedback/>
        <Footer/>
      </section>
    </main>
  );
}