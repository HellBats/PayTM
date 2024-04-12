import { useSetRecoilState,useRecoilValue } from "recoil";
import Field from "../Components/Fields";
import Heading from "../Components/Heading";
import SendProfile from "../Components/SendProfile";
import TransferButton from "../Components/TransferButton";
import {search_user_list,indices, send_amount } from "../Functions/UserSate";
export default function Send()
{
    const setSendBalance = useSetRecoilState(send_amount);
    const users = useRecoilValue(search_user_list);
    const index = useRecoilValue(indices);
    console.log(users,index);
    return (
        <div className="flex justify-center content-center w-screen h-screen bg-gray-200">
            <div className="flex flex-col justify-center w-80 h-fit mt-48 px-6 bg-white rounded-lg">
            <Heading label={'Send Money'}></Heading>
            <SendProfile label={users[index].FirstName + " " + users[index].LastName}></SendProfile>
            <Field label={'Enter Amount in ₹'} setLabel={setSendBalance}></Field>
            <TransferButton users={users} index={index}></TransferButton>
            </div>
        </div>
    )
}