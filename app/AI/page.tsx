export default function AI() {
    return (
        <div className=" bg-slate-900 container  w-full  mt-14 ml-0 md:ml-0 flex flex-col z-auto">
            <p className="max-w-80 p-2 text-center text-3xl text-amber-800">YOUR AI ROAD MAP</p>
            <p className="text-center text-xl bg-slate-900 text-yellow-100">after learnig the basics of programing and you a desire to get started <br/>with AI thre are a lot of
                modules that wel help  you
                draw yiur dream,i will<br/> sppose that you work with python
                so all given modules are python one
            </p>
            <div className="bg-slate-900 text-white mt-10">
            
            <p className="bg-slate-950 text-green-200 mt-14 m-7 text-center h-14 text-2xl flex items-center justify-center"  > PyTorch</p>
            <p className="text-center mb-9 text-2xl">Developed by Facebooks AI Research lab (FAIR),<br/> PyTorch is known for its flexibility and efficiency<br/> in deep learning<br/> tasks. It allows dynamic computation graphs, making it easier to debug models and experiment with<br/> different architectures.</p>

            </div>
            
            <div className="bg-slate-900 text-white mt-10">
            
            <p className="bg-slate-950 text-green-200 text-2xl mt-14 m-7 text-center h-14 flex items-center justify-center"  > TensorFlow</p>
            <p className="text-center mb-9 text-2xl">Developed by Google Brain,<br/> TensorFlow is widely used for building and training<br/> machine learning models. It offers high performance through its computation graph <br/>architecture and supports both CPU and GPU computation for faster processing.</p>

            </div>
            <div className="bg-slate-900 text-white mt-10 p-3">
            
            <p className="bg-slate-950 text-green-200 mt-14 m-7 text-center h-14 flex items-center justify-center text-2xl"  > Scikit-learn</p>
                <p className="text-center mb-9 text-2xl">
                 This is a popular machine learning library for classical<br/> machine learning algorithms<br/> such as classification, regression, clustering, and dimensionality<br/> reduction. It is built on top of NumPy, SciPy, and matplotlib,<br/> making it efficient for smaller datasets and common tasks.
            </p>

            </div>
            
            <div className="bg-slate-900 text-white mt-10 p-3">
            
            <p className="bg-slate-950 text-green-200 mt-14 m-7 text-2xl text-center h-14 flex items-center justify-center"  >Microsoft Cognitive Toolkit (CNTK):
</p>
                <p className="text-2xl text-center mb-9 ">
                CNTK is a deep learning framework developed by Microsoft. It supports<br/> training deep learning models across multiple GPUs and servers, and is known for its efficient <br/> implementations of convolutional neural networks (CNNs) and recurrent neural networks (RNNs).
            </p>
            </div>

        </div>
    )
}