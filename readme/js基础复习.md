1. 浏览器组成
- shell(壳)：用户能操作的部分
- 内核：用户看不到的部分，分为渲染引擎（语法规则和渲染）、js引擎、其他模块（如异步）
2. 主流浏览器及内核
- IE：trident
- chrome：webkit/blink
- firefox：gecko
- opera：presto
- safari：webkit
3. js三大部分
- ECMAScript
- DOM
- BOM
4. 变量命名规则
- 以字母、_、$开头，可包含数字
- 不可用关键字、保留字
5. js数据类型
- 原始值：Number、String、Boolean、undefined、null，存放在栈（stack）中
- 引用值：Object(Array,Function)、Date、RegExp，地址存放在栈中，值存放在堆（heap）中
6. js运算操作符
- +（加/字符串连接），任何类型加字符串都等于字符串
- -（减）
- *（乘）
- /（除）
- %（模，取余）
- ++（加加）
- --（减减）
- +=
- -=
- *=
- /=
- %=
  ```javascript
  0 / 0; // NaN;
  1 / 0; // Infinity
  -1 / 0; // -Infinity
  ```
7. js比较运算符
- />（大于）
- <（小于）
- ==（等于）
- />=（大于等于）
- <=（小于等于）
- !=（不等于）
  ```javascript
  '10' > '8'; // false，字符串比较的是ASCII码
  NaN == NaN; // false，NaN不等于任何值
  undefined == undefined; // true
  Infinity == Infinity; // true
  ```
8. 逻辑运算符, false值：undefined、null、NaN、""、0、false
- &&（与）
- ||（或）
- ！（非）
9. 条件语句
  ```javascript
  // if
  if () {

  } else if () {

  } else {

  }
  // for
  for (let i = 0; i < 10; i ++) {
    continue; // 终止本次循环，进行下次循环
    break; // 终止循环
  }
  // while
  while() {

  }
  // do while
  do{

  }while()
  // switch case
  switch() {
    case 1: break;
    case 2: break;
    default: break;
  }
  ```
10. js类型转换
- typeof 类型判断：string、number、boolean、undefined、function、object
  ```javascript
  typeof null; // 'object'
  typeof a; // 'undefined'
  typeof undefined; // 'undefined'
  
  ```
- 显示类型转换
  ```javascript
  // Number()
  Number(true); // 1
  Number(false); // 0
  Number(undefined); // NaN
  Number(null); // 0
  Number(''); // 0
  Number('123abc'); // NaN
  // parseInt()
  parseInt(true); // NaN
  parseInt(false); // NaN
  parseInt(undefined); // NaN
  parseInt(null); // NaN
  parseInt(''); // NaN
  parseInt('123abc'); // 123
  parseInt(123.9); // 123
  parseInt(10, 16); // 10(16进制) => 16(10进制)
  parseInt(3, 2); // NaN
  var num = 123123.345789;
  num.toFixed(3); // 123123.346，四舍五入，保留3位小数
  // parseFloat()
  parseFloat('123.2.3'); // 123.2
  parseFloat('100.2abc'); // 100.2
  // toString()
  let p = 123; 
  p.toString();// '123'
  let p = undefined / null;
  p.toString(); // 报错
  let p = 10;
  p.toString(8); // 10(10进制) => 12(8进制)
  // String()
  String(123.234); // '123.234'
  // Boolean()
  Boolean(''); // false
  ```
- 隐式类型转换（内部隐式调用显示的方法进行转换）
  ```javascript
  // isNaN
  isNaN(NaN); // Number(NaN) => NaN => true
  isNaN('abc'); // Number('abc') => NaN => true
  isNaN(undefined);// Number(undefined) => NaN => true
  isNaN('123');// Number('123') => 123 => false
  isNaN(null); // Number(null) => 0 => false
  // ++/--（加加减减） +/-（一元正负）
  let a = '123';
  a++; // Number('123') => 123 => 124
  let a = 'abc';
  a++; // Number('abc') => NaN => NaN
  +/- 'abc'; // Number('abc') => NaN => NaN
  // +（加），当加号两侧有一个是字符串，就调用string
  'a' + 1; // 'a1'
  // *（乘） %（模），转换成number
  'a' * 1; // NaN
  '1' * 1; // 1
  // && || !（与或非），都是有类型转换的，不过是返回的是表达式的值，不是隐士类型转换的值，但是判断是一个类型转换的值
  // < > <= >=
  1 > '2'; // false，有数字相比较的，就会隐士类型转换成数字类型
  '3' > '2'; // true，没类型转换，这个比的是 ASCⅡ
  // == !=
  1 == '1'; // true，有隐式类型转换
  1 == true; // true
  // other
  false > true; // false，会先转换成 0 > 1
  2 > 1 > 3; // false
  undefined > 0; // false
  undefined == 0; // false
  undefined < 0; // false
  null > 0; // false
  null == 0; // false
  null < 0; // false
  undefined == null; // true
  NaN == NaN; // false
  ```
- 不发生类型转换
  ```javascript
  // === !==
  1 === 1; // true
  1 !== '1'; // true
  NaN === NaN; // false

  ```

11. 函数function
- 高内聚，低耦合
- 函数声明
  ```javascript
  // 命名：小驼峰原则
  function myFirstFunction() {}
  ```
- 函数表达式
  ```javascript
  // 命名
  var test = function abc() {};
  // 匿名
  var test = function () {};
  ```
- 函数名、形参-实参、实参列表arguments、return返回值并终止函数
  ```javascript
  function test (a, b, c, d) {
    console.log(arguments.length); // 实参长度
    console.log(test.length); // 形参长度
    // 形参与实参有一个映射关系
    a = 2;
    console.log(arguments[0]); // 2
  }
  ```
12. 作用域：变量和函数生效的区域
- 全局变量：能在函数里面和外面被访问
- 局部变量：只能在本函数里面访问
- js运行三部曲：语法分析 -> 预编译 -> 解释执行







