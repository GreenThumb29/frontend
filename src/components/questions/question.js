import { useEffect, useState } from "react";

const Question = ({
  question,
  handleQuestion,
  presentQuestion,
  totalQuestion,
  handleSubmit,
  handleDotPress,
  form,
}) => {
  const [value, setValue] = useState("");
  const [agreement, setAgreement] = useState(false);

  useEffect(() => {
    if (question?.inputType === "dropDown") {
      setValue(question?.optionValues[0]);
    } else {
      setValue("");
    }
    if (form[question?.key] !== undefined) {
      setValue(form[question?.key]);
    }
  }, [question, form]);

  const handleButtonPress = () => {
    const formKeyValue = { key: question?.key, value: value };
    let updatedForm = { ...form, [question?.key]: value };

    handleQuestion(formKeyValue, updatedForm);
    if (presentQuestion === totalQuestion) {
      handleSubmit(agreement, updatedForm);
    }
  };

  switch (question?.inputType) {
    case "dropDown":
      return (
        <div className=" flex flex-col w-full lg:w-3/4 text-app.yellow">
          <label className="my-4">
            <span className=" text-3xl">{presentQuestion}</span> /{" "}
            {totalQuestion}. {question?.des}
          </label>
          <select
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className=" capitalize bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2 "
          >
            {question?.option?.map((option, i) => (
              <option
                className="py-3 capitalize"
                key={option}
                value={question?.optionValues[i]}
              >
                {option}
              </option>
            ))}
          </select>
          <div className="flex">
            <button
              onClick={() =>
                presentQuestion > 1 && handleDotPress(presentQuestion - 2)
              }
              className={`flex-1  py-2 px-2 mt-4 mr-3 transition-all duration-200 bg-app.green  ${
                presentQuestion === 1
                  ? "cursor-not-allowed text-gray-300 "
                  : " cursor-pointer text-app.yellow"
              } `}
            >
              {"< Previous"}
            </button>
            <button
              onClick={handleButtonPress}
              className="bg-app.green py-2 px-2 mt-4 flex-1 "
            >
              {presentQuestion < totalQuestion ? "Next >" : "Submit"}
            </button>
          </div>
        </div>
      );
    case "text":
      return (
        <div className=" flex flex-col w-full lg:w-3/4 text-app.yellow">
          <label className="my-4">
            <span className=" text-3xl">{presentQuestion}</span> /{" "}
            {totalQuestion}. {question?.des}
          </label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className=" bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2 "
            name="question"
            type="text"
            placeholder="Enter..."
          />
          <div className="flex">
            <button
              onClick={() =>
                presentQuestion > 1 && handleDotPress(presentQuestion - 2)
              }
              className={`flex-1  py-2 px-2 mt-4 mr-3 transition-all duration-200 bg-app.green  ${
                presentQuestion === 1
                  ? "cursor-not-allowed text-gray-300 "
                  : " cursor-pointer text-app.yellow"
              } `}
            >
              {"< Previous"}
            </button>
            <button
              onClick={handleButtonPress}
              className="bg-app.green py-2 px-2 mt-4 flex-1 "
            >
              {presentQuestion < totalQuestion ? "Next >" : "Submit"}
            </button>
          </div>
        </div>
      );
    case "email":
      return (
        <div className=" flex flex-col w-full lg:w-3/4 text-app.yellow">
          <label className="my-4">
            <span className=" text-3xl">{presentQuestion}</span> /{" "}
            {totalQuestion}. {question?.des}
          </label>
          <input
            className=" bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2 "
            name="question"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="email"
            placeholder="Enter..."
          />
          {presentQuestion === totalQuestion && (
            <span className=" flex mt-3">
              <input
                onChange={(e) => setAgreement(e.target.checked)}
                checked={agreement}
                id="agreement"
                name="agreement"
                className=" mr-2 "
                type="checkbox"
              />
              <label for="agreement" className=" text-xs font-light">
                You agree to Terms & Condition of E2F Systems.
              </label>
            </span>
          )}
          <div className="flex">
            <button
              onClick={() =>
                presentQuestion > 1 && handleDotPress(presentQuestion - 2)
              }
              className={`flex-1  py-2 px-2 mt-4 mr-3 transition-all duration-200 bg-app.green  ${
                presentQuestion === 1
                  ? "cursor-not-allowed text-gray-300 "
                  : " cursor-pointer text-app.yellow"
              } `}
            >
              {"< Previous"}
            </button>
            <button
              onClick={handleButtonPress}
              className="bg-app.green py-2 px-2 mt-4 flex-1 "
            >
              {presentQuestion < totalQuestion ? "Next >" : "Submit"}
            </button>
          </div>
        </div>
      );
  }
};

export default Question;
