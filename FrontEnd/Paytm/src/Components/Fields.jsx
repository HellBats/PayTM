export default function Field({label,setLabel})
{
    return (
        <div>
        <div className="font-bold mt-2 ml-1 text-sm" >
        {label}
        </div>
        <input type="text" className="border mt-2 ml-1 w-64 h-9 rounded-md pl-2" 
        onChange={(event)=>setLabel(event.target.value)}></input>
        </div>
      )
}