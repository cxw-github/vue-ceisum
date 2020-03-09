(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=h(i(17)),r=h(i(1)),n=h(i(2)),s=h(i(18)),l=h(i(19)),o=h(i(3)),d=h(i(85)),g=h(i(68));function h(t){return t&&t.__esModule?t:{default:t}}var u={gis:null,haulHandle:null,stretchHandle:null,reset:function(){this.haulHandle=this.haulHandle&&this.haulHandle.destroy(),this.stretchHandle=this.stretchHandle&&this.stretchHandle.destroy()},destroy:function(t,e){var i=new Cesium.ScreenSpaceEventHandler(this.gis.scene.canvas);this.haulHandle=t&&this.haulHandle&&this.haulHandle.destroy()||i,this.stretchHandle=e&&this.stretchHandle&&this.stretchHandle.destroy()||i}},c={gis:null,points:[],index:null,dragPoint:null,movePoint:null,moveDistance:function(){if(this.movePoint){if(Cesium.Cartesian3.equals(this.movePoint,this.dragPoint))return{longitude:0,latitude:0};var t=this.gis.scene.globe.ellipsoid,e=new Cesium.Cartographic,i=new Cesium.Cartographic;return Cesium.Cartographic.fromCartesian(this.dragPoint,t,e),Cesium.Cartographic.fromCartesian(this.movePoint,t,i),this.dragPoint=this.movePoint,{longitude:i.longitude-e.longitude,latitude:i.latitude-e.latitude}}},dragPointCallback:function(){if(this.dragPoint)return this.dragPoint},haulAreaCallback:function(){if(this.points.length){var t=this.moveDistance(),e=this.gis.scene.globe.ellipsoid;if(t)return this.points.forEach(function(i,a){var r=Cesium.Cartographic.fromCartesian(i,e);r.longitude+=t.longitude,r.latitude+=t.latitude,this.points[a]=Cesium.Cartesian3.fromRadians(r.longitude,r.latitude,r.height,e)},this),this.points}},stretchAreaCallback:function(){if(this.points.length){var t=this.moveDistance(),e=this.gis.scene.globe.ellipsoid;if(t){var i=Cesium.Cartographic.fromCartesian(this.points[this.index],e);return i.longitude+=t.longitude,i.latitude+=t.latitude,this.points[this.index]=Cesium.Cartesian3.fromRadians(i.longitude,i.latitude,i.height,e),this.points}}}},p=function(t){function e(t){(0,r.default)(this,e);var i=(0,s.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t));return i.gis=t,u.gis=t,c.gis=t,i.dragPoint=null,i.instant=null,i}return(0,l.default)(e,t),(0,n.default)(e,[{key:"initial",value:function(){this.viewer=this.gis.viewer,this.scene=this.gis.scene,this.clock=this.gis.clock,this.camera=this.gis.camera}},{key:"stopPropagation",value:function(t){this.completeStatus(),(t=window.event||t)&&(t.stopPropagation?t.stopPropagation():t.cancelBubble=!0)}},{key:"completeStatus",value:function(){var t=this;this.gis.isToolWight=!0,this.dragPoint&&(Array.isArray(this.dragPoint)&&this.dragPoint.forEach(function(e){return t.gis.removeOverlayById(e.id)})||this.gis.removeOverlayById(this.dragPoint.id))}},{key:"haulTool",value:function(t){var e=this;this.stopPropagation(t),u.destroy(!1,!0),Array.isArray(this.dragPoint)&&this.dragPoint.forEach(function(t){return e.gis.removeOverlayById(t.id)}),this.dragPoint=null;var i=!1,a=this.scene.globe.ellipsoid;u.haulHandle.setInputAction(function(t){this.dragPoint&&this.gis.removeOverlayById(this.dragPoint.id);var e=this.scene.pick(t.position);if(e){this.dragTarget=e.id;var i=this.dragTarget.type;if("AREA"!==i&&"STRIP"!==i)return;c.dragPoint=this.dragTarget.position.getValue(this.clock.currentTime),this.dragPoint=this.gis.addPoint(Cesium.createGuid(),c.dragPoint,"拖动点","","#FF4500",1,"",!1,2),this.dragPoint.point.pixelSize._value=8,this.dragPoint.type=void 0}}.bind(this),Cesium.ScreenSpaceEventType.LEFT_CLICK),u.haulHandle.setInputAction(function(t){if(this.dragPoint){var e=this.scene.pick(t.position);if(e){if((e=e.id).id!==this.dragPoint.id)return;this.gis.disableDefaultEventHandlers(!1,!1,!1,!1,!1),i=!0,c.movePoint=this.camera.pickEllipsoid(t.position,a)||c.movePoint,this.instant||(this.dragTarget.polygon?c.points=this.dragTarget.polygon.hierarchy._value:this.dragTarget.rectangle&&(c.points=o.default.getRect4PeakCartesianByRectangle(this.dragTarget)),this.instant=this.addAreaCallback(function(){return o.default.getCenterCartesian(c.points)},c.haulAreaCallback.bind(c),"","","#FFFF00",.2,!1),this.viewer.entities.add(this.instant))}}}.bind(this),Cesium.ScreenSpaceEventType.LEFT_DOWN),u.haulHandle.setInputAction(function(t){i&&(c.movePoint=this.camera.pickEllipsoid(t.endPosition,a)||c.movePoint)}.bind(this),Cesium.ScreenSpaceEventType.MOUSE_MOVE),u.haulHandle.setInputAction(function(t){if(i){if(i=!1,c.movePoint=this.camera.pickEllipsoid(t.position,a)||c.movePoint,this.dragTarget){var e=this.dragTarget.type;if("AREA"!==e&&"STRIP"!==e)return;this.gis.removeOverlayById(this.dragTarget.id);var r=void 0,n=void 0,s=void 0,l=void 0,o=void 0,d=void 0;this.dragTarget.polygon?(r=!!this.dragTarget._label&&this.dragTarget._label._show._value,n=this.dragTarget._label?this.dragTarget._label._translucencyByDistance._value.nearValue:0,s="rgb("+255*(l=this.dragTarget._polygon._material._color._value).red+","+255*l.green+","+255*l.blue+")",o=this.dragTarget._polygon._fill._value):this.dragTarget.rectangle?(r=!!this.dragTarget._label&&this.dragTarget._label._show._value,n=this.dragTarget._label?this.dragTarget._label._translucencyByDistance._value.nearValue:0,s="rgb("+255*(l=this.dragTarget.rectangle._material._color._value).red+","+255*l.green+","+255*l.blue+")",o=this.dragTarget.rectangle._fill._value):this.dragTarget.ellipse&&(s="rgb("+255*(l=this.dragTarget.ellipse._material._color._value).red+","+255*l.green+","+255*l.blue+")",d={major:this.dragTarget.ellipse._semiMajorAxis._value,minor:this.dragTarget.ellipse._semiMinorAxis._value});var h=void 0;"AREA"===e?h=this.gis.addPolygon(this.dragTarget.id,c.points,this.dragTarget.name,this.dragTarget.description,o,s,l.alpha,"",r,n):"STRIP"===e&&(h=this.gis.addStrip(this.dragTarget.id,c.points,this.dragTarget.name,this.dragTarget.description,d||null,s)),h&&this.gis.event.fireEvent("onDragged",new g.default(h)),this.gis.removeOverlayById(this.dragPoint.id),this.viewer.entities.remove(this.instant),this.dragPoint=null,this.dragTarget=null,this.instant=null,c.movePoint=null,c.dragPoint=null,c.points=[]}this.gis.disableDefaultEventHandlers(!0,!0,!0,!0,!0)}}.bind(this),Cesium.ScreenSpaceEventType.LEFT_UP)}},{key:"stretchTool",value:function(t){this.stopPropagation(t),u.destroy(!0,!1),this.dragPoint&&!Array.isArray(this.dragPoint)&&this.gis.removeOverlayById(this.dragPoint.id),this.dragPoint=[];var e=!1;u.stretchHandle.setInputAction(function(t){var e=this;this.dragPoint.length&&(this.dragPoint.forEach(function(t){return e.gis.removeOverlayById(t.id)}),this.dragPoint=[]);var i=this.scene.pick(t.position);if(i){this.dragTarget=i.id;var a=this.dragTarget.type;if("AREA"!==a&&"STRIP"!==a)return;this.dragTarget.polygon?c.points=this.dragTarget.polygon.hierarchy._value:this.dragTarget.rectangle&&(c.points=o.default.getRect4PeakCartesianByRectangle(this.dragTarget)),c.points.forEach(function(t){var i=e.gis.addPoint(Cesium.createGuid(),t,"拉伸点","","#FF4500",1,"",!1,2);i.type=void 0,i.point.pixelSize._value=8,e.dragPoint.push(i)},this)}}.bind(this),Cesium.ScreenSpaceEventType.LEFT_CLICK),u.stretchHandle.setInputAction(function(t){var i=this.scene.pick(t.position);if(i){i=i.id;var a=this.dragPoint.indexOf(i);if(-1===a)return;e=!0,this.gis.disableDefaultEventHandlers(!1,!1,!1,!1,!1),c.dragPoint=c.points[a],c.index=a,c.movePoint=this.camera.pickEllipsoid(t.position,this.scene.globe.ellipsoid)||c.movePoint,this.instant||(this.dragTarget.polygon?c.points=this.dragTarget.polygon.hierarchy._value:this.dragTarget.rectangle&&(c.points=o.default.getRect4PeakCartesianByRectangle(this.dragTarget)),this.instant=this.addAreaCallback(function(){return o.default.getCenterCartesian(c.points)},c.stretchAreaCallback.bind(c),"","","#FFFF00",.2,!1),this.viewer.entities.add(this.instant))}}.bind(this),Cesium.ScreenSpaceEventType.LEFT_DOWN),u.stretchHandle.setInputAction(function(t){e&&(c.movePoint=this.camera.pickEllipsoid(t.endPosition,this.scene.globe.ellipsoid)||c.movePoint)}.bind(this),Cesium.ScreenSpaceEventType.MOUSE_MOVE),u.stretchHandle.setInputAction(function(t){var i=this;if(e){if(e=!1,c.movePoint=this.camera.pickEllipsoid(t.position,this.scene.globe.ellipsoid)||c.movePoint,this.dragTarget){var a=this.dragTarget.type;if("AREA"!==a&&"STRIP"!==a)return;this.gis.removeOverlayById(this.dragTarget.id);var r=void 0,n=void 0,s=void 0,l=void 0,o=void 0,d=void 0;this.dragTarget.polygon?(r=!!this.dragTarget._label&&this.dragTarget._label._show._value,n=this.dragTarget._label?this.dragTarget._label._translucencyByDistance._value.nearValue:0,s="rgb("+255*(l=this.dragTarget._polygon._material._color._value).red+","+255*l.green+","+255*l.blue+")",o=this.dragTarget._polygon._fill._value):this.dragTarget.rectangle?(r=!!this.dragTarget._label&&this.dragTarget._label._show._value,n=this.dragTarget._label?this.dragTarget._label._translucencyByDistance._value.nearValue:0,s="rgb("+255*(l=this.dragTarget.rectangle._material._color._value).red+","+255*l.green+","+255*l.blue+")",o=this.dragTarget.rectangle._fill._value):this.dragTarget.ellipse&&(s="rgb("+255*(l=this.dragTarget.ellipse._material._color._value).red+","+255*l.green+","+255*l.blue+")",d={major:this.dragTarget.ellipse._semiMajorAxis._value,minor:this.dragTarget.ellipse._semiMinorAxis._value});var h=void 0;"AREA"===a?h=this.gis.addPolygon(this.dragTarget.id,c.points,this.dragTarget.name,this.dragTarget.description,o,s,l.alpha,!1,"blue",r,n):"STRIP"===a&&(h=this.gis.addStrip(this.dragTarget.id,c.points,this.dragTarget.name,this.dragTarget.description,d||null,s)),h&&this.gis.event.fireEvent("onDragged",new g.default(h)),this.dragPoint.forEach(function(t){return i.gis.removeOverlayById(t.id)},this),this.viewer.entities.remove(this.instant),this.dragPoint=[],this.dragTarget=null,this.instant=null,c.movePoint=null,c.dragPoint=null,c.points=[]}this.gis.disableDefaultEventHandlers(!0,!0,!0,!0,!0)}}.bind(this),Cesium.ScreenSpaceEventType.LEFT_UP)}},{key:"stopDrag",value:function(t){this.stopPropagation(t),u.reset(),this.gis.isToolWight=!1}}]),e}(d.default);e.default=p},189:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=g(i(17)),r=g(i(1)),n=g(i(2)),s=g(i(18)),l=g(i(19)),o=g(i(184)),d=g(i(3));function g(t){return t&&t.__esModule?t:{default:t}}var h=function(t){function e(t){(0,r.default)(this,e);var i=(0,s.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t));return i.gis=t,i.dom=null,i}return(0,l.default)(e,t),(0,n.default)(e,[{key:"init",value:function(){var t=this,e=void 0,i=void 0,a=void 0,r=this.gis.config.plugin.type,n=this.gis.pluginManage,s=d.default.createList({id:"Drag",title:"拖拽条带或区域目标",className:"gis-nav-bar clearFix",listClassName:"gis-drag",parent:n.toolBar,onclick:function(s){l.dom.classList.toggle("active"),e=e||r.dateModule&&n.getPlugin("DateTime"),i=i||r.drawModule&&n.getPlugin("DrawTool"),a=a||r.measureModule&&n.getPlugin("MeasureTool"),e&&e.proto.close(),i&&i.proto.close(),a&&a.proto.close(),t.stopDrag(s)}}),l=n.addPlugin({id:"DragTool",title:"拖拽条带或区域目标",className:"gis-tool gis-dragTool",type:"tool",proto:this,parent:s});this.dom=l.dom,this.initial(),this.loadDragToolOperate(l.dom)}},{key:"loadDragToolOperate",value:function(t){d.default.createList({title:"目标拖动",className:"clearFix",listClassName:"gis-haul",parent:t,onclick:this.haulTool.bind(this)}),d.default.createList({title:"目标拉伸",listClassName:"gis-stretch",parent:t,onclick:this.stretchTool.bind(this)}),d.default.createList({title:"停止拖拽",listClassName:"gis-stopDrag",parent:t,onclick:this.stopDrag.bind(this)})}},{key:"close",value:function(){this.dom.classList.remove("active"),this.stopDrag()}},{key:"enable",value:function(t){t=Boolean(t),this.dom.parentNode.style.display=t?"block":"none"}}]),e}(o.default);e.default=h},85:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(i(1)),r=n(i(2));function n(t){return t&&t.__esModule?t:{default:t}}var s=window.Cesium,l=function(){function t(){(0,a.default)(this,t),this.defaultColorValue=function(t,e){return void 0!==t?s.Color.fromCssColorString(t):s.Color.fromCssColorString(e)},this.defaultValue=function(t,e){return void 0!==t?t:e}}return(0,r.default)(t,[{key:"addPointCallback",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments[2],a=arguments[3],r=(arguments[4],arguments[5]),n=arguments[6],l=this.gis.config.site.relative;return n=n&&l+"/images/flag/"+n+".png"||null,new s.Entity({name:e,description:i||"",label:{text:e,font:"28px sans-serif",fillColor:s.Color.DARKTURQUOISE,horizontalOrigin:s.HorizontalOrigin.LEFT,scale:.6,show:this.defaultValue(r,!0),translucencyByDistance:new s.NearFarScalar(295e3,2,3e5,2),scaleByDistance:new s.NearFarScalar(3e6,1.1,525e6,.1)},billboard:{image:n,scale:.5,show:n&&!0},position:new s.CallbackProperty(t,!1),point:{pixelSize:5,color:this.defaultColorValue(a,"#F0F")}})}},{key:"addLineCallback",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments[3],r=arguments[4],n=arguments[5],l=arguments[6],o=this.gis.config.site.relative;return l=l&&o+"/images/flag/"+l+".png"||null,new s.Entity({name:i,description:a||"",label:{text:i,font:"28px sans-serif",fillColor:s.Color.DARKTURQUOISE,horizontalOrigin:s.HorizontalOrigin.LEFT,scale:.6,show:n&&!0,translucencyByDistance:new s.NearFarScalar(295e3,2,3e5,2),scaleByDistance:new s.NearFarScalar(3e6,1.1,525e6,.1)},billboard:{image:l,scale:.5,show:l&&!0},position:new s.CallbackProperty(t,!1),polyline:{positions:new s.CallbackProperty(e,!1),width:2,material:this.defaultColorValue(r,"#FFD700")}})}},{key:"addRectangleCallback",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments[3],r=arguments[4],n=arguments[5],l=arguments[6],o=arguments[7],d=arguments[8],g=this.gis.config.site.relative;return o=o&&g+"/images/flag/"+o+".png"||null,n=n||(0===n?n:.3),d=this.defaultValue(d,!0),new s.Entity({name:i,description:a||"",position:new s.CallbackProperty(t,!1),label:{text:i,font:"28px sans-serif",fillColor:s.Color.DARKTURQUOISE,horizontalOrigin:s.HorizontalOrigin.LEFT,scale:.6,show:l&&!0,translucencyByDistance:new s.NearFarScalar(295e3,2,3e5,2),scaleByDistance:new s.NearFarScalar(3e6,1.1,525e6,.1)},billboard:{image:o,scale:.5,show:o&&!0},rectangle:{coordinates:new s.CallbackProperty(e,!1),fill:d,material:this.defaultColorValue(r,"#0000FF").withAlpha(n),height:-2e4,outline:!0,outlineColor:this.defaultColorValue(r,"#0000FF").withAlpha(n)}})}},{key:"addAreaCallback",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments[3],r=arguments[4],n=arguments[5],l=arguments[6],o=arguments[7],d=this.gis.config.site.relative;return o=o&&d+"/images/flag/"+o+".png"||null,n=n||(0===n?n:.3),new s.Entity({name:i,description:a||"",label:{text:i,font:"28px sans-serif",fillColor:s.Color.DARKTURQUOISE,horizontalOrigin:s.HorizontalOrigin.LEFT,scale:.6,show:l&&!0,translucencyByDistance:new s.NearFarScalar(295e3,2,3e5,2),scaleByDistance:new s.NearFarScalar(3e6,1.1,525e6,.1)},billboard:{image:o,scale:.5,show:o&&!0},position:new s.CallbackProperty(t,!1),polygon:{hierarchy:new s.CallbackProperty(e,!1),fill:!0,material:this.defaultColorValue(r,"#0000FF").withAlpha(n),height:0,outline:!0,outlineWidth:2,outlineColor:this.defaultColorValue(r,"#0000FF").withAlpha(n)}})}},{key:"addMoveTargetPathCallback",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments[4];return new s.Entity({name:i,description:a,label:{text:i,font:"28px sans-serif",fillColor:s.Color.DARKTURQUOISE,horizontalOrigin:s.HorizontalOrigin.LEFT,scale:.6,show:r&&!0,translucencyByDistance:new s.NearFarScalar(295e3,2,3e5,2),scaleByDistance:new s.NearFarScalar(3e6,1.1,525e6,.1)},position:new s.CallbackProperty(t,!1),polyline:{positions:new s.CallbackProperty(e,!1),width:2,material:new s.PolylineOutlineMaterialProperty({color:s.Color.CHARTREUSE,outlineColor:s.Color.BROWN,outlineWidth:2,width:2})}})}}]),t}();e.default=l}}]);