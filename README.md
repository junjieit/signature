# signature
canvas 实现 电子签名

引用 http://blog.carvenzhang.cn/2016/04/23/%E6%AF%9B%E7%AC%94%E5%AD%97%E5%B8%962/

#### 初始化：
```
var canvas = document.getElementById("canvas");
var drawBoard = new DrawBoard(canvas);
```

#### 撤销
`drawBoard.cancel();`

#### 清除
`drawBoard.clear();`

#### 保存
```
// 保存整张画板
drawBoard.save('all', function(url){
  console.log(url); // png格式 base64
})

// 仅保存签字区域
drawBoard.save('only-draw', function(url){
  console.log(url); // png格式 base64
})
```
