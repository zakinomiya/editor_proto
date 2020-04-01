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
- nextLessonId:　次のレッスンのディレクトリの名前

`text.md`

- 説明部分のマークダウン

サンプルは`src/texts/js/001`などを参照
