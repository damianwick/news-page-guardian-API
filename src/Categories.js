export default function Categories(props) {
    return(
        <div className="w-100 btn-group">
            <button className="btn btn-outline-dark rounded-0" onClick={() => props.getArticles("section=news&")}>News</button>
            <button className="btn btn-outline-dark rounded-0" onClick={() => props.getArticles("section=technology&")}>Tech</button>
            <button className="btn btn-outline-dark rounded-0" onClick={() => props.getArticles("section=sport&")}>Sport</button>
            <button className="btn btn-outline-dark rounded-0" onClick={() => props.getArticles("section=culture&")}>Culture</button>
            <button className="btn btn-outline-dark rounded-0" onClick={() => props.getArticles("section=lifeandstyle&")}>Lifestyle</button>
            <button className="btn btn-outline-dark rounded-0" onClick={() => props.getArticles("section=commentisfree&")}>Opinion</button>
        </div>
    )
}