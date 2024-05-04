const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url, true)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-type', 'application/json')

        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }

        }
        xhr.onerror = function () {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

sendRequest('GET', requestURL)
    .then((res) => {
        console.log(res)
    }).catch((e) => {
    console.log(e)
})
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
