
const Question = ({ question, handleQuestion, presentQuestion, totalQuestion }) => {

    switch (question?.inputType) {
        case "dropDown": return (
            <div className=" flex flex-col w-full lg:w-3/4 text-app.yellow">
                <label className="my-4">{question?.des}</label>
                <select className=" capitalize bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2 ">
                    {question?.option?.map((option, i) => (
                        <option className="py-3 capitalize" key={option} value={option}>{option}</option>
                    ))}
                </select>

                <button onClick={handleQuestion} className="bg-app.green py-2 px-2 mt-4 ">{presentQuestion < totalQuestion ? "Next" : "Submit"}</button>
            </div>
        );
        case "text": return (
            <div className=" flex flex-col w-full lg:w-3/4 text-app.yellow">
                <label className="my-4">{question?.des}</label>
                <input className=" bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2 " name="question" type="text" placeholder="Enter..." />
                <button onClick={handleQuestion} className="bg-app.green py-2 px-2 mt-4 ">{presentQuestion < totalQuestion ? "Next" : "Submit"}</button>
            </div>
        );
        case "email": return (<div className=" flex flex-col w-full lg:w-3/4 text-app.yellow">
            <label className="my-4">{question?.des}</label>
            <input className=" bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2 " name="question" type="email" placeholder="Enter..." />
            {presentQuestion === totalQuestion && <span className=" flex mt-3">
                <input id="agreement" name="agreement" className=" mr-2 " type="checkbox" />
                <label for="agreement" className=" text-xs font-light">You agree to Terms & Condition of e2fSystems.</label>
            </span>}
            <button onClick={handleQuestion} className="bg-app.green py-2 px-2 mt-4 ">{presentQuestion < totalQuestion ? "Next" : "Submit"}</button>
        </div>)

    }
}

export default Question