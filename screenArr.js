const a3_0x3d4d1e=a3_0x2c2c;(function(_0x3161ee,_0x595049){const _0x2a6abf=a3_0x2c2c,_0x35f479=_0x3161ee();while(!![]){try{const _0x56ad4b=parseInt(_0x2a6abf(0x171))/0x1+parseInt(_0x2a6abf(0x15b))/0x2*(-parseInt(_0x2a6abf(0x155))/0x3)+parseInt(_0x2a6abf(0x158))/0x4*(-parseInt(_0x2a6abf(0x173))/0x5)+-parseInt(_0x2a6abf(0x16a))/0x6*(parseInt(_0x2a6abf(0x17b))/0x7)+-parseInt(_0x2a6abf(0x165))/0x8*(-parseInt(_0x2a6abf(0x175))/0x9)+parseInt(_0x2a6abf(0x163))/0xa*(-parseInt(_0x2a6abf(0x16b))/0xb)+parseInt(_0x2a6abf(0x164))/0xc;if(_0x56ad4b===_0x595049)break;else _0x35f479['push'](_0x35f479['shift']());}catch(_0x30c3f9){_0x35f479['push'](_0x35f479['shift']());}}}(a3_0x189d,0x9c206));const {parentPort}=require(a3_0x3d4d1e(0x15a)),{default:PQueue}=require('p-queue'),fs=require('fs-extra'),path=require(a3_0x3d4d1e(0x15f)),{log,json}=require(a3_0x3d4d1e(0x16d)),fileQueue=new PQueue({'concurrency':0x1}),filePath=path[a3_0x3d4d1e(0x177)](__dirname,a3_0x3d4d1e(0x179));function a3_0x189d(){const _0x3a6788=['[screensArr]readJSON\x20Lỗi\x20khi\x20đọc\x20file:\x20','470repoiD','30465468HQpslg','6512HwoEaf','pending','write','add','[writeJSON]\x20Ghi\x20file\x20thành\x20công','1988064KMIxVn','183986VbwUCo','postMessage','./modules/logger','[screensArr]\x20Lỗi\x20khi\x20xử\x20lý\x20tác\x20vụ:\x20','readJSON','action','680547BUkCbx','Payload\x20is\x20missing','5KQtyNL','Unknown\x20action:\x20','7389jdCqqL','read','join','[screensArr]writeJSON\x20Lỗi\x20khi\x20ghi\x20file:\x20','screenArr.json','stringify','21FNdymN','1419SVuzZQ','[screensArr]vào\x20writeJSON','message','2623364dUxdZu','[screensArr]readJSON\x20Dữ\x20liệu\x20ghi\x20không\x20hợp\x20lệ:\x20','worker_threads','3434gNgkPA','[screensArr]writeJSON\x20Dữ\x20liệu\x20ghi\x20ok','[screensArr]writeJSON\x20Dữ\x20liệu\x20ghi\x20không\x20hợp\x20lệ','Failed\x20to\x20write\x20data','path','[screensArr]vào\x20readJSON','payload'];a3_0x189d=function(){return _0x3a6788;};return a3_0x189d();}async function readJSON(){const _0x3f2825=a3_0x3d4d1e;try{return log(_0x3f2825(0x160),null,'w'),await fs[_0x3f2825(0x16f)](filePath);}catch(_0x3ee4bc){return log(_0x3f2825(0x162)+_0x3ee4bc[_0x3f2825(0x157)],null,'e'),[];}}function a3_0x2c2c(_0x1733cc,_0x10abba){const _0x189dee=a3_0x189d();return a3_0x2c2c=function(_0x2c2cd7,_0x257e3d){_0x2c2cd7=_0x2c2cd7-0x155;let _0x301f58=_0x189dee[_0x2c2cd7];return _0x301f58;},a3_0x2c2c(_0x1733cc,_0x10abba);}async function writeJSON(_0x20abcc){const _0x9b29a8=a3_0x3d4d1e;try{return log(_0x9b29a8(0x156),null,'w'),await fs['writeJSON'](filePath,_0x20abcc,{'spaces':0x2}),log(_0x9b29a8(0x169),null,'w'),!![];}catch(_0x3545ed){return log(_0x9b29a8(0x178)+_0x3545ed['message'],null,'e'),null;}}if(parentPort)parentPort['on'](a3_0x3d4d1e(0x157),_0x7f6fa2=>{const _0x57dea7=a3_0x3d4d1e;fileQueue[_0x57dea7(0x168)](async()=>{const _0x246e92=_0x57dea7;try{if(_0x7f6fa2){if(_0x7f6fa2['action']===_0x246e92(0x176)){const _0x4e5b49=await readJSON();parentPort[_0x246e92(0x16c)]({'success':!![],'action':_0x246e92(0x176),'data':_0x4e5b49});}else{if(_0x7f6fa2[_0x246e92(0x170)]===_0x246e92(0x167)){if(!_0x7f6fa2[_0x246e92(0x161)]){log(_0x246e92(0x159)+JSON[_0x246e92(0x17a)](_0x7f6fa2),null,'w'),parentPort[_0x246e92(0x16c)]({'success':![],'error':_0x246e92(0x172)});return;}const _0x1f3e3b=await writeJSON(_0x7f6fa2[_0x246e92(0x161)]);_0x1f3e3b===null?(log(_0x246e92(0x15d),null,'w'),parentPort[_0x246e92(0x16c)]({'success':![],'error':_0x246e92(0x15e)})):(log(_0x246e92(0x15c),null,'w'),parentPort[_0x246e92(0x16c)]({'success':!![],'action':'write','data':_0x1f3e3b}));}}}else log('[screensArr]task\x20is\x20not\x20defined',null,'w'),parentPort[_0x246e92(0x16c)]({'success':![],'error':_0x246e92(0x174)+_0x7f6fa2[_0x246e92(0x170)]});}catch(_0x59729c){log(_0x246e92(0x16e)+_0x59729c['message'],null,![],'x'),parentPort[_0x246e92(0x16c)]({'success':![],'error':_0x59729c[_0x246e92(0x157)]});}}),log('[screensArr]:fileQueue\x20'+fileQueue['size']+'|'+fileQueue[_0x57dea7(0x166)],null,'c');});else{}