
let x: number | string = 0;
if (!x) {
    x = x || "default";
    console.log('default');
}
