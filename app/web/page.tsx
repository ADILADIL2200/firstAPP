import Image from "next/image"
import Link from "next/link"
export default function add() {
    return (
        <div className=" bg-slate-900  mb-0 container mt-12 max-w-full h-full text-white">
            <h1 className="mx-auto flex text-center justify-center pt-24 text-2xl text-emerald-400 font-bold mb-24">your road map to the web devlopement in 2024</h1>
            <div>
                <h1 className="text-blue-100 ml-4 md:ml-24 font-serif text-3xl">
                after your decition to continue with web devloppent you need to get started with these steps as a <samp className="text-3xl text-red-300">front end</samp>

                </h1>
                <p className="text-orange-700 ml-8 md:ml-20 text-2xls mt-12 font-bold">
                    learning HTML

                </p>
                <p className="text-blue-100 ml-12 md:ml-24 mt-8 font-serif">
                    It is the language of the structure of the web pages as paragraphes   imaages videos ...<br />
                     it is so easy to learn it is not deserve more than week
                </p>
                
                <p className="text-blue-400 ml-8 md:ml-20 text-2xls mt-12 font-bold">
                    learning CSS 

                </p>
                <p className="text-blue-100 ml-12 md:ml-24 mt-8">
                     it is the language that makes your content atractive by<br/> adding colors animations backgrounds to get the users attention
                </p>
                
                <p className="text-yellow-300 ml-8 md:ml-20 text-2xls mt-12 font-bold">
                    learning JAVASCRIPT

                </p>
                <p className="text-blue-100 ml-12 md:ml-24 mt-8 pb-8">
                    it is the language that draws the fife on your webesites <br/>it makes it atractive and has many roles to say later
                </p>
                     
                <p className="text-blue-100 max-w-80 ml-8 md:ml-20 text-3xl mt-12 font-bold text-fuchsia-900">
                    make your competence adaptive with the market needs

                </p>
                <p className="ml-12 md:ml-24 mt-8 pb-8 text-xl text-blue-100">
                    to improve your skills and make it adaptive with the market needs   in <br/> the <span className="text-red-300"> front end</span>you need to learn these frameworks
                </p>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex flex-col p-3 md:p-8  bg-slate-800 ">
                        <p className="m-8 bg-slate-800 max-w-80 text-blue-100 text-xl text-lefts"> build the most efficien <span className="text-lime-300">UI</span> based on single page application and to know more visit this  <Link className="text-blue-700" href='https://react.dev/'> link</Link></p>
                        <Image className="mt-8" src='/lll.jpeg 'width='500' height='300' alt="ggknkn"></Image>
                    </div>
                    <div className="bg-slate-800 flex flex-col p-3 md:p-8  ">
                        <p className="m-8 text-blue-100 max-w-80" >  build a best web experience that is adaptive<br/> with  <span className="text-green-500"> SEO standrds</span> to know more visit this <Link className="text-blue-700" href='https://nextjs.org/'>link</Link></p>
                        <Image className="mt-8" src='/nnn.jpeg 'width='400' height='280' alt="ggll"></Image>
                    </div>
                    <div className="bg-slate-800 flex flex-col p-3 md:p-8  ">
                        <p className="m-8 text-blue-100 mb-1 max-w-80"> if you have full understending in css you need to learn <br/> <span className="text-green-500">tailwind css</span> framework it is efficient and fast  to know more visit this <Link href='https://tailwindcss.com/'className="text-blue-700">link</Link></p>
                        <Image className="mt-8 " src='/kkk.jpeg 'width='250' height='200' alt="gg"></Image>
                    </div>
            
            
                </div>
                
                <p className="max-w-80 ml-8 md:ml-20 text-3xl mt-12 font-bold text-green-800">
                    if you decided to continue with backend this is your way

                </p>
                
                <p className="ml-12 md:ml-24 mt-8 pb-8 text-xl text-blue-100">
                     to get started with backend it depends on your perfect  language <br/> in herre i will handle just js ,php and  <br/>python  so this is your right way to <span className="text-red-300"> the backend</span>
                </p>
                
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col p-3 md:p-8  bg-slate-800 ">
                        <p className="m-8 bg-slate-800 max-w-80 text-blue-100 ">  if you are famillar with js <span className="text-lime-300">node js </span>  is your first  choice  <br/>to build modern web backend aplication to know more visit this link <Link className="text-blue-700" href='https://nodejs.org/'> link</Link></p>
                        <Image className="mt-8" src='/node.jpeg 'width='220' height='300' alt="llgg"></Image>
                    </div>
                    <div className="bg-slate-800 flex flex-col p-3 md:p-8  ">
                        <p className="m-8 text-blue-100 max-w-80"> if you are famillar with python  <span className="text-green-500"> django</span>is the best choice for the backend devloper  to know more visit this <Link className="text-blue-700" href='https://www.djangoproject.com/'>link</Link></p>
                        <Image className="mt-8" src='/django.jpeg 'width='300' height='380' alt="gg"></Image>
                    </div>
                    <div className="bg-slate-800 flex flex-col p-3 md:p-8  ">
                        <p className="m-8 text-blue-100 mb-1 max-w-80"> if you came from php  and you are interested <br/>of being a backeend devloper <span className="text-green-500">laravel </span> is your first choice to know more visit this <Link href='https://laravel.com/'className="text-blue-700">link</Link></p>
                        <Image className="mt-8 " src='/images.jpeg'width='300' height='300' alt="gg"></Image> 
                    </div>
            
            
                </div>
                     
              
                
            
            </div>
            
        </div>
    )
}