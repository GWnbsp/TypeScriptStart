"use strict";
/**
 * JavaScript 数据类型完整示例和说明
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberDemo = numberDemo;
exports.stringDemo = stringDemo;
exports.booleanDemo = booleanDemo;
exports.undefinedDemo = undefinedDemo;
exports.nullDemo = nullDemo;
exports.symbolDemo = symbolDemo;
exports.bigIntDemo = bigIntDemo;
exports.objectDemo = objectDemo;
exports.arrayDemo = arrayDemo;
exports.functionDemo = functionDemo;
exports.typeCheckingDemo = typeCheckingDemo;
// ==================== 1. 基本数据类型 ====================
/**
 * Number（数字类型）
 * - 包括整数和浮点数
 * - 范围：-(2^53 - 1) 到 (2^53 - 1)
 * - 特殊值：Infinity, -Infinity, NaN
 */
function numberDemo() {
    const int = 42; // 整数
    const float = 42.42; // 浮点数
    const science = 1e5; // 科学计数法 (100000)
    const binary = 0b1010; // 二进制 (10)
    const octal = 0o744; // 八进制 (484)
    const hex = 0xFF; // 十六进制 (255)
    // 特殊数值
    const max = Number.MAX_VALUE; // 最大数值
    const min = Number.MIN_VALUE; // 最小数值
    const infinity = Infinity; // 无穷大
    const negInfinity = -Infinity; // 负无穷大
    const notNumber = NaN; // 非数字
    // 数字方法
    console.log(Number.isInteger(42)); // true
    console.log(Number.isFinite(Infinity)); // false
    console.log((42.42).toFixed(1)); // "42.4"
}
/**
 * String（字符串类型）
 * - 用于表示文本数据
 * - 可以使用单引号、双引号或反引号
 */
function stringDemo() {
    const single = 'Single quotes';
    const double = "Double quotes";
    const template = `Template literal`;
    // 字符串方法
    const str = "Hello, World!";
    console.log(str.length); // 13
    console.log(str.toUpperCase()); // "HELLO, WORLD!"
    console.log(str.slice(0, 5)); // "Hello"
    console.log(str.split(", ")); // ["Hello", "World!"]
    // 模板字符串
    const name = "TypeScript";
    const greeting = `Hello ${name}!`; // "Hello TypeScript!"
}
/**
 * Boolean（布尔类型）
 * - 只有两个值：true 和 false
 */
function booleanDemo() {
    const isTrue = true;
    const isFalse = false;
    // 布尔转换
    console.log(Boolean(1)); // true
    console.log(Boolean(0)); // false
    console.log(Boolean("")); // false
    console.log(Boolean("hello")); // true
}
/**
 * Undefined（未定义）
 * - 表示变量未被赋值
 */
function undefinedDemo() {
    let undefinedVar;
    console.log(undefinedVar); // undefined
    console.log(typeof undefinedVar); // "undefined"
}
/**
 * Null（空值）
 * - 表示一个空对象指针
 */
function nullDemo() {
    const nullVar = null;
    console.log(nullVar); // null
    console.log(typeof nullVar); // "object"
}
/**
 * Symbol（符号）
 * - ES6 新增的基本数据类型
 * - 表示唯一的标识符
 */
function symbolDemo() {
    const sym1 = Symbol();
    const sym2 = Symbol("key");
    const sym3 = Symbol.for("key"); // 全局符号注册表
    // 用作对象属性键
    const obj = {
        [sym1]: "value1",
        [sym2]: "value2"
    };
    console.log(Symbol.keyFor(sym3)); // "key"
}
/**
 * BigInt（大整数）
 * - ES2020 新增
 * - 用于表示大于 2^53 - 1 的整数
 */
function bigIntDemo() {
    const bigInt1 = 9007199254740991n;
    const bigInt2 = BigInt(9007199254740991);
    console.log(bigInt1 === bigInt2); // true
}
// ==================== 2. 引用数据类型 ====================
/**
 * Object（对象）
 * - 键值对的集合
 */
function objectDemo() {
    // 对象字面量
    const person = {
        name: "John",
        age: 30,
        greet() {
            return `Hello, ${this.name}!`;
        }
    };
    // 访问属性
    console.log(person.name); // "John"
    console.log(person["age"]); // 30
    // 对象方法
    console.log(Object.keys(person)); // ["name", "age", "greet"]
    console.log(Object.values(person)); // ["John", 30, ƒ]
}
/**
 * Array（数组）
 * - 有序的元素集合
 */
function arrayDemo() {
    // 数组创建
    const arr1 = [1, 2, 3];
    const arr2 = new Array(1, 2, 3);
    // 数组方法
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers.length); // 5
    console.log(numbers.map(x => x * 2)); // [2, 4, 6, 8, 10]
    console.log(numbers.filter(x => x > 3)); // [4, 5]
    console.log(numbers.reduce((a, b) => a + b)); // 15
}
/**
 * Function（函数）
 * - 可执行的代码块
 */
function functionDemo() {
    // 函数声明
    function add(a, b) {
        return a + b;
    }
    // 函数表达式
    const multiply = function (a, b) {
        return a * b;
    };
    // 箭头函数
    const divide = (a, b) => a / b;
    // 函数调用
    console.log(add(2, 3)); // 5
    console.log(multiply(2, 3)); // 6
    console.log(divide(6, 2)); // 3
}
/**
 * 类型检查与转换
 */
function typeCheckingDemo() {
    // typeof 运算符
    console.log(typeof 42); // "number"
    console.log(typeof "string"); // "string"
    console.log(typeof true); // "boolean"
    console.log(typeof undefined); // "undefined"
    console.log(typeof null); // "object"
    console.log(typeof {}); // "object"
    console.log(typeof []); // "object"
    // 类型转换
    console.log(String(42)); // "42"
    console.log(Number("42")); // 42
    console.log(Boolean(1)); // true
    // 数组检查
    console.log(Array.isArray([])); // true
    console.log(Array.isArray({})); // false
}
