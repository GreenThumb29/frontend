
const QuestionNumbers = ({totalQuestion, presentQuestion}) => {
    return (
        <span className="flex flex-col justify-center items-center border-app.yellow rounded-full p-8 text-app.yellow border-2 border-spacing-2 h-32 w-32">
            <span>Question</span>
            <div className=" text-3xl tracking-wider">
            {presentQuestion} 
            <span>/</span>
            {totalQuestion}
            </div>
        </span>
    )
}

export default QuestionNumbers;