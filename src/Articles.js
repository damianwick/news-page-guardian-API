import { useEffect, useState } from "react"
import Categories from "./Categories";
import Headline from "./Headline";

export default function Articles()  {
    
    const apiKey = 'api-key=b77217fd-ac45-4751-842c-8699ed8c4167';

    const getArticles = (section = "") => {
       fetch('https://content.guardianapis.com/search?' + section + apiKey)
            .then(response => response.json())
            .then((data) => {
                setApiResponse(data.response.results);
            })            
            .catch(err => console.error("There is an error " + err))
    }            

    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {getArticles()}, []);

    // section=news&
    // section=tech&
    // section=sport&
    // section=culture&
    // section=lifestyle&
    // section=opinion&
    
        return(
            <>
                <Categories getArticles={getArticles}/>
                <ul className="list-group text-start">
                    {apiResponse.map(el => {
                        return <Headline 
                            title={el.webTitle} 
                            section={el.sectionName}
                            date={el.webPublicationDate}
                            url={el.webUrl}
                        />})}
                </ul>
            </>
        )
}
