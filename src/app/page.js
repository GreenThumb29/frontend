"use client";
import { useMutation, gql } from "@apollo/client";
import RootLayout from "./layout";
import QuestionNumber from "@/components/questions/questionNumber";
import Question from "@/components/questions/question";
import QuestionDots from "@/components/questions/questionDots";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Animation from "@/components/lottieAnimation/animation";
import NewsLetterInput from "@/components/newsletter/newsletterInput";
import questionList from "@/data/questionList";
import { useEffect, useRef, useState } from "react";
import ProgramList from "@/components/results/programList";
import star from "../../public/star.png";
import Footer from "@/components/footer/footer";

const ADD_USERINFROMATION = gql`
  mutation addUserInformation(
    $agreementAccepted: Boolean!
    $emailAdress: String!
    $username: String!
    $userOrganizationName: String!
  ) {
    createUserInformation(
      data: {
        agreementAccepted: $agreementAccepted
        emailAdress: $emailAdress
        userName: $username
        userOrganizationName: $userOrganizationName
      }
    ) {
      id
    }
  }
`;

export default function Home() {
  const [addInformation] = useMutation(ADD_USERINFROMATION);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questionList["0"]);
  const [stream, setStream] = useState(null);
  const [form, setForm] = useState({});
  const [query, setQuery] = useState(null);
  const resultSectionRef = useRef(null);

  const handleNextQuestion = async (currentValue, updatedForm) => {
    if (currentValue?.FundingCategory !== undefined) {
      setStream(currentValue?.FundingCategory);
      // setStream(currentValue?.toLowerCase());
    }
    // storing the {key: "key" value: "value"} in the form state
    setForm(updatedForm);

    // updating the question number
    if (currentQuestionNo < Object?.keys(questionList)?.length - 1) {
      setCurrentQuestion(questionList[String(currentQuestionNo + 1)]);
      setCurrentQuestionNo(currentQuestionNo + 1);
    }
  };

  const handleSubmmision = async (agreement, updatedForm) => {
    if (agreement) {
      // sending usr information to cms
      await addInformation({
        variables: {
          agreementAccepted: agreement,
          emailAdress: updatedForm?.userEmail,
          userOrganizationName: updatedForm?.orgName,
          username: updatedForm?.userName,
        },
      });
    }

    // formatting query

    const formForQuery = {
      ...updatedForm,
      orgName: undefined,
      userName: undefined,
      userEmail: undefined,
    };

    const formattedQuery = gql`
      query MyQuery {
        programs {
          title
          url
          eligibilityCriteria {
            programCategory
            extraEligibilities
          }
          description
          fundingScemeType
        }
      }
    `;
    setQuery(formattedQuery);

    resultSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDotPress = (value) => {
    setCurrentQuestion(questionList[String(value)]);
    setCurrentQuestionNo(value);
  };

  // const createQuery = () => {};

  return (
    <RootLayout>
      <div className=" bg-app.darkGreen w-screenr">
        <div className="h-full">
          <Navbar />
          <div className="h-full lg:flex">
            {/* Left Side */}
            <div className="min-h-screen h-full mt-20 md:mt-0 lg:flex-1 flex flex-col md:justify-center items-center container lg:sticky top-0">
              <div className="mb-9 w-full lg:w-3/4">
                <p className="text-left w-full text-app.yellow font-semibold text-lg md:text-2xl tracking-wider">
                  The initiative by E2fSystems{" "}
                </p>
              </div>
              <div className=" flex items-start lg:w-3/4 border border-dotted p-4 border-app.yellow">
                <div className=" mr-3">
                  <Image
                    src={star}
                    alt="Logo"
                    className=" w-12 animate-pulse"
                  />
                </div>
                <p className=" text-justify text-yellow-50 text-xs leading-relaxed tracking-wider font-light">
                  Welcome to Green Thumb project. It`&apos;`s an initiative by
                  e2fSystems, aimed at helping companies of all sizes find
                  funding for their energy efficiency and sustainability
                  projects.
                </p>
              </div>
              {/* <QuestionNumber
                totalQuestion={Object.keys(questionList).length}
                presentQuestion={currentQuestionNo + 1}
              /> */}
              <Question
                question={currentQuestion}
                handleQuestion={handleNextQuestion}
                totalQuestion={Object.keys(questionList).length}
                presentQuestion={currentQuestionNo + 1}
                handleSubmit={handleSubmmision}
                handleDotPress={handleDotPress}
                form={form}
              />
              <QuestionDots
                handleDotPress={handleDotPress}
                totalQuestion={Object.keys(questionList).length}
                presentQuestion={currentQuestionNo}
              />
            </div>

            {/* right */}
            <div
              ref={resultSectionRef}
              id="result"
              className=" min-h-screen justify-center bg-app.green flex-1 flex flex-col items-center lg:justify-center  container "
            >
              {query === null ? (
                <>
                  <h1 className="text-app.yellow mb-6 text-center text-base lg:text-xl">
                    Funding for Energy Projects (Business)
                  </h1>
                  <Animation />
                  <NewsLetterInput />
                </>
              ) : (
                <ProgramList gqlQuery={query} />
              )}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </RootLayout>
  );
}
