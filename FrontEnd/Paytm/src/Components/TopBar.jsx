import ProfileIcon from './ProfileIcon'
export default function TopBar()
{
    return (
        <div className="flex justify-between border-b pb-2">
            <div className="font-bold text-4xl">PaymentsApp</div>
            <div className="flex">
                <div className="mt-3 mr-2">Hello,User</div>
                <ProfileIcon label={'U'}></ProfileIcon>
            </div>
        </div>
    )
}