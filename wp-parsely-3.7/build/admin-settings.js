!function(){"use strict";var e;null===(e=document.querySelector(".media-single-image button.browse"))||void 0===e||e.addEventListener("click",(function(e){var t=e.target.dataset.option,i=window.wp.media({multiple:!1,library:{type:"image"}});i.on("select",(function(){var e=i.state().get("selection").first().toJSON().url,n="#media-single-image-"+t+" input.file-path",a=document.querySelector(n);a&&(a.value=e)})),i.open()}))}();