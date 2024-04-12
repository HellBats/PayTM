import axios from 'axios'
export default async function SendMoneyFunction({navigate,id})
{
    const response = await axios.post('https://back.zoanfruit.xyz/api/v1/user/sign-up',
    {
    }).catch(error=>{console.log(error.response.data.message)});
    if(response.status==200)
    {
        localStorage.setItem('token',response.data.token);
        navigate('/dashboard');
    }
}