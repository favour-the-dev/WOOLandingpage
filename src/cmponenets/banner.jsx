

export default function Banner(){
    return(
        <>
            <div className="h-small bg-gray-100 w-full flex flex-col items-center justify-center">
                <div className="w-full md:w-2/3 mx-auto flex flex-col items-center justify-center gap-8 md:gap-4 lg:flex-row md:justify-between">
                    <div className="text-xl">
                    <span className="text-custom text-3xl"><i className="fa-solid fa-circle-check"></i></span>  
                     30 day <span className="text-custom font-semibold">money back guarantee</span></div>
                    <div className="text-xl"><span className="text-custom text-3xl"><i className="fa-solid fa-gear"></i></span> <span className="text-custom font-semibold">support</span> teams around the</div>
                    <div className="text-xl"><span className="text-custom text-3xl"><i className="fa-solid fa-lock"></i></span> <span className="text-custom font-semibold">Safe & secure</span> online payment</div>
                </div>
            </div>
        </>
    );
}