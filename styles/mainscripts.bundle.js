if("undefined"==typeof jQuery)throw new Error("jQuery plugins need to be before this file");$.AdminAero={},$.AdminAero.options={colors:{red:"#ec3b57",pink:"#E91E63",purple:"#ba3bd0",deepPurple:"#673AB7",indigo:"#3F51B5",blue:"#2196f3",lightBlue:"#03A9F4",cyan:"#00bcd4",green:"#4CAF50",lightGreen:"#8BC34A",yellow:"#ffe821",orange:"#FF9800",deepOrange:"#f83600",grey:"#9E9E9E",blueGrey:"#607D8B",black:"#000000",blush:"#dd5e89",white:"#ffffff"},leftSideBar:{scrollColor:"rgba(0,0,0,0.5)",scrollWidth:"4px",scrollAlwaysVisible:!1,scrollBorderRadius:"0",scrollRailBorderRadius:"0"},dropdownMenu:{effectIn:"fadeIn",effectOut:"fadeOut"}},$.AdminAero.leftSideBar={activate:function(){var r=this,t=$("body"),i=$(".overlay");$(window).on("click",function(e){var a=$(e.target);"i"===e.target.nodeName.toLowerCase()&&(a=$(e.target).parent()),!a.hasClass("bars")&&r.isOpen()&&0===a.parents("#leftsidebar").length&&(a.hasClass("js-right-sidebar")||i.fadeOut(),t.removeClass("overlay-open"))}),$.each($(".menu-toggle.toggled"),function(e,a){$(a).next().slideToggle(0)}),$.each($(".menu .list li.active"),function(e,a){var r=$(a).find("a:eq(0)");r.addClass("toggled"),r.next().show()}),$(".menu-toggle").on("click",function(e){var a=$(this),r=a.next();if($(a.parents("ul")[0]).hasClass("list")){var t=$(e.target).hasClass("menu-toggle")?e.target:$(e.target).parents(".menu-toggle");$.each($(".menu-toggle.toggled").not(t).next(),function(e,a){$(a).is(":visible")&&($(a).prev().toggleClass("toggled"),$(a).slideUp())})}a.toggleClass("toggled"),r.slideToggle(320)}),r.checkStatuForResize(!0),$(window).resize(function(){r.checkStatuForResize(!1)}),Waves.attach(".menu .list a",["waves-block"]),Waves.init()},checkStatuForResize:function(e){var a=$("body"),r=$(".navbar .navbar-header .bars"),t=a.width();e&&a.find(".content, .sidebar").addClass("no-animate").delay(1e3).queue(function(){$(this).removeClass("no-animate").dequeue()}),t<1170?(767<t&&a.addClass("ls-toggle-menu"),a.addClass("ls-closed"),r.fadeIn()):(a.removeClass("ls-closed ls-toggle-menu"),r.fadeOut())},isOpen:function(){return $("body").hasClass("overlay-open")}},$.AdminAero.rightSideBar={activate:function(){var r=this,t=$("#rightsidebar"),i=$(".overlay");$(window).on("click",function(e){var a=$(e.target);"i"===e.target.nodeName.toLowerCase()&&(a=$(e.target).parent()),!a.hasClass("js-right-sidebar")&&r.isOpen()&&0===a.parents("#rightsidebar").length&&(a.hasClass("bars")||i.fadeOut(),t.removeClass("open"))}),$(".js-right-sidebar").on("click",function(){t.toggleClass("open"),r.isOpen()?i.fadeIn():i.fadeOut()})},isOpen:function(){return $(".right-sidebar").hasClass("open")}},$.AdminAero.navbar={activate:function(){var e=$("body"),a=$(".overlay");$(".bars").on("click",function(){e.toggleClass("overlay-open"),e.hasClass("overlay-open")?a.fadeIn():a.fadeOut()}),$('.nav [data-close="true"]').on("click",function(){var e=$(".navbar-toggle").is(":visible"),a=$(".navbar-collapse");e&&a.slideUp(function(){a.removeClass("in").removeAttr("style")})})}},$.AdminAero.select={activate:function(){$.fn.selectpicker&&$("select:not(.ms)").selectpicker()}};var edge="Microsoft Edge",ie10="Internet Explorer 10",ie11="Internet Explorer 11",opera="Opera",firefox="Mozilla Firefox",chrome="Google Chrome",safari="Safari";function skinChanger(){$(".right-sidebar .choose-skin li").on("click",function(){var e=$("body"),a=$(this),r=$(".right-sidebar .choose-skin li.active").data("theme");$(".right-sidebar .choose-skin li").removeClass("active"),e.removeClass("theme-"+r),a.addClass("active"),e.addClass("theme-"+a.data("theme"))})}function CustomScrollbar(){$(".sidebar .menu .list").slimscroll({height:"calc(100vh - 65px)",color:"#eeeeee",position:"right",size:"1px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"}),$(".navbar-right .dropdown-menu .body").slimscroll({height:"330px",color:"rgba(0,0,0,0.2)",size:"3px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"}),$(".chat-widget").slimscroll({height:"310px",color:"rgba(0,0,0,0.4)",size:"2px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"2px"}),$(".right-sidebar .slim_scroll").slimscroll({height:"calc(100vh - 70px)",color:"rgba(0,0,0,0.4)",size:"2px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"})}function CustomJs(){$(".light_dark input").on("change",function(){"dark"==$(this).val()?$("body").addClass("theme-dark"):$("body").removeClass("theme-dark")}),$(".rtl_support input").on("change",function(){$(this).val();$(this).is(":checked")?$("body").addClass("rtl"):$("body").removeClass("rtl")}),$(".ms_bar input").on("change",function(){$(this).val();$(this).is(":checked")?$("body").addClass("ls-toggle-menu"):$("body").removeClass("ls-toggle-menu")}),$(".ls-toggle-btn").on("click",function(){$("body").toggleClass("ls-toggle-menu")}),$(".rv-btn-toggle").on("click",function(){$(".navbar-right .navbar-nav").toggleClass("open")}),$(".mobile_menu").on("click",function(){$(".sidebar").toggleClass("open")}),$(".boxs-close").on("click",function(){$(this).parents(".card").addClass("closed").fadeOut()}),$(".right_icon_toggle_btn").on("click",function(){$("body").toggleClass("right_icon_toggle")}),$(".list_btn").on("click",function(){$(".chat_list").toggleClass("open")})}$.AdminAero.browser={activate:function(){""!==this.getClassName()&&$("html").addClass(this.getClassName())},getBrowser:function(){var e=navigator.userAgent.toLowerCase();return/edge/i.test(e)?edge:/rv:11/i.test(e)?ie11:/msie 10/i.test(e)?ie10:/opr/i.test(e)?opera:/chrome/i.test(e)?chrome:/firefox/i.test(e)?firefox:navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)?safari:void 0},getClassName:function(){var e=this.getBrowser();return e===edge?"edge":e===ie11?"ie11":e===ie10?"ie10":e===opera?"opera":e===chrome?"chrome":e===firefox?"firefox":e===safari?"safari":""}},$(function(){$.AdminAero.browser.activate(),$.AdminAero.leftSideBar.activate(),$.AdminAero.rightSideBar.activate(),$.AdminAero.navbar.activate(),$.AdminAero.select.activate(),setTimeout(function(){$(".page-loader-wrapper").fadeOut()},50)}),window.Aero={colors:{blue:"#46b6fe","blue-darkest":"#2695dc","blue-darker":"#3da8ec","blue-dark":"#3866a6","blue-light":"#5ebcf9","blue-lighter":"#6fc6ff","blue-lightest":"#9bd8ff",azure:"#45aaf2","azure-darkest":"#0e2230","azure-darker":"#1c4461","azure-dark":"#3788c2","azure-light":"#7dc4f6","azure-lighter":"#c7e6fb","azure-lightest":"#ecf7fe",indigo:"#9988ff","indigo-darkest":"#141729","indigo-darker":"#282e52","indigo-dark":"#515da4","indigo-light":"#939edc","indigo-lighter":"#d1d5f0","indigo-lightest":"#f0f1fa",purple:"#b588ff","purple-darkest":"#21132f","purple-darker":"#42265e","purple-dark":"#844bbb","purple-light":"#c08ef0","purple-lighter":"#e4cff9","purple-lightest":"#f6effd",pink:"#ff4dab","pink-darkest":"#31161f","pink-darker":"#622c3e","pink-dark":"#c5577c","pink-light":"#f999b9","pink-lighter":"#fcd3e1","pink-lightest":"#fef0f5",red:"#ee2558","red-darkest":"#2e0f0c","red-darker":"#5c1e18","red-dark":"#b93d30","red-light":"#ee8277","red-lighter":"#f8c9c5","red-lightest":"#fdedec",orange:"#FF9948","orange-darkest":"#331e0e","orange-darker":"#653c1b","orange-dark":"#ca7836","orange-light":"#feb67c","orange-lighter":"#fee0c7","orange-lightest":"#fff5ec",yellow:"#fdd932","yellow-darkest":"#302703","yellow-darker":"#604e06","yellow-dark":"#c19d0c","yellow-light":"#f5d657","yellow-lighter":"#fbedb7","yellow-lightest":"#fef9e7",lime:"#82c885","lime-darkest":"#192a0b","lime-darker":"#315415","lime-dark":"#62a82a","lime-light":"#a3e072","lime-lighter":"#d7f2c2","lime-lightest":"#f2fbeb",green:"#04BE5B","green-darkest":"#132500","green-darker":"#264a00","green-dark":"#4b9500","green-light":"#8ecf4d","green-lighter":"#cfeab3","green-lightest":"#eff8e6",teal:"#2bcbba","teal-darkest":"#092925","teal-darker":"#11514a","teal-dark":"#22a295","teal-light":"#6bdbcf","teal-lighter":"#bfefea","teal-lightest":"#eafaf8",cyan:"#5CC5CD","cyan-darkest":"#052025","cyan-darker":"#09414a","cyan-dark":"#128293","cyan-light":"#5dbecd","cyan-lighter":"#b9e3ea","cyan-lightest":"#e8f6f8",gray:"#868e96","gray-darkest":"#1b1c1e","gray-darker":"#36393c","gray-dark":"#6b7278","gray-light":"#aab0b6","gray-lighter":"#dbdde0","gray-lightest":"#f3f4f5","gray-dark":"#343a40","gray-dark-darkest":"#0a0c0d","gray-dark-darker":"#15171a","gray-dark-dark":"#2a2e33","gray-dark-light":"#717579","gray-dark-lighter":"#c2c4c6","gray-dark-lightest":"#ebebec","gray-100":"#f8f9fa","gray-200":"#E8E9E9","gray-300":"#D1D3D4","gray-400":"#BABDBF","gray-500":"#808488","gray-600":"#666A6D","gray-700":"#4D5052","gray-800":"#333537","gray-900":"#1C1D1E",black:"#000000"}},$(function(){"use strict";skinChanger(),CustomScrollbar(),CustomJs()}),$(function(){$('a[href="#search"]').on("click",function(e){e.preventDefault(),$("#search").addClass("open"),$('#search > form > input[type="search"]').focus()}),$("#search, #search #close").on("click keyup",function(e){e.target!=this&&"close"!=e.target.id&&27!=e.keyCode||$(this).removeClass("open")})}),$(function(){"#dark"==location.hash&&($("body").addClass("theme-dark"),$("#darktheme").prop("checked",!0),$(".menu ul.list a").each(function(){var e=$(this).attr("href")+"#dark";$(this).attr("href",e)}))});var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),a=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5c6d4867f324050cfe342c69/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),a.parentNode.insertBefore(e,a)}();