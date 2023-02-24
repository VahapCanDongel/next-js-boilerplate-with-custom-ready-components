export default function Input(props){
    const classNames = ["focus:outline-none relative"]

    



    if(props.outlined){
        classNames.push("bg-transparent p-2 rounded-md w-[230px] h-[40px] border-[1px]")
    }

    if(props.className){
        classNames.push(props.className)
    }

    if(props.width){
        classNames.push(`w-[${props.width}]`)
    }

    if(props.height){
        classNames.push(`w-[${props.height}]`)
    }

    if(props.leftIcon){

    }  

    if(props.rightIcon){
        
    }

    return(
        <input type="input" className={classNames.join(" ")}  placeholder={props.placeHolder}/>
    )
}