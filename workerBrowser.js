const a0_0x52698d=a0_0x3f26;(function(_0x38cebb,_0x33974b){const _0x577c17=a0_0x3f26,_0x46631d=_0x38cebb();while(!![]){try{const _0x12becf=-parseInt(_0x577c17(0x163))/0x1+-parseInt(_0x577c17(0x182))/0x2+-parseInt(_0x577c17(0x200))/0x3+-parseInt(_0x577c17(0x168))/0x4*(parseInt(_0x577c17(0x1e1))/0x5)+-parseInt(_0x577c17(0x1ca))/0x6*(parseInt(_0x577c17(0x1f0))/0x7)+parseInt(_0x577c17(0x164))/0x8*(parseInt(_0x577c17(0x1f1))/0x9)+parseInt(_0x577c17(0x1b2))/0xa*(parseInt(_0x577c17(0x20b))/0xb);if(_0x12becf===_0x33974b)break;else _0x46631d['push'](_0x46631d['shift']());}catch(_0x20a2b4){_0x46631d['push'](_0x46631d['shift']());}}}(a0_0x5f72,0x9f9c2));import'dotenv/config';import a0_0x1031a6 from'fs';import a0_0x39d87a from'path';import{fileURLToPath,pathToFileURL}from'url';import{expose}from'threads/worker';import{log,json}from'./modules/logger.js';import a0_0x375bf2 from'./modules/Genlogin.js';import a0_0x1f4667 from'./modules/http.js';import a0_0x6d792f from'p-queue';const __filename=fileURLToPath(import.meta[a0_0x52698d(0x1b8)]),__dirname=a0_0x39d87a[a0_0x52698d(0x1f8)](__filename);let profileQueue,genlogin,profileNameId0,profileId,http,getAllProfiles,taskInfo,GenDataProfile,screenArrData,timgame;genlogin=new a0_0x375bf2('',!![]),http=new a0_0x1f4667(process[a0_0x52698d(0x21c)][a0_0x52698d(0x161)],process[a0_0x52698d(0x21c)][a0_0x52698d(0x218)],!![]);let firstRun=!![],delayOpenProfile=0xbb8,profileTimeout=0x5265c0,botTimeout=0x5265c0,profileThreads=0x1,browserInfo={},version,pos0,screenData,tasksData,screenDataBuffer1,tasksDataBuffer1,teleId=null;const worker1=async _0x17e4f6=>{const _0x5920a1=a0_0x52698d,{tasksDataBuffer:_0x23b2d8,screenDataBuffer:_0x2c2163,action:_0xd16233,task:_0x107382,dataBrw:_0xa2793a,GenDataProfile0:_0x49de3d,timgame0:_0x3b4003,dataPayload:_0x378ccc,timeout:_0x2ab72d,tele_id:_0x23a4a7}=_0x17e4f6;taskInfo=_0x107382;_0x23a4a7&&_0x23a4a7['tele_id']&&(teleId=_0x23a4a7[_0x5920a1(0x1b6)]);screenDataBuffer1=_0x2c2163,tasksDataBuffer1=_0x23b2d8,screenData=new Int32Array(_0x2c2163),tasksData=new Int32Array(_0x23b2d8);try{if(_0x2ab72d)return log(_0x5920a1(0x181),_0x5920a1(0x186),null,'w'),{'success':![],'error':_0x5920a1(0x186)};else{if(_0x107382!=='screenArr'){getAllProfiles=_0xa2793a,log(_0x5920a1(0x181),'[worker1data.task]:data.task\x20'+JSON[_0x5920a1(0x208)](_0x17e4f6['task']),null,'c'),log(_0x5920a1(0x181),_0x5920a1(0x179)+JSON[_0x5920a1(0x208)](getAllProfiles),null,'c'),GenDataProfile=_0x49de3d,timgame=_0x3b4003,log(_0x5920a1(0x181),'['+_0x107382[_0x5920a1(0x1bb)]+_0x5920a1(0x16c),null,'w');const _0xebb1d=await xuLyTask(_0x107382);return log(_0x5920a1(0x181),''+JSON[_0x5920a1(0x208)](_0xebb1d),null,'w'),log('worker1','DONE',null,'w',_0x5920a1(0x194)),_0xebb1d?{'success':!![],'result':_0xebb1d}:{'success':![],'result':_0xebb1d};}else return log(_0x5920a1(0x181),_0x5920a1(0x1ec)+_0x107382,null,'w'),{'success':![],'error':'worker1'};}}catch(_0x2c3138){return log('worker1','Lỗi\x20'+_0x2c3138,null,![]),{'success':![],'error':_0x5920a1(0x181)};}};expose({'worker1':worker1});async function xuLyTask(_0x936573){const _0x3e87d4=a0_0x52698d;try{log(_0x3e87d4(0x181),'['+_0x936573[_0x3e87d4(0x1bb)]+_0x3e87d4(0x1a0),null,'i','-');const _0x1f2348=await genlogin[_0x3e87d4(0x1dd)]('worker1'),_0x1031b6=_0x1f2348[_0x3e87d4(0x224)];if(_0x1031b6<_0x936573['nextrunstamp'])return log(_0x3e87d4(0x181),'['+_0x936573[_0x3e87d4(0x1bb)]+_0x3e87d4(0x1c3)+JSON[_0x3e87d4(0x208)](_0x936573['name'])+_0x3e87d4(0x1c0),null,'i'),log(_0x3e87d4(0x181),'['+_0x936573['name']+_0x3e87d4(0x165)+JSON[_0x3e87d4(0x208)](_0x1f2348)+_0x3e87d4(0x1c5)+JSON[_0x3e87d4(0x208)](_0x936573[_0x3e87d4(0x1f6)]),null,'w'),log(_0x3e87d4(0x181),'['+_0x936573[_0x3e87d4(0x1bb)]+_0x3e87d4(0x165)+JSON[_0x3e87d4(0x208)](_0x1031b6)+'\x20|\x20nextrun:\x20'+JSON[_0x3e87d4(0x208)](taskNextRunDateTime),null,'w'),log(_0x3e87d4(0x181),'['+_0x936573[_0x3e87d4(0x1bb)]+_0x3e87d4(0x1ad),null,'i'),await delay(0x1388),null;let _0x5d4661=await http['getTask'](_0x3e87d4(0x181),_0x936573[_0x3e87d4(0x1bb)]);if(_0x5d4661[_0x3e87d4(0x19e)]['profiles'][_0x3e87d4(0x19b)]<=0x0){log(_0x3e87d4(0x181),'['+_0x936573[_0x3e87d4(0x1bb)]+'][xuLyTask]:\x20không\x20lấy\x20được\x20profile',null,![]);throw new Error(_0x3e87d4(0x212));}firstRun&&(profileThreads=parseInt(_0x936573[_0x3e87d4(0x1e0)]),profileQueue=new a0_0x6d792f({'concurrency':profileThreads}),log(_0x3e87d4(0x181),'['+_0x936573[_0x3e87d4(0x1bb)]+'][xuLyTask]profileQueue:\x20concurrency:'+profileThreads,null,'w'),firstRun=![],delayOpenProfile=parseInt(_0x936573[_0x3e87d4(0x1ff)])*0x3e8,profileTimeout=parseInt(_0x936573[_0x3e87d4(0x1c6)])*0x3e8,botTimeout=parseInt(_0x936573['botTimeout'])*0x3e8,version=await getPackageVersion());const _0x26679a=await xuLyProfiles(_0x5d4661['value'][_0x3e87d4(0x211)],_0x936573['name']);if(!_0x26679a){log('worker1','['+_0x936573[_0x3e87d4(0x1bb)]+_0x3e87d4(0x197)+json(_0x26679a),null,![]);throw new Error(_0x3e87d4(0x212));}return log(_0x3e87d4(0x181),'['+_0x936573[_0x3e87d4(0x1bb)]+_0x3e87d4(0x1b4)+_0x936573[_0x3e87d4(0x1bb)]+_0x3e87d4(0x192)),await delay(0x7d0),log(_0x3e87d4(0x181),'['+_0x936573['name']+'][xuLyTask]:\x20Hoàn\x20thành\x20xử\x20lý\x20task:\x20'+JSON[_0x3e87d4(0x208)](_0x936573['name'])),!![];}catch(_0x15fa7c){return log(_0x3e87d4(0x181),'['+_0x936573['name']+'][xuLyTask]:\x20Lỗi\x20while:\x20'+_0x15fa7c,null,![]),null;}}async function xuLyProfiles(_0x217b65,_0x15ad0e){const _0x187674=a0_0x52698d;try{const _0x5bd4ae=[];for(const [_0x1b5adb,_0x348749]of _0x217b65['entries']()){const _0x2c126b=await GenDataProfile[_0x187674(0x215)](_0x37b9d4=>_0x37b9d4[_0x187674(0x1a3)]===_0x348749);if(_0x1b5adb!==-0x1)log(_0x187674(0x181),'['+_0x15ad0e+_0x187674(0x1f3)+_0x2c126b);else{log(_0x187674(0x181),'['+_0x15ad0e+'][xuLyProfiles]Không\x20tìm\x20thấy\x20indexGenP');throw new Error('Không\x20tìm\x20thấy\x20indexGenP');}log(_0x187674(0x181),'['+_0x15ad0e+'][xuLyProfiles]:\x20Thêm\x20profile\x20'+_0x348749+_0x187674(0x18a)+profileThreads,null,'i'),_0x5bd4ae[_0x187674(0x1bd)](profileQueue[_0x187674(0x17d)](async()=>{const _0x18f5a6=_0x187674;try{delayOpenProfile>0x0?(log(_0x18f5a6(0x181),'['+_0x15ad0e+_0x18f5a6(0x183)+_0x348749+'\x20sau\x20'+delayOpenProfile+'ms',null,'w','-'),await delay(delayOpenProfile)):log(_0x18f5a6(0x181),'['+_0x15ad0e+_0x18f5a6(0x183)+_0x348749,null,'w','-'),await xuLyTungProfile(_0x348749,GenDataProfile[_0x2c126b]);}catch(_0x5c3268){log('worker1','['+_0x15ad0e+_0x18f5a6(0x173)+_0x348749+':\x20'+_0x5c3268[_0x18f5a6(0x202)],null,![]);throw _0x5c3268;}})),log('worker1','['+_0x15ad0e+_0x187674(0x190)+_0x348749+'\x20vào\x20hàng\x20đợi.');}const _0x3700d7=await Promise[_0x187674(0x1a6)](_0x5bd4ae),_0x53dd73=_0x3700d7[_0x187674(0x225)](_0x5cb4fd=>_0x5cb4fd['status']==='rejected');return _0x53dd73[_0x187674(0x19b)]>0x0?log(_0x187674(0x181),'['+_0x15ad0e+_0x187674(0x1fd)+JSON[_0x187674(0x208)](_0x53dd73),null,![]):log(_0x187674(0x181),'['+_0x15ad0e+_0x187674(0x19a)+json(_0x3700d7)),!![];}catch(_0x5d6ecb){return log(_0x187674(0x181),'['+_0x15ad0e+_0x187674(0x175)+_0x5d6ecb,null,![]),null;}}async function xuLyTungProfile(_0x297d34,_0x528f26){const _0x2c785d=a0_0x52698d;let _0x2d517d,_0x5a7f2f;const _0x2c5018=_0x297d34;let _0x5ca074;try{await delay(delayOpenProfile),log(_0x297d34,_0x2c785d(0x209),null,'i'),_0x2d517d=await genlogin[_0x2c785d(0x1dd)](_0x297d34),await http['addData'](_0x2c785d(0x181),_0x297d34,'START\x20SCRIPT',_0x2d517d[_0x2c785d(0x224)],'','Version:'+version,_0x2c785d(0x21a));teleId&&await http[_0x2c785d(0x1a1)](_0x297d34,teleId,'['+_0x297d34+_0x2c785d(0x1c4));log(_0x297d34,_0x2c785d(0x17a)+_0x297d34,null,'w'),_0x5ca074=await procScreenArr(_0x2c785d(0x1ba),null,_0x297d34);if(_0x5ca074['x']===undefined||_0x5ca074['y']===undefined){log(_0x297d34,_0x2c785d(0x227),null,![]);throw new Error(_0x2c785d(0x19f));}const _0x25aae6=await xuLyBrowser(_0x297d34,_0x528f26,_0x5ca074);await procScreenArr(_0x2c785d(0x206),_0x5ca074,_0x297d34);const _0x1a6d11=await genlogin[_0x2c785d(0x18e)](_0x2d517d['timestamp']);return await http[_0x2c785d(0x1d5)](_0x2c785d(0x181),_0x297d34,'STOP\x20SCRIPT','','',_0x1a6d11,_0x2c785d(0x216)),teleId&&await http['tele'](_0x297d34,teleId,'['+_0x297d34+_0x2c785d(0x16b)),_0x25aae6;}catch(_0x5b3172){log(_0x297d34,_0x2c785d(0x162)+_0x5b3172,null,![]);if(_0x5a7f2f)await Thread[_0x2c785d(0x1e4)](_0x5a7f2f);await procScreenArr(_0x2c785d(0x206),_0x5ca074,_0x297d34);const _0x35d8c9=await genlogin[_0x2c785d(0x18e)](_0x2d517d?.[_0x2c785d(0x20e)]||Date[_0x2c785d(0x1e6)]());await http[_0x2c785d(0x1d5)](_0x2c785d(0x181),_0x297d34,_0x2c785d(0x1b5),'','',_0x35d8c9,_0x2c785d(0x216));teleId&&await http[_0x2c785d(0x1a1)](_0x297d34,teleId,'['+_0x297d34+'][ERR]:\x20STOP\x20SCRIPT');throw _0x5b3172;}}async function xuLyBrowser(_0x947cf2,_0x5f2afc,_0x3b79c7){const _0x17fb32=a0_0x52698d;let _0x315a35;try{const _0x44a0e3=_0x947cf2;if(!browserInfo[_0x947cf2])browserInfo[_0x947cf2]={};browserInfo[_0x947cf2][_0x17fb32(0x187)]=0x0,log(_0x947cf2,_0x17fb32(0x1e7)+json(browserInfo),null,'w','w');if(browserInfo[_0x947cf2][_0x17fb32(0x187)]==0x0){_0x315a35=await OpenBrowser(_0x947cf2,_0x5f2afc,_0x3b79c7);if(!_0x315a35){log(_0x947cf2,_0x17fb32(0x17c)+_0x947cf2,null,![]);throw new Error(_0x17fb32(0x17c)+_0x947cf2);}browserInfo[_0x947cf2][_0x17fb32(0x187)]=0x1;}if(!_0x315a35[_0x17fb32(0x1df)])throw new Error(_0x17fb32(0x172)+_0x947cf2);let _0x2a971f=0x0;const _0x1bf6f6=await http[_0x17fb32(0x1cd)](_0x17fb32(0x181),_0x44a0e3);if(!_0x1bf6f6){log(_0x947cf2,'[xuLyBrowser]:\x20Bot\x20không\x20tìm\x20thấy',null,![]);throw new Error('No\x20bot\x20found');}if(_0x1bf6f6[_0x17fb32(0x19b)]<=0x0){log(_0x947cf2,_0x17fb32(0x1b7),null,![]);throw new Error(_0x17fb32(0x19c));}for(const _0x26fe01 of _0x1bf6f6){if(_0x26fe01){if(_0x26fe01['type']!=_0x17fb32(0x198))continue;if(_0x26fe01['value']===_0x17fb32(0x1f7)){log(_0x947cf2,':\x20XONG\x201\x20LƯỢT',null,'i');break;}if(!_0x26fe01[_0x17fb32(0x193)]){log(_0x947cf2,_0x17fb32(0x18c)+json(_0x26fe01)+'\x20ko\x20có\x20aks',null,![]);continue;}if(_0x26fe01['onOff']==='0'){log(_0x947cf2,_0x17fb32(0x18c)+json(_0x26fe01['name'])+_0x17fb32(0x1cc),null,![]);continue;}const _0x15ff2e=await genlogin[_0x17fb32(0x1dd)](_0x947cf2);if(_0x26fe01[_0x17fb32(0x213)]>_0x15ff2e[_0x17fb32(0x20e)]){log(_0x947cf2,':\x20Bot\x20'+json(_0x26fe01['name'])+_0x17fb32(0x1d7),null,'w');continue;}switch(_0x26fe01[_0x17fb32(0x193)]){case'A':log(_0x947cf2,':\x20'+json(_0x26fe01[_0x17fb32(0x1bb)])+_0x17fb32(0x1d8)),await xuLyGame(_0x26fe01,'A',_0x947cf2,_0x5f2afc,_0x3b79c7,_0x315a35);break;case'K':log(_0x947cf2,':\x20'+json(_0x26fe01[_0x17fb32(0x1bb)])+'\x20Tele\x20K\x20OK'),await xuLyGame(_0x26fe01,'K',_0x947cf2,_0x5f2afc,_0x3b79c7,_0x315a35);break;case'W':log(_0x947cf2,':\x20'+json(_0x26fe01[_0x17fb32(0x1bb)])+_0x17fb32(0x1b9)),await xuLyGame(_0x26fe01,'W',_0x947cf2,_0x5f2afc,_0x3b79c7,_0x315a35);break;default:log(_0x947cf2,_0x17fb32(0x203)+json(_0x26fe01[_0x17fb32(0x193)]),null,![]);break;}log(_0x947cf2,_0x17fb32(0x1f5));}}return await closeBrowser(_0x947cf2,_0x315a35),!![];}catch(_0x272dc8){return log(_0x947cf2,_0x17fb32(0x1c1)+_0x272dc8,null,![]),await closeBrowser(_0x947cf2,_0x315a35),null;}}function a0_0x3f26(_0x13bb79,_0x190b31){const _0x5f72c9=a0_0x5f72();return a0_0x3f26=function(_0x3f268a,_0xe82631){_0x3f268a=_0x3f268a-0x161;let _0x261394=_0x5f72c9[_0x3f268a];return _0x261394;},a0_0x3f26(_0x13bb79,_0x190b31);}async function xuLyGame(_0x19e8db,_0x1565a6,_0x259ec1,_0x2c657e,_0x48c416,_0xa04a13){const _0x2be4bb=a0_0x52698d;try{const _0x6b3c36=_0x259ec1;if(_0x19e8db['type']===_0x2be4bb(0x20a)){log(_0x259ec1,_0x2be4bb(0x210)+_0x19e8db['name']+'\x20Api\x20mode',null,'i');const _0x4c8880=await genlogin[_0x2be4bb(0x1dd)](_0x259ec1),_0x159e55=await http[_0x2be4bb(0x1d5)](_0x259ec1,_0x6b3c36,_0x19e8db['name'],_0x4c8880[_0x2be4bb(0x224)],'',_0x2be4bb(0x1ea),_0x2be4bb(0x1af)),_0x42893f=_0x159e55['ID'],_0x522ada={'bot':_0x19e8db,'profileNameId':_0x259ec1,'genlogin':genlogin,'http':http,'dataId':_0x42893f},_0x8a0a3e=await loadGameApi(_0x19e8db[_0x2be4bb(0x1bb)],_0x522ada);if(!_0x8a0a3e[_0x2be4bb(0x170)])return log(_0x259ec1,_0x2be4bb(0x1c2)+_0x19e8db[_0x2be4bb(0x1bb)]+'\x20lỗi',null,![]),await http[_0x2be4bb(0x1d0)](_0x259ec1,_0x6b3c36,_0x42893f,_0x2be4bb(0x1de),_0x2be4bb(0x1de)),null;if(_0x8a0a3e['status']==_0x2be4bb(0x21e))return log(_0x259ec1,'[xuLyGame]:\x20Thực\x20thi\x20'+_0x19e8db[_0x2be4bb(0x1bb)]+_0x2be4bb(0x17f),null,'i'),_0x2be4bb(0x21e);if(_0x8a0a3e['status'])return log(_0x259ec1,'[xuLyGame]:\x20Thực\x20thi\x20'+_0x19e8db[_0x2be4bb(0x1bb)]+_0x2be4bb(0x1d4)),await http[_0x2be4bb(0x18d)](_0x259ec1,_0x6b3c36,_0x19e8db['id'],_0x8a0a3e[_0x2be4bb(0x1d2)],_0x8a0a3e[_0x2be4bb(0x213)]),await http[_0x2be4bb(0x1d0)](_0x259ec1,_0x6b3c36,_0x42893f,'Ok',_0x2be4bb(0x226),_0x8a0a3e['coin'],_0x8a0a3e[_0x2be4bb(0x1d2)]),!![];}else{log(_0x259ec1,_0x2be4bb(0x210)+_0x19e8db['name']+_0x2be4bb(0x1c7),null,'i');const _0x3e594b=await http[_0x2be4bb(0x1b1)](_0x259ec1,_0x1565a6);if(_0x3e594b){log(_0x259ec1,_0x2be4bb(0x1f9));let _0x14acb4=0x0;while(_0x14acb4<0x2){const _0x24ae3d=await checkTeleWebOpen(_0x19e8db,_0x3e594b,_0x259ec1,_0x48c416,_0xa04a13);if(_0x24ae3d===_0x2be4bb(0x21e))_0x14acb4++,log(_0x259ec1,_0x2be4bb(0x188)+_0x14acb4+'/2',null,'i'),await delay(0x3e8);else return _0x24ae3d?(log(_0x259ec1,_0x2be4bb(0x16e)),!![]):(log(_0x259ec1,_0x2be4bb(0x1be),null,![]),null);}return log(_0x259ec1,'[xuLyGame]:Max\x20loop\x20rồi\x20bro',null,![]),null;}}}catch(_0x54a015){return log(_0x259ec1,_0x2be4bb(0x1a9)+_0x54a015,null,![]),null;}}function a0_0x5f72(){const _0x4e2ef3=['now','[xuLyBrowser]:browserInfo:\x20','[eTimeout]worker1:\x20timeout','[OpenBrowser]\x20Lỗi\x20khi\x20đóng\x20tab\x20mới','StartApi','loop\x20new\x20game','Lỗi\x20gì\x20đó\x20task\x20','cwd','\x20Action:','\x20set\x20open\x20ok\x20pos:','3296041NesnUH','81WzciDi','[loadGame]:\x20Chạy\x20','][xuLyProfiles]index:\x20','function','[xuLyBrowser]:\x20Bot\x20OK','nextrun','end','dirname','[xuLyGame]:\x20getAks\x20OK','clrTimeout','HostName','wait','][xuLyProfiles]:\x20Một\x20số\x20profiles\x20gặp\x20lỗi:\x20','[worker1.procScreenArr]vào\x20close','delayOpenProfile','739518VnYpQZ','activateTab','message',':\x20Sai\x20aks\x20','default','.js','close','InputSearch','stringify','[xuLyTungProfile]:\x20Bắt\x20đầu\x20xử\x20lý\x20profile','api','8913487dZHARQ','promises','[OpenBrowser]\x20Đóng\x20tab\x20mới\x20thành\x20công','timestamp','taskIndex','[xuLyGame]:\x20','profiles','No\x20profile\x20found','nextRunStamp','join','findIndex','Stop','[checkTeleWebOpen]:\x20Không\x20tìm\x20thấy\x20game\x20','APIKEY','[checkTeleWebOpen]:\x20vào\x20loadGame','Start','[checkTeleWebOpen]:\x20Thực\x20thi\x20','env','browserWidthHeight','loop','closeTab','href','[checkTeleWebOpen]:\x20','[checkTeleWebOpen]:\x20Không\x20thực\x20thi\x20script\x20','autoSetBrowserPosition','date','filter','Done','[xuLyTungProfile]:\x20Không\x20tìm\x20thấy\x20vị\x20trí\x20màn\x20hình\x20khả\x20dụng','SERVER_HOST','[xuLyTungProfile]:\x20Lỗi:\x20','1106883UYPMLW','232072qJCAfs','][xuLyTask]:\x20currentDateTime:\x20','readFile','[worker1.procScreenArr]\x20index:','4cKGNCC','package.json','[worker1.procScreenArr]\x20posVal:','][OK]:\x20STOP\x20SCRIPT',']:\x20Script\x20Mode','setTitle','[xuLyGame]:\x20checkTeleWebOpen\x20OK','parse','status','load','[xuLyBrowser]:\x20browser\x20disconnected\x20','][xuLyProfiles]:\x20Lỗi\x20khi\x20xử\x20lý\x20profile\x20','[xoaTimeout]worker1:\x20Xóa\x20timeout:','][xuLyProfiles]:\x20Lỗi\x20:\x20','split','\x20thành\x20công','[checkTeleWebOpen]:\x20Thực\x20thi\x20script\x20','getAllProfiles\x20','[xuLyTungProfile]0:\x20Kiểm\x20tra\x20màn\x20hình\x20','version','[xuLyBrowser]:\x20Không\x20mở\x20được\x20trình\x20duyệt\x20','add','width','\x20loop',',\x20pos:\x20','worker1','2384846ATvweN','][xuLyProfiles]:\x20Bắt\x20đầu\x20xử\x20lý\x20profile\x20','scripts','Timeout\x20while\x20acquiring\x20lock','timeout','fisrtOpenBrowser','[xuLyGame]:\x20Loop\x20lại\x20,\x20loop\x20lại\x20lần\x20','[checkTeleWebOpen]:\x20Lỗi\x20trong\x20quá\x20trình\x20mở\x20trang\x20:\x20','\x20vào\x20hàng\x20đợi\x20max:','[worker1.procScreenArr]lỗi\x20',':\x20Bot\x20','nextRunTime','tinhThoiGian','height','][xuLyProfiles]:\x20Đã\x20thêm\x20profile\x20','[closeBrowser]:\x20Không\x20có\x20trình\x20duyệt\x20để\x20đóng','\x20ok','aks','done','timGame','[OpenBrowser]:\x20Lỗi\x20khi\x20mở\x20browser:\x20','][xuLyTask]:\x20Không\x20lấy\x20được\x20dữ\x20liệu\x20profiles\x20','script','\x20action:\x20','][xuLyProfiles]:\x20Đã\x20xử\x20lý\x20tất\x20cả\x20profiles\x20thành\x20công\x20','length','No\x20bot\x20found','[worker1.procScreenArr]action:\x20','value','Không\x20tìm\x20thấy\x20giá\x20trị\x20status=0','][xuLyTask]:\x20vào\x20xuLyTask','tele','[xoaTimeout]worker1:\x20','pid','[OpenBrowser]:force\x20set\x20Position:\x20','\x20set\x20close\x20ok','allSettled','clrInterval','[loadGame]:\x20Lỗi\x20khi\x20load\x20và\x20thực\x20thi\x20script\x20','[xuLyGame]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20Game:\x20','coin','FistUrl','Lỗi\x20xử\x20lý\x20profile:\x20','][xuLyTask]:\x20Chờ\x205\x20giây\x20trước\x20khi\x20xử\x20lý\x20task\x20tiếp\x20theo...','[OpenBrowser]]Chỉ\x20có\x20','running','countOpenTabs','getAks','50cFjjQF','\x20không\x20phải\x20là\x20một\x20hàm\x20hợp\x20lệ','][xuLyTask]:\x20Tasks:\x20','STOP\x20SCRIPT','tele_id','[xuLyBrowser]:\x20không\x20lấy\x20được\x20bot','url','\x20Web\x20OK','open','name','Không\x20thể\x20đóng\x20màn\x20hình:\x20vị\x20trí\x20không\x20hợp\x20lệ\x20action:\x20','push','[xuLyGame]:\x20checkTeleWebOpen\x20có\x20gì\x20đó\x20sai\x20sai\x20rồi\x20bro','notify','\x20chưa\x20đến\x20thời\x20gian\x20chạy','[xuLyBrowser]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20browser:\x20','[xuLyGame]:\x20Thực\x20thi\x20','][xuLyTask]:\x20Task\x20',']:\x20START\x20SCRIPT','\x20|\x20nextrun:\x20','profileTimeout','\x20Script\x20mode','[xoaTimeout]worker1:\x20Xóa\x20Interval:','[eTimeout]worker1:\x20reset\x20timeout','6CEMPDe','store','\x20OFF','getBotAll','Vào','[loadGame]:scriptPath\x20','updateData','[OpenBrowser]:\x20GenLogin:\x20','nextRun','connect','\x20done','addData','scale','\x20Chưa\x20tới\x20giờ\x20chạy','\x20Tele\x20A\x20OK','openUrl','[getPackageVersion]Lỗi\x20khi\x20đọc\x20file\x20package.json:\x20','compareExchange','utf-8','nowTime','Fail','connected','profileThreads','3211145UkbRbg','[checkTeleWebOpen]:\x20dataId:\x20','[loadGame]:\x20Script\x20','terminate','[worker1.procScreenArr]vào\x20open'];a0_0x5f72=function(){return _0x4e2ef3;};return a0_0x5f72();}async function OpenBrowser(_0xe9cc16,_0x249887,_0x4a54f2){const _0x12137d=a0_0x52698d;try{const _0x52799e=_0xe9cc16;log(_0xe9cc16,'[OpenBrowser]:\x20Processing\x20profile:\x20'+JSON['stringify'](_0xe9cc16),null,'i');if(getAllProfiles[_0x12137d(0x223)]==='n'){const _0x53fc26=getAllProfiles['customBrowserPosition'][_0x12137d(0x176)]('x');parseInt(_0x53fc26[0x0])>=0x0&&parseInt(_0x53fc26[0x1])>=0x0?(_0x4a54f2['x']=parseInt(_0x53fc26[0x0]),_0x4a54f2['y']=parseInt(_0x53fc26[0x1])):(_0x4a54f2['x']=0x0,_0x4a54f2['y']=0x0),log(_0xe9cc16,_0x12137d(0x1a4)+_0x4a54f2['x']+'x'+_0x4a54f2['y'],null,'w');}const _0x8c37e4=await genlogin[_0x12137d(0x1d3)](_0xe9cc16,getAllProfiles,_0x249887,_0x4a54f2);log(_0xe9cc16,_0x12137d(0x1d1)+JSON['stringify'](_0x8c37e4),null,'i'),await delay(0x1388);if(_0x8c37e4){let _0x42f531=0x0;const _0x517493=0xa;while(_0x42f531<_0x517493){_0x42f531++;const _0x597675=await genlogin[_0x12137d(0x1b0)](_0xe9cc16,_0x8c37e4);if(_0x597675<=0x1)return log(_0xe9cc16,_0x12137d(0x1ae)+_0x597675+'\x20tab\x20đang\x20mở',null,'i'),_0x8c37e4;const _0x57b293=await genlogin[_0x12137d(0x21f)](_0xe9cc16,_0x8c37e4,_0x597675-0x1,0xbb8);if(!_0x57b293){log(_0xe9cc16,_0x12137d(0x1e9),null,![]);continue;}log(_0xe9cc16,_0x12137d(0x20d)),await delay(0xbb8);continue;}}return log(_0xe9cc16,_0x12137d(0x196)+JSON[_0x12137d(0x208)](_0xe9cc16)),null;}catch(_0x49c3fd){throw new Error(_0x12137d(0x1ac)+_0x49c3fd['message']);}}async function checkTeleWebOpen(_0x4a883d,_0x4c252c,_0x428d2a,_0x12c719,_0x442428){const _0x521b31=a0_0x52698d;let _0x16f25a;try{let _0x12e192=await genlogin[_0x521b31(0x201)](_0x428d2a,_0x442428,0x0,getAllProfiles[_0x521b31(0x21d)],_0x12c719['scale']);const _0x41ee15=await genlogin['elementExistsByXPath'](_0x428d2a,_0x12e192,_0x4c252c[_0x521b31(0x207)],0x7d0);!_0x41ee15&&(await genlogin['openUrl'](_0x428d2a,_0x12e192,'https://www.google.com',0xea60),await delay(0x7d0),await genlogin[_0x521b31(0x1d9)](_0x428d2a,_0x12e192,_0x4c252c[_0x521b31(0x1ab)],0xea60),await genlogin[_0x521b31(0x16d)](_0x428d2a,_0x12e192,_0x428d2a),await delay(0x1388));log(_0x428d2a,_0x521b31(0x219),null,'i');const _0x7387dc=await genlogin[_0x521b31(0x1dd)](_0x428d2a),_0x15c8a4=await http[_0x521b31(0x1d5)](_0x428d2a,_0x428d2a,_0x4a883d['name'],_0x7387dc[_0x521b31(0x224)],'','Start',_0x521b31(0x1af));_0x16f25a=_0x15c8a4['ID'];const _0x42cf73={'firstPage':_0x12e192,'bot':_0x4a883d,'profileNameId':_0x428d2a,'getAks':_0x4c252c,'genlogin':genlogin,'http':http,'browser':_0x442428,'dataId':_0x15c8a4['ID'],'taskIndex':taskInfo[_0x521b31(0x20f)],'screenDataBuffer2':screenDataBuffer1,'tasksDataBuffer2':tasksDataBuffer1};let _0x42e20c=null;log(_0x428d2a,_0x521b31(0x1e2)+json(_0x16f25a),null,'i');if(timgame){await http[_0x521b31(0x1d0)](_0x428d2a,_0x428d2a,_0x16f25a,'Tìm');const _0x59b47c=await loadGame(_0x521b31(0x195),_0x42cf73,_0x42e20c,_0x16f25a,_0x428d2a);if(_0x59b47c['status']==_0x521b31(0x21e))return log(_0x428d2a,_0x521b31(0x21b)+_0x4a883d[_0x521b31(0x1bb)]+'\x20loop',null,'i'),await http[_0x521b31(0x1d0)](_0x428d2a,_0x428d2a,_0x16f25a,_0x521b31(0x1eb)),_0x521b31(0x21e);else{if(!_0x59b47c)return log(_0x428d2a,_0x521b31(0x217)+_0x4a883d['name'],null,![]),await http[_0x521b31(0x1d0)](_0x428d2a,_0x428d2a,_0x16f25a,_0x521b31(0x1de),_0x521b31(0x1de)),null;}_0x59b47c[_0x521b31(0x1fb)]&&(_0x42e20c=_0x59b47c[_0x521b31(0x1fb)]);}await http[_0x521b31(0x1d0)](_0x428d2a,_0x428d2a,_0x16f25a,_0x521b31(0x1ce));const _0x10d177=await loadGame(_0x4a883d[_0x521b31(0x1bb)],_0x42cf73,_0x42e20c,_0x16f25a,_0x428d2a);if(!_0x10d177['status'])return log(_0x428d2a,_0x521b31(0x222)+_0x4a883d[_0x521b31(0x1bb)],null,![]),log(_0x428d2a,_0x521b31(0x221)+json(_0x10d177),null,![]),await http['updateData'](_0x428d2a,_0x428d2a,_0x16f25a,'Fail',_0x521b31(0x1de)),null;else{if(_0x10d177['status']==_0x521b31(0x21e))return log(_0x428d2a,_0x521b31(0x21b)+_0x4a883d['name']+_0x521b31(0x17f),null,'i'),await http[_0x521b31(0x1d0)](_0x428d2a,_0x428d2a,_0x16f25a,_0x521b31(0x21e)),_0x521b31(0x21e);}return await http[_0x521b31(0x18d)](_0x428d2a,_0x428d2a,_0x4a883d['id'],_0x10d177[_0x521b31(0x1d2)],_0x10d177[_0x521b31(0x213)]),await http['updateData'](_0x428d2a,_0x428d2a,_0x16f25a,'Ok',_0x521b31(0x226),_0x10d177[_0x521b31(0x1aa)],_0x10d177[_0x521b31(0x1d2)]),log(_0x428d2a,_0x521b31(0x178)+_0x4a883d[_0x521b31(0x1bb)]+_0x521b31(0x177)),await delay(0x7d0),!![];}catch(_0xf09ed){return log(_0x428d2a,_0x521b31(0x189)+_0xf09ed,null,![]),await http[_0x521b31(0x1d0)](_0x428d2a,_0x428d2a,_0x16f25a,_0x521b31(0x1de),_0x521b31(0x1de)),null;}}async function loadGame(_0x39e321,_0x30058f,_0x1aa344,_0x348ba5,_0x27d2ac){const _0x50849a=a0_0x52698d;try{const _0x14df2a=pathToFileURL(a0_0x39d87a[_0x50849a(0x214)](__dirname,_0x50849a(0x184),_0x39e321+_0x50849a(0x205)))[_0x50849a(0x220)];log(_0x27d2ac,_0x50849a(0x1cf)+_0x14df2a);const _0x58902a=await import(_0x14df2a);if(typeof _0x58902a[_0x50849a(0x204)]===_0x50849a(0x1f4)){const _0xb16e83=await _0x58902a[_0x50849a(0x204)](_0x30058f,_0x1aa344);await delay(0x3e8);if(!_0xb16e83[_0x50849a(0x170)])return log(_0x27d2ac,_0x50849a(0x1e3)+_0x39e321+'\x20không\x20trả\x20về\x20status',null,![]),null;else return _0xb16e83[_0x50849a(0x170)]===_0x50849a(0x21e)?(log(_0x27d2ac,_0x50849a(0x1f2)+_0x39e321+'\x20loop',null,'i'),_0xb16e83):(log(_0x27d2ac,_0x50849a(0x1f2)+_0x39e321+'\x20'+_0xb16e83[_0x50849a(0x170)],null,'i'),_0xb16e83);}else return await delay(0x3e8),log(_0x27d2ac,_0x50849a(0x1e3)+_0x39e321+_0x50849a(0x1b3),null,![]),null;}catch(_0x5665dc){return log(_0x27d2ac,_0x50849a(0x1a8)+_0x39e321+':\x20'+_0x5665dc,null,![]),null;}}async function closeBrowser(_0x932e58='',_0x155543){const _0x27b881=a0_0x52698d;try{if(_0x155543){if(_0x155543[_0x27b881(0x1df)])return await _0x155543[_0x27b881(0x206)](),log(_0x932e58,'[closeBrowser]:\x20Đóng\x20trình\x20duyệt\x20'+_0x932e58+_0x27b881(0x177),null,'w'),!![];}else log(_0x932e58,_0x27b881(0x191),null,'i');return null;}catch(_0x4cd5a4){return log(_0x932e58,'[closeBrowser]:\x20Lỗi\x20khi\x20đóng\x20trình\x20duyệt\x20'+_0x932e58+':\x20'+_0x4cd5a4,null,![]),null;}}async function procScreenArr(_0xfdf05f,_0x5aabd4,_0x21daca){const _0x17e4c2=a0_0x52698d;try{await acquireLock(screenData);let _0x432875={};log(_0x21daca,_0x17e4c2(0x19d)+_0xfdf05f+',\x20pos:\x20'+json(_0x5aabd4),null,'w','-');if(_0xfdf05f==='open'){log(_0x21daca,_0x17e4c2(0x1e5),null,'w'),_0x432875[_0x17e4c2(0x1d6)]=Atomics[_0x17e4c2(0x171)](screenData,0x1)/0xf4240,_0x432875[_0x17e4c2(0x17e)]=Atomics[_0x17e4c2(0x171)](screenData,0x2),_0x432875[_0x17e4c2(0x18f)]=Atomics[_0x17e4c2(0x171)](screenData,0x3);for(let _0x35baeb=0xa;_0x35baeb<screenData['length']-0x1;_0x35baeb=_0x35baeb+0x3){const _0x9d12f6=Atomics['load'](screenData,_0x35baeb);if(_0x9d12f6===0x2)return Atomics[_0x17e4c2(0x1cb)](screenData,_0x35baeb,0x1),_0x432875[_0x17e4c2(0x204)]=0x0,_0x432875['x']=Atomics['load'](screenData,_0x35baeb+0x1),_0x432875['y']=Atomics[_0x17e4c2(0x171)](screenData,_0x35baeb+0x2),log(_0x21daca,_0x17e4c2(0x167)+_0x35baeb+_0x17e4c2(0x1ef)+json(_0x432875),null,'w'),await releaseLock(screenData),_0x432875;if(_0x9d12f6===0x0)return Atomics[_0x17e4c2(0x1cb)](screenData,_0x35baeb,0x1),_0x432875[_0x17e4c2(0x204)]=0x1,_0x432875['x']=0x0,_0x432875['y']=0x0,log(_0x21daca,'[worker1.procScreenArr]\x20index:'+_0x35baeb+'\x20set\x20open\x20default\x20pos:'+json(_0x432875),null,'w'),await releaseLock(screenData),_0x432875;}await releaseLock(screenData);throw new Error('Không\x20tìm\x20thấy\x20vị\x20trí\x20màn\x20hình\x20khả\x20dụng');}else{if(_0xfdf05f==='close'&&_0x5aabd4['x']>=0x0&&_0x5aabd4['y']>=0x0){log(_0x21daca,_0x17e4c2(0x1fe),null,'w');if(_0x5aabd4['default']===0x1)return log(_0x21daca,'[worker1.procScreenArr]vị\x20trí\x20default\x20không\x20cần\x20close',null,'w'),await releaseLock(screenData),!![];for(let _0x41cb09=0xa;_0x41cb09<screenData[_0x17e4c2(0x19b)]-0x1;_0x41cb09+=0x3){const _0x1628c8=Atomics[_0x17e4c2(0x171)](screenData,_0x41cb09);if(_0x1628c8===0x1){const _0x2b5f69=Atomics[_0x17e4c2(0x171)](screenData,_0x41cb09+0x1),_0x38fc20=Atomics[_0x17e4c2(0x171)](screenData,_0x41cb09+0x2);if(_0x2b5f69===_0x5aabd4['x']&&_0x38fc20===_0x5aabd4['y'])return Atomics[_0x17e4c2(0x1cb)](screenData,_0x41cb09,0x2),log(_0x21daca,_0x17e4c2(0x167)+_0x41cb09+_0x17e4c2(0x1a5),null,'w'),Atomics[_0x17e4c2(0x1bf)](screenData,_0x41cb09),await releaseLock(screenData),!![];}}await releaseLock(screenData);throw new Error(_0x17e4c2(0x1bc)+_0xfdf05f+_0x17e4c2(0x180)+json(_0x5aabd4));}else return log(_0x21daca,_0x17e4c2(0x16a)+json(_0x5aabd4)+_0x17e4c2(0x1ee)+_0xfdf05f,null,'w'),await releaseLock(screenData),!![];}}catch(_0xd0869b){return log(_0x21daca,_0x17e4c2(0x18b)+_0xd0869b+_0x17e4c2(0x199)+_0xfdf05f+_0x17e4c2(0x180)+json(_0x5aabd4),null,![]),await releaseLock(screenData),![];}}async function acquireLock(_0x5a6ba3,_0x4267db=0x7530){const _0x43002f=a0_0x52698d,_0x36b0c5=Date[_0x43002f(0x1e6)]();while(Atomics[_0x43002f(0x1db)](_0x5a6ba3,0x8,0x0,0x1)!==0x0){if(Date['now']()-_0x36b0c5>_0x4267db)throw new Error(_0x43002f(0x185));Atomics[_0x43002f(0x1fc)](_0x5a6ba3,0x8,0x1,_0x4267db);}}async function releaseLock(_0x107747){const _0x8fb7af=a0_0x52698d;Atomics[_0x8fb7af(0x1cb)](_0x107747,0x8,0x0),Atomics[_0x8fb7af(0x1bf)](_0x107747,0x8);}async function getPackageVersion(){const _0x1e6db3=a0_0x52698d;try{const _0x233582=a0_0x39d87a[_0x1e6db3(0x214)](process[_0x1e6db3(0x1ed)](),_0x1e6db3(0x169)),_0x33398a=await a0_0x1031a6[_0x1e6db3(0x20c)][_0x1e6db3(0x166)](_0x233582,_0x1e6db3(0x1dc)),_0x233865=JSON[_0x1e6db3(0x16f)](_0x33398a),_0x478680=_0x233865[_0x1e6db3(0x17b)];return log(_0x1e6db3(0x181),'[getPackageVersion]Version:\x20'+_0x478680,null,'w','-'),_0x478680;}catch(_0x2c9657){return log(_0x1e6db3(0x181),_0x1e6db3(0x1da)+_0x2c9657,null,![]),null;}}async function xoaTimeout(_0x58b6d8){const _0x4a6f6f=a0_0x52698d;try{clearTimeout(_0x58b6d8),log(_0x4a6f6f(0x174)+_0x58b6d8,null,'i',_0x4a6f6f(0x1fa));}catch(_0x4371b5){log(_0x4a6f6f(0x1a2)+_0x4371b5,null,![]);}}async function xoaInterval(_0x1ec80f){const _0xbc2af2=a0_0x52698d;try{clearInterval(_0x1ec80f),log(_0xbc2af2(0x1c8)+_0x1ec80f,null,'i',_0xbc2af2(0x1a7));}catch(_0x1def6e){log(_0xbc2af2(0x1a2)+_0x1def6e,null,![]);}}async function delay(_0x52bf37){return new Promise(async _0x43030c=>{setTimeout(_0x43030c,_0x52bf37);});}async function eTimeout(){const _0x34c1ca=a0_0x52698d;return log(_0x34c1ca(0x1e8),null,'w'),Atomics[_0x34c1ca(0x1cb)](tasksData,taskInfo[_0x34c1ca(0x20f)],0x1),!![];}async function cTimeout(){const _0x502f65=a0_0x52698d;if(Atomics[_0x502f65(0x171)](tasksData,taskInfo['taskIndex'])===0x1)return!![];return null;}async function rstTimeout(){const _0x10330c=a0_0x52698d;return log(_0x10330c(0x1c9),null,'w'),Atomics[_0x10330c(0x1db)](tasksData,taskInfo[_0x10330c(0x20f)],0x1,0x2),!![];}