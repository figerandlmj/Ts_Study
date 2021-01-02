1. DOM: document object model 文档对象模型
  ```javascript
  var div = document.getElementsByTagName('div')[0];
  div.onclick = function() {
    this.style.width = '100px';
    this.style.height = '100px';
    this.style.backgroundColor = 'red';
  }
  var div = document.createElement('div');
  document.body.appendChild(div);
  document.onkeydown = function(e){
    switch(e.which){
      case 37:
      console.log('左');
      break;
      case 38:
      console.log('上');
      break;
      case 39:
      console.log('右');
      break;
      case 40:
      console.log('下');
      break;
    }
  }
  ```
  ```html
  <ul>
    <li img-date="0"></li>
  </ul>
  ```
  ```javascript
  var ul = document.getElementsByTagName('ul')[0];
  ul.onmouseover = function(e){
    var event = e || window.event;
    var target = event.target || event.srcElement;
    target.style.backgroundColor = `rgba(255, 255, ${target.getAttribute('img-date')})`;
    target.setAttribute('img-date', parseInt(target.getAttribute('img-date') + 6));
  }
  ```

2. DOM基本操作
- 查
  ```javascript
  getElementById(); // 元素id，ie8下不区分id大小写且匹配name属性
  getElementsByTagName(); // 标签名，类数组
  getElementsByName(); // name属性，ie不支持，部分标签（表单，表单元素，img，iframe）可用
  getElementsByClassName(); // class类名，ie8及以下不支持
  querySelector(); // css选择器，只能选择一个，ie7及一下不支持，选出的元素是静态的
  querySelectorAll(); // css选择器，选一组，ie7及以下不支持，选出的元素是静态的
  querySelector('div > span strong.demo');
  ```

- 非方法类的操作
  ```javascript
  parentNode // 父节点
  childNodes // 子节点们，包括文本节点和属性节点
  firstChild // 第一个子节点
  lastChild // 最后一个子节点
  nextSibling // 后一个兄弟节点
  previousSibling // 前一个兄弟节点
  ```
- 节点类型
  节点名称：nodeType
  元素节点：1
  属性节点：2
  文本节点：3
  注释节点：8
  document:9
  DocumentFragment:11

- 基于元素节点树的遍历
  ```javascript
  parentElement // 返回当前元素的父节点，ie不兼容
  chidren // 只返回当前元素的元素子节点
  childElementCount  // 等于children.length
  firstElementChild // 返回第一个元素子节点，ie不兼容
  lastElementChild // 返回最后一个元素子节点，ie不兼容
  nextElementSibling // 返回后一个兄弟元素节点， ie不兼容
  previousElementSibling 
  ```
- 节点属性
  ```javascript
  nodeName // 元素标签名，大写，只读
  nodeValue // 文本节点或注释节点的文本内容，可读写
  nodeType // 节点类型，只读
  attributes // 元素节点的属性集合，属性名attributes[0].name不可改，属性值attributes[0].value可改
  getAttribute() // 获取属性值
  setAttribute() // 设置属性值
  hasChildNodes() // 是否有子节点
  ```

- DOM接口
Node 
  Document：文档
    XMLDocument
    HTMLDocument
  CharacterData
    Text
    Comment
  Element：文档中的元素
    HTMLElement
      HTMLHeadElement
      HTMLBodyElement
      HTMLTitleElement
      HTMLParagraphElement
      HTMLInputElement
      HTMLTableElement
      ...
  Attr

- 继承关系
  Object.prototype ->
  EventTarget.prototype ->
  Node.prototype ->
  Document.prototype -> 
  HTMLDocument.prototype ->
  document

- DOM基本操作
  ```javascript
  getElementById() // Document.prototype
  getElementsByName() // HTMLDocument.prototytpe
  getElementsByTagName()
  getElementsByClassName()
  querySelector()
  querySelectorAll() // Document.prototype和Element.prototype

  body,head // HTMLDocument.prototype上常用属性, document.body, document.head
  documentElement // Document.prototype上属性，文档根元素，document.documentElement => html
  ```
- 增
  ```javascript
  document.createElement() // 创建元素节点
  document.createTextNode() // 创建文本节点
  document.createComment() // 创建注释节点
  document.createDocumentFragment() // 创建文档碎片节点
  ```
- 插
  ```javascript
  parentNode.appendChild() // push
  parentNode.insertBefore(a, b) // insert a, before b
  ```
- 删
  ```javascript
  parent.removeChild() // 被剪切
  child.remove() // 自尽，完全删除
  ```
- 替换
  ```javascript
  parent.replaceChild(new, origin) // new替换origin
  ```
- Element节点
  属性：
    innerHTML // 可读可写
    innerText // 可读可写，老版本ie和fixfox（textContent）不兼容
  方法：
    getAttribute()
    setAttribute()

3. 日期对象Date()
  ```javascript
  var date = new Date();
  getFullYear(); // 4位数年份
  getMonth(); // 0~11月份
  getDate(); // 1~31日期
  getDay(); // 0~6星期日-星期六
  getHours(); // 0~23时
  getMinutes(); // 0~59分
  getSeconds(); // 0~59秒
  getMiliseconds(); // 0~999毫秒
  getTime(); // *1970-01-01~至今的毫秒数
  setFullYear();
  setMonth();
  setDate();
  setHours();
  setMinutes();
  setSeconds();
  setMiliseconds();
  setTime();
  toSource();// 返回该对象的源代码
  toString();
  toDateString();
  toTimeString();

  ```
4. js定时器
  ```javascript
  setInterval(fn, timeGap); // 定时循环器，计时不准
  clearInterval(timer);
  setTimeout(fn, timeGap); // 定时器
  clearTimeout(timer);
  ```
5.DOM/BOM基本操作
  ```javascript
  // 查看滚动条滚动距离
  function getScrollOffset(){
    if(window.pageXOffset){
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      };
    }else{
      return {
        x: document.body.scrollLeft + document.documentElement.scrollLeft,
        y: document.body.scrollTop + document.documentElement.scrollTop
      };
    }
  }
  // 获取可视区窗口的尺寸
  function getViewportOffset(){
    if(window.innerWidth){
      return {
        w: window.innerWidth,
        h: window.innerHeight
      };
    }else{
      if(document.compatMode === "BackCompat"){//怪异模式
        return {
          w: document.body.clientWidth,
          h: document.body.clientHeight
        };
      }else{
        return {
          w: document.documentElement.clientWidth,
          h: document.documentElement.clientHeight
        }
      }
    }
  }

  // 查看元素的几何尺寸
  div.getBoundingClientRect() -> {width,height,top,right,bottom,left,...}  //兼容性好，width、height ie中没有，结果不是实时的
  
  div.offsetWidth/offsetHeight //视觉上的尺寸，包括padding,不报括margin
	div.offsetLeft/offsetTop  //相对有定位的父级的位置，若没有最近父级则返回的是相对文档body
  div.offsetParent  //返回最近的有定位的父级
  
  // 自动阅读
  function autoRead(){
    var start = document.getElementsByTagName("input")[0];
      stop = document.getElementsByTagName("input")[1];
    var timer,
      key = true;
    start.onclick = function(){
      if(key){
        key = false;
        timer = setInterval(function(){
          window.scrollBy(0,10);
        },1000);
      }
    };
    stop.onclick = function(){
      clearInterval(timer);
      key = true;
    }
  }
  ```
  



