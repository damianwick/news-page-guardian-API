import { useEffect, useState } from "react"
import Categories from "./Categories";
import Headline from "./Headline";
import PageSizeSelect from "./PageSizeSelect";

export default function Articles()  {
    
    const apiKey = 'api-key=b77217fd-ac45-4751-842c-8699ed8c4167';

    const [pageSizeValue, setPageSizeValue] = useState("page-size=5&");
    const [sectionValue, setSectionValue] = useState("");
    const [apiResponse, setApiResponse] = useState([]);
    const getArticles = (section, pageSize) => {
       fetch('https://content.guardianapis.com/search?' + section + pageSize + apiKey)
            .then(response => response.json())
            .then((data) => {
                setApiResponse(data.response.results);
            })            
            .catch(err => console.error("There is an error " + err))
    }
    useEffect(() => {getArticles(sectionValue, pageSizeValue)}, [])            
         
    const handleSection = (section) => {
        setSectionValue(section);    
        getArticles(section, pageSizeValue);                
    };

    const handlePageSize = (pageSize) => {
        setPageSizeValue(pageSize);
        getArticles(sectionValue, pageSize);
    };

    const regexDate = /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/gm;
    const regexTime = /([01]?[0-9]|2[0-3]):[0-5][0-9]/;

        return(
            <>
                <Categories handleSection={handleSection}/>
                <PageSizeSelect handlePageSize={handlePageSize}/>
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
