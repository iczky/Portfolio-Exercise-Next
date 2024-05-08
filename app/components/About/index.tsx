import TwoContent from "@/components/TwoContent";
import styles from "./About.module.css";

const About = () => {
  return (
    <TwoContent
      leftSide={<h1 className="text-5xl basis-[20%]">About</h1>}
      rightSide={
        <p className="text-3xl basis-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      }
    />
  );
};

export default About;
