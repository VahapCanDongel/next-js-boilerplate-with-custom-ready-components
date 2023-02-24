export default function Textbox(props){
    const classNames = ["resize-none focus:outline-none border-[1px]"]
    let placeHolderText = ""
    if(props.resizeable){
        classNames.push("resize")
    }

    if(props.width){
        classNames.push(`w-[${props.width}]`)
    }

    if(props.height){
        classNames.push(`w-[${props.height}]`)
    }

    if(props.placeholder){
        placeHolderText = props.placeholder
    }
    
    
    return(
        <textarea className={classNames.join(" ")} placeholder={placeHolderText}>
            {props.children}
        </textarea>
    )
} 