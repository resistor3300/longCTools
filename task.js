const a0_0x389a03=a0_0x32f4;(function(_0x635c6f,_0x29a0b5){const _0x32db99=a0_0x32f4,_0x5e6d45=_0x635c6f();while(!![]){try{const _0x519c3b=parseInt(_0x32db99(0x112))/0x1*(-parseInt(_0x32db99(0x8e))/0x2)+parseInt(_0x32db99(0xcc))/0x3+-parseInt(_0x32db99(0xe8))/0x4+parseInt(_0x32db99(0x99))/0x5*(parseInt(_0x32db99(0xb6))/0x6)+-parseInt(_0x32db99(0xd6))/0x7+-parseInt(_0x32db99(0x8d))/0x8*(-parseInt(_0x32db99(0x7a))/0x9)+-parseInt(_0x32db99(0xb2))/0xa;if(_0x519c3b===_0x29a0b5)break;else _0x5e6d45['push'](_0x5e6d45['shift']());}catch(_0x3c710a){_0x5e6d45['push'](_0x5e6d45['shift']());}}}(a0_0x2727,0xd8629));import'dotenv/config';import a0_0x6988e from'os';import a0_0x38985a from'fs';import a0_0x3bbadf from'path';import{fileURLToPath}from'url';import a0_0x14aafe from'./modules/Genlogin.js';import a0_0x89dca5 from'./modules/http.js';import{log,json}from'./modules/logger.js';import a0_0x3b4684 from'node-machine-id';import{spawn,Thread,Worker}from'threads';import{exec}from'child_process';import a0_0x3b709d from'p-queue';const MIN_FREE_SPACE_MB=0x1f4;let tasksDataBuffer,tasksData,screenData,screenDataBuffer;const __filename=fileURLToPath(import.meta['url']),__dirname=a0_0x3bbadf[a0_0x389a03(0xaf)](__filename),{machine_id,machineIdSync}=a0_0x3b4684,machineId=machineIdSync()[a0_0x389a03(0x8f)](0x0,0x8),appName=a0_0x389a03(0xc5)+'-'+machineId,nameFile=a0_0x389a03(0xfd)+'-'+machineId,genDataFile=a0_0x389a03(0x10d)+'-'+machineId,appSetings={'maxTaskThreads':{'type':a0_0x389a03(0xee),'value':0x3,'note':'Số\x20lượng\x20task\x20chạy\x20song\x20song'},'screens':{'type':a0_0x389a03(0xee),'value':0x1,'note':a0_0x389a03(0xfc)},'screenWidthHeight':{'type':a0_0x389a03(0xee),'value':a0_0x389a03(0xb3),'note':a0_0x389a03(0xd5)},'browserWidthHeight':{'type':a0_0x389a03(0xee),'value':'400x900','note':a0_0x389a03(0x105)},'autoSetBrowserPosition':{'type':a0_0x389a03(0xa3),'value':'y','note':a0_0x389a03(0xc3)},'customBrowserPosition':{'type':'input','value':a0_0x389a03(0xde),'note':a0_0x389a03(0xa7)},'genDataFolder':{'type':a0_0x389a03(0xee),'value':a0_0x3bbadf['join']('C:',a0_0x389a03(0x93),a0_0x6988e[a0_0x389a03(0xae)]()['username'],a0_0x389a03(0x7e)),'note':a0_0x389a03(0xcd)}};let genlogin,http,profileNameId,profileId,browser,getAllProfiles,GenDataProfile,screenArrWorker,timgame=!![],taskQueue,maxTask=0x1,taskStatus,firstRun=!![],appStatus=0x0,tele_id,version,prevTime,prevTimeCkDisk;async function main(){const _0x16ecdc=a0_0x389a03;try{log('main',_0x16ecdc(0xe4)+appName,null,'w','='),await delay(0x3e8);if(!process[_0x16ecdc(0xd7)]['APIKEY']){log('main',_0x16ecdc(0xfb),null,![]),log(_0x16ecdc(0xbf),'Lên\x20Web\x20lấy\x20APIKEY\x20nhen\x20Bro',null,'w'),log(_0x16ecdc(0xbf),_0x16ecdc(0xa6),null,'w'),log(_0x16ecdc(0xbf),_0x16ecdc(0xb0),null,'w'),log(_0x16ecdc(0xbf),_0x16ecdc(0xa2),null,'w','=');return;}genlogin=new a0_0x14aafe('',!![]),http=new a0_0x89dca5(process[_0x16ecdc(0xd7)][_0x16ecdc(0x8b)],process[_0x16ecdc(0xd7)][_0x16ecdc(0xe6)],!![]),tele_id=await http[_0x16ecdc(0x7b)]('main'),version=await checkUpdate(),prevTime=Date[_0x16ecdc(0x97)](),prevTimeCkDisk=Date['now']();tele_id[_0x16ecdc(0x118)]&&await http['tele'](_0x16ecdc(0xbf),tele_id[_0x16ecdc(0x118)],_0x16ecdc(0xe4)+appName+_0x16ecdc(0xc8));let _0xfdcc3e,_0x1cfed9=0x1,_0x22e689=0x1,_0x3771e8=0x0,_0x2c93be;checkDisk(),await delay(0x30d40);while(!![]){try{appStatus=0x1;if(_0x1cfed9){if(!_0x3771e8){GenDataProfile=null;_0x22e689&&(_0x2c93be=null,_0x2c93be=await genlogin[_0x16ecdc(0x107)](_0x16ecdc(0xbf)));if(!_0x2c93be||!_0x22e689){const _0x4f95fa=await http['genDataProfiles'](_0x16ecdc(0xbf),genDataFile);!_0x4f95fa['value']?(log(_0x16ecdc(0xbf),_0x16ecdc(0xe3),null,'w'),log(_0x16ecdc(0xbf),_0x16ecdc(0xc1),null,'w'),log(_0x16ecdc(0xbf),''+_0x4f95fa[_0x16ecdc(0xd1)],null,![]),log(_0x16ecdc(0xbf),_0x16ecdc(0x10f),null,'i'),tele_id&&tele_id[_0x16ecdc(0x118)]&&await http['tele'](_0x16ecdc(0xbf),tele_id[_0x16ecdc(0x118)],_0x16ecdc(0xc6))):GenDataProfile=_0x4f95fa[_0x16ecdc(0x98)];}else{GenDataProfile=await _0x2c93be[_0x16ecdc(0xe0)],await http[_0x16ecdc(0x10d)](_0x16ecdc(0xbf),genDataFile,GenDataProfile),_0x22e689=0x0;continue;}}if(await genlogin[_0x16ecdc(0x107)](_0x16ecdc(0xbf))){log(_0x16ecdc(0xbf),_0x16ecdc(0xf8),null,'w'),_0x3771e8=0x1,await closeGenlogin(),await delay(0xbb8);continue;}_0x1cfed9=0x0;}await delay(0x3e8),getAllProfiles=await http[_0x16ecdc(0xb1)](_0x16ecdc(0xbf),appName,nameFile,GenDataProfile,appSetings);if(!getAllProfiles['value']||!getAllProfiles||getAllProfiles[_0x16ecdc(0x98)]['length']<=0x0){log(_0x16ecdc(0xbf),'Không\x20có\x20task\x20hoặc\x20chưa\x20tới\x20thời\x20gian\x20chạy',null,![]),log('main',_0x16ecdc(0x10f),null,'i');throw new Error(_0x16ecdc(0xdb));}log('main',_0x16ecdc(0xed));const _0x15d4ff=Object['entries'](getAllProfiles['value']);maxTask=parseInt(getAllProfiles[_0x16ecdc(0x7f)]);const _0x4cd733=await processTasks(_0x15d4ff);if(taskQueue[_0x16ecdc(0x10e)]>0x0){const _0x1aafe2=await getRunningTasks(taskStatus,_0x16ecdc(0x88));log(_0x16ecdc(0xbf),taskQueue[_0x16ecdc(0x108)]+_0x16ecdc(0x102),null,'w'),log(_0x16ecdc(0xbf),taskQueue[_0x16ecdc(0x10e)]+'\x20task\x20đang\x20chạy',null,'w'),log(_0x16ecdc(0xbf),_0x16ecdc(0xf0)+_0x1aafe2,null,'w');}else!_0x4cd733&&log(_0x16ecdc(0xbf),_0x16ecdc(0xca),null,'w');log(_0x16ecdc(0xbf),_0x16ecdc(0xd9)+Array['from'](taskStatus[_0x16ecdc(0xbb)]()),null,'c'),log('main',_0x16ecdc(0xa8),null,'i'),Date['now']()-prevTime>=0x5265c00&&(prevTime=Date[_0x16ecdc(0x97)](),checkUpdate()),Date[_0x16ecdc(0x97)]()-prevTimeCkDisk>=0x493e0&&(prevTimeCkDisk=Date[_0x16ecdc(0x97)](),checkDisk()),logMemoryUsage(),getAllProfiles=null,await delay(0x7530);}catch(_0x31bd7f){log('main','Lỗi\x20while:\x20'+_0x31bd7f,null,![]),log(_0x16ecdc(0xbf),'Chờ\x2060\x20giây',null,'i'),tele_id&&tele_id[_0x16ecdc(0x118)]&&await http[_0x16ecdc(0x119)]('main',tele_id[_0x16ecdc(0x118)],appName+'\x20Lỗi\x20'+_0x31bd7f+_0x16ecdc(0x103)),await delay(0x7530);}}}catch(_0x4550e9){log(_0x16ecdc(0xbf),_0x16ecdc(0xeb)+_0x4550e9,null,![]),appStatus=0x0;}}main()[a0_0x389a03(0x9f)](console[a0_0x389a03(0xd1)]);async function processTasks(_0x246548){const _0x2417f4=a0_0x389a03;try{if(firstRun){log(_0x2417f4(0xbf),_0x2417f4(0x72),null,'c','*'),taskQueue=new a0_0x3b709d({'concurrency':maxTask}),tasksDataBuffer=new SharedArrayBuffer(_0x246548[_0x2417f4(0x117)]*0x4),tasksData=new Int32Array(tasksDataBuffer);for(var _0x119178=0x0;_0x119178<tasksData[_0x2417f4(0x117)];_0x119178++){Atomics[_0x2417f4(0xff)](tasksData,_0x119178,0x2);}firstRun=![],taskStatus=new Map();let _0x8f07ee=0x0;for(const [_0x15fb2c,_0x2d34a8]of _0x246548){_0x15fb2c<parseInt(getAllProfiles['maxTask'])&&(_0x8f07ee+=parseInt(_0x2d34a8[_0x2417f4(0xea)]));}screenDataBuffer=new SharedArrayBuffer((parseInt(_0x8f07ee)*0x3+0xd)*0x4),screenData=new Int32Array(screenDataBuffer);let _0x47c071=[];for(let _0x30ac49=0x0;_0x30ac49<parseInt(getAllProfiles['screens']);_0x30ac49++){const _0x1f1d9a=getAllProfiles['screenWidthHeight'][_0x2417f4(0xab)]('x');_0x47c071[_0x2417f4(0x11e)]({'width':parseInt(_0x1f1d9a[0x0]),'height':parseInt(_0x1f1d9a[0x1])});}const _0x24673d=getAllProfiles[_0x2417f4(0x75)][_0x2417f4(0xab)]('x'),_0x593cf6=parseInt(_0x24673d[0x0]),_0x25081f=parseInt(_0x24673d[0x1]),_0x3dfa7c=_0x8f07ee,_0xf5bbf=_0x47c071[_0x2417f4(0xf1)]((_0x68cb64,_0x492dce)=>_0x68cb64+_0x492dce[_0x2417f4(0xbc)],0x0),_0x36d775=Math[_0x2417f4(0x82)](..._0x47c071[_0x2417f4(0xf9)](_0x1899be=>_0x1899be[_0x2417f4(0x10b)])),_0x243aa4=await calScreenArr(_0x593cf6,_0x25081f,_0xf5bbf,_0x36d775,_0x8f07ee);screenData=_0x243aa4[_0x2417f4(0xe9)],log(_0x2417f4(0xbf),'số\x20màn\x20hình:\x20'+getAllProfiles[_0x2417f4(0x11f)],null,'w'),log(_0x2417f4(0xbf),_0x2417f4(0x94)+_0xf5bbf+'x'+_0x36d775,null,'w'),log(_0x2417f4(0xbf),_0x2417f4(0x101)+_0x243aa4[_0x2417f4(0xe7)]+_0x2417f4(0x11d)+_0x243aa4[_0x2417f4(0xdc)],null,'w'),log(_0x2417f4(0xbf),'Tỷ\x20lệ\x20thu\x20nhỏ:\x20'+_0x243aa4[_0x2417f4(0x106)],null,'w'),log(_0x2417f4(0xbf),_0x2417f4(0xad)+getAllProfiles['screens']+_0x2417f4(0xda)+getAllProfiles[_0x2417f4(0xc7)],null,'w'),await delay(0x3e8);}const _0x85effb=[];for(const [_0x3effec,_0xd403d6]of _0x246548){_0xd403d6[_0x2417f4(0x114)]=_0x3effec;const _0x1f1cf1=await genlogin[_0x2417f4(0xe1)](_0x2417f4(0xbf));log(_0x2417f4(0xbf),'[processTasks]:\x20currentTime.timestamp:\x20'+_0x1f1cf1['timestamp'],null,'i'),log(_0x2417f4(0xbf),_0x2417f4(0xa5)+_0xd403d6[_0x2417f4(0xf6)],null,'i'),log(_0x2417f4(0xbf),'[processTasks]:\x20task.status:\x20'+_0xd403d6['status'],null,'i'),log(_0x2417f4(0xbf),'[processTasks]:'+_0x1f1cf1['timestamp']+'|'+(parseInt(_0xd403d6['nextrunstamp'])+parseInt(_0xd403d6[_0x2417f4(0x11a)]))+'|'+parseInt(_0xd403d6[_0x2417f4(0xb7)]),null,'w');if(_0x1f1cf1[_0x2417f4(0xce)]>=_0xd403d6['nextrunstamp']&&parseInt(_0xd403d6['status'])===0x0){log(_0x2417f4(0xbf),'[processTasks]:\x20Thêm\x20task\x20'+_0xd403d6[_0x2417f4(0xcb)]+_0x2417f4(0xd0),null,'i'),taskStatus[_0x2417f4(0xf3)](_0xd403d6[_0x2417f4(0xcb)],_0x2417f4(0x10e));const _0x4eb244=await updateTask(_0xd403d6[_0x2417f4(0xcb)],{'status':0x1,'nextRun':0x1});_0x85effb[_0x2417f4(0x11e)](taskQueue[_0x2417f4(0x7d)](()=>processTask(_0xd403d6))),taskStatus['set'](_0xd403d6[_0x2417f4(0xcb)],_0x2417f4(0x88)),await delay(0x7d0);}else{if(_0x1f1cf1['timestamp']>parseInt(_0xd403d6[_0x2417f4(0xf6)])+parseInt(_0xd403d6['maxTime'])&&parseInt(_0xd403d6[_0x2417f4(0xb7)])===0x1&&(taskStatus[_0x2417f4(0x76)](_0xd403d6[_0x2417f4(0xcb)])===_0x2417f4(0xec)||!taskStatus[_0x2417f4(0x96)](_0xd403d6[_0x2417f4(0xcb)]))){log(_0x2417f4(0xbf),_0x2417f4(0x115)+_0xd403d6[_0x2417f4(0xcb)]+'\x20treo\x20đang\x20chạy\x20từ\x20'+_0xd403d6['nextrun'],null,'w','*');const _0xa97bec=await updateTask(_0xd403d6[_0x2417f4(0xcb)],{'status':0x0,'nextRun':0x1});log(_0x2417f4(0xbf),'[processTasks]:\x20Đã\x20xóa\x20trạng\x20thái\x20đang\x20chạy\x20task\x20'+_0xd403d6[_0x2417f4(0xcb)],null,'i','*');}}}return _0x85effb[_0x2417f4(0x117)]>0x0?!![]:(log(_0x2417f4(0xbf),_0x2417f4(0xe5),null,'w'),null);}catch(_0x18faaa){return log(_0x2417f4(0xbf),_0x2417f4(0xb9)+_0x18faaa,null,![]),null;}}async function processTask(_0x38cbe1){const _0x4a1df6=a0_0x389a03;try{log(_0x4a1df6(0xbf),'[processTask]:\x20Xử\x20lý\x20task:\x20'+_0x38cbe1[_0x4a1df6(0xcb)],null,'i','=');if(!_0x38cbe1||typeof _0x38cbe1!=='object')throw new Error(_0x4a1df6(0xb8));const _0x40ede4=createWorkerPromise(_0x38cbe1),_0x1e9105=await _0x40ede4;log(_0x4a1df6(0xbf),_0x4a1df6(0xc2)+_0x38cbe1[_0x4a1df6(0xcb)],null,'w','DT');const _0x4c5a01=await updateTask(_0x38cbe1[_0x4a1df6(0xcb)],{'status':0x0,'nextRun':0x1});return taskStatus['set'](_0x38cbe1[_0x4a1df6(0xcb)],'completed'),await delay(0x1388),_0x1e9105;}catch(_0x31e491){return log(_0x4a1df6(0xbf),_0x4a1df6(0x113)+_0x31e491,null,![]),await updateTask(_0x38cbe1[_0x4a1df6(0xcb)],{'status':0x0,'nextRun':0x1}),null;}}async function createWorkerPromise(_0x5f062c){const _0x2395b8=a0_0x389a03;return log('main',_0x2395b8(0x78)+_0x5f062c[_0x2395b8(0xcb)],null,'i','-'),new Promise(async(_0x1b221f,_0xf16038)=>{const _0x15a82e=_0x2395b8;let _0x53d553;try{if(!_0x5f062c||typeof _0x5f062c!=='object')return _0xf16038(new Error('Task\x20phải\x20là\x20một\x20đối\x20tượng'));const _0x141741=_0x5f062c[_0x15a82e(0xef)]===_0x15a82e(0xbe)?_0x15a82e(0xd3):_0x15a82e(0x83);_0x53d553=await spawn(new Worker(_0x141741)),log('main',_0x15a82e(0xa1)+_0x141741,null,'i');if(!_0x53d553)return _0xf16038(new Error(_0x15a82e(0x86)));const _0x4e7db6=parseInt(_0x5f062c['maxTime'])*0x3e8;if(isNaN(_0x4e7db6))return _0xf16038(new Error(_0x15a82e(0xb5)));const _0x353b5f=setTimeout(async()=>{const _0x54f5e7=_0x15a82e;log(_0x54f5e7(0xbf),'[createWorkerPromise]:\x20Timeout\x20khi\x20xử\x20lý\x20task\x20'+_0x5f062c[_0x54f5e7(0xcb)],null,'w','timeout'),await eTimeout(_0x5f062c['taskIndex']),xoaTimeout(_0x353b5f),await _0x53d553['worker1']({'timeout':!![],'task':_0x5f062c,'tasksDataBuffer':tasksDataBuffer,'screenDataBuffer':screenDataBuffer,'tele_id':tele_id});},_0x4e7db6);log('main',_0x15a82e(0xa1)+_0x5f062c['name']+'\x20set\x20timeout:\x20'+_0x4e7db6+_0x15a82e(0xf2)+_0x353b5f,null,'w');const _0x4f3e8d=async _0x2f9ae1=>{const _0x3edbbb=_0x15a82e;try{if(_0x2f9ae1[_0x3edbbb(0xc0)]){log(_0x3edbbb(0xbf),'[handleWorkerMessage]:\x20Đã\x20xử\x20lý\x20task\x20'+_0x5f062c['name'],null,'i'),xoaTimeout(_0x353b5f),_0x1b221f(!![]);return;}else{if(!_0x2f9ae1['success']){log('main',_0x3edbbb(0x9a)+_0x5f062c[_0x3edbbb(0xcb)]+':\x20'+_0x2f9ae1[_0x3edbbb(0xd1)],null,![]),_0xf16038(new Error(_0x2f9ae1[_0x3edbbb(0xd1)]||'Lỗi\x20không\x20xác\x20định'));return;}else{log(_0x3edbbb(0xbf),'[handleWorkerMessage]1:Lỗi\x20xử\x20lý\x20task\x20'+_0x5f062c[_0x3edbbb(0xcb)]+':\x20'+json(_0x2f9ae1),null,'c','x'),log(_0x3edbbb(0xbf),_0x3edbbb(0xd4)+_0x5f062c[_0x3edbbb(0xcb)]+':\x20'+_0x2f9ae1['error'],null,![]),_0xf16038(new Error(_0x2f9ae1[_0x3edbbb(0xd1)]||_0x3edbbb(0x79)));return;}}}catch(_0x3aefe4){log('main',_0x3edbbb(0x77)+_0x5f062c[_0x3edbbb(0xcb)]+':\x20'+_0x3aefe4[_0x3edbbb(0x80)],null,![]),xoaTimeout(_0x353b5f),_0xf16038(_0x3aefe4);return;}},_0x31b1a7=new Promise(async(_0x13403d,_0x4c7651)=>{try{const _0x479c6f=await _0x53d553['worker1']({'version0':version,'tasksDataBuffer':tasksDataBuffer,'screenDataBuffer':screenDataBuffer,'task':_0x5f062c,'dataBrw':getAllProfiles,'GenDataProfile0':GenDataProfile,'timgame0':timgame,'tele_id':tele_id}),_0x19b103=await _0x4f3e8d(_0x479c6f);_0x13403d(_0x19b103);}catch(_0x4abcd6){_0x4c7651(_0x4abcd6);}}),_0x16f05e=await Promise['race']([_0x31b1a7]);log(_0x15a82e(0xbf),_0x15a82e(0xa9)+json(_0x16f05e),null,'w','@'),log('main',_0x15a82e(0x71),null,'w','-');_0x53d553&&Thread['terminate']in _0x53d553?await Thread[_0x15a82e(0x110)](_0x53d553):log(_0x15a82e(0xbf),_0x15a82e(0xa4),null,![],'x');_0x1b221f(_0x16f05e);return;}catch(_0xd3fd8d){log(_0x15a82e(0xbf),_0x15a82e(0xdf)+_0xd3fd8d['message'],null,![]),_0x53d553&&Thread['terminate']in _0x53d553?await Thread[_0x15a82e(0x110)](_0x53d553):log(_0x15a82e(0xbf),_0x15a82e(0xa4),null,![],'x'),_0xf16038(_0xd3fd8d);}});}async function updateTask(_0x52fe11,_0x302e1a){const _0x5c34a6=a0_0x389a03;if(!http||typeof http[_0x5c34a6(0x109)]!=='function'){log(_0x5c34a6(0xbf),'[updateTask]:\x20Lỗi\x20cập\x20nhật\x20task',null,![]);return;}return log('main',_0x5c34a6(0xaa)+_0x52fe11+_0x5c34a6(0x73)+_0x302e1a['status']+'|'+_0x302e1a[_0x5c34a6(0xcf)],null,'i'),await http[_0x5c34a6(0x109)]('main',_0x52fe11,_0x302e1a);}async function processProfile(_0x2ae7b6){const _0x3f4fc5=a0_0x389a03;console['log'](_0x3f4fc5(0xbf),_0x3f4fc5(0xb4)+_0x2ae7b6[_0x3f4fc5(0xcb)]);const _0xda8c9a=_0x2ae7b6[_0x3f4fc5(0xa0)];for(const _0x1ab31b of _0xda8c9a){await gameQueue[_0x3f4fc5(0x7d)](()=>processGame(_0x1ab31b));}}async function getRunningTasks(_0x411d2b,_0x532b2d){const _0x4cc601=a0_0x389a03,_0x30662e=[];for(const [_0x40a62b,_0x20f970]of _0x411d2b[_0x4cc601(0xbb)]()){_0x20f970===_0x20f970&&_0x30662e[_0x4cc601(0x11e)](_0x40a62b);}return _0x30662e;}async function calScreenArr(_0x36e69c,_0x55d140,_0x158310,_0x3a37f1,_0x18faac,_0x56bd4e=0x1){const _0x5896f2=a0_0x389a03,_0x13c592=0x0;let _0x37ca00=_0x36e69c,_0x4e4f96=_0x55d140,_0x5e5aee,_0x236244,_0x15ef43=0x1;while(!![]){_0x236244=Math['floor'](_0x158310/_0x37ca00),_0x5e5aee=Math[_0x5896f2(0x92)](_0x18faac/_0x236244);if(_0x5e5aee*_0x4e4f96<=_0x3a37f1)break;_0x15ef43*=0.95,_0x37ca00=Math[_0x5896f2(0x100)](_0x36e69c*_0x15ef43),_0x4e4f96=Math['floor'](_0x55d140*_0x15ef43);}_0x37ca00=Math['floor'](_0x37ca00*1.26);const _0x17bf9=[];let _0x1139f0=0x0;for(let _0x41d812=0x0;_0x41d812<_0x56bd4e;_0x41d812++){const _0x4896fe=Math[_0x5896f2(0x9d)](_0x15ef43*0xf4240);Atomics[_0x5896f2(0xff)](screenData,0x0,_0x41d812),Atomics['store'](screenData,0x1,_0x4896fe),Atomics[_0x5896f2(0xff)](screenData,0x2,_0x36e69c),Atomics[_0x5896f2(0xff)](screenData,0x3,_0x55d140),Atomics[_0x5896f2(0xff)](screenData,0x4,_0x37ca00),Atomics[_0x5896f2(0xff)](screenData,0x5,_0x4e4f96);let _0x409b6b=0xa;for(let _0x4d9222=0x0;_0x4d9222<_0x5e5aee;_0x4d9222++){const _0x4b889b=[];for(let _0x50ab49=0x0;_0x50ab49<_0x236244;_0x50ab49++){if(_0x1139f0>=_0x18faac)break;const _0x3523c8=Math[_0x5896f2(0x100)](_0x50ab49*_0x37ca00),_0x4dbefc=Math[_0x5896f2(0x100)](_0x4d9222*_0x4e4f96);if(_0x3523c8>_0x158310||_0x4dbefc>_0x3a37f1)continue;Atomics[_0x5896f2(0xff)](screenData,_0x409b6b++,0x2),Atomics[_0x5896f2(0xff)](screenData,_0x409b6b++,_0x3523c8),Atomics[_0x5896f2(0xff)](screenData,_0x409b6b++,_0x4dbefc),_0x1139f0++;}if(_0x1139f0>=_0x18faac)break;}break;}return{'screenData':screenData,'scale':_0x15ef43,'rows':_0x5e5aee,'cols':_0x236244,'total':_0x1139f0,'positions':_0x17bf9};}async function xoaTimeout(_0x129cf6){const _0x46bc0c=a0_0x389a03;try{clearTimeout(_0x129cf6),log(_0x46bc0c(0xbf),'[xoaTimeout]main:\x20Xóa\x20timeout:'+_0x129cf6,null,'w','clrTimeout');}catch(_0x4d642a){log(_0x46bc0c(0xbf),_0x46bc0c(0x90)+_0x4d642a,null,![]);}}async function delay(_0xaa237d){return new Promise(_0x1d16f7=>{setTimeout(_0x1d16f7,_0xaa237d);});}async function eTimeout(_0x1a7f37){const _0xb44e8b=a0_0x389a03;return log(_0xb44e8b(0xbf),_0xb44e8b(0x91),null,'w'),Atomics['store'](tasksData,_0x1a7f37,0x1),!![];}function a0_0x32f4(_0x17fb95,_0x366c56){const _0x272726=a0_0x2727();return a0_0x32f4=function(_0x32f40e,_0x354790){_0x32f40e=_0x32f40e-0x71;let _0x569a07=_0x272726[_0x32f40e];return _0x569a07;},a0_0x32f4(_0x17fb95,_0x366c56);}async function rstTimeout(_0xb22e8d){const _0x5244d4=a0_0x389a03;return log(_0x5244d4(0xbf),_0x5244d4(0x7c),null,'w'),Atomics[_0x5244d4(0xc4)](tasksData,_0xb22e8d,0x1,0x2),!![];}async function closeGenlogin(){const _0x5b2f10=a0_0x389a03;try{log('main',_0x5b2f10(0xbd),null,'w','-'),exec(_0x5b2f10(0x81),(_0x4a5048,_0x3c61d7,_0x415f65)=>{const _0x44df4f=_0x5b2f10;if(_0x4a5048){log(_0x44df4f(0xbf),_0x44df4f(0x8a)+_0x4a5048[_0x44df4f(0x80)],null,![]);return;}if(_0x415f65){log(_0x44df4f(0xbf),'Stderr:\x20'+_0x415f65,null,![]);return;}log(_0x44df4f(0xbf),'tắt\x20genlogin\x20ok');});}catch(_0x2cf8d){log(_0x5b2f10(0xbf),_0x5b2f10(0x104)+_0x2cf8d,null,![]);}}async function checkUpdate(){const _0x4d62f3=a0_0x389a03;try{const _0x444e34='https://raw.githubusercontent.com/resistor3300/longCTools/refs/heads/main/package.json',_0x4185c9=a0_0x3bbadf[_0x4d62f3(0xfe)](process['cwd'](),_0x4d62f3(0x8c)),_0x23bb7c=await a0_0x38985a[_0x4d62f3(0x11b)]['readFile'](_0x4185c9,_0x4d62f3(0x87)),_0x3b745c=JSON[_0x4d62f3(0x120)](_0x23bb7c),_0x37662e=_0x3b745c[_0x4d62f3(0x84)];log('main',_0x4d62f3(0xf4)+_0x37662e,null,'w','-');const _0x24afad=await http[_0x4d62f3(0x11c)](_0x4d62f3(0xbf),_0x444e34);await delay(0x3e8);if(_0x24afad)try{const _0x5e6f39=typeof _0x24afad===_0x4d62f3(0xd8)?JSON[_0x4d62f3(0x120)](_0x24afad):_0x24afad,_0x195ec0=_0x5e6f39[_0x4d62f3(0x84)];await delay(0x3e8),_0x195ec0!=_0x37662e?(log(_0x4d62f3(0xbf),_0x4d62f3(0x111)+_0x195ec0,null,'w'),tele_id&&tele_id[_0x4d62f3(0x118)]&&await http[_0x4d62f3(0x119)](_0x4d62f3(0xbf),tele_id[_0x4d62f3(0x118)],_0x4d62f3(0x116)+_0x195ec0)):log('main','[checkUpdate]Bạn\x20đang\x20chạy\x20phiên\x20bản\x20mới\x20nhất',null,'w');}catch(_0x349bfc){log(_0x4d62f3(0xbf),_0x4d62f3(0xac)+_0x349bfc[_0x4d62f3(0x80)],null,![]);}return _0x37662e;}catch(_0x52de47){return log(_0x4d62f3(0xbf),_0x4d62f3(0x10c)+_0x52de47,null,![]),null;}}async function checkDisk(){const _0x12347c=a0_0x389a03;try{const _0x23c193=await checkDiskSpace('C:');log(_0x12347c(0xd2),_0x12347c(0xfa)+_0x23c193[_0x12347c(0x95)](0x2)+_0x12347c(0x10a),null,'w','+'),_0x23c193<=MIN_FREE_SPACE_MB&&process['exit']();}catch(_0x8925a){log(_0x12347c(0xd2),_0x12347c(0x9b)+_0x8925a['message'],null,'w','+');}}function a0_0x2727(){const _0x5e4e84=['Thời\x20gian\x20timeout\x20không\x20hợp\x20lệ','9240138aRTvOM','status','Task\x20phải\x20là\x20một\x20đối\x20tượng','[processTasks]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20','Garbage\x20Collector\x20đã\x20chạy!','entries','width','Tự\x20động\x20tắt\x20genlogin','api','main','success','Hoặc\x20Đăng\x20nhập\x20lại\x20App\x20genlogin\x20nhé\x20bro','[processTask]:\x20DONE\x20TASK\x20','tự\x20động\x20sắp\x20xếp\x20vị\x20trí\x20hiển\x20thị\x20trình\x20duyệt\x20','compareExchange','LongCAutoAirdrop','Lỗi\x20App\x20genlogin\x20nhé\x20bro!','screenWidthHeight','\x20nè\x20bro!','memoryUsage','chưa\x20có\x20task\x20mới','name','1581069TlAhhd','thư\x20mục\x20chứa\x20data\x20genlogin','timestamp','nextRun','\x20vào\x20hàng\x20đợi','error','checkDisk','./worker-api1.js','[handleWorkerMessage]2:\x20Lỗi\x20xử\x20lý\x20task\x20','độ\x20phân\x20giải\x20màn\x20hình\x20vật\x20lý\x20Width\x20x\x20Height\x20','4622898sncAZP','env','string','[main]\x20Task\x20Status:\x20','|screenWidthHeight:','No\x20task\x20found','cols','wmic\x20logicaldisk\x20get\x20caption,freespace','0x0','[createWorkerPromise]:\x20Lỗi\x20không\x20xác\x20định:\x20','profiles','nowTime','\x20MB,/1GB!:\x20Thu\x20hồi\x20nhanh\x20còn\x20kịp','Mở\x20App\x20genlogin\x20trước\x20nhé\x20bro,kiểm\x20tra\x20coi\x20mở\x20chưa\x20bro','Start\x20App:\x20','[processTasks]:\x20Chưa\x20có\x20task\x20mới\x20nào\x20để\x20xử\x20lý','APIKEY','rows','2424532OlhSuf','screenData','profileThreads','Lỗi\x20chung:\x20','completed','getAllProfiles.value\x20OK','input','taskMode','Running\x20Task:','reduce','\x20Timeout\x20ID:\x20','set','[checkUpdate]Version:\x20','Bộ\x20nhớ\x20vượt\x20quá\x201GB!\x20Thu\x20hồi...','nextrunstamp','Memory','OK\x20rồi\x20man.\x20tắt\x20genlogin\x20đi\x20bro','map','🟢\x20Dung\x20lượng\x20trống:\x20','APIKEY\x20not\x20found!','Số\x20lượng\x20màn\x20hình\x20vật\x20lý\x20để\x20hiển\x20thị','genProfiles','join','store','floor','Số\x20trình\x20duyệt\x20trên\x20mỗi\x20hàng:\x20','\x20task\x20trong\x20hàng\x20đợi','\x20rồi\x20bro!','closeGenlogin:\x20','kích\x20thước\x20trinhd\x20duyệt\x20Width\x20x\x20Height\x20','scale','getListProfiles','size','updateTask','\x20MB','height','[checkUpdate]Lỗi\x20khi\x20đọc\x20file\x20package.json:\x20','genDataProfiles','pending','chờ\x2030\x20giây\x20rồi\x20thử\x20lại','terminate','[checkUpdate]Có\x20phiên\x20bản\x20mới:\x20','829147FvdyMH','[processTask]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20','taskIndex','[processTasks]:\x20Phát\x20Hiện\x20','Đã\x20có\x20phiên\x20bản\x20mới:\x20','length','tele_id','tele','maxTime','promises','httpGet',',\x20mỗi\x20cột:\x20','push','screens','parse','heapUsed','[createWorkerPromise]:\x20main\x20kết\x20thúc\x20worker','[processTasks]:\x20FirstRun','\x20with\x20data:\x20','Drive\x20not\x20found','browserWidthHeight','get','[handleWorkerMessage]:\x20Lỗi\x20nội\x20bộ\x20khi\x20xử\x20lý\x20task\x20','[createWorkerPromise]:\x20createWorkerPromise\x20task:\x20','Lỗi\x20không\x20xác\x20định','4176DgGebP','getTeleId','[eTimeout]main:\x20reset\x20timeout','add','.genlogin','maxTask','message','taskkill\x20/IM\x20genLogin.exe\x20/F','max','./workerBrowser.js','version','Bộ\x20nhớ\x20vượt\x20quá\x20Heap\x20Used:\x20','Không\x20thể\x20tạo\x20worker','utf-8','running','rss','Lỗi:\x20','SERVER_HOST','package.json','25624Xgvldj','2tyjtyH','substring','[xoaTimeout]main:\x20','[eTimeout]main:\x20turn\x20on\x20timeout\x20flag','ceil','Users','Tổng\x20độ\x20phân\x20giải\x20màn\x20hình:\x20','toFixed','has','now','value','5WUMqpR','[handleWorkerMessage]0:\x20Lỗi\x20xử\x20lý\x20task\x20','❌\x20Lỗi\x20kiểm\x20tra\x20ổ\x20đĩa:\x20','\x20MB,\x20RSS:\x20','round','Heap\x20Used:\x20','catch','games','[createWorkerPromise]:\x20','TA\x20ĐI\x20ĐÂY','checkbox','[createWorkerPromise]:\x20Worker\x20không\x20hợp\x20lệ\x20hoặc\x20đã\x20bị\x20giải\x20phóng:','[processTasks]:\x20task.nextrunstamp:\x20','Thêm\x20APIKEY\x20vào\x20file\x20.env\x20nhen\x20Bro','tọa\x20độ\x20hiển\x20thị\x20trình\x20duyệt\x20','Kiểm\x20tra\x20task\x20sau\x2060\x20giây','[createWorkerPromise]:\x20main\x20','[updateTask]:\x20update\x20task\x20','split','[checkUpdate]\x20Lỗi\x20parse\x20JSON:\x20','[processTasks]:\x20screens:','userInfo','dirname','BYE\x20BYE','getAllProfiles','5712310EgEgKl','1920x1080','Processing\x20profile:\x20'];a0_0x2727=function(){return _0x5e4e84;};return a0_0x2727();}function checkDiskSpace(_0x3f0a7b='C:'){return new Promise((_0x5d2cb1,_0x3af444)=>{const _0x3bdf29=a0_0x32f4;exec(_0x3bdf29(0xdd),(_0xad579,_0x49e46c)=>{const _0x1252d4=_0x3bdf29;if(_0xad579){_0x3af444(_0xad579);return;}const _0x502df7=_0x49e46c['trim']()[_0x1252d4(0xab)]('\x0a');for(const _0x589ec0 of _0x502df7){const _0x56b76c=_0x589ec0['trim']()[_0x1252d4(0xab)](/\s+/);if(_0x56b76c[0x0]===_0x3f0a7b){const _0x5aa744=Math['round'](parseInt(_0x56b76c[0x1],0xa)/0x400/0x400);_0x5d2cb1(_0x5aa744);return;}}_0x3af444(new Error(_0x1252d4(0x74)));});});}async function logMemoryUsage(){const _0x547661=a0_0x389a03,_0x311ca0=process[_0x547661(0xc9)]();log(_0x547661(0xf7),_0x547661(0x9e)+(_0x311ca0['heapUsed']/0x400/0x400)[_0x547661(0x95)](0x2)+_0x547661(0x9c)+(_0x311ca0[_0x547661(0x89)]/0x400/0x400)[_0x547661(0x95)](0x2)+_0x547661(0x10a),null,'w','+'),_0x311ca0[_0x547661(0x89)]>0x400*0x400*0x400*0x5&&(tele_id[_0x547661(0x118)]&&await http[_0x547661(0x119)](_0x547661(0xf7),tele_id[_0x547661(0x118)],_0x547661(0x85)+(_0x311ca0[_0x547661(0x121)]/0x400/0x400)['toFixed'](0x2)+_0x547661(0xe2)),log('Memory',_0x547661(0xf5),null,'w','+'),global['gc']&&(global['gc'](),log(_0x547661(0xf7),_0x547661(0xba),null,'i','+')));}