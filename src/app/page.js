"use client"
import { useMutation, gql } from "@apollo/client";
import RootLayout from './layout'
import QuestionNumber from '@/components/questions/questionNumber'
import Question from '@/components/questions/question'
import QuestionDots from '@/components/questions/questionDots'
import Navbar from '@/components/navbar/navbar'
import Animation from '@/components/lottieAnimation/animation'
import NewsLetterInput from '@/components/newsletter/newsletterInput'
import questionList from "@/data/questionList"
import { useState } from 'react'

const ADD_USERINFROMATION = gql`
mutation addUserInformation( $agreementAccepted : Boolean!, $emailAdress: String!, $username: String!, $userOrganizationName: String! ) {
  createUserInformation(
  data: {agreementAccepted: false, emailAdress: "", userName: "", userOrganizationName: ""}
) {
  id
}
}
`;

export default function Home() {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questionList["0"]);
  const [stream, setStream] = useState(null);
  const [form, setForm] = useState({
  })

  const handleNextQuestion = (currentValue) => {
    if (currentQuestionNo === 0) {
      setStream("gas");
      // setStream(currentValue?.toLowerCase());
    }

    if (currentQuestionNo < Object?.keys(questionList)?.length - 1) {
      setCurrentQuestion(questionList[String(currentQuestionNo + 1)]);
      setCurrentQuestionNo(currentQuestionNo + 1);
    }
  }

  const handleDotPress = (value) => {
    setCurrentQuestion(questionList[String(value)]);
    setCurrentQuestionNo(value);
  }


  return (
    <RootLayout>
      <div className=' bg-app.darkGreen h-screen w-screen'>
        <div className="h-full">
          <Navbar />
          <div className='h-full flex'>
            <div className='h-full flex-1 flex flex-col justify-center items-center container'>
              <QuestionNumber totalQuestion={Object.keys(questionList).length} presentQuestion={currentQuestionNo + 1} />
              <Question
                question={currentQuestion}
                handleQuestion={handleNextQuestion}
                totalQuestion={Object.keys(questionList).length}
                presentQuestion={currentQuestionNo + 1} />
              <QuestionDots handleDotPress={handleDotPress} totalQuestion={Object.keys(questionList).length} presentQuestion={currentQuestionNo} />
            </div>
            <div className=' hidden  bg-app.green flex-1 lg:flex lg:flex-col items-center lg:justify-center  container '>
              <h1 className='text-app.yellow text-xl mb-6'>Funding for Energy Projects (Business)</h1>
              <Animation />
              <NewsLetterInput />
            </div>
          </div>

        </div>
      </div>
    </RootLayout>
  )
}
