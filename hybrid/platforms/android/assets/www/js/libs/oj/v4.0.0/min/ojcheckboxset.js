/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox","ojs/ojoption"],function(a,g){(function(){a.ib("oj.ojCheckboxset",g.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:!1,labelledBy:null,required:!1,value:void 0},refresh:function(){this._super();this.sb()},widget:function(){return this.u1a},validate:a.ia.validate,rh:function(b,c){var e=[],f;f=[{wa:"disabled",ef:!0},{wa:"title"},{wa:"required",Pj:!0,ef:!0}];this._super(b,
c);this.Y()||a.ia.Ur(f,c,this);this.Y()?this.FZ(this.options.value):void 0===c.value?(this.og=this.xP(),f=this.og.filter(":checked"),0<f.length&&(f.each(function(){e.push(g(this).val())}),this.option("value",e,{_context:{gd:!0,ob:!0}})),void 0===this.options.value&&(this.options.value=[])):this.FZ(this.options.value)},qc:function(){var a=this.element;this._super();if(a.is("fieldset"))throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");a.uniqueId();this.qr();this.og=this.xP();
this.og._ojRadioCheckbox().attr("data-oj-internal","");this.u1a=a.addClass("oj-checkboxset oj-component").attr("role","group");g(a.get(0).childNodes).filter(function(){return this.getAttribute&&"contextMenu"===this.getAttribute("slot")?!1:!0}).wrapAll("\x3cdiv class\x3d'oj-checkboxset-wrapper'\x3e\x3c/div\x3e");this._on(this.qt);this.sb()},cY:function(){this.qr();this.og=this.xP();this.og.filter(".oj-checkbox").each(function(){var a=void 0!==g(this).attr("disabled")?!!g(this).prop("disabled"):!1;
g(this)._ojRadioCheckbox("option","disabled",a)});this.og.not(".oj-checkbox")._ojRadioCheckbox()},Focus:function(){this.ve().first().focus();return!0},fY:function(){},Li:function(){return this.options.required},Be:a.ia.Be,Fn:a.ia.Fn,qr:function(){if(this.Y()){var a,c,e=this.Uq.bind(this),f=this.element.children("oj-option");if(0<f.length)for(a=0,c=f.length;a<c;a++)f[a].customOptionRenderer=e;f=this.element.children(".oj-checkboxset-wrapper").find("oj-option");if(0<f.length)for(a=0,c=f.length;a<c;a++)f[a].customOptionRenderer=
e}},Uq:function(a){var c,e,f,h="OJ-CHECKBOXSET"==a.parentNode.nodeName;g(a).uniqueId();var k=a.getAttribute("id"),l=k+"|cb";h?(c=document.createElement("span"),e=document.createElement("input"),f=document.createElement("label"),c.setAttribute("class","oj-choice-item"),e.setAttribute("type","checkbox"),e.setAttribute("id",l),f.setAttribute("for",l),a.parentElement.insertBefore(c,a),f.appendChild(a),c.appendChild(e),c.appendChild(f)):e=document.getElementById(l);c=this.element[0].id;f=a.getAttribute("aria-label");
l=a.getAttribute("aria-labelledby");e.setAttribute("data-oj-option-id",k);c&&""!=c?e.setAttribute("name",c):e.removeAttribute("name");f&&""!=f?e.setAttribute("aria-label",f):e.removeAttribute("aria-label");l&&""!=l?e.setAttribute("aria-labelledby",l):e.removeAttribute("aria-labelledby");a.disabled?e.setAttribute("disabled",!0):e.removeAttribute("disabled");h||g(e)._ojRadioCheckbox("option","disabled",a.disabled)},Mj:a.ia.Mj,xP:function(){var b;b=this.element.find("input[type\x3dcheckbox]:first");
0===b.length&&a.D.warn("Could not find any input type\x3dcheckbox within this element");b=b.attr("name");return void 0===b?(b=this.element.find("input[type\x3dcheckbox]"),b.not("[name]")):this.element.find("input[type\x3dcheckbox][name\x3d"+b+"]")},Mi:function(a,c,e){a=this.element.find("input[type\x3dcheckbox]:tabbable").first();this.Oi(c,e,{launcher:a})},_GetMessagingLauncherElement:function(){return this.widget()},sb:function(){this.ow(this.options.disabled);null!==this.og&&(1===this.og.length?
this.element.addClass("oj-checkboxset-single"):this.element.removeClass("oj-checkboxset-single"));this.element.hasClass("oj-choice-direction-column")||this.element.hasClass("oj-choice-direction-row")||this.element.addClass("oj-choice-direction-column");this.Be(this.options.required);this.Mj(null,this.options.labelledBy,this.widget())},qt:{change:function(a){this.KN(a)}},FZ:function(a){void 0===a?this.option("value",[],{_context:{gd:!0,ob:!0}}):this.qFa(a)},qFa:function(a){if(!Array.isArray(a))throw Error("Invalid 'value' set on JET Checkboxset: "+
a+".It must be an Array. ");},KN:function(a){var d;d=this.og;0<d.length&&d.each(function(){this===a.target&&g(this)._ojRadioCheckbox("setSelectedClass",a.target.checked)});d=this.Ki();this.jc(d,a,c)},Ki:function(){return this.Zu()},xk:function(a){var c,e=this.og.length,f,h;this.FZ(a);if(null===a||void 0===a||0===a.length)this.og._ojRadioCheckbox("option","checked",!1);else for(c=0;c<e;c++){f=this.og[c];h=g(f);f=this.Ps(f);f=this.hba(a,f);var k=h._ojRadioCheckbox("option","checked");-1!==f?k||h._ojRadioCheckbox("option",
"checked",!0):k&&h._ojRadioCheckbox("option","checked",!1)}},Zu:function(){var a=this,c=[],e=this.og.filter(":checked");if(0===e.length)return[];e.each(function(){c.push(a.Ps(this))});return c},hba:function(b,c){var e=b.indexOf(c),f;if(-1==e){f=b.length;for(var g=0;g<f;g++)if(a.f.Nb(b[g],c)){e=g;break}}return e},Ps:function(a){var c;this.Y()?(a=document.getElementById(a.getAttribute("data-oj-option-id")))&&(c=a.value):c=a.value;return c},_GetDefaultStyleClass:function(){return"oj-checkboxset"},ve:function(){null==
this.og&&(this.og=this.xP());return this.og},gy:function(){return!0},sg:a.ia.sg,ow:function(a){a=!!a;this.og.each(function(){g(this).data("oj-_ojRadioCheckbox").WG(a)});this.og._ojRadioCheckbox("refreshDisabled")},_setOption:function(a,c,e){var f=this.options.labelledBy;this._super(a,c,e);switch(a){case "disabled":this.ow(c);break;case "labelledBy":this.Mj(f,c,this.widget())}},Hs:function(a,c,e){this._superApply(arguments);switch(a){case "required":this.sg(a)}},getNodeBySubId:function(a){var c=this._super(a),
e,f;if(!c)switch(e=this.og.get(),f=a.subId,f){case "oj-checkboxset-inputs":c=e;break;case "oj-checkboxset-checkbox":if(a=a.value,"undefined"!=typeof a){f=e.length;var g;g=-1;var k=[];for(g=0;g<f;g++)k[g]=this.Ps(e[g]);g=this.hba(k,a);-1!==g&&(c=e[g])}}return c||null},getSubIdByNode:function(a){for(var c=this.ve()[0].parentElement.parentElement.parentElement,e=a;e&&e!=c;){"LABEL"==e.nodeName&&(e=document.getElementById(e["for"]));if("INPUT"==e.nodeName)return{subId:"oj-checkboxset-checkbox",value:this.Ps(e)};
e=e.parentElement}return this._super(a)},_destroy:function(){var a=this._super(),c=this.element[0].firstElementChild;this.og&&this.og._ojRadioCheckbox("destroy");g(c).contents().unwrap();return a}});var c={du:!1}})();a.J.$a("oj-checkboxset","editableValue",{properties:{disabled:{type:"boolean"},labelledBy:{type:"string"},required:{type:"boolean"},value:{type:"Array"}},methods:{validate:{}},extension:{Ya:"ojCheckboxset"}});a.J.register("oj-checkboxset",{metadata:a.J.getMetadata("oj-checkboxset")})});