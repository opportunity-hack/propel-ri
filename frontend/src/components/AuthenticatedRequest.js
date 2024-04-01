import {withRequiredAuthInfo} from "@propelauth/react";
import {useEffect, useState} from "react";

function fetchWhoAmI(accessToken) {
    console.log("fetching whoami");

    return fetch("/whoami", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    }).then(response => {
        if (response.ok) {
            console.log("response is ok")
            console.log(response.status);            
            return response.json()
        } else {
            console.log("response is not ok")
            console.log(response.status);
            return {status: response.status}
        }
    })
}

function AuthenticatedRequest({accessToken}) {
    const [response, setResponse] = useState(null);
    useEffect(() => {
        fetchWhoAmI(accessToken).then(setResponse)
    }, [accessToken])

    return <span>
        <h2>Server Response</h2>
        <pre>{response ? JSON.stringify(response, null, 2) : "Loading..."}</pre>
    </span>
}

export default withRequiredAuthInfo(AuthenticatedRequest);