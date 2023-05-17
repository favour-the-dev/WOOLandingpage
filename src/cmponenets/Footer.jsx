const Footer = ()=>{
    return(
        <>
            <div className="h-fit p-8 w-full text-gray-900">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col items-center justify-between">
                    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start  py-8 my-2 border-b-2 justify-between">
                        <div className="flex flex-wrap justify-around lg:justify-between w-full lg:w-1/2 mx-auto">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold uppercase my-4">Who We are</h4>
                                <a href="/" className="text-sm text-gray-600">About</a>
                                <a href="/" className="text-sm text-gray-600">Team</a>
                                <a href="/" className="text-sm text-gray-600">Work with us</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold uppercase my-4">woocommerce</h4>
                                <a href="/" className="text-sm text-gray-600">Features</a>
                                <a href="/" className="text-sm text-gray-600">Payments</a>
                                <a href="/" className="text-sm text-gray-600">Marketing</a>
                                <a href="/" className="text-sm text-gray-600">Shipping</a>
                                <a href="/" className="text-sm text-gray-600">Extension store</a>
                                <a href="/" className="text-sm text-gray-600">eCommerce blog</a>
                                <a href="/" className="text-sm text-gray-600">Devlopement blog</a>
                                <a href="/" className="text-sm text-gray-600">Ideas board</a>
                                <a href="/" className="text-sm text-gray-600">Mobile App</a>
                                <a href="/" className="text-sm text-gray-600">Community</a>
                                <a href="/" className="text-sm text-gray-600">Style guide</a>
                                <a href="/" className="text-sm text-gray-600">Email newsletter</a>
                            </div>
                            <div className="flex flex-col gap-2 w-2/3 md:w-fit lg:ml-0">
                                <h4 className="font-bold uppercase my-4">other products</h4>
                                <a href="/" className="text-sm text-gray-600">Storefront</a>
                                <a href="/" className="text-sm text-gray-600">Wooslider</a>
                                <a href="/" className="text-sm text-gray-600">Sensei</a>
                                <a href="/" className="text-sm text-gray-600">sensei extensions</a>
                            </div>
                        </div>
                        <div className="flex justify-around w-full lg:w-1/2 mx-auto">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold uppercase my-4">support</h4>
                                <a href="/" className="text-sm text-gray-600">Docuumentation</a>
                                <a href="/" className="text-sm text-gray-600">Customizations</a>
                                <a href="/" className="text-sm text-gray-600">Support Policy</a>
                                <a href="/" className="text-sm text-gray-600">Contaxct</a>
                                <a href="/" className="text-sm text-gray-600">COVID-19 Resources</a>
                                <a href="/" className="text-sm text-gray-600">Privacy Note for</a>
                                <a href="/" className="text-sm text-gray-600">California Users</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold uppercase my-4">we recommend</h4>
                                <a href="/" className="text-sm text-gray-600">WooExperts</a>
                                <a href="/" className="text-sm text-gray-600">Hosting Solutions</a>
                                <a href="/" className="text-sm text-gray-600">Pre-sales FAQ</a>
                                <a href="/" className="text-sm text-gray-600">Success Stores</a>
                                <a href="/" className="text-sm text-gray-600">Design Feedback Group</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-center gap-4 justify-between">
                        <div className="flex gap-2 text-custom text-xl">
                         <i className="fa-brands fa-twitter"></i>
                         <i className="fa-brands fa-facebook-f"></i>
                         <i className="fa-brands fa-instagram"></i>
                         <i className="fa-solid fa-wifi"></i>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="uppercase font-bold">copyright Woocommerce 2023</h4>
                            <h4 className="uppercase font-bold">Terms and conditions pivacy policy</h4>
                        </div>
                        <div>
                            <h4 className="font-semibold uppercase text-2xl">Automatic</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;