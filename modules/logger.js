function a0_0x1abf(_0x5d6514,_0x586ad9){const _0x2c7775=a0_0x2c77();return a0_0x1abf=function(_0x1abf58,_0x491978){_0x1abf58=_0x1abf58-0x16a;let _0x298dc3=_0x2c7775[_0x1abf58];return _0x298dc3;},a0_0x1abf(_0x5d6514,_0x586ad9);}const a0_0x35ecd7=a0_0x1abf;(function(_0x28b124,_0x262d09){const _0x4a5405=a0_0x1abf,_0x51ca90=_0x28b124();while(!![]){try{const _0x15a18b=-parseInt(_0x4a5405(0x173))/0x1+-parseInt(_0x4a5405(0x176))/0x2*(-parseInt(_0x4a5405(0x189))/0x3)+parseInt(_0x4a5405(0x16b))/0x4*(parseInt(_0x4a5405(0x186))/0x5)+-parseInt(_0x4a5405(0x185))/0x6+parseInt(_0x4a5405(0x188))/0x7+-parseInt(_0x4a5405(0x18a))/0x8+parseInt(_0x4a5405(0x174))/0x9;if(_0x15a18b===_0x262d09)break;else _0x51ca90['push'](_0x51ca90['shift']());}catch(_0x1ff062){_0x51ca90['push'](_0x51ca90['shift']());}}}(a0_0x2c77,0x4f5c2));import a0_0x391aa2 from'winston';import a0_0x3ac98f from'winston-daily-rotate-file';import a0_0x5f4242 from'fs';import a0_0x185f7d from'path';const logDir=a0_0x35ecd7(0x18c);!a0_0x5f4242[a0_0x35ecd7(0x180)](logDir)&&a0_0x5f4242[a0_0x35ecd7(0x172)](logDir);const customLevels={'levels':{'success':0x0,'error':0x1,'warn':0x2,'info':0x3,'debug':0x4,'custom':0x5},'colors':{'success':a0_0x35ecd7(0x18f),'error':a0_0x35ecd7(0x17c),'warn':'yellow','info':a0_0x35ecd7(0x178),'debug':a0_0x35ecd7(0x187),'custom':a0_0x35ecd7(0x184)}},icons={'success':'✓','error':'✗','warn':'!','info':'ℹ','debug':'*','custom':'#'};a0_0x391aa2['addColors'](customLevels[a0_0x35ecd7(0x18d)]);const loggerCache=new Map(),MAX_LOGGERS=0x32;function createLogger(_0x21df21){const _0x3dcf78=a0_0x35ecd7;if(loggerCache[_0x3dcf78(0x177)]>=MAX_LOGGERS){const _0x4592de=loggerCache[_0x3dcf78(0x17f)]()['next']()[_0x3dcf78(0x170)];loggerCache[_0x3dcf78(0x18e)](_0x4592de)[_0x3dcf78(0x17d)](),loggerCache[_0x3dcf78(0x182)](_0x4592de),loggerTimeouts[_0x3dcf78(0x182)](_0x4592de),console['log']('Xóa\x20logger\x20cũ:\x20'+_0x4592de);}const _0x4b9adb=a0_0x185f7d[_0x3dcf78(0x16e)](logDir,(_0x21df21||_0x3dcf78(0x179))+_0x3dcf78(0x16a)),_0x404b37=a0_0x391aa2['createLogger']({'levels':customLevels[_0x3dcf78(0x190)],'format':a0_0x391aa2['format']['combine'](a0_0x391aa2[_0x3dcf78(0x183)][_0x3dcf78(0x171)]({'format':'DD-MM-YY\x20HH:mm:ss'}),a0_0x391aa2[_0x3dcf78(0x183)][_0x3dcf78(0x175)](({level:_0x313e31,message:_0x20cfd0,timestamp:_0x2db434})=>{return'['+_0x2db434+']['+icons[_0x313e31]+']\x20'+_0x20cfd0;}),a0_0x391aa2[_0x3dcf78(0x183)][_0x3dcf78(0x191)]({'all':!![]})),'transports':[new a0_0x391aa2['transports']['Console'](),new a0_0x3ac98f({'filename':_0x4b9adb,'datePattern':_0x3dcf78(0x17e),'zippedArchive':!![],'maxSize':_0x3dcf78(0x17b),'maxFiles':'5','level':_0x3dcf78(0x16d)})]});return loggerCache['set'](_0x21df21,_0x404b37),_0x404b37;}function log(_0x2b8153='',_0xf34088,_0x1050d0=null,_0x4c85f3=!![],_0x4a970b=null){const _0x9283e2=a0_0x35ecd7,_0xc90e50=createLogger(_0x2b8153),_0x40f15b=_0x4c85f3===!![]?_0x9283e2(0x181):_0x4c85f3===![]?_0x9283e2(0x18b):_0x4c85f3==='i'?_0x9283e2(0x16d):_0x4c85f3==='w'?'warn':_0x4c85f3==='c'?_0x9283e2(0x17a):'debug',_0x1e5a21=_0x4a970b?_0x4a970b[_0x9283e2(0x16c)](0x32):null,_0xdc8cbd=_0x2b8153?'['+_0x2b8153+']':'';if(_0x1e5a21)_0xc90e50[_0x9283e2(0x16d)](_0x1e5a21);const _0x368278=_0x1050d0?'['+_0x1050d0+']':'';_0xc90e50['log']({'level':_0x40f15b,'message':''+_0x368278+_0xdc8cbd+_0xf34088});if(_0x1e5a21)_0xc90e50[_0x9283e2(0x16d)](_0x1e5a21);}function json(_0x448f0f){const _0x5314a0=a0_0x35ecd7;return JSON[_0x5314a0(0x16f)](_0x448f0f,null,0x2);}export{log,json};function a0_0x2c77(){const _0x12a7ac=['magenta','131922cdqlXf','102805RGLkwV','cyan','2915157JZMSDc','1124661Wznmza','2421488vVEfiy','error','log','colors','get','green','levels','colorize','-%DATE%.log','44LqRBlK','repeat','info','join','stringify','value','timestamp','mkdirSync','577535nxlXCQ','1887813MXeXqO','printf','2DXIrrN','size','blue','default','custom','10m','red','close','YYYY-MM-DD-HH','keys','existsSync','success','delete','format'];a0_0x2c77=function(){return _0x12a7ac;};return a0_0x2c77();}