module.exports = {
  title: 'JavaScript入門1',
  subtitle: '変数1',
  language: 'javascript',
  defaultValue: `function hello() {
    // キーワードvarを使って変数valueに文字列"Hello var!"をしまってみよう

    //　変数valueの中身を出力してみよう

    // 変数valueに文字列"Hello var2!"を再代入してみよう

    //　変数valueの中身を出力してみよう
}

hello()
    `,
  answer: `function hello() {
    // キーワードvarを使って変数valueに文字列"Hello var!"をしまってみよう
    var value = "Hello var!"
    //　変数valueの中身を出力してみよう
    console.log(value)
    // 変数valueに文字列"Hello var2!"を再代入してみよう
    var value = "Hello var2!"
    //　変数valueの中身を出力してみよう
    console.log(value)
}

hello()
`,
  correctOutput: 'Hello var!Hello var2!',
  nextLessonId: "005"
}
