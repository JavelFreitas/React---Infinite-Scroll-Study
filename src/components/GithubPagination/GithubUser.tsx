import './GithubUser.css'

interface GithubUsersProps {
    follower: any,
    reference?: (li: any) => void
}

export default function GithubUser(props: GithubUsersProps){    
    return (
        <div className="user_external-div" ref={props?.reference}>
            <img className="external_div-img" src={props.follower.avatar_url}></img>
            <div className="user_internal-div">
                <h3 className={props.reference !== undefined ? "chosen_one" : ""}>{props.follower.login}</h3>
            </div>
        </div>
    )
}