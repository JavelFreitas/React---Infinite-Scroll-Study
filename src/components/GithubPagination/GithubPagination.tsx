import { useCallback, useEffect, useRef, useState } from "react";
import GithubUser from "./GithubUser"

export default function GithubPagination() {

    const [followers, setFollowers] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const observer: any = useRef();

    const observableLi = useCallback(li => {
        console.log("Inside Callback");
        console.log(li);
        
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver( entries => {
            if(entries[0].isIntersecting){
                setCurrentPage(previous => previous + 1);
                // console.log("Apareceu");
            }
        })
        if(li) observer.current.observe(li);
    }, [])

    useEffect(() => {
        const ENDPOINT = 'https://api.github.com/users/javelfreitas/followers';
        const SEARCH_URL = `${ENDPOINT}?per_page=10&page=${currentPage}&order=DESC`;
        fetch(SEARCH_URL)
            .then(response => response.json())
            .then((newFollowers) => setFollowers((prevFollow: any[]) => [...prevFollow, ...newFollowers]))    
    }, [currentPage])
    
    // useEffect(() => {
    //     const intersectionObserver = new IntersectionObserver((entries) => {
    //         if(entries.some(entry => entry.isIntersecting)) {
    //             console.log("Vendo");
    //             setCurrentPage((currentPageInsideState => currentPageInsideState + 1))
    //         }
    //     });
    //     intersectionObserver.observe( /*TODO colocar o obserdador no ultimo elemento do map*/);
    //     return () => intersectionObserver.disconnect()
    // }, [])

    function addLi(){
        console.log(followers);
        setFollowers([{login: Date.now()}, ...followers]);
    }

    return (
        <div>
            <ul id="followers">
                {currentPage}
                {followers.map((follower: any, index: number) => {
                    if(index === followers.length - 1){
                        return (<GithubUser follower={follower} reference={observableLi} key={follower.login}/>)
                    } else {
                        return (<GithubUser follower={follower} key={follower.login}/> )
                    }
                })}
            </ul>
            <button onClick={addLi}>Add Li</button>
        </div>
    )
}
