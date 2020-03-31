const fs = require('fs')

module.exports = {
    title: "JavaScript入門1",
    subtitle: "変数について",
    language: "javascript",
    defaultValue: `function hello() {
    // 変数valueに文字列"value"が格納された
    const value = "value";

    //　変数valueの中身を出力してみよう
}

hello()
    `,
    answer: `function hello() {
    // 変数valueに文字列"value"が格納された
    const value = "value";

    //　変数valueの中身を出力してみよう
    console.log(value)
}

hello()
        `
}
