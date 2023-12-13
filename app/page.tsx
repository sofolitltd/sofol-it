import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      {/* div 1 */}
      <div className=" flex mx-auto w-full px-6 lg:px-20 py-2">
        <div className="border py-20 w-1/2">
          <h1 className=" text-4xl font-bold ">
            {" "}
            Build and Grow with Sofol IT
          </h1>
          <p className=" mt-4">Try some thing new to be a successful one</p>
          <button className=" px-6 py-2 bg-purple-600 text-white rounded-md mt-8">
            Get Started
          </button>
        </div>
        <div className="border py-8 w-1/2 "></div>
      </div>

      {/* div 2 */}
      <div className=" mx-auto w-full px-6 lg:px-20 py-2 ">
        <div className="border py-20 ">
          <p className=" mt-6">service we provide</p>
          <h1 className=" text-4xl font-bold mt-3">Services</h1>

          {/* grid */}
          <div className=" mt-8 gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            {/* 1 */}
            <div className=" w-full border rounded-lg px-4 py-8 items-start hover:bg-gray-50 hover:shadow-md">
              <div className=" h-14 w-14 border rounded-full mt-2"></div>
              <p className=" mt-6 text-2xl">
                UI/UX <br />
                Design
              </p>
            </div>

            {/* 2 */}
            <div className=" w-full border rounded-lg px-4 py-8 items-start hover:bg-gray-50 hover:shadow-md">
              <div className=" h-14 w-14 border rounded-full mt-2"></div>
              <p className=" mt-4 text-2xl">
                App <br />
                Developmet
              </p>
            </div>

            {/* 3 */}
            <div className=" w-full border rounded-lg px-4 py-8 items-start hover:bg-gray-50 hover:shadow-md">
              <div className=" h-14 w-14 border rounded-full mt-2"></div>
              <p className=" mt-4 text-2xl">
                Digital <br />
                Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
