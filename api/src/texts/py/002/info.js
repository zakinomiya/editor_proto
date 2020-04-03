module.exports = {
  title: 'Python入門1',
  subtitle: 'データの出力',
  language: 'python',
  defaultValue: `# -*- coding: utf-8 -*-
def hello():
  # 変数valueに文字列"value"を代入しよう

  #　変数valueの中身を出力してみよう

hello()
    `,
  answer: `# -*- coding: utf-8 -*-
def hello():
  # 変数valueに文字列"value"を代入しよう
  value = "value"
  #　変数valueの中身を出力してみよう
  print(value)

hello()
`,
  correctOutput: 'value',
  nextLessonId: "003"
}
