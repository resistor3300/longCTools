function a3_0x2aa7(){const _0x54e5f5=['[screensArr]writeJSON\x20Lỗi\x20khi\x20ghi\x20file:\x20','97602pmIcEw','Failed\x20to\x20write\x20data','action','[screensArr]vào\x20writeJSON','[screensArr]task\x20is\x20not\x20defined','./modules/logger','8168tvDIct','read','2004786Feorce','fs-extra','7buVKXx','[screensArr]writeJSON\x20Dữ\x20liệu\x20ghi\x20không\x20hợp\x20lệ','[writeJSON]\x20Ghi\x20file\x20thành\x20công','500pbggsN','stringify','[screensArr]parentPort\x20is\x20not\x20defined','postMessage','size','24720nfOFWG','writeJSON','write','join','[screensArr]writeJSON\x20Dữ\x20liệu\x20ghi\x20ok','[screensArr]readJSON\x20Dữ\x20liệu\x20ghi\x20không\x20hợp\x20lệ:\x20','Unknown\x20action:\x20','add','payload','p-queue','Payload\x20is\x20missing','pending','38598ryhkHr','readJSON','screenArr.json','[screensArr]\x20Khởi\x20tạo\x20fileQueue','6731300wukdLg','[screensArr]readJSON\x20Lỗi\x20khi\x20đọc\x20file:\x20','worker_threads','path','106VheQis','3425936wfWJNm'];a3_0x2aa7=function(){return _0x54e5f5;};return a3_0x2aa7();}const a3_0xc1c020=a3_0x5282;(function(_0x4d20db,_0x329559){const _0x28fbb3=a3_0x5282,_0x366191=_0x4d20db();while(!![]){try{const _0x4baa2f=parseInt(_0x28fbb3(0x177))/0x1*(-parseInt(_0x28fbb3(0x197))/0x2)+-parseInt(_0x28fbb3(0x19a))/0x3+-parseInt(_0x28fbb3(0x17e))/0x4*(-parseInt(_0x28fbb3(0x183))/0x5)+-parseInt(_0x28fbb3(0x18f))/0x6+parseInt(_0x28fbb3(0x17b))/0x7*(-parseInt(_0x28fbb3(0x198))/0x8)+parseInt(_0x28fbb3(0x179))/0x9+parseInt(_0x28fbb3(0x193))/0xa;if(_0x4baa2f===_0x329559)break;else _0x366191['push'](_0x366191['shift']());}catch(_0x220e64){_0x366191['push'](_0x366191['shift']());}}}(a3_0x2aa7,0x95d8b));const {parentPort}=require(a3_0xc1c020(0x195)),{default:PQueue}=require(a3_0xc1c020(0x18c)),fs=require(a3_0xc1c020(0x17a)),path=require(a3_0xc1c020(0x196)),{log,json}=require(a3_0xc1c020(0x176)),fileQueue=new PQueue({'concurrency':0x1}),filePath=path[a3_0xc1c020(0x186)](__dirname,a3_0xc1c020(0x191));log(a3_0xc1c020(0x192),null,'w','fq');async function readJSON(){const _0x12f572=a3_0xc1c020;try{return log('[screensArr]vào\x20readJSON',null,'w'),await fs[_0x12f572(0x190)](filePath);}catch(_0x3240e6){return log(_0x12f572(0x194)+_0x3240e6['message'],null,'e'),[];}}async function writeJSON(_0x179d4d){const _0x1de9b3=a3_0xc1c020;try{return log(_0x1de9b3(0x174),null,'w'),await fs[_0x1de9b3(0x184)](filePath,_0x179d4d,{'spaces':0x2}),log(_0x1de9b3(0x17d),null,'w'),!![];}catch(_0x217ca2){return log(_0x1de9b3(0x199)+_0x217ca2['message'],null,'e'),null;}}function a3_0x5282(_0x5adbf3,_0x2ecb02){const _0x2aa749=a3_0x2aa7();return a3_0x5282=function(_0x528278,_0x39174c){_0x528278=_0x528278-0x174;let _0x486b52=_0x2aa749[_0x528278];return _0x486b52;},a3_0x5282(_0x5adbf3,_0x2ecb02);}parentPort?parentPort['on']('message',_0x4052b9=>{const _0x50dbe7=a3_0xc1c020;fileQueue[_0x50dbe7(0x18a)](async()=>{const _0x18f496=_0x50dbe7;try{if(_0x4052b9){if(_0x4052b9[_0x18f496(0x19c)]===_0x18f496(0x178)){const _0x46e6c6=await readJSON();parentPort[_0x18f496(0x181)]({'success':!![],'action':_0x18f496(0x178),'data':_0x46e6c6});}else{if(_0x4052b9['action']===_0x18f496(0x185)){if(!_0x4052b9[_0x18f496(0x18b)]){log(_0x18f496(0x188)+JSON[_0x18f496(0x17f)](_0x4052b9),null,'w'),parentPort[_0x18f496(0x181)]({'success':![],'error':_0x18f496(0x18d)});return;}const _0x50da82=await writeJSON(_0x4052b9[_0x18f496(0x18b)]);_0x50da82===null?(log(_0x18f496(0x17c),null,'w'),parentPort['postMessage']({'success':![],'error':_0x18f496(0x19b)})):(log(_0x18f496(0x187),null,'w'),parentPort[_0x18f496(0x181)]({'success':!![],'action':_0x18f496(0x185),'data':_0x50da82}));}}}else log(_0x18f496(0x175),null,'w'),parentPort[_0x18f496(0x181)]({'success':![],'error':_0x18f496(0x189)+_0x4052b9['action']});}catch(_0x3679a2){log('[screensArr]\x20Lỗi\x20khi\x20xử\x20lý\x20tác\x20vụ:\x20'+_0x3679a2['message'],null,![],'x'),parentPort[_0x18f496(0x181)]({'success':![],'error':_0x3679a2['message']});}}),log('[screensArr]:fileQueue\x20'+fileQueue[_0x50dbe7(0x182)]+'|'+fileQueue[_0x50dbe7(0x18e)],null,'c');}):log(a3_0xc1c020(0x180),null,'w');