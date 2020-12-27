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

  



