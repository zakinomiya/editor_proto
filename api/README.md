# api

## 新しくコンテンツを作る

今の所JavaScript、Pythonのコンテンツを作成可能

## ./src/texts/{言語ファイルの拡張子}/{lessonId}ディレクトリを作成

中身は

`info.js`

- 一つのレッスンの情報を含むファイル

含む必要のあるのは以下の項目

- title: 大きいタイトル（例：JavaScript入門1）
- subtitle: レッスンのタイトル（例：変数1）
- language: 言語（小文字）
- defaultValue:　最初にエディター部分に表示するコード
- answer:　その回の模範解答のコード
- correctOutput:　模範解答を入力した時のアウトプット（複数行ある場合は改行文字を除いたもの）
- isNextQuestion: boolean　次のページが選択式問題か
- nextLessonId:　次のレッスンのディレクトリの名前

`isNextQuestion`と`nextLessonId`の組み合わせで次のレッスンを決めている。

isNextQuestion= trueの場合、同じディレクトリ内の選択問題のページに移行する

`text.md`

- 説明部分のマークダウン

`question.json`

- 選択式問題の情報を含むファイル

以下のような感じ。answersの部分は選択肢。特に数の上限などの決まりはない

```json
"questionText": "JavaScriptに標準で搭載されている、値を出力する関数は次のうちどれですか?",
"answers": [
    {
        "index": 0,
        "text": "console"
    },
    {
        "index": 1,
        "text": "console.log"
    },
    {
        "index": 2,
        "text": "consoleLog"
    },
    {
        "index": 3,
        "text": "log"
    }
],
"correctAnswer": 1,
"nextLessonId": "002"
```

`answer.md`

- 選択式問題の解説部分のマークダウンファイル

サンプルは`src/texts/js/001`などを参照
