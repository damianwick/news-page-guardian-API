export default function Headline({ title, section }) {
    return (
        <li className="list-group-item">
            <h1>{title}</h1>
            <h2>{section}</h2>
        </li>
    )
}