const a0_0x35c7f0=a0_0x19ec;(function(_0x1bbe0c,_0x4fb33f){const _0x2b2d6b=a0_0x19ec,_0x3bcb92=_0x1bbe0c();while(!![]){try{const _0x50fd2e=parseInt(_0x2b2d6b(0x147))/0x1*(parseInt(_0x2b2d6b(0x116))/0x2)+parseInt(_0x2b2d6b(0x17c))/0x3+-parseInt(_0x2b2d6b(0x187))/0x4*(parseInt(_0x2b2d6b(0x15c))/0x5)+-parseInt(_0x2b2d6b(0x13e))/0x6*(parseInt(_0x2b2d6b(0x127))/0x7)+parseInt(_0x2b2d6b(0x14d))/0x8*(parseInt(_0x2b2d6b(0x148))/0x9)+parseInt(_0x2b2d6b(0x150))/0xa+-parseInt(_0x2b2d6b(0x139))/0xb*(parseInt(_0x2b2d6b(0x11e))/0xc);if(_0x50fd2e===_0x4fb33f)break;else _0x3bcb92['push'](_0x3bcb92['shift']());}catch(_0x433973){_0x3bcb92['push'](_0x3bcb92['shift']());}}}(a0_0xd486,0x1e6e5),require(a0_0x35c7f0(0x131))[a0_0x35c7f0(0x13f)]());const fs=require('fs'),path=require('path'),{Worker,parentPort}=require(a0_0x35c7f0(0x15e)),{log,json}=require(a0_0x35c7f0(0x12c)),Genlogin=require(a0_0x35c7f0(0x143)),httpPost=require(a0_0x35c7f0(0x180)),PQueue=require(a0_0x35c7f0(0x149))['default'];let profileQueue,genlogin,profileNameId,profileId,browser,http,getAllProfiles,taskInfo,GenDataProfile,screenArrData,timgame;genlogin=new Genlogin('',!![]),http=new httpPost(process[a0_0x35c7f0(0x111)]['SERVER_HOST'],process[a0_0x35c7f0(0x111)][a0_0x35c7f0(0x169)],!![]);let signal={'aborted':![]},firstRun=!![],delayOpenProfile=0xbb8,profileTimeout=0x5265c0,botTimeout=0x5265c0,profileThreads=0x1,isProcessingTask=![],screenArrRes={'action':a0_0x35c7f0(0x11d),'dataPayload':null};parentPort['on']('message',async _0x1288ec=>{const _0x5b1420=a0_0x35c7f0;try{const {action:_0xfc4efa,task:_0x455e63,dataBrw:_0x2cafb0,GenDataProfile0:_0x3444d3,timgame0:_0x124820,dataPayload:_0x7cc6f2}=_0x1288ec;if(_0x1288ec===_0x5b1420(0x182))log('[\x27worker1]:\x20Timeout',null,'w'),signal[_0x5b1420(0x133)]=!![],parentPort[_0x5b1420(0x11b)]({'success':![],'error':'Timeout'}),await procScreenArr(_0x5b1420(0x138),pos);else{if(_0x455e63!='screenArr'){getAllProfiles=_0x2cafb0,log(_0x5b1420(0x13b)+json(_0x1288ec['task']),null,'c'),log(_0x5b1420(0x117)+json(getAllProfiles),null,'c'),taskInfo=_0x455e63,GenDataProfile=_0x3444d3,timgame=_0x124820,log('[\x27worker1]['+_0x455e63[_0x5b1420(0x114)]+_0x5b1420(0x172),null,'w');if(signal[_0x5b1420(0x133)])throw new Error(_0x5b1420(0x182));const _0x16d6b1=await xuLyTask(_0x455e63);log('[\x27worker1]:\x20'+json(_0x16d6b1),null,'w'),!_0x16d6b1?parentPort[_0x5b1420(0x11b)]({'success':![],'result':_0x16d6b1}):parentPort[_0x5b1420(0x11b)]({'success':!![],'result':_0x16d6b1});}else _0x455e63===_0x5b1420(0x132)?(screenArrRes={'action':_0xfc4efa,'dataPayload':_0x7cc6f2},log('[\x27worker1\x27]:\x20screenArrRes\x20ok\x20action:'+_0xfc4efa,null,'w','@')):(log(_0x5b1420(0x145)+_0x455e63,null,'w'),parentPort['postMessage']({'success':![],'error':_0x5b1420(0x157)}));}}catch(_0x821a84){log('[\x27worker1]:\x20Lỗi\x20'+_0x821a84,null,![]),parentPort[_0x5b1420(0x11b)]({'success':![],'error':_0x5b1420(0x157)});}});async function xuLyTask(_0xda1ce6){const _0x58ee5f=a0_0x35c7f0;try{if(signal[_0x58ee5f(0x133)]){log(_0x58ee5f(0x12b)+_0xda1ce6[_0x58ee5f(0x114)]+_0x58ee5f(0x135),null,'w');throw new Error('timeout');}const _0x2616bb=await genlogin['nowTime'](),_0x4bc331=_0x2616bb[_0x58ee5f(0x16e)];if(_0x4bc331<_0xda1ce6[_0x58ee5f(0x129)])return log(_0x58ee5f(0x12b)+JSON['stringify'](_0xda1ce6[_0x58ee5f(0x114)])+'\x20chưa\x20đến\x20thời\x20gian\x20chạy',null,'i'),log(_0x58ee5f(0x121)+JSON[_0x58ee5f(0x14e)](_0x2616bb)+_0x58ee5f(0x16d)+JSON[_0x58ee5f(0x14e)](_0xda1ce6[_0x58ee5f(0x151)]),null,'w'),log(_0x58ee5f(0x121)+JSON[_0x58ee5f(0x14e)](_0x4bc331)+_0x58ee5f(0x16d)+JSON[_0x58ee5f(0x14e)](taskNextRunDateTime),null,'w'),log(_0x58ee5f(0x125),null,'i'),await delay(0x1388),null;let _0x1b758c=await http['getTask'](_0xda1ce6[_0x58ee5f(0x114)]);if(_0x1b758c[_0x58ee5f(0x188)][_0x58ee5f(0x158)][_0x58ee5f(0x142)]<=0x0){log(_0x58ee5f(0x152),null,![]);throw new Error(_0x58ee5f(0x14b));}firstRun&&(profileThreads=parseInt(_0xda1ce6[_0x58ee5f(0x178)]),profileQueue=new PQueue({'concurrency':profileThreads}),firstRun=![],delayOpenProfile=parseInt(_0xda1ce6[_0x58ee5f(0x110)])*0x3e8,profileTimeout=parseInt(_0xda1ce6[_0x58ee5f(0x11c)])*0x3e8,botTimeout=parseInt(_0xda1ce6[_0x58ee5f(0x134)])*0x3e8);const _0xc84c25=await xuLyProfiles(_0x1b758c[_0x58ee5f(0x188)]['profiles']);if(!_0xc84c25){log(_0x58ee5f(0x16c)+json(_0xc84c25),null,![]);throw new Error(_0x58ee5f(0x14b));}return log('[xuLyTask]:\x20Tasks:\x20'+_0xda1ce6[_0x58ee5f(0x114)]+'\x20ok'),await delay(0x7d0),log(_0x58ee5f(0x140)+JSON[_0x58ee5f(0x14e)](_0xda1ce6[_0x58ee5f(0x114)])),!![];}catch(_0x23f3ae){return log(_0x58ee5f(0x113)+_0x23f3ae,null,![]),null;}}async function xuLyProfiles(_0xb285ef){const _0x40a859=a0_0x35c7f0;try{if(signal[_0x40a859(0x133)]){log(_0x40a859(0x18a),null,'w');throw new Error(_0x40a859(0x182));}const _0x546bbe=[];for(const [_0x74db55,_0x3f3615]of _0xb285ef['entries']()){if(signal[_0x40a859(0x133)]){log('[xuLyProfiles]:\x20Task\x20'+_0x3f3615+_0x40a859(0x160),null,'w');throw new Error(_0x40a859(0x182));}const _0x2d61c9=await GenDataProfile[_0x40a859(0x175)](_0x4c1cc2=>_0x4c1cc2['pid']===_0x3f3615);if(_0x74db55!==-0x1)log(_0x40a859(0x14a)+_0x2d61c9);else{log(_0x40a859(0x159));throw new Error(_0x40a859(0x119));}log('[xuLyProfiles]:\x20Thêm\x20profile\x20'+_0x3f3615+_0x40a859(0x126)+profileThreads,null,'i'),_0x546bbe[_0x40a859(0x176)](profileQueue[_0x40a859(0x146)](()=>xuLyTungProfile(_0x3f3615,_0x74db55,_0xb285ef[_0x40a859(0x142)],GenDataProfile[_0x2d61c9]))),log('[xuLyProfiles]:\x20Đã\x20thêm\x20profile\x20'+_0x3f3615+_0x40a859(0x189)),await delay(delayOpenProfile);}return await Promise['all'](_0x546bbe),log('[xuLyProfiles]:\x20Đã\x20xử\x20lý\x20tất\x20cả\x20profiles\x20thành\x20công'),!![];}catch(_0x5b7ab2){return log(_0x40a859(0x14f)+_0x5b7ab2,null,![]),null;}}function a0_0x19ec(_0x293305,_0x107d89){const _0xd48687=a0_0xd486();return a0_0x19ec=function(_0x19ec9c,_0x3cb9cf){_0x19ec9c=_0x19ec9c-0x10f;let _0x21b7a2=_0xd48687[_0x19ec9c];return _0x21b7a2;},a0_0x19ec(_0x293305,_0x107d89);}async function xuLyTungProfile(_0x3ff936,_0x941276,_0x310046,_0x1d2fd3){const _0x54af24=a0_0x35c7f0;let _0x8f3cbc;try{_0x8f3cbc=await genlogin[_0x54af24(0x154)](),await http[_0x54af24(0x171)](_0x3ff936,_0x54af24(0x137),_0x8f3cbc[_0x54af24(0x16e)],'',_0x54af24(0x153),_0x54af24(0x153));let _0x461e68={'aborted':![]};log('[xuLyTungProfile]:\x20Đang\x20xử\x20lý\x20profile\x20'+_0x3ff936,null,'i');if(signal['aborted']){log(_0x54af24(0x17d),null,'w'),_0x461e68['aborted']=!![];throw new Error('timeout');}log(_0x54af24(0x15a),null,'w');const _0x4d0e54=await procScreenArr(_0x54af24(0x17e),null);log(_0x54af24(0x15f),null,'w');if(_0x4d0e54['x']===undefined||_0x4d0e54['y']===undefined){log(_0x54af24(0x17a),null,![]);throw new Error(_0x54af24(0x13d));}log(_0x54af24(0x165)+json(_0x4d0e54),null,'w');const _0x41a4d4=new Promise((_0x5b5985,_0x11f470)=>{const _0xcfd7b1=_0x54af24,_0x538b50=path[_0xcfd7b1(0x156)](__dirname,_0xcfd7b1(0x128)),_0x47b8bc=new Worker(_0x538b50),_0x50369c=setTimeout(()=>{const _0x11c75a=_0xcfd7b1;_0x47b8bc[_0x11c75a(0x11b)]('timeout'),_0x11f470(new Error(_0x11c75a(0x174)+_0x3ff936+_0x11c75a(0x181)));return;},profileTimeout);log(_0xcfd7b1(0x17f)+_0x3ff936+'\x20set\x20timeout:\x20'+profileTimeout,null,'w');const _0x1b28bd=setInterval(()=>{const _0x15ad96=_0xcfd7b1;signal['aborted']&&(log(_0x15ad96(0x112),null,'w'),_0x47b8bc['postMessage']('timeout'));},0x1388);if(_0x461e68[_0xcfd7b1(0x133)]){_0x47b8bc['postMessage']('timeout');throw new Error(_0xcfd7b1(0x182));return;}log('[xuLyTungProfile]:getAllProfiles\x20'+json(getAllProfiles),null,'c'),_0x47b8bc[_0xcfd7b1(0x11b)]({'profile':_0x3ff936,'dataBrw':getAllProfiles,'task':taskInfo,'index':_0x941276,'profileLength':_0x310046,'GenDataProfile0':_0x1d2fd3,'pos0':_0x4d0e54,'timgame0':timgame}),_0x47b8bc['on'](_0xcfd7b1(0x163),_0xbfc30=>{const _0x537851=_0xcfd7b1;clearTimeout(_0x50369c),clearInterval(_0x1b28bd),log(_0x537851(0x144)+json(_0x4d0e54),null,'w');if(_0xbfc30[_0x537851(0x13c)]){log(_0x537851(0x141)+_0x3ff936,null,'i'),_0x5b5985(!![]);return;}else{if(!_0xbfc30['success']){log('[xuLyTungProfile]2:\x20lỗi\x20worker2\x20xử\x20lý\x20profile\x20'+_0x3ff936,null,![]),_0x5b5985(![]);return;}else{log(_0x537851(0x11a)+_0x3ff936+':\x20'+json(_0xbfc30),null,![]),_0x11f470(_0xbfc30[_0x537851(0x16a)]);return;}}log('[xuLyTungProfile]:\x20Kết\x20thúc\x20worker\x20'+_0x3ff936,null,'w');}),_0x47b8bc['on'](_0xcfd7b1(0x16a),_0x4df0ff=>{const _0x2ecea0=_0xcfd7b1;clearInterval(_0x1b28bd),clearTimeout(_0x50369c),log(_0x2ecea0(0x11a)+_0x3ff936+':\x20'+json(_0x4df0ff),null,![]),_0x47b8bc['postMessage']('timeout'),_0x11f470(_0x4df0ff);return;}),_0x47b8bc['on'](_0xcfd7b1(0x118),_0x14f01c=>{const _0x5bb1ca=_0xcfd7b1;clearInterval(_0x1b28bd);if(_0x14f01c!==0x0){log(_0x5bb1ca(0x185)+_0x3ff936+'\x20đã\x20thoát\x20với\x20mã\x20lỗi\x20'+_0x14f01c,null,![]),_0x47b8bc['postMessage'](_0x5bb1ca(0x182)),_0x11f470(new Error(_0x5bb1ca(0x12d)+_0x14f01c));return;}});}),_0x5cb685=await _0x41a4d4,_0x4f4089=await genlogin[_0x54af24(0x15d)](_0x8f3cbc['timestamp']);return await http[_0x54af24(0x171)](_0x3ff936,_0x54af24(0x120),'','',_0x4f4089,'Stop'),await procScreenArr('close',_0x4d0e54),_0x5cb685;}catch(_0x3dfa1d){log(_0x54af24(0x13a)+_0x3dfa1d,null,![]);const _0x1414be=await genlogin['tinhThoiGian'](_0x8f3cbc[_0x54af24(0x123)]);await http['addData'](_0x3ff936,_0x54af24(0x120),'','',_0x1414be,_0x54af24(0x179)),await procScreenArr(_0x54af24(0x138),pos);throw _0x3dfa1d;}}async function delay(_0x3f140a){return new Promise(_0x4977ac=>{const _0x47a3ee=a0_0x19ec;if(signal[_0x47a3ee(0x133)])throw new Error('timeout');setTimeout(_0x4977ac,_0x3f140a);});}function a0_0xd486(){const _0xd1b2d=['add','144187LYGdSS','82755ryYkMf','p-queue','[xuLyProfiles]index:\x20','No\x20profile\x20found','dataPayload','104MPyCdv','stringify','[xuLyProfiles]:\x20Lỗi\x20:\x20','1186700Xpejyc','nextrun','[xuLyTask]:\x20không\x20lấy\x20được\x20profile','Start','nowTime','1Timeout:\x20Không\x20nhận\x20được\x20phản\x20hồi\x20từ\x20parentPort\x20trong\x20thời\x20gian\x20cho\x20phép.','join','worker1','profiles','[xuLyProfiles]Không\x20tìm\x20thấy\x20indexGenP','[xuLyTungProfile]:check\x20procScreenArr','3Timeout:\x20Không\x20nhận\x20được\x20phản\x20hồi\x20từ\x20parentPort\x20trong\x20thời\x20gian\x20cho\x20phép.','5CzSkmE','tinhThoiGian','worker_threads','[xuLyTungProfile]:done\x20check\x20procScreenArr','\x20đã\x20bị\x20hủy','rows','[worker1.procScreenArr]screenArrRes:','message','[worker1.procScreenArr]dkmdkmdkmdkmd','[xuLyTungProfile]:screenArrUpdadte\x20','0Timeout:\x20Không\x20nhận\x20được\x20phản\x20hồi\x20từ\x20parentPort\x20trong\x20thời\x20gian\x20cho\x20phép.','[worker1.procScreenArr]vào\x20close','[worker1.procScreenArr]intervalId:','APIKEY','error','pos','[xuLyTask]:\x20Không\x20lấy\x20được\x20dữ\x20liệu\x20profiles\x20','\x20|\x20nextrun:\x20','date','action','[worker1.procScreenArr]action:\x20','addData',']:\x20Script\x20Mode','[worker1.procScreenArr]lỗi\x20','profile\x20','findIndex','push','|check\x20screenArrRes.action','profileThreads','Stop','[xuLyTungProfile]:Không\x20tìm\x20thấy\x20giá\x20trị\x20status=0','forEach','406341vMBOVf','[xuLyTungProfile]:đã\x20bị\x20hủy','open','[xuLyTungProfile]:profile\x20','./modules/http','\x20timed\x20out.','timeout','[worker1.procScreenArr]open\x20fail\x20default\x20pos:\x20','default','[xuLyTungProfile]4:\x20Worker\x20','status','178572MWNcAF','value','\x20vào\x20hàng\x20đợi.','[xuLyProfiles]:đã\x20bị\x20hủy','width','delayOpenProfile','env','[xuLyTungProfile]:timeout','[xuLyTask]:\x20Lỗi\x20while:\x20','name','find','2GfbDmt','[worker1]:getAllProfiles\x20','exit','Không\x20tìm\x20thấy\x20indexGenP','[xuLyTungProfile]3:\x20Lỗi\x20xử\x20lý\x20profile\x20','postMessage','profileTimeout','null','1413612luVFax','[worker1.procScreenArr]vị\x20trí\x20default\x20không\x20cần\x20close','STOP\x20SCRIPT','[xuLyTask]:\x20currentDateTime:\x20','scale','timestamp','write','[xuLyTask]:\x20Chờ\x205\x20giây\x20trước\x20khi\x20xử\x20lý\x20task\x20tiếp\x20theo...','\x20vào\x20hàng\x20đợi\x20max:','161525sCTobR','worker2.js','nextrunstamp','read','[xuLyTask]:\x20Task\x20','./modules/logger','Worker\x20stopped\x20with\x20exit\x20code\x20','[worker1.procScreenArr]Không\x20tìm\x20thấy\x20giá\x20trị\x20status=0',',\x20pos:\x20','height','dotenv','screenArr','aborted','botTimeout','\x20đã\x20bị\x20hủy\x20trước\x20khi\x20bắt\x20đầu','[worker1.procScreenArr]close\x20ok:\x20','START\x20SCRIPT','close','11DvJHBY','[xuLyTungProfile]:\x20Lỗi:\x20','[worker1data.task]:data.task\x20','success','Không\x20tìm\x20thấy\x20giá\x20trị\x20status=0','60swdwMB','config','[xuLyTask]:\x20Hoàn\x20thành\x20xử\x20lý\x20task:\x20','[xuLyTungProfile]1:\x20Đã\x20xử\x20lý\x20profile\x20','length','./modules/Genlogin','[xuLyTungProfile]:\x20pos\x20','[\x27worker1]:\x20Lỗi\x20gì\x20đó\x20task\x20'];a0_0xd486=function(){return _0xd1b2d;};return a0_0xd486();}async function procScreenArr(_0x154216,_0x2cf9c3){const _0xab594a=a0_0x35c7f0,_0x290351=0x7530;try{log(_0xab594a(0x170)+_0x154216+_0xab594a(0x12f)+json(_0x2cf9c3),null,'w','-');const _0x41048a=0x1f4;if(_0x154216===_0xab594a(0x17e)){log('[worker1.procScreenArr]vào\x20open',null,'w');const _0x20c668=await new Promise((_0x268d2a,_0x33d7fa)=>{const _0x14b32f=_0xab594a,_0xfbf708=setTimeout(()=>{const _0x4ef8ff=a0_0x19ec;_0x33d7fa(new Error(_0x4ef8ff(0x166)));},_0x290351);parentPort[_0x14b32f(0x11b)]({'screenArr':{'action':_0x14b32f(0x12a)}});const _0x558ed3=setInterval(()=>{const _0x5a4109=_0x14b32f;screenArrRes&&screenArrRes[_0x5a4109(0x16f)]===_0x5a4109(0x12a)&&(clearTimeout(_0xfbf708),clearInterval(_0x558ed3),_0x268d2a(screenArrRes[_0x5a4109(0x14c)]),screenArrRes={'action':_0x5a4109(0x11d),'dataPayload':null});},_0x41048a);}),_0x1a65ca=_0x20c668[0x0][_0xab594a(0x161)],_0x483bf4=_0x1a65ca['find'](_0xef0414=>_0xef0414[_0xab594a(0x115)](_0x8bdc12=>_0x8bdc12[_0xab594a(0x186)]===0x0));let _0x47ad99;if(_0x483bf4){_0x47ad99=_0x483bf4[_0xab594a(0x115)](_0x5296bf=>_0x5296bf[_0xab594a(0x186)]===0x0)[_0xab594a(0x16b)],_0x483bf4['find'](_0x4ddca2=>_0x4ddca2[_0xab594a(0x186)]===0x0)['status']=0x1;const _0x330a3b=await new Promise((_0x542e65,_0xb8c8df)=>{const _0x401426=_0xab594a,_0x515a26=setTimeout(()=>{const _0x5f4eeb=a0_0x19ec;_0xb8c8df(new Error(_0x5f4eeb(0x155)));},_0x290351);parentPort[_0x401426(0x11b)]({'screenArr':{'action':'write','payload':_0x20c668}});const _0x32d5ba=setInterval(()=>{const _0x441d63=_0x401426;log(_0x441d63(0x168)+_0x32d5ba+_0x441d63(0x177)+screenArrRes[_0x441d63(0x16f)]+'\x20',null,'w','#'),screenArrRes&&screenArrRes[_0x441d63(0x16f)]===_0x441d63(0x124)?(clearTimeout(_0x515a26),clearInterval(_0x32d5ba),_0x542e65(screenArrRes[_0x441d63(0x14c)])):log(_0x441d63(0x162)+json(screenArrRes),null,'w','#');},_0x41048a);});return log(_0xab594a(0x164),null,'w','dkm'),_0x47ad99['scale']=_0x20c668[0x0]['scale'],_0x47ad99[_0xab594a(0x10f)]=_0x20c668[0x0][_0xab594a(0x10f)],_0x47ad99[_0xab594a(0x130)]=_0x20c668[0x0][_0xab594a(0x130)],_0x47ad99[_0xab594a(0x184)]=0x0,log('[worker1.procScreenArr]open\x20ok:\x20'+json(_0x47ad99),null,'w'),_0x47ad99;}else return _0x47ad99[_0xab594a(0x122)]=_0x20c668[0x0][_0xab594a(0x122)],_0x47ad99[_0xab594a(0x10f)]=_0x20c668[0x0]['width'],_0x47ad99['height']=_0x20c668[0x0][_0xab594a(0x130)],_0x47ad99['x']=0x0,_0x47ad99['y']=0x0,_0x47ad99[_0xab594a(0x184)]=0x1,log(_0xab594a(0x12e),null,![]),log(_0xab594a(0x183)+json(_0x47ad99),null,'w'),_0x47ad99;}else{if(_0x154216===_0xab594a(0x138)&&_0x2cf9c3['x']>=0x0&&_0x2cf9c3['y']>=0x0){log(_0xab594a(0x167),null,'w');if(_0x2cf9c3[_0xab594a(0x184)]===0x1)return log(_0xab594a(0x11f),null,'w'),!![];const _0x53cf8c=await new Promise((_0x19e0c8,_0x533849)=>{const _0x4aaf89=_0xab594a,_0x5772cf=setTimeout(()=>{_0x533849(new Error('2Timeout:\x20Không\x20nhận\x20được\x20phản\x20hồi\x20từ\x20parentPort\x20trong\x20thời\x20gian\x20cho\x20phép.'));},_0x290351);parentPort['postMessage']({'screenArr':{'action':_0x4aaf89(0x12a)}});const _0x5e2d45=setInterval(()=>{const _0x39253b=_0x4aaf89;screenArrRes&&screenArrRes[_0x39253b(0x16f)]==='read'&&(clearTimeout(_0x5772cf),clearInterval(_0x5e2d45),_0x19e0c8(screenArrRes['dataPayload']));},_0x41048a);});_0x53cf8c[0x0][_0xab594a(0x161)][_0xab594a(0x17b)](_0x2bd4a6=>{const _0x12beb2=_0xab594a;_0x2bd4a6[_0x12beb2(0x17b)](_0x1ca37a=>{const _0x1b876d=_0x12beb2;_0x1ca37a[_0x1b876d(0x16b)]['x']==_0x2cf9c3['x']&&_0x1ca37a[_0x1b876d(0x16b)]['y']==_0x2cf9c3['y']&&_0x1ca37a[_0x1b876d(0x186)]===0x1&&(_0x1ca37a[_0x1b876d(0x186)]=0x0);});});const _0x1ddf00=await new Promise((_0x5ec02a,_0xa55f60)=>{const _0xbb9448=_0xab594a,_0x578cdd=setTimeout(()=>{const _0x13065=a0_0x19ec;_0xa55f60(new Error(_0x13065(0x15b)));},_0x290351);parentPort[_0xbb9448(0x11b)]({'screenArr':{'action':_0xbb9448(0x124),'payload':_0x53cf8c}});const _0x1e6296=setInterval(()=>{const _0x17162d=_0xbb9448;screenArrRes&&screenArrRes[_0x17162d(0x16f)]===_0x17162d(0x124)&&(clearTimeout(_0x578cdd),clearInterval(_0x1e6296),_0x5ec02a(screenArrRes[_0x17162d(0x14c)]));},_0x41048a);});return log(_0xab594a(0x136)+json(_0x2cf9c3)+json(_0x53cf8c),null,'w'),!![];}}return screenArrRes={'action':null,'dataPayload':null},!![];}catch(_0x1c67d0){return log(_0xab594a(0x173)+_0x1c67d0,null,![]),screenArrRes={'action':null,'dataPayload':null},![];}}