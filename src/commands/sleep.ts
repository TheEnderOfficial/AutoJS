
/*
    Sleep
    @param {number} ms - Milliseconds to delay
    @returns {void}
*/
export function sleep(ms: number): void {
    var waitTill = new Date(new Date().getTime() + ms);
    while(waitTill > new Date()) {}
}   