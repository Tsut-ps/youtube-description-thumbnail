# YouTube 概要欄にサムネイルを表示

YouTube のサムネイルを概要欄下部に表示する、Chrome 拡張機能です。

## 仕様/挙動

- 自分用なのでとてもシンプルです。概要欄にサムネイルを表示する、以外の機能はありません。
- 高解像度サムネイルが設定されているであろうことを想定しているので、maxresdefault.jpg 以外は取得していません。
- 稀に反応しないことがあったので 2 秒後に実行するようになっています。
- https://www.youtube.com/watch 配下にアクセスすると、サムネイルを概要欄に表示します。

## 使い方

- 画像は押しても何も起きません。右クリックして表示/保存してください。
- Eagle 等と組み合わせて使っても良さそう (一応、ALT 属性にタイトルを含めるようにしました)。

## リファレンス

https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-on-every-tab?hl=ja
