module.exports = {
  title: 'JavaScript入門1',
  subtitle: '変数1',
  language: 'javascript',
  defaultValue: `function hello() {
    // キーワードvarを使って変数value1に文字列"Hello var!"をしまってみよう

    // キーワードletを使って変数value2に文字列"Hello let!"をしまってみよう
    
    // キーワードconstを使って変数value1に文字列"Hello const!"をしまってみよう

    //　変数value1の中身を出力してみよう

    //　変数value2の中身を出力してみよう

    //　変数value3の中身を出力してみよう
}

hello()
    `,
  answer: `function hello() {
    // キーワードvarを使って変数value1に文字列"Hello var!"をしまってみよう
    var value1 = "Hello var!"
    // キーワードletを使って変数value2に文字列"Hello let!"をしまってみよう
    let value2 = "Hello let!"
    // キーワードconstを使って変数value1に文字列"Hello const!"をしまってみよう
    const value3 = "Hello const!"

    //　変数value1の中身を出力してみよう
    console.log(value1)

    //　変数value2の中身を出力してみよう
    console.log(value2) 

    //　変数value3の中身を出力してみよう
    console.log(value3)
}

hello()
`,
  correctOutput: 'Hello var!Hello let!Hello const!',
  nextLessonId: "004"
}
