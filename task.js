const a0_0x2b845b=a0_0x1c77;(function(_0x153dc1,_0x48e41e){const _0x22094f=a0_0x1c77,_0x37fbb5=_0x153dc1();while(!![]){try{const _0x5422a5=-parseInt(_0x22094f(0x1df))/0x1+parseInt(_0x22094f(0x200))/0x2*(parseInt(_0x22094f(0x25b))/0x3)+parseInt(_0x22094f(0x1d9))/0x4+parseInt(_0x22094f(0x255))/0x5+-parseInt(_0x22094f(0x23f))/0x6*(-parseInt(_0x22094f(0x21a))/0x7)+parseInt(_0x22094f(0x1be))/0x8*(parseInt(_0x22094f(0x212))/0x9)+-parseInt(_0x22094f(0x24e))/0xa;if(_0x5422a5===_0x48e41e)break;else _0x37fbb5['push'](_0x37fbb5['shift']());}catch(_0x24cd54){_0x37fbb5['push'](_0x37fbb5['shift']());}}}(a0_0x1dc0,0xae1b1));import'dotenv/config';import a0_0x2eab70 from'os';import a0_0x98d892 from'fs';import a0_0x52e19d from'path';import{fileURLToPath}from'url';import a0_0x410db6 from'./modules/Genlogin.js';import a0_0x48d946 from'./modules/http.js';import{log,json}from'./modules/logger.js';import a0_0x68035b from'node-machine-id';import{spawn,Thread,Worker}from'threads';import{exec}from'child_process';import a0_0x59ad22 from'p-queue';const MIN_FREE_SPACE_MB=0x1f4;let tasksDataBuffer,tasksData,screenData,screenDataBuffer;const __filename=fileURLToPath(import.meta[a0_0x2b845b(0x1f0)]),__dirname=a0_0x52e19d[a0_0x2b845b(0x213)](__filename),{machine_id,machineIdSync}=a0_0x68035b,machineId=machineIdSync()['substring'](0x0,0x8),appName=a0_0x2b845b(0x1e3)+'-'+machineId,nameFile='genProfiles'+'-'+machineId,genDataFile=a0_0x2b845b(0x210)+'-'+machineId,appSetings={'maxTaskThreads':{'type':'input','value':0x3,'note':'Số\x20lượng\x20task\x20chạy\x20song\x20song'},'screens':{'type':a0_0x2b845b(0x1e4),'value':0x1,'note':a0_0x2b845b(0x215)},'screenWidthHeight':{'type':a0_0x2b845b(0x1e4),'value':'1920x1080','note':a0_0x2b845b(0x20c)},'browserWidthHeight':{'type':a0_0x2b845b(0x1e4),'value':'400x900','note':'kích\x20thước\x20trinhd\x20duyệt\x20Width\x20x\x20Height\x20'},'autoSetBrowserPosition':{'type':a0_0x2b845b(0x263),'value':'y','note':a0_0x2b845b(0x1db)},'customBrowserPosition':{'type':a0_0x2b845b(0x1e4),'value':a0_0x2b845b(0x1fb),'note':a0_0x2b845b(0x205)},'genDataFolder':{'type':a0_0x2b845b(0x1e4),'value':a0_0x52e19d['join']('C:',a0_0x2b845b(0x20a),a0_0x2eab70[a0_0x2b845b(0x24f)]()[a0_0x2b845b(0x250)],a0_0x2b845b(0x1f2)),'note':a0_0x2b845b(0x20e)}};let genlogin,http,profileNameId,profileId,browser,getAllProfiles,GenDataProfile,screenArrWorker,timgame=!![],taskQueue,maxTask=0x1,taskStatus,firstRun=!![],appStatus=0x0,tele_id,version,prevTime,prevTimeCkDisk;async function main(){const _0x12134b=a0_0x2b845b;try{log('main',_0x12134b(0x259)+appName,null,'w','='),await delay(0x3e8);if(!process[_0x12134b(0x1c1)][_0x12134b(0x265)]){log(_0x12134b(0x1f4),_0x12134b(0x241),null,![]),log(_0x12134b(0x1f4),_0x12134b(0x248),null,'w'),log(_0x12134b(0x1f4),_0x12134b(0x1d7),null,'w'),log(_0x12134b(0x1f4),_0x12134b(0x1fa),null,'w'),log(_0x12134b(0x1f4),_0x12134b(0x249),null,'w','=');return;}genlogin=new a0_0x410db6('',!![]),http=new a0_0x48d946(process[_0x12134b(0x1c1)][_0x12134b(0x22f)],process[_0x12134b(0x1c1)][_0x12134b(0x265)],!![]),tele_id=await http[_0x12134b(0x223)]('main'),version=await checkUpdate(),prevTime=Date[_0x12134b(0x1fd)](),prevTimeCkDisk=Date[_0x12134b(0x1fd)]();tele_id[_0x12134b(0x231)]&&await http['tele'](_0x12134b(0x1f4),tele_id['tele_id'],_0x12134b(0x259)+appName+_0x12134b(0x1f3));let _0x57cece,_0x18a6f6=0x1,_0x49a3b2=0x1,_0x16bcae=0x0,_0x2c2926;while(!![]){try{appStatus=0x1;if(_0x18a6f6){if(!_0x16bcae){GenDataProfile=null;_0x49a3b2&&(_0x2c2926=null,_0x2c2926=await genlogin['getListProfiles'](_0x12134b(0x1f4)));if(!_0x2c2926||!_0x49a3b2){const _0xee5edd=await http['genDataProfiles'](_0x12134b(0x1f4),genDataFile);!_0xee5edd['value']?(log(_0x12134b(0x1f4),_0x12134b(0x228),null,'w'),log(_0x12134b(0x1f4),_0x12134b(0x24c),null,'w'),log('main',''+_0xee5edd[_0x12134b(0x227)],null,![]),log(_0x12134b(0x1f4),_0x12134b(0x1e5),null,'i'),tele_id&&tele_id[_0x12134b(0x231)]&&await http[_0x12134b(0x235)](_0x12134b(0x1f4),tele_id[_0x12134b(0x231)],_0x12134b(0x1dd))):GenDataProfile=_0xee5edd[_0x12134b(0x214)];}else{GenDataProfile=await _0x2c2926[_0x12134b(0x1fc)],await http['genDataProfiles'](_0x12134b(0x1f4),genDataFile,GenDataProfile),_0x49a3b2=0x0;continue;}}if(await genlogin[_0x12134b(0x1ec)](_0x12134b(0x1f4))){log(_0x12134b(0x1f4),_0x12134b(0x22e),null,'w'),_0x16bcae=0x1,await closeGenlogin(),await delay(0xbb8);continue;}_0x18a6f6=0x0;}await delay(0x3e8),getAllProfiles=await http[_0x12134b(0x23e)](_0x12134b(0x1f4),appName,nameFile,GenDataProfile,appSetings);if(!getAllProfiles[_0x12134b(0x214)]||!getAllProfiles||getAllProfiles[_0x12134b(0x214)][_0x12134b(0x1cb)]<=0x0){log(_0x12134b(0x1f4),_0x12134b(0x246),null,![]),log('main',_0x12134b(0x1e5),null,'i');throw new Error(_0x12134b(0x23b));}log('main','getAllProfiles.value\x20OK');const _0x3550a6=Object[_0x12134b(0x1bd)](getAllProfiles[_0x12134b(0x214)]);maxTask=parseInt(getAllProfiles[_0x12134b(0x1ee)]);const _0x1a2729=await processTasks(_0x3550a6);if(taskQueue[_0x12134b(0x1c7)]>0x0){const _0x1ae497=await getRunningTasks(taskStatus,'running');log(_0x12134b(0x1f4),taskQueue[_0x12134b(0x1d1)]+_0x12134b(0x243),null,'w'),log(_0x12134b(0x1f4),taskQueue['pending']+_0x12134b(0x244),null,'w'),log(_0x12134b(0x1f4),'Running\x20Task:'+_0x1ae497,null,'w');}else!_0x1a2729&&log('main',_0x12134b(0x24d),null,'w');log('main','[main]\x20Task\x20Status:\x20'+Array[_0x12134b(0x1d4)](taskStatus[_0x12134b(0x1bd)]()),null,'c'),log(_0x12134b(0x1f4),_0x12134b(0x1c9),null,'i'),Date[_0x12134b(0x1fd)]()-prevTime>=0x5265c00&&(prevTime=Date[_0x12134b(0x1fd)](),checkUpdate()),Date['now']()-prevTimeCkDisk>=0x493e0&&(prevTimeCkDisk=Date[_0x12134b(0x1fd)](),checkDisk()),logMemoryUsage(),getAllProfiles=null,await delay(0x7530);}catch(_0x47ffae){log('main','Lỗi\x20while:\x20'+_0x47ffae,null,![]),log(_0x12134b(0x1f4),'Chờ\x2060\x20giây',null,'i'),tele_id&&tele_id[_0x12134b(0x231)]&&await http['tele'](_0x12134b(0x1f4),tele_id[_0x12134b(0x231)],appName+_0x12134b(0x1b6)+_0x47ffae+_0x12134b(0x216)),await delay(0x7530);}}}catch(_0x32e0e9){log(_0x12134b(0x1f4),_0x12134b(0x20d)+_0x32e0e9,null,![]),appStatus=0x0;}}main()[a0_0x2b845b(0x1f7)](console[a0_0x2b845b(0x227)]);async function processTasks(_0x12eac8){const _0x33388c=a0_0x2b845b;try{if(firstRun){log(_0x33388c(0x1f4),_0x33388c(0x1e1),null,'c','*'),taskQueue=new a0_0x59ad22({'concurrency':maxTask}),tasksDataBuffer=new SharedArrayBuffer(_0x12eac8[_0x33388c(0x1cb)]*0x4),tasksData=new Int32Array(tasksDataBuffer);for(var _0x39c1ae=0x0;_0x39c1ae<tasksData[_0x33388c(0x1cb)];_0x39c1ae++){Atomics[_0x33388c(0x262)](tasksData,_0x39c1ae,0x2);}firstRun=![],taskStatus=new Map();let _0x329783=0x0;for(const [_0x418070,_0x571e5d]of _0x12eac8){_0x418070<parseInt(getAllProfiles['maxTask'])&&(_0x329783+=parseInt(_0x571e5d['profileThreads']));}screenDataBuffer=new SharedArrayBuffer((parseInt(_0x329783)*0x3+0xd)*0x4),screenData=new Int32Array(screenDataBuffer);let _0x38c270=[];for(let _0x4e333c=0x0;_0x4e333c<parseInt(getAllProfiles[_0x33388c(0x224)]);_0x4e333c++){const _0x200315=getAllProfiles[_0x33388c(0x25e)][_0x33388c(0x21b)]('x');_0x38c270[_0x33388c(0x251)]({'width':parseInt(_0x200315[0x0]),'height':parseInt(_0x200315[0x1])});}const _0x5aa840=getAllProfiles[_0x33388c(0x238)]['split']('x'),_0x452202=parseInt(_0x5aa840[0x0]),_0x4295d2=parseInt(_0x5aa840[0x1]),_0x12aede=_0x329783,_0x541eb2=_0x38c270['reduce']((_0x40dc05,_0x517726)=>_0x40dc05+_0x517726[_0x33388c(0x25c)],0x0),_0x1ceee9=Math[_0x33388c(0x1f6)](..._0x38c270['map'](_0x65ecea=>_0x65ecea['height'])),_0x5eeaa5=await calScreenArr(_0x452202,_0x4295d2,_0x541eb2,_0x1ceee9,_0x329783);screenData=_0x5eeaa5[_0x33388c(0x1dc)],log(_0x33388c(0x1f4),_0x33388c(0x25f)+getAllProfiles['screens'],null,'w'),log(_0x33388c(0x1f4),_0x33388c(0x1f1)+_0x541eb2+'x'+_0x1ceee9,null,'w'),log('main','Số\x20trình\x20duyệt\x20trên\x20mỗi\x20hàng:\x20'+_0x5eeaa5['rows']+_0x33388c(0x1ff)+_0x5eeaa5[_0x33388c(0x236)],null,'w'),log(_0x33388c(0x1f4),_0x33388c(0x239)+_0x5eeaa5['scale'],null,'w'),log(_0x33388c(0x1f4),'[processTasks]:\x20screens:'+getAllProfiles[_0x33388c(0x224)]+_0x33388c(0x1b7)+getAllProfiles['screenWidthHeight'],null,'w'),await delay(0x3e8);}const _0x143fa6=[];for(const [_0x106c10,_0x9dc232]of _0x12eac8){_0x9dc232['taskIndex']=_0x106c10;const _0x2c6909=await genlogin['nowTime'](_0x33388c(0x1f4));log(_0x33388c(0x1f4),_0x33388c(0x234)+_0x2c6909[_0x33388c(0x20f)],null,'i'),log('main',_0x33388c(0x1e8)+_0x9dc232[_0x33388c(0x245)],null,'i'),log(_0x33388c(0x1f4),_0x33388c(0x222)+_0x9dc232[_0x33388c(0x1b9)],null,'i'),log(_0x33388c(0x1f4),'[processTasks]:'+_0x2c6909[_0x33388c(0x20f)]+'|'+(parseInt(_0x9dc232[_0x33388c(0x245)])+parseInt(_0x9dc232['maxTime']))+'|'+parseInt(_0x9dc232[_0x33388c(0x1b9)]),null,'w');if(_0x2c6909['timestamp']>=_0x9dc232[_0x33388c(0x245)]&&parseInt(_0x9dc232[_0x33388c(0x1b9)])===0x0){log(_0x33388c(0x1f4),'[processTasks]:\x20Thêm\x20task\x20'+_0x9dc232[_0x33388c(0x208)]+_0x33388c(0x1d8),null,'i'),taskStatus[_0x33388c(0x242)](_0x9dc232[_0x33388c(0x208)],'pending');const _0xe12b45=await updateTask(_0x9dc232[_0x33388c(0x208)],{'status':0x1,'nextRun':0x1});_0x143fa6['push'](taskQueue['add'](()=>processTask(_0x9dc232))),taskStatus[_0x33388c(0x242)](_0x9dc232[_0x33388c(0x208)],_0x33388c(0x1c8)),await delay(0x7d0);}else{if(_0x2c6909[_0x33388c(0x20f)]>parseInt(_0x9dc232['nextrunstamp'])+parseInt(_0x9dc232[_0x33388c(0x221)])&&parseInt(_0x9dc232[_0x33388c(0x1b9)])===0x1&&(taskStatus[_0x33388c(0x247)](_0x9dc232['name'])==='completed'||!taskStatus[_0x33388c(0x21f)](_0x9dc232[_0x33388c(0x208)]))){log('main',_0x33388c(0x21e)+_0x9dc232[_0x33388c(0x208)]+_0x33388c(0x1ea)+_0x9dc232[_0x33388c(0x1c3)],null,'w','*');const _0x17f343=await updateTask(_0x9dc232['name'],{'status':0x0,'nextRun':0x1});log(_0x33388c(0x1f4),_0x33388c(0x1d2)+_0x9dc232[_0x33388c(0x208)],null,'i','*');}}}return _0x143fa6[_0x33388c(0x1cb)]>0x0?!![]:(log(_0x33388c(0x1f4),_0x33388c(0x1f8),null,'w'),null);}catch(_0x650129){return log('main',_0x33388c(0x1e2)+_0x650129,null,![]),null;}}async function processTask(_0x292162){const _0x4fa9ca=a0_0x2b845b;try{log(_0x4fa9ca(0x1f4),_0x4fa9ca(0x1f5)+_0x292162[_0x4fa9ca(0x208)],null,'i','=');if(!_0x292162||typeof _0x292162!==_0x4fa9ca(0x1bf))throw new Error(_0x4fa9ca(0x25a));const _0x22729f=createWorkerPromise(_0x292162),_0x43cb1a=await _0x22729f;log(_0x4fa9ca(0x1f4),_0x4fa9ca(0x240)+_0x292162[_0x4fa9ca(0x208)],null,'w','DT');const _0x6f6d03=await updateTask(_0x292162[_0x4fa9ca(0x208)],{'status':0x0,'nextRun':0x1});return taskStatus['set'](_0x292162[_0x4fa9ca(0x208)],_0x4fa9ca(0x1e7)),await delay(0x1388),_0x43cb1a;}catch(_0x2a6dbd){return log(_0x4fa9ca(0x1f4),_0x4fa9ca(0x211)+_0x2a6dbd,null,![]),await updateTask(_0x292162[_0x4fa9ca(0x208)],{'status':0x0,'nextRun':0x1}),null;}}async function createWorkerPromise(_0x1ba8df){const _0x2860e6=a0_0x2b845b;return log(_0x2860e6(0x1f4),_0x2860e6(0x218)+_0x1ba8df['name'],null,'i','-'),new Promise(async(_0x3e1bcc,_0x483653)=>{const _0x1cfe39=_0x2860e6;let _0x5d8be4;try{if(!_0x1ba8df||typeof _0x1ba8df!=='object')return _0x483653(new Error('Task\x20phải\x20là\x20một\x20đối\x20tượng'));const _0xe898c3=_0x1ba8df['taskMode']==='api'?_0x1cfe39(0x21d):'./workerBrowser.js';_0x5d8be4=await spawn(new Worker(_0xe898c3)),log(_0x1cfe39(0x1f4),_0x1cfe39(0x22b)+_0xe898c3,null,'i');if(!_0x5d8be4)return _0x483653(new Error(_0x1cfe39(0x24b)));const _0x347734=parseInt(_0x1ba8df[_0x1cfe39(0x221)])*0x3e8;if(isNaN(_0x347734))return _0x483653(new Error('Thời\x20gian\x20timeout\x20không\x20hợp\x20lệ'));const _0x363e76=setTimeout(async()=>{const _0x28252c=_0x1cfe39;log(_0x28252c(0x1f4),'[createWorkerPromise]:\x20Timeout\x20khi\x20xử\x20lý\x20task\x20'+_0x1ba8df[_0x28252c(0x208)],null,'w','timeout'),await eTimeout(_0x1ba8df[_0x28252c(0x1ef)]),xoaTimeout(_0x363e76),await _0x5d8be4['worker1']({'timeout':!![],'task':_0x1ba8df,'tasksDataBuffer':tasksDataBuffer,'screenDataBuffer':screenDataBuffer,'tele_id':tele_id});},_0x347734);log(_0x1cfe39(0x1f4),'[createWorkerPromise]:\x20'+_0x1ba8df[_0x1cfe39(0x208)]+_0x1cfe39(0x1b8)+_0x347734+_0x1cfe39(0x1c6)+_0x363e76,null,'w');const _0x35e28=async _0x4c40b4=>{const _0xeb5c9b=_0x1cfe39;try{if(_0x4c40b4[_0xeb5c9b(0x1ba)]){log(_0xeb5c9b(0x1f4),_0xeb5c9b(0x256)+_0x1ba8df[_0xeb5c9b(0x208)],null,'i'),xoaTimeout(_0x363e76),_0x3e1bcc(!![]);return;}else{if(!_0x4c40b4[_0xeb5c9b(0x1ba)]){log('main','[handleWorkerMessage]0:\x20Lỗi\x20xử\x20lý\x20task\x20'+_0x1ba8df[_0xeb5c9b(0x208)]+':\x20'+_0x4c40b4[_0xeb5c9b(0x227)],null,![]),_0x483653(new Error(_0x4c40b4[_0xeb5c9b(0x227)]||'Lỗi\x20không\x20xác\x20định'));return;}else{log(_0xeb5c9b(0x1f4),_0xeb5c9b(0x1bb)+_0x1ba8df[_0xeb5c9b(0x208)]+':\x20'+json(_0x4c40b4),null,'c','x'),log(_0xeb5c9b(0x1f4),'[handleWorkerMessage]2:\x20Lỗi\x20xử\x20lý\x20task\x20'+_0x1ba8df['name']+':\x20'+_0x4c40b4[_0xeb5c9b(0x227)],null,![]),_0x483653(new Error(_0x4c40b4['error']||_0xeb5c9b(0x1d3)));return;}}}catch(_0x1d4bd4){log('main','[handleWorkerMessage]:\x20Lỗi\x20nội\x20bộ\x20khi\x20xử\x20lý\x20task\x20'+_0x1ba8df['name']+':\x20'+_0x1d4bd4[_0xeb5c9b(0x23c)],null,![]),xoaTimeout(_0x363e76),_0x483653(_0x1d4bd4);return;}},_0x592420=new Promise(async(_0x467ea8,_0x5cb28a)=>{const _0x21a9dd=_0x1cfe39;try{const _0x27890d=await _0x5d8be4[_0x21a9dd(0x1de)]({'version0':version,'tasksDataBuffer':tasksDataBuffer,'screenDataBuffer':screenDataBuffer,'task':_0x1ba8df,'dataBrw':getAllProfiles,'GenDataProfile0':GenDataProfile,'timgame0':timgame,'tele_id':tele_id}),_0x5323c0=await _0x35e28(_0x27890d);_0x467ea8(_0x5323c0);}catch(_0x29187e){_0x5cb28a(_0x29187e);}}),_0x5c3ba5=await Promise[_0x1cfe39(0x266)]([_0x592420]);log('main',_0x1cfe39(0x24a)+json(_0x5c3ba5),null,'w','@'),log(_0x1cfe39(0x1f4),_0x1cfe39(0x207),null,'w','-');_0x5d8be4&&Thread[_0x1cfe39(0x1cc)]in _0x5d8be4?await Thread[_0x1cfe39(0x1cc)](_0x5d8be4):log('main',_0x1cfe39(0x260),null,![],'x');_0x3e1bcc(_0x5c3ba5);return;}catch(_0x4128fc){log('main',_0x1cfe39(0x254)+_0x4128fc[_0x1cfe39(0x23c)],null,![]),_0x5d8be4&&Thread[_0x1cfe39(0x1cc)]in _0x5d8be4?await Thread[_0x1cfe39(0x1cc)](_0x5d8be4):log(_0x1cfe39(0x1f4),_0x1cfe39(0x260),null,![],'x'),_0x483653(_0x4128fc);}});}async function updateTask(_0x120565,_0x49ee1c){const _0x4b80c7=a0_0x2b845b;if(!http||typeof http[_0x4b80c7(0x1d5)]!==_0x4b80c7(0x1da)){log(_0x4b80c7(0x1f4),_0x4b80c7(0x202),null,![]);return;}return log(_0x4b80c7(0x1f4),_0x4b80c7(0x225)+_0x120565+_0x4b80c7(0x252)+_0x49ee1c['status']+'|'+_0x49ee1c[_0x4b80c7(0x1c2)],null,'i'),await http['updateTask'](_0x4b80c7(0x1f4),_0x120565,_0x49ee1c);}async function processProfile(_0x2c739d){const _0x399b15=a0_0x2b845b;console[_0x399b15(0x25d)](_0x399b15(0x1f4),_0x399b15(0x1ed)+_0x2c739d['name']);const _0x157b35=_0x2c739d['games'];for(const _0x1229ef of _0x157b35){await gameQueue['add'](()=>processGame(_0x1229ef));}}async function getRunningTasks(_0x5133db,_0x121739){const _0x1eada7=a0_0x2b845b,_0x4f1327=[];for(const [_0xb3a509,_0x36f10f]of _0x5133db[_0x1eada7(0x1bd)]()){_0x36f10f===_0x36f10f&&_0x4f1327[_0x1eada7(0x251)](_0xb3a509);}return _0x4f1327;}async function calScreenArr(_0x3970de,_0x2c2891,_0x3ef808,_0x3bf717,_0x572884,_0x1a0319=0x1){const _0x6ca055=a0_0x2b845b,_0x4ebf9d=0x0;let _0x10394c=_0x3970de,_0x5b3805=_0x2c2891,_0x3022a6,_0x401543,_0x716b62=0x1;while(!![]){_0x401543=Math[_0x6ca055(0x1cf)](_0x3ef808/_0x10394c),_0x3022a6=Math[_0x6ca055(0x201)](_0x572884/_0x401543);if(_0x3022a6*_0x5b3805<=_0x3bf717)break;_0x716b62*=0.95,_0x10394c=Math['floor'](_0x3970de*_0x716b62),_0x5b3805=Math[_0x6ca055(0x1cf)](_0x2c2891*_0x716b62);}_0x10394c=Math[_0x6ca055(0x1cf)](_0x10394c*1.26);const _0x1fe784=[];let _0x28b698=0x0;for(let _0x4765ce=0x0;_0x4765ce<_0x1a0319;_0x4765ce++){const _0x3e3652=Math['round'](_0x716b62*0xf4240);Atomics['store'](screenData,0x0,_0x4765ce),Atomics['store'](screenData,0x1,_0x3e3652),Atomics[_0x6ca055(0x262)](screenData,0x2,_0x3970de),Atomics[_0x6ca055(0x262)](screenData,0x3,_0x2c2891),Atomics[_0x6ca055(0x262)](screenData,0x4,_0x10394c),Atomics[_0x6ca055(0x262)](screenData,0x5,_0x5b3805);let _0x3db750=0xa;for(let _0x5b772b=0x0;_0x5b772b<_0x3022a6;_0x5b772b++){const _0x129786=[];for(let _0x3b86d1=0x0;_0x3b86d1<_0x401543;_0x3b86d1++){if(_0x28b698>=_0x572884)break;const _0x397ea1=Math[_0x6ca055(0x1cf)](_0x3b86d1*_0x10394c),_0x4a3c9a=Math['floor'](_0x5b772b*_0x5b3805);if(_0x397ea1>_0x3ef808||_0x4a3c9a>_0x3bf717)continue;Atomics[_0x6ca055(0x262)](screenData,_0x3db750++,0x2),Atomics[_0x6ca055(0x262)](screenData,_0x3db750++,_0x397ea1),Atomics[_0x6ca055(0x262)](screenData,_0x3db750++,_0x4a3c9a),_0x28b698++;}if(_0x28b698>=_0x572884)break;}break;}return{'screenData':screenData,'scale':_0x716b62,'rows':_0x3022a6,'cols':_0x401543,'total':_0x28b698,'positions':_0x1fe784};}function a0_0x1c77(_0x531d0c,_0x2c71c1){const _0x1dc0aa=a0_0x1dc0();return a0_0x1c77=function(_0x1c7796,_0x25aef5){_0x1c7796=_0x1c7796-0x1b6;let _0x5b975e=_0x1dc0aa[_0x1c7796];return _0x5b975e;},a0_0x1c77(_0x531d0c,_0x2c71c1);}async function xoaTimeout(_0x34bfac){const _0x1142c5=a0_0x2b845b;try{clearTimeout(_0x34bfac),log(_0x1142c5(0x1f4),_0x1142c5(0x21c)+_0x34bfac,null,'w',_0x1142c5(0x23a));}catch(_0x4bf8f0){log(_0x1142c5(0x1f4),_0x1142c5(0x233)+_0x4bf8f0,null,![]);}}async function delay(_0x7a907a){return new Promise(_0x2f4ec7=>{setTimeout(_0x2f4ec7,_0x7a907a);});}async function eTimeout(_0x49ec8a){const _0x2083ad=a0_0x2b845b;return log(_0x2083ad(0x1f4),_0x2083ad(0x219),null,'w'),Atomics[_0x2083ad(0x262)](tasksData,_0x49ec8a,0x1),!![];}function a0_0x1dc0(){const _0x5753a1=['https://raw.githubusercontent.com/resistor3300/longCTools/refs/heads/main/package.json','\x20treo\x20đang\x20chạy\x20từ\x20','[checkUpdate]Bạn\x20đang\x20chạy\x20phiên\x20bản\x20mới\x20nhất','getListProfiles','Processing\x20profile:\x20','maxTask','taskIndex','url','Tổng\x20độ\x20phân\x20giải\x20màn\x20hình:\x20','.genlogin','\x20nè\x20bro!','main','[processTask]:\x20Xử\x20lý\x20task:\x20','max','catch','[processTasks]:\x20Chưa\x20có\x20task\x20mới\x20nào\x20để\x20xử\x20lý','utf-8','BYE\x20BYE','0x0','profiles','now','Heap\x20Used:\x20',',\x20mỗi\x20cột:\x20','330648mwsrmI','ceil','[updateTask]:\x20Lỗi\x20cập\x20nhật\x20task','readFile','Đã\x20có\x20phiên\x20bản\x20mới:\x20','tọa\x20độ\x20hiển\x20thị\x20trình\x20duyệt\x20','exit','[createWorkerPromise]:\x20main\x20kết\x20thúc\x20worker','name','join','Users','[checkUpdate]\x20Lỗi\x20parse\x20JSON:\x20','độ\x20phân\x20giải\x20màn\x20hình\x20vật\x20lý\x20Width\x20x\x20Height\x20','Lỗi\x20chung:\x20','thư\x20mục\x20chứa\x20data\x20genlogin','timestamp','genDataProfiles','[processTask]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20','169299IGvlTi','dirname','value','Số\x20lượng\x20màn\x20hình\x20vật\x20lý\x20để\x20hiển\x20thị','\x20rồi\x20bro!','\x20MB,\x20RSS:\x20','[createWorkerPromise]:\x20createWorkerPromise\x20task:\x20','[eTimeout]main:\x20turn\x20on\x20timeout\x20flag','94885HRzYvJ','split','[xoaTimeout]main:\x20Xóa\x20timeout:','./worker-api1.js','[processTasks]:\x20Phát\x20Hiện\x20','has','version','maxTime','[processTasks]:\x20task.status:\x20','getTeleId','screens','[updateTask]:\x20update\x20task\x20','Bộ\x20nhớ\x20vượt\x20quá\x20Heap\x20Used:\x20','error','Mở\x20App\x20genlogin\x20trước\x20nhé\x20bro,kiểm\x20tra\x20coi\x20mở\x20chưa\x20bro','tắt\x20genlogin\x20ok','string','[createWorkerPromise]:\x20','rss','Lỗi:\x20','OK\x20rồi\x20man.\x20tắt\x20genlogin\x20đi\x20bro','SERVER_HOST','[checkUpdate]Có\x20phiên\x20bản\x20mới:\x20','tele_id','compareExchange','[xoaTimeout]main:\x20','[processTasks]:\x20currentTime.timestamp:\x20','tele','cols','heapUsed','browserWidthHeight','Tỷ\x20lệ\x20thu\x20nhỏ:\x20','clrTimeout','No\x20task\x20found','message','httpGet','getAllProfiles','138EwEnuG','[processTask]:\x20DONE\x20TASK\x20','APIKEY\x20not\x20found!','set','\x20task\x20trong\x20hàng\x20đợi','\x20task\x20đang\x20chạy','nextrunstamp','Không\x20có\x20task\x20hoặc\x20chưa\x20tới\x20thời\x20gian\x20chạy','get','Lên\x20Web\x20lấy\x20APIKEY\x20nhen\x20Bro','TA\x20ĐI\x20ĐÂY','[createWorkerPromise]:\x20main\x20','Không\x20thể\x20tạo\x20worker','Hoặc\x20Đăng\x20nhập\x20lại\x20App\x20genlogin\x20nhé\x20bro','chưa\x20có\x20task\x20mới','3486030YteRot','userInfo','username','push','\x20with\x20data:\x20','🟢\x20Dung\x20lượng\x20trống:\x20','[createWorkerPromise]:\x20Lỗi\x20không\x20xác\x20định:\x20','4058800TNiYeO','[handleWorkerMessage]:\x20Đã\x20xử\x20lý\x20task\x20','\x20MB,/1GB!:\x20Thu\x20hồi\x20nhanh\x20còn\x20kịp','\x20MB','Start\x20App:\x20','Task\x20phải\x20là\x20một\x20đối\x20tượng','3VkUaFT','width','log','screenWidthHeight','số\x20màn\x20hình:\x20','[createWorkerPromise]:\x20Worker\x20không\x20hợp\x20lệ\x20hoặc\x20đã\x20bị\x20giải\x20phóng:','trim','store','checkbox','Drive\x20not\x20found','APIKEY','race','\x20Lỗi\x20','|screenWidthHeight:','\x20set\x20timeout:\x20','status','success','[handleWorkerMessage]1:Lỗi\x20xử\x20lý\x20task\x20','round','entries','104IbaSPR','object','[checkUpdate]Lỗi\x20khi\x20đọc\x20file\x20package.json:\x20','env','nextRun','nextrun','toFixed','package.json','\x20Timeout\x20ID:\x20','pending','running','Kiểm\x20tra\x20task\x20sau\x2060\x20giây','Stderr:\x20','length','terminate','❌\x20Lỗi\x20kiểm\x20tra\x20ổ\x20đĩa:\x20','parse','floor','[eTimeout]main:\x20reset\x20timeout','size','[processTasks]:\x20Đã\x20xóa\x20trạng\x20thái\x20đang\x20chạy\x20task\x20','Lỗi\x20không\x20xác\x20định','from','updateTask','cwd','Thêm\x20APIKEY\x20vào\x20file\x20.env\x20nhen\x20Bro','\x20vào\x20hàng\x20đợi','2680756tArnZW','function','tự\x20động\x20sắp\x20xếp\x20vị\x20trí\x20hiển\x20thị\x20trình\x20duyệt\x20','screenData','Lỗi\x20App\x20genlogin\x20nhé\x20bro!','worker1','1141841nXmhKS','Memory','[processTasks]:\x20FirstRun','[processTasks]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20','LongCAutoAirdrop','input','chờ\x2030\x20giây\x20rồi\x20thử\x20lại','checkDisk','completed','[processTasks]:\x20task.nextrunstamp:\x20'];a0_0x1dc0=function(){return _0x5753a1;};return a0_0x1dc0();}async function rstTimeout(_0x52710a){const _0x39451a=a0_0x2b845b;return log(_0x39451a(0x1f4),_0x39451a(0x1d0),null,'w'),Atomics[_0x39451a(0x232)](tasksData,_0x52710a,0x1,0x2),!![];}async function closeGenlogin(){const _0x30a790=a0_0x2b845b;try{log('main','Tự\x20động\x20tắt\x20genlogin',null,'w','-'),exec('taskkill\x20/IM\x20genLogin.exe\x20/F',(_0x3e003d,_0x59d7a9,_0x19f6e0)=>{const _0x4a2444=a0_0x1c77;if(_0x3e003d){log(_0x4a2444(0x1f4),_0x4a2444(0x22d)+_0x3e003d[_0x4a2444(0x23c)],null,![]);return;}if(_0x19f6e0){log(_0x4a2444(0x1f4),_0x4a2444(0x1ca)+_0x19f6e0,null,![]);return;}log('main',_0x4a2444(0x229));});}catch(_0x2ea25e){log(_0x30a790(0x1f4),'closeGenlogin:\x20'+_0x2ea25e,null,![]);}}async function checkUpdate(){const _0x1756ec=a0_0x2b845b;try{const _0x2b43bb=_0x1756ec(0x1e9),_0x29ec9b=a0_0x52e19d[_0x1756ec(0x209)](process[_0x1756ec(0x1d6)](),_0x1756ec(0x1c5)),_0x4d3dcc=await a0_0x98d892['promises'][_0x1756ec(0x203)](_0x29ec9b,_0x1756ec(0x1f9)),_0x2dddbd=JSON[_0x1756ec(0x1ce)](_0x4d3dcc),_0x550e05=_0x2dddbd[_0x1756ec(0x220)];log(_0x1756ec(0x1f4),'[checkUpdate]Version:\x20'+_0x550e05,null,'w','-');const _0x31bc55=await http[_0x1756ec(0x23d)](_0x1756ec(0x1f4),_0x2b43bb);await delay(0x3e8);if(_0x31bc55)try{const _0x59d8cc=typeof _0x31bc55===_0x1756ec(0x22a)?JSON[_0x1756ec(0x1ce)](_0x31bc55):_0x31bc55,_0x4b2f9c=_0x59d8cc[_0x1756ec(0x220)];await delay(0x3e8),_0x4b2f9c!=_0x550e05?(log(_0x1756ec(0x1f4),_0x1756ec(0x230)+_0x4b2f9c,null,'w'),tele_id&&tele_id[_0x1756ec(0x231)]&&await http[_0x1756ec(0x235)](_0x1756ec(0x1f4),tele_id[_0x1756ec(0x231)],_0x1756ec(0x204)+_0x4b2f9c)):log(_0x1756ec(0x1f4),_0x1756ec(0x1eb),null,'w');}catch(_0x333e54){log(_0x1756ec(0x1f4),_0x1756ec(0x20b)+_0x333e54[_0x1756ec(0x23c)],null,![]);}return _0x550e05;}catch(_0x4f1ed8){return log('main',_0x1756ec(0x1c0)+_0x4f1ed8,null,![]),null;}}async function checkDisk(){const _0x4b3f12=a0_0x2b845b;try{const _0x37e4ab=await checkDiskSpace('C:');log(_0x4b3f12(0x1e6),_0x4b3f12(0x253)+_0x37e4ab[_0x4b3f12(0x1c4)](0x2)+_0x4b3f12(0x258),null,'w','+'),_0x37e4ab<=MIN_FREE_SPACE_MB&&process[_0x4b3f12(0x206)]();}catch(_0x2aa741){log('checkDisk',_0x4b3f12(0x1cd)+_0x2aa741[_0x4b3f12(0x23c)],null,'w','+');}}function checkDiskSpace(_0x224ce8='C:'){return new Promise((_0x59ba5c,_0x14c33a)=>{exec('wmic\x20logicaldisk\x20get\x20caption,freespace',(_0x2cc855,_0x547181)=>{const _0x36f2a7=a0_0x1c77;if(_0x2cc855){_0x14c33a(_0x2cc855);return;}const _0x3aadf0=_0x547181[_0x36f2a7(0x261)]()[_0x36f2a7(0x21b)]('\x0a');for(const _0x4d69ec of _0x3aadf0){const _0x41d583=_0x4d69ec[_0x36f2a7(0x261)]()[_0x36f2a7(0x21b)](/\s+/);if(_0x41d583[0x0]===_0x224ce8){const _0x2000f5=Math[_0x36f2a7(0x1bc)](parseInt(_0x41d583[0x1],0xa)/0x400/0x400);_0x59ba5c(_0x2000f5);return;}}_0x14c33a(new Error(_0x36f2a7(0x264)));});});}async function logMemoryUsage(){const _0x886c3e=a0_0x2b845b,_0x1f6f27=process['memoryUsage']();log(_0x886c3e(0x1e0),_0x886c3e(0x1fe)+(_0x1f6f27['heapUsed']/0x400/0x400)[_0x886c3e(0x1c4)](0x2)+_0x886c3e(0x217)+(_0x1f6f27[_0x886c3e(0x22c)]/0x400/0x400)[_0x886c3e(0x1c4)](0x2)+_0x886c3e(0x258),null,'w','+'),_0x1f6f27[_0x886c3e(0x22c)]>0x400*0x400*0x400*0x5&&(tele_id[_0x886c3e(0x231)]&&await http[_0x886c3e(0x235)]('Memory',tele_id[_0x886c3e(0x231)],_0x886c3e(0x226)+(_0x1f6f27[_0x886c3e(0x237)]/0x400/0x400)[_0x886c3e(0x1c4)](0x2)+_0x886c3e(0x257)),log(_0x886c3e(0x1e0),'Bộ\x20nhớ\x20vượt\x20quá\x201GB!\x20Thu\x20hồi...',null,'w','+'),global['gc']&&(global['gc'](),log(_0x886c3e(0x1e0),'Garbage\x20Collector\x20đã\x20chạy!',null,'i','+')));}