(()=>{var e={};!function(e){function i(){l.prop("disabled",!0)}function c(){l.prop("disabled",!1)}function n(){y.hide(),r("confirm_safe_mode"),i(),e.ajax({method:"POST",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",s)},url:f+"jetpack/v4/identity-crisis/confirm-safe-mode",data:{},success:function(){p.hide(),m.removeClass("hide"),window.location.search&&1===window.location.search.indexOf("page=jetpack")&&window.location.reload()},error:function(e){v="confirm",a(e),c()}})}function o(){y.hide(),r("migrate"),i(),e.ajax({method:"POST",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",s)},url:f+"jetpack/v4/identity-crisis/migrate",data:{},success:function(){p.hide(),e("body").hasClass("toplevel_page_jetpack")&&window.location.reload(!0)},error:function(e){v="migrate",a(e),c()}})}function t(){y.hide(),r("start_fresh"),i(),e.ajax({method:"POST",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",s)},url:f+"jetpack/v4/identity-crisis/start-fresh",data:{},success:function(e){window.location=e+"&from=idc-notice"},error:function(e){v="start-fresh",a(e),c()}})}function a(i){var c=e(".jp-idc-error__desc");i&&i.responseJSON&&i.responseJSON.message?c.html(i.responseJSON.message):c.html(""),y.css("display","flex")}function r(e,i){(void 0===i||"object"!=typeof i)&&(i={}),e&&e.length&&"undefined"!=typeof analytics&&analytics.tracks&&analytics.mc&&(e=0===(e=e.replace(/-/g,"_")).indexOf("jetpack_idc_")?e:"jetpack_idc_"+e,analytics.tracks.recordEvent(e,i),e=(e=e.replace("jetpack_idc_","")).replace(/_/g,"-"),analytics.mc.bumpStat("jetpack-idc",e))}var s=idcL10n.nonce,d=idcL10n.currentUrl,f=idcL10n.apiRoot,p=e(".jp-idc-notice"),l=e(".jp-idc-notice .dops-button"),u=idcL10n.tracksUserData,_=idcL10n.tracksEventData,m=e("#wp-admin-bar-jetpack-idc"),h=e("#jp-idc-confirm-safe-mode-action"),j=e("#jp-idc-fix-connection-action"),k=e("#jp-idc-migrate-action"),w=e("#jp-idc-reconnect-site-action"),y=e(".jp-idc-error__notice"),v=!1;"undefined"!=typeof analytics&&analytics.initialize(u.userid,u.username),_.isAdmin?r("notice_view"):r("non_admin_notice_view",{page:_.currentScreen}),function(e){e=void 0!==e&&e,window.location.search&&-1!==window.location.search.indexOf("jetpack_idc_clear_confirmation")&&(r("clear_confirmation_clicked"),history&&history.pushState?history.pushState({},"",d):e&&(window.location.href=d))}(),p.on("click",".notice-dismiss",(function(){var e="https:"===window.location.protocol;wpCookies.set("jetpack_idc_dismiss_notice","1",604800,!1,!1,e),r("non_admin_notice_dismiss",{page:_.currentScreen})})),p.on("click","#jp-idc-error__action",(function(){switch(y.hide(),v){case"confirm":n();break;case"start-fresh":t();break;case"migrate":o()}})),h.on("click",n),j.on("click",(function(){y.hide(),r("fix_connection"),p.addClass("jp-idc-show-second-step")})),w.on("click",t),k.on("click",o)}(jQuery);var i=window;for(var c in e)i[c]=e[c];e.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();