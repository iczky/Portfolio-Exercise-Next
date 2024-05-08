import Works from "./Works";
import { recentWork } from "@/lib/projects";

const RecentWorks = () => {
  return (
    <section className="flex px-20 py-40 w-full justify-between gap-40">
      <h1 className="text-5xl">Recent Work</h1>
      <div className="flex-1">
        {recentWork.map((item, index) => (
          <Works key={index} title={item.name} url={item.url} />
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
