define("arale/overlay/1.1.0/overlay",["$","arale/position/1.0.0/position","arale/iframe-shim/1.0.2/iframe-shim","arale/widget/1.1.0/widget","arale/base/1.1.0/base","arale/class/1.1.0/class","arale/events/1.1.0/events"],function(e,t,i){function s(e){return l.contains(document.documentElement,e)}function n(e){l(u.blurOverlays).each(function(t,i){if(i&&i.get("visible")){for(var s=0;i._relativeElements.length>s;s++){var n=l(i._relativeElements[s])[0];if(n===e.target||l.contains(n,e.target))return}i.hide()}})}function r(e,t){for(var i=0;t.length>i;i++)if(e===t[i])return t.splice(i,1),t}var l=e("$"),a=e("arale/position/1.0.0/position"),o=e("arale/iframe-shim/1.0.2/iframe-shim"),h=e("arale/widget/1.1.0/widget"),u=h.extend({attrs:{width:"",height:"",zIndex:99,visible:!1,align:{selfXY:[0,0],baseElement:a.VIEWPORT,baseXY:[0,0]},parentNode:document.body},show:function(){return this.rendered||this.render(),this.set("visible",!0),this},hide:function(){return this.set("visible",!1),this},setup:function(){var e=this;this._setupShim(),this._setupResize(),this.after("show",function(){e._setPosition()})},destroy:function(){return r(this,u.allOverlays),r(this,u.blurOverlays),u.superclass.destroy.call(this)},_setPosition:function(e){if(s(this.element[0])&&(e||(e=this.get("align")),e)){var t="none"===this.element.css("display");return t&&this.element.css({visibility:"hidden",display:"block"}),a.pin({element:this.element,x:e.selfXY[0],y:e.selfXY[1]},{element:e.baseElement,x:e.baseXY[0],y:e.baseXY[1]}),t&&this.element.css({visibility:"",display:"none"}),this}},_setupShim:function(){var e=new o(this.element);this.after("hide _setPosition",e.sync,e);var t=["width","height"];for(var i in t)t.hasOwnProperty(i)&&this.on("change:"+i,e.sync,e);this.before("destroy",e.destroy,e)},_setupResize:function(){u.allOverlays.push(this)},_blurHide:function(e){e=l.makeArray(e),e.push(this.element),this._relativeElements=e,u.blurOverlays.push(this)},_onRenderWidth:function(e){this.element.css("width",e)},_onRenderHeight:function(e){this.element.css("height",e)},_onRenderZIndex:function(e){this.element.css("zIndex",e)},_onRenderAlign:function(e){this._setPosition(e)},_onRenderVisible:function(e){this.element[e?"show":"hide"]()}});u.blurOverlays=[],l(document).on("click",function(e){n(e)});var c;u.allOverlays=[],l(window).resize(function(){c&&clearTimeout(c),c=setTimeout(function(){l(u.allOverlays).each(function(e,t){t&&t.get("visible")&&t._setPosition()})},80)}),i.exports=u});
