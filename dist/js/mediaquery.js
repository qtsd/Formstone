/*! formstone v0.8.37 [mediaquery.js] 2016-02-04 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(b){b=b||{};for(var c in u)u.hasOwnProperty(c)&&(m[c]=b[c]?a.merge(b[c],m[c]):m[c]);m=a.extend(m,b),m.minWidth.sort(q.sortDesc),m.maxWidth.sort(q.sortAsc),m.minHeight.sort(q.sortDesc),m.maxHeight.sort(q.sortAsc);for(var d in u)if(u.hasOwnProperty(d)){t[d]={};for(var e in m[d])if(m[d].hasOwnProperty(e)){var f=window.matchMedia("("+u[d]+": "+(m[d][e]===1/0?1e5:m[d][e])+m.unit+")");f.addListener(h),t[d][m[d][e]]=f}}h()}function e(a,b,c){var d=p.matchMedia(b),e=j(d.media);s[e]||(s[e]={mq:d,active:!0,enter:{},leave:{}},s[e].mq.addListener(i));for(var f in c)c.hasOwnProperty(f)&&s[e].hasOwnProperty(f)&&(s[e][f][a]=c[f]);i(s[e].mq)}function f(a,b){if(a)if(b){var c=j(b);s[c]&&(s[c].enter[a]&&delete s[c].enter[a],s[c].leave[a]&&delete s[c].leave[a])}else for(var d in s)s.hasOwnProperty(d)&&(s[d].enter[a]&&delete s[d].enter[a],s[d].leave[a]&&delete s[d].leave[a])}function g(){r={unit:m.unit};for(var a in u)if(u.hasOwnProperty(a))for(var c in t[a])if(t[a].hasOwnProperty(c)){var d="Infinity"===c?1/0:parseInt(c,10),e=u[a].indexOf("width")>-1?b.fallbackWidth:b.fallbackHeight,f=a.indexOf("max")>-1;b.support.nativeMatchMedia?t[a][c].matches&&(f?(!r[a]||d<r[a])&&(r[a]=d):(!r[a]||d>r[a])&&(r[a]=d)):f?!r[a]&&d>e&&(r[a]=d):(!r[a]&&0!==r[a]||d>r[a]&&e>d)&&(r[a]=d)}}function h(){g(),o.trigger(n.mqChange,[r])}function i(a){var b=j(a.media),c=s[b],d=a.matches,e=d?n.enter:n.leave;if(c&&(c.active||!c.active&&d)){for(var f in c[e])c[e].hasOwnProperty(f)&&c[e][f].apply(c.mq);c.active=!0}}function j(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}function k(){return r}var l=b.Plugin("mediaquery",{utilities:{_initialize:d,state:k,bind:e,unbind:f},events:{mqChange:"mqchange"}}),m={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},n=a.extend(l.events,{enter:"enter",leave:"leave"}),o=b.$window,p=o[0],q=l.functions,r=null,s=[],t={},u={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}(jQuery,Formstone);