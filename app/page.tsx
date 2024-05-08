import FirstHero from "./components/FirstHero";
import About from "./components/About";
import RecentWorks from "./components/RecentWorks";
import ImageSlide from "./components/ImageSlide";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <FirstHero />
      <About />;
      <RecentWorks />
      <ImageSlide />
      <Testimonials />
    </>
  );
}
