import { useRef } from "react";

export default function Search(props) {
    const inputRef = useRef();

    const handleChange = () => {
        let keyword = "q=" + inputRef.current.value + "&";
        props.handleSearch(keyword);
        inputRef.current.value ="";
    }

    return (
        <>  
            <p className="p-0 m-1 me-2 text-light">
                Search headlines by a keyword
            </p>
            <input ref={inputRef} type="text"/>
            <input type="submit" value="Search" onClick={handleChange}/>
        </>
        

    )
}