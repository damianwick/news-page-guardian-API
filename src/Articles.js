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
                
                // let regex = /1[0-2]|0?[1-9]/ 
                let regex = /([01]?[0-9]|2[0-3]):[0-5][0-9]/ 
                console.log(data.response.results[0].webPublicationDate.match(regex)[0])
            })            
            .catch(err => console.error("There is an error " + err))
    }            

    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {getArticles()}, []);

    const regexDate = /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/gm;
    const regexTime = /([01]?[0-9]|2[0-3]):[0-5][0-9]/;
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
                            date={el.webPublicationDate.match(regexTime)[0] + ", " + el.webPublicationDate.match(regexDate)}
                            url={el.webUrl}
                        />})}
                </ul>
            </>
        )
}
