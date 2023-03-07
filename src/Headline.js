export default function Headline(props) {
    return (
        <li className="list-group-item">
            <h2>{props.title}</h2>
            <div className="d-inline-flex w-100 justify-content-between align-items-end mb-4">
            <h4 className="p-0 m-0">{props.section}</h4>
            <p className="text-end m-0">{props.date}</p>
            </div>
            <a href={props.url} target="_blank" className="btn btn-dark float-end" >Go to the article</a>   
        </li>
    )
}