(function(_0x1ef46f,_0x932d4a){const _0x25baec=a0_0x35ca,_0x3e314e=_0x1ef46f();while(!![]){try{const _0x5ad359=-parseInt(_0x25baec(0x113))/0x1+-parseInt(_0x25baec(0x105))/0x2+-parseInt(_0x25baec(0xf5))/0x3*(-parseInt(_0x25baec(0x11c))/0x4)+-parseInt(_0x25baec(0xf2))/0x5*(-parseInt(_0x25baec(0x10f))/0x6)+parseInt(_0x25baec(0xeb))/0x7*(-parseInt(_0x25baec(0xf6))/0x8)+-parseInt(_0x25baec(0xf0))/0x9*(-parseInt(_0x25baec(0xea))/0xa)+parseInt(_0x25baec(0x10b))/0xb;if(_0x5ad359===_0x932d4a)break;else _0x3e314e['push'](_0x3e314e['shift']());}catch(_0x7633e6){_0x3e314e['push'](_0x3e314e['shift']());}}}(a0_0x2d18,0xb012d));function a0_0x35ca(_0x49cdec,_0x5892e7){const _0x2d18ba=a0_0x2d18();return a0_0x35ca=function(_0x35ca9b,_0x159ade){_0x35ca9b=_0x35ca9b-0xdf;let _0x28c4ef=_0x2d18ba[_0x35ca9b];return _0x28c4ef;},a0_0x35ca(_0x49cdec,_0x5892e7);}function a0_0x2d18(){const _0x25c560=['coin','Không\x20tìm\x20thấy\x20quest','][thoigianconlai]:Xử\x20lý\x20gian\x20còn\x20lại\x20nè','Không\x20click\x20được\x20vào\x20quest','950920tPeQAy','7aDQSGO','switchFrame','][click]Không\x20click\x20được\x20vào\x20','][diChuyenChuotZigZag]Không\x20tìm\x20thayas\x20centerP','now','117qBNvkv','][click][Lỗi]:\x20','33725YubiFQ','][checkClosePopup]Không\x20click\x20được\x20vào\x20dailyPopupClose','][getCoin]:\x20Không\x20tìm\x20thấy\x20coin','1263cWpQCz','10667424TtKpSu',']Không\x20tìm\x20thấy\x20iframe',']Không\x20tìm\x20thayas\x20closePopup','][lamQuest]Làm\x20Quest\x20nè','][choNhatCoinXong]\x20Không\x20tìm\x20thấy\x20coinLeft','quest','][checkClosePopup]Không\x20tìm\x20thấy\x20dailyPopupClose','getTextByXPath','][click]Click\x20','Không\x20tìm\x20thấy\x20iframe','][diChuyenChuotZigZag]Tìm\x20thayas\x20centerP:\x20','NextRunStamp','NextRun','][choNhatCoinXong]\x20Tìm\x20thấy\x20coinLeft:\x20',']Không\x20lấy\x20được\x20centerPoint','2599934FExgkl',']Xử\x20lý\x20thoigianconlai\x20OK',']không\x20xử\x20lý\x20được\x20thoigianconlai','][getCoin]:\x20','][lamQuest]Click\x20quest\x20OK','][checkClosePopup]\x20checkClosePopup\x20nè','10112102zbpONL','centerPoint',']Ra\x20game\x20nè','][checkClosePopup]Click\x20claimDailyReward\x20OK','414mtJGjh','//p[contains(@class,\x20\x27progress-value\x27)]/text()[1]',']Vào\x20game\x20OK','][getCoin]:\x20Tìm\x20thấy\x20coin:\x20','586968qORNvd',']Lấy\x20được\x20centerPoint\x20','dailyPopupClose','][getCoin]:\x20Xử\x20lý\x20coin\x20nè','][choNhatCoinXong]\x20Đã\x20đạt\x20đến\x20số\x20lần\x20thử\x20tối\x20đa\x20','][lamQuest]Không\x20click\x20được\x20vào\x20quest','][thoigianconlai]:\x20','Iframe',']Không\x20tìm\x20thấy\x20main\x20frame','12548Btncyk','//div[contains(@class,\x27popup-content\x20home-daily-task-popup\x27)]//div[contains(@class,\x27popup-close\x27)]','message','][diChuyenChuotZigZag]\x20diChuyenChuotZigZag\x20nè',']closePopup\x20OK','][diChuyenChuotZigZag]\x20bắt\x20đầu\x20Di\x20chuyển\x20chuột\x20ZigZag','Không\x20tìm\x20thấy\x20main\x20frame','][lamQuest]Không\x20tìm\x20thấy\x20quest','][Lỗi]:\x20','\x20OK',']lỗi\x20nhặt\x20coin','elementExistsByXPath',']nhặt\x20coin\x20OK','][checkClosePopup]Click\x20dailyPopupClose\x20OK','yespacClaim','][autotap]\x20Đang\x20chờ\x20nhặt\x20coin\x20xong\x20'];a0_0x2d18=function(){return _0x25c560;};return a0_0x2d18();}import{log,json}from'../modules/logger.js';export default async function (context,signal){const _0x12cf57=a0_0x35ca,choMs=ms=>new Promise(resolve=>setTimeout(resolve,ms)),{firstPage,bot,profileNameId,getAks,genlogin,http,browser,dataId,screenDataBuffer2,tasksDataBuffer2,taskIndex}=context;let currentPage=firstPage,subframe;const botName=bot['name'];let screenData=new Int32Array(screenDataBuffer2),tasksData=new Int32Array(tasksDataBuffer2),demLoop=0x0,remainTime;const xpath={'yespacClaim':'(//span[text()=\x27Claim\x27])[1]','dailyPopupClose':_0x12cf57(0x11d),'progressValue':_0x12cf57(0x110),'coin':'//div[contains(@class,\x20\x27coin-value-block\x27)]'};try{subframe=await vaoGame();if(!subframe){log(profileNameId,'['+botName+_0x12cf57(0xf7),![]);throw new Error(_0x12cf57(0xff));}log(profileNameId,'['+botName+_0x12cf57(0x111)),await delay(0x3e8);const kqClosePopup=await checkClosePopup();!kqClosePopup&&log(profileNameId,'['+botName+_0x12cf57(0xf8),null,![]);log(profileNameId,'['+botName+_0x12cf57(0x120)),await delay(0x7d0),await diChuyenChuotZigZag();const kqClaim=await choNhatCoinXong();!kqClaim&&log(profileNameId,'['+botName+_0x12cf57(0xe0),null,![]);log(profileNameId,'['+botName+_0x12cf57(0xe2));const coin=await getCoin();!coin&&log(profileNameId,'['+botName+']Không\x20tìm\x20thấy\x20coin',![]);await http['updateData'](profileNameId,profileNameId,dataId,null,null,coin),log(profileNameId,'['+botName+']Tìm\x20thấy\x20coin:\x20'+coin);const remainT=await thoigianconlai('00:05:00');return!remainT&&log(profileNameId,'['+botName+_0x12cf57(0x107),null,![]),log(profileNameId,'['+botName+_0x12cf57(0x106)),log(profileNameId,'['+botName+']nextRunAt:\x20'+remainT[_0x12cf57(0x102)]),await clearVar(),{'status':!![],'coin':coin,'nextRun':remainT['NextRun'],'nextRunStamp':remainT[_0x12cf57(0x101)]};}catch(error){return log(profileNameId,'['+botName+'][Lỗi]:\x20'+error,![]),await clearVar(),{'status':![],'coin':0x0,'nextRun':0x0,'nextRunStamp':0x0};}async function vaoGame(){const _0x3434af=_0x12cf57;try{log(profileNameId,'['+botName+']Vào\x20game\x20nè');const subframe0=await genlogin['switchFrame'](profileNameId,currentPage,getAks[_0x3434af(0x11a)],0x2710);if(!subframe0){log(profileNameId,'['+botName+_0x3434af(0xf7),![]);throw new Error(_0x3434af(0xff));}return log(profileNameId,'['+botName+']Đã\x20tìm\x20thấy\x20iframe'),subframe0;}catch(error){return log(profileNameId,'['+botName+_0x3434af(0x124)+error,![]),null;}}async function raGame(){const _0x10611f=_0x12cf57;try{log(profileNameId,'['+botName+_0x10611f(0x10d)),currentPage=genlogin[_0x10611f(0xec)](profileNameId,currentPage,'mainframe',0x7d0);if(!currentPage){log(profileNameId,'['+botName+_0x10611f(0x11b),![]);throw new Error(_0x10611f(0x122));}return currentPage;}catch(error){return log(profileNameId,'['+botName+_0x10611f(0x124)+error,![]),null;}}async function click(xpath){const _0x2e0e9b=_0x12cf57;try{await delay(0x3e8);const clicked=await genlogin['click'](profileNameId,subframe,{'xpath':xpath,'mainframe':currentPage,'browser':browser},0x3e8);await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+_0x2e0e9b(0xed)+xpath,null,![]),null;return log(profileNameId,'['+botName+_0x2e0e9b(0xfe)+xpath+_0x2e0e9b(0xdf)),clicked;}catch(error){return log(profileNameId,'['+botName+_0x2e0e9b(0xf1)+error,null,![]),null;}}async function checkClosePopup(){const _0x103699=_0x12cf57;try{log(profileNameId,'['+botName+_0x103699(0x10a));const kqClosePopup=await genlogin[_0x103699(0xe1)](profileNameId,subframe,xpath[_0x103699(0xe4)],0x7d0);if(!kqClosePopup)log(profileNameId,'['+botName+'][checkClosePopup]Không\x20tìm\x20thayas\x20claimDailyReward',null,![]);else{log(profileNameId,'['+botName+'][checkClosePopup]Tìm\x20thấy\x20claimDailyReward');const clicked=await click(xpath[_0x103699(0xe4)]);!clicked?log(profileNameId,'['+botName+'][checkClosePopup]Không\x20click\x20được\x20vào\x20claimDailyReward',null,![]):log(profileNameId,'['+botName+_0x103699(0x10e));}await delay(0xbb8);const kqClosePopup2=await genlogin[_0x103699(0xe1)](profileNameId,subframe,xpath[_0x103699(0x115)],0x7d0);if(!kqClosePopup2)log(profileNameId,'['+botName+_0x103699(0xfc),null,![]);else{log(profileNameId,'['+botName+'][checkClosePopup]Tìm\x20thayas\x20dailyPopupClose');const clicked=await click(xpath[_0x103699(0x115)]);!clicked?log(profileNameId,'['+botName+_0x103699(0xf3),null,![]):log(profileNameId,'['+botName+_0x103699(0xe3));}return await delay(0xbb8),!![];}catch(error){log(profileNameId,'['+botName+'][checkClosePopup]\x20error:\x20'+error[_0x103699(0x11e)],null,![]);}}async function getToaDo(){const _0x5afd0d=_0x12cf57;try{log(profileNameId,'['+botName+']get\x20tọa\x20độ\x20nè');const kqCenterPoint=await genlogin[_0x5afd0d(0x10c)](profileNameId,currentPage);if(!kqCenterPoint)return log(profileNameId,'['+botName+_0x5afd0d(0x104),null,![]),null;return log(profileNameId,'['+botName+_0x5afd0d(0x114)+json(kqCenterPoint)),kqCenterPoint;}catch(error){return log(profileNameId,'['+botName+'][getToaDo]:\x20'+error,null,![]),null;}}async function diChuyenChuotZigZag(){const _0xa1e298=_0x12cf57;try{log(profileNameId,'['+botName+_0xa1e298(0x11f));const centerP=await getToaDo();if(!centerP)return log(profileNameId,'['+botName+_0xa1e298(0xee),null,![]),null;return log(profileNameId,'['+botName+_0xa1e298(0x100)+json(centerP)),genlogin['moveMouseSpiral'](profileNameId,currentPage,centerP['x'],centerP['y'],0xfa,0x30d40,0x3c),log(profileNameId,'['+botName+_0xa1e298(0x121)),!![];}catch(error){log(profileNameId,'['+botName+'][diChuyenChuotZigZag]\x20error:\x20'+error[_0xa1e298(0x11e)],null,![]);}}async function choNhatCoinXong(){const _0x18161c=_0x12cf57;try{let maxAttempts=0x78,attempt=0x0;while(attempt<maxAttempts){attempt++;const coinLeft=await genlogin[_0x18161c(0xfd)](profileNameId,subframe,xpath['progressValue'],0x7d0);if(!coinLeft)return log(profileNameId,'['+botName+_0x18161c(0xfa),![]),null;log(profileNameId,'['+botName+_0x18161c(0x103)+coinLeft);if(parseInt(coinLeft)<=0x32)return log(profileNameId,'['+botName+'][choNhatCoinXong]\x20nhặt\x20coin\x20xong'),!![];log(profileNameId,'['+botName+_0x18161c(0xe5)+coinLeft+'|'+attempt),await delay(0x1388);}return log(profileNameId,'['+botName+_0x18161c(0x117)+attempt),null;}catch(e){return log(profileNameId,'['+botName+'][choNhatCoinXong]\x20error:\x20'+e[_0x18161c(0x11e)],null,![]),null;}}async function lamQuest(){const _0x536d74=_0x12cf57;try{log(profileNameId,'['+botName+_0x536d74(0xf9));const kq10=await genlogin[_0x536d74(0xe1)](profileNameId,subframe,xpath[_0x536d74(0xfb)],0x7d0);if(!kq10){log(profileNameId,'['+botName+_0x536d74(0x123),![]);throw new Error(_0x536d74(0xe7));}log(profileNameId,'['+botName+'][lamQuest]Tìm\x20thấy\x20quest');const clicked=await click(xpath[_0x536d74(0xfb)]);if(!clicked){log(profileNameId,'['+botName+_0x536d74(0x118),![]);throw new Error(_0x536d74(0xe9));}return log(profileNameId,'['+botName+_0x536d74(0x109)),!![];}catch(error){return log(profileNameId,'['+botName+'][lamQuest]:\x20'+error,null,![]),null;}}async function getCoin(){const _0x3887db=_0x12cf57;try{log(profileNameId,'['+botName+_0x3887db(0x116));const coin=await genlogin['getTextByXPath'](profileNameId,subframe,xpath[_0x3887db(0xe6)],0x7d0);if(!coin)return log(profileNameId,'['+botName+_0x3887db(0xf4),null,![]),null;return log(profileNameId,'['+botName+_0x3887db(0x112)+coin),coin;}catch(error){return log(profileNameId,'['+botName+_0x3887db(0x108)+error,null,![]),null;}}async function thoigianconlai(thoigianconlai){const _0x55c301=_0x12cf57;try{log(profileNameId,'['+botName+_0x55c301(0xe8));let parts=thoigianconlai['split'](':'),hour0=parseInt(parts[0x0]),minute0=parseInt(parts[0x1]),second0=parseInt(parts[0x2]),hours=parseInt(hour0),minutes=parseInt(minute0),seconds=parseInt(second0),totalSeconds=parseInt(hours*0xe10+minutes*0x3c+seconds);const unixTime=Math['floor'](Date[_0x55c301(0xef)]()/0x3e8),newUnixTime=unixTime+totalSeconds,newDate=new Date(newUnixTime*0x3e8),formattedDate=newDate['toLocaleDateString'](),formattedTime=newDate['toLocaleTimeString']('en-GB',{'hour12':![]});let NextRun=formattedDate+'\x20'+formattedTime;return{'NextRun':NextRun,'NextRunStamp':newUnixTime};}catch(error){return log(profileNameId,'['+botName+_0x55c301(0x119)+error,null,![]),null;}}async function delay(ms){return new Promise(async resolve=>{setTimeout(resolve,ms);});}async function cTimeout(){if(Atomics['load'](tasksData,taskIndex)===0x1)return!![];return![];}async function clearVar(){currentPage=null,subframe=null,screenData=null,tasksData=null;}};