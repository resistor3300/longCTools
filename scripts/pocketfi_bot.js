(function(_0x3a83a7,_0x138f99){const _0x5ab2bb=a0_0x2c94,_0x17136e=_0x3a83a7();while(!![]){try{const _0x480633=parseInt(_0x5ab2bb(0x1d2))/0x1*(-parseInt(_0x5ab2bb(0x17d))/0x2)+parseInt(_0x5ab2bb(0x196))/0x3*(parseInt(_0x5ab2bb(0x1b8))/0x4)+-parseInt(_0x5ab2bb(0x1b2))/0x5+-parseInt(_0x5ab2bb(0x172))/0x6*(-parseInt(_0x5ab2bb(0x178))/0x7)+parseInt(_0x5ab2bb(0x181))/0x8*(-parseInt(_0x5ab2bb(0x17c))/0x9)+-parseInt(_0x5ab2bb(0x1d0))/0xa+parseInt(_0x5ab2bb(0x1a2))/0xb;if(_0x480633===_0x138f99)break;else _0x17136e['push'](_0x17136e['shift']());}catch(_0x1fedc6){_0x17136e['push'](_0x17136e['shift']());}}}(a0_0x382f,0x418ed));import{log,json}from'../modules/logger.js';export default async function (context,signal){const _0x100e75=a0_0x2c94,choMs=ms=>new Promise(resolve=>setTimeout(resolve,ms)),{firstPage,bot,profileNameId,getAks,genlogin,http,browser,dataId,screenDataBuffer2,tasksDataBuffer2,taskIndex}=context;let currentPage=firstPage,subframe;const botName=bot[_0x100e75(0x1ce)];let screenData=new Int32Array(screenDataBuffer2),tasksData=new Int32Array(tasksDataBuffer2),soLuotLamTask=0xa,autoLamTask='y';const defaultTimeLeft=_0x100e75(0x1b1);bot['botSet']&&(parseInt(bot[_0x100e75(0x1a8)]['soLuotLamTask']['value'])>0x0&&(soLuotLamTask=parseInt(bot[_0x100e75(0x1a8)][_0x100e75(0x1ac)][_0x100e75(0x1de)])),bot[_0x100e75(0x1a8)][_0x100e75(0x19a)][_0x100e75(0x1de)]&&(autoLamTask=bot['botSet'][_0x100e75(0x19a)][_0x100e75(0x1de)]));const xpath={'home':_0x100e75(0x168),'coin':_0x100e75(0x17a),'totalBalance':_0x100e75(0x1cc),'timeLeft':'//p[contains(@class,\x20\x27leading-tight\x27)]/text()[3]','mining':_0x100e75(0x168),'tasks':_0x100e75(0x173),'pump':_0x100e75(0x194),'wallet':_0x100e75(0x1e0),'frens':_0x100e75(0x1cd)};try{subframe=await vaoGame();if(!subframe){log(profileNameId,'['+botName+_0x100e75(0x184),null,![]);throw new Error(_0x100e75(0x170));}log(profileNameId,'['+botName+_0x100e75(0x193),null,!![],'='),await delay(0x3e8);const kqClosePopup=await checkClosePopup();!kqClosePopup?log(profileNameId,'['+botName+_0x100e75(0x192),null,![]):log(profileNameId,'['+botName+_0x100e75(0x1cb));await delay(0x7d0);const kqClaim=await checkClaim();await backToHome();if(autoLamTask==='y'){const kqAutoLamTask=await checkAutoLamTask(soLuotLamTask);!kqAutoLamTask&&log(profileNameId,'['+botName+']Không\x20tìm\x20thấy\x20Auto\x20làm\x20task',null,![]),log(profileNameId,'['+botName+_0x100e75(0x187));}return await finalStep();}catch(error){return log(profileNameId,'['+botName+_0x100e75(0x16d)+error,![]),{'status':![],'coin':null,'nextRun':null,'nextRunStamp':null};}async function checkClosePopup(){const _0x85dc33=_0x100e75,xpathClosePopup={'nutX0':_0x85dc33(0x1d7),'nutX1':_0x85dc33(0x1a9),'whatSimpleActions':_0x85dc33(0x18d),'whatElseIsHere':_0x85dc33(0x169),'startMining':_0x85dc33(0x191)},keys=Object[_0x85dc33(0x1b7)](xpathClosePopup),lastKey=keys[keys[_0x85dc33(0x186)]-0x1];try{log(profileNameId,'['+botName+_0x85dc33(0x190),null,'i','-');let demLoop=0x0;const maxDemLoop=0xa;let kqWhile=0x0;while(demLoop<maxDemLoop){demLoop++;for(const [key,xpath]of Object[_0x85dc33(0x1db)](xpathClosePopup)){log(profileNameId,'['+botName+_0x85dc33(0x1ca)+xpath+_0x85dc33(0x19b)+demLoop,null,'i');const kq=await genlogin[_0x85dc33(0x1b6)](profileNameId,subframe,xpath,0x3e8);if(kq){log(profileNameId,'['+botName+_0x85dc33(0x17f)+xpath,null,'i'),await click(xpath,0x3e8),await delay(0x1f4);break;}else key==lastKey&&(kqWhile=0x1);}if(kqWhile===0x1)break;}return!![];}catch(error){return log(profileNameId,'['+botName+_0x85dc33(0x199)+error[_0x85dc33(0x17e)],null,![]),null;}}async function checkClaim(){const _0x1623ca=_0x100e75;try{const xpathClaim={'claim':_0x1623ca(0x1c9)};log(profileNameId,'['+botName+_0x1623ca(0x1bc),null,!![],'-');const kqClaim=await genlogin[_0x1623ca(0x1b6)](profileNameId,subframe,xpathClaim[_0x1623ca(0x1d5)],0x3e8);if(!kqClaim)log(profileNameId,'['+botName+_0x1623ca(0x195),null,![]);else{log(profileNameId,'['+botName+_0x1623ca(0x1c2));const clickedClaim=await click(xpathClaim[_0x1623ca(0x1d5)]);!clickedClaim?log(profileNameId,'['+botName+_0x1623ca(0x1bd),null,![]):(log(profileNameId,'['+botName+_0x1623ca(0x1d1)),await delay(0x3e8));}return await checkQuayLaiXpath(xpath['home']),!![];}catch(e){return log(profileNameId,'['+botName+_0x1623ca(0x1d8)+e[_0x1623ca(0x17e)],null,![]),null;}}async function backToHome(){const _0x4ee0a4=_0x100e75;try{log(profileNameId,'['+botName+_0x4ee0a4(0x175));const kqVaoHome=await genlogin[_0x4ee0a4(0x1b6)](profileNameId,subframe,xpath[_0x4ee0a4(0x1c4)],0x3e8);if(!kqVaoHome)return log(profileNameId,'['+botName+_0x4ee0a4(0x1a7),null,![]),null;else{log(profileNameId,'['+botName+_0x4ee0a4(0x1a1));const clickedHome=await click(xpath['home']);return!clickedHome?(log(profileNameId,'['+botName+_0x4ee0a4(0x1a4),null,![]),null):(log(profileNameId,'['+botName+_0x4ee0a4(0x1da)),await delay(0x3e8),await AdsGramDetect(),!![]);}}catch(e){return log(profileNameId,'['+botName+'][backToHome]\x20error:\x20'+e[_0x4ee0a4(0x17e)],null,![]),null;}}async function checkAutoLamTask(soLuotLamTask){const _0x1c9a58=_0x100e75,xpathLamTask={'tasks':'//div[contains(@class,\x27bottom\x27)]//p[contains(text(),\x27Tasks\x27)\x20and\x20(contains(@class,\x27text-dark-blue\x27))]','pcketFi':'//div[contains(text(),\x27PocketFi\x27)\x20and\x20(contains(@class,\x27text-new-dark-blue\x27))]','claimDaily':_0x1c9a58(0x174),'nutX0':_0x1c9a58(0x1ad),'dailyBoost':_0x1c9a58(0x1ba)},keys=Object['keys'](xpathLamTask),lastKey=keys[keys[_0x1c9a58(0x186)]-0x1];try{log(profileNameId,'['+botName+_0x1c9a58(0x1d9),null,'i','-');let demLoop=0x0;const maxDemLoop=soLuotLamTask;let kqWhile=0x0;while(demLoop<maxDemLoop){demLoop++;for(const [key,xpath]of Object[_0x1c9a58(0x1db)](xpathLamTask)){log(profileNameId,'['+botName+_0x1c9a58(0x19c)+xpath+_0x1c9a58(0x19b)+demLoop,null,'i');const kq=await genlogin['elementExistsByXPath'](profileNameId,subframe,xpath,0x3e8);if(kq){log(profileNameId,'['+botName+_0x1c9a58(0x1be)+xpath,null,'i'),await click(xpath,0x3e8),await delay(0x1f4);break;}else key==lastKey&&(kqWhile=0x1);}if(kqWhile===0x1)break;}return!![];}catch(error){return log(profileNameId,'['+botName+_0x1c9a58(0x1c7)+error[_0x1c9a58(0x17e)],null,![]),null;}}async function getCoin(){const _0x591c97=_0x100e75;try{let coinValue=0x0,xpathCoin=xpath[_0x591c97(0x176)];log(profileNameId,'['+botName+'][getCoin]:\x20Xử\x20lý\x20coin\x20nè');const kqCoin=await genlogin['elementExistsByXPath'](profileNameId,subframe,xpathCoin,0x3e8);if(!kqCoin)return log(profileNameId,'['+botName+'][getCoin]:\x20Không\x20tìm\x20thấy\x20xpathCoin',null,![]),null;else{log(profileNameId,'['+botName+_0x591c97(0x1b5));const coinText=await genlogin[_0x591c97(0x185)](profileNameId,subframe,xpathCoin);log(profileNameId,'['+botName+_0x591c97(0x1af)+coinText),coinValue=coinText;}return coinValue;}catch(error){return log(profileNameId,'['+botName+_0x591c97(0x18f)+error,null,![]),null;}}async function finalStep(){const _0x29418e=_0x100e75;try{log(profileNameId,'['+botName+_0x29418e(0x167),null,'i','-');let timeLeft='00:10:00';await backToHome();const coin=await getCoin();!coin?log(profileNameId,'['+botName+']Không\x20tìm\x20thấy\x20coin',![]):(await http[_0x29418e(0x1dc)](profileNameId,profileNameId,dataId,null,null,coin),log(profileNameId,'['+botName+']Tìm\x20thấy\x20coin:\x20'+coin));const kqCktimeLeft=await genlogin[_0x29418e(0x1b6)](profileNameId,subframe,xpath['timeLeft'],0x3e8);!kqCktimeLeft&&log(profileNameId,'['+botName+_0x29418e(0x18a),null,![]);const kqTimeLeft=await genlogin[_0x29418e(0x185)](profileNameId,subframe,xpath[_0x29418e(0x1a6)]);!kqTimeLeft?log(profileNameId,'['+botName+_0x29418e(0x18a),null,![]):(log(profileNameId,'['+botName+']Tìm\x20thấy\x20timeleft:\x20'+kqTimeLeft),timeLeft=kqTimeLeft);log(profileNameId,'['+botName+']timeleft:\x20'+timeLeft,null,'i');const remainT=await thoigianconlai(timeLeft);return!remainT&&log(profileNameId,'['+botName+_0x29418e(0x188),null,![]),log(profileNameId,'['+botName+']Xử\x20lý\x20thoigianconlai\x20OK'),log(profileNameId,'['+botName+_0x29418e(0x1c5)+remainT[_0x29418e(0x171)]),{'status':!![],'coin':coin,'nextRun':remainT[_0x29418e(0x171)],'nextRunStamp':remainT[_0x29418e(0x1d4)]};}catch(error){return log(profileNameId,'['+botName+'][finalStep]\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20cuối\x20cùng:\x20'+error[_0x29418e(0x17e)],null,![]),{'status':![],'coin':null,'nextRun':null,'nextRunStamp':null};}}async function checkQuayLaiXpath(backXpath){const _0x344fea=_0x100e75;try{const maxattemptCQ=0x5;let attemptCQ=0x0;const loopBack={'walletClose':_0x344fea(0x1c1),'dialogClose':_0x344fea(0x16c),'closeQcBtn':_0x344fea(0x16a)};while(attemptCQ<maxattemptCQ){attemptCQ++,await delay(0x3e8);const kqCloseQcBtn=await genlogin['elementExistsByXPath'](profileNameId,subframe,loopBack[_0x344fea(0x1bb)],0x7d0);if(kqCloseQcBtn){const kqClickCloseQcBtn=await click(loopBack['closeQcBtn']);if(!kqClickCloseQcBtn){log(profileNameId,'['+botName+_0x344fea(0x18c),null,![]);continue;}log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Click\x20closeQcBtn\x20OK');}log(profileNameId,'['+botName+_0x344fea(0x179)+attemptCQ);const currentPage=await genlogin['getCurrentPage'](profileNameId,browser);if(!currentPage){log(profileNameId,'['+botName+_0x344fea(0x16f),null,![]);continue;}log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Tìm\x20thấy\x20currentPage');const kqTelePage=await genlogin[_0x344fea(0x1b6)](profileNameId,currentPage,getAks[_0x344fea(0x19d)],0x7d0);if(!kqTelePage){log(profileNameId,'['+botName+_0x344fea(0x1df));const countTab=await genlogin[_0x344fea(0x1bf)](profileNameId,browser);if(countTab<=0x1){log(profileNameId,'['+botName+_0x344fea(0x166)+countTab+'\x20tab\x20đang\x20mở');break;}const closeTab=await genlogin[_0x344fea(0x18b)](profileNameId,browser,countTab-0x1,0xbb8);if(!closeTab){log(profileNameId,'['+botName+_0x344fea(0x1d3),null,![]);continue;}log(profileNameId,'['+botName+_0x344fea(0x16e)),await delay(0xbb8);continue;}log(profileNameId,'['+botName+_0x344fea(0x1ab)),subframe=await vaoGame();if(!subframe){log(profileNameId,'['+botName+_0x344fea(0x177),null,![]);continue;}log(profileNameId,'['+botName+_0x344fea(0x197));const kqbackXpath=await genlogin[_0x344fea(0x1b6)](profileNameId,subframe,backXpath,0x7d0);if(kqbackXpath){log(profileNameId,'['+botName+_0x344fea(0x1c8));break;}if(!![]){let attemptBack=0x0,maxAttempBack=0x5,kqBack=![];while(attemptBack<maxAttempBack){attemptBack++,log(profileNameId,'['+botName+_0x344fea(0x1b3)+attemptBack);const kqbackXpath=await genlogin[_0x344fea(0x1b6)](profileNameId,subframe,backXpath,0x7d0);if(kqbackXpath){log(profileNameId,'['+botName+_0x344fea(0x1c8));break;}const kqb0=await genlogin[_0x344fea(0x1b6)](profileNameId,currentPage,getAks[_0x344fea(0x16b)],0x3e8);if(kqb0){await clickM(getAks['popupBackBtn']);continue;}await delay(0x3e8);}}const kqPopupLaunch=await genlogin[_0x344fea(0x1b6)](profileNameId,currentPage,getAks[_0x344fea(0x1a5)],0x3e8);if(kqPopupLaunch){await clickM(getAks['LaunchCancel']);continue;}await delay(0x3e8),await AdsGramDetect();}return log(profileNameId,'['+botName+_0x344fea(0x1b9)),!![];}catch(error){return log(profileNameId,'['+botName+_0x344fea(0x1cf)+error[_0x344fea(0x17e)],null,![]),null;}}async function vaoGame(){const _0x3db8c0=_0x100e75;try{log(profileNameId,'['+botName+']Vào\x20game\x20nè');const subframe0=await genlogin[_0x3db8c0(0x198)](profileNameId,currentPage,getAks['Iframe'],0x2710);if(!subframe0){log(profileNameId,'['+botName+_0x3db8c0(0x184),![]);throw new Error(_0x3db8c0(0x170));}return log(profileNameId,'['+botName+_0x3db8c0(0x19e)),subframe0;}catch(error){return log(profileNameId,'['+botName+_0x3db8c0(0x16d)+error,![]),null;}}async function raGame(){const _0x3fe791=_0x100e75;try{log(profileNameId,'['+botName+_0x3fe791(0x1a0)),currentPage=genlogin[_0x3fe791(0x198)](profileNameId,currentPage,_0x3fe791(0x1b0),0x7d0);if(!currentPage){log(profileNameId,'['+botName+_0x3fe791(0x1c0),![]);throw new Error('Không\x20tìm\x20thấy\x20main\x20frame');}return currentPage;}catch(error){return log(profileNameId,'['+botName+_0x3fe791(0x16d)+error,![]),null;}}async function click(xpath){const _0x16a96b=_0x100e75;try{await delay(0x3e8);const clicked=await genlogin[_0x16a96b(0x180)](profileNameId,subframe,{'xpath':xpath,'mainframe':currentPage,'browser':browser},0x7d0);await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+_0x16a96b(0x1b4)+xpath,null,![]),!![];return log(profileNameId,'['+botName+'][click]Click\x20'+xpath+_0x16a96b(0x183)),clicked;}catch(error){return log(profileNameId,'['+botName+'][click][Lỗi]:\x20'+error,null,![]),null;}}async function clickM(xpath){const _0x17fcc1=_0x100e75;try{await delay(0x3e8);const clicked=await genlogin[_0x17fcc1(0x180)](profileNameId,currentPage,{'xpath':xpath,'mainframe':currentPage,'browser':browser},0x3e8);await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+'][click]Không\x20click\x20được\x20vào\x20'+xpath,null,![]),null;return log(profileNameId,'['+botName+_0x17fcc1(0x189)+xpath+_0x17fcc1(0x183)),clicked;}catch(error){return log(profileNameId,'['+botName+_0x17fcc1(0x19f)+error,null,![]),null;}}async function thoigianconlai(thoigianconlai){const _0x5b2570=_0x100e75;try{log(profileNameId,'['+botName+_0x5b2570(0x1c3));let parts=thoigianconlai[_0x5b2570(0x1dd)](':');parts[_0x5b2570(0x186)]<0x1&&(parts=defaultTimeLeft['split'](':'));let hour0=parseInt(parts[0x0]),minute0=parseInt(parts[0x1]),second0=parseInt(parts[0x2]),hours=parseInt(hour0),minutes=parseInt(minute0),seconds=parseInt(second0),totalSeconds=parseInt(hours*0xe10+minutes*0x3c+seconds);const unixTime=Math[_0x5b2570(0x1c6)](Date[_0x5b2570(0x1aa)]()/0x3e8),newUnixTime=unixTime+totalSeconds,newDate=new Date(newUnixTime*0x3e8),formattedDate=newDate[_0x5b2570(0x17b)](),formattedTime=newDate['toLocaleTimeString']('en-GB',{'hour12':![]});let NextRun=formattedDate+'\x20'+formattedTime;return{'NextRun':NextRun,'NextRunStamp':newUnixTime};}catch(error){return log(profileNameId,'['+botName+_0x5b2570(0x1ae)+error,null,![]),null;}}async function AdsGramDetect(){const _0x37c77f=_0x100e75;try{const xpathAdsGram=_0x37c77f(0x18e);let kqAdsGram=await genlogin[_0x37c77f(0x1b6)](profileNameId,subframe,xpathAdsGram,0x3e8);if(kqAdsGram){let demLoop=0x0;const maxDemLoop=0x3c;while(demLoop<maxDemLoop){demLoop++,kqAdsGram=await genlogin[_0x37c77f(0x1b6)](profileNameId,subframe,xpathAdsGram,0x3e8),log(profileNameId,'['+botName+'][AdsGramDetec]:\x20đang\x20chờ\x20Ads\x20'+demLoop+'/'+maxDemLoop,null,'i');if(!kqAdsGram){log(profileNameId,'['+botName+_0x37c77f(0x182),null,'i');break;}await choMs(0x7d0);}return!![];}else{const kqAdsGram2=await genlogin[_0x37c77f(0x1b6)](profileNameId,currentPage,getAks[_0x37c77f(0x1d6)],0x3e8);if(kqAdsGram2)return await clickM(getAks[_0x37c77f(0x1d6)]),!![];return null;}}catch(error){return log(profileNameId,'['+botName+'][AdsGramDetec]:\x20'+error,null,![]),null;}}async function delay(ms){return new Promise(async resolve=>{setTimeout(resolve,ms);});}async function cTimeout(){const _0x4e8cf7=_0x100e75;if(Atomics[_0x4e8cf7(0x1a3)](tasksData,taskIndex)===0x1)return!![];return![];}}function a0_0x2c94(_0x9f444d,_0x38357c){const _0x382fa9=a0_0x382f();return a0_0x2c94=function(_0x2c9459,_0x42cd9f){_0x2c9459=_0x2c9459-0x166;let _0x26841a=_0x382fa9[_0x2c9459];return _0x26841a;},a0_0x2c94(_0x9f444d,_0x38357c);};function a0_0x382f(){const _0x58610d=['//div[contains(@class,\x27/banners/\x27)]//button[contains(@class,\x27p-2\x27)]','now','][checkQuayLaiXpath]\x20Không\x20phát\x20hiện\x20tab\x20mới','soLuotLamTask','//button[contains(@class,\x27right-4\x20p-2.5\x27)]','][thoigianconlai]:\x20','][getCoin]:\x20coinText:\x20','mainframe','00:10:00','642495UpzriC','][checkQuayLaiXpath]\x20Kiểm\x20tra\x20lần\x20quay\x20lại:\x20','][click]Không\x20click\x20được\x20vào\x20','][getCoin]:\x20Tìm\x20thấy\x20xpathCoin','elementExistsByXPath','keys','20pNEMSg','][checkQuayLaiXpath]\x20quay\x20lại\x20tasks\x20thành\x20công','//p[contains(text(),\x27Daily\x20boost\x27)]','closeQcBtn','][checkClaim]\x20check\x20Claim','][checkClaim]Không\x20click\x20là\x20claim','][checkAutoLamTask]\x20Click:\x20','countOpenTabs',']Không\x20tìm\x20thấy\x20main\x20frame','(//div[contains(@data-tc-modal,\x27true\x27)]//button[contains(@data-tc-icon-button,\x27true\x27)])[1]','][checkClaim]Tìm\x20thấy\x20claim','][thoigianconlai]:Xử\x20lý\x20gian\x20còn\x20lại\x20nè','home',']nextRunAt:\x20','floor','][checkAutoLamTask]\x20error:\x20','][checkQuayLaiXpath]\x20Tìm\x20thấy\x20backXpath','//span[text()=\x27claim\x27]','][checkClosePopup]\x20XPath:\x20',']closePopup\x20OK','//p[contains(@class,\x27text-sm\x20font-bold\x27)]','//div[contains(@class,\x27bottom\x27)]//p[contains(text(),\x27Frens\x27)]','name','][checkQuayLaiXpath]\x20Lỗi\x20trong\x20quá\x20trình\x20kiểm\x20tra:\x20','2021720AHlLwZ','][checkClaim]Click\x20claim\x20OK','41988AXzGvS','][checkQuayLaiXpath]\x20Lỗi\x20khi\x20đóng\x20tab\x20mới','NextRunStamp','claim','closeAds','//button[contains(@class,\x27absolute\x20top-4\x20right-4\x20p-2\x20text-dark-blue\x20bg-white\x20rounded-full\x27)]','][checkClaim]\x20error:\x20','][checkAutoLamTask]\x20checkAutoLamTask\x20nè','][backToHome]Click\x20vaoHome\x20OK','entries','updateData','split','value','][checkQuayLaiXpath]\x20Phát\x20hiện\x20tab\x20mới','//div[contains(@class,\x27bottom\x27)]//p[contains(text(),\x27Wallet\x27)]','][checkQuayLaiXpath]\x20Chỉ\x20có\x20','][finalStep]\x20finalStep','//div[contains(@class,\x27bottom\x27)]//p[contains(text(),\x27Mining\x27)]','//button[contains(text(),\x27here\x27)]','//div[contains(@class,\x27close_btn\x27)]','popupBackBtn','(//dialog//button[contains(@class,\x27close-btn\x27)])[1]','][Lỗi]:\x20','][checkQuayLaiXpath]\x20Đóng\x20tab\x20mới\x20thành\x20công','][checkQuayLaiXpath]\x20Không\x20tìm\x20thấy\x20currentPage','Không\x20tìm\x20thấy\x20iframe','NextRun','1479156pjbJMX','//div[contains(@class,\x27bottom\x27)]//p[contains(text(),\x27Tasks\x27)\x20and\x20(contains(@class,\x27text-dark-blue\x27))]','//button[contains(text(),\x27Claim\x20daily\x20reward\x27)]','][backToHome]\x20backToHome\x20nè','coin','][checkQuayLaiXpath]\x20Không\x20tìm\x20thấy\x20iframe','14wdKviv','][checkQuayLaiXpath]\x20Kiểm\x20tra\x20lần:\x20','//span[contains(@class,\x27text-2xl\x20font-bold\x27)]','toLocaleDateString','27uxdHOf','8VRIIXY','message','][checkClosePopup]\x20Click:\x20','click','625352fSxVkC','][AdsGramDetec]:\x20Done\x20Ads','\x20OK',']Không\x20tìm\x20thấy\x20iframe','getTextByXPath','length',']Auto\x20làm\x20task\x20OK',']không\x20xử\x20lý\x20được\x20thoigianconlai','][click]Click\x20',']Không\x20tìm\x20thấy\x20timeleft','closeTab','][checkQuayLaiXpath]Không\x20click\x20được\x20vào\x20closeQcBtn','//button[contains(text(),\x27actions\x27)]','//div[contains(@style,\x27-adsgram-\x27)]','][getCoin]:\x20','][checkClosePopup]\x20checkClosePopup\x20nè','//button[contains(text(),\x27Start\x20mining\x27)]',']Không\x20tìm\x20thấy\x20closePopup',']Vào\x20game\x20OK','//div[contains(@class,\x27bottom\x27)]//p[contains(text(),\x27Pump\x27)]','][checkClaim]Không\x20tìm\x20thấy\x20claim','289890pCYDjO','][checkQuayLaiXpath]\x20Vào\x20game\x20thành\x20công','switchFrame','][checkClosePopup]\x20error:\x20','autoLamTask','\x20demLoop:','][checkAutoLamTask]\x20XPath:\x20','CloseGame',']Đã\x20tìm\x20thấy\x20iframe','][click][Lỗi]:\x20',']Ra\x20game\x20nè','][backToHome]Tìm\x20thấy\x20vaoHome','279983FRUxZO','load','][backToHome]Không\x20click\x20là\x20vaoHome','LaunchCancel','timeLeft','][backToHome]Không\x20tìm\x20thấy\x20vaoHome','botSet'];a0_0x382f=function(){return _0x58610d;};return a0_0x382f();}