
const Question = ({ question,type,handleQuestion, handleSubmit, handleNext}) => {

    return (
        <div className=" flex flex-col w-full lg:w-3/4 text-app.yellow">
            <label className="my-4">{question}</label>
            <input className=" bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2 " name="question" type="text" placeholder = "Enter..." />
            <button className="bg-app.green py-2 px-2 mt-4 ">Next</button>
        </div>
    )
}

export default Question