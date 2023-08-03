"use strict";(self.webpackChunk_streamlit_app=self.webpackChunk_streamlit_app||[]).push([[8492],{28492:function(e,t,o){o.r(t),o.d(t,{default:function(){return _}});var r=o(22951),i=o(91976),n=o(67591),a=o(94337),l=o(66845),s=o(25621),c=o(50641),u=o(80318),d=o(80745);function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){f(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function m(e){var t=e.$disabled,o=e.$checked,r=e.$isIndeterminate,i=e.$error,n=e.$isHovered,a=e.$isActive,l=e.$theme.colors;return t?o||r?l.tickFillDisabled:l.tickFill:i&&(r||o)?a?l.tickFillErrorSelectedHoverActive:n?l.tickFillErrorSelectedHover:l.tickFillErrorSelected:i?a?l.tickFillErrorHoverActive:n?l.tickFillErrorHover:l.tickFillError:r||o?a?l.tickFillSelectedHoverActive:n?l.tickFillSelectedHover:l.tickFillSelected:a?l.tickFillActive:n?l.tickFillHover:l.tickFill}function b(e){var t=e.$disabled,o=e.$theme.colors;return t?o.contentSecondary:o.contentPrimary}var g=(0,d.zo)("label",(function(e){var t=e.$disabled,o=e.$labelPlacement;return{flexDirection:"top"===o||"bottom"===o?"column":"row",display:"flex",alignItems:"top"===o||"bottom"===o?"center":"flex-start",cursor:t?"not-allowed":"pointer",userSelect:"none"}}));g.displayName="Root",g.displayName="Root";var v=(0,d.zo)("span",(function(e){var t=e.$checked,o=e.$disabled,r=e.$error,i=e.$isIndeterminate,n=e.$theme,a=e.$isFocusVisible,l=n.sizing,s=n.animation,c=o?n.colors.tickMarkFillDisabled:r?n.colors.tickMarkFillError:n.colors.tickMarkFill,u=encodeURIComponent('\n    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M14 0.5H0V3.5H14V0.5Z" fill="'.concat(c,'"/>\n    </svg>\n  ')),d=encodeURIComponent('\n    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z" fill="'.concat(c,'"/>\n    </svg>\n  ')),p=n.borders.checkboxBorderRadius,h=function(e){var t=e.$disabled,o=e.$checked,r=e.$error,i=e.$isIndeterminate,n=e.$theme,a=e.$isFocusVisible,l=n.colors;return t?l.tickFillDisabled:o||i?"transparent":r?l.borderNegative:a?l.borderSelected:l.tickBorder}(e);return{flex:"0 0 auto",transitionDuration:s.timing200,transitionTimingFunction:s.easeOutCurve,transitionProperty:"background-image, border-color, background-color",width:l.scale700,height:l.scale700,left:"4px",top:"4px",boxSizing:"border-box",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftWidth:"3px",borderRightWidth:"3px",borderTopWidth:"3px",borderBottomWidth:"3px",borderLeftColor:h,borderRightColor:h,borderTopColor:h,borderBottomColor:h,borderTopLeftRadius:p,borderTopRightRadius:p,borderBottomRightRadius:p,borderBottomLeftRadius:p,outline:a&&t?"3px solid ".concat(n.colors.accent):"none",display:"inline-block",verticalAlign:"middle",backgroundImage:i?"url('data:image/svg+xml,".concat(u,"');"):t?"url('data:image/svg+xml,".concat(d,"');"):null,backgroundColor:m(e),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",marginTop:n.sizing.scale0,marginBottom:n.sizing.scale0,marginLeft:n.sizing.scale0,marginRight:n.sizing.scale0}}));v.displayName="Checkmark",v.displayName="Checkmark";var y=(0,d.zo)("div",(function(e){var t=e.$theme.typography;return h(h(h({verticalAlign:"middle"},function(e){var t,o=e.$labelPlacement,r=void 0===o?"":o,i=e.$theme,n=i.sizing.scale300;switch(r){case"top":t="Bottom";break;case"bottom":t="Top";break;case"left":t="Right";break;default:t="Left"}return"rtl"===i.direction&&"Left"===t?t="Right":"rtl"===i.direction&&"Right"===t&&(t="Left"),f({},"padding".concat(t),n)}(e)),{},{color:b(e)},t.LabelMedium),{},{lineHeight:"24px"})}));y.displayName="Label",y.displayName="Label";var k=(0,d.zo)("input",{opacity:0,width:0,height:0,overflow:"hidden",margin:0,padding:0,position:"absolute"});k.displayName="Input",k.displayName="Input";var $=(0,d.zo)("div",(function(e){var t=e.$theme.colors.toggleFill;return e.$disabled?t=e.$theme.colors.toggleFillDisabled:e.$checked&&e.$error?t=e.$theme.colors.tickFillErrorSelected:e.$checked&&(t=e.$theme.colors.toggleFillChecked),{backgroundColor:t,borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",boxShadow:e.$isFocusVisible?"0 0 0 3px ".concat(e.$theme.colors.accent):e.$isHovered&&!e.$disabled?e.$theme.lighting.shadow500:e.$theme.lighting.shadow400,outline:"none",height:e.$theme.sizing.scale700,width:e.$theme.sizing.scale700,transform:e.$checked?"translateX(".concat("rtl"===e.$theme.direction?"-100%":"100%",")"):null,transition:"transform ".concat(e.$theme.animation.timing200)}}));$.displayName="Toggle",$.displayName="Toggle";var w=(0,d.zo)("div",(function(e){var t=e.$theme.colors.toggleTrackFill;return e.$disabled?t=e.$theme.colors.toggleTrackFillDisabled:e.$error&&e.$checked&&(t=e.$theme.colors.tickFillError),{alignItems:"center",backgroundColor:t,borderTopLeftRadius:"7px",borderTopRightRadius:"7px",borderBottomRightRadius:"7px",borderBottomLeftRadius:"7px",display:"flex",height:e.$theme.sizing.scale550,marginTop:e.$theme.sizing.scale200,marginBottom:e.$theme.sizing.scale100,marginLeft:e.$theme.sizing.scale200,marginRight:e.$theme.sizing.scale100,width:e.$theme.sizing.scale1000}}));w.displayName="ToggleTrack",w.displayName="ToggleTrack";var F=Object.freeze({default:"default",toggle:"toggle",toggle_round:"toggle"}),x=(Object.freeze({top:"top",right:"right",bottom:"bottom",left:"left"}),o(17964));function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},R.apply(this,arguments)}function L(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=P(e);if(t){var i=P(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}(this,o)}}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function S(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var j=function(e){return e.stopPropagation()},E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(n,e);var t,o,r,i=T(n);function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return S(M(e=i.call.apply(i,[this].concat(o))),"state",{isFocused:e.props.autoFocus||!1,isFocusVisible:!1,isHovered:!1,isActive:!1}),S(M(e),"onMouseEnter",(function(t){e.setState({isHovered:!0}),e.props.onMouseEnter(t)})),S(M(e),"onMouseLeave",(function(t){e.setState({isHovered:!1,isActive:!1}),e.props.onMouseLeave(t)})),S(M(e),"onMouseDown",(function(t){e.setState({isActive:!0}),e.props.onMouseDown(t)})),S(M(e),"onMouseUp",(function(t){e.setState({isActive:!1}),e.props.onMouseUp(t)})),S(M(e),"onFocus",(function(t){e.setState({isFocused:!0}),e.props.onFocus(t),(0,x.E)(t)&&e.setState({isFocusVisible:!0})})),S(M(e),"onBlur",(function(t){e.setState({isFocused:!1}),e.props.onBlur(t),!1!==e.state.isFocusVisible&&e.setState({isFocusVisible:!1})})),e}return t=n,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,o=e.inputRef;t&&o.current&&o.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.overrides,o=void 0===t?{}:t,r=e.onChange,i=e.labelPlacement,n=void 0===i?this.props.checkmarkType===F.toggle?"left":"right":i,a=e.inputRef,s=e.isIndeterminate,c=e.error,d=e.disabled,p=e.value,h=e.name,f=e.type,m=e.checked,b=e.children,x=e.required,C=e.title,L=o.Root,O=o.Checkmark,T=o.Label,M=o.Input,P=o.Toggle,S=o.ToggleTrack,E=(0,u.XG)(L)||g,B=(0,u.XG)(O)||v,V=(0,u.XG)(T)||y,z=(0,u.XG)(M)||k,H=(0,u.XG)(P)||$,I=(0,u.XG)(S)||w,D={onChange:r,onFocus:this.onFocus,onBlur:this.onBlur},W={onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp},A={$isFocused:this.state.isFocused,$isFocusVisible:this.state.isFocusVisible,$isHovered:this.state.isHovered,$isActive:this.state.isActive,$error:c,$checked:m,$isIndeterminate:s,$required:x,$disabled:d,$value:p},U=b&&l.createElement(V,R({$labelPlacement:n},A,(0,u.ch)(T)),this.props.containsInteractiveElement?l.createElement("div",{onClick:function(e){return e.preventDefault()}},b):b);return l.createElement(E,R({"data-baseweb":"checkbox",title:C||null,$labelPlacement:n},A,W,(0,u.ch)(L)),("top"===n||"left"===n)&&U,this.props.checkmarkType===F.toggle?l.createElement(I,R({},A,(0,u.ch)(S)),l.createElement(H,R({},A,(0,u.ch)(P)))):l.createElement(B,R({},A,(0,u.ch)(O))),l.createElement(z,R({value:p,name:h,checked:m,required:x,"aria-label":this.props["aria-label"]||this.props.ariaLabel,"aria-checked":s?"mixed":m,"aria-describedby":this.props["aria-describedby"],"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":c||null,"aria-required":x||null,disabled:d,type:f,ref:a,onClick:j},A,D,(0,u.ch)(M))),("bottom"===n||"right"===n)&&U)}}])&&L(t.prototype,o),r&&L(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}(l.Component);S(E,"defaultProps",{overrides:{},checked:!1,containsInteractiveElement:!1,disabled:!1,autoFocus:!1,isIndeterminate:!1,inputRef:l.createRef(),error:!1,type:"checkbox",checkmarkType:F.default,onChange:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseDown:function(){},onMouseUp:function(){},onFocus:function(){},onBlur:function(){}});var B=E,V=o(35704),z=o(87814),H=o(8879),I=o(68411),D=o(86659),W=o(21e3),A=(0,o(1515).Z)("div",{target:"edwcd610"})((function(e){var t=e.visibility;return{display:t===c.Ws.Collapsed?"none":"flex",visibility:t===c.Ws.Hidden?"hidden":"visible",verticalAlign:"middle",flexDirection:"row",alignItems:"center"}}),""),U=o(40864),N=function(e){(0,n.Z)(o,e);var t=(0,a.Z)(o);function o(){var e;(0,r.Z)(this,o);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).formClearHelper=new z.K,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setBoolValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState((function(e,t){return{value:t.element.default}}),(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onChange=function(t){var o=t.target.checked;e.setState({value:o},(function(){return e.commitWidgetValue({fromUi:!0})}))},e}return(0,i.Z)(o,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getBoolValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e,t=this.props,o=t.theme,r=t.width,i=t.element,n=t.disabled,a=t.widgetMgr,l=o.colors,s=o.spacing,u={width:r},d=n?l.fadedText40:l.bodyText;return this.formClearHelper.manageFormClearListener(a,i.formId,this.onFormCleared),(0,U.jsx)("div",{className:"row-widget stCheckbox",style:u,children:(0,U.jsx)(B,{checked:this.state.value,disabled:n,onChange:this.onChange,"aria-label":i.label,overrides:{Root:{style:function(e){var t=e.$isFocusVisible;return{marginBottom:0,marginTop:0,paddingRight:s.twoThirdsSmFont,backgroundColor:t?l.darkenedBgMix25:"",display:"flex",alignItems:"start"}}},Checkmark:{style:function(e){var t=e.$isFocusVisible,o=e.$checked,r=o&&!n?l.primary:l.fadedText40;return{outline:0,width:"1rem",height:"1rem",marginTop:"0.30rem",boxShadow:t&&o?"0 0 0 0.2rem ".concat((0,V.DZ)(l.primary,.5)):"",borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px",borderBottomWidth:"1px",borderLeftColor:r,borderRightColor:r,borderTopColor:r,borderBottomColor:r}}},Label:{style:{position:"relative",top:"1px",color:d}}},children:(0,U.jsxs)(A,{visibility:(0,c.iF)(null===(e=i.labelVisibility)||void 0===e?void 0:e.value),children:[(0,U.jsx)(W.ZP,{source:i.label,allowHTML:!1,isLabel:!0,isCheckbox:!0}),i.help&&(0,U.jsx)(D.Hp,{color:d,children:(0,U.jsx)(H.Z,{content:i.help,placement:I.u.TOP_RIGHT})})]})})})}}]),o}(l.PureComponent),_=(0,s.b)(N)},87814:function(e,t,o){o.d(t,{K:function(){return a}});var r=o(22951),i=o(91976),n=o(50641),a=function(){function e(){(0,r.Z)(this,e),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}return(0,i.Z)(e,[{key:"manageFormClearListener",value:function(e,t,o){null!=this.formClearListener&&this.lastWidgetMgr===e&&this.lastFormId===t||(this.disconnect(),(0,n.bM)(t)&&(this.formClearListener=e.addFormClearedListener(t,o),this.lastWidgetMgr=e,this.lastFormId=t))}},{key:"disconnect",value:function(){var e;null===(e=this.formClearListener)||void 0===e||e.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}]),e}()}}]);