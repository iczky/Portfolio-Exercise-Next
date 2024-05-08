interface TwoContentProps {
  leftSide: JSX.Element;
  rightSide: JSX.Element | JSX.Element[];
}

const TwoContent: React.FC<TwoContentProps> = ({ leftSide, rightSide }) => {
  return (
    <section className="px-20 py-40 flex w-full justify-between">
      {leftSide}
      {Array.isArray(rightSide) ? (
        rightSide.map((element, index) => <div key={index}>{element}</div>)
      ) : (
        <div className="basis-[80%] justify-between">{rightSide}</div>
      )}
    </section>
  );
};

export default TwoContent;
