# JavaScript入門1

## 変数5

### 変数の宣言と代入　`let`と`const`

今回は残りのキーワード`let`と`const`について学習していきます

前回の`var`編でやったように`var`は

- 再宣言可能
- 再代入可能

でしたが、`let`と`const`は

### `let`

- 再宣言不可
- 再代入可能

### `const`

- 再宣言不可
- 再代入不可

でしたね

### 再宣言

`let`と`const`はどちらも再宣言不可なので以下のコードはエラーになります

```javascript
    let valueLet = "value"
    let valueLet = "value1"
    // letは再宣言できない

    const valueConst = "value"
    const valueConst = "value1"
    // constは再宣言できない
```

### 再代入

`let`は再代入可能なので以下のようにかけます

```javascript
    let valueLet = "value"
    valueLet = "value1"
```

しかし`const`の場合は以下のコードはエラーになります

```javascript
    const valueConst = "value"
    valueConst = "value1"
    // constには再代入できない
```


### `const`について

今回学んだように`const`は

- 再宣言不可
- 再代入不可

でした

では以下のコードは動作するのでは？と思った人もいるのではないでしょうか

```javascript
    const value
    value = "value"
```

実はこちらのコードはエラーになります

その理由は、変数を宣言する際の挙動にあります。

`JavaScript`では変数を宣言した際に値を代入していない場合、

その変数には`undefined`という値が暗黙的に代入されています

そのため上記コードは、`const`で定義した変数valueへの値の再代入と見なされ、エラーになります

### 変数キーワードについて

今まで3つの変数キーワードを学習してきましたが、ではどれを使えばいいのでしょうか？

これには特に決まりはありませんが、コードのメンテナンス性、可読性などを考えると

```javascript
・出来るだけconstを使うようにする
・変数に再代入する必要がある場合のみletを使う。
・varは基本的には使わない
```

というのが良いのではないのでしょうか

`let`や`var`では、コードのどこで変数の中身が変わっているのか注意する必要があり、思わぬバグの原因になったり、コードが読みにくくなったりします。

それでは変数についてのおさらいをしましょう。
