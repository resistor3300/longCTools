(function(_0x30bb2d,_0x559530){const _0x355d5b=a0_0xd05a,_0x221409=_0x30bb2d();while(!![]){try{const _0x1e9ae4=-parseInt(_0x355d5b(0x156))/0x1*(-parseInt(_0x355d5b(0x135))/0x2)+-parseInt(_0x355d5b(0x1ba))/0x3*(parseInt(_0x355d5b(0x158))/0x4)+parseInt(_0x355d5b(0x1a1))/0x5*(-parseInt(_0x355d5b(0x133))/0x6)+parseInt(_0x355d5b(0x188))/0x7+-parseInt(_0x355d5b(0x178))/0x8+-parseInt(_0x355d5b(0x19d))/0x9*(parseInt(_0x355d5b(0x1b8))/0xa)+-parseInt(_0x355d5b(0x169))/0xb*(-parseInt(_0x355d5b(0x148))/0xc);if(_0x1e9ae4===_0x559530)break;else _0x221409['push'](_0x221409['shift']());}catch(_0x480d43){_0x221409['push'](_0x221409['shift']());}}}(a0_0x14f3,0x90473));import{log,json}from'../modules/logger.js';export default async function (context,signal){const _0x132f1a=a0_0xd05a,choMs=ms=>new Promise(resolve=>setTimeout(resolve,ms)),{firstPage,bot,profileNameId,getAks,genlogin,http,browser,dataId,screenDataBuffer2,tasksDataBuffer2,taskIndex}=context;let currentPage=firstPage,subframe;const botName=bot[_0x132f1a(0x151)];let screenData=new Int32Array(screenDataBuffer2),tasksData=new Int32Array(tasksDataBuffer2);const xpath={'home':'//div[contains(@id,\x27bottom-bar\x27)]//span[text()=\x27Wallet\x27]','coin':_0x132f1a(0x1a7),'totalBalance':_0x132f1a(0x1b5),'timeLeft':_0x132f1a(0x155),'stickers':'//div[contains(@class,\x27_navbar_\x27)]//div[text()=\x27Stickers\x27]','frends':_0x132f1a(0x1bd),'connectDogs':'//div[contains(@class,\x27_content_\x27)]//div[contains(text(),\x27Connect\x20$DOGS\x27)]'};try{subframe=await vaoGame();if(!subframe){log(profileNameId,'['+botName+_0x132f1a(0x147),null,![]);throw new Error(_0x132f1a(0x1c8));}log(profileNameId,'['+botName+_0x132f1a(0x16c),null,!![],'='),await delay(0x3e8);const kqClosePopup=await checkClosePopup();!kqClosePopup?log(profileNameId,'['+botName+']Không\x20tìm\x20thayas\x20closePopup',null,![]):log(profileNameId,'['+botName+_0x132f1a(0x194));await delay(0x7d0);const kqClaim=await checkClaim();return await finalStep();}catch(error){return log(profileNameId,'['+botName+'][Lỗi]:\x20'+error,![]),await checkQuayLaiXpath(getAks['InputSearch']),await clearVar(),{'status':![],'coin':null,'nextRun':null,'nextRunStamp':null};}async function checkClosePopup(){const _0x47414f=_0x132f1a;try{const xpathCP={'creatWallet':_0x47414f(0x13d),'letsGo':_0x47414f(0x184),'letsGo2':_0x47414f(0x1ac),'nutX':_0x47414f(0x187)};log(profileNameId,'['+botName+_0x47414f(0x17b),null,'i','-');let demLoop=0x0;const maxDemLoop=0x5;while(demLoop<maxDemLoop){demLoop++,await delay(0x3e8);const kq000=await genlogin[_0x47414f(0x172)](profileNameId,subframe,xpathCP[_0x47414f(0x1a8)],0x3e8);if(!kq000)log(profileNameId,'['+botName+_0x47414f(0x165),null,![]);else{await click(xpathCP[_0x47414f(0x1a8)]),log(profileNameId,'['+botName+_0x47414f(0x13a)),await delay(0x1388);continue;}const kq00=await genlogin['elementExistsByXPath'](profileNameId,subframe,xpathCP[_0x47414f(0x177)],0x3e8);if(!kq00)log(profileNameId,'['+botName+_0x47414f(0x18c),null,![]);else{await click(xpathCP[_0x47414f(0x177)]),log(profileNameId,'['+botName+'][checkClosePopup]Click\x20creatWallet'),await delay(0x1388);continue;}const kq01=await genlogin[_0x47414f(0x172)](profileNameId,subframe,xpathCP['letsGo'],0x3e8);if(!kq01)log(profileNameId,'['+botName+'][checkClosePopup]không\x20phá\x20hiện\x20nút\x20letsGo',null,![]);else{await click(xpathCP['letsGo']),log(profileNameId,'['+botName+_0x47414f(0x161)),await delay(0xbb8);continue;}const kq02=await genlogin[_0x47414f(0x172)](profileNameId,subframe,xpathCP[_0x47414f(0x18a)],0x3e8);if(!kq02){log(profileNameId,'['+botName+_0x47414f(0x13c),null,![]);break;}else{await click(xpathCP[_0x47414f(0x18a)]),log(profileNameId,'['+botName+_0x47414f(0x1c6)),await delay(0xbb8);continue;}}return!![];}catch(error){log(profileNameId,'['+botName+'][checkClosePopup]\x20error:\x20'+error[_0x47414f(0x160)],null,![]);}}async function checkClaim(){const _0x5bf461=_0x132f1a;try{const xpathClaim={'claim':_0x5bf461(0x17a),'continue':'//div[contains(text(),\x27Continue\x27)]','claimNow':_0x5bf461(0x142),'claimOk':_0x5bf461(0x170)};log(profileNameId,'['+botName+_0x5bf461(0x1b2),null,'i','-');let demLoop=0x0;const maxDemLoop=0xa;while(demLoop<maxDemLoop){demLoop++,await delay(0x3e8);const kqClaim=await genlogin[_0x5bf461(0x172)](profileNameId,subframe,xpathClaim[_0x5bf461(0x14a)],0x7d0);if(!kqClaim)log(profileNameId,'['+botName+_0x5bf461(0x1c4),null,![]);else{log(profileNameId,'['+botName+_0x5bf461(0x14b));const clickedClaim=await click(xpathClaim['claim']);!clickedClaim?log(profileNameId,'['+botName+_0x5bf461(0x18e),null,![]):(log(profileNameId,'['+botName+_0x5bf461(0x1a2)),await delay(0x3e8));continue;}const kqContinue=await genlogin[_0x5bf461(0x172)](profileNameId,subframe,xpathClaim[_0x5bf461(0x1a0)],0x3e8);if(!kqContinue)log(profileNameId,'['+botName+'][checkClaim]Không\x20tìm\x20thayas\x20continue',null,![]);else{log(profileNameId,'['+botName+_0x5bf461(0x1a6));const clickedContinue=await click(xpathClaim[_0x5bf461(0x1a0)]);!clickedContinue?log(profileNameId,'['+botName+'][checkClaim]Không\x20click\x20là\x20continue',null,![]):(log(profileNameId,'['+botName+_0x5bf461(0x1b3)),await delay(0x3e8));continue;}const kqClaimNow=await genlogin[_0x5bf461(0x172)](profileNameId,subframe,xpathClaim[_0x5bf461(0x176)],0x3e8);if(!kqClaimNow)log(profileNameId,'['+botName+'][checkClaim]Không\x20tìm\x20thayas\x20claimNow',null,![]);else{log(profileNameId,'['+botName+_0x5bf461(0x198));const clickedClaimNow=await click(xpathClaim[_0x5bf461(0x176)]);!clickedClaimNow?log(profileNameId,'['+botName+'][checkClaim]Không\x20click\x20là\x20claimNow',null,![]):(log(profileNameId,'['+botName+'][checkClaim]Click\x20claimNow\x20OK'),await delay(0x3e8));continue;}const kqClaimOk=await genlogin[_0x5bf461(0x172)](profileNameId,subframe,xpathClaim['claimOk'],0x3e8);if(!kqClaimOk){log(profileNameId,'['+botName+_0x5bf461(0x1b4),null,![]);break;}else{log(profileNameId,'['+botName+'][checkClaim]Tìm\x20thayas\x20claimOk');const clickedClaimOk=await click(xpathClaim['claimOk']);!clickedClaimOk?log(profileNameId,'['+botName+'][checkClaim]Không\x20click\x20là\x20claimOk',null,![]):(log(profileNameId,'['+botName+_0x5bf461(0x146)),await delay(0x3e8));continue;}}return await checkQuayLaiXpath(xpath['home']),!![];}catch(e){return log(profileNameId,'['+botName+_0x5bf461(0x191)+e[_0x5bf461(0x160)],null,![]),null;}}async function backToHome(){const _0x55c4bb=_0x132f1a;try{log(profileNameId,'['+botName+_0x55c4bb(0x196));const kqVaoHome=await genlogin[_0x55c4bb(0x172)](profileNameId,subframe,xpath[_0x55c4bb(0x166)],0x3e8);if(!kqVaoHome)return log(profileNameId,'['+botName+_0x55c4bb(0x138),null,![]),null;else{log(profileNameId,'['+botName+_0x55c4bb(0x1c7));const clickedHome=await click(xpath['home']);return!clickedHome?(log(profileNameId,'['+botName+_0x55c4bb(0x173),null,![]),null):(log(profileNameId,'['+botName+'][backToHome]Click\x20vaoHome\x20OK'),await delay(0x3e8),await AdsGramDetect(),!![]);}}catch(e){return log(profileNameId,'['+botName+_0x55c4bb(0x144)+e[_0x55c4bb(0x160)],null,![]),null;}}async function checkAutoLamTask(){const _0x1ea728=_0x132f1a;try{const xpathLamTask={'tasktitle':_0x1ea728(0x132),'taskClaim':_0x1ea728(0x193)};log(profileNameId,'['+botName+_0x1ea728(0x171));let demLoop=0x0;const maxDemLoop=0x5;while(demLoop<maxDemLoop){demLoop++;const duyetXpathTitle='('+xpathLamTask['tasktitle']+')['+demLoop+']',duyetXpathClaim='('+xpathLamTask[_0x1ea728(0x19e)]+')['+demLoop+']',kqTask=await genlogin['elementExistsByXPath'](profileNameId,subframe,xpath[_0x1ea728(0x181)],0x7d0);if(!kqTask){log(profileNameId,'['+botName+'][checkAutoLamTask]Không\x20tìm\x20thayas\x20tasks',null,![]);break;}else log(profileNameId,'['+botName+_0x1ea728(0x15a)),await click(xpath[_0x1ea728(0x181)]),await delay(0x3e8),await AdsGramDetect(),await click(xpath[_0x1ea728(0x181)]);const kqCheckTask=await genlogin[_0x1ea728(0x172)](profileNameId,subframe,duyetXpathTitle,0x7d0);if(!kqCheckTask)return log(profileNameId,'['+botName+_0x1ea728(0x1af),null,![]),null;else{log(profileNameId,'['+botName+_0x1ea728(0x14f));const kqTasktitle=await genlogin['getTextByXPath'](profileNameId,subframe,duyetXpathTitle,0x7d0);if(!kqTasktitle)return log(profileNameId,'['+botName+_0x1ea728(0x1af),null,![]),null;else{log(profileNameId,'['+botName+_0x1ea728(0x15c)+kqTasktitle);if(!kqTasktitle||kqTasktitle[_0x1ea728(0x1c2)](_0x1ea728(0x130))||kqTasktitle[_0x1ea728(0x1c2)](_0x1ea728(0x1c9))||kqTasktitle[_0x1ea728(0x1c2)](_0x1ea728(0x19c))||kqTasktitle['includes'](_0x1ea728(0x1c9))||kqTasktitle[_0x1ea728(0x1c2)](_0x1ea728(0x1a3))||kqTasktitle[_0x1ea728(0x1c2)](_0x1ea728(0x16f)))continue;}}log(profileNameId,'['+botName+'][checkAutoLamTask]Tìm\x20thayas\x20taskClaim');const kqTaskClaim=await click(duyetXpathClaim);log(profileNameId,'['+botName+_0x1ea728(0x1b6)),await delay(0x3e8),await AdsGramDetect(),await checkQuayLaiXpath(xpath[_0x1ea728(0x181)]);}}catch(e){return log(profileNameId,'['+botName+_0x1ea728(0x183)+e[_0x1ea728(0x160)],null,![]),null;}}async function getCoin(){const _0xfda369=_0x132f1a;try{let xpathCoin=xpath[_0xfda369(0x192)];log(profileNameId,'['+botName+'][getCoin]:\x20Xử\x20lý\x20coin\x20nè',null,'i','-');const numberString=await genlogin[_0xfda369(0x1c3)](profileNameId,subframe,xpathCoin,0x3e8);return numberString;}catch(error){return log(profileNameId,'['+botName+_0xfda369(0x195)+error,null,![]),null;}}async function finalStep(){const _0x56773d=_0x132f1a;try{log(profileNameId,'['+botName+_0x56773d(0x175),null,'i','-');let timeLeft=_0x56773d(0x137);await backToHome();const coin=await getCoin();!coin?log(profileNameId,'['+botName+_0x56773d(0x199),![]):(await http[_0x56773d(0x1c0)](profileNameId,profileNameId,dataId,null,null,coin),log(profileNameId,'['+botName+_0x56773d(0x159)+coin));const kqCktimeLeft=await genlogin[_0x56773d(0x172)](profileNameId,subframe,xpath[_0x56773d(0x1a9)],0x3e8);!kqCktimeLeft&&log(profileNameId,'['+botName+']Không\x20tìm\x20thấy\x20timeleft',null,![]);const kqTimeLeft=await genlogin['getTextByXPath'](profileNameId,subframe,xpath[_0x56773d(0x1a9)]);if(!kqTimeLeft)log(profileNameId,'['+botName+_0x56773d(0x14e),null,![]);else{log(profileNameId,'['+botName+_0x56773d(0x153)+kqTimeLeft);const match=kqTimeLeft[_0x56773d(0x1ae)](/(\d+)h\s*(\d+)m/);if(match){const hours=parseInt(match[0x1],0xa),minutes=parseInt(match[0x2],0xa),seconds=0x0;timeLeft=String(hours)[_0x56773d(0x150)](0x2,'0')+':'+String(minutes)[_0x56773d(0x150)](0x2,'0')+':'+String(seconds)[_0x56773d(0x150)](0x2,'0');}}log(profileNameId,'['+botName+']timeleft:\x20'+timeLeft,null,'i');const remainT=await thoigianconlai(timeLeft);return!remainT&&log(profileNameId,'['+botName+_0x56773d(0x12e),null,![]),log(profileNameId,'['+botName+_0x56773d(0x131)),log(profileNameId,'['+botName+_0x56773d(0x163)+remainT[_0x56773d(0x1a5)]),await checkCloseTab(),await clearVar(),{'status':!![],'coin':coin,'nextRun':remainT[_0x56773d(0x1a5)],'nextRunStamp':remainT[_0x56773d(0x145)]};}catch(error){return log(profileNameId,'['+botName+_0x56773d(0x15f)+error[_0x56773d(0x160)],null,![]),await checkCloseTab(),await clearVar(),{'status':![],'coin':null,'nextRun':null,'nextRunStamp':null};}}async function checkCloseTab(){const _0x18fe75=_0x132f1a;try{const pages=await browser[_0x18fe75(0x15b)]();let demLoop=0x0;const maxDemLoop=0xa;while(demLoop<maxDemLoop){demLoop++;const countTab=await genlogin[_0x18fe75(0x14c)](profileNameId,browser);if(countTab<=0x1){log(profileNameId,'['+botName+_0x18fe75(0x1b7)+countTab+_0x18fe75(0x149));break;}const indexTab=countTab-demLoop,pages=await browser[_0x18fe75(0x15b)]();if(indexTab>=pages[_0x18fe75(0x139)]){log(profileNameId,'['+botName+'][checkCloseTab]Index\x20tab\x20('+indexTab+_0x18fe75(0x12f)+pages[_0x18fe75(0x139)]);break;}const urlPage=await pages[indexTab][_0x18fe75(0x197)](),parsedUrl=new URL(urlPage);if(parsedUrl[_0x18fe75(0x1ad)]!=_0x18fe75(0x15e)){const closeTab=await genlogin[_0x18fe75(0x134)](profileNameId,browser,indexTab,0xbb8);if(!closeTab){log(profileNameId,'['+botName+_0x18fe75(0x16a),null,![]);continue;}log(profileNameId,'['+botName+'][checkCloseTab]\x20Đóng\x20tab\x20mới\x20thành\x20công'),await delay(0x3e8);continue;}}return!![];}catch(error){return log(profileNameId,'['+botName+'][checkCloseTab]\x20error:\x20'+error['message'],null,![]),null;}}async function checkBackGame(){const _0x3f1e7e=_0x132f1a;try{const pages=await browser[_0x3f1e7e(0x15b)]();let demLoop=0x0;const maxDemLoop=0xa;while(demLoop<maxDemLoop){demLoop++;const countTab=await genlogin['countOpenTabs'](profileNameId,browser);if(countTab<=0x2){log(profileNameId,'['+botName+_0x3f1e7e(0x1ab)+countTab+_0x3f1e7e(0x149));break;}const indexTab=countTab-demLoop,urlPage=await browser[_0x3f1e7e(0x15b)]()[indexTab][_0x3f1e7e(0x197)](),parsedUrl=new URL(urlPage);if(parsedUrl['hostname']!=_0x3f1e7e(0x15e)&&parsedUrl[_0x3f1e7e(0x1ad)]!=iframeHostName){const closeTab=await genlogin['closeTab'](profileNameId,browser,indexTab,0xbb8);if(!closeTab){log(profileNameId,'['+botName+_0x3f1e7e(0x18b),null,![]);continue;}log(profileNameId,'['+botName+_0x3f1e7e(0x179)),await delay(0x3e8);continue;}}return!![];}catch(error){return log(profileNameId,'['+botName+_0x3f1e7e(0x185)+error['message'],null,![]),null;}}async function checkQuayLaiXpath(backXpath){const _0x5ce28f=_0x132f1a;try{const maxattemptCQ=0x5;let attemptCQ=0x0;const loopBack={'walletClose':_0x5ce28f(0x152),'dialogClose':_0x5ce28f(0x189),'closeQcBtn':_0x5ce28f(0x154)};while(attemptCQ<maxattemptCQ){attemptCQ++,await delay(0x3e8);const kqCloseQcBtn=await genlogin[_0x5ce28f(0x172)](profileNameId,subframe,loopBack[_0x5ce28f(0x1be)],0x7d0);if(kqCloseQcBtn){const kqClickCloseQcBtn=await click(loopBack[_0x5ce28f(0x1be)]);if(!kqClickCloseQcBtn){log(profileNameId,'['+botName+'][checkQuayLaiXpath]Không\x20click\x20được\x20vào\x20closeQcBtn',null,![]);continue;}log(profileNameId,'['+botName+_0x5ce28f(0x1b1));}log(profileNameId,'['+botName+_0x5ce28f(0x168)+attemptCQ);const currentPage=await genlogin[_0x5ce28f(0x13f)](profileNameId,browser);if(!currentPage){log(profileNameId,'['+botName+_0x5ce28f(0x15d),null,![]);continue;}log(profileNameId,'['+botName+_0x5ce28f(0x143));const kqTelePage=await genlogin[_0x5ce28f(0x172)](profileNameId,currentPage,getAks[_0x5ce28f(0x186)],0x7d0);if(!kqTelePage){log(profileNameId,'['+botName+_0x5ce28f(0x140));const countTab=await genlogin[_0x5ce28f(0x14c)](profileNameId,browser);if(countTab<=0x2){log(profileNameId,'['+botName+_0x5ce28f(0x164)+countTab+'\x20tab\x20đang\x20mở');break;}const closeTab=await genlogin['closeTab'](profileNameId,browser,countTab-0x1,0xbb8);if(!closeTab){log(profileNameId,'['+botName+_0x5ce28f(0x180),null,![]);continue;}log(profileNameId,'['+botName+_0x5ce28f(0x1b9)),await delay(0xbb8);continue;}log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Không\x20phát\x20hiện\x20tab\x20mới'),subframe=await vaoGame();if(!subframe){log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Không\x20tìm\x20thấy\x20iframe',null,![]);continue;}log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Vào\x20game\x20thành\x20công');const kqbackXpath=await genlogin[_0x5ce28f(0x172)](profileNameId,subframe,backXpath,0x7d0);if(kqbackXpath){log(profileNameId,'['+botName+_0x5ce28f(0x13b));break;}if(!![]){let attemptBack=0x0,maxAttempBack=0x5,kqBack=![];while(attemptBack<maxAttempBack){attemptBack++,log(profileNameId,'['+botName+_0x5ce28f(0x19f)+attemptBack);const kqbackXpath=await genlogin[_0x5ce28f(0x172)](profileNameId,subframe,backXpath,0x7d0);if(kqbackXpath){log(profileNameId,'['+botName+_0x5ce28f(0x13b));break;}const kqb0=await genlogin[_0x5ce28f(0x172)](profileNameId,currentPage,getAks['popupBackBtn'],0x3e8);if(kqb0){await clickM(getAks[_0x5ce28f(0x16d)]);continue;}await delay(0x3e8);}}const kqPopupLaunch=await genlogin[_0x5ce28f(0x172)](profileNameId,currentPage,getAks[_0x5ce28f(0x162)],0x3e8);if(kqPopupLaunch){await clickM(getAks[_0x5ce28f(0x162)]);continue;}await delay(0x3e8),await AdsGramDetect();}return log(profileNameId,'['+botName+_0x5ce28f(0x17d)),!![];}catch(error){return log(profileNameId,'['+botName+_0x5ce28f(0x1b0)+error[_0x5ce28f(0x160)],null,![]),null;}}async function vaoGame(){const _0x4143f1=_0x132f1a;try{log(profileNameId,'['+botName+_0x4143f1(0x17e),null,'-');const subframe0=await genlogin[_0x4143f1(0x19b)](profileNameId,currentPage,getAks[_0x4143f1(0x141)],0x2710);await delay(0x3e8);if(!subframe0){log(profileNameId,'['+botName+_0x4143f1(0x147),![]);throw new Error(_0x4143f1(0x1c8));}return log(profileNameId,'['+botName+_0x4143f1(0x12d)),subframe0;}catch(error){return log(profileNameId,'['+botName+_0x4143f1(0x16e)+error,![]),null;}}async function raGame(){const _0x224f0d=_0x132f1a;try{log(profileNameId,'['+botName+_0x224f0d(0x1bf)),currentPage=genlogin['switchFrame'](profileNameId,currentPage,_0x224f0d(0x18f),0x7d0);if(!currentPage){log(profileNameId,'['+botName+_0x224f0d(0x167),![]);throw new Error(_0x224f0d(0x17f));}return currentPage;}catch(error){return log(profileNameId,'['+botName+'][Lỗi]:\x20'+error,![]),null;}}async function click(xpath){const _0x912dbe=_0x132f1a;try{await delay(0x3e8);const clicked=await genlogin['click'](profileNameId,subframe,{'xpath':xpath,'mainframe':currentPage,'browser':browser},0x7d0);await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+_0x912dbe(0x13e)+xpath,null,![]),!![];return log(profileNameId,'['+botName+_0x912dbe(0x1bb)+xpath+'\x20OK'),clicked;}catch(error){return log(profileNameId,'['+botName+_0x912dbe(0x18d)+error,null,![]),null;}}async function clickM(xpath){const _0x328796=_0x132f1a;try{await delay(0x3e8);const clicked=await genlogin[_0x328796(0x14d)](profileNameId,currentPage,{'xpath':xpath,'mainframe':currentPage,'browser':browser},0x3e8);await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+'][click]Không\x20click\x20được\x20vào\x20'+xpath,null,![]),null;return log(profileNameId,'['+botName+_0x328796(0x1bb)+xpath+_0x328796(0x1c1)),clicked;}catch(error){return log(profileNameId,'['+botName+_0x328796(0x18d)+error,null,![]),null;}}async function thoigianconlai(thoigianconlai){const _0x39e538=_0x132f1a;try{log(profileNameId,'['+botName+_0x39e538(0x157));let parts=thoigianconlai[_0x39e538(0x136)](':');parts['length']<0x1&&(parts=defaultTimeLeft[_0x39e538(0x136)](':'));let hour0=parseInt(parts[0x0]),minute0=parseInt(parts[0x1]),second0=parseInt(parts[0x2]),hours=parseInt(hour0),minutes=parseInt(minute0),seconds=parseInt(second0),totalSeconds=parseInt(hours*0xe10+minutes*0x3c+seconds);const unixTime=Math[_0x39e538(0x1aa)](Date[_0x39e538(0x19a)]()/0x3e8),newUnixTime=unixTime+totalSeconds,newDate=new Date(newUnixTime*0x3e8),formattedDate=newDate['toLocaleDateString'](),formattedTime=newDate[_0x39e538(0x174)](_0x39e538(0x190),{'hour12':![]});let NextRun=formattedDate+'\x20'+formattedTime;return{'NextRun':NextRun,'NextRunStamp':newUnixTime};}catch(error){return log(profileNameId,'['+botName+_0x39e538(0x16b)+error,null,![]),null;}}async function AdsGramDetect(){const _0x20775d=_0x132f1a;try{const xpathAdsGram=_0x20775d(0x1c5);let kqAdsGram=await genlogin[_0x20775d(0x172)](profileNameId,subframe,xpathAdsGram,0x3e8);if(kqAdsGram){let demLoop=0x0;const maxDemLoop=0x3c;while(demLoop<maxDemLoop){demLoop++,kqAdsGram=await genlogin[_0x20775d(0x172)](profileNameId,subframe,xpathAdsGram,0x3e8),log(profileNameId,'['+botName+'][AdsGramDetec]:\x20đang\x20chờ\x20Ads\x20'+demLoop+'/'+maxDemLoop,null,'i');if(!kqAdsGram){log(profileNameId,'['+botName+_0x20775d(0x182),null,'i');break;}await choMs(0x7d0);}return!![];}else{const kqAdsGram2=await genlogin['elementExistsByXPath'](profileNameId,currentPage,getAks[_0x20775d(0x1bc)],0x3e8);if(kqAdsGram2)return await clickM(getAks[_0x20775d(0x1bc)]),!![];return null;}}catch(error){return log(profileNameId,'['+botName+_0x20775d(0x17c)+error,null,![]),null;}}async function delay(ms){return new Promise(async resolve=>{setTimeout(resolve,ms);});}async function cTimeout(){const _0x12eb15=_0x132f1a;if(Atomics[_0x12eb15(0x1a4)](tasksData,taskIndex)===0x1)return!![];return![];}async function clearVar(){currentPage=null,subframe=null,screenData=null,tasksData=null;}}function a0_0xd05a(_0x1efdda,_0x5314f2){const _0x14f3a8=a0_0x14f3();return a0_0xd05a=function(_0xd05a3,_0x4be32b){_0xd05a3=_0xd05a3-0x12d;let _0x27a66b=_0x14f3a8[_0xd05a3];return _0x27a66b;},a0_0xd05a(_0x1efdda,_0x5314f2);}function a0_0x14f3(){const _0x356811=[']Không\x20tìm\x20thấy\x20coin','now','switchFrame','Invite','64827sXORtf','taskClaim','][checkQuayLaiXpath]\x20Kiểm\x20tra\x20lần\x20quay\x20lại:\x20','continue','5167205ieFntW','][checkClaim]Click\x20claim\x20OK','Stars','load','NextRun','][checkClaim]Tìm\x20thayas\x20continue','(//div[contains(@class,\x27adm-space\x27)]//div[contains(@class,\x27text-body4\x20text-text_2\x20font-Regular\x27)])[1]','nutX','timeLeft','floor','][checkBackGame]\x20Chỉ\x20có\x20','//button[contains(@class,\x27bg-Orange\x27)]//span[text()=\x22Let\x27s\x20Go\x22]','hostname','match','][checkAutoLamTask]Không\x20tìm\x20thayas\x20tasktitle','][checkQuayLaiXpath]\x20Lỗi\x20trong\x20quá\x20trình\x20kiểm\x20tra:\x20','][checkQuayLaiXpath]\x20Click\x20closeQcBtn\x20OK','][checkClaim]\x20check\x20Claim','][checkClaim]Click\x20continue\x20OK','][checkClaim]Không\x20tìm\x20thayas\x20claimOk','//p[contains(@class,\x27text-sm\x20font-bold\x27)]','][checkAutoLamTask]Click\x20taskClaim\x20OK','][checkCloseTab]\x20Chỉ\x20có\x20','450wwGtuA','][checkQuayLaiXpath]\x20Đóng\x20tab\x20mới\x20thành\x20công','120DZmWAA','][click]Click\x20','closeAds','//div[contains(@class,\x27_navbar_\x27)]//div[text()=\x27Frends\x27]','closeQcBtn',']Ra\x20game\x20nè','updateData','\x20OK','includes','getTextByXPath','][checkClaim]Không\x20tìm\x20thayas\x20claim','//div[contains(@style,\x27-adsgram-\x27)]','][checkClosePopup]Click\x20letsGo2','][backToHome]Tìm\x20thayas\x20vaoHome','Không\x20tìm\x20thấy\x20iframe','Boost',']Đã\x20tìm\x20thấy\x20iframe',']không\x20xử\x20lý\x20được\x20thoigianconlai',')\x20không\x20hợp\x20lệ.\x20Tổng\x20số\x20tab:\x20','transaction',']Xử\x20lý\x20thoigianconlai\x20OK','//div[contains(@class,\x27divide-y\x27)]//div[contains(@class,\x20\x27items-center\x27)\x20and\x20not(contains(@class,\x20\x27opacity\x27))]//h3','6RWcJWB','closeTab','136HuMwQa','split','00:10:00','][backToHome]Không\x20tìm\x20thayas\x20vaoHome','length','][checkClosePopup]Click\x20nutX','][checkQuayLaiXpath]\x20Tìm\x20thấy\x20backXpath','][checkClosePopup]không\x20phá\x20hiện\x20nút\x20letsGo2','//span[text()=\x27Create\x20UXUY\x20Wallet\x27]','][click]Không\x20click\x20được\x20vào\x20','getCurrentPage','][checkQuayLaiXpath]\x20Phát\x20hiện\x20tab\x20mới','Iframe','//div[contains(text(),\x27Claim\x20Now\x27)]','][checkQuayLaiXpath]\x20Tìm\x20thấy\x20currentPage','][backToHome]\x20error:\x20','NextRunStamp','][checkClaim]Click\x20claimOk\x20OK',']Không\x20tìm\x20thấy\x20iframe','36TrJlFm','\x20tab\x20đang\x20mở','claim','][checkClaim]Tìm\x20thayas\x20claim','countOpenTabs','click',']Không\x20tìm\x20thấy\x20timeleft','][checkAutoLamTask]Tìm\x20thayas\x20tasktitle','padStart','name','(//div[contains(@data-tc-modal,\x27true\x27)]//button[contains(@data-tc-icon-button,\x27true\x27)])[1]',']Tìm\x20thấy\x20timeleft:\x20','//div[contains(@class,\x27close_btn\x27)]','//span[contains(@class,\x27\x20text-body3\x20font-Regular\x20text-text_1\x27)]','6377usuHQH','][thoigianconlai]:Xử\x20lý\x20gian\x20còn\x20lại\x20nè','70988mRzNun',']Tìm\x20thấy\x20coin:\x20','][checkAutoLamTask]Tìm\x20thayas\x20tasks','pages','][checkAutoLamTask]Tìm\x20thayas\x20tasktitle:\x20','][checkQuayLaiXpath]\x20Không\x20tìm\x20thấy\x20currentPage','web.telegram.org','][finalStep]\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20cuối\x20cùng:\x20','message','][checkClosePopup]Click\x20letsGo','LaunchCancel',']nextRunAt:\x20','][checkQuayLaiXpath]\x20Chỉ\x20có\x20','][checkClosePopup]không\x20phá\x20hiện\x20nút\x20nutX','home',']Không\x20tìm\x20thấy\x20main\x20frame','][checkQuayLaiXpath]\x20Kiểm\x20tra\x20lần:\x20','9111971oCntOz','][checkCloseTab]\x20Lỗi\x20khi\x20đóng\x20tab\x20mới','][thoigianconlai]:\x20',']Vào\x20game\x20OK','popupBackBtn','][Lỗi]:\x20','Become\x20a\x20king','//div[contains(@class,\x27adm-popup\x27)\x20and\x20not(contains(@style,\x27display:\x20none\x27))]//div[contains(@class,\x27adm-popup-body\x27)]//span[text()=\x27Claim\x27]','][checkAutoLamTask]\x20checkAutoLamTask\x20nè','elementExistsByXPath','][backToHome]Không\x20click\x20là\x20vaoHome','toLocaleTimeString','][finalStep]\x20finalStep','claimNow','creatWallet','5428872tVIzTs','][checkBackGame]\x20Đóng\x20tab\x20mới\x20thành\x20công','//span[contains(text(),\x27Claim\x20100\x27)]','][checkClosePopup]Vào\x20Check\x20close\x20popup','][AdsGramDetec]:\x20','][checkQuayLaiXpath]\x20quay\x20lại\x20tasks\x20thành\x20công',']Vào\x20game\x20nè','Không\x20tìm\x20thấy\x20main\x20frame','][checkQuayLaiXpath]\x20Lỗi\x20khi\x20đóng\x20tab\x20mới','tasks','][AdsGramDetec]:\x20Done\x20Ads','][checkAutoLamTask]\x20error:\x20','//button[contains(@class,\x27overflow-hidden\x27)]//span[text()=\x22Let\x27s\x20Go\x22]','][checkCloseTab]\x20error:\x20','CloseGame','//div[contains(@class,\x27bg-bg_AlphaBlack0607\x27)\x20and\x20not(@style)]//span[contains(@class,\x27text-[32px]\x20text-White\x20cursor-pointer\x20mt-[20px]\x27)]','2928163DjuEZm','//div[contains(@class,\x27_inner_\x27)]//div[text()=\x27Close\x27]','letsGo2','][checkBackGame]\x20Lỗi\x20khi\x20đóng\x20tab\x20mới','][checkClosePopup]không\x20phá\x20hiện\x20nút\x20creatWallet','][click][Lỗi]:\x20','][checkClaim]Không\x20click\x20là\x20claim','mainframe','en-GB','][checkClaim]\x20error:\x20','coin','//div[contains(@class,\x20\x27items-center\x27)\x20and\x20not(contains(@class,\x20\x27opacity\x27))]//button[not(@disabled)]',']closePopup\x20OK','][getCoin]:\x20','][backToHome]\x20backToHome\x20nè','url','][checkClaim]Tìm\x20thayas\x20claimNow'];a0_0x14f3=function(){return _0x356811;};return a0_0x14f3();};