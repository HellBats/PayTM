import FindUser from "./FindUser";
import GetUsers from "../Functions/GetUsers";
import { search_user_list } from "../Functions/UserSate";
import { useRecoilState } from "recoil";

export default function Users()
{
    const [users,setUsers] = useRecoilState(search_user_list);
    let index = -1;
    return (
        <div>
            <div className="font-bold text-xl px-4 py-1 mt-3">Users</div>
            <div className="mx-6">
                <input type='text' className="border my-1 p-1 w-full rounded-md"
                onChange={(event)=>GetUsers({filter:event.target.value,setUsers})}></input>
            </div>
            {users.map((user)=>{
                index++;
                return <FindUser key={user._id} label={user.FirstName +' '+user.LastName} index={index}> </FindUser>
            })}
        </div>
    )
}