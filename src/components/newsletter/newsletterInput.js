const NewsLetterInput = () => {
  return (
    <div className="mt-6">
      <h3 className="text-app.yellow lg:text-lg font-normal lg:font-medium text-center lg:text-left">
        Subscribe to our newsletter !
      </h3>
      <div className=" bg-app.yellow mt-2 flex ">
        <input
          className=" bg-app.green border text-app.yellow border-app.yellow placeholder:text-app.yellow text-sm lg:text-base px-3 py-2 w-full lg:w-fit"
          name=""
          placeholder="tapan@savenegry.com"
          type="email"
        />
        <button className="text-xs lg:text-base font-medium px-2 lg:px-3 border border-app.yellow">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetterInput;
