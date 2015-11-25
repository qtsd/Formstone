/*! formstone v0.8.28 [dropdown.js] 2015-11-25 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){I=b.$body}function e(d){d.multiple=this.prop("multiple"),d.disabled=this.is(":disabled")||this.is("[readonly]"),d.lastIndex=!1,d.multiple?d.links=!1:d.external&&(d.links=!0);var e=this.find("[selected]").not(":disabled"),f=this.find(":selected").not(":disabled"),g=f.text(),h=this.find("option").index(f);d.multiple||""===d.label||e.length?d.label="":(f=this.prepend('<option value="" class="'+D.item_placeholder+'" selected>'+d.label+"</option>"),g=d.label,h=0);var i=this.find("option, optgroup"),l=i.filter("option");d.tabIndex=this[0].tabIndex,this[0].tabIndex=-1;var m=[D.base,d.customClass];d.mobile||b.isMobile?m.push(D.mobile):d.cover&&m.push(D.cover),d.multiple&&m.push(D.multiple),d.disabled&&m.push(D.disabled);var n='<div class="'+m.join(" ")+'" tabindex="'+d.tabIndex+'"></div>',o="";d.multiple||(o+='<button type="button" class="'+D.selected+'">',o+=a("<span></span>").text(z(g,d.trim)).html(),o+="</button>"),o+='<div class="'+D.options+'">',o+="</div>",this.wrap(n).after(o),d.$dropdown=this.parent(C.base),d.$allOptions=i,d.$options=l,d.$selected=d.$dropdown.find(C.selected),d.$wrapper=d.$dropdown.find(C.options),d.$placeholder=d.$dropdown.find(C.placeholder),d.index=-1,d.closed=!0,d.focused=!1,j(d),d.multiple||v(h,d),a.fn.fsScrollbar!==c&&d.$wrapper.fsScrollbar(),d.$selected.on(E.click,d,k),d.$dropdown.on(E.click,C.item,d,q).on(E.close,d,p),this.on(E.change,d,r),b.isMobile||(d.$dropdown.on(E.focusIn,d,s).on(E.focusOut,d,t),this.on(E.focusIn,d,function(a){a.data.$dropdown.trigger(E.raw.focusIn)}))}function f(b){b.$dropdown.hasClass(D.open)&&b.$selected.trigger(E.click),a.fn.fsScrollbar!==c&&b.$wrapper.fsScrollbar("destroy"),b.$el[0].tabIndex=b.tabIndex,b.$dropdown.off(E.namespace),b.$options.off(E.namespace),b.$placeholder.remove(),b.$selected.remove(),b.$wrapper.remove(),b.$el.off(E.namespace).show().unwrap()}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(D.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(D.open)&&a.$selected.trigger(E.click),a.$dropdown.addClass(D.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function h(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(D.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(D.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function i(b){a.fn.fsScrollbar!==c&&b.$wrapper.fsScrollbar("destroy");var d=b.index;b.$allOptions=b.$el.find("option, optgroup"),b.$options=b.$allOptions.filter("option"),b.index=-1,d=b.$options.index(b.$options.filter(":selected")),j(b),b.multiple||v(d,b),a.fn.fsScrollbar!==c&&b.$wrapper.fsScrollbar()}function j(b){for(var c="",d=0,e=0,f=b.$allOptions.length;f>e;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(D.group),g.is(":disabled")&&h.push(D.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val(),j=g.data("label");g.attr("value")||g.attr("value",i),h.push(D.item),g.hasClass(D.item_placeholder)&&h.push(D.item_placeholder),g.is(":selected")&&h.push(D.item_selected),g.is(":disabled")&&h.push(D.item_disabled),c+='<button type="button" class="'+h.join(" ")+'" ',c+='data-value="'+i+'">',c+=j?j:F.decodeEntities(z(g.text(),b.trim)),c+="</button>",d++}}b.$items=b.$wrapper.html(a.parseHTML(c)).find(C.item)}function k(a){F.killEvent(a);var c=a.data;if(!c.disabled)if(c.mobile||!b.isMobile||b.isFirefoxMobile)c.closed?m(c):n(c);else{var d=c.$el[0];if(H.createEvent){var e=H.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,G,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}l(c)}function l(b){a(C.base).not(b.$dropdown).trigger(E.close,[b])}function m(a){if(a.closed){{var b=a.$dropdown.offset(),c=I.outerHeight(),d=a.$wrapper.outerHeight(!0);a.index>=0?a.$items.eq(a.index).position():{left:0,top:0}}b.top+d>c-a.bottomEdge&&a.$dropdown.addClass(D.bottom),I.on(E.click+a.dotGuid,":not("+C.options+")",a,o),a.$dropdown.trigger(E.focusIn),a.$dropdown.addClass(D.open),w(a),a.closed=!1}}function n(a){a&&!a.closed&&(I.off(E.click+a.dotGuid),a.$dropdown.removeClass([D.open,D.bottom].join(" ")),a.closed=!0)}function o(b){F.killEvent(b);var c=b.data;c&&0===a(b.currentTarget).parents(C.base).length&&(n(c),c.$dropdown.trigger(E.focusOut))}function p(a){var b=a.data;b&&(n(b),b.$dropdown.trigger(E.focusOut))}function q(b){F.killEvent(b);var c=a(this),d=b.data;if(!d.disabled){var e=d.$items.index(c);d.$wrapper.is(":visible")&&(v(e,d,b.shiftKey,b.metaKey||b.ctrlKey),x(d)),d.multiple||n(d),d.$dropdown.trigger(E.focusIn)}}function r(b,c){var d=a(this),e=b.data;if(!c&&!e.multiple){var f=e.$options.index(e.$options.filter("[value='"+A(d.val())+"']"));v(f,e),x(e)}}function s(b){F.killEvent(b);var c=(a(b.currentTarget),b.data);c.disabled||c.multiple||c.focused||(l(c),c.focused=!0,c.$dropdown.addClass(D.focus).on(E.keyDown+c.dotGuid,c,u))}function t(b){F.killEvent(b);var c=(a(b.currentTarget),b.data);c.focused&&c.closed&&(c.focused=!1,c.$dropdown.removeClass(D.focus).off(E.keyDown+c.dotGuid),c.multiple||n(c))}function u(c){var d=c.data;if(13===c.keyCode)d.closed||(n(d),v(d.index,d)),x(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){F.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,0>f&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(h=d.index+1;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}if(0>f||f===d.index)for(h=0;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}}f>=0&&(v(f,d),w(d))}}function v(a,b,c,d){var e=b.$items.eq(a),f=b.$options.eq(a),g=e.hasClass(D.item_selected),h=e.hasClass(D.item_disabled);if(!h)if(b.multiple)if(c&&b.lastIndex!==!1){var i=b.lastIndex>a?a:b.lastIndex,j=(b.lastIndex>a?b.lastIndex:a)+1;b.$options.prop("selected",null),b.$items.filter(C.item_selected).removeClass(D.item_selected),b.$options.slice(i,j).not("[disabled]").prop("selected",!0),b.$items.slice(i,j).not(C.item_disabled).addClass(D.item_selected)}else d?(g?(f.prop("selected",null),e.removeClass(D.item_selected)):(f.prop("selected",!0),e.addClass(D.item_selected)),b.lastIndex=a):(b.$options.prop("selected",null),b.$items.filter(C.item_selected).removeClass(D.item_selected),f.prop("selected",!0),e.addClass(D.item_selected),b.lastIndex=a);else if(a>-1&&a<b.$items.length){if(a!==b.index){var k=f.data("label")||e.html();b.$selected.html(k).removeClass(C.item_placeholder),b.$items.filter(C.item_selected).removeClass(D.item_selected),b.$el[0].selectedIndex=a,e.addClass(D.item_selected),b.index=a}}else""!==b.label&&b.$selected.html(b.label)}function w(b){var d=b.$items.eq(b.index),e=b.index>=0&&!d.hasClass(D.item_placeholder)?d.position():{left:0,top:0},f=(b.$wrapper.outerHeight()-d.outerHeight())/2;a.fn.fsScrollbar!==c?b.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",b.$wrapper.find(".fs-scrollbar-content").scrollTop()+e.top):b.$wrapper.scrollTop(b.$wrapper.scrollTop()+e.top-f)}function x(a){a.links?y(a):a.$el.trigger(E.raw.change,[!0])}function y(a){var b=a.$el.val();a.external?G.open(b):G.location.href=b}function z(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}function A(a){return"string"==typeof a?a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):a}var B=b.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,trim:0},methods:{_setup:d,_construct:e,_destruct:f,disable:g,enable:h,update:i,open:m,close:n},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),C=B.classes,D=C.raw,E=B.events,F=B.functions,G=b.window,H=(b.$window,b.document),I=null}(jQuery,Formstone);