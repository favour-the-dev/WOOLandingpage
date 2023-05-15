import Display from "./display";

export default function Features (props){
    return(
        <>
            <div className="h-100dvh w-full lg:w-2/3 gap-4 p-4 md:p-2 lg:p-12 mx-auto flex flex-col items-center justify-center">
                <Display 
                    title = {props.title}
                    body = {props.body}
                    btntext = {props.btntext}
                    ImageSrc = {props.ImageSrc}
                    order1 = {props.order1}
                    order2 = {props.order2}
                />
                <Display 
                    title = {props.title2}
                    body = {props.body2}
                    btntext = {props.btntext2}
                    ImageSrc = {props.ImageSrc2}
                    order1 = {props.order11}
                    order2 = {props.order22}
                />
            </div>
        </>
    );
}