import { testimoniType } from "@/lib/testimonials";
import Image from "next/image";

const TestimonialReview: React.FC<testimoniType> = ({
  desc,
  imgProfile,
  name,
  role,
}) => {
  return (
    <div className="flex flex-col gap-16">
      <p className="text-2xl font-medium">{desc}</p>
      <div className="flex gap-3">
        <Image src={imgProfile} alt="Picture" width={64} height={64} />
        <div className="flex flex-col gap-2 justify-center text-lg">
          <h2>{name}</h2>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialReview;
