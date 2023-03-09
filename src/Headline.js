export default function Headline(props) {
    return (
        <li className="list-group-item">
            <h2>{props.title}</h2>
            <div className="d-inline-flex w-100 align-items-end mb-4">
            <h4 className="p-0 m-0" >{props.section}</h4>
            <p className="p-0 m-0 ms-2">{props.date}</p>
            </div>
            <a href={props.url} target="_blank" className="btn btn-dark float-end" >Go to the article</a>   
        </li>
    )
}