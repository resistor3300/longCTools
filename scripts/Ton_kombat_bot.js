(function(_0x47f555,_0x359741){const _0x14d1b3=a0_0x3b84,_0x41d0a1=_0x47f555();while(!![]){try{const _0x3616db=-parseInt(_0x14d1b3(0x186))/0x1*(-parseInt(_0x14d1b3(0x166))/0x2)+-parseInt(_0x14d1b3(0x183))/0x3+-parseInt(_0x14d1b3(0x169))/0x4+parseInt(_0x14d1b3(0x173))/0x5+parseInt(_0x14d1b3(0x16a))/0x6+-parseInt(_0x14d1b3(0x16d))/0x7*(-parseInt(_0x14d1b3(0x18b))/0x8)+-parseInt(_0x14d1b3(0x182))/0x9;if(_0x3616db===_0x359741)break;else _0x41d0a1['push'](_0x41d0a1['shift']());}catch(_0x15d60b){_0x41d0a1['push'](_0x41d0a1['shift']());}}}(a0_0x1578,0x52040));import{log,json}from'../modules/logger.js';function a0_0x3b84(_0x186473,_0x494acf){const _0x15787d=a0_0x1578();return a0_0x3b84=function(_0x3b841d,_0x4c9b3f){_0x3b841d=_0x3b841d-0x13a;let _0x5dbd14=_0x15787d[_0x3b841d];return _0x5dbd14;},a0_0x3b84(_0x186473,_0x494acf);}export default async function (context,signal){const _0x4f2092=a0_0x3b84,choMs=ms=>new Promise(resolve=>setTimeout(resolve,ms)),{firstPage,bot,profileNameId,getAks,genlogin,http,browser,dataId,screenDataBuffer2,tasksDataBuffer2,taskIndex}=context;let currentPage=firstPage,subframe;const botName=bot[_0x4f2092(0x14e)];let screenData=new Int32Array(screenDataBuffer2),tasksData=new Int32Array(tasksDataBuffer2),demLoop=0x0,remainTime;const xpath={'checkNews':_0x4f2092(0x153),'claim':'//span[text()=\x27Claim\x27]','coin':_0x4f2092(0x167)};try{subframe=await vaoGame();if(!subframe){log(profileNameId,'['+botName+_0x4f2092(0x164),![]);throw new Error('Không\x20tìm\x20thấy\x20iframe');}log(profileNameId,'['+botName+_0x4f2092(0x150)),await delay(0x3e8);const kqCheckNews=await genlogin[_0x4f2092(0x185)](profileNameId,subframe,xpath[_0x4f2092(0x175)],0x7d0);if(!kqCheckNews)log(profileNameId,'['+botName+_0x4f2092(0x161),null,![]);else{log(profileNameId,'['+botName+_0x4f2092(0x179));const clicked=await click(xpath[_0x4f2092(0x175)]);if(!clicked)log(profileNameId,'['+botName+_0x4f2092(0x146),null,![]);else return log(profileNameId,'['+botName+_0x4f2092(0x163)),{'status':_0x4f2092(0x13c)};}const kqClaim=await checkClaim();!kqClaim&&log(profileNameId,'['+botName+_0x4f2092(0x160),null,![]);log(profileNameId,'['+botName+_0x4f2092(0x148));const coin=await getCoin();!coin&&log(profileNameId,'['+botName+']Không\x20tìm\x20thấy\x20coin',![]);await http[_0x4f2092(0x16e)](profileNameId,profileNameId,dataId,null,null,coin),log(profileNameId,'['+botName+_0x4f2092(0x13e)+coin);const remainT=await thoigianconlai(_0x4f2092(0x14c));return!remainT&&log(profileNameId,'['+botName+_0x4f2092(0x143),null,![]),log(profileNameId,'['+botName+']Xử\x20lý\x20thoigianconlai\x20OK'),log(profileNameId,'['+botName+_0x4f2092(0x176)+remainT[_0x4f2092(0x14a)]),{'status':!![],'coin':coin,'nextRun':remainT[_0x4f2092(0x14a)],'nextRunStamp':remainT['NextRunStamp']};}catch(error){log(profileNameId,'['+botName+_0x4f2092(0x157)+error,![]);}async function vaoGame(){const _0x5a1ddd=_0x4f2092;try{log(profileNameId,'['+botName+']Vào\x20game\x20nè');const subframe0=await genlogin[_0x5a1ddd(0x178)](profileNameId,currentPage,getAks[_0x5a1ddd(0x13a)],0x2710);if(!subframe0){log(profileNameId,'['+botName+_0x5a1ddd(0x164),![]);throw new Error(_0x5a1ddd(0x165));}return log(profileNameId,'['+botName+']Đã\x20tìm\x20thấy\x20iframe'),subframe0;}catch(error){return log(profileNameId,'['+botName+_0x5a1ddd(0x157)+error,![]),null;}}async function raGame(){const _0xda5011=_0x4f2092;try{log(profileNameId,'['+botName+_0xda5011(0x168)),currentPage=genlogin[_0xda5011(0x178)](profileNameId,currentPage,_0xda5011(0x144),0x7d0);if(!currentPage){log(profileNameId,'['+botName+_0xda5011(0x142),![]);throw new Error(_0xda5011(0x17e));}return currentPage;}catch(error){return log(profileNameId,'['+botName+_0xda5011(0x157)+error,![]),null;}}async function click(xpath){const _0x2fb327=_0x4f2092;try{await delay(0x3e8);const clicked=await genlogin[_0x2fb327(0x15d)](profileNameId,subframe,{'xpath':xpath,'mainframe':currentPage,'browser':browser},0x3e8);await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+_0x2fb327(0x16c)+xpath,null,![]),null;return log(profileNameId,'['+botName+_0x2fb327(0x14d)+xpath+_0x2fb327(0x177)),clicked;}catch(error){return log(profileNameId,'['+botName+_0x2fb327(0x18a)+error,null,![]),null;}}async function autoTap(tapElement){const _0x17a25e=_0x4f2092;try{log(profileNameId,'['+botName+_0x17a25e(0x156)+tapElement+'\x20nè');let codeAutoTap=await getFile(botName+_0x17a25e(0x162));return genlogin[_0x17a25e(0x17d)](profileNameId,subframe,codeAutoTap),log(profileNameId,'['+botName+_0x17a25e(0x156)+tapElement+_0x17a25e(0x177)),!![];}catch(error){return log(profileNameId,'['+botName+'][autoTap]:\x20'+error,null,![]),null;}}async function getFile(nameFile){const _0x4cbc76=_0x4f2092;try{const fs=require('fs'),path=require(_0x4cbc76(0x15e)),filePath=path[_0x4cbc76(0x174)](__dirname,_0x4cbc76(0x17d),nameFile),code=await fs[_0x4cbc76(0x15b)]['readFile'](filePath,_0x4cbc76(0x189));return code;}catch(e){log(_0x4cbc76(0x170)+e[_0x4cbc76(0x151)]);}}async function checkClosePopup(){const _0x69fdae=_0x4f2092;try{log(profileNameId,'['+botName+_0x69fdae(0x17b));const kqClosePopup=await genlogin['elementExistsByXPath'](profileNameId,subframe,xpath['claimDailyReward'],0x7d0);if(!kqClosePopup)log(profileNameId,'['+botName+_0x69fdae(0x158),null,![]);else{log(profileNameId,'['+botName+_0x69fdae(0x152));const clicked=await click(xpath[_0x69fdae(0x181)]);!clicked?log(profileNameId,'['+botName+_0x69fdae(0x17f),null,![]):log(profileNameId,'['+botName+_0x69fdae(0x188));}return await delay(0xbb8),!![];}catch(error){log(profileNameId,'['+botName+_0x69fdae(0x140)+error['message'],null,![]);}}async function checkClaim(){const _0x9ccba7=_0x4f2092;try{log(profileNameId,'['+botName+_0x9ccba7(0x141));const kqClaim=await genlogin[_0x9ccba7(0x185)](profileNameId,subframe,xpath[_0x9ccba7(0x149)],0x7d0);if(!kqClaim)log(profileNameId,'['+botName+'][checkClaim]Không\x20tìm\x20thấy\x20claim',null,![]);else{log(profileNameId,'['+botName+_0x9ccba7(0x184));const clicked=await click(xpath[_0x9ccba7(0x149)]);!clicked?log(profileNameId,'['+botName+_0x9ccba7(0x171),null,![]):log(profileNameId,'['+botName+'][checkClaim]Click\x20claim\x20OK');}return await delay(0x3e8),!![];}catch(e){return log(profileNameId,'['+botName+_0x9ccba7(0x13b)+e[_0x9ccba7(0x151)],null,![]),null;}}async function lamQuest(){const _0x5d3334=_0x4f2092;try{log(profileNameId,'['+botName+_0x5d3334(0x17a));const kq10=await genlogin[_0x5d3334(0x185)](profileNameId,subframe,xpath[_0x5d3334(0x155)],0x7d0);if(!kq10){log(profileNameId,'['+botName+'][lamQuest]Không\x20tìm\x20thấy\x20quest',![]);throw new Error(_0x5d3334(0x13d));}log(profileNameId,'['+botName+'][lamQuest]Tìm\x20thấy\x20quest');const clicked=await click(xpath[_0x5d3334(0x155)]);if(!clicked){log(profileNameId,'['+botName+'][lamQuest]Không\x20click\x20được\x20vào\x20quest',![]);throw new Error(_0x5d3334(0x15a));}return log(profileNameId,'['+botName+_0x5d3334(0x15c)),!![];}catch(error){return log(profileNameId,'['+botName+_0x5d3334(0x16f)+error,null,![]),null;}}async function getCoin(){const _0x4737e5=_0x4f2092;try{let xpathCoin=xpath[_0x4737e5(0x15f)];log(profileNameId,'['+botName+_0x4737e5(0x13f));const numberString=await subframe[_0x4737e5(0x147)](xpathCoin=>{const _0x34d9bf=_0x4737e5,result=document['evaluate'](xpathCoin,document,null,XPathResult['ORDERED_NODE_SNAPSHOT_TYPE'],null);let numberString='';for(let i=0x0;i<result[_0x34d9bf(0x145)];i++){numberString+=result[_0x34d9bf(0x14b)](i)[_0x34d9bf(0x172)];}return numberString;},xpathCoin);return numberString;}catch(error){return log(profileNameId,'['+botName+_0x4737e5(0x16b)+error,null,![]),null;}}async function thoigianconlai(thoigianconlai){const _0x42d71a=_0x4f2092;try{log(profileNameId,'['+botName+_0x42d71a(0x154));let parts=thoigianconlai[_0x42d71a(0x17c)](':'),hour0=parseInt(parts[0x0]),minute0=parseInt(parts[0x1]),second0=parseInt(parts[0x2]),hours=parseInt(hour0),minutes=parseInt(minute0),seconds=parseInt(second0),totalSeconds=parseInt(hours*0xe10+minutes*0x3c+seconds);const unixTime=Math[_0x42d71a(0x180)](Date['now']()/0x3e8),newUnixTime=unixTime+totalSeconds,newDate=new Date(newUnixTime*0x3e8),formattedDate=newDate['toLocaleDateString'](),formattedTime=newDate[_0x42d71a(0x14f)]('en-GB',{'hour12':![]});let NextRun=formattedDate+'\x20'+formattedTime;return{'NextRun':NextRun,'NextRunStamp':newUnixTime};}catch(error){return log(profileNameId,'['+botName+_0x42d71a(0x187)+error,null,![]),null;}}async function delay(ms){return new Promise(async resolve=>{setTimeout(resolve,ms);});}async function cTimeout(){const _0x37af23=_0x4f2092;if(Atomics[_0x37af23(0x159)](tasksData,taskIndex)===0x1)return!![];return![];}};function a0_0x1578(){const _0x19e454=['message','][checkClosePopup]Tìm\x20thấy\x20claimDailyReward','//span[text()=\x27Check\x20news\x27]','][thoigianconlai]:Xử\x20lý\x20gian\x20còn\x20lại\x20nè','quest',']Auto\x20tap\x20','][Lỗi]:\x20','][checkClosePopup]Không\x20tìm\x20thayas\x20claimDailyReward','load','Không\x20click\x20được\x20vào\x20quest','promises','][lamQuest]Click\x20quest\x20OK','click','path','coin',']Không\x20tìm\x20thấy\x20Claim',']Không\x20tìm\x20thấy\x20Check\x20news','-autoTap',']Click\x20Check\x20news\x20OK',']Không\x20tìm\x20thấy\x20iframe','Không\x20tìm\x20thấy\x20iframe','12086GgWpyF','//span[contains(@class,\x27text-shadow\x20font-bold\x20text-3xl\x20lsm:text-[40px]\x27)]',']Ra\x20game\x20nè','2454828chlmzw','2013600BBrQDz','][getCoin]:\x20','][click]Không\x20click\x20được\x20vào\x20','1383347MygeqN','updateData','][lamQuest]:\x20','[getFile]\x20error:\x20','][checkClaim]Không\x20click\x20được\x20vào\x20claim','textContent','2270015mZJpTD','join','checkNews',']nextRunAt:\x20','\x20OK','switchFrame',']Tìm\x20thấy\x20Check\x20news','][lamQuest]Làm\x20Quest\x20nè','][checkClosePopup]\x20checkClosePopup\x20nè','split','javascript','Không\x20tìm\x20thấy\x20main\x20frame','][checkClosePopup]Không\x20click\x20được\x20vào\x20claimDailyReward','floor','claimDailyReward','3192570IuDjIx','1521438XxEyLh','][checkClaim]Tìm\x20thấy\x20claim','elementExistsByXPath','71DVfEFr','][thoigianconlai]:\x20','][checkClosePopup]Click\x20claimDailyReward\x20OK','utf8','][click][Lỗi]:\x20','24rajjCw','Iframe','][checkClaim]\x20error:\x20','loop','Không\x20tìm\x20thấy\x20quest',']Tìm\x20thấy\x20coin:\x20','][getCoin]:\x20Xử\x20lý\x20coin\x20nè','][checkClosePopup]\x20error:\x20','][checkClaim]\x20checkClaim\x20nè',']Không\x20tìm\x20thấy\x20main\x20frame',']không\x20xử\x20lý\x20được\x20thoigianconlai','mainframe','snapshotLength',']Không\x20click\x20được\x20vào\x20Check\x20news','evaluate',']Claim\x20OK','claim','NextRun','snapshotItem','01:00:00','][click]Click\x20','name','toLocaleTimeString',']Vào\x20game\x20OK'];a0_0x1578=function(){return _0x19e454;};return a0_0x1578();}