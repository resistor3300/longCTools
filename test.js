const a25_0x5d92c4=a25_0x2ae1;(function(_0x316fa3,_0x5fae8){const _0xc79b50=a25_0x2ae1,_0x174f7b=_0x316fa3();while(!![]){try{const _0x564d31=-parseInt(_0xc79b50(0xd7))/0x1*(parseInt(_0xc79b50(0xaf))/0x2)+parseInt(_0xc79b50(0xb2))/0x3+-parseInt(_0xc79b50(0x89))/0x4*(-parseInt(_0xc79b50(0xec))/0x5)+-parseInt(_0xc79b50(0x86))/0x6+-parseInt(_0xc79b50(0xf3))/0x7*(parseInt(_0xc79b50(0xc1))/0x8)+parseInt(_0xc79b50(0xea))/0x9+-parseInt(_0xc79b50(0x9a))/0xa;if(_0x564d31===_0x5fae8)break;else _0x174f7b['push'](_0x174f7b['shift']());}catch(_0x5307e1){_0x174f7b['push'](_0x174f7b['shift']());}}}(a25_0x4ceb,0x2f4ad),require(a25_0x5d92c4(0x8f))['config']());const Genlogin=require('./modules/Genlogin'),httpPost=require(a25_0x5d92c4(0xe2)),puppeteer=require(a25_0x5d92c4(0xe3)),{log,json}=require(a25_0x5d92c4(0xa0)),{machine_id,machineIdSync}=require(a25_0x5d92c4(0xa1)),machineId=machineIdSync()['substring'](0x0,0x8),path=require(a25_0x5d92c4(0x8c)),delay=_0xa5028=>new Promise(_0x54d6cc=>setTimeout(_0x54d6cc,_0xa5028)),serverApi=a25_0x5d92c4(0xd5),mainApi=a25_0x5d92c4(0xff),appName='LongCAutoAirdrop'+'-'+machineId,nameFile=a25_0x5d92c4(0xef)+'-'+machineId,isLoggingEnabled=!![],timGame=![],appSetings={'autoUpgrateTimeFarm':!![],'autoNhatHoaBlum':!![]};let genlogin,http,profileNameId,profileId,browser,getAllProfiles,taskInfo,indexP,pLength,dataId,signal={'aborted':![]};function a25_0x2ae1(_0x122175,_0x34c52f){const _0x4ceb9e=a25_0x4ceb();return a25_0x2ae1=function(_0x2ae13a,_0x2c6962){_0x2ae13a=_0x2ae13a-0x85;let _0x33e2bb=_0x4ceb9e[_0x2ae13a];return _0x33e2bb;},a25_0x2ae1(_0x122175,_0x34c52f);}((async()=>{const _0x4862d5=a25_0x5d92c4;try{log(_0x4862d5(0xa3)+appName),await delay(0x3e8),genlogin=new Genlogin('',!![]),http=new httpPost(process['env']['SERVER_HOST'],process[_0x4862d5(0xb6)][_0x4862d5(0xd9)],!![]);let _0x2f1048,_0x3ce552=0x0;const _0x4f97fa=0x3,_0x49d0c1=await genlogin[_0x4862d5(0x85)]();if(!_0x49d0c1){log(_0x4862d5(0x107),null,![]),log(_0x4862d5(0xf8),null,![]),log(_0x4862d5(0xfe));throw new Error(_0x4862d5(0x8a));}let _0x48f815=await _0x49d0c1[_0x4862d5(0xa6)];await delay(0xbb8),getAllProfiles=await http[_0x4862d5(0xb0)](appName,nameFile,_0x48f815,appSetings);if(!getAllProfiles[_0x4862d5(0xfb)]||!getAllProfiles||getAllProfiles[_0x4862d5(0xfb)][_0x4862d5(0xeb)]<=0x0){log('[main]:\x20Không\x20có\x20task\x20hoặc\x20chưa\x20tới\x20thời\x20gian\x20chạy',null,![]),log(_0x4862d5(0xfe));throw new Error('No\x20task\x20found');}log(_0x4862d5(0x100));const _0x116aa1=Object['entries'](getAllProfiles[_0x4862d5(0xfb)]);for(let _0x496566=0x0;_0x496566<_0x116aa1[_0x4862d5(0xeb)];_0x496566++){const [_0x20ac51,_0x306f85]=_0x116aa1[_0x496566];profileNameId=_0x306f85[_0x4862d5(0x105)],taskInfo=_0x306f85,log('[main]:\x20Processing\x20profile:\x20'+JSON[_0x4862d5(0xe1)](_0x306f85['name'])),await xuLyTask(_0x306f85),_0x496566<_0x116aa1[_0x4862d5(0xeb)]-0x1&&(log(_0x4862d5(0xce)),await delay(0x1388));}}catch(_0x20fef4){log(_0x4862d5(0xf7)+_0x20fef4,null,![]);}})());async function xuLyTask(_0x1f196e){const _0x19e66e=a25_0x5d92c4,_0x558869=await genlogin['nowTime'](),_0x2043a8=_0x558869[_0x19e66e(0xf4)],_0x379685=new Date(_0x1f196e[_0x19e66e(0x8e)][_0x19e66e(0x8d)]('\x20')[0x0]['split']('-')[_0x19e66e(0xc6)]()[_0x19e66e(0xc0)]('-')+'T'+_0x1f196e[_0x19e66e(0x8e)][_0x19e66e(0x8d)]('\x20')[0x1]);if(_0x2043a8-_0x379685<0x0){log(_0x19e66e(0xae)+JSON['stringify'](_0x1f196e[_0x19e66e(0x105)])+_0x19e66e(0xdc)),log('[xuLyTask]:\x20currentDateTime:\x20'+JSON[_0x19e66e(0xe1)](_0x558869)+'\x20|\x20nextrun:\x20'+JSON[_0x19e66e(0xe1)](_0x1f196e['nextrun'])),log(_0x19e66e(0xbe)+JSON[_0x19e66e(0xe1)](_0x2043a8)+_0x19e66e(0x103)+JSON['stringify'](_0x379685)),log(_0x19e66e(0x9f)),await delay(0x1388);return;}let _0x195b6d=await http[_0x19e66e(0x92)](_0x1f196e[_0x19e66e(0x105)]);if(_0x195b6d[_0x19e66e(0xfb)][_0x19e66e(0xa6)][_0x19e66e(0xeb)]<=0x0){log(_0x19e66e(0xee));throw new Error(_0x19e66e(0x9c));}pLength=_0x195b6d[_0x19e66e(0xfb)][_0x19e66e(0xa6)][_0x19e66e(0xeb)];for(const [_0x228e7d,_0x4b0757]of _0x195b6d[_0x19e66e(0xfb)][_0x19e66e(0xa6)][_0x19e66e(0xe9)]()){profileNameId=_0x4b0757,log(_0x19e66e(0xf1)+JSON[_0x19e66e(0xe1)](_0x4b0757)),indexP=_0x228e7d;const _0x1ea8fb=await xuLyProfile(_0x4b0757);_0x1ea8fb&&(browser=await connectToWsEndpoint(_0x1ea8fb),browser&&await xuLyBrowser(browser),log('[xuLyTask]:\x20Hoàn\x20thành\x20xử\x20lý\x20profile:\x20'+JSON['stringify'](_0x4b0757)));}log(_0x19e66e(0xda)),log(_0x19e66e(0xfd)+JSON[_0x19e66e(0xe1)](_0x1f196e[_0x19e66e(0x105)])),await delay(0x7d0),log('[xuLyTask]:\x20Hoàn\x20thành\x20xử\x20lý\x20task:\x20'+JSON['stringify'](_0x1f196e[_0x19e66e(0x105)]));}async function xuLyProfile(_0x204952){const _0x323635=a25_0x5d92c4;try{const _0x56dbb7=_0x204952['split']('-')[0x1];profileId=_0x56dbb7;let {wsEndpoint:_0x1cd1fb}=await genlogin[_0x323635(0xe6)](_0x56dbb7);log(_0x323635(0xe7)+json(_0x1cd1fb));if(!_0x1cd1fb){log(_0x323635(0xc2)+_0x56dbb7+_0x323635(0xbd)),await genlogin[_0x323635(0xb3)](_0x56dbb7);for(let _0x178eeb=0x0;_0x178eeb<0x5;_0x178eeb++){log(_0x323635(0xc8)+(_0x178eeb+0x1)+_0x323635(0xa4)),await delay(0x1388),{wsEndpoint:_0x1cd1fb}=await genlogin[_0x323635(0xe6)](_0x56dbb7);if(_0x1cd1fb){log(_0x323635(0xc9)+_0x1cd1fb);break;}}if(!_0x1cd1fb)return log(_0x323635(0xb5)),![];}const _0xb1dfb5=_0x204952;return await delay(0xbb8),log(_0x323635(0xca)),log(_0x323635(0xe7)+_0x1cd1fb),_0x1cd1fb;}catch(_0x34f3ba){log(_0x323635(0x9d)+_0x34f3ba,![]);}}async function connectToWsEndpoint(_0x4370bf){const _0x174fa2=a25_0x5d92c4;try{const _0x4381bc=await genlogin[_0x174fa2(0x91)](_0x4370bf,getAllProfiles,taskInfo);return log(_0x174fa2(0xed)+_0x4370bf),_0x4381bc;}catch(_0x462191){return log(_0x174fa2(0x99)+_0x4370bf,![]),null;}}async function xuLyBrowser(_0x4dc5a6){const _0x55ec7a=a25_0x5d92c4;try{let _0x49d6fa=0x0;const _0x5acf06=await http[_0x55ec7a(0xc5)](profileNameId);if(!_0x5acf06){log(_0x55ec7a(0xe8));throw new Error(_0x55ec7a(0xe4));}if(_0x5acf06['length']<=0x0){log(_0x55ec7a(0xe0));throw new Error(_0x55ec7a(0xe4));}for(const _0xce1ad8 of _0x5acf06){if(_0xce1ad8){if(_0xce1ad8[_0x55ec7a(0xfb)]==='end'){log('['+profileNameId+']:\x20XONG\x201\x20LƯỢT');break;}if(!_0xce1ad8[_0x55ec7a(0x104)]){log('['+profileNameId+']:\x20Bot\x20'+json(_0xce1ad8)+_0x55ec7a(0xfc),null,![]);continue;}if(_0xce1ad8[_0x55ec7a(0xa5)]==='0'){log('['+profileNameId+']:\x20Bot\x20'+json(_0xce1ad8[_0x55ec7a(0x105)])+_0x55ec7a(0xad),null,![]);continue;}switch(_0xce1ad8[_0x55ec7a(0x104)]){case'A':log('['+profileNameId+_0x55ec7a(0xc4)+json(_0xce1ad8[_0x55ec7a(0x105)])+_0x55ec7a(0xe5)),await xuLyGame(_0xce1ad8,'A');break;case'K':log('['+profileNameId+_0x55ec7a(0xc4)+json(_0xce1ad8[_0x55ec7a(0x105)])+'\x20Tele\x20K\x20OK'),await xuLyGame(_0xce1ad8,'K');break;case'W':log('['+profileNameId+']:\x20'+json(_0xce1ad8[_0x55ec7a(0x105)])+_0x55ec7a(0xcf)),await xuLyGame(_0xce1ad8,'W');break;default:log('['+profileNameId+']:\x20Sai\x20aks\x20'+json(_0xce1ad8[_0x55ec7a(0x104)]));break;}log('[xuLyBrowser]:\x20Bot\x20OK');}}}catch(_0x1c6d51){return log(_0x55ec7a(0x9e)+_0x1c6d51,![]),log('[xuLyBrowser]:\x20'+json(bots),![]),null;}}async function xuLyGame(_0x3249cf,_0x1ff5ad){const _0x333b6a=a25_0x5d92c4;try{if(_0x3249cf[_0x333b6a(0x8b)]===_0x333b6a(0x94)){log('[xuLyGame]:\x20'+_0x3249cf[_0x333b6a(0x105)]+_0x333b6a(0x102));const _0x3ad74b=await genlogin[_0x333b6a(0xbc)](),_0x234d21=await http[_0x333b6a(0xa2)](profileNameId,_0x3249cf[_0x333b6a(0x105)],_0x3ad74b[_0x333b6a(0xf4)],'',_0x333b6a(0xd4),_0x333b6a(0xf2)),_0x26bcc7=_0x234d21['ID'],_0x3fac07={'bot':_0x3249cf,'profileNameId':profileNameId,'genlogin':genlogin,'http':http,'dataId':_0x26bcc7},_0x2fd986=await loadGameApi(_0x3249cf[_0x333b6a(0x105)],_0x3fac07);if(!_0x2fd986['status'])return log(_0x333b6a(0xab)+_0x3249cf[_0x333b6a(0x105)]+_0x333b6a(0xd2)),await http[_0x333b6a(0x9b)](profileNameId,_0x26bcc7,_0x333b6a(0xa9),_0x333b6a(0xa9)),null;if(_0x2fd986[_0x333b6a(0xd1)]==_0x333b6a(0xd0))return log(_0x333b6a(0xab)+_0x3249cf[_0x333b6a(0x105)]+'\x20loop'),_0x333b6a(0xd0);if(_0x2fd986[_0x333b6a(0xd1)])return log(_0x333b6a(0xab)+_0x3249cf[_0x333b6a(0x105)]+_0x333b6a(0x88)),await http['nextRunTime'](profileNameId,_0x3249cf['id'],_0x2fd986['nextRun'],_0x2fd986['nextRunStamp']),await http[_0x333b6a(0x9b)](profileNameId,_0x26bcc7,'Ok',_0x333b6a(0xc3),_0x2fd986[_0x333b6a(0xc7)],_0x2fd986[_0x333b6a(0xa8)]),!![];}else{log(_0x333b6a(0xb7)+_0x3249cf['name']+_0x333b6a(0xdb));const _0x1fe240=await http['getAks'](_0x1ff5ad);if(_0x1fe240){log(_0x333b6a(0x106));let _0x390687=0x0;while(_0x390687<0x2){const _0x527ece=await checkTeleWebOpen(_0x3249cf,_0x1fe240);if(_0x527ece===_0x333b6a(0xd0))_0x390687++,log('[xuLyGame]:\x20Loop\x20lại\x20,\x20loop\x20lại\x20lần\x20'+_0x390687+'/2'),await delay(0x3e8);else return _0x527ece?(log(_0x333b6a(0xd6)),!![]):(log(_0x333b6a(0xaa),null,![]),null);}return log(_0x333b6a(0xd3),null,![]),null;}}}catch(_0x42ff4f){return log(_0x333b6a(0x101)+_0x42ff4f,null,![]),null;}}async function checkTeleWebOpen(_0x4aa924,_0x5b3a52){const _0x39b847=a25_0x5d92c4;try{let _0x5ce044;if(parseInt(_0x4aa924[_0x39b847(0xdd)])===0x0){_0x5ce044=await genlogin[_0x39b847(0xd8)](browser,0x0,getAllProfiles[_0x39b847(0x87)],0x1);const _0xbad044=await genlogin[_0x39b847(0xbb)](_0x5ce044,_0x5b3a52[_0x39b847(0xcd)],0x7d0);!_0xbad044&&(await genlogin[_0x39b847(0x90)](_0x5ce044,'https://www.google.com'),await delay(0x7d0),await genlogin[_0x39b847(0x90)](_0x5ce044,_0x5b3a52[_0x39b847(0xf0)]),await delay(0x7d0));}else _0x5ce044=await genlogin['getCurrentPage'](browser);log(_0x39b847(0xb4));const _0x373c3e=await genlogin[_0x39b847(0xbc)](),_0x36aaa6=await http[_0x39b847(0xa2)](profileNameId,_0x4aa924[_0x39b847(0x105)],_0x373c3e['date'],'','Start',_0x39b847(0xf2));dataId=_0x36aaa6['ID'];const _0xc57347={'firstPage':_0x5ce044,'bot':_0x4aa924,'profileNameId':profileNameId,'getAks':_0x5b3a52,'genlogin':genlogin,'http':http,'browser':browser,'dataId':dataId};log(_0x39b847(0xcb)+json(dataId));if(timGame){await http[_0x39b847(0x9b)](profileNameId,dataId,'Tìm');const _0x582369=await loadGame('timGame',_0xc57347);if(_0x582369[_0x39b847(0xd1)]==_0x39b847(0xd0))return log(_0x39b847(0xf9)+_0x4aa924[_0x39b847(0x105)]+_0x39b847(0xfa)),await http[_0x39b847(0x9b)](profileNameId,dataId,_0x39b847(0x97)),'loop';else{if(!_0x582369)return log(_0x39b847(0xde)+_0x4aa924['name']),null;}}await http[_0x39b847(0x9b)](profileNameId,dataId,'Vào');const _0x156b1f=await loadGame(_0x4aa924['name'],_0xc57347);if(!_0x156b1f[_0x39b847(0xd1)])return log(_0x39b847(0x95)+_0x4aa924[_0x39b847(0x105)]),log(_0x39b847(0xa7)+json(_0x156b1f)),null;else{if(_0x156b1f[_0x39b847(0xd1)]==_0x39b847(0xd0))return log(_0x39b847(0xf9)+_0x4aa924[_0x39b847(0x105)]+_0x39b847(0xfa)),await http[_0x39b847(0x9b)](profileNameId,dataId,_0x39b847(0xd0)),'loop';}return await http['nextRunTime'](profileNameId,_0x4aa924['id'],_0x156b1f[_0x39b847(0xa8)],_0x156b1f[_0x39b847(0xcc)]),await http[_0x39b847(0x9b)](profileNameId,dataId,'Ok','Done',_0x156b1f[_0x39b847(0xc7)],_0x156b1f[_0x39b847(0xa8)]),log(_0x39b847(0xf5)+_0x4aa924[_0x39b847(0x105)]+_0x39b847(0xf6)),await delay(0x7d0),!![];}catch(_0x347dbc){return log(_0x39b847(0xba)+_0x347dbc,![]),null;}}function a25_0x4ceb(){const _0xad7740=['loop','status','\x20lỗi','[xuLyGame]:Max\x20loop\x20rồi\x20bro','StartApi','https://gen.vpe.me','[xuLyGame]:\x20checkTeleWebOpen\x20OK','2689cqChRA','activateTab','APIKEY','[xuLyTask]:\x20Tasks:\x20Data\x20ok','\x20Script\x20mode','\x20chưa\x20đến\x20thời\x20gian\x20chạy','newTab','[checkTeleWebOpen]:\x20Không\x20tìm\x20thấy\x20game\x20','function','[xuLyBrowser]:\x20không\x20lấy\x20được\x20bot','stringify','./modules/http','puppeteer','No\x20bot\x20found','\x20Tele\x20A\x20OK','checkProfileIsRun','[xuLyProfile]:\x20wsEndpoint:\x20','[xuLyBrowser]:\x20Bot\x20không\x20tìm\x20thấy','entries','2475765ojydDF','length','5vQbEAj','[connectToWsEndpoint]:\x20Kết\x20nối\x20thành\x20công\x20với\x20wsEndpoint:\x20','[xuLyTask]:\x20không\x20lấy\x20được\x20profile','genProfiles','FistUrl','[xuLyTask]:\x20Processing\x20profile:\x20','running','566965XXckni','date','[checkTeleWebOpen]:\x20Thực\x20thi\x20script\x20','\x20thành\x20công','[main]:\x20Lỗi\x20chung:\x20','[main]:\x20Hoặc\x20Đăng\x20nhập\x20lại\x20App\x20genlogin\x20nhé\x20bro','[checkTeleWebOpen]:\x20Thực\x20thi\x20','\x20loop','value','\x20ko\x20có\x20aks','[xuLyTask]:\x20Đang\x20xử\x20lý\x20task:\x20','[main]:\x20chờ\x2030\x20giây\x20rồi\x20thử\x20lại','/api.php','[main]:\x20getAllProfiles.value\x20OK','[xuLyGame]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20Game:\x20','\x20Api\x20mode','\x20|\x20nextrun:\x20','aks','name','[xuLyGame]:\x20getAks\x20OK','[main]:\x20Mở\x20App\x20genlogin\x20trước\x20nhé\x20bro,kiểm\x20tra\x20coi\x20mở\x20chưa\x20bro','getListProfiles','1815870mZQcVd','screenWidthHeight','\x20done','1099444zhKlVi','No\x20profiles\x20found','type','path','split','nextrun','dotenv','openUrl','connectWs','getTask','\x20không\x20phải\x20là\x20một\x20hàm\x20hợp\x20lệ','api','[checkTeleWebOpen]:\x20Không\x20thực\x20thi\x20script\x20','[loadGameApi]:\x20Chạy\x20','loop\x20new\x20game','[loadGame]:\x20Chạy\x20','[connectToWsEndpoint]:\x20Lỗi\x20khi\x20kết\x20nối\x20với\x20wsEndpoint:\x20','771980dqmUNK','updateData','No\x20profile\x20found','[xuLyProfile]:\x20Lỗi\x20chung\x20xuLyProfile:\x20','[xuLyBrowser]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20browser:\x20','[xuLyTask]:\x20Chờ\x205\x20giây\x20trước\x20khi\x20xử\x20lý\x20task\x20tiếp\x20theo...','./modules/logger','node-machine-id','addData','[main]:\x20Start\x20App:\x20','\x20để\x20kiểm\x20tra\x20wsEndpoint...','onOff','profiles','[checkTeleWebOpen]:\x20','nextRun','Fail','[xuLyGame]:\x20checkTeleWebOpen\x20có\x20gì\x20đó\x20sai\x20sai\x20rồi\x20bro','[xuLyGame]:\x20Thực\x20thi\x20','[loadGameApi]:\x20Lỗi\x20khi\x20load\x20và\x20thực\x20thi\x20script\x20','\x20OFF','[xuLyTask]:\x20Task\x20','66PXVJdn','getAllProfiles','scripts','580014sGeUXQ','runProfile','[checkTeleWebOpen]:\x20vào\x20loadGame','[xuLyProfile]:\x20Không\x20thể\x20lấy\x20được\x20wsEndpoint\x20sau\x205\x20lần\x20thử','env','[xuLyGame]:\x20','[loadGame]:\x20Lỗi\x20khi\x20load\x20và\x20thực\x20thi\x20script\x20','toolApi','[checkTeleWebOpen]:\x20Lỗi\x20trong\x20quá\x20trình\x20mở\x20trang\x20:\x20','elementExistsByXPath','nowTime','\x20is\x20not\x20running','[xuLyTask]:\x20currentDateTime:\x20','.js','join','8GXBbtw','[xuLyProfile]:\x20Đang\x20mở\x20profile\x20','Done',']:\x20','getBotAll','reverse','coin','[xuLyProfile]:\x20Thử\x20lần\x20','[xuLyProfile]:\x20Profile\x20đã\x20chạy\x20thành\x20công\x20với\x20wsEndpoint:','[xuLyProfile]:\x20Đang\x20mở\x20trình\x20duyệt...','[checkTeleWebOpen]:\x20dataId:\x20','nextRunStamp','InputSearch','[main]:\x20Chờ\x205\x20giây\x20trước\x20khi\x20xử\x20lý\x20profile\x20tiếp\x20theo...','\x20Web\x20OK'];a25_0x4ceb=function(){return _0xad7740;};return a25_0x4ceb();}async function loadGame(_0x2a8ba3,_0x19a94e){const _0x57c165=a25_0x5d92c4;try{const _0x1b0171=path[_0x57c165(0xc0)](__dirname,_0x57c165(0xb1),_0x2a8ba3+_0x57c165(0xbf)),_0x15760e=require(_0x1b0171);if(typeof _0x15760e===_0x57c165(0xdf)){const _0x20ef77=await _0x15760e(_0x19a94e,signal);return await delay(0x3e8),_0x20ef77['status']===_0x57c165(0xd0)?(log(_0x57c165(0x98)+_0x2a8ba3+_0x57c165(0xfa)),_0x20ef77):(log(_0x57c165(0x98)+_0x2a8ba3+'\x20'+_0x20ef77['status']),_0x20ef77);}else return await delay(0x3e8),log('[loadGame]:\x20Script\x20'+_0x2a8ba3+'\x20không\x20phải\x20là\x20một\x20hàm\x20hợp\x20lệ'),null;}catch(_0x155421){return log(_0x57c165(0xb8)+_0x2a8ba3+':\x20'+_0x155421,![]),null;}}async function loadGameApi(_0x379c8d,_0x563985){const _0x367bb8=a25_0x5d92c4;try{const _0x4e3385=path[_0x367bb8(0xc0)](__dirname,_0x367bb8(0xb9),_0x379c8d+_0x367bb8(0xbf)),_0x49bc9d=require(_0x4e3385);if(typeof _0x49bc9d===_0x367bb8(0xdf)){const _0x5a0eed=await _0x49bc9d(_0x563985,signal);return await delay(0x3e8),_0x5a0eed[_0x367bb8(0xd1)]==='loop'?(log('[loadGameApi]:\x20Chạy\x20'+_0x379c8d+'\x20loop'),_0x5a0eed):(log(_0x367bb8(0x96)+_0x379c8d+'\x20'+_0x5a0eed[_0x367bb8(0xd1)]),_0x5a0eed);}else return await delay(0x3e8),log('[loadGameApi]:\x20Script\x20'+_0x379c8d+_0x367bb8(0x93)),null;}catch(_0x229329){return log(_0x367bb8(0xac)+_0x379c8d+':\x20'+_0x229329,![]),null;}}