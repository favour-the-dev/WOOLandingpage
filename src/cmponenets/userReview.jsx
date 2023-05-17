const Users = ()=>{

    const url = 'https://i.pravatar.cc/150?img=10'
    const url2 = 'https://i.pravatar.cc/150?img=11'
    return(
        <>
            <div className="bg-text-custom w-full h-fit lg:h-100dvh  p-4">
                <div className="w-full md:w-2/3 lg:w-2/3 mx-auto flex flex-col gap-6 items-center justify-between h-full">
                    <div className="text-gray-100 text-center">
                        <h2 className="text-3xl py-4 font-semibold">Trusted by Agencies & Store Owners</h2>
                        <h3 className="capitalize font-light">from startups to espablished brands youlll be in good hands</h3>
                    </div>
                    <div className="text-gray-100 flex flex-col lg:flex-row items-center gap-4">
                        <p className=" text-xsm lg:text-lg italic">&quot;No other eCommerce platform allows people to start for free and grow their stores. More importantly WooCommerce doesnt charge you a portion of your Profits grow.&quot;-<span className="font-bold Uppercase not-italic">Felicia Sanchez/</span><span className="font-semibold not-italic">FeliciaSanchez.com</span></p>
                        <img src={url} alt="" className="rounded-full w-24 lg:w-28 border-4 border-gray-100"/>
                    </div>
                    <div className="text-gray-200 flex flex-col lg:flex-row items-center gap-4">
                        <p className='text-xsm lg:text-lg italic order-two'>&quot;WooCommerces greatest strength is its extensibility. there is very little I cant build with WooCommerce. Given enough time and resources WooCommerce can be finely tailoured to even your stores most niche feature.&quot;-<span className="font-bold Uppercase not-italic">Jack Finnings/</span><span className="font-semibold not-italic">JackFinn.com</span></p>
                        <img src={url2} alt="" className="rounded-full order-one w-24 lg:w-28 border-4 border-gray-100"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users