# 历史

---

## 1.0.0

0.9.13 逐渐稳定下来了，修复一些 bug 后发布为 1.0.0 版本。

`tag:fixed` [#6](https://github.com/aralejs/overlay/issues/6) 修复了当实例 destroy 后没有在两个静态数组中销毁自己的问题。


## 0.9.13

`tag:fixed` 修复了 mask 组件 set 方法有时失效的问题。

`tag:fixed` 修复了 _blurHide() 只支持数组对象的问题。

`tag:unresolved` destroy 方法没有考虑到静态数组，但不影响使用。

## 0.9.12

`tag:improved` 提升了浮层显示时的效率（减少了一次定位操作）。

## 0.9.11

`tag:new` 显示时进行浮层定位（将 popup 的功能提到 overlay 中）。

## 0.9.10

`tag:new` 增加 resize 窗口时重新定位浮层功能。

`tag:fixed` 修复 align.baseElement 不支持 jQuery 对象的问题。
