function setPromiseTimeout(count) {
    return new Promise((resolve, reject) => {
        if (count % 2 === 0) {
            setTimeout(() => {
                return resolve()
            }, 1000)
        } else {
            setTimeout(() => {
                return reject('error')
            }, 2000)
        }
    })

}

const example = async (count) => {
    try {
        await setPromiseTimeout(count)
        const response = 'success'
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}
example(3)
example(6)

const twoSum = function (arr, target) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                array.push(i, j)
            }
        }

    }

    return array
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 5, 4, 15], 9))


