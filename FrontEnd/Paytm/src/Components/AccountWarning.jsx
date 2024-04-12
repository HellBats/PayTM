import { Link } from "react-router-dom";

export default function AccountWarning({label,link})
{
    return(<div className="flex my-2 justify-center">
        <div>{label}</div>
        <Link to={link=='Login'?'/sign-up':'/sign-in'}><div className="underline underline-offset-1 ml-1">{link}</div></Link>
        </div>
    )
}