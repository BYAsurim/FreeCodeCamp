const foo = (n) => {
    if (n === 0) return 0
    return n * n + foo(n - 1)
}
console.log(foo(5))


const palindrome = (str) => {
    if (str.length <= 1) {
        return true
    }
    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return palindrome(str.substring(1, str.length - 1))
    } else {
        return false
    }
}
console.log(palindrome('racecar'))

const fibonachi = (n) => {
    if (n <= 1) return n
    return fibonachi(n - 1) + fibonachi(n - 2)
}

console.log(fibonachi(10))