## CN

创建只能调用一次的函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|返回值|function|目标函数|

```javascript
function init() {};
var initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```