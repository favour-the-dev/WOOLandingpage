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
                        <p className=" text-xsm lg:text-lg italic">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, reiciendis veritatis voluptatem corrupti officiis modi animi iure laborum, aut dolores quia repellat laudantium cupiditate dignissimos, cumque esse nostrum ad quod nobis porro deleniti! Nisi quam similique voluptatum placeat magni, ipsa omnis pariatur eligendi tempora quasi temporibus, non repellat odio ducimus&quot; <span className="font-bold Uppercase not-italic">Full Name/</span><span className="font-semibold not-italic">Name.com</span></p>
                        <img src={url} alt="" className="rounded-full w-24"/>
                    </div>
                    <div className="text-gray-200 flex flex-col lg:flex-row items-center gap-4">
                        <p className='text-xsm lg:text-lg italic order-two'>&quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem omnis repudiandae quibusdam similique, vitae odit error maiores, quas magni culpa quis esse alias consequuntur labore molestias nam, necessitatibus minima? Ipsa, repellat mollitia unde quae quo reprehenderit eaque facere soluta saepe, hic omnis doloribus, maiores officiis suscipit. Minima autem blanditiis voluptate?&quot; <span className="font-bold Uppercase not-italic">Full Name/</span><span className="font-semibold not-italic">Name.com</span></p>
                        <img src={url2} alt="" className="rounded-full order-one w-24"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users