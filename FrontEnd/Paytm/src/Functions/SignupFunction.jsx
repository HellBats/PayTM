import axios from 'axios'
export default async function SignUpFunction({FirstName,LastName,Email,Password,PhoneNo,navigate})
{
    const response = await axios.post('https://back.zoanfruit.xyz/api/v1/user/sign-up',
    {
            FirstName:FirstName,
            LastName:LastName,
            EmailId:Email,
            Password:Password,
            PhoneNo:PhoneNo
    }).catch(error=>{console.log(error.response.data.message)});
    if(response.status==200)
    {
        localStorage.setItem('token',response.data.token);
        navigate('/dashboard');
    }
} 