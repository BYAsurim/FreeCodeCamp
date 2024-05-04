const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendRequest(method, url, body = null) {
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => {
        if(res.ok){
            return res.json()
        }else {
            return res.json().then(e=>{
                e = new Error('Request failed.')
                e.data = e;
                throw e
            })
        }
    })
}

// sendRequest('GET', requestURL)
//     .then((res) => {
//         console.log(res)
//     }).catch((e) => {
//     console.log(e)
// })
const body = {
    name: 'Sasha',
    age: 30
};
sendRequest('POST', requestURL, body)
    .then((res) => {
        console.log(res)
    }).catch((e) => {
    console.log(e)

})
