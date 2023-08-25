import Hero from "@/components/home/hero";
import FirstFeature from "@/components/home/features/first-feature";
import { Fragment } from "react";
import SecondFeature from "@/components/home/features/second-feature";
import Testimonials from "@/components/home/testimonials";
import Footer from "@/components/home/footer";

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FirstFeature />
      <SecondFeature />
      <Testimonials />
      <Footer />
    </Fragment>
  );
}
