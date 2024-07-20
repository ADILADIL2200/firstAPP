import Image from "next/image"
  import Link from "next/link"
export default function Setion() {
    return ( 
        <div className="container bg-slate-600 md:bg-white  text-yellow-50 md:text-black mx-auto w-full flex flex-col  in the world of programingmd:flex-col mt-0">
            <div>
                <p className="text-center text-2xl m-12 text-green-500">discover our content</p>
                <p className=" text-xl m-10 font-serif mt-10s text-yellow-100 md:text-black">by this website TK_2000 intent to be a guide that guives you a clear overview
                    in the world of programing after getting the basics of coding
                    by explaining the road map of each classe of these classes :
                </p>

            </div>
            <div className="hover:bg-slate-950 hover:text-white shadow-lg md: basis-1/3 mb-11  mr-16 ml-10 flex flex-col items-center" >
                <Link href='/'>
                <Image className="w-full md:h-60" alt="cc" src='/aaa.jpeg' width='400' height='300'></Image>
                <h2 className="text-3xl text-pink-900 text-center" > AI</h2>
                <p className=" md:w-1/2 p-2 hover:bg-slate-950 text-center font-extralight"> discover how to learn the AI in 2024 by telling you  the framework that you need to learn, some helpful
                    websites and the most effecient modules
                </p>
                </Link>
                
            </div>
            <div className="hover:bg-slate-950 md:hover:text-white md::basis-1/3 mb-11 mr-16 ml-10 flex shadow-lg p-2 flex-col items-center"> 
                <Image className="w-full md:h-60" alt="cc" src='/ccc.jpeg' width='400' height='300'></Image>
                <h2 className="text-3xl text-pink-900"> WEB</h2>
                <p className="text-center md:w-1/2"> know the most effecient tools to build web apps in 2024 using diffrent programing languages</p>

            </div>
            <div className="hover:bg-slate-950 md:hover:text-white md: basis-1/3 mb-11 mr-16 ml-10 flex shadow-lg p-2 flex-col items-center">
                <Image className="w-full md:h-60" alt="" src='/bbb.jpeg' width='400' height='200'></Image>
                <h2 className="text-3xl text-pink-900">WEB</h2>
                <p className="text-center md:w-1/2"> discover your road map for learnig mobile devloppment  concerning  frameworks specified for that regardeless of programing language</p>
            </div>
            <p className="text-center text-2xl m-12 text-indigo-700 font-thin">it is recomanded to do after getting the basics of programing</p>
            <p className="hover:bg-slate-950 text-xl m-5 font-serif mt-10s text-gray-950 hover:text-white md:text-black  font-thin p-2">
                after getting the basics peaple complain of not able to 
                make something usefull <br/>
                the simple answer is  you need to surch module and frameworks that<br/>
                are specified to what you need to do instead of missing times in thr basics
            </p>

            
        </div>
    )
}