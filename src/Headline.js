export default function Headline(props) {
    return (
        <li className="list-group-item">
            <h1>{props.title}</h1>
            <div>
            <h2>{props.section}</h2>
            <p>{props.date}</p>
            </div>
            <a href={props.url} target="_blank" className="btn btn-dark" >Go to the article</a>   
        </li>
    )
}