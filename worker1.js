const a0_0x1a7638=a0_0x1fe5;(function(_0x3352dd,_0x2e62e2){const _0xe09fe2=a0_0x1fe5,_0x4b3088=_0x3352dd();while(!![]){try{const _0x52ef59=-parseInt(_0xe09fe2(0x147))/0x1*(parseInt(_0xe09fe2(0x125))/0x2)+-parseInt(_0xe09fe2(0x13f))/0x3*(-parseInt(_0xe09fe2(0x17f))/0x4)+-parseInt(_0xe09fe2(0x163))/0x5*(parseInt(_0xe09fe2(0x145))/0x6)+-parseInt(_0xe09fe2(0x189))/0x7+parseInt(_0xe09fe2(0x159))/0x8+-parseInt(_0xe09fe2(0x19a))/0x9+-parseInt(_0xe09fe2(0x198))/0xa*(-parseInt(_0xe09fe2(0x124))/0xb);if(_0x52ef59===_0x2e62e2)break;else _0x4b3088['push'](_0x4b3088['shift']());}catch(_0x2f1d26){_0x4b3088['push'](_0x4b3088['shift']());}}}(a0_0x4f80,0xa966f),require(a0_0x1a7638(0x11f))[a0_0x1a7638(0x15b)]());const fs=require('fs'),path=require(a0_0x1a7638(0x199)),{Worker,parentPort}=require(a0_0x1a7638(0x178)),{log,json}=require('./modules/logger'),Genlogin=require(a0_0x1a7638(0x13b)),httpPost=require(a0_0x1a7638(0x12d)),PQueue=require(a0_0x1a7638(0x172))[a0_0x1a7638(0x19c)];let profileQueue,genlogin,profileNameId,profileId,browser,http,getAllProfiles,taskInfo,GenDataProfile,screenArrData,timgame;genlogin=new Genlogin('',!![]),http=new httpPost(process[a0_0x1a7638(0x156)][a0_0x1a7638(0x135)],process[a0_0x1a7638(0x156)][a0_0x1a7638(0x17d)],!![]);let signal={'aborted':![]},firstRun=!![],delayOpenProfile=0xbb8,profileTimeout=0x5265c0,botTimeout=0x5265c0,profileThreads=0x1,isProcessingTask=![],screenArrRes={'action':a0_0x1a7638(0x17c),'dataPayload':null};parentPort['on']('message',async _0xbea9f6=>{const _0x7a1509=a0_0x1a7638;try{const {action:_0x1ea752,task:_0x4b7d75,dataBrw:_0xdcf35a,GenDataProfile0:_0x2291b6,timgame0:_0x132dc4,dataPayload:_0x3f2627}=_0xbea9f6;if(_0xbea9f6==='timeout')log(_0x7a1509(0x18d),null,'w'),signal['aborted']=!![],parentPort[_0x7a1509(0x126)]({'success':![],'error':'Timeout'}),await procScreenArr(_0x7a1509(0x146),pos);else{if(_0x4b7d75!='screenArr'){getAllProfiles=_0xdcf35a,log('[worker1data.task]:data.task\x20'+json(_0xbea9f6[_0x7a1509(0x12c)]),null,'c'),log(_0x7a1509(0x171)+json(getAllProfiles),null,'c'),taskInfo=_0x4b7d75,GenDataProfile=_0x2291b6,timgame=_0x132dc4,log(_0x7a1509(0x122)+_0x4b7d75[_0x7a1509(0x139)]+_0x7a1509(0x18b),null,'w');if(signal['aborted'])throw new Error(_0x7a1509(0x12a));const _0xba190c=await xuLyTask(_0x4b7d75);log(_0x7a1509(0x170)+json(_0xba190c),null,'w'),!_0xba190c?parentPort['postMessage']({'success':![],'result':_0xba190c}):parentPort[_0x7a1509(0x126)]({'success':!![],'result':_0xba190c});}else _0x4b7d75===_0x7a1509(0x18e)?(screenArrRes={'action':_0x1ea752,'dataPayload':_0x3f2627},log(_0x7a1509(0x16c)+_0x1ea752,null,'w','@')):(log(_0x7a1509(0x160)+_0x4b7d75,null,'w'),parentPort[_0x7a1509(0x126)]({'success':![],'error':_0x7a1509(0x180)}));}}catch(_0x3fda52){log(_0x7a1509(0x17b)+_0x3fda52,null,![]),parentPort['postMessage']({'success':![],'error':_0x7a1509(0x180)});}});function a0_0x1fe5(_0x677403,_0x6d2a1a){const _0x4f80e7=a0_0x4f80();return a0_0x1fe5=function(_0x1fe571,_0x33590f){_0x1fe571=_0x1fe571-0x11c;let _0x597628=_0x4f80e7[_0x1fe571];return _0x597628;},a0_0x1fe5(_0x677403,_0x6d2a1a);}async function xuLyTask(_0x1003d2){const _0x576801=a0_0x1a7638;try{if(signal['aborted']){log(_0x576801(0x16b)+_0x1003d2['name']+_0x576801(0x132),null,'w');throw new Error(_0x576801(0x12a));}const _0x506bbf=await genlogin['nowTime'](),_0x425cd6=_0x506bbf[_0x576801(0x174)];if(_0x425cd6<_0x1003d2[_0x576801(0x17e)])return log(_0x576801(0x16b)+JSON['stringify'](_0x1003d2[_0x576801(0x139)])+_0x576801(0x143),null,'i'),log(_0x576801(0x182)+JSON['stringify'](_0x506bbf)+'\x20|\x20nextrun:\x20'+JSON['stringify'](_0x1003d2[_0x576801(0x128)]),null,'w'),log(_0x576801(0x182)+JSON[_0x576801(0x14e)](_0x425cd6)+_0x576801(0x194)+JSON['stringify'](taskNextRunDateTime),null,'w'),log('[xuLyTask]:\x20Chờ\x205\x20giây\x20trước\x20khi\x20xử\x20lý\x20task\x20tiếp\x20theo...',null,'i'),await delay(0x1388),null;let _0x4faf54=await http[_0x576801(0x19f)](_0x1003d2[_0x576801(0x139)]);if(_0x4faf54[_0x576801(0x12f)][_0x576801(0x121)]['length']<=0x0){log(_0x576801(0x196),null,![]);throw new Error(_0x576801(0x1a0));}firstRun&&(profileThreads=parseInt(_0x1003d2[_0x576801(0x17a)]),profileQueue=new PQueue({'concurrency':profileThreads}),firstRun=![],delayOpenProfile=parseInt(_0x1003d2[_0x576801(0x13e)])*0x3e8,profileTimeout=parseInt(_0x1003d2[_0x576801(0x15c)])*0x3e8,botTimeout=parseInt(_0x1003d2['botTimeout'])*0x3e8);const _0xb26280=await xuLyProfiles(_0x4faf54[_0x576801(0x12f)][_0x576801(0x121)]);if(!_0xb26280){log(_0x576801(0x16f)+json(_0xb26280),null,![]);throw new Error(_0x576801(0x1a0));}return log(_0x576801(0x138)+_0x1003d2['name']+_0x576801(0x181)),await delay(0x7d0),log(_0x576801(0x15d)+JSON[_0x576801(0x14e)](_0x1003d2[_0x576801(0x139)])),!![];}catch(_0x35d661){return log(_0x576801(0x192)+_0x35d661,null,![]),null;}}async function xuLyProfiles(_0x5664e1){const _0x263209=a0_0x1a7638;try{if(signal['aborted']){log(_0x263209(0x158),null,'w');throw new Error('timeout');}const _0x52f3cf=[];for(const [_0x3552af,_0x14f183]of _0x5664e1[_0x263209(0x148)]()){if(signal[_0x263209(0x185)]){log(_0x263209(0x19e)+_0x14f183+_0x263209(0x167),null,'w');throw new Error(_0x263209(0x12a));}const _0x5e1b3f=await GenDataProfile[_0x263209(0x154)](_0x100177=>_0x100177['pid']===_0x14f183);if(_0x3552af!==-0x1)log(_0x263209(0x13a)+_0x5e1b3f);else{log(_0x263209(0x15a));throw new Error(_0x263209(0x191));}log(_0x263209(0x152)+_0x14f183+'\x20vào\x20hàng\x20đợi\x20max:'+profileThreads,null,'i'),_0x52f3cf['push'](profileQueue[_0x263209(0x165)](()=>xuLyTungProfile(_0x14f183,_0x3552af,_0x5664e1[_0x263209(0x169)],GenDataProfile[_0x5e1b3f]))),log(_0x263209(0x15e)+_0x14f183+_0x263209(0x155)),await delay(delayOpenProfile);}return await Promise[_0x263209(0x129)](_0x52f3cf),log(_0x263209(0x131)),!![];}catch(_0x29fb00){return log(_0x263209(0x161)+_0x29fb00,null,![]),null;}}async function xuLyTungProfile(_0x34699e,_0xb0c074,_0x425a65,_0x551b20){const _0x445c8e=a0_0x1a7638;try{const _0x45f86e=await genlogin[_0x445c8e(0x12b)]();await http[_0x445c8e(0x173)](_0x34699e,_0x445c8e(0x197),_0x45f86e['date'],'','Start',_0x445c8e(0x142));let _0xe59a16={'aborted':![]};log(_0x445c8e(0x144)+_0x34699e,null,'i');if(signal['aborted']){log(_0x445c8e(0x123),null,'w'),_0xe59a16[_0x445c8e(0x185)]=!![];throw new Error(_0x445c8e(0x12a));}log('[xuLyTungProfile]:check\x20procScreenArr',null,'w');const _0x3d0316=await procScreenArr(_0x445c8e(0x188),null);log(_0x445c8e(0x11d),null,'w');if(_0x3d0316['x']===undefined||_0x3d0316['y']===undefined){log(_0x445c8e(0x153),null,![]);throw new Error('Không\x20tìm\x20thấy\x20giá\x20trị\x20status=0');}log(_0x445c8e(0x164)+json(_0x3d0316),null,'w');const _0x35490b=new Promise((_0x3d215a,_0x1b076f)=>{const _0x3d4420=_0x445c8e,_0x47330c=path[_0x3d4420(0x166)](__dirname,'worker2.js'),_0x332ffd=new Worker(_0x47330c),_0xa63e8f=setTimeout(()=>{const _0x71ca6f=_0x3d4420;_0x332ffd[_0x71ca6f(0x126)](_0x71ca6f(0x12a)),_0x1b076f(new Error(_0x71ca6f(0x187)+_0x34699e+_0x71ca6f(0x150)));return;},profileTimeout);log(_0x3d4420(0x12e)+_0x34699e+_0x3d4420(0x175)+profileTimeout,null,'w');const _0x5e6a00=setInterval(()=>{const _0xfba41d=_0x3d4420;signal[_0xfba41d(0x185)]&&(log(_0xfba41d(0x162),null,'w'),_0x332ffd[_0xfba41d(0x126)]('timeout'));},0x1388);if(_0xe59a16[_0x3d4420(0x185)]){_0x332ffd[_0x3d4420(0x126)](_0x3d4420(0x12a));throw new Error('timeout');return;}log(_0x3d4420(0x13c)+json(getAllProfiles),null,'c'),_0x332ffd['postMessage']({'profile':_0x34699e,'dataBrw':getAllProfiles,'task':taskInfo,'index':_0xb0c074,'profileLength':_0x425a65,'GenDataProfile0':_0x551b20,'pos0':_0x3d0316,'timgame0':timgame}),_0x332ffd['on']('message',_0x3abac4=>{const _0x151058=_0x3d4420;clearTimeout(_0xa63e8f),clearInterval(_0x5e6a00),log(_0x151058(0x16d)+json(_0x3d0316),null,'w');if(_0x3abac4[_0x151058(0x136)]){log(_0x151058(0x141)+_0x34699e,null,'i'),_0x3d215a(!![]);return;}else{if(!_0x3abac4['success']){log(_0x151058(0x151)+_0x34699e,null,![]),_0x3d215a(![]);return;}else{log('[xuLyTungProfile]3:\x20Lỗi\x20xử\x20lý\x20profile\x20'+_0x34699e+':\x20'+json(_0x3abac4),null,![]),_0x1b076f(_0x3abac4[_0x151058(0x183)]);return;}}log(_0x151058(0x120)+_0x34699e,null,'w');}),_0x332ffd['on'](_0x3d4420(0x183),_0x398069=>{const _0x311210=_0x3d4420;clearInterval(_0x5e6a00),clearTimeout(_0xa63e8f),log(_0x311210(0x14b)+_0x34699e+':\x20'+json(_0x398069),null,![]),_0x332ffd[_0x311210(0x126)]('timeout'),_0x1b076f(_0x398069);return;}),_0x332ffd['on'](_0x3d4420(0x157),_0x1e44d9=>{const _0x1a0038=_0x3d4420;clearInterval(_0x5e6a00);if(_0x1e44d9!==0x0){log(_0x1a0038(0x11c)+_0x34699e+_0x1a0038(0x168)+_0x1e44d9,null,![]),_0x332ffd['postMessage'](_0x1a0038(0x12a)),_0x1b076f(new Error(_0x1a0038(0x177)+_0x1e44d9));return;}});}),_0x5cbefb=await _0x35490b,_0x36fbd5=await genlogin[_0x445c8e(0x14c)](_0x45f86e[_0x445c8e(0x190)]);return await http['addData'](_0x34699e,'STOP\x20SCRIPT','','',_0x36fbd5,'Stop'),await procScreenArr('close',_0x3d0316),_0x5cbefb;}catch(_0x563e70){log('[xuLyTungProfile]:\x20Lỗi:\x20'+_0x563e70,null,![]);const _0x5d3f8d=await genlogin[_0x445c8e(0x12b)](),_0x47e0a3=await genlogin[_0x445c8e(0x14c)](_0x5d3f8d[_0x445c8e(0x190)]);await http[_0x445c8e(0x173)](_0x34699e,'STOP\x20SCRIPT','','',_0x47e0a3,_0x445c8e(0x14a)),await procScreenArr(_0x445c8e(0x146),pos);throw _0x563e70;}}async function delay(_0x2eec20){return new Promise(_0x496288=>{const _0x4cd80b=a0_0x1fe5;if(signal['aborted'])throw new Error(_0x4cd80b(0x12a));setTimeout(_0x496288,_0x2eec20);});}function a0_0x4f80(){const _0x3f0a2b=['p-queue','addData','date','\x20set\x20timeout:\x20','scale','Worker\x20stopped\x20with\x20exit\x20code\x20','worker_threads','2Timeout:\x20Không\x20nhận\x20được\x20phản\x20hồi\x20từ\x20parentPort\x20trong\x20thời\x20gian\x20cho\x20phép.','profileThreads','[\x27worker1]:\x20Lỗi\x20','null','APIKEY','nextrunstamp','4FwcTAU','worker1','\x20ok','[xuLyTask]:\x20currentDateTime:\x20','error','[worker1.procScreenArr]action:\x20','aborted','height','profile\x20','open','960589CmMazR','[worker1.procScreenArr]vào\x20close',']:\x20Script\x20Mode','forEach','[\x27worker1]:\x20Timeout','screenArr','[worker1.procScreenArr]vào\x20open','timestamp','Không\x20tìm\x20thấy\x20indexGenP','[xuLyTask]:\x20Lỗi\x20while:\x20','pos','\x20|\x20nextrun:\x20','width','[xuLyTask]:\x20không\x20lấy\x20được\x20profile','START\x20SCRIPT','280750NMYkof','path','9360405ybdruC','[worker1.procScreenArr]open\x20fail\x20default\x20pos:\x20','default','status','[xuLyProfiles]:\x20Task\x20','getTask','No\x20profile\x20found','[xuLyTungProfile]4:\x20Worker\x20','[xuLyTungProfile]:done\x20check\x20procScreenArr','dkm','dotenv','[xuLyTungProfile]:\x20Kết\x20thúc\x20worker\x20','profiles','[\x27worker1][','[xuLyTungProfile]:đã\x20bị\x20hủy','671ZzhgDN','443404KWsDug','postMessage',',\x20pos:\x20','nextrun','all','timeout','nowTime','task','./modules/http','[xuLyTungProfile]:profile\x20','value','rows','[xuLyProfiles]:\x20Đã\x20xử\x20lý\x20tất\x20cả\x20profiles\x20thành\x20công','\x20đã\x20bị\x20hủy\x20trước\x20khi\x20bắt\x20đầu','[worker1.procScreenArr]close\x20ok:\x20','action','SERVER_HOST','success','[worker1.procScreenArr]vị\x20trí\x20default\x20không\x20cần\x20close','[xuLyTask]:\x20Tasks:\x20','name','[xuLyProfiles]index:\x20','./modules/Genlogin','[xuLyTungProfile]:getAllProfiles\x20','[worker1.procScreenArr]Không\x20tìm\x20thấy\x20giá\x20trị\x20status=0','delayOpenProfile','2962809CBqfYd','find','[xuLyTungProfile]1:\x20Đã\x20xử\x20lý\x20profile\x20','Start','\x20chưa\x20đến\x20thời\x20gian\x20chạy','[xuLyTungProfile]:\x20Đang\x20xử\x20lý\x20profile\x20','896160dTamCi','close','6VFogHp','entries','read','Stop','[xuLyTungProfile]3:\x20Lỗi\x20xử\x20lý\x20profile\x20','tinhThoiGian','dataPayload','stringify','3Timeout:\x20Không\x20nhận\x20được\x20phản\x20hồi\x20từ\x20parentPort\x20trong\x20thời\x20gian\x20cho\x20phép.','\x20timed\x20out.','[xuLyTungProfile]2:\x20lỗi\x20worker2\x20xử\x20lý\x20profile\x20','[xuLyProfiles]:\x20Thêm\x20profile\x20','[xuLyTungProfile]:Không\x20tìm\x20thấy\x20giá\x20trị\x20status=0','findIndex','\x20vào\x20hàng\x20đợi.','env','exit','[xuLyProfiles]:đã\x20bị\x20hủy','9983816qQpAMQ','[xuLyProfiles]Không\x20tìm\x20thấy\x20indexGenP','config','profileTimeout','[xuLyTask]:\x20Hoàn\x20thành\x20xử\x20lý\x20task:\x20','[xuLyProfiles]:\x20Đã\x20thêm\x20profile\x20','write','[\x27worker1]:\x20Lỗi\x20gì\x20đó\x20task\x20','[xuLyProfiles]:\x20Lỗi\x20:\x20','[xuLyTungProfile]:timeout','25UYjSqC','[xuLyTungProfile]:screenArrUpdadte\x20','add','join','\x20đã\x20bị\x20hủy','\x20đã\x20thoát\x20với\x20mã\x20lỗi\x20','length','0Timeout:\x20Không\x20nhận\x20được\x20phản\x20hồi\x20từ\x20parentPort\x20trong\x20thời\x20gian\x20cho\x20phép.','[xuLyTask]:\x20Task\x20','[\x27worker1\x27]:\x20screenArrRes\x20ok\x20action:','[xuLyTungProfile]:\x20pos\x20','1Timeout:\x20Không\x20nhận\x20được\x20phản\x20hồi\x20từ\x20parentPort\x20trong\x20thời\x20gian\x20cho\x20phép.','[xuLyTask]:\x20Không\x20lấy\x20được\x20dữ\x20liệu\x20profiles\x20','[\x27worker1]:\x20','[worker1]:getAllProfiles\x20'];a0_0x4f80=function(){return _0x3f0a2b;};return a0_0x4f80();}async function procScreenArr(_0x41c9b0,_0x45d642){const _0xf9a0e9=a0_0x1a7638,_0x4478e=0x7530;try{log(_0xf9a0e9(0x184)+_0x41c9b0+_0xf9a0e9(0x127)+json(_0x45d642),null,'w','-');const _0x35307d=0x1f4;if(_0x41c9b0==='open'){log(_0xf9a0e9(0x18f),null,'w');const _0x55b4b1=await new Promise((_0x1c0489,_0x1a90e6)=>{const _0x33eeee=_0xf9a0e9,_0x30be97=setTimeout(()=>{const _0x831329=a0_0x1fe5;_0x1a90e6(new Error(_0x831329(0x16a)));},_0x4478e);parentPort[_0x33eeee(0x126)]({'screenArr':{'action':'read'}});const _0x46fe8b=setInterval(()=>{const _0x9cb4f9=_0x33eeee;screenArrRes&&screenArrRes['action']===_0x9cb4f9(0x149)&&(clearTimeout(_0x30be97),clearInterval(_0x46fe8b),_0x1c0489(screenArrRes[_0x9cb4f9(0x14d)]),screenArrRes={'action':'null','dataPayload':null});},_0x35307d);}),_0x2cdc7c=_0x55b4b1[0x0]['rows'],_0x53283a=_0x2cdc7c[_0xf9a0e9(0x140)](_0x37f16b=>_0x37f16b[_0xf9a0e9(0x140)](_0x147b0f=>_0x147b0f['status']===0x0));let _0x4d551e;if(_0x53283a){_0x4d551e=_0x53283a[_0xf9a0e9(0x140)](_0x60f9ea=>_0x60f9ea[_0xf9a0e9(0x19d)]===0x0)[_0xf9a0e9(0x193)],_0x53283a['find'](_0x582b38=>_0x582b38[_0xf9a0e9(0x19d)]===0x0)['status']=0x1;const _0x174b20=await new Promise((_0x1ce657,_0x3ceaa0)=>{const _0x1a2488=_0xf9a0e9,_0x23b9a9=setTimeout(()=>{const _0x28ce47=a0_0x1fe5;_0x3ceaa0(new Error(_0x28ce47(0x16e)));},_0x4478e);parentPort['postMessage']({'screenArr':{'action':_0x1a2488(0x15f),'payload':_0x55b4b1}});const _0x502107=setInterval(()=>{const _0x140122=_0x1a2488;log('[worker1.procScreenArr]check\x20screenArrRes.action'+screenArrRes[_0x140122(0x134)],null,'w','#'),screenArrRes&&screenArrRes['action']===_0x140122(0x15f)&&(clearTimeout(_0x23b9a9),clearInterval(_0x502107),_0x1ce657(screenArrRes[_0x140122(0x14d)]));},_0x35307d);});return log('[worker1.procScreenArr]dkmdkmdkmdkmd',null,'w',_0xf9a0e9(0x11e)),_0x4d551e['scale']=_0x55b4b1[0x0][_0xf9a0e9(0x176)],_0x4d551e[_0xf9a0e9(0x195)]=_0x55b4b1[0x0][_0xf9a0e9(0x195)],_0x4d551e[_0xf9a0e9(0x186)]=_0x55b4b1[0x0][_0xf9a0e9(0x186)],_0x4d551e['default']=0x0,log('[worker1.procScreenArr]open\x20ok:\x20'+json(_0x4d551e),null,'w'),_0x4d551e;}else return _0x4d551e[_0xf9a0e9(0x176)]=_0x55b4b1[0x0][_0xf9a0e9(0x176)],_0x4d551e[_0xf9a0e9(0x195)]=_0x55b4b1[0x0][_0xf9a0e9(0x195)],_0x4d551e['height']=_0x55b4b1[0x0][_0xf9a0e9(0x186)],_0x4d551e['x']=0x0,_0x4d551e['y']=0x0,_0x4d551e[_0xf9a0e9(0x19c)]=0x1,log(_0xf9a0e9(0x13d),null,![]),log(_0xf9a0e9(0x19b)+json(_0x4d551e),null,'w'),_0x4d551e;}else{if(_0x41c9b0===_0xf9a0e9(0x146)&&_0x45d642['x']>=0x0&&_0x45d642['y']>=0x0){log(_0xf9a0e9(0x18a),null,'w');if(_0x45d642[_0xf9a0e9(0x19c)]===0x1)return log(_0xf9a0e9(0x137),null,'w'),!![];const _0x11ef63=await new Promise((_0x2886ed,_0x4849a9)=>{const _0xff19b7=_0xf9a0e9,_0x43d96f=setTimeout(()=>{const _0x9ab2f2=a0_0x1fe5;_0x4849a9(new Error(_0x9ab2f2(0x179)));},_0x4478e);parentPort[_0xff19b7(0x126)]({'screenArr':{'action':_0xff19b7(0x149)}});const _0x1d1388=setInterval(()=>{const _0x3bfefb=_0xff19b7;screenArrRes&&screenArrRes[_0x3bfefb(0x134)]==='read'&&(clearTimeout(_0x43d96f),clearInterval(_0x1d1388),_0x2886ed(screenArrRes[_0x3bfefb(0x14d)]));},_0x35307d);});_0x11ef63[0x0][_0xf9a0e9(0x130)]['forEach'](_0x1c0dcb=>{const _0x261052=_0xf9a0e9;_0x1c0dcb[_0x261052(0x18c)](_0xcf88da=>{const _0x189605=_0x261052;_0xcf88da[_0x189605(0x193)]['x']==_0x45d642['x']&&_0xcf88da[_0x189605(0x193)]['y']==_0x45d642['y']&&_0xcf88da[_0x189605(0x19d)]===0x1&&(_0xcf88da[_0x189605(0x19d)]=0x0);});});const _0x3f285c=await new Promise((_0x421f78,_0x25a1a5)=>{const _0x54fc81=setTimeout(()=>{const _0x59792c=a0_0x1fe5;_0x25a1a5(new Error(_0x59792c(0x14f)));},_0x4478e);parentPort['postMessage']({'screenArr':{'action':'write','payload':_0x11ef63}});const _0x442e8e=setInterval(()=>{const _0x341130=a0_0x1fe5;screenArrRes&&screenArrRes[_0x341130(0x134)]===_0x341130(0x15f)&&(clearTimeout(_0x54fc81),clearInterval(_0x442e8e),_0x421f78(screenArrRes[_0x341130(0x14d)]));},_0x35307d);});return log(_0xf9a0e9(0x133)+json(_0x45d642)+json(_0x11ef63),null,'w'),!![];}}return screenArrRes={'action':null,'dataPayload':null},!![];}catch(_0x57d4ac){return log('[worker1.procScreenArr]lỗi\x20'+_0x57d4ac,null,![]),screenArrRes={'action':null,'dataPayload':null},![];}}