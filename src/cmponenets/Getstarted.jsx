
export default function Getstarted(){
    return(
        <>
            <div className="bg-text-custom h-small w-full flex flex-col items-center justify-center p-3 md:p-0">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between w-full md:w-2/3">
                    <div className="text-gray-100 text-xl">
                        <h2>WooCommerce - the <span className="font-bold">most customizable eCommerce</span></h2>
                        <h3><span className="font-bold">platform</span> for building <span className="font-bold">your online buisness.</span></h3>
                    </div>
                    <button className="bg-transparent border-2 border-gray-100 rounded-full p-2 text-sm text-gray-100 uppercase w-2/3 lg:w-1/6">Get started</button>
                </div>
            </div>
        </>
    );
}