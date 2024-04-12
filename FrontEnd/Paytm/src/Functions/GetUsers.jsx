import axios from 'axios'
export default async function GetUsers({filter,setUsers})
{
    const token = localStorage.getItem('token');
    if(filter.length ==0) return 
    const response = await axios.get('https://back.zoanfruit.xyz/api/v1/user/bulk',
    {
        params:{
            filter:filter
        },
        headers:{
            Authorization: "Bearer " + token
        }
    }).catch(error=>{console.log(error.response.data.message)});
    if(response.status==200)
    {
        return setUsers(response.data.users);
    }
}