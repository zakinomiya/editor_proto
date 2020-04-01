module.exports = {
  title: 'JavaScript入門1',
  subtitle: '変数1',
  language: 'javascript',
  defaultValue: `function hello() {
    // 変数valueを宣言しよう

    // 変数valueに文字列"value"を代入しよう

    //　変数valueの中身を出力してみよう

    // 変数value1の宣言と文字列"value1"の代入を同時にやってみよう

    //　変数value1の中身を出力してみよう
}

hello()
    `,
  answer: `function hello() {
    // 変数valueを宣言しよう
    var value
    // 変数valueに文字列"value"を代入しよう
    value = "value"
    //　変数valueの中身を出力してみよう
    console.log(value)

    // 変数value1の宣言と文字列"value1"の代入を同時にやってみよう
    var value1 = "value1"
    //　変数value1の中身を出力してみよう
    console.log(value1)
}

hello()
`,
  correctOutput: 'valuevalue1',
  nextLessonId: "003"
}
