# JavaScript 基本数据类型

```markdown
# JavaScript 数据类型详解

## 目录
1. [数据类型概述](#数据类型概述)
2. [原始数据类型](#原始数据类型)
3. [引用数据类型](#引用数据类型)
4. [类型判断](#类型判断)
5. [类型转换](#类型转换)

## 数据类型概述

JavaScript 中的数据类型分为两大类：
- 原始数据类型（基本数据类型）
- 引用数据类型（复杂数据类型）

## 原始数据类型

### 1. Number（数值）
表示整数和浮点数。

```javascript
// 整数
const int = 42;
// 浮点数
const float = 42.42;
// 科学计数法
const scientific = 1e5;  // 100000
// 特殊值
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;
```

常见特性：
- 最大值：`Number.MAX_VALUE`
- 最小值：`Number.MIN_VALUE`
- `NaN` 不等于任何值，包括它自己
- `0` 和 `-0` 在比较时相等

### 2. String（字符串）
表示文本数据。

```javascript
// 字符串声明方式
const single = 'single quotes';
const double = "double quotes";
const template = `template literals`;

// 常用方法
const str = "Hello";
str.length;           // 5
str.toUpperCase();    // "HELLO"
str.indexOf("l");     // 2
```

特点：
- 不可变性（immutable）
- 支持字符串模板
- Unicode 字符集

### 3. Boolean（布尔值）
表示 `true` 或 `false`。

```javascript
const isTrue = true;
const isFalse = false;

// 转换为布尔值
Boolean(0);          // false
Boolean("");         // false
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false
Boolean(1);          // true
Boolean("hello");    // true
```

### 4. Undefined
表示未定义。

```javascript
let undefinedVar;
console.log(undefinedVar);  // undefined

// 常见场景
function foo() {}           // 无返回值函数返回 undefined
const arr = [1, 2];
console.log(arr[3]);        // undefined
```

### 5. Null
表示空值或不存在。

```javascript
const nullVar = null;

// null 与 undefined 的区别
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(typeof null);         // "object" (这是一个历史遗留bug)
```

### 6. Symbol
表示唯一的标识符。

```javascript
const sym1 = Symbol();
const sym2 = Symbol("key");
const sym3 = Symbol("key");

console.log(sym2 === sym3);  // false

// 常用场景：作为对象的唯一属性键
const obj = {
    [sym1]: "value1"
};
```

### 7. BigInt
表示任意精度的整数。

```javascript
const bigInt = 9007199254740991n;
const anotherBigInt = BigInt(9007199254740991);

// 运算
console.log(bigInt + 1n);  // 9007199254740992n
```

## 引用数据类型

### Object（对象）
包括普通对象、数组、函数等。

```javascript
// 对象
const obj = {
    name: "John",
    age: 30
};

// 数组
const arr = [1, 2, 3];

// 函数
function func() {
    return "Hello";
}
```

## 类型判断

### 1. typeof 操作符
```javascript
typeof 42;              // "number"
typeof "hello";         // "string"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof Symbol();       // "symbol"
typeof 42n;            // "bigint"
typeof {};             // "object"
typeof [];             // "object"
typeof null;           // "object"
typeof function(){};   // "function"
```

### 2. instanceof 操作符
```javascript
[] instanceof Array;    // true
{} instanceof Object;   // true
```

### 3. Object.prototype.toString
```javascript
Object.prototype.toString.call([]);   // "[object Array]"
Object.prototype.toString.call({});   // "[object Object]"
```

## 类型转换

### 1. 显式转换
```javascript
String(123);       // "123"
Number("123");     // 123
Boolean(1);        // true
```

### 2. 隐式转换
```javascript
"1" + 2;          // "12"
"1" - 2;          // -1
1 + true;         // 2
1 + [];           // "1"
```

## 注意事项

1. 数字精度问题
```javascript
0.1 + 0.2 !== 0.3  // true
0.1 + 0.2;         // 0.30000000000000004
```

2. NaN 的特殊性
```javascript
NaN === NaN        // false
isNaN(NaN)         // true
```

3. null 和 undefined 的区别
- `undefined` 表示变量未定义或未赋值
- `null` 表示一个空对象指针，常用于初始化变量

4. Symbol 的特性
- 每个 Symbol 都是唯一的
- 不能使用 new 操作符
- 常用于定义对象的唯一属性键

## 最佳实践

1. 使用 `===` 而不是 `==` 进行比较
2. 检查 `null` 或 `undefined` 时使用 `==`
3. 使用 `Number.isNaN()` 而不是 `isNaN()`
4. 使用字符串模板而不是字符串拼接
5. 小心处理浮点数计算

```

