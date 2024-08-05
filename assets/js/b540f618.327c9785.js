"use strict";(self.webpackChunkonmyoji_auto_script_website=self.webpackChunkonmyoji_auto_script_website||[]).push([[5782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const p={},a="Debugging",o={unversionedId:"development/debugging",id:"development/debugging",title:"Debugging",description:"Alas \u7684\u5165\u53e3\u6587\u4ef6\u6709\u4e24\u4e2a\uff1a\u8c03\u5ea6\u5668 script.py \u548c gui.py\u3002\u7531\u4e8e\u5f88\u591a\u6e38\u620f\u73a9\u6cd5\u4f1a\u6d88\u8017\u6e38\u620f\u5e10\u53f7\u4e0a\u7684\u5927\u91cf\u8d44\u6e90\uff0c\u6216\u8005\u6d88\u8017\u5927\u91cf\u65f6\u95f4\uff0c\u751a\u81f3\u4e00\u4e9b\u5185\u5bb9\u4e00\u5929\u53ea\u80fd\u64cd\u4f5c\u4e00\u6b21\uff0c\u8c03\u8bd5\u7684\u65f6\u5019\u4e0d\u80fd\u50cf\u5e73\u65f6\u4f7f\u7528\u4e00\u6837\u6267\u884c\u5b8c\u6574\u6d41\u7a0b\u3002\u5927\u591a\u6570\u65f6\u5019\u8c03\u8bd5\u90fd\u662f\u8131\u79bb\u6e38\u620f\uff0c\u6839\u636e\u4e00\u5f20\u6216\u8005\u51e0\u5f20\u6e38\u620f\u622a\u56fe\u8fdb\u884c\u7684\u3002",source:"@site/docs/development/debugging.md",sourceDirName:"development",slug:"/development/debugging",permalink:"/OnmyojiAutoScript-website/docs/development/debugging",draft:!1,editUrl:"https://github.com/runhey/OnmyojiAutoScript-website/blob/master/docs/development/debugging.md",tags:[],version:"current",frontMatter:{},sidebar:"developmentSidebar",previous:{title:"Process Element",permalink:"/OnmyojiAutoScript-website/docs/development/process-element"},next:{title:"Log",permalink:"/OnmyojiAutoScript-website/docs/development/log"}},l={},s=[{value:"\u9876\u5c42\u8c03\u8bd5 gui.py",id:"\u9876\u5c42\u8c03\u8bd5-guipy",level:2},{value:"\u9876\u5c42\u8c03\u8bd5 server.py",id:"\u9876\u5c42\u8c03\u8bd5-serverpy",level:2},{value:"\u5b9e\u4f8b\u8c03\u8bd5 script.py",id:"\u5b9e\u4f8b\u8c03\u8bd5-scriptpy",level:2},{value:"\u4efb\u52a1\u8c03\u8bd5 script_task.py",id:"\u4efb\u52a1\u8c03\u8bd5-script_taskpy",level:2},{value:"\u5355\u72ec\u8c03\u8bd5 assets",id:"\u5355\u72ec\u8c03\u8bd5-assets",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Alas \u7684\u5165\u53e3\u6587\u4ef6\u6709\u4e24\u4e2a\uff1a\u8c03\u5ea6\u5668 ",(0,i.kt)("inlineCode",{parentName:"p"},"script.py")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"gui.py"),"\u3002\u7531\u4e8e\u5f88\u591a\u6e38\u620f\u73a9\u6cd5\u4f1a\u6d88\u8017\u6e38\u620f\u5e10\u53f7\u4e0a\u7684\u5927\u91cf\u8d44\u6e90\uff0c\u6216\u8005\u6d88\u8017\u5927\u91cf\u65f6\u95f4\uff0c\u751a\u81f3\u4e00\u4e9b\u5185\u5bb9\u4e00\u5929\u53ea\u80fd\u64cd\u4f5c\u4e00\u6b21\uff0c\u8c03\u8bd5\u7684\u65f6\u5019\u4e0d\u80fd\u50cf\u5e73\u65f6\u4f7f\u7528\u4e00\u6837\u6267\u884c\u5b8c\u6574\u6d41\u7a0b\u3002\u5927\u591a\u6570\u65f6\u5019\u8c03\u8bd5\u90fd\u662f\u8131\u79bb\u6e38\u620f\uff0c\u6839\u636e\u4e00\u5f20\u6216\u8005\u51e0\u5f20\u6e38\u620f\u622a\u56fe\u8fdb\u884c\u7684\u3002"),(0,i.kt)("p",null,"OAS \u7684\u8c03\u8bd5\u5165\u53e3\u6bd4\u8f83\u591a\uff0c\u9876\u5c42\u7684\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"gui.py")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"server.py"),"\uff0c \u6bcf\u4e2a\u793a\u4f8b\u4e5f\u6709\u81ea\u5df1\u7684\u8c03\u8bd5\u5165\u53e3",(0,i.kt)("inlineCode",{parentName:"p"},"script.py"),", \u6bcf\u4e2a\u4efb\u52a1\u5bf9\u5e94\u90fd\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"script_task.py"),"\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u5355\u72ec\u5bf9assets\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,i.kt)("h2",{id:"\u9876\u5c42\u8c03\u8bd5-guipy"},"\u9876\u5c42\u8c03\u8bd5 gui.py"),(0,i.kt)("p",null,"\u8fd8\u662f\u540c\u6837\u7684\u4f60\u9700\u8981\u786e\u4fdd\u4f60\u6709pyside6\u8fd9\u4e2a\u73af\u5883"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install pyside6==6.4.3\n")),(0,i.kt)("p",null,"\u6267\u884c\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"gui.py")," \u5373\u53ef\uff0c\u4e0d\u8fc7\u4e0d\u5efa\u8bae\u600e\u4e48\u505a"),(0,i.kt)("h2",{id:"\u9876\u5c42\u8c03\u8bd5-serverpy"},"\u9876\u5c42\u8c03\u8bd5 server.py"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u662f\u65b0\u7248\u672c\u7684\u9876\u5c42\u542f\u52a8\u65b9\u5f0f\uff0c\u4f60\u9700\u8981\u540c OASX \u4e00\u8d77\u4f7f\u7528,"),(0,i.kt)("h2",{id:"\u5b9e\u4f8b\u8c03\u8bd5-scriptpy"},"\u5b9e\u4f8b\u8c03\u8bd5 script.py"),(0,i.kt)("p",null,"\u4e00\u822c\u7531\u4e3b\u7a0b\u5e8f\u6765\u5b9e\u4f8b\u5316",(0,i.kt)("inlineCode",{parentName:"p"},"Script"),"\u5bf9\u8c61\uff0c\u7136\u540e\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"loop()"),"\u65b9\u6cd5\u6765\u6267\u884c\u811a\u672c\uff0c\u4f60\u53ef\u4ee5\u5355\u72ec\u8fdb\u884c\u542f\u52a8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    script = Script("oas1")\n    script.loop()\n')),(0,i.kt)("p",null,"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"script.py"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},'Script("oas1")')," \u8868\u793a\u5b9e\u4f8b\u5316\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"oas1.json")," \u7684\u811a\u672c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"script.loop()")," \u8868\u793a\u6267\u884c\u811a\u672c\u3002\n\u4e0d\u8fc7\u6211\u4eec\u4e5f\u662f\u5f88\u5c11\u7528\u5230\u3002"),(0,i.kt)("h2",{id:"\u4efb\u52a1\u8c03\u8bd5-script_taskpy"},"\u4efb\u52a1\u8c03\u8bd5 script_task.py"),(0,i.kt)("p",null,"\u4efb\u52a1\u8c03\u8bd5\u662f\u9488\u5bf9\u5355\u4e2a\u4efb\u52a1\u7684\u8c03\u8bd5\uff0c\u8fd9\u4e2a\u662f\u6211\u4eec\u7528\u7684\u6700\u591a\u7684\uff0c\u5728\u6bcf\u4e00\u4e2a\u4efb\u52a1\u7684\u6587\u4ef6\u4e0b\u90fd\u6709\uff0c\u6bd4\u5982\u6316\u571f\u4efb\u52a1\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"./task/Orochi/script_task.py")," \u6587\u4ef6\u4e0b\u6709"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n    from module.config.config import Config\n    from module.device.device import Device\n    c = Config('oas1')\n    d = Device(c)\n    t = ScriptTask(c, d)\n\n    t.run()\n\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"c = Config('oas1')")," \u8868\u793a\u5b9e\u4f8b\u5316\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"oas1.json")," \u7684\u914d\u7f6e\u5bf9\u8c61\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"d = Device(c)")," \u8868\u793a\u5b9e\u4f8b\u5316\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"oas1.json")," \u7684\u8bbe\u5907\u5bf9\u8c61\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"t = ScriptTask(c, d)")," \u8868\u793a\u5b9e\u4f8b\u5316\u4e00\u4e2a\u4efb\u52a1\u5bf9\u8c61\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"t.run()")," \u8868\u793a\u6267\u884c\u4efb\u52a1\u3002\u662f\u4e0d\u662f\u5f88\u7b80\u5355\uff1f\u8fd9\u4e2a\u662f\u6bcf\u4e2a\u4efb\u52a1\u4e0b\u9762\u90fd\u6709\u7684\u975e\u5e38\u65b9\u4fbf\u7684\u8c03\u8bd5\u3002"),(0,i.kt)("h2",{id:"\u5355\u72ec\u8c03\u8bd5-assets"},"\u5355\u72ec\u8c03\u8bd5 assets"),(0,i.kt)("p",null,"\u76ee\u524d\u53ea\u652f\u6301 \u8c03\u8bd5\u56fe\u7247\u548cOCR\u3002\n\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"./dev_tools/assets_test.py"),"\u4e0b\u4f60\u53ef\u4ee5\u5355\u72ec\u8fdb\u884c\u8c03\u8bd5\u3002\u8c03\u8bd5\u662f\u8131\u79bb\u6e38\u620f\uff0c\u6839\u636e\u4e00\u5f20\u6216\u8005\u51e0\u5f20\u6e38\u620f\u622a\u56fe\u8fdb\u884c\u7684\uff0c\u4e5f\u4e0d\u4f9d\u8d56\u4efb\u4f55\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8c03\u8bd5\u4e00\u4e2a RuleImage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# \u56fe\u7247\u6587\u4ef6\u8def\u5f84 \u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\nIMAGE_FILE = 'C:/Users/Ryland/Desktop/QQ\u622a\u56fe20240113215243.png'\nfrom tasks.KekkaiActivation.assets import KekkaiActivationAssets\ntarge = KekkaiActivationAssets.I_A_HARVEST_FISH_6\nprint(detect_image(IMAGE_FILE, targe))\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8c03\u8bd5\u4e00\u4e2a RuleOCR")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# \u56fe\u7247\u6587\u4ef6\u8def\u5f84 \u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\nIMAGE_FILE = 'C:/Users/Ryland/Desktop/QQ\u622a\u56fe20240113215243.png'\nfrom tasks.KekkaiActivation.assets import KekkaiActivationAssets\ntarget = KekkaiActivationAssets.O_CARD_ALL_TIME\nprint(detect_ocr(IMAGE_FILE, target))\n")),(0,i.kt)("p",null,"\u5c31\u662f\u8fd9\u4e48\u7b80\u5355\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u7ed3\u679c\u3002"))}m.isMDXComponent=!0}}]);