const a31_0x159d7b=a31_0x48ab;(function(_0x43c336,_0x146064){const _0x468116=a31_0x48ab,_0x148cc3=_0x43c336();while(!![]){try{const _0x1ee1d8=parseInt(_0x468116(0xec))/0x1*(parseInt(_0x468116(0x126))/0x2)+parseInt(_0x468116(0xdc))/0x3+parseInt(_0x468116(0xe2))/0x4*(-parseInt(_0x468116(0xff))/0x5)+parseInt(_0x468116(0x147))/0x6*(-parseInt(_0x468116(0x100))/0x7)+-parseInt(_0x468116(0x10a))/0x8*(parseInt(_0x468116(0x13d))/0x9)+-parseInt(_0x468116(0x11e))/0xa+-parseInt(_0x468116(0x104))/0xb*(-parseInt(_0x468116(0x12a))/0xc);if(_0x1ee1d8===_0x146064)break;else _0x148cc3['push'](_0x148cc3['shift']());}catch(_0x4dc056){_0x148cc3['push'](_0x148cc3['shift']());}}}(a31_0x395c,0x9fb26),require(a31_0x159d7b(0x113))[a31_0x159d7b(0xf5)]());const {Worker,parentPort}=require('worker_threads'),{log,json}=require('./modules/logger'),Genlogin=require(a31_0x159d7b(0xe3)),httpPost=require('./modules/http'),path=require(a31_0x159d7b(0x131)),PQueue=require(a31_0x159d7b(0xdb))[a31_0x159d7b(0xe8)],gameQueue=new PQueue({'concurrency':0x2});let genlogin,profileNameId,profileId,browser,dataId;const timGame=!![];genlogin=new Genlogin('',!![]);const http=new httpPost(process[a31_0x159d7b(0x13a)][a31_0x159d7b(0x10d)],process[a31_0x159d7b(0x13a)]['APIKEY'],!![]);let signal={'aborted':![]};parentPort['on']('message',async({profile:_0x3c9a49})=>{const _0x32d2eb=a31_0x159d7b;try{if(_0x3c9a49==_0x32d2eb(0xe4))signal[_0x32d2eb(0x137)]=!![],log('[worker-api3]:timeout',null,'w');else{if(signal[_0x32d2eb(0x137)])throw new Error('timeout');log(_0x32d2eb(0x134)+_0x3c9a49+_0x32d2eb(0x127),null,'w');const _0x5bdbd3=await xuLyProfile(_0x3c9a49);!_0x5bdbd3?(log(_0x32d2eb(0x145)+_0x3c9a49+_0x32d2eb(0xf7),null,'w'),parentPort[_0x32d2eb(0x115)]({'success':![],'result':_0x5bdbd3})):(log('[xuLyProfile]:\x20Xử\x20lý\x20profile\x20'+_0x3c9a49+_0x32d2eb(0xf9),null,'i'),parentPort[_0x32d2eb(0x115)]({'success':!![],'result':_0x5bdbd3}));}}catch(_0x43b63d){parentPort[_0x32d2eb(0x115)]({'success':![],'error':{'message':_0x43b63d[_0x32d2eb(0x14a)],'stack':_0x43b63d['stack']}});}});function a31_0x48ab(_0x641fbb,_0x2a9c9a){const _0x395c59=a31_0x395c();return a31_0x48ab=function(_0x48abfd,_0x4cdb03){_0x48abfd=_0x48abfd-0xdb;let _0x2dff28=_0x395c59[_0x48abfd];return _0x2dff28;},a31_0x48ab(_0x641fbb,_0x2a9c9a);}async function xuLyProfile(_0x2f6dd7){const _0x150768=a31_0x159d7b;try{if(signal[_0x150768(0x137)]){log(_0x150768(0x10c),null,'w');throw new Error(_0x150768(0xe4));}profileNameId=_0x2f6dd7,log(_0x150768(0x111)+JSON[_0x150768(0x11d)](_0x2f6dd7),null,'i');const _0x282384=await xuLyBrowser(_0x2f6dd7);return!_0x282384?(log(_0x150768(0x140)+_0x2f6dd7+_0x150768(0x10e),null,'w'),null):(log(_0x150768(0x140)+_0x2f6dd7+_0x150768(0xf9)),!![]);}catch(_0x3c078a){throw new Error(_0x150768(0x10f)+_0x3c078a[_0x150768(0x14a)]);}}async function xuLyEndPoint(_0x26e91b){const _0x2fdac0=a31_0x159d7b;try{if(signal[_0x2fdac0(0x137)]){log(_0x2fdac0(0x10c),null,'w');throw new Error(_0x2fdac0(0xe4));}const _0x45af8e=_0x26e91b[_0x2fdac0(0x138)]('-')[0x1];profileId=_0x45af8e;let {wsEndpoint:_0x41c5cc}=await genlogin[_0x2fdac0(0xdd)](_0x45af8e);if(signal[_0x2fdac0(0x137)]){log(_0x2fdac0(0x10c),null,'w');throw new Error('timeout');}log(_0x2fdac0(0x14b)+json(_0x41c5cc),null,'i');if(!_0x41c5cc){log(_0x2fdac0(0x144)+_0x45af8e+'\x20is\x20not\x20running',null,'i'),await genlogin[_0x2fdac0(0x130)](_0x45af8e);for(let _0x5a1365=0x0;_0x5a1365<0x5;_0x5a1365++){if(signal[_0x2fdac0(0x137)]){log('[xuLyProfile]:đã\x20bị\x20hủy',null,'w');throw new Error(_0x2fdac0(0xe4));}log(_0x2fdac0(0xe1)+(_0x5a1365+0x1)+_0x2fdac0(0xe7),null,'i'),await delay(0x1388);if(signal['aborted']){log(_0x2fdac0(0x10c),null,'w');throw new Error(_0x2fdac0(0xe4));}({wsEndpoint:_0x41c5cc}=await genlogin['checkProfileIsRun'](_0x45af8e));if(signal['aborted']){log(_0x2fdac0(0x10c),null,'w');throw new Error(_0x2fdac0(0xe4));}if(_0x41c5cc){log('[xuLyProfile]:\x20Profile\x20đã\x20chạy\x20thành\x20công\x20với\x20wsEndpoint:'+_0x41c5cc);break;}}if(!_0x41c5cc)return log(_0x2fdac0(0x11c),null,![]),![];}const _0x3c2db9=_0x26e91b;return await delay(0xbb8),log(_0x2fdac0(0x110),null,'i'),log(_0x2fdac0(0x14b)+_0x41c5cc,null,'i'),_0x41c5cc;}catch(_0x217c40){log(_0x2fdac0(0xea)+_0x217c40,null,![]);}}async function xuLyBrowser(_0x5423d5){const _0x3d97af=a31_0x159d7b;try{if(signal['aborted']){log(_0x3d97af(0x11f),null,'w');throw new Error(_0x3d97af(0xe4));}let _0x19d04d=0x0;const _0x5afe86=await http[_0x3d97af(0xeb)](profileNameId);if(!_0x5afe86){log('[xuLyBrowser]:\x20Bot\x20không\x20tìm\x20thấy',null,![]);throw new Error(_0x3d97af(0x120));}if(_0x5afe86[_0x3d97af(0x141)]<=0x0){log(_0x3d97af(0xf6),null,![]);throw new Error(_0x3d97af(0x120));}for(const _0xe35acb of _0x5afe86){if(signal[_0x3d97af(0x137)]){log(_0x3d97af(0x11f),null,'w');throw new Error('timeout');}if(_0xe35acb){if(_0xe35acb[_0x3d97af(0x12f)]==='end'){log('['+profileNameId+_0x3d97af(0x103),null,'i');break;}if(!_0xe35acb[_0x3d97af(0x121)]){log('['+profileNameId+_0x3d97af(0x13b)+json(_0xe35acb)+'\x20ko\x20có\x20aks',null,![]);continue;}if(_0xe35acb[_0x3d97af(0xfd)]==='0'){log('['+profileNameId+_0x3d97af(0x13b)+json(_0xe35acb[_0x3d97af(0x108)])+_0x3d97af(0x143),null,![]);continue;}const _0x527b55=await genlogin[_0x3d97af(0x135)]();if(_0xe35acb['nextRunStamp']>_0x527b55[_0x3d97af(0xf8)]){log('['+profileNameId+']:\x20Bot\x20'+json(_0xe35acb[_0x3d97af(0x108)])+_0x3d97af(0x12e),null,'w');continue;}switch(_0xe35acb[_0x3d97af(0x121)]){case'A':log('['+profileNameId+_0x3d97af(0xf2)+json(_0xe35acb[_0x3d97af(0x108)])+_0x3d97af(0x109)),await xuLyGame(_0xe35acb,'A');break;case'K':log('['+profileNameId+_0x3d97af(0xf2)+json(_0xe35acb[_0x3d97af(0x108)])+_0x3d97af(0xe6)),await xuLyGame(_0xe35acb,'K');break;case'W':log('['+profileNameId+_0x3d97af(0xf2)+json(_0xe35acb[_0x3d97af(0x108)])+_0x3d97af(0x112)),await xuLyGame(_0xe35acb,'W');break;default:log('['+profileNameId+_0x3d97af(0x136)+json(_0xe35acb[_0x3d97af(0x121)]),null,![]);break;}log(_0x3d97af(0x118));}}return!![];}catch(_0x286dd2){return log(_0x3d97af(0xe0)+_0x286dd2,null,![]),log(_0x3d97af(0xe9)+json(bots),null,![]),null;}}async function xuLyGame(_0x311395,_0x9504a2){const _0x31db63=a31_0x159d7b;try{if(signal[_0x31db63(0x137)]){log(_0x31db63(0x146),null,'w');throw new Error(_0x31db63(0xe4));}if(_0x311395['type']==='api'){log('[xuLyGame]:\x20'+_0x311395[_0x31db63(0x108)]+'\x20Api\x20mode',null,'i');const _0x3013bb=await genlogin[_0x31db63(0x135)](),_0x353312=await http[_0x31db63(0x12b)](profileNameId,_0x311395[_0x31db63(0x108)],_0x3013bb[_0x31db63(0xfa)],'',_0x31db63(0x13f),_0x31db63(0xee)),_0x10dd64=_0x353312['ID'],_0x1e71a0={'bot':_0x311395,'profileNameId':profileNameId,'genlogin':genlogin,'http':http,'dataId':_0x10dd64},_0xf9b0aa=await loadGameApi(_0x311395[_0x31db63(0x108)],_0x1e71a0);if(!_0xf9b0aa[_0x31db63(0x123)])return log(_0x31db63(0x10b)+_0x311395[_0x31db63(0x108)]+_0x31db63(0x101),null,![]),await http['updateData'](profileNameId,_0x10dd64,_0x31db63(0x12d),_0x31db63(0x12d)),null;if(_0xf9b0aa[_0x31db63(0x123)]==_0x31db63(0x13e))return log(_0x31db63(0x10b)+_0x311395[_0x31db63(0x108)]+_0x31db63(0x106),null,'i'),_0x31db63(0x13e);if(_0xf9b0aa[_0x31db63(0x123)])return log(_0x31db63(0x10b)+_0x311395[_0x31db63(0x108)]+_0x31db63(0x142)),await http[_0x31db63(0xfb)](profileNameId,_0x311395['id'],_0xf9b0aa[_0x31db63(0xf3)],_0xf9b0aa[_0x31db63(0xf1)]),await http['updateData'](profileNameId,_0x10dd64,'Ok',_0x31db63(0x102),_0xf9b0aa[_0x31db63(0x124)],_0xf9b0aa[_0x31db63(0xf3)]),!![];}else{log(_0x31db63(0xf4)+_0x311395[_0x31db63(0x108)]+_0x31db63(0xef),null,'i');const _0x101b40=await http[_0x31db63(0xfe)](_0x9504a2);if(_0x101b40){log(_0x31db63(0xe5));let _0x38b929=0x0;while(_0x38b929<0x2){if(signal[_0x31db63(0x137)]){log(_0x31db63(0x146),null,'w');throw new Error(_0x31db63(0xe4));}const _0x1c21d2=await checkTeleWebOpen(_0x311395,_0x101b40);if(_0x1c21d2===_0x31db63(0x13e))_0x38b929++,log('[xuLyGame]:\x20Loop\x20lại\x20,\x20loop\x20lại\x20lần\x20'+_0x38b929+'/2',null,'i'),await delay(0x3e8);else return _0x1c21d2?(log('[xuLyGame]:\x20checkTeleWebOpen\x20OK'),!![]):(log(_0x31db63(0x122),null,![]),null);}return log(_0x31db63(0xed),null,![]),null;}}}catch(_0x1321fc){return log(_0x31db63(0x105)+_0x1321fc,null,![]),null;}}async function checkTeleWebOpen(_0x323791,_0x129777){const _0x1e0077=a31_0x159d7b;try{if(signal[_0x1e0077(0x137)]){log(_0x1e0077(0x148),null,'w');throw new Error('timeout');}let _0x317bb1=await genlogin['activateTab'](browser,0x0);const _0x171334=await genlogin['elementExistsByXPath'](_0x317bb1,_0x129777['InputSearch'],0x7d0);!_0x171334&&(await genlogin['openUrl'](_0x317bb1,_0x1e0077(0x116)),await delay(0x7d0),await genlogin[_0x1e0077(0x12c)](_0x317bb1,_0x129777[_0x1e0077(0x117)]),await delay(0x7d0));log('[checkTeleWebOpen]:\x20vào\x20loadGame',null,'i');const _0x278008=await genlogin[_0x1e0077(0x135)](),_0x56dd44=await http[_0x1e0077(0x12b)](profileNameId,_0x323791[_0x1e0077(0x108)],_0x278008['date'],'','Start',_0x1e0077(0xee));dataId=_0x56dd44['ID'];const _0x2fff26={'firstPage':_0x317bb1,'bot':_0x323791,'profileNameId':profileNameId,'getAks':_0x129777,'genlogin':genlogin,'http':http,'browser':browser,'dataId':dataId};log(_0x1e0077(0xf0)+json(dataId),null,'i');if(timGame){await http[_0x1e0077(0x11b)](profileNameId,dataId,_0x1e0077(0x11a));const _0x42025e=await loadGame('timGame',_0x2fff26);if(_0x42025e['status']=='loop')return log(_0x1e0077(0x125)+_0x323791[_0x1e0077(0x108)]+_0x1e0077(0x106),null,'i'),await http['updateData'](profileNameId,dataId,'loop\x20new\x20game'),_0x1e0077(0x13e);else{if(!_0x42025e)return log(_0x1e0077(0x129)+_0x323791[_0x1e0077(0x108)],null,![]),null;}}await http[_0x1e0077(0x11b)](profileNameId,dataId,'Vào');const _0x184ea1=await loadGame(_0x323791[_0x1e0077(0x108)],_0x2fff26);if(!_0x184ea1[_0x1e0077(0x123)])return log(_0x1e0077(0x107)+_0x323791[_0x1e0077(0x108)],null,![]),log(_0x1e0077(0x114)+json(_0x184ea1),null,![]),null;else{if(_0x184ea1['status']==_0x1e0077(0x13e))return log(_0x1e0077(0x125)+_0x323791[_0x1e0077(0x108)]+_0x1e0077(0x106),null,'i'),await http['updateData'](profileNameId,dataId,'loop'),_0x1e0077(0x13e);}return await http[_0x1e0077(0xfb)](profileNameId,_0x323791['id'],_0x184ea1[_0x1e0077(0xf3)],_0x184ea1['nextRunStamp']),await http[_0x1e0077(0x11b)](profileNameId,dataId,'Ok','Done',_0x184ea1[_0x1e0077(0x124)],_0x184ea1[_0x1e0077(0xf3)]),log(_0x1e0077(0x139)+_0x323791[_0x1e0077(0x108)]+_0x1e0077(0xf9)),await delay(0x7d0),!![];}catch(_0x51bc07){return log(_0x1e0077(0x119)+_0x51bc07,null,![]),null;}}async function loadGame(_0x5e81b5,_0x500aa2){const _0x14da9a=a31_0x159d7b;try{if(signal[_0x14da9a(0x137)]){log('[loadGame]:đã\x20bị\x20hủy',null,'w');throw new Error(_0x14da9a(0xe4));}const _0x4e08d3=path[_0x14da9a(0xde)](__dirname,'scripts',_0x5e81b5+_0x14da9a(0x132)),_0x3925d4=require(_0x4e08d3);if(typeof _0x3925d4===_0x14da9a(0x13c)){const _0x2dab4b=await _0x3925d4(_0x500aa2,signal);await delay(0x3e8);if(!_0x2dab4b[_0x14da9a(0x123)])return log('[loadGame]:\x20Script\x20'+_0x5e81b5+_0x14da9a(0x128),null,![]),null;return _0x2dab4b[_0x14da9a(0x123)]===_0x14da9a(0x13e)?(log(_0x14da9a(0x133)+_0x5e81b5+_0x14da9a(0x106),null,'i'),_0x2dab4b):(log('[loadGame]:\x20Chạy\x20'+_0x5e81b5+'\x20'+_0x2dab4b['status'],null,'i'),_0x2dab4b);}else return await delay(0x3e8),log(_0x14da9a(0xdf)+_0x5e81b5+_0x14da9a(0x149),null,![]),null;}catch(_0x25c642){return log(_0x14da9a(0xfc)+_0x5e81b5+':\x20'+_0x25c642,null,![]),null;}}function a31_0x395c(){const _0x1df447=['[checkTeleWebOpen]:\x20Không\x20thực\x20thi\x20script\x20','name','\x20Tele\x20A\x20OK','863752UPKTTh','[xuLyGame]:\x20Thực\x20thi\x20','[xuLyProfile]:đã\x20bị\x20hủy','SERVER_HOST','\x20thất\x20bại','Lỗi\x20xử\x20lý\x20profile:\x20','[xuLyProfile]:\x20Đang\x20mở\x20trình\x20duyệt...','[xuLyProfile]:\x20Processing\x20profile:\x20','\x20Web\x20OK','dotenv','[checkTeleWebOpen]:\x20','postMessage','https://www.google.com','FistUrl','[xuLyBrowser]:\x20Bot\x20OK','[checkTeleWebOpen]:\x20Lỗi\x20trong\x20quá\x20trình\x20mở\x20trang\x20:\x20','Tìm','updateData','[xuLyProfile]:\x20Không\x20thể\x20lấy\x20được\x20wsEndpoint\x20sau\x205\x20lần\x20thử','stringify','9525880RXJYqI','[xuLyBrowser]:đã\x20bị\x20hủy','No\x20bot\x20found','aks','[xuLyGame]:\x20checkTeleWebOpen\x20có\x20gì\x20đó\x20sai\x20sai\x20rồi\x20bro','status','coin','[checkTeleWebOpen]:\x20Thực\x20thi\x20','688334bUIxSs',']:\x20Api\x20Mode','\x20không\x20trả\x20về\x20status','[checkTeleWebOpen]:\x20Không\x20tìm\x20thấy\x20game\x20','11064KjRjrH','addData','openUrl','Fail','\x20Chưa\x20tới\x20giờ\x20chạy','value','runProfile','path','.js','[loadGame]:\x20Chạy\x20','[\x27worker-api3][','nowTime',']:\x20Sai\x20aks\x20','aborted','split','[checkTeleWebOpen]:\x20Thực\x20thi\x20script\x20','env',']:\x20Bot\x20','function','9rgNmqd','loop','StartApi','[xuLyProfile]:\x20Xử\x20lý\x20browser\x20','length','\x20done','\x20OFF','[xuLyProfile]:\x20Đang\x20mở\x20profile\x20','[xuLyProfile]:\x20Xử\x20lý\x20profile\x20','[xuLyGame]:đã\x20bị\x20hủy','6kWSMJd','[checkTeleWebOpen]:đã\x20bị\x20hủy','\x20không\x20phải\x20là\x20một\x20hàm\x20hợp\x20lệ','message','[xuLyProfile]:\x20wsEndpoint:\x20','p-queue','2934363VcrOXl','checkProfileIsRun','join','[loadGame]:\x20Script\x20','[xuLyBrowser]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20browser:\x20','[xuLyProfile]:\x20Thử\x20lần\x20','1064ciKohG','./modules/Genlogin','timeout','[xuLyGame]:\x20getAks\x20OK','\x20Tele\x20K\x20OK','\x20để\x20kiểm\x20tra\x20wsEndpoint...','default','[xuLyBrowser]:\x20','[xuLyProfile]:\x20Lỗi\x20chung\x20xuLyProfile:\x20','getBotAll','3BMjZnd','[xuLyGame]:Max\x20loop\x20rồi\x20bro','running','\x20Script\x20mode','[checkTeleWebOpen]:\x20dataId:\x20','nextRunStamp',']:\x20','nextRun','[xuLyGame]:\x20','config','[xuLyBrowser]:\x20không\x20lấy\x20được\x20bot','\x20có\x20lỗi','timestamp','\x20thành\x20công','date','nextRunTime','[loadGame]:\x20Lỗi\x20khi\x20load\x20và\x20thực\x20thi\x20script\x20','onOff','getAks','21245KzdnNH','2479197WobjoE','\x20lỗi','Done',']:\x20XONG\x201\x20LƯỢT','14179hJIWWX','[xuLyGame]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20Game:\x20','\x20loop'];a31_0x395c=function(){return _0x1df447;};return a31_0x395c();}async function delay(_0x17734a){return new Promise(_0x543275=>{const _0x4714ad=a31_0x48ab;if(signal[_0x4714ad(0x137)])throw new Error(_0x4714ad(0xe4));setTimeout(_0x543275,_0x17734a);});}