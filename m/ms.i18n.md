## CN

时长字符串与毫秒转换库。

转换时长字符串为毫秒。

|参数名|类型|说明|
|-----|----|---|
|str|string|字符串格式|
|返回值|number|毫秒|

转换毫秒为时长字符串。

|参数名|类型|说明|
|-----|----|---|
|num|number|毫秒|
|返回值|string|字符串格式|

```javascript
ms('1s'); // -> 1000
ms('1m'); // -> 60000
ms('1.5h'); // -> 5400000
ms('1d'); // -> 86400000
ms('1y'); // -> 31557600000
ms('1000'); // -> 1000
ms(1500); // -> '1.5s'
ms(60000); // -> '1m'
```