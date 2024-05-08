/* eslint-disable @next/next/no-img-element */
import { listImg } from "@/lib/imageLists";

const ImageSlide = () => {
  const ImageComponentTop: JSX.Element[] = listImg
    .slice(0, listImg.length / 2)
    .map((item, index) => (
      <div className="px-12 py-14 overflow-visible bg-slate-200" key={index}>
        <img src={item} alt="img" />
      </div>
    ));
  const ImageComponentBottom: JSX.Element[] = listImg
    .slice(listImg.length / 2)
    .map((item, index) => (
      <div className="px-12 py-14 overflow-visible bg-slate-200" key={index}>
        <img src={item} alt="img" />
      </div>
    ));
  return (
    <div className="flex flex-col">
      <div
        className="flex overflow-scroll gap-20 mb-10"
        style={{ scrollbarWidth: "none" }}>
        {ImageComponentTop}
      </div>
      <div
        className="flex overflow-scroll gap-20 mb-10"
        style={{ scrollbarWidth: "none" }}>
        {ImageComponentBottom}
      </div>
    </div>
  );
};

export default ImageSlide;
