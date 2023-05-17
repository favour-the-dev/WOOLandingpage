
export default function Support(){
    const img1 = 'https://i.pravatar.cc/150?img=1';
    const img2 = 'https://i.pravatar.cc/150?img=2';
    const img3 = 'https://i.pravatar.cc/150?img=3';
    const img4 = 'https://i.pravatar.cc/150?img=4';
    const img5 = 'https://i.pravatar.cc/150?img=5';
    const img6 = 'https://i.pravatar.cc/150?img=6';
    const img7 = 'https://i.pravatar.cc/150?img=7';

    const imgs = [img1, img2, img3, img4, img5, img6, img7]
    return(
        <>
            <div className="bg-gray-100 h-small-cont mt-8">
                <div className="h-full flex flex-col items-center justify-around lg:justify-between gap-4 text-center w-full  lg:w-2/3 mx-auto">
                    <div>
                        <h2 className="text-3xl text-gray-900 p-2 mt-4 font-bold">Supported by real people</h2>
                        <h4 className=" text-md lg:text-sm text-gray-950 p-2 font-semibold">Our Team of Engineers work remotely from 58 countries providing customer support acrross multiple zones.</h4>
                    </div>

                    <div className="flex flex-wrap lg:gap-0 lg:flex-row ">
                        {imgs.map((img, index)=> <img src={img} key={index} className=" w-20 lg:w-24 xl:w-28 "></img>)}
                    </div>
                </div>
            </div>
        </>
    );
}