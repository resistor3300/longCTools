const a0_0x2a2be8=a0_0x1fe8;(function(_0x1ab814,_0x38e08b){const _0x733d1d=a0_0x1fe8,_0x66535c=_0x1ab814();while(!![]){try{const _0x410167=parseInt(_0x733d1d(0x1cb))/0x1+-parseInt(_0x733d1d(0x1bb))/0x2*(parseInt(_0x733d1d(0x1c5))/0x3)+-parseInt(_0x733d1d(0x1c0))/0x4+-parseInt(_0x733d1d(0x1bf))/0x5+parseInt(_0x733d1d(0x1d8))/0x6*(-parseInt(_0x733d1d(0x1c1))/0x7)+parseInt(_0x733d1d(0x1ba))/0x8*(parseInt(_0x733d1d(0x1b7))/0x9)+parseInt(_0x733d1d(0x1b9))/0xa;if(_0x410167===_0x38e08b)break;else _0x66535c['push'](_0x66535c['shift']());}catch(_0x2361ae){_0x66535c['push'](_0x66535c['shift']());}}}(a0_0x4074,0xc7447));import a0_0xcfe1de from'winston';import a0_0x174ded from'winston-daily-rotate-file';import a0_0x394e04 from'fs';import a0_0x474dcf from'path';function a0_0x1fe8(_0xb23b1b,_0x1f4719){const _0x407471=a0_0x4074();return a0_0x1fe8=function(_0x1fe865,_0x4d8dcd){_0x1fe865=_0x1fe865-0x1b7;let _0x3a246a=_0x407471[_0x1fe865];return _0x3a246a;},a0_0x1fe8(_0xb23b1b,_0x1f4719);}const logDir=a0_0x2a2be8(0x1d5);function a0_0x4074(){const _0x3d8bfb=['1139676ubwXaj','stringify','blue','printf','custom','colorize','info','transports','debug','warn','log','format','get','6FrnYcy','set','9MkYYCm','levels','15180980plxWMC','12722032ANfioh','6TzevQi','has','timestamp','red','5613960jJygpe','4513684VSpypo','7820015iqFZdL','addColors','createLogger','cyan','63471yhehnk','mkdirSync','combine','DD-MM-YY\x20HH:mm:ss','colors','green'];a0_0x4074=function(){return _0x3d8bfb;};return a0_0x4074();}!a0_0x394e04['existsSync'](logDir)&&a0_0x394e04[a0_0x2a2be8(0x1c6)](logDir);const customLevels={'levels':{'success':0x0,'error':0x1,'warn':0x2,'info':0x3,'debug':0x4,'custom':0x5},'colors':{'success':a0_0x2a2be8(0x1ca),'error':a0_0x2a2be8(0x1be),'warn':'yellow','info':a0_0x2a2be8(0x1cd),'debug':a0_0x2a2be8(0x1c4),'custom':'magenta'}},icons={'success':'✓','error':'✗','warn':'!','info':'ℹ','debug':'*','custom':'#'};a0_0xcfe1de[a0_0x2a2be8(0x1c2)](customLevels[a0_0x2a2be8(0x1c9)]);const loggerCache=new Map();function createLogger(_0x23246a){const _0x55a287=a0_0x2a2be8;if(loggerCache[_0x55a287(0x1bc)](_0x23246a))return loggerCache[_0x55a287(0x1d7)](_0x23246a);const _0x3e55c2=a0_0xcfe1de[_0x55a287(0x1c3)]({'levels':customLevels[_0x55a287(0x1b8)],'format':a0_0xcfe1de[_0x55a287(0x1d6)][_0x55a287(0x1c7)](a0_0xcfe1de[_0x55a287(0x1d6)][_0x55a287(0x1bd)]({'format':_0x55a287(0x1c8)}),a0_0xcfe1de['format'][_0x55a287(0x1ce)](({level:_0xfaf6d,message:_0x17f7b9,timestamp:_0x27e659})=>{return'['+_0x27e659+']['+icons[_0xfaf6d]+']\x20'+_0x17f7b9;}),a0_0xcfe1de['format'][_0x55a287(0x1d0)]({'all':!![]})),'transports':[new a0_0xcfe1de[(_0x55a287(0x1d2))]['Console']()]});return loggerCache[_0x55a287(0x1d9)](_0x23246a,_0x3e55c2),_0x3e55c2;}function log(_0x43359c='',_0x2ab850,_0x1537bc=null,_0x5ecd8a=!![],_0x5938ff=null){const _0xf74a46=a0_0x2a2be8,_0x5b8187=createLogger(_0x43359c),_0x20f609=_0x5ecd8a===!![]?'success':_0x5ecd8a===![]?'error':_0x5ecd8a==='i'?_0xf74a46(0x1d1):_0x5ecd8a==='w'?_0xf74a46(0x1d4):_0x5ecd8a==='c'?_0xf74a46(0x1cf):_0xf74a46(0x1d3),_0x548fc6=_0x5938ff?_0x5938ff['repeat'](0x32):null,_0x1b18df=_0x43359c?'['+_0x43359c+']':'';if(_0x548fc6)_0x5b8187[_0xf74a46(0x1d1)](_0x548fc6);const _0x46e526=_0x1537bc?'['+_0x1537bc+']':'';_0x5b8187[_0xf74a46(0x1d5)]({'level':_0x20f609,'message':''+_0x46e526+_0x1b18df+_0x2ab850});if(_0x548fc6)_0x5b8187[_0xf74a46(0x1d1)](_0x548fc6);}function json(_0x2ab9a2){const _0x47bb7c=a0_0x2a2be8;return JSON[_0x47bb7c(0x1cc)](_0x2ab9a2,null,0x2);}export{log,json};