import { useEffect, useState } from "react"
import Categories from "./Categories";
import Headline from "./Headline";
import Filter from "./Filter";

export default function Articles()  {
    
    const apiKey = 'api-key=b77217fd-ac45-4751-842c-8699ed8c4167';

    const [pageSizeValue, setPageSizeValue] = useState("page-size=5&");
    const [areArticles, setAreArticles] = useState(false);
    const [sectionValue, setSectionValue] = useState("");
    const [apiResponse, setApiResponse] = useState([]);
    const getArticles = (section, pageSize, keyword="") => {
       fetch('https://content.guardianapis.com/search?' + section + pageSize + keyword + apiKey)
            .then(response => response.json())
            .then((data) => {
                if(data.response.total > 0) {
                    setApiResponse(data.response.results);  
                    setAreArticles(true);
                } else {
                    setAreArticles(false);
                }
                console.log(data.response.total);
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
    const handleSearch = (keyword) => {
        getArticles(sectionValue, pageSizeValue, keyword);
    };

    const regexDate = /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/gm;
    const regexTime = /([01]?[0-9]|2[0-3]):[0-5][0-9]/;

        return(
            <>
                <Categories handleSection={handleSection}/>
                <Filter handlePageSize={handlePageSize} handleSearch={handleSearch}/>
                <ul className="list-group text-start">
                    {areArticles ? apiResponse.map(el => {
                            return <Headline 
                                title={el.webTitle} 
                                section={el.sectionName}
                                date={el.webPublicationDate.match(regexTime)[0] + ", " + el.webPublicationDate.match(regexDate)}
                                url={el.webUrl}
                            />
                        }) : ""}
                </ul>
                {!areArticles ? <h4 className="mt-5">Sorry! We were not able to find articles with the phrase you are looking</h4> : ""}
            </>
        )
}
