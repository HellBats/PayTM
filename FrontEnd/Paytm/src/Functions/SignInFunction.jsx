import axios from 'axios'
export default async function SigninFunction({Email,Password,navigate})
{
    const response = await axios.get('https://back.zoanfruit.xyz/api/v1/user/sign-in',
    {
        params:{
            Email:Email,
            Password:Password
        }
    }).catch(error=>{console.log(error.response.data.message)});
    if(response.status==200)
    {
        localStorage.setItem('token',response.data.token);
        navigate('/dashboard');
    }
}