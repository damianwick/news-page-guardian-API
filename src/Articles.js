import { useEffect, useState } from "react"
import Headline from "./Headline";

export default function Articles()  {
    const apiKey = 'b77217fd-ac45-4751-842c-8699ed8c4167';

    const getArticles = () => {
       fetch('https://content.guardianapis.com/search?api-key=' + apiKey)
            .then(response => response.json())
            .then((data) => {
                setApiResponse(data.response.results);
            })            
            .catch(err => console.error("There is an error" + err))
    }            

    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {getArticles()}, []);

        
        return(
            <ul className="list-group text-start">
                {apiResponse.map(el => <Headline title={el.webTitle} section={el.sectionName} />)}
            </ul>
        )
}
