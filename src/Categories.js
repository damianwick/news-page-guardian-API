export default function Categories(props) {
    return(
        <div className="w-100 btn-group">
            <button className="btn btn-outline-secondary rounded-0" onClick={() => props.handleSection("")}>News</button>
            <button className="btn btn-outline-secondary rounded-0" onClick={() => props.handleSection("section=technology&")}>Tech</button>
            <button className="btn btn-outline-secondary rounded-0" onClick={() => props.handleSection("section=sport&")}>Sport</button>
            <button className="btn btn-outline-secondary rounded-0" onClick={() => props.handleSection("section=culture&")}>Culture</button>
            <button className="btn btn-outline-secondary rounded-0" onClick={() => props.handleSection("section=lifeandstyle&")}>Lifestyle</button>
            <button className="btn btn-outline-secondary rounded-0" onClick={() => props.handleSection("section=commentisfree&")}>Opinion</button>
        </div>
    )
}