(function(_0x5ab6b4,_0x2bd41c){const _0x4980ab=a0_0x4d43,_0x516b55=_0x5ab6b4();while(!![]){try{const _0x2fa79c=-parseInt(_0x4980ab(0x22b))/0x1*(parseInt(_0x4980ab(0x204))/0x2)+parseInt(_0x4980ab(0x1ac))/0x3*(parseInt(_0x4980ab(0x1ca))/0x4)+parseInt(_0x4980ab(0x221))/0x5*(-parseInt(_0x4980ab(0x227))/0x6)+parseInt(_0x4980ab(0x1c0))/0x7*(parseInt(_0x4980ab(0x1ce))/0x8)+-parseInt(_0x4980ab(0x1c5))/0x9+-parseInt(_0x4980ab(0x1d5))/0xa*(parseInt(_0x4980ab(0x236))/0xb)+parseInt(_0x4980ab(0x213))/0xc;if(_0x2fa79c===_0x2bd41c)break;else _0x516b55['push'](_0x516b55['shift']());}catch(_0x44ca32){_0x516b55['push'](_0x516b55['shift']());}}}(a0_0x2439,0x744bf));import{log,json}from'../modules/logger.js';function a0_0x4d43(_0x2f50a1,_0x34555f){const _0x2439bc=a0_0x2439();return a0_0x4d43=function(_0x4d4324,_0x5a1266){_0x4d4324=_0x4d4324-0x1a8;let _0x4acacb=_0x2439bc[_0x4d4324];return _0x4acacb;},a0_0x4d43(_0x2f50a1,_0x34555f);}export default async function (context,signal){const _0x25052e=a0_0x4d43,choMs=ms=>new Promise(resolve=>setTimeout(resolve,ms)),{firstPage,bot,profileNameId,getAks,genlogin,http,browser,dataId,screenDataBuffer2,tasksDataBuffer2,taskIndex}=context;let currentPage=firstPage,subframe;const botName=bot['name'];let screenData=new Int32Array(screenDataBuffer2),tasksData=new Int32Array(tasksDataBuffer2),maxTimeClickAndHold=0xea60,soLuotLamTask=0x5,autoLamTask='y';const xpath={'coin':_0x25052e(0x1d3),'timeleft':_0x25052e(0x224),'home':_0x25052e(0x1f9)};try{return await loadSetting(),await inToGame(),await delay(0x3e8),await checkClosePopup(),await delay(0x3e8),await checkClaim(),await delay(0x3e8),await delay(0x3e8),await backToHome(),await delay(0x3e8),await finalStep();}catch(error){log(profileNameId,'['+botName+_0x25052e(0x22f)+error,null,![]);}async function loadSetting(){const _0x551cfa=_0x25052e;try{log(profileNameId,'['+botName+'][loadSetting]\x20loadSetting\x20nè',null,'i','-'),bot[_0x551cfa(0x1e9)]&&(bot[_0x551cfa(0x1e9)][_0x551cfa(0x20b)]&&(parseInt(bot[_0x551cfa(0x1e9)][_0x551cfa(0x20b)]['value'])>0x0&&(soLuotLamTask=parseInt(bot[_0x551cfa(0x1e9)][_0x551cfa(0x20b)][_0x551cfa(0x1d4)]))),bot[_0x551cfa(0x1e9)]['maxTimeClickAndHold']&&(parseInt(bot[_0x551cfa(0x1e9)][_0x551cfa(0x1ef)][_0x551cfa(0x1d4)])>0x0&&(maxTimeClickAndHold=parseInt(bot[_0x551cfa(0x1e9)][_0x551cfa(0x1ef)]['value']))),bot['botSet'][_0x551cfa(0x1e4)]&&(bot['botSet']['autoLamTask'][_0x551cfa(0x1d4)]&&(autoLamTask=bot[_0x551cfa(0x1e9)][_0x551cfa(0x1e4)][_0x551cfa(0x1d4)])));}catch(error){log(profileNameId,'['+botName+_0x551cfa(0x1af)+error['message'],null,![]);}}async function checkClosePopup(){const _0x2048f6=_0x25052e,xpathClosePopup={'next':_0x2048f6(0x1c6),'startVibing':_0x2048f6(0x211),'fingerPrintIcon':'//div[contains(@class,\x27fingerprint-icon\x27)]','holdfor':_0x2048f6(0x23a),'createADao':_0x2048f6(0x1b5)};try{log(profileNameId,'['+botName+_0x2048f6(0x239),null,'i','-');let demLoop=0x0;const maxDemLoop=0x5;while(demLoop<maxDemLoop){demLoop++;const kqNext=await genlogin['elementExistsByXPath'](profileNameId,subframe,xpathClosePopup[_0x2048f6(0x1bd)],0x3e8);if(kqNext){log(profileNameId,'['+botName+'][checkClosePopup]\x20thấy\x20next',null,'i'),await click(xpathClosePopup[_0x2048f6(0x1bd)]),await delay(0xbb8);continue;}const kqStartVibing=await genlogin['elementExistsByXPath'](profileNameId,subframe,xpathClosePopup['startVibing'],0x3e8);if(kqStartVibing){log(profileNameId,'['+botName+_0x2048f6(0x1ba),null,'i'),await click(xpathClosePopup[_0x2048f6(0x231)]),await delay(0xbb8),await autoTap(),await delay(0xbb8);break;}const kqFingerPrintIcon=await genlogin[_0x2048f6(0x237)](profileNameId,subframe,xpathClosePopup['fingerPrintIcon'],0x3e8);if(kqFingerPrintIcon){log(profileNameId,'['+botName+_0x2048f6(0x1fe),null,'i'),await click(xpathClosePopup[_0x2048f6(0x238)]),await delay(0xbb8),await autoTap(),await delay(0xbb8);continue;}const kqCreateADao=await genlogin['elementExistsByXPath'](profileNameId,subframe,xpathClosePopup[_0x2048f6(0x1c9)],0x3e8);if(kqCreateADao){log(profileNameId,'['+botName+_0x2048f6(0x23b),null,'i'),await click(xpathClosePopup[_0x2048f6(0x1c9)]),await delay(0xbb8);continue;}break;}return log(profileNameId,'['+botName+_0x2048f6(0x1ea)),!![];}catch(error){log(profileNameId,'['+botName+'][checkClosePopup]\x20error:\x20'+error[_0x2048f6(0x1e1)],null,![]);}}async function checkClaim(){const _0x16f056=_0x25052e,xpathClaim={'timeBar':_0x16f056(0x229),'canvas':_0x16f056(0x1fc),'tree':_0x16f056(0x21b),'closeBtn':_0x16f056(0x1b6)};try{log(profileNameId,'['+botName+'][checkClaim]\x20checkClaim\x20nè',null,'i','-');const kqCanvas=await genlogin[_0x16f056(0x237)](profileNameId,subframe,xpathClaim['canvas'],0x3e8);if(kqCanvas)log(profileNameId,'['+botName+'][checkClaim]\x20Canvas\x20đã\x20hiện',null,'i');else return log(profileNameId,'['+botName+_0x16f056(0x205),null,'i'),null;let demLoop=0x0;const maxDemLoop=0x28;await autoTap();while(demLoop<maxDemLoop){demLoop++;const kqTree=await genlogin[_0x16f056(0x237)](profileNameId,subframe,xpathClaim[_0x16f056(0x233)],0x1f4);if(kqTree){log(profileNameId,'['+botName+_0x16f056(0x1eb),null,'i'),await click(xpathClaim[_0x16f056(0x233)]),await delay(0x1388);continue;}const kqCloseBtn=await genlogin[_0x16f056(0x237)](profileNameId,subframe,xpathClaim[_0x16f056(0x1b9)],0x1f4);if(kqCloseBtn){log(profileNameId,'['+botName+_0x16f056(0x1d6),null,'i'),await click(xpathClaim[_0x16f056(0x1b9)]),await autoTap();continue;}const kqTimeBar=await genlogin[_0x16f056(0x237)](profileNameId,subframe,xpathClaim['timeBar'],0x3e8);if(kqTimeBar)log(profileNameId,'['+botName+_0x16f056(0x1ad),null,'i');else{log(profileNameId,'['+botName+_0x16f056(0x1e0),null,'i');break;}const kqStyle=await genlogin[_0x16f056(0x1a8)](profileNameId,subframe,xpathClaim[_0x16f056(0x207)],'style',0x3e8);if(!kqStyle){log(profileNameId,'['+botName+_0x16f056(0x23d),null,'i');break;}const match=kqStyle['match'](/width:\s([\d.]+)%/);if(match&&match[0x1]){const widthValue=parseInt(match[0x1]);log(profileNameId,'['+botName+_0x16f056(0x1de)+widthValue,null,'i');if(widthValue<=0xa){log(profileNameId,'['+botName+_0x16f056(0x232)+widthValue,null,'i');break;}else{await delay(0x7d0);continue;}}else log(profileNameId,'['+botName+'][checkClaim]\x20không\x20tìm\x20thấy\x20widthValue',null,'i');break;}return!![];}catch(error){return log(profileNameId,'['+botName+_0x16f056(0x226)+error['message'],null,![]),null;}}async function checkLamTask(){const _0x29f96e=_0x25052e;try{const xpathTask={'garden':_0x29f96e(0x23f),'mintNft':_0x29f96e(0x1b0),'academy':_0x29f96e(0x1a9),'loginBonus':_0x29f96e(0x1e8),'dayBonusAvailable':_0x29f96e(0x219),'startBtn':'//div[contains(@class,\x27px-3\x27)]//button[text()=\x27Start\x27]','verifyBtn':_0x29f96e(0x218),'tieuDeTask':'//p[contains(@class,\x27mt-3\x20mb-6\x27)]','inputCode':_0x29f96e(0x225),'verifyCodeBtn':_0x29f96e(0x1d9),'claimTicketbtn':'//button[contains(text(),\x20\x27Claim\x27)\x20and\x20not(@disabled)]'};}catch(error){return log(profileNameId,'['+botName+'][checkLamTask]\x20error:\x20'+error[_0x29f96e(0x1e1)],null,![]),null;}}async function getToaDo(){const _0xe38d60=_0x25052e;try{log(profileNameId,'['+botName+_0xe38d60(0x1c4));const kqCenterPoint=await genlogin[_0xe38d60(0x230)](profileNameId,currentPage);if(!kqCenterPoint)return log(profileNameId,'['+botName+_0xe38d60(0x21f),null,![]),null;return log(profileNameId,'['+botName+_0xe38d60(0x20d)+json(kqCenterPoint)),kqCenterPoint;}catch(error){return log(profileNameId,'['+botName+_0xe38d60(0x1f5)+error,null,![]),null;}}async function autoTap(){const _0x2b678f=_0x25052e;try{log(profileNameId,'['+botName+']Auto\x20tap\x20nè');const centerP=await getToaDo();return genlogin['clickAndHold'](profileNameId,subframe,{'points':centerP,'mainframe':currentPage,'browser':browser},maxTimeClickAndHold,maxTimeClickAndHold+0x2710),log(profileNameId,'['+botName+_0x2b678f(0x220)+json(centerP)+_0x2b678f(0x1f3)),!![];}catch(error){return log(profileNameId,'['+botName+_0x2b678f(0x1b3)+error,null,![]),null;}}async function backToHome(){const _0x23dcea=_0x25052e;try{log(profileNameId,'['+botName+_0x23dcea(0x1c2));const kqVaoHome=await genlogin[_0x23dcea(0x237)](profileNameId,subframe,xpath[_0x23dcea(0x202)],0x3e8);if(!kqVaoHome)return log(profileNameId,'['+botName+_0x23dcea(0x21d),null,![]),null;else{log(profileNameId,'['+botName+_0x23dcea(0x203));const clickedHome=await click(xpath['home']);return!clickedHome?(log(profileNameId,'['+botName+_0x23dcea(0x201),null,![]),null):(log(profileNameId,'['+botName+_0x23dcea(0x1b2)),await delay(0x3e8),await AdsGramDetect(),!![]);}}catch(e){return log(profileNameId,'['+botName+_0x23dcea(0x1bf)+e[_0x23dcea(0x1e1)],null,![]),null;}}async function getCoin(){const _0x168a03=_0x25052e;try{let coinValue=0x0,xpathCoin=xpath[_0x168a03(0x1d2)];log(profileNameId,'['+botName+_0x168a03(0x223));const kqCoin=await genlogin[_0x168a03(0x237)](profileNameId,subframe,xpathCoin,0x3e8);if(!kqCoin)return log(profileNameId,'['+botName+'][getCoin]:\x20Không\x20tìm\x20thấy\x20xpathCoin',null,![]),null;else{log(profileNameId,'['+botName+_0x168a03(0x1c7));const coinText=await genlogin[_0x168a03(0x214)](profileNameId,subframe,xpathCoin);log(profileNameId,'['+botName+'][getCoin]:\x20coinText:\x20'+coinText),coinValue=coinText;}return coinValue;}catch(error){return log(profileNameId,'['+botName+'][getCoin]:\x20'+error,null,![]),null;}}async function checkQuayLaiXpath(backXpath){const _0xec4fa4=_0x25052e;try{const maxattemptCQ=0x5;let attemptCQ=0x0;const loopBack={'walletClose':_0xec4fa4(0x209),'dialogClose':_0xec4fa4(0x1ed),'closeQcBtn':_0xec4fa4(0x234),'reload':'//button[contains(text(),\x27Reload\x27)]','closeModal':_0xec4fa4(0x1cf)};while(attemptCQ<maxattemptCQ){attemptCQ++,await delay(0x1f4);const kqCloseQcBtn=await genlogin['elementExistsByXPath'](profileNameId,subframe,loopBack['closeQcBtn'],0x3e8);if(kqCloseQcBtn){const kqClickCloseQcBtn=await click(loopBack[_0xec4fa4(0x1fa)]);if(!kqClickCloseQcBtn){log(profileNameId,'['+botName+_0xec4fa4(0x21e),null,![]);continue;}log(profileNameId,'['+botName+_0xec4fa4(0x1e2));}log(profileNameId,'['+botName+_0xec4fa4(0x212)+attemptCQ);const currentPage=await genlogin[_0xec4fa4(0x1cc)](profileNameId,browser);if(!currentPage){log(profileNameId,'['+botName+_0xec4fa4(0x235),null,![]);continue;}log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Tìm\x20thấy\x20currentPage');const kqTelePage=await genlogin[_0xec4fa4(0x237)](profileNameId,currentPage,getAks[_0xec4fa4(0x1f8)],0x3e8);if(!kqTelePage){log(profileNameId,'['+botName+_0xec4fa4(0x1f0));const countTab=await genlogin[_0xec4fa4(0x1db)](profileNameId,browser);if(countTab<=0x1){log(profileNameId,'['+botName+_0xec4fa4(0x1d0)+countTab+_0xec4fa4(0x1b4),null,'i');break;}const closeTab=await genlogin[_0xec4fa4(0x20e)](profileNameId,browser,countTab-0x1,0xbb8);if(!closeTab){log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Lỗi\x20khi\x20đóng\x20tab\x20mới',null,![]);continue;}log(profileNameId,'['+botName+_0xec4fa4(0x1dd)),await delay(0x7d0);continue;}log(profileNameId,'['+botName+_0xec4fa4(0x1f1),null,'i'),subframe=await vaoGame();if(!subframe){log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Không\x20tìm\x20thấy\x20iframe',null,![]);continue;}log(profileNameId,'['+botName+_0xec4fa4(0x1be));const kqSubcribeBtn=await genlogin[_0xec4fa4(0x237)](profileNameId,currentPage,getAks[_0xec4fa4(0x23c)],0x3e8);kqSubcribeBtn&&(log(profileNameId,'['+botName+_0xec4fa4(0x1e7),null,'i'),await clickM(getAks[_0xec4fa4(0x23c)]));const kqbackXpath=await genlogin[_0xec4fa4(0x237)](profileNameId,subframe,backXpath,0x3e8);if(kqbackXpath){log(profileNameId,'['+botName+_0xec4fa4(0x1e5));break;}if(!![]){let attemptBack=0x0,maxAttempBack=0x5,kqBack=![];while(attemptBack<maxAttempBack){attemptBack++,log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Kiểm\x20tra\x20lần\x20quay\x20lại:\x20'+attemptBack);const kqbackXpath=await genlogin[_0xec4fa4(0x237)](profileNameId,subframe,backXpath,0x3e8);if(kqbackXpath){log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20Tìm\x20thấy\x20backXpath');break;}const kqb0=await genlogin[_0xec4fa4(0x237)](profileNameId,currentPage,getAks[_0xec4fa4(0x1c8)],0x3e8);if(kqb0){await clickM(getAks[_0xec4fa4(0x1c8)]);continue;}await delay(0x3e8);}}const kqPopupLaunch=await genlogin[_0xec4fa4(0x237)](profileNameId,currentPage,getAks[_0xec4fa4(0x210)],0x3e8);if(kqPopupLaunch){await clickM(getAks[_0xec4fa4(0x210)]);continue;}const kqReload=await genlogin[_0xec4fa4(0x237)](profileNameId,subframe,loopBack[_0xec4fa4(0x1e6)],0x3e8);if(kqReload){await click(loopBack[_0xec4fa4(0x1e6)]);continue;}await delay(0x3e8),await AdsGramDetect();}return log(profileNameId,'['+botName+'][checkQuayLaiXpath]\x20quay\x20lại\x20tasks\x20thành\x20công'),!![];}catch(error){return log(profileNameId,'['+botName+_0xec4fa4(0x1bc)+error['message'],null,![]),null;}}async function finalStep(){const _0x3c4b29=_0x25052e;try{await backToHome();const coin=await getCoin();!coin?log(profileNameId,'['+botName+_0x3c4b29(0x1cb),![]):(await http[_0x3c4b29(0x222)](profileNameId,profileNameId,dataId,null,null,coin),log(profileNameId,'['+botName+_0x3c4b29(0x1ee)+coin));const remainT=await xuLyhoiGianConLai();return!remainT&&log(profileNameId,'['+botName+_0x3c4b29(0x1bb),null,![]),log(profileNameId,'['+botName+_0x3c4b29(0x1cd)),log(profileNameId,'['+botName+_0x3c4b29(0x1ff)+remainT[_0x3c4b29(0x1f4)]),{'status':!![],'coin':coin,'nextRun':remainT[_0x3c4b29(0x1f4)],'nextRunStamp':remainT[_0x3c4b29(0x22c)]};}catch(error){log(profileNameId,'['+botName+_0x3c4b29(0x228)+error[_0x3c4b29(0x1e1)],null,![]);}}async function xuLyhoiGianConLai(){const _0x4540ae=_0x25052e;try{let timeleft=_0x4540ae(0x20f),timeleft1=_0x4540ae(0x20f);const kqCkTime=await genlogin[_0x4540ae(0x237)](profileNameId,subframe,xpath[_0x4540ae(0x1d7)],0x3e8);if(!kqCkTime)log(profileNameId,'['+botName+']Không\x20tìm\x20thấy\x20timeleft',null,![]);else{const kqGetTime=await genlogin[_0x4540ae(0x214)](profileNameId,subframe,xpath[_0x4540ae(0x1d7)],0x3e8);!kqGetTime&&log(profileNameId,'['+botName+_0x4540ae(0x1c3),null,![]);log(profileNameId,'['+botName+_0x4540ae(0x22a)+kqGetTime);const regex=/(\d+)\s*h\.\s*(\d+)\s*min\./,match=kqGetTime['match'](regex);if(match){const hours=parseInt(match[0x1],0xa),minutes=parseInt(match[0x2],0xa);timeleft=hours+':'+minutes+_0x4540ae(0x1aa);}}return await thoigianconlai(timeleft);}catch(error){return log(profileNameId,'['+botName+_0x4540ae(0x1ec)+error[_0x4540ae(0x1e1)],null,![]),{'NextRun':0x0,'NextRunStamp':0x0};}}async function thoigianconlai(...listOfTimes){const _0x51ef5d=_0x25052e;try{log(profileNameId,'['+botName+'][thoigianconlai]:\x20Xử\x20lý\x20danh\x20sách\x20thời\x20gian');const totalSecondsList=listOfTimes[_0x51ef5d(0x23e)](timeStr=>{const _0x523d9e=_0x51ef5d;log(profileNameId,'['+botName+'][thoigianconlai]'+timeStr);const parts=timeStr[_0x523d9e(0x1c1)](':'),hours=parseInt(parts[0x0],0xa)||0x0,minutes=parseInt(parts[0x1],0xa)||0x0,seconds=parseInt(parts[0x2],0xa)||0x0;return hours*0xe10+minutes*0x3c+seconds;}),minTotalSeconds=Math[_0x51ef5d(0x1ae)](...totalSecondsList),unixTime=Math[_0x51ef5d(0x21c)](Date[_0x51ef5d(0x215)]()/0x3e8),newUnixTime=unixTime+minTotalSeconds,newDate=new Date(newUnixTime*0x3e8),formattedDate=newDate[_0x51ef5d(0x20c)](),formattedTime=newDate[_0x51ef5d(0x208)](_0x51ef5d(0x1da),{'hour12':![]}),NextRun=formattedDate+'\x20'+formattedTime;return{'NextRun':NextRun,'NextRunStamp':newUnixTime};}catch(error){return log(profileNameId,'['+botName+_0x51ef5d(0x217)+error,null,![]),null;}}async function AdsGramDetect(){const _0x119456=_0x25052e;try{const xpathAdsGram=_0x119456(0x1e3);let kqAdsGram=await genlogin[_0x119456(0x237)](profileNameId,subframe,xpathAdsGram,0x3e8);if(kqAdsGram){let demLoop=0x0;const maxDemLoop=0x3c;while(demLoop<maxDemLoop){demLoop++,kqAdsGram=await genlogin[_0x119456(0x237)](profileNameId,subframe,xpathAdsGram,0x3e8),log(profileNameId,'['+botName+_0x119456(0x20a)+demLoop+'/'+maxDemLoop,null,'i');if(!kqAdsGram){log(profileNameId,'['+botName+_0x119456(0x206),null,'i');break;}await choMs(0x7d0);}return!![];}else{const kqAdsGram2=await genlogin[_0x119456(0x237)](profileNameId,currentPage,getAks[_0x119456(0x22e)],0x3e8);if(kqAdsGram2)return await clickM(getAks['closeAds']),!![];return null;}}catch(error){return log(profileNameId,'['+botName+_0x119456(0x1d8)+error,null,![]),null;}}async function inToGame(){const _0xe022fd=_0x25052e;try{subframe=await vaoGame();if(!subframe){log(profileNameId,'['+botName+_0xe022fd(0x1b1),![]);throw new Error('Không\x20tìm\x20thấy\x20iframe');}else return log(profileNameId,'['+botName+_0xe022fd(0x1dc)),!![];}catch(error){log(profileNameId,'['+botName+'][Lỗi]:\x20'+error,![]);throw new Error(_0xe022fd(0x216));}}async function vaoGame(){const _0x2b5367=_0x25052e;try{log(profileNameId,'['+botName+']Vào\x20game\x20nè');const subframe0=await genlogin[_0x2b5367(0x1d1)](profileNameId,currentPage,getAks[_0x2b5367(0x1ab)],0x2710);if(!subframe0){log(profileNameId,'['+botName+_0x2b5367(0x1b1),![]);throw new Error(_0x2b5367(0x216));}return log(profileNameId,'['+botName+_0x2b5367(0x1dc)),subframe0;}catch(error){return log(profileNameId,'['+botName+'][Lỗi]:\x20'+error,![]),null;}}async function raGame(){const _0x541e31=_0x25052e;try{log(profileNameId,'['+botName+_0x541e31(0x1b7)),currentPage=await genlogin[_0x541e31(0x1d1)](profileNameId,currentPage,'mainframe',0x2710);if(!currentPage){log(profileNameId,'['+botName+_0x541e31(0x1f2),![]);throw new Error('Không\x20tìm\x20thấy\x20main\x20frame');}return currentPage;}catch(error){return log(profileNameId,'['+botName+_0x541e31(0x22f)+error,![]),null;}}async function click(xpath){const _0x4a27fb=_0x25052e;try{await delay(0x3e8);const clicked=await genlogin[_0x4a27fb(0x21a)](profileNameId,subframe,{'xpath':xpath,'mainframe':currentPage,'browser':browser,'timeout':0x3e8});await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+_0x4a27fb(0x1f6)+xpath,null,![]),!![];return log(profileNameId,'['+botName+'][click]Click\x20'+xpath+_0x4a27fb(0x1fd)),clicked;}catch(error){return log(profileNameId,'['+botName+_0x4a27fb(0x200)+error,null,![]),null;}}async function clickM(xpath){const _0x2305b8=_0x25052e;try{await delay(0x3e8);const clicked=await genlogin[_0x2305b8(0x21a)](profileNameId,currentPage,{'xpath':xpath,'mainframe':currentPage,'browser':browser,'timeout':0x3e8});await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+_0x2305b8(0x1f6)+xpath,null,![]),null;return log(profileNameId,'['+botName+_0x2305b8(0x1b8)+xpath+'\x20OK'),clicked;}catch(error){return log(profileNameId,'['+botName+_0x2305b8(0x200)+error,null,![]),null;}}async function clickHold(xpath,time=0x7530){const _0x300a4e=_0x25052e;try{await delay(0x3e8);const clicked=await genlogin[_0x300a4e(0x1fb)](profileNameId,subframe,{'xpath':xpath,'mainframe':currentPage,'browser':browser},time,0x9c40);await delay(0x3e8);if(!clicked)return log(profileNameId,'['+botName+'][clickHold]Không\x20click\x20được\x20vào\x20'+xpath,null,![]),null;return log(profileNameId,'['+botName+_0x300a4e(0x22d)+xpath+'\x20OK'),clicked;}catch(error){return log(profileNameId,'['+botName+_0x300a4e(0x1f7)+error,null,![]),null;}}async function delay(ms){return new Promise(async resolve=>{setTimeout(resolve,ms);});}async function cTimeout(){const _0x28c6d5=_0x25052e;if(Atomics[_0x28c6d5(0x1df)](tasksData,taskIndex)===0x1)return!![];return![];}}function a0_0x2439(){const _0x2c8933=['//div[contains(text(),\x27Hold\x20for\x27)]','][checkClosePopup]\x20thấy\x20createADao','subcribeBtn','][checkClaim]\x20không\x20tìm\x20thấy\x20style','map','//div[contains(@class,\x27text-sm\x27)]//span[text()=\x27Our\x20Garden\x27]','getAttributeFromXPath','//div[contains(@class,\x27text-sm\x27)]//span[text()=\x27Academy\x27]',':00','Iframe','351mFyfEn','][checkClaim]\x20thấy\x20timeBar','min','][loadSetting]\x20error:\x20','//div[contains(@class,\x27text-sm\x27)]//span[text()=\x27Mint\x20NFT\x27]',']Không\x20tìm\x20thấy\x20iframe','][backToHome]Click\x20vaoHome\x20OK','][autoTap]:\x20','\x20tab\x20đang\x20mở','//button[text()=\x27Create\x20a\x20DAO\x27]','//button[text()=\x27Close\x27]',']Ra\x20game\x20nè','][click]Click\x20','closeBtn','][checkClosePopup]\x20thấy\x20startVibing',']không\x20xử\x20lý\x20được\x20thoigianconlai','][checkQuayLaiXpath]\x20Lỗi\x20trong\x20quá\x20trình\x20kiểm\x20tra:\x20','next','][checkQuayLaiXpath]\x20Vào\x20game\x20thành\x20công','][backToHome]\x20error:\x20','24535qdOpQO','split','][backToHome]\x20backToHome\x20nè',']Không\x20tìm\x20thấy\x20thoigian\x20con\x20lai',']get\x20tọa\x20độ\x20nè','5278977sVwgPN','//button[contains(text(),\x27Next\x27)]','][getCoin]:\x20Tìm\x20thấy\x20xpathCoin','popupBackBtn','createADao','7052reqCkj',']Không\x20tìm\x20thấy\x20coin','getCurrentPage',']Xử\x20lý\x20thoigianconlai\x20OK','1112jGsOrX','//div[contains(@class,\x27shown\x20open\x27)]//i[contains(@class,\x27icon-close\x27)]','][checkQuayLaiXpath]\x20Chỉ\x20có\x20','switchFrame','coin','//div[contains(@class,\x27flex\x20flex-row\x20gap-x-1\x20leading-none\x27)]','value','2906630sbhXgK','][checkClaim]\x20thấy\x20closeBtn','timeleft','][AdsGramDetec]:\x20','//div[contains(@class,\x27slide-in\x20fixed\x27)]//button[text()=\x27Verify\x27]','en-GB','countOpenTabs',']Đã\x20tìm\x20thấy\x20iframe','][checkQuayLaiXpath]\x20Đóng\x20tab\x20mới\x20thành\x20công','][checkClaim]\x20widthValue:\x20','load','][checkClaim]\x20không\x20thấy\x20timeBar','message','][checkQuayLaiXpath]\x20Click\x20closeQcBtn\x20OK','//div[contains(@style,\x27-adsgram-\x27)]','autoLamTask','][checkQuayLaiXpath]\x20Tìm\x20thấy\x20backXpath','reload','][checkQuayLaiXpath]\x20Tìm\x20thấy\x20subcribeBtn','//div[contains(@class,\x20\x27rounded-xl\x27)\x20and\x20contains(.,\x20\x27Login\x20Bonus\x27)]//button[text()=\x27Start\x27]','botSet','][checkClosePopup]\x20checkClosePopup\x20ok','][checkClaim]\x20thấy\x20tree','][xuLyhoiGianConLai]\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20thời\x20gian\x20còn\x20lại:\x20','(//dialog//button[contains(@class,\x27close-btn\x27)])[1]',']Tìm\x20thấy\x20coin:\x20','maxTimeClickAndHold','][checkQuayLaiXpath]\x20Phát\x20hiện\x20tab\x20mới','][checkQuayLaiXpath]\x20Không\x20phát\x20hiện\x20tab\x20mới',']Không\x20tìm\x20thấy\x20main\x20frame','\x20\x20OK','NextRun','][getToaDo]:\x20','][click]Không\x20click\x20được\x20vào\x20','][clickHold][Lỗi]:\x20','CloseGame','//nav//span[text()=\x27Vibe\x27]','closeQcBtn','clickAndHold','//canvas[contains(@data-engine,\x27three.js\x27)]','\x20OK','][checkClosePopup]\x20thấy\x20fingerPrintIcon',']nextRunAt:\x20','][click][Lỗi]:\x20','][backToHome]Không\x20click\x20là\x20vaoHome','home','][backToHome]Tìm\x20thayas\x20vaoHome','52742pUVMVx','][checkClaim]\x20Canvas\x20chưa\x20hiện','][AdsGramDetec]:\x20Done\x20Ads','timeBar','toLocaleTimeString','(//div[contains(@data-tc-modal,\x27true\x27)]//button[contains(@data-tc-icon-button,\x27true\x27)])[1]','][AdsGramDetec]:\x20đang\x20chờ\x20Ads\x20','soLuotLamTask','toLocaleDateString',']Lấy\x20được\x20centerPoint\x20','closeTab','00:10:00','LaunchCancel','//button[contains(text(),\x27Start\x20vibing\x27)]','][checkQuayLaiXpath]\x20Kiểm\x20tra\x20lần:\x20','18399192kYocAD','getTextByXPath','now','Không\x20tìm\x20thấy\x20iframe','][thoigianconlai]:\x20','//div[contains(@class,\x27px-3\x27)]//button[text()=\x27Verify\x27]','//div[contains(@class,\x27grid-cols-3\x27)]//button[not(.//img[contains(@src,\x20\x27lock\x27)])\x20and\x20not(.//img[contains(@src,\x20\x27check_mark\x27)])]','click','//div[contains(@style,\x27cristmas-tree\x27)\x20and\x20contains(@style,\x27opacity:\x201\x27)]','floor','][backToHome]Không\x20tìm\x20thayas\x20vaoHome','][checkQuayLaiXpath]Không\x20click\x20được\x20vào\x20closeQcBtn',']Không\x20lấy\x20được\x20centerPoint',']Auto\x20tap\x20point:','5kvpAXw','updateData','][getCoin]:\x20Xử\x20lý\x20coin\x20nè','//div[contains(@class,\x27tracking-wid\x27)]//span','//div[contains(@class,\x27mb-3\x27)]//input[contains(@placeholder,\x27Enter\x27)]','][checkClaim]\x20error:\x20','1758018kqeGWx','][finalStep]\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20cuối\x20cùng:\x20','//div[contains(@class,\x27overflow-hidden\x20relative\x20flex\x20flex-1\x20w-full\x20h-full\x27)]//div',']Tìm\x20thấy\x20timeleft:\x20','22XhreoS','NextRunStamp','][cliclickHoldk]Click\x20','closeAds','][Lỗi]:\x20','centerPoint','startVibing','][checkClaim]\x20đã\x2010%\x20hoặc\x20trên\x20','tree','//div[contains(@class,\x27close_btn\x27)]','][checkQuayLaiXpath]\x20Không\x20tìm\x20thấy\x20currentPage','11lziPPO','elementExistsByXPath','fingerPrintIcon','][checkClosePopup]\x20checkClosePopup\x20nè'];a0_0x2439=function(){return _0x2c8933;};return a0_0x2439();};