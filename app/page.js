'use client'

import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {

  const nextPage = () => {
    
  }
  return (
    <div className="text-center ">
      <div className="relative">
        <div className="relative top-[-80px] md:w-[768px] lg:w-[1024px]">
          <img
            src="/heroImage.jpg"
            className="hero md:w-[768px] lg:w-[1024px]"
          />
          <div className="overlay md:w-[768px] lg:w-[1024px]"></div>
        </div>
        <div className="relative z-20 ml-3 text-white">
          <h1 className=" uppercase mt-20 pt-10 font-bold md:text-center">
            Welcome To Your Exam
          </h1>
          <p className="text-start px-2">
            Please read your answers through before clicking the submit button.
            You can only submit the exam once. Any other submissions will be
            disregarded. <br />
            Please give your correct contact details as indicated in your
            registration form.
          </p>
        </div>
      </div>

      <div className="big-form-div mt-24 mb-56 md:mt-36 md:h-[60vh] lg:h-[50vh]">
        <div className="sec-form-div bg-gray-200 w-[330px]  ml-8 pl-4 rounded-lg shadow-xl  py-2 md:w-[600px] md:ml-20 lg:ml-48">
          <h1 className="font-bold text-2xl md:ml-40">
            Fill in correct details
          </h1>
          <form className="mt-3 md:ml-10">
            <div className="text-start ">
              <label htmlFor="fullname" className=" pl-2 font-semibold">
                Full name:
              </label>
              <input
                type="text"
                id="name"
                className="border-2 border-black w-[300px] rounded-lg pl-1 md:w-[380px]"
              />
            </div>

            <div className="mt-3 text-start flex flex-col md:flex-row">
              <label htmlFor="email" className=" pl-2 font-semibold ">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="border-2 border-black w-[300px] rounded-lg md:w-[410px]"
              />
            </div>

            <div className="mt-3 text-start ">
              <label htmlFor="phone-number" className=" pl-2 font-semibold">
                Phone number:
              </label>
              <input
                type="number"
                id="phone-number"
                className="border-2 border-black w-[300px] rounded-lg md:w-[340px]"
              />
            </div>

            <div className="mt-3 text-start ">
              <label
                htmlFor="fullname"
                className="text-start pl-2 font-semibold"
              >
                Name of course:
              </label>
              <input
                type="text"
                id="name"
                className="border-2 border-black w-[300px] rounded-lg md:w-[330px]"
              />
            </div>
            {/* <Link href={"/questions"}>
              <button
                onClick={nextPage}
                className="button mt-4 border-2 border-black rounded-md w-[200px] ml-12 py-1 md:ml-32"
              >
                Submit
              </button>
            </Link> */}
          </form>
        </div>
      </div>

      <div className="overall mt-10 ml-2">
        <p className="font-semibold md:text-3xl">
          Please read your answers through before clicking the submit button.
        </p>

        <div className="question mt-10">
          <h1 className="font-bold uppercase text-center underline md:text-3xl">
            questions
          </h1>
          <div className="py-6 question-div md:ml-20 lg:ml-44 xl:ml-80">
            <div className="">
              <Card>
                <h1 className="font-bold pl-2">
                  1. Who is the current General Overseer of the RCCG?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  2. List three of the promises of God concerning RCCG.
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  3a. For whom is the worker in this mission working for?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">3b. Who rewards the worker?</h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  3c. Why do you want to be a worker?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  support this answer above with a scripture.
                </h1>
                <textarea type="text" className="qes-input h-16 pb-3 " />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  4. Mention the major department of service in this mission.
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  5. List ten points that a worker is supposed to pray about
                  regularly.
                </h1>
                <textarea type="text" className="qes-input h-28 pb-12 px-1" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  6. List four financial responsibilities of a worker.
                </h1>
                <textarea type="text" className="qes-input h-24 pb-12 px-1" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  7a. What is the expectation of the worker towards soul
                  winning?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  7b. List two effective ways of "evangelism and follow up".
                </h1>
                <textarea type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  8. List five qualifications of a worker?
                </h1>
                <textarea type="text" className="qes-input h-20" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  9. List four ways by which it can be known that a worker is
                  totally submissive to the constituted authorities of the
                  mission.
                </h1>
                <textarea type="text" className="qes-input h-24" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  10a. When there is a doubt about the correct way of dressing,
                  to whom should the worker give the benfit of doubt?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  10b. How late is the worker allowed to come for meeting?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  11a. What is the basis for discipline a worker? Quote with a
                  scripture reference.
                </h1>
                <textarea type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  11b. During the period of discipline, what is expected of rhe
                  worker?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  12a. Which categories of people are lower than the worker in
                  the hierarchy of the RCCG?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  13. Why did jesus decide to choose the twelve?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  14. List twelve disciples of the Lord Jesus Christ.
                </h1>
                <textarea type="text" className="qes-input h-28" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  15. Who did Jesus Christ refer to as son of perdition?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">16. Write Hebrews 13:8</h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">17. State Acts 1:8</h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  18. who was the king who led Isreal into victory with praise?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  19. What is the difference between tithes and offering?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  20. Give 3 responsibilities of an Usher.
                </h1>
                <textarea type="text" className="qes-input h-16" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  21. Give 2 function of the technical department.
                </h1>
                <textarea type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  22. What does Matthew 28:18-20 say?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  23. What is the theme of the Church for the year 2012. Which
                  verse in the book of Psalm is it taken from?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  24. What is the theme of the youth service this month?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  25. What is the name of the pastor of RCCG fountain of God's
                  Glory?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  26. What is the name of the founder of the RCCG?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  27. Mention 3 units you will like to function in the church
                </h1>
                <textarea type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">28. What does holiness mean?</h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-3 md:mt-6">
              <Card>
                <h1 className="font-bold pl-2">
                  29. What does holy communion signifies?
                </h1>
                <input type="text" className="qes-input" />
              </Card>
            </div>

            <div className="mt-10 text-center mb-28 ">
              <button className="submit text-xl border-2 px-6 py-1 rounded-md font-bold text-white bg-gray-200 border-white shadow-lg inset-2 xl:px-12 xl:ml-[-350px]">
                Sumbit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
