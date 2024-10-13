import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center ">
      <div className="relative">
        <div className="relative top-[-80px]">
          <img src="/heroImage.jpg" className="hero" />
          <div className="overlay"></div>
        </div>
        <div className="relative z-20 text-white">
          <h1 className=" uppercase mt-20 pt-10 font-bold">
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

      <div className="mt-24">
        <h1 className="font-bold text-2xl">Fill in correct details</h1>
        <form className="mt-3">
          <div className="text-start ml-9">
            <label htmlFor="fullname" className=" pl-2 font-semibold">
              Full name:
            </label>
            <input
              type="text"
              id="name"
              className="border-2 border-black w-[300px] rounded-lg"
            />
          </div>

          <div className="mt-3 text-start ml-9">
            <label htmlFor="email" className=" pl-2 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-black w-[300px] rounded-lg"
            />
          </div>

          <div className="mt-3 text-start ml-9">
            <label htmlFor="phone-number" className=" pl-2 font-semibold">
              Phone number:
            </label>
            <input
              type="number"
              id="phone-number"
              className="border-2 border-black w-[300px] rounded-lg"
            />
          </div>

          <div className="mt-3 text-start ml-9">
            <label htmlFor="fullname" className="text-start pl-2 font-semibold">
              Name of course:
            </label>
            <input
              type="text"
              id="name"
              className="border-2 border-black w-[300px] rounded-lg"
            />
          </div>
          <button className="mt-4 border-2 border-black rounded-md w-[200px] py-1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
