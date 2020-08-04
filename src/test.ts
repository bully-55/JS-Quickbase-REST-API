export const stringReverse = (str: string): string => {
    let strArr = str.split("")
    let reverse = strArr.reverse().join()

    return reverse
}