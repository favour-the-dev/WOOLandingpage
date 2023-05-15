
const Display = (props)=>{
    return(
        <>
            <div className="flex flex-col lg:flex-row items-center gap-8 p-4 w-full mt-4">
                <div  className={`w-full md:w-2/3 lg:w-1/2 flex flex-col gap-2 ${props.order1}`} id="text-box">
                    <h2 className="text-2xl font-bold text-custom">{props.title}</h2>
                    <p className="text-md text-gray-600">{props.body}</p>
                    <button className="text-gray-100 w-2/3 md:w-1/2 rounded-full p-2 bg-text-custom">{props.btntext}</button>
                </div>
                <div className={`w-full md:w-2/3 lg:w-1/2 ${props.order2}`} id="image-box">
                    <img src={props.ImageSrc} alt="" />
                </div>
            </div>
        </>
    )
}

export default Display