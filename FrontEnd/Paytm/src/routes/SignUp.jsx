import { useState } from "react";
import AccountWarning from "../Components/AccountWarning";
import Field from "../Components/Fields";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import SubmitButton from "../Components/SubmitButton";
import SignUpFunction from "../Functions/SignupFunction";
import {useNavigate} from 'react-router-dom'

export default function SignUp()
{
    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [Email,setEmail] = useState('');
    const [PhoneNo,setPhoneNo] = useState('');
    const [Password,setPassword] = useState('');
    const navigate = useNavigate();
    return (
        <div className="flex justify-center content-center w-screen h-screen bg-gray-200">
            <div className="flex flex-col justify-center w-80 h-fit my-28 px-6 bg-white rounded-lg">
            <Heading label={'Sign Up'}></Heading>
            <SubHeading label={'Enter your information to create an account'}></SubHeading>
            <Field label={'First Name'} setLabel={setFirstName}></Field>
            <Field label={'Last Name'} setLabel={setLastName}></Field>
            <Field label={'Phone No.'} setLabel={setPhoneNo}></Field>
            <Field label={'Email'} setLabel={setEmail}></Field>
            <Field label={'Password'} setLabel={setPassword}></Field>
            <SubmitButton label={'Sign Up'} onClick={()=>SignUpFunction({FirstName,LastName,Email,PhoneNo,Password,navigate})}>
            </SubmitButton>
            <AccountWarning label={'Already have an account?'} link={'Login'}></AccountWarning>
            </div>
        </div>
    )
}