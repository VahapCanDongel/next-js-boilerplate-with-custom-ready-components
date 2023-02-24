export default function Alert(props){
    const classNames = ["w-[400px] h-[100px] rounded-md flex justify-center items-center gap-6 shadow-md"]
    
    let alertMessage  = ""
    
    let alertIcon = null

    if(props.Error){
        classNames.push("bg-red-500 text-white")
        alertMessage = "Error!"

        
        alertIcon = (
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M13.449 1.433a1.687 1.687 0 0 0-2.898 0L.747 17.883c-.67 1.124.14 2.55 1.449 2.55h19.608c1.309 0 2.119-1.426 1.449-2.55l-9.804-16.45Zm-1.58.786c.059-.1.203-.1.263 0l9.804 16.45a.153.153 0 0 1-.132.231H2.196a.153.153 0 0 1-.132-.232l9.804-16.45Zm-.901 5.16a1.033 1.033 0 1 1 2.064 0l-.236 6.135a.797.797 0 0 1-1.592 0l-.236-6.135Zm2.182 9.184a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" clip-rule="evenodd"></path>
            </svg>
        )
    }

    if(props.Success){
        classNames.push("bg-green-500 text-white")
        alertMessage = "Success!"

        alertIcon = (
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M13.449 1.433a1.687 1.687 0 0 0-2.898 0L.747 17.883c-.67 1.124.14 2.55 1.449 2.55h19.608c1.309 0 2.119-1.426 1.449-2.55l-9.804-16.45Zm-1.58.786c.059-.1.203-.1.263 0l9.804 16.45a.153.153 0 0 1-.132.231H2.196a.153.153 0 0 1-.132-.232l9.804-16.45Zm-.901 5.16a1.033 1.033 0 1 1 2.064 0l-.236 6.135a.797.797 0 0 1-1.592 0l-.236-6.135Zm2.182 9.184a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" clip-rule="evenodd"></path>
            </svg>
        )

    }

    if(props.Warning){
        classNames.push("bg-yellow-400 text-white")
        alertMessage = "Warning!"

        alertIcon = (
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M13.449 1.433a1.687 1.687 0 0 0-2.898 0L.747 17.883c-.67 1.124.14 2.55 1.449 2.55h19.608c1.309 0 2.119-1.426 1.449-2.55l-9.804-16.45Zm-1.58.786c.059-.1.203-.1.263 0l9.804 16.45a.153.153 0 0 1-.132.231H2.196a.153.153 0 0 1-.132-.232l9.804-16.45Zm-.901 5.16a1.033 1.033 0 1 1 2.064 0l-.236 6.135a.797.797 0 0 1-1.592 0l-.236-6.135Zm2.182 9.184a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" clip-rule="evenodd"></path>
            </svg>
        )

    }

    return(<div className={classNames.join(" ")}>
        <div className="flex flex-col items-center">
            {alertIcon}
            {alertMessage}  
        </div>
        <div>
        {props.children}
        </div>
    </div>)
}