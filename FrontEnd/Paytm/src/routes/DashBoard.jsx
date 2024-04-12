import Balance from "../Components/Balance";
import TopBar from "../Components/TopBar";
import Users from "../Components/Users";
import { useRecoilValue } from "recoil";
import { user_balance } from "../Functions/UserSate";

export default function Dashboard()
{
   const balance = useRecoilValue(user_balance);
   return(<div className="flex flex-col"> 
   <TopBar></TopBar>
   <Balance balance={balance}></Balance>
   <Users></Users>
   </div>
   )
}