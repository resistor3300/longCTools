const a0_0x26b46c=a0_0x345f;(function(_0x87d74c,_0x34ba0a){const _0x543f0d=a0_0x345f,_0x2e1480=_0x87d74c();while(!![]){try{const _0x111298=parseInt(_0x543f0d(0x86))/0x1+parseInt(_0x543f0d(0x71))/0x2+parseInt(_0x543f0d(0x7a))/0x3+parseInt(_0x543f0d(0x83))/0x4*(-parseInt(_0x543f0d(0x91))/0x5)+parseInt(_0x543f0d(0x7b))/0x6*(-parseInt(_0x543f0d(0x88))/0x7)+-parseInt(_0x543f0d(0x8a))/0x8+-parseInt(_0x543f0d(0x84))/0x9*(-parseInt(_0x543f0d(0x7d))/0xa);if(_0x111298===_0x34ba0a)break;else _0x2e1480['push'](_0x2e1480['shift']());}catch(_0x4f3086){_0x2e1480['push'](_0x2e1480['shift']());}}}(a0_0x9dc7,0xb6b32));const {parentPort}=require(a0_0x26b46c(0x8f)),{default:PQueue}=require('p-queue'),fs=require(a0_0x26b46c(0x81)),path=require(a0_0x26b46c(0x78)),{log,json}=require(a0_0x26b46c(0x8e)),fileQueue=new PQueue({'concurrency':0x1}),filePath=path[a0_0x26b46c(0x73)](__dirname,a0_0x26b46c(0x8b));async function readJSON(){const _0x493a08=a0_0x26b46c;try{return log('[screensArr]vào\x20readJSON',null,'w'),await fs[_0x493a08(0x7f)](filePath);}catch(_0x53b577){return log('[screensArr]readJSON\x20Lỗi\x20khi\x20đọc\x20file:\x20'+_0x53b577['message'],null,'e'),[];}}async function writeJSON(_0x33f516){const _0xd20819=a0_0x26b46c;try{return log('[screensArr]vào\x20writeJSON',null,'w'),await fs[_0xd20819(0x8d)](filePath,_0x33f516,{'spaces':0x2}),log('[writeJSON]\x20Ghi\x20file\x20thành\x20công',null,'w'),!![];}catch(_0x3584e8){return log('[screensArr]writeJSON\x20Lỗi\x20khi\x20ghi\x20file:\x20'+_0x3584e8[_0xd20819(0x76)],null,'e'),null;}}function a0_0x9dc7(){const _0x22b812=['Payload\x20is\x20missing','path','stringify','1048515VlRweP','402zAwOdY','add','10KncBWv','size','readJSON','Failed\x20to\x20write\x20data','fs-extra','[screensArr]writeJSON\x20Dữ\x20liệu\x20ghi\x20không\x20hợp\x20lệ','20eAXZnr','9478863izlYwq','[screensArr]task\x20is\x20not\x20defined','541535DKYWzG','[screensArr]:fileQueue\x20','78827fvowET','[screensArr]writeJSON\x20Dữ\x20liệu\x20ghi\x20ok','4632352NThxRg','screenArr.json','write','writeJSON','./modules/logger','worker_threads','read','127330WPZUVw','action','529904iJqVFd','[screensArr]\x20Lỗi\x20khi\x20xử\x20lý\x20tác\x20vụ:\x20','join','payload','postMessage','message'];a0_0x9dc7=function(){return _0x22b812;};return a0_0x9dc7();}function a0_0x345f(_0xa9e9a8,_0x1fe5c3){const _0x9dc7a3=a0_0x9dc7();return a0_0x345f=function(_0x345f0f,_0x203c69){_0x345f0f=_0x345f0f-0x71;let _0x1b4b6b=_0x9dc7a3[_0x345f0f];return _0x1b4b6b;},a0_0x345f(_0xa9e9a8,_0x1fe5c3);}if(parentPort)parentPort['on'](a0_0x26b46c(0x76),_0x3cbf53=>{const _0x2d6e1e=a0_0x26b46c;fileQueue[_0x2d6e1e(0x7c)](async()=>{const _0x5c2967=_0x2d6e1e;try{if(_0x3cbf53){if(_0x3cbf53[_0x5c2967(0x92)]===_0x5c2967(0x90)){const _0x2f4922=await readJSON();parentPort[_0x5c2967(0x75)]({'success':!![],'action':_0x5c2967(0x90),'data':_0x2f4922});}else{if(_0x3cbf53['action']==='write'){if(!_0x3cbf53['payload']){log('[screensArr]readJSON\x20Dữ\x20liệu\x20ghi\x20không\x20hợp\x20lệ:\x20'+JSON[_0x5c2967(0x79)](_0x3cbf53),null,'w'),parentPort[_0x5c2967(0x75)]({'success':![],'error':_0x5c2967(0x77)});return;}const _0x28aa2e=await writeJSON(_0x3cbf53[_0x5c2967(0x74)]);_0x28aa2e===null?(log(_0x5c2967(0x82),null,'w'),parentPort[_0x5c2967(0x75)]({'success':![],'error':_0x5c2967(0x80)})):(log(_0x5c2967(0x89),null,'w'),parentPort[_0x5c2967(0x75)]({'success':!![],'action':_0x5c2967(0x8c),'data':_0x28aa2e}));}}}else log(_0x5c2967(0x85),null,'w'),parentPort['postMessage']({'success':![],'error':'Unknown\x20action:\x20'+_0x3cbf53['action']});}catch(_0x522ae9){log(_0x5c2967(0x72)+_0x522ae9['message'],null,![],'x'),parentPort['postMessage']({'success':![],'error':_0x522ae9[_0x5c2967(0x76)]});}}),log(_0x2d6e1e(0x87)+fileQueue[_0x2d6e1e(0x7e)]+'|'+fileQueue['pending'],null,'c');});else{}