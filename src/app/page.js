import Image from 'next/image'
import RootLayout from './layout'
import QuestionNumber from '@/components/questions/questionNumber'
import Question from '@/components/questions/question'
import QuestionDots from '@/components/questions/questionDots'
import Navbar from '@/components/navbar/navbar'
import Animation from '@/components/lottieAnimation/animation'
import NewsLetterInput from '@/components/newsletter/newsletterInput'

export default function Home() {
  return (
    <RootLayout>
       <div className=' bg-app.darkGreen h-screen w-screen'>
    <div className="h-full">
      <Navbar />
      <div className='h-full flex'>
      <div className='h-full flex-1 flex flex-col justify-center items-center container'>
        <QuestionNumber totalQuestion={5} presentQuestion={1} />
        <Question question={"Lorem epsum....."} />
        <QuestionDots totalQuestion={5} presentQuestion={3} />
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
