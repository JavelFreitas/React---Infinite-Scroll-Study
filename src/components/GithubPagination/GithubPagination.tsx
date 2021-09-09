import { useEffect, useState } from "react";


export default function GithubPagination() {
    const [followers, setFollowers] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);

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
    return (
        <div>
            <ul>
                {currentPage}
                {followers.map((follower: any, index: number) => {
                    console.log(index)
                    console.log(followers.length)
                    return (
                        index === followers.length - 1 
                            ? <li key={follower.login} style={{color: 'red'}}>
                                {follower.login}
                            </li> 
                            : <li key={follower.login}>
                                {follower.login}
                            </li> 
                    )
                })}
            </ul>
        </div>
    )
}
