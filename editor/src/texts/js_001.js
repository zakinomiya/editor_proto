module.exports = {
    "title": "JavaScript入門1",
    "subtitle": "変数について",
    "explanation": `
        今回は変数について学びます。
        変数は値をしまっておくために使います。
        変数を定義して何らかの値を紐付けて置くことで、後でその値を使うことができます。

        変数は次のように定義します。
        \`\`\`javascript
            const value = "value"
        \`\`\`
        この例では、変数valueに文字列"value"が入っています。
        ではこのvalueの中身を表示してみましょう。
    `,
    "answer": `
        function displayValue() {
            const value = "value";
            console.log(value);
        }

        displayValue()
    `
}