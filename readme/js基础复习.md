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
  ```javascript
  window.a = 10;
  a = 10;
  var a = b = 10;
  ```
- 局部变量：只能在本函数里面访问
- js运行三部曲：语法分析 -> 预编译 -> 解释执行
- 预编译：函数声明整体提升；变量声明提升；
- 函数预编译
   ```javascript
   // 1. 创建AO对象（执行期上下文）
   // 2. 找形参和变量声明，赋值为undefined
   // 3. 将实参赋值给形参
   // 4. 找函数声明，赋值函数体
   ```
- 全局预编译
  ```javascript
   // 1. 创建GO对象（Global Object）
   // 2. 找形参和变量声明，赋值为undefined
   // 3. 找函数声明，赋值函数体
   ```
- 作用域：函数属性[[scope]]，存储了执行期上下文对象集合
- 作用域链：执行期上下文对象集合呈链式链接
- 执行期上下文：当函数在执行的前一刻，会创建一个称为执行期上下文的内部对象。一个执行期上下文定义了一个函数执行时的环境，函数每次执行时对应的执行上下文都是独一无二的，所以多次调用一个函数会导致创建多个执行上下文，当函数执行完毕，执行上下文被销毁。
- 但凡是内部的函数被保存到外部，一定生成闭包

  ```javascript
  function a () {
    var num = 100;
    function b () {
      num ++;
      console.log(num);
    }
    return b;
  }
  var demo = a();
  demo(); // 101
  demo(); // 102
  ```
- 闭包的作用
  ```javascript
  // 1. 实现公有变量
  function add () {
    var num = 0;
    function demo () {
      num ++;
      console.log(num);
    }
    return demo;
  }
  var counter = add();
  counter(); // 1
  counter(); // 2
  // 2. 可以做缓存（存储结构）
  function test () {
    var num = 100;
    function a () {
      num ++;
      console.log(num);
    }
    function b () {
      num --;
      console.log(num);
    }
    return [a, b];
  }
  var myArr = test();
  myArr[0](); // 101
  myArr[1](); // 100
  // 对象里面可以用属性和方法
  function eater () {
    var food = '';
    var obj = {
      push: function (myFood) {
        food = myFood;
      }
      eat: function () {
        console.log('I am eating ' + food);
        food = '';
      }
    }
    return obj;
  }
  var eater1 = eater();
  eater1.push('banana');
  eater1.eat(); // I am eating banana
  // 3. 实现封装，属性私有化
  // 4. 模块化开发，防止污染全局变量
  ```
- 立即执行函数：一次执行过后即释放，适合做初始化工作

  ```javascript
  (function () {}());
  (function () {})();
  // 只有表达式才能被执行符号执行
  // + - ！ && ||
  + function test() {
    console.log('a');
  }();
  // 打印0-9
  function test () {
    var arr = [];
    for(var i = 0; i < 10; i ++) {
      (function(j) {
        arr[j] = function () {
          console.log(j);
        }
      }(i));
    }
    return arr;
  }
  var myArr = test();
  for(var j = 0; j < 10; j ++) {
    myArr[j]();
  }
  ```
- 闭包的防范：闭包会导致多个执行函数共用一个公有变量，如果不是特殊需要，应尽量防止这种情况发生

13. 对象

- 创建方法

  ```javascript
  // 1.对象字面量
  var obj = {};
  // 2.构造函数
  // 系统自带构造函数
  new Object();
  new Array();
  new Number();
  new String();
  new Boolean();
  new Date(); // 'object'
  new Function(); // 'function'
  // 自定义
  Object.create('原型');
  ```
- 构造函数, 大驼峰（帕斯卡）命名规则
  ```javascript
  function Person () {} 
  var person = new Person();
  // 构造函数内部原理
  // 1.在函数体前面隐式的加上var this = {}
  // 2.执行this.xxx = xxx;
  // 3.隐式的返回return this;
  ```
- 包装类

  ```javascript
  new String();
  new Boolean();
  new Number();
  var num = 123; // 原始值不能有属性和方法
  var num = new Number(123); // 对象
  var str = 'hello';
  str.length = 2; // 隐式调用new String('hello').length = 2，然后delete
  str.length; // 5 再次隐式调用new String('hello').length
  ```
- 原型：原型是 function 对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。

  ```javascript
  function Person () {} 
  var person = new Person();
  var person = Object.create(Person.prototype);
  var obj = Object.create(null); // 原型参数只能是null或对象
  Person.prototype => {
    constructor: Person () {},
    __proto__: Object.prototype // 原型链终端
  };
  person.__proto__ => Person.prototype; // 查看对象原型
  person.constructor => function Person () {}; // 查看对象构造函数
  Object.prototype.toString
  Array.prototype.toString
  Number.prototype.toString
  String.prototype.toString
  Boolean.prototype.toString
  var num = 123;
  num.toString(); // '123', 调用的是Number.prototype.toString
  Object.prototype.toString.call(123); // '[object Number]'
  ```
  ```javascript
  toFixed(2); // 保留2位小数
  Math.ceil(); // 上取整
  Math.floor(); // 下取整
  Math.random(); // [0, 1]
  for(var i = 0; i < 10; i ++) {
    // 0.14 * 100 = 14.000000000000002;
    // js开发精度不准，所以一般不用
    // var num = Math.random().toFixed(2) * 100;
    var num = Math.floor(Math.random() * 100);
    console.log(num);
  }
  ```
- call/apply：改变this指向，传参形式不同

  ```javascript
  function Wheel(wheelSize, style) {
    this.wheelSize = wheelSize;
    this.style = style;
  }
  function Sit(C, sitColor) {
    this.C = C;
    this.sitColor = sitColor;
  }
  function Model(height, width, len) {
    this.height = height;
    this.width = width;
    this.len = len;
  }
  function Car(wheelSize, style, C, sitColor, height, width, len) {
    //Wheel.call(this, wheelSize, style);
    //Sit.call(this, C, sitColor);
    //Model.call(this, height, width, len);
    Wheel.apply(this, [wheelSize, style]);
    Sit.apply(this, C, [sitColor]);
    Model.apply(this, [height, width, len]);
  }
  var car = new Car(120, '好看', '真皮', 'red', 200, 300, 400);
  ```
- 继承的发展史

  ```javascript
  // 1. 传统形式：原型链
  // 缺点：过多的继承了没用的属性
  Grand.prototype.lastName = 'Li';
  function Grand(){}
  var grand = new Grand();
  Father.prototype = grand;
  function Father() {}
  var father = new Father();
  Son.prototype = father;
  function Son() {}
  var son = new Son();
  // 2. 借用构造函数：利用call/apply
  // 缺点：不能继承借用构造函数的原型；每次构造函数都要多走一个函数，浪费效率；
  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  function Student(name, age, sex, grade) {
    Person.call(this, name, age, sex);
    this.grade = grade;
  }
  var student = new Student();
  // 3. 共享原型
  // 缺点：不能随便改动自己的原型
  Father.prototype.lastName = 'Li';
  function Father() {}
  function Son() {}
  Son.prototype = Father.prototype;
  var son = new Son();
  // 4. 圣杯模式
  var inherit = (function () {
    var F = function () {};
    return function (Target, Origin) {
      F.prototype = Origin.prototype;
      Target.prototype = new F();
      Target.prototype.constructor = Target;
      Target.prototype.uber = Oringin.prototype;
    };
  }());
  inherit(Son, Father);
  ```

- 命名空间：管理变量，防止污染全局，适用于模块化开发

  ```javascript
  // 老旧方案
  var org = {
    department1: {
      zhangsan: {
        a: '',
        b, '',
        c: ''
      },
      lisi: {
        a: '',
        b, '',
        c: ''
      }
    },
    department2: {
      zhangsan: {
        a: '',
        b, '',
        c: ''
      },
      lisi: {
        a: '',
        b, '',
        c: ''
      }
    }
  }
  var zhangsan = org.department2.zhangsan;
  zhangsan.a;
  // 闭包
  var init = (function (){
    var name = '';
    function callName() {
      console.log(name);
    }
    return function () {
      callName();
    }
  }())

  ```

  ```javascript
  // 实现jquery链式调用
  var obj = {
    smoke: function () {
      console.log('smoking');
      return this;
    },
    drink: function () {
      console.log('drink');
      return this;
    },
    perm: function () {
      console.log('perm');
      return this;
    }
  }
  obj.smoke().drink().perm();
  ```
- 对象的枚举






