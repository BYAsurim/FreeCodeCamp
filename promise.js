let axios = {
    get() {
        let pr = new Promise((res, rej) => {
                setTimeout(() => {
                    res({a: 1, message: 'yoyoyo', g: 123})
                }, 2000)
            }
        )
        return pr
    }
}

let promise = axios.get()
// let pr = promise.then(data => console.log(data))
// let pr1 = pr.then(() => {
//     console.log('1')
// })
// let pr2 = pr1.then(() => {
//     console.log('2')
// }).catch(data => console.error(data))
promise.then((res) => {
    console.log(res)
    return res.message
})
    .then((res) => {
        console.log(res)
    })

let fetch = (url) => {
    return new Promise((res, rej) => {
        switch (url) {
            case 'google': {
                setTimeout(() => {
                    res({data: 'from google'})
                }, 3000)
                break
            }
            case 'microsoft': {
                setTimeout(() => {
                    res({data: 'from microsoft'})
                }, 2000)
                break
            }
            case 'it-kamasutra': {
                setTimeout(() => {
                    res({data: 'from it-kamasutra'})
                }, 500)
                break
            }
            default: {
                setTimeout(() => {
                    res(new Error)
                }, 500)
            }
        }
    })
}

// fetch('google').then(data => {
//     console.log(data)
//     fetch('microsoft').then(data => {
//         console.log(data)
//         fetch('it-kamasutra').then(data => console.log(data))
//     })
// })

let makeRequest = () => {
    fetch('google')
        .then(data => {
            console.log(data)
            return fetch('microsoft')
        })
        .then(data => {
            console.log(data)
            return fetch('it-kamasutra')
        })
        .then(data => console.log(data))
}
let makeRequest2 = async () => {
    let data = await fetch('google');
    console.log(data)
    data = await fetch('microsoft')
    console.log(data)
    data = await fetch('it-kamasutra')
    console.log(data)

}
let makeRequestOneMoment = async () => {
    let promises = [
        fetch('google'),
        fetch('microsoft'),
        fetch('it-kamasutra')
    ]
    let data = await Promise.all(promises)
    console.log(data)
}
//makeRequest2()
makeRequestOneMoment()

//fetch('xz').then(data => console.error(data))}


let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('my promise resolve')
    },0)

console.log('1')
console.log('2')
console.log('3')
})
console.log(myPromise)

myPromise.then((res)=>{
    console.log(res)
})
myPromise.then((res)=>{
    console.log(`123: ${res}`)
})
const doAfter = (sec)=>{
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const number = Math.random()
            number > 0.35 ? resolve(number) : reject(`Promise reject ${number}`)
        },Number(`${sec}000`))

    })}


const doAfterResolve = (sec)=>{
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },Number(`${sec}000`))

    })}

doAfterResolve(5).then(()=>{
    console.log('5 секунд ')
})

const doAfterReject = (sec)=>{
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject()
        },Number(`${sec}000`))

    })}

let prRej = doAfterReject(3)
prRej.catch(()=>{
    console.error('reject')
})

doAfter(5)
    .then((res)=>{
    console.log(res)
})
.catch((rej)=>{
    console.error(rej)
})

doAfter(5)
    .then((res)=>{
        console.log(`random NUMBER${res}`)
        return res * 10
    })
    .then(res => doAfter(3))
    .then(res => res * 10 )
    .then(res => console.log(`randomLAST${res}`))
