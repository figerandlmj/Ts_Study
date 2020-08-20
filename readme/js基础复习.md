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
  typeof null; // object
  typeof a; // undefined
  typeof undefined; // undefined
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
  // Boolean()
  ```



