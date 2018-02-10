// This file is used 4 test the .eslintrc file.
// ++++
/* = */
function a () {
     const arr = []
    const sth = arr
    [1, 2, 3].forEach(n => {
        console.info(n)
    })

    console.info(sth)

    for (let i = 0; i < 10; i++) {
        console.info(i);
    }
    const obj = { a: 1};
    console.info(obj);
    // xxxx
    const str =  "abcdefggggggg99999999999999999999999999999999999999999999gggggggggggggggggggggggggggggggggggggggggg";
    const str2 =    `abcdefggggggg999999asdfadf99999999999999999999999999999999999999gggggggggggggggggggggggggggggggggggggggggg`;
    console.info(str, str2);

    const aa =  1 +   2;
    console.info(aa);
}
a();
[].forEach((item) => {
    console.info(item);
});

[].forEach(function(item) {
    console.info(item);
});
