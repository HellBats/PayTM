
import { useSetRecoilState,useRecoilValue } from "recoil";
import {indices, search_user_list} from "../Functions/UserSate";
import ProfileIcon from "./ProfileIcon";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

export default function FindUser({label,index})
{
    const navigate = useNavigate();
    const setIndex = useSetRecoilState(indices);
    const user = useRecoilValue(search_user_list);
    return (
    <div className="flex justify-between">
        <div className="flex p-2 ml-4 mt-1">
            <ProfileIcon label={'U'}></ProfileIcon>
            <div className="my-2 mx-2">{label}</div>
        </div>
        <div className="mr-4">
            <SubmitButton label={'Send money'} onClick={()=>{
                setIndex(index);
                console.log(user);
                navigate('/Send')
            }}></SubmitButton>
        </div>
    </div>
    )
}