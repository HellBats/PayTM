import AccountWarning from "../Components/AccountWarning";
import Field from "../Components/Fields";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import SubmitButton from "../Components/SubmitButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SigninFunction from "../Functions/SignInFunction";

export default function SignUp()
{
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const navigate = useNavigate();
    return (
        <div className="flex justify-center content-center w-screen h-screen bg-gray-200">
            <div className="flex flex-col justify-center w-80 h-fit mt-48 px-6 bg-white rounded-lg">
            <Heading label={'Sign In'}></Heading>
            <SubHeading label={'Enter your credentials'}></SubHeading>
            <Field label={'Email'} setLabel={setEmail}></Field>
            <Field label={'Password'}setLabel={setPassword}></Field>
            <SubmitButton label={'Sign In'} onClick={()=>SigninFunction({Email,Password,navigate})}></SubmitButton>
            <AccountWarning label={'Does not have any account?'} link={'Sign up'}></AccountWarning>
            </div>
        </div>
    )
}