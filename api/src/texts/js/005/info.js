module.exports = {
  title: 'JavaScript入門1',
  subtitle: '変数5',
  language: 'javascript',
  defaultValue: `function hello() {
    // キーワードletを使って変数value1に文字列"Hello let!"をしまってみよう
    
    //　変数value1の中身を出力してみよう

    // 変数value1に文字列"Hello let2!"を再代入してみよう

    //　変数value1の中身を出力してみよう
    
}

hello()
    `,
  answer: `function hello() {
    // キーワードletを使って変数value1に文字列"Hello let!"をしまってみよう
    let value1 = "Hello let!"
    //　変数value1の中身を出力してみよう
    console.log(value1)
    // 変数value1に文字列"Hello let2!"を再代入してみよう
    value1 = "Hello let2!"
    //　変数value1の中身を出力してみよう
    console.log(value1)
}

hello()
`,
  correctOutput: 'Hello let!Hello let2!',
  nextLessonId: null
}
