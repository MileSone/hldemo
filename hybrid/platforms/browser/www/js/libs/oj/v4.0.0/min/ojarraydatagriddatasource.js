/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a){a.Db=function(g,c){if(!(g instanceof Array)&&"function"!=typeof g&&"function"!=typeof g.h4a)throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");this.fB=this.dKa(c);null!=c&&(this.columns=c.columns,this.sortCriteria=c.initialSort);a.Db.O.constructor.call(this,g)};o_("ArrayDataGridDataSource",a.Db,a);a.f.ya(a.Db,a.Lu,"oj.ArrayDataGridDataSource");a.Db.prototype.Init=function(){null==this.columns&&(this.columns=
this.KIa(this.ho()));this.LNa();"function"==typeof this.data&&this.data.subscribe(this.rUa.bind(this),null,"arrayChange");a.Db.O.Init.call(this)};a.f.j("ArrayDataGridDataSource.prototype.Init",{Init:a.Db.prototype.Init});a.Db.prototype.eo=null;a.f.j("ArrayDataGridDataSource.prototype.comparator",{eo:a.Db.prototype.eo});a.Db.prototype.sortCriteria=null;a.f.j("ArrayDataGridDataSource.prototype.sortCriteria",{sortCriteria:a.Db.prototype.sortCriteria});a.Db.prototype.dKa=function(a){if(null!=a&&null!=
a.rowHeader)if(a=a.rowHeader,"object"===typeof a){if(null!=a["default"]&&"none"==a["default"])return}else if(null!=a)return a;return"m_defaultIndex"};a.Db.prototype.LNa=function(){var a;a=this.ho();for(this.KA=0;this.KA<a.length;this.KA+=1)a[this.KA].ojKey=this.KA.toString()};a.Db.prototype.KIa=function(a){var c,b;if("number"!==typeof a.length||0===a.length)return[];b=[];for(c in a[0])a[0].hasOwnProperty(c)&&(void 0!=this.fB&&c==this.fB||b.push(c));return b};a.Db.prototype.getCount=function(a){return"row"===
a?this.ww():"column"===a?this.columns.length:0};a.f.j("ArrayDataGridDataSource.prototype.getCount",{getCount:a.Db.prototype.getCount});a.Db.prototype.getCountPrecision=function(){return"exact"};a.f.j("ArrayDataGridDataSource.prototype.getCountPrecision",{getCountPrecision:a.Db.prototype.getCountPrecision});a.Db.prototype.w0=function(a,c){var b;if("row"===a){if(void 0==this.fB)return null;if("m_defaultIndex"==this.fB)return this.jQ(c);b=this.ho();return b[c][this.fB]}if("column"===a)return this.columns[c]};
a.Db.prototype.lJa=function(a,c){var b;if("row"===a)return{key:this.jQ(c)};if("column"===a)return b=this.w0(a,c),null!=this.sortCriteria&&this.sortCriteria.key===b?{key:this.w0(a,c),sortDirection:this.sortCriteria.direction}:{key:b}};a.Db.prototype.fetchHeaders=function(g,c,b){var d,e,f,h;d=g.axis;e=g.start;f=g.count;e=Math.max(0,e);"column"===d?f=Math.min(this.columns.length,e+f):(h=this.ho(),f=void 0===this.fB?e:Math.min(h.length,e+f));d=new a.hj(e,f,d,this);null!=c&&null!=c.success&&(null==b&&
(b={}),c.success.call(b.success,d,g,null))};a.f.j("ArrayDataGridDataSource.prototype.fetchHeaders",{fetchHeaders:a.Db.prototype.fetchHeaders});a.Db.prototype.CIa=function(a,c){var b=this.columns[c];return this.ho()[a][b]};a.Db.prototype.QSa=function(a,c,b){this.ho()[a][this.columns[c]]=b};a.Db.prototype.DIa=function(a,c){return{keys:{row:this.jQ(a),column:this.columns[c]}}};a.Db.prototype.fetchCells=function(g,c,b){var d,e,f,h,k,l;for(d=0;d<g.length;d+=1)e=g[d],"row"===e.axis?(f=e.start,h=Math.min(this.ww(),
f+e.count)):"column"===e.axis&&(k=e.start,l=Math.min(this.columns.length,k+e.count));void 0===h||void 0===l?null!=c&&null!=c.error&&(null==b&&(b={}),c.error.call(b.error)):(d=new a.gj(f,h,k,l,this),null!=c&&null!=c.success&&(null==b&&(b={}),c.success.call(b.success,d,g)))};a.f.j("ArrayDataGridDataSource.prototype.fetchCells",{fetchCells:a.Db.prototype.fetchCells});a.Db.prototype.keys=function(a){var c=a.row,b=a.column;return new Promise(function(a){a({row:this.jQ(c),column:this.columns[b]})}.bind(this))};
a.f.j("ArrayDataGridDataSource.prototype.keys",{keys:a.Db.prototype.keys});a.Db.prototype.indexes=function(a){var c=a.row,b=a.column;return new Promise(function(a){a({row:this.iQ(c),column:this.columns.indexOf(b)})}.bind(this))};a.f.j("ArrayDataGridDataSource.prototype.indexes",{indexes:a.Db.prototype.indexes});a.Db.prototype.sort=function(a,c,b){var d=[],e=[],f;null!=c&&null==b&&(b={});void 0==this.aB&&(this.ZPa=this.sortCriteria,this.aB=this.data.slice());null==a?a=this.sortCriteria:this.sortCriteria=
a;if(null==a)this.f4(c,b);else if(f=a.axis,a=a.key,"column"===f)this.ho().sort(this.hI()),null!=c&&null!=c.success&&c.success.call(b.success);else if("row"===f){a=this.iQ(a);for(f=0;f<this.columns.length;f+=1)d[f]=this.ho()[a][this.columns[f]];d.sort(this.hI());for(f=0;f<this.columns.length;f+=1)e[f]=this.columns[d.indexOf(this.ho()[a][this.columns[f]])];this.qva=this.columns;this.columns=e;null!=c&&null!=c.success&&c.success.call(b.success)}else null!==c&&null!=c.error&&c.error.call(b.error,"Invalid axis value")};
a.f.j("ArrayDataGridDataSource.prototype.sort",{sort:a.Db.prototype.sort});a.Db.prototype.f4=function(a,c){null!=this.aB&&(this.data=this.aB,this.sortCriteria=this.ZPa);null!=this.qva&&(this.columns=this.qva);null!=a&&null!=a.success&&a.success.call(c.success)};a.Db.prototype.getCapability=function(a){return"sort"===a?"column":"move"===a?"row":null};a.f.j("ArrayDataGridDataSource.prototype.getCapability",{getCapability:a.Db.prototype.getCapability});a.Db.prototype.hI=function(){var a,c,b;a=this.comparator;
return null==a?(a=this.sortCriteria.key,c=this.sortCriteria.direction,b=this.sortCriteria.axis,this.APa(c,a,b)):a};a.Db.prototype.APa=function(a,c,b){if("ascending"===a)return function(a,e){var f,g;void 0!=c&&"column"==b&&(a instanceof Array?(a=a[parseInt(c,10)],e=e[parseInt(c,10)]):(a=a[c],e=e[c]));f=isNaN(a);g=isNaN(e);a instanceof Date&&(a=a.toISOString(),f=!0);e instanceof Date&&(e=e.toISOString(),g=!0);return f&&g?a<e?-1:a===e?0:1:f?1:g?-1:a-e};if("descending"===a)return function(a,e){var f,
g;void 0!=c&&"column"==b&&(a instanceof Array?(a=a[parseInt(c,10)],e=e[parseInt(c,10)]):(a=a[c],e=e[c]));f=isNaN(a);g=isNaN(e);a instanceof Date&&(a=a.toISOString(),f=!0);e instanceof Date&&(e=e.toISOString(),g=!0);return f&&g?a>e?-1:a===e?0:1:f?-1:g?1:e-a}};a.Db.prototype.move=function(a,c){var b,d;b=this.iQ(a);d=this.data.splice(b,1)[0];this.data instanceof Array&&(b=this.br("delete",a,null,b,-1,!0),this.handleEvent("change",b));null===c?(this.data.push(d),b=this.data.length-1):(b=this.iQ(c),this.data.splice(b,
0,d));this.data instanceof Array&&(b=this.br("insert",a,null,b,-1),this.handleEvent("change",b));null!=this.aB&&(this.aB=this.data.slice())};a.f.j("ArrayDataGridDataSource.prototype.move",{move:a.Db.prototype.move});a.Db.prototype.moveOK=function(){return"valid"};a.f.j("ArrayDataGridDataSource.prototype.moveOK",{moveOK:a.Db.prototype.moveOK});a.Db.prototype.ho=function(){return"function"===typeof this.data?this.data():this.data};a.Db.prototype.iQ=function(a){var c,b=this.ho();for(c=0;c<b.length;c++)if(b[c].ojKey===
a)return c;return-1};a.Db.prototype.jQ=function(a){var c=this.ho();return c[a]?c[a].ojKey:null};a.Db.prototype.br=function(a,c,b,d,e,f){var h={source:this};h.operation=a;h.keys={row:c,column:b};h.indexes={row:d,column:e};h.silent=f;return h};a.Db.prototype.rUa=function(a){var c,b,d,e=!1;b=!1;var f=[],h=[];for(c=0;c<a.length;c++){d=a[c];if(void 0!==d.moved){b=!0;d=this.br("refresh",null,null);this.handleEvent("change",d);break}"added"===d.status&&(e=!0)}if(!b){for(c=0;c<a.length;c++)d=a[c],"deleted"===
d.status&&(b=d.value,d=d.index,b=b.ojKey,f.push({row:b,column:-1}),h.push({row:d,column:-1}));0<f.length&&(d={source:this,operation:"delete",keys:f,indexes:h,silent:e},this.handleEvent("change",d));for(c=0;c<a.length;c++)d=a[c],"added"===d.status&&(b=d.value,d=d.index,null==b.ojKey&&(b.ojKey=this.KA.toString(),this.KA++),b=b.ojKey,d=this.br("insert",b,null,d,-1),this.handleEvent("change",d))}null!=this.aB&&(this.aB=this.data.slice())};a.Db.prototype.ww=function(){return this.ho().length};a.Db.prototype.Ssa=
function(){return this.fB};a.f.j("ArrayDataGridDataSource.prototype.getRowHeaderKey",{Ssa:a.Db.prototype.Ssa});a.Db.prototype.Pw=function(){return this.columns};a.f.j("ArrayDataGridDataSource.prototype.getColumns",{Pw:a.Db.prototype.Pw});a.Db.prototype.getData=function(){return this.data};a.f.j("ArrayDataGridDataSource.prototype.getData",{getData:a.Db.prototype.getData});a.hj=function(a,c,b,d){this.Qd=a;this.Oh=c;this.nua=b;this.po=d};o_("ArrayHeaderSet",a.hj,a);a.hj.prototype.getData=function(g,
c){if(null==this.po)return null;a.C.assert(g<=this.Oh&&g>=this.Qd,"index out of bounds");a.C.assert(null==c||0==c,"level out of bounds");return this.po.w0(this.nua,g)};a.f.j("ArrayHeaderSet.prototype.getData",{getData:a.hj.prototype.getData});a.hj.prototype.getMetadata=function(g,c){if(null==this.po)return null;a.C.assert(g<=this.Oh&&g>=this.Qd,"index out of bounds");a.C.assert(null==c||0==c,"level out of bounds");return this.po.lJa(this.nua,g)};a.f.j("ArrayHeaderSet.prototype.getMetadata",{getMetadata:a.hj.prototype.getMetadata});
a.hj.prototype.getLevelCount=function(){return 0<this.getCount()?1:0};a.f.j("ArrayHeaderSet.prototype.getLevelCount",{getLevelCount:a.hj.prototype.getLevelCount});a.hj.prototype.getExtent=function(g,c){a.C.assert(g<=this.Oh&&g>=this.Qd,"index out of bounds");a.C.assert(null==c||0==c,"level out of bounds");return{extent:1,more:{before:!1,after:!1}}};a.f.j("ArrayHeaderSet.prototype.getExtent",{getExtent:a.hj.prototype.getExtent});a.hj.prototype.getDepth=function(g,c){a.C.assert(g<=this.Oh&&g>=this.Qd,
"index out of bounds");a.C.assert(null==c||0==c,"level out of bounds");return 1};a.f.j("ArrayHeaderSet.prototype.getDepth",{getDepth:a.hj.prototype.getDepth});a.hj.prototype.getCount=function(){return null==this.po?0:Math.max(0,this.Oh-this.Qd)};a.f.j("ArrayHeaderSet.prototype.getCount",{getCount:a.hj.prototype.getCount});a.hj.prototype.getStart=function(){return this.Qd};a.f.j("ArrayHeaderSet.prototype.getStart",{getStart:a.hj.prototype.getStart});a.gj=function(a,c,b,d,e){this.Za=a;this.Pa=c;this.fs=
b;this.NA=d;this.po=e};o_("ArrayCellSet",a.gj,a);a.gj.prototype.getData=function(a){var c,b,d;c=this;b=a.row;d=a.column;a={};Object.defineProperty(a,"data",{enumerable:!0,get:function(){return c.po.CIa(b,d)},set:function(a){c.po.QSa(b,d,a)}});return a};a.f.j("ArrayCellSet.prototype.getData",{getData:a.gj.prototype.getData});a.gj.prototype.getMetadata=function(a){return this.po.DIa(a.row,a.column)};a.f.j("ArrayCellSet.prototype.getMetadata",{getMetadata:a.gj.prototype.getMetadata});a.gj.prototype.getStart=
function(a){return"row"==a?this.Za:"column"==a?this.fs:-1};a.f.j("ArrayCellSet.prototype.getStart",{getStart:a.gj.prototype.getStart});a.gj.prototype.getCount=function(a){return"row"===a?Math.max(0,this.Pa-this.Za):"column"===a?Math.max(0,this.NA-this.fs):0};a.f.j("ArrayCellSet.prototype.getCount",{getCount:a.gj.prototype.getCount});a.gj.prototype.getExtent=function(){return{row:{extent:1,more:{before:!1,after:!1}},column:{extent:1,more:{before:!1,after:!1}}}};a.f.j("ArrayCellSet.prototype.getExtent",
{getExtent:a.gj.prototype.getExtent});a.gj.prototype.RE=function(){return this.Za};a.f.j("ArrayCellSet.prototype.getStartRow",{RE:a.gj.prototype.RE});a.gj.prototype.QE=function(){return this.fs};a.f.j("ArrayCellSet.prototype.getStartColumn",{QE:a.gj.prototype.QE})});