baidu.feOption=(function(){var d=function(o){for(var p in o){window.localStorage.setItem(p,o[p])}};var f=function(p){var r={};for(var q=0,o=p.length;q<o;q++){r[p[q]]=window.localStorage.getItem(p[q])}return r};var l=function(o,p){chrome.extension.sendMessage({type:MSG_TYPE.GET_OPTIONS,items:o},p)};var j=function(o){chrome.extension.sendMessage({type:MSG_TYPE.SET_OPTIONS,items:o})};var a=function(o,p){if(p&&typeof p=="function"){p.call(null,f(o))}};var n=function(o){d(o)};var b=function(o){return f([o])[o]};var c=function(){var o={};o.opt_item_contextMenus=$("#opt_item_contextMenus").attr("checked");o.opt_item_showfdpmenu=$("#opt_item_showfdpmenu").attr("checked");o.opt_item_notification=$("#opt_item_notification").val();j(o)};var k=function(){var o=["opt_item_contextMenus","opt_item_showfdpmenu","opt_item_notification"];l(o,function(p){$.each(o,function(q,r){if(q==2){$("#"+r).val(p[r])}else{if(p[r]==="true"){$("#"+r).attr("checked","checked")}}})})};var e=function(o){switch(o){case"opt_form_start":c();break;case"":break}};var i=function(){chrome.tabs.getSelected(null,function(o){chrome.tabs.remove(o.id)})};var h=function(){$("#fe-opt-list-item>li").click(function(p){var o=$(this).siblings().removeClass("selected").end().addClass("selected");$(o.attr("data-content")).siblings().removeClass("selected").addClass("fe-hide").end().removeClass("fe-hide").addClass("selected")});$(".right form").submit(function(o){e($(this).attr("id"));i();o.preventDefault();o.stopPropagation()});$("#btn_close").click(function(){baidu.log.track(LOG.options_page_btnclose);i()});$("#btn_save").click(function(){baidu.log.track(LOG.options_page_btnsave);$(".right div.selected form").submit()})};var m=function(){k()};var g=function(){baidu.log.track(LOG.options_page_opened);h();m()};return{init:g,doSetOptions:n,doGetOptions:a,getOptionItem:b}})();