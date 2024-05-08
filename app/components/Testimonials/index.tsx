import { testimoniList } from "@/lib/testimonials";
import TestimonialReview from "./TestimonialReview";

const Testimonials = () => {
  return (
    <section className="flex py-36 px-24 gap-[206px]">
      <h1 className="text-4xl font-medium">TESTIMONIALS</h1>
      <div className="flex flex-col gap-16">
        {testimoniList.map((item, index) => (
          <TestimonialReview key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
