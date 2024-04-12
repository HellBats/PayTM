import axios from 'axios' 

export default async function SetSendMoney({amount,sender})
{
    const token = localStorage.getItem('token');
    const int_amount = Math.floor(amount);
    const response = await axios.post('https://back.zoanfruit.xyz/api/v1/account/transfer',
    {
        to:sender,
        amount:int_amount,
    },{headers:{
        authorization: "Bearer " + token
    }})
    .catch(error=>{console.log(error.response.data.message)});
    if(response.status==200)
    {
        console.log(response.data.message);
    }
}