import {atom,selector} from 'recoil'
import axios from 'axios'

export const search_user_list = atom({
    key: 'search_user_list',
    default: [],
})
export const indices = atom({
    key: 'indices',
    default: -1,
})

export const send_amount = atom({
    key: 'send_amount',
    default: 0,
})

export const user_balance = selector({
    key: 'user_balance',
    get: async ()=>{
        const token = localStorage.getItem('token');
        const response = await axios.get('https://back.zoanfruit.xyz/api/v1/account/balance',
        {
            headers:{
                authorization: "Bearer " + token
            }
        })
        .catch(error=>{console.log(error.response.data.message)});
        if(response.status==200)
        {
            return response.data.balance
        }
    }
})