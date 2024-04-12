export default function SendProfile({label})
{
    return(
        <div className="flex">
             <div className="my-4 rounded-full border w-20 h-20 bg-lime-300">
                <div className="my-6 mx-7 text-3xl">{label.toUpperCase()[0]}</div>
             </div>
             <div className="my-9 mx-7 text-2xl">{label}</div>
        </div>
    )
}