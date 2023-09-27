import { useOutletContext } from "react-router-dom"

export default function Comment() {

    const ctx = useOutletContext();
    console.log(ctx.comment);

    return <div>
        {ctx.comment.map( (value, idx)  => {
            return <div key={idx}>{value.text}</div>
        })}
    </div>
}