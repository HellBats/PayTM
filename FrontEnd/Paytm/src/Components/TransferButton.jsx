import { useRecoilValue } from "recoil";
import SetSendMoney from "./SetSendMoney";
import {send_amount } from "../Functions/UserSate";

export default function TransferButton({users,index})
{
    const amount = useRecoilValue(send_amount);
    return <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 
    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 
    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4" onClick={()=>
    SetSendMoney({amount,sender:users[index]._id})}>
        Initiate transfer</button>
}