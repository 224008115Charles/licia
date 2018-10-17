## CN

检查值是否是 Map 对象。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Map 类型，返回真|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```