const QuestionDots = ({
  presentQuestion,
  totalQuestion = 5,
  handleDotPress,
}) => {
  const dots = Array.from({ length: totalQuestion }, (_, index) => (
    <span
      onClick={() => {
        handleDotPress(index);
      }}
      key={index}
      className={` ${
        presentQuestion === index ? " w-4 md:w-6" : " w-2 md:w-4"
      } cursor-pointer mt-5 inline-block rounded-md h-2 md:h-3 bg-app.yellow mx-2`}
    ></span>
  ));
  return <div>{dots}</div>;
};

export default QuestionDots;
