/*!
 * medium-draft
 * Version - 0.5.18
 * Author - Brijesh Bittu <brijeshb42@gmail.com> (http://bitwiser.in/)
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("draft-convert"),require("react")):"function"==typeof define&&define.amd?define(["draft-convert","react"],t):"object"==typeof exports?exports.MediumDraftExporter=t(require("draft-convert"),require("react")):e.MediumDraftExporter=t(e.DraftConvert,e.React)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/static/",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.Block={UNSTYLED:"unstyled",PARAGRAPH:"unstyled",OL:"ordered-list-item",UL:"unordered-list-item",H1:"header-one",H2:"header-two",H3:"header-three",H4:"header-four",H5:"header-five",H6:"header-six",CODE:"code-block",BLOCKQUOTE:"blockquote",PULLQUOTE:"pullquote",ATOMIC:"atomic",BLOCKQUOTE_CAPTION:"block-quote-caption",CAPTION:"caption",TODO:"todo",IMAGE:"atomic:image",BREAK:"atomic:break"},l=t.Inline={BOLD:"BOLD",CODE:"CODE",ITALIC:"ITALIC",STRIKETHROUGH:"STRIKETHROUGH",UNDERLINE:"UNDERLINE",HIGHLIGHT:"HIGHLIGHT"},c=t.Entity={LINK:"LINK"};t.HYPERLINK="hyperlink",t.HANDLED="handled",t.NOT_HANDLED="not_handled",t.KEY_COMMANDS={addNewBlock:function(){return"add-new-block"},changeType:function(){return"changetype:"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},showLinkInput:function(){return"showlinkinput"},unlink:function(){return"unlink"},toggleInline:function(){return"toggleinline:"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},deleteBlock:function(){return"delete-block"}};t.default={Block:r,Inline:l,Entity:c}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setRenderOptions=t.options=t.entityToHTML=t.blockToHTML=t.styleToHTML=void 0;var r=n(2),l=function(e){return e&&e.__esModule?e:{default:e}}(r),c=n(1),a=n(0),o=t.styleToHTML=function(e){switch(e){case a.Inline.ITALIC:return l.default.createElement("em",{className:"md-inline-"+e.toLowerCase()});case a.Inline.BOLD:return l.default.createElement("strong",{className:"md-inline-"+e.toLowerCase()});case a.Inline.STRIKETHROUGH:return l.default.createElement("strike",{className:"md-inline-"+e.toLowerCase()});case a.Inline.UNDERLINE:return l.default.createElement("u",{className:"md-inline-"+e.toLowerCase()});case a.Inline.HIGHLIGHT:return l.default.createElement("span",{className:"md-inline-"+e.toLowerCase()});case a.Inline.CODE:return l.default.createElement("code",{className:"md-inline-"+e.toLowerCase()});default:return null}},u=t.blockToHTML=function(e){var t=e.type,n=t.toLowerCase();switch(t){case a.Block.H1:return l.default.createElement("h1",{className:"md-block-"+n});case a.Block.H2:return l.default.createElement("h2",{className:"md-block-"+n});case a.Block.H3:return l.default.createElement("h3",{className:"md-block-"+n});case a.Block.H4:return l.default.createElement("h4",{className:"md-block-"+n});case a.Block.H5:return l.default.createElement("h5",{className:"md-block-"+n});case a.Block.H6:return l.default.createElement("h6",{className:"md-block-"+n});case a.Block.BLOCKQUOTE_CAPTION:case a.Block.CAPTION:return{start:'<p class="md-block-'+n+'"><caption>',end:"</caption></p>"};case a.Block.IMAGE:var r=e.data;return{start:'<figure class="md-block-image'+(e.text.length>0?" md-block-image-has-caption":"")+'"><img src="'+r.src+'" alt="'+e.text+'" /><figcaption class="md-block-image-caption">',end:"</figcaption></figure>"};case a.Block.ATOMIC:return{start:'<figure class="md-block-'+n+'">',end:"</figure>"};case a.Block.TODO:var c=e.data.checked||!1,o="",u="";return c?(o='<input type=checkbox disabled checked="checked" />',u="md-block-todo-checked"):(o="<input type=checkbox disabled />",u="md-block-todo-unchecked"),{start:'<div class="md-block-'+t+" "+u+'">'+o+"<p>",end:"</p></div>"};case a.Block.BREAK:return l.default.createElement("hr",{className:"md-block-"+t});case a.Block.BLOCKQUOTE:return l.default.createElement("blockquote",{className:"md-block-"+t});case a.Block.OL:return{element:l.default.createElement("li",null),nest:l.default.createElement("ol",{className:"md-block-"+t})};case a.Block.UL:return{element:l.default.createElement("li",null),nest:l.default.createElement("ul",{className:"md-block-"+t})};case a.Block.UNSTYLED:return e.text.length<1?l.default.createElement("p",{className:"md-block-"+t},l.default.createElement("br",null)):l.default.createElement("p",{className:"md-block-"+t});case a.Block.CODE:return{element:l.default.createElement("pre",{className:"md-block-"+t}),nest:l.default.createElement("div",{className:"md-block-code-container"})};default:return null}},s=t.entityToHTML=function(e,t){return e.type===a.Entity.LINK?l.default.createElement("a",{className:"md-inline-link",href:e.data.url,target:"_blank",rel:"noopener noreferrer"}):t},i=t.options={styleToHTML:o,blockToHTML:u,entityToHTML:s};t.setRenderOptions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return(0,c.convertToHTML)(e)};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return(0,c.convertToHTML)(t)(e)}}])});