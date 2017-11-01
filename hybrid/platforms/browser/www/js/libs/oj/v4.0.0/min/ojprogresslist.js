/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","ojs/ojcomponentcore","ojs/ojlistview","ojs/ojprogress","ojs/ojcomposite"],function(a,g,c){a.gf.register("oj-progress-status",{view:{inline:"  \x3cdiv data-bind\x3d'visible: ($props.status \x3d\x3d \"queued\")'       class\x3d'oj-progressstatus-cell'\x3e    \x3cdiv class\x3d'oj-component-icon oj-progressstatus-cancel-icon'         role\x3d'img' title\x3d'cancel'\x3e\x3c/div\x3e  \x3c/div\x3e  \x3cdiv data-bind\x3d'visible: ($props.status \x3d\x3d \"loadstarted\")'       class\x3d'oj-progressstatus-cell'\x3e    \x3coj-progress type\x3d'circle' value\x3d'{{$props.progress}}'\x3e    \x3c/oj-progress\x3e  \x3c/div\x3e  \x3cdiv data-bind\x3d'visible: ($props.status \x3d\x3d \"loaded\")'       class\x3d'oj-progressstatus-cell'\x3e    \x3cdiv class\x3d'oj-component-icon oj-progressstatus-done-icon' role\x3d'img' title\x3d'done'\x3e\x3c/div\x3e  \x3c/div\x3e  \x3cdiv data-bind\x3d'visible: ($props.status \x3d\x3d \"errored\" || $props.status \x3d\x3d \"timedout\" || $props.status \x3d\x3d \"aborted\")'       class\x3d'oj-progressstatus-cell'\x3e    \x3cdiv class\x3d'oj-component-icon oj-progressstatus-error-icon' role\x3d'img' title\x3d'error'\x3e\x3c/div\x3e  \x3c/div\x3e"},
metadata:{inline:{properties:{status:{type:"string"},progress:{type:"number"}}}}});a.ph=function(){};o_("ProgressItem",a.ph,a);a.ph.fG={QUEUED:"queued",LOADSTARTED:"loadstarted",ABORTED:"aborted",ERRORED:"errored",TIMEDOUT:"timedout",LOADED:"loaded"};o_("ProgressItem.Status",a.ph.fG,a);a.ph.fa={LOADSTART:"loadstart",PROGRESS:"progress",ABORT:"abort",ERROR:"error",LOAD:"load",TIMEOUT:"timeout",LOADEND:"loadend"};o_("ProgressItem.EventType",a.ph.fa,a);a.gf.register("oj-progress-list",{view:{inline:"\x3coj-list-view data-bind\x3d\"attr: {id: $unique + '_list'}\"              aria-label\x3d'list using array'              data\x3d'{{$props.data}}'              item.renderer\x3d'{{renderer()}}'              selection-mode\x3d'single'\x3e\x3c/oj-list-view\x3e\x3cscript type\x3d'text/html' data-bind\x3d\"attr: {id: tempId}\"\x3e  \x3cli class\x3d'oj-progresslist-item' tabindex\x3d'0'\x3e    \x3coj-progress-item data\x3d'{{$data}}'\x3e    \x3c/oj-progress-item\x3e  \x3c/li\x3e\x3c/script\x3e"},
viewModel:{inline:function(b){var c=this;c.tempId=b.unique+"_templ";c.renderer=function(){return a.ZM.Np(c.tempId,!0)}}},metadata:{inline:{properties:{data:{type:"object"}}}}});a.gf.register("oj-progress-item",{view:{inline:"    \x3cdiv class\x3d'oj-flex oj-sm-justify-content-space-between'\x3e      \x3cdiv class\x3d'oj-flex-item oj-flex oj-sm-flex-direction-column'\x3e        \x3cspan data-bind\x3d'text: $props.data.name' class\x3d'oj-progresslist-name'\x3e\x3c/span\x3e        \x3cdiv data-bind\x3d'text: message' class\x3d'oj-progresslist-error-message'\x3e\x3c/div\x3e      \x3c/div\x3e      \x3cdiv class\x3d'oj-flex oj-sm-align-items-center'\x3e        \x3coj-slot name\x3d'itemInfo'\x3e          \x3cdiv class\x3d'oj-flex-item oj-flex oj-progresslist-info'\x3e            \x3cspan data-bind\x3d'text: $data.getSizeInBKMGT($props.data.size)'\x3e\x3c/span\x3e          \x3c/div\x3e        \x3c/oj-slot\x3e        \x3cdiv class\x3d'oj-flex-item oj-flex'\x3e          \x3coj-progress-status status\x3d'{{status}}'                              progress\x3d'{{progress}}'\x3e          \x3c/oj-progress-status\x3e        \x3c/div\x3e      \x3c/div\x3e    \x3c/div\x3e"},
viewModel:{inline:function(b){function d(b){b.removeEventListener(a.ph.fa.PROGRESS,f,!1);b.removeEventListener(a.ph.fa.ERROR,g,!1);b.removeEventListener(a.ph.fa.TIMEOUT,g,!1);b.removeEventListener(a.ph.fa.ABORT,g,!1);b.removeEventListener(a.ph.fa.LOAD,k,!1)}var e=this,f,g,k;b.props.then(function(b){b=b.data;b.addEventListener(a.ph.fa.PROGRESS,f);b.addEventListener(a.ph.fa.ERROR,g);b.addEventListener(a.ph.fa.TIMEOUT,g);b.addEventListener(a.ph.fa.ABORT,g);b.addEventListener(a.ph.fa.LOAD,k)});f=function(b){b.target&&
b.lengthComputable&&(e.status(a.ph.fG.LOADSTARTED),e.progress(parseInt(b.loaded/b.total*100,10)))};g=function(b){var c=b.target;c&&(e.message(b.error.message),e.status(a.ph.fG.ERRORED),d(c))};k=function(b){if(b=b.target)e.status(a.ph.fG.LOADED),d(b)};e.status=c.observable(a.ph.fG.QUEUED);e.progress=c.observable(-1);e.message=c.observable("");var l=["B","KB","MB","GB","TB"];e.getSizeInBKMGT=function(a){if(isNaN(a))return null;var b;for(b=0;1024<=a&&4>b;b++)a/=1024;return a.toFixed(2)+l[b]}}},metadata:{inline:{properties:{data:{type:"object"}}}}})});