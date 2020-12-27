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

  ```javascript
  // for in循环理论上可以返回原型和原型链上的东西，一旦这个原型链延展到了object.prototype 上，不会打印系统的，只会打印自带的
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      console.log(obj[prop]);
    }
  }
  // 对象还是数组的判断
  obj instanceof Array // 为true则是数组
  obj.constructor // function Array() {}
  Object.prototype.toString.call([]); // '[object Array]'
  Object.prototype.toString.call({}); // '[object Object]'
   Object.prototype.toString.call(123); // '[object Number]'
  Object.prototype.toString.call(true); // '[object Boolean]'
  ```
- 进制
  ```javascript
  // 十六进制0 1 2 3 4 5 6 7 8 9 a b c d e f 
  // 十六进制的中10是十进制的16，1f = 16 + 15 
  // 二进制中的10是十进制的2，11 是十进制的3 
  ```
- auguments
  ```javascript
  // arguments.callee，指向函数的引用（函数自己） 
  // function.caller，caller谁叫他，caller不能用在arguments里面 

  // 100以内的阶乘
  var num = (function (n) {
    if(n === 1) return 1;
    return n * arguments.callee(n - 1);
  })(100);

  function test() {
    demo();
  }
  function demo () {
    console.log(demo.caller);
  }
  test(); // function test() {...}
  ```

  ```javascript
  let x = 1;
  if(function f() {}) {
    x += typeof f;
  }
  console.log(X); // '1undefined', 用括号把function f() {}转换成表达式，就被立即执行了，就找不到

  undefined == null; // true
  isNaN('100'); // false
  parseInt('1a') == 1; // true
  ```

  ```javascript
  // 1、函数预编译过程this —> 指向window
  function test(c) {
    //var this = Object.create(test.prototype);
    //{
    //  __proto__: test.prototype
    //}
    var a = 123;
    function b() {}
  }
  AO{
    arguments: [1]
    this: window,
    c: 1,
    a: undefined,
    b: function () {}
  }
  // 2、全局作用域里 this —> 指向window 
  // 3、call/apply 可以改变函数运行时this指向 
  // 4、obj.func(); // func()里面的this指向obj 
  // bind()方法主要就是将函数绑定到某个对象，bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()中的第一个参数的值
  var obj = {
    a: 123,
    fun: function () {console.log(this.a)}
  };
  var test = obj.fun.bind({a: 456});
  test(); // 456
  ```

- 克隆
  ```javascript
  // 浅层克隆
  function clone (origin, target) {
    var target = target || {};
    for(var prop in target) {
      target[prop] = origin[prop];
    }
    return target;
  }
  // 深层克隆（对象&数组）
  function deepClone(origin, target) {
    var target = target || {},
      toStr = Object.prototype.toString,
      arrStr = '[object, Array]';
    for(var prop in origin) {
      if(prop !== null && typeof origin[prop] === 'object') {
       target[prop] = deepClone( origin[prop], toStr.call(origin[prop]) === attStr ? [] : {});
      }else {
        target[prop] = origin[prop];
      }
    }
    return target;
  }
  ```

- 数组
  ```javascript
  // 定义对象方式：自变量，构造函数，自定义的构造函数，Object.create 
  // 定义数组的方式：
  // var arr = [] ; // 数组自变量
  // var arr = new Array(位数); // 系统提供
  // 两者区别就只有位数的情况，数组能用的方法来源于Array.prototype
  var arr = new Array(1,2,3,4); // [1, 2, 3, 4]
  var arr = new Array();
  arr[10] = 'abc'; // [empty × 10, "abc"]

  // 改变原数组
  push // 末尾加
  pop // 末尾减
  unshift // 头部加
  shift // 头部减
  reverse // 逆反
  sort // 排序，按ASC码
    arr.sort() // 从小到大
    arr.sort().reverse() // 从大到小
    arr.sort(function(a, b){
      return a - b; // 升序
      return b - a; // 降序
    });
    arr.sort(function(){
      return Math.random() - 0.5 // 乱序
    });
  splice // (从第几位开始，截取多少长度，在切口处添加数据)
  // 不改变原数组
  forEach
    arr.forEach(function(item){
      // ...
    });
  filter
    arr.filter(function(item) {
      return item > 5;
    });
  map
    arr.map(function(item){
      return item + 1;
    });
  reduce
    arr.reduce(function(total, num){
      return total + num;
    }, 0);
  reduceRight
  slice // (从该位开始截取，截取到该位)
    slice(1, 2)
    slice(1) // 截取到最后
    slice() // 截取整个数组
  concat // 拼接
    arr.concat(arr1);
  join
  toString // 相当于join(',')
  // push方法源码
  Array.prototype.push = function() {
    for(var i = 0; i < arguments.length; i ++){
      this[this.length] = arguments[i];
    }
    return this.length;
  }

  ```
- 类数组：像数组，但没有数组所拥有的方法
  ```javascript
  // arguments
  var obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    'length': 3,
    'push': Array.prototype.push,
    'splice': Array.prototype.splice,
  }
  obj.push('d'); // a b c d 4

  // 封装type方法
  function type(target) {
    var ret = typeof target;
    var template = {
      '[object Array]': 'array',
      '[object Object]': 'object',
      '[object Number]': 'number-object',
      '[objetc String]': 'string-obejct',
      '[object Boolean]': 'boolean-object'
    };
    if(target === null) {
      return null;
    }else if(ret === 'object') {
      var str = Object.prototype.toString.call(target);
      return tanplate[str];
    }else{
      return ret;
    }
  }

  // 数组去重
  Array.prototype.unique = function() {
    var temp = {},
      arr = [],
      len = this.length;
    for(var i = 0; i < len; i ++) {
      if(!temp[this[i]]) {
        temp[this[i]] = 'has value';
        arr.push(this[i]);
      }
    }
    return arr;
  }
  ```

- try...catch
  ```javascript
  try{
    console.log('a');
    console.log(b);
    console.log('c');
  }catch(e){
    console.log(e.name + ':' + e.message);
  }
  // Error.name
  // 1. EvalError：eval()的使用与定义不一致
  // 2. RangeError：数值越界
  // 3. **ReferenceError：非法或不能识别的引用类型 
  // 4. **SyntaxError：语法解析错误
  // 5. TypeError：操作数类型错误
  // 6. URIError：URI处理函数使用不当，引用地址错误
  'use strict'; // 严格模式(es3.0和es5.0冲突部分用es5.0)
  // es5.0不支持：
  // with(obj){} 改变{}内的作用域为obj
  // arguments.callee 指向函数的引用（函数自己）
  // function.caller 函数在哪里被调用
  // 变量赋值前必须声明
  // 局部this必须被赋值，(Person.call(null/undefined) 赋值什么就是什么)
  // 拒绝重复属性和参数
  // eval() 可以将字符串当代码来执行，所以在es3.0中不推荐使用
  ```

  










