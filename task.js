const a0_0x20b7eb=a0_0x1d9e;(function(_0x497029,_0x4b320c){const _0xe9c871=a0_0x1d9e,_0x1d86fd=_0x497029();while(!![]){try{const _0x59f902=-parseInt(_0xe9c871(0x1ca))/0x1*(parseInt(_0xe9c871(0x1bf))/0x2)+parseInt(_0xe9c871(0x157))/0x3*(parseInt(_0xe9c871(0x1ac))/0x4)+-parseInt(_0xe9c871(0x160))/0x5*(-parseInt(_0xe9c871(0x16f))/0x6)+parseInt(_0xe9c871(0x1f1))/0x7+parseInt(_0xe9c871(0x1cf))/0x8+-parseInt(_0xe9c871(0x184))/0x9+parseInt(_0xe9c871(0x159))/0xa*(-parseInt(_0xe9c871(0x1b3))/0xb);if(_0x59f902===_0x4b320c)break;else _0x1d86fd['push'](_0x1d86fd['shift']());}catch(_0x467095){_0x1d86fd['push'](_0x1d86fd['shift']());}}}(a0_0x5cff,0x814ab));import'dotenv/config';import a0_0x302b3d from'os';function a0_0x1d9e(_0x5b6028,_0x10d238){const _0x5cff8d=a0_0x5cff();return a0_0x1d9e=function(_0x1d9ecc,_0xe723a0){_0x1d9ecc=_0x1d9ecc-0x156;let _0x145870=_0x5cff8d[_0x1d9ecc];return _0x145870;},a0_0x1d9e(_0x5b6028,_0x10d238);}import a0_0x445df6 from'fs';import a0_0x13b2d9 from'path';import{fileURLToPath}from'url';import a0_0x580d1e from'./modules/Genlogin.js';import a0_0x5b5f4f from'./modules/http.js';import{log,json}from'./modules/logger.js';import a0_0x51fbe1 from'node-machine-id';import{spawn,Thread,Worker}from'threads';import{exec}from'child_process';import a0_0x27c591 from'p-queue';let tasksDataBuffer,tasksData,screenData,screenDataBuffer;const __filename=fileURLToPath(import.meta[a0_0x20b7eb(0x16a)]),__dirname=a0_0x13b2d9[a0_0x20b7eb(0x1d8)](__filename),{machine_id,machineIdSync}=a0_0x51fbe1,machineId=machineIdSync()['substring'](0x0,0x8),appName=a0_0x20b7eb(0x185)+'-'+machineId,nameFile=a0_0x20b7eb(0x1d2)+'-'+machineId,genDataFile=a0_0x20b7eb(0x165)+'-'+machineId,appSetings={'maxTaskThreads':{'type':a0_0x20b7eb(0x1b1),'value':0x3,'note':'Số\x20lượng\x20task\x20chạy\x20song\x20song'},'screens':{'type':'input','value':0x1,'note':'Số\x20lượng\x20màn\x20hình\x20vật\x20lý\x20để\x20hiển\x20thị'},'screenWidthHeight':{'type':a0_0x20b7eb(0x1b1),'value':a0_0x20b7eb(0x1ab),'note':'độ\x20phân\x20giải\x20màn\x20hình\x20vật\x20lý\x20Width\x20x\x20Height\x20'},'browserWidthHeight':{'type':a0_0x20b7eb(0x1b1),'value':a0_0x20b7eb(0x16c),'note':a0_0x20b7eb(0x1c3)},'autoSetBrowserPosition':{'type':a0_0x20b7eb(0x1cc),'value':'y','note':a0_0x20b7eb(0x1ec)},'customBrowserPosition':{'type':'input','value':a0_0x20b7eb(0x18b),'note':a0_0x20b7eb(0x1bb)},'genDataFolder':{'type':a0_0x20b7eb(0x1b1),'value':a0_0x13b2d9[a0_0x20b7eb(0x18d)]('C:','Users',a0_0x302b3d[a0_0x20b7eb(0x1e3)]()[a0_0x20b7eb(0x1cd)],a0_0x20b7eb(0x19a)),'note':'thư\x20mục\x20chứa\x20data\x20genlogin'}};let genlogin,http,profileNameId,profileId,browser,getAllProfiles,GenDataProfile,screenArrWorker,timgame=!![],taskQueue,maxTask=0x1,taskStatus,firstRun=!![],appStatus=0x0,tele_id,version;async function main(){const _0x49c5d0=a0_0x20b7eb;try{log(_0x49c5d0(0x1b4),_0x49c5d0(0x1d0)+appName,null,'w','='),await delay(0x3e8);if(!process[_0x49c5d0(0x1d3)][_0x49c5d0(0x16e)]){log(_0x49c5d0(0x1b4),_0x49c5d0(0x17a),null,![]),log('main',_0x49c5d0(0x1de),null,'w'),log(_0x49c5d0(0x1b4),_0x49c5d0(0x1f5),null,'w'),log(_0x49c5d0(0x1b4),_0x49c5d0(0x166),null,'w'),log(_0x49c5d0(0x1b4),'TA\x20ĐI\x20ĐÂY',null,'w','=');return;}genlogin=new a0_0x580d1e('',!![]),http=new a0_0x5b5f4f(process['env'][_0x49c5d0(0x1ea)],process[_0x49c5d0(0x1d3)][_0x49c5d0(0x16e)],!![]),tele_id=await http[_0x49c5d0(0x1b5)](_0x49c5d0(0x1b4)),version=await checkUpdate();tele_id[_0x49c5d0(0x1eb)]&&await http[_0x49c5d0(0x186)]('main',tele_id['tele_id'],_0x49c5d0(0x1d0)+appName+_0x49c5d0(0x171));let _0x44d13e,_0x17d844=0x1,_0x3aca05=0x1,_0x2a3d9e=0x0,_0x1f8f4e;while(!![]){try{appStatus=0x1;if(_0x17d844){if(!_0x2a3d9e){_0x3aca05&&(_0x1f8f4e=await genlogin[_0x49c5d0(0x1b7)](_0x49c5d0(0x1b4)));if(!_0x1f8f4e||!_0x3aca05){const _0x13461b=await http[_0x49c5d0(0x165)](_0x49c5d0(0x1b4),genDataFile);!_0x13461b[_0x49c5d0(0x197)]?(log(_0x49c5d0(0x1b4),_0x49c5d0(0x190),null,'w'),log(_0x49c5d0(0x1b4),_0x49c5d0(0x1f3),null,'w'),log(_0x49c5d0(0x1b4),''+_0x13461b[_0x49c5d0(0x1d9)],null,![]),log('main',_0x49c5d0(0x196),null,'i'),tele_id&&tele_id[_0x49c5d0(0x1eb)]&&await http[_0x49c5d0(0x186)](_0x49c5d0(0x1b4),tele_id[_0x49c5d0(0x1eb)],_0x49c5d0(0x158))):GenDataProfile=_0x13461b[_0x49c5d0(0x197)];}else{GenDataProfile=await _0x1f8f4e[_0x49c5d0(0x156)],await http[_0x49c5d0(0x165)](_0x49c5d0(0x1b4),genDataFile,GenDataProfile),_0x3aca05=0x0;continue;}}if(await genlogin[_0x49c5d0(0x1b7)](_0x49c5d0(0x1b4))){log(_0x49c5d0(0x1b4),_0x49c5d0(0x15a),null,'w'),_0x2a3d9e=0x1,await closeGenlogin(),await delay(0xbb8);continue;}_0x17d844=0x0;}await delay(0x3e8),getAllProfiles=await http[_0x49c5d0(0x189)]('main',appName,nameFile,GenDataProfile,appSetings);if(!getAllProfiles[_0x49c5d0(0x197)]||!getAllProfiles||getAllProfiles['value'][_0x49c5d0(0x1be)]<=0x0){log('main',_0x49c5d0(0x191),null,![]),log(_0x49c5d0(0x1b4),_0x49c5d0(0x196),null,'i');throw new Error(_0x49c5d0(0x1a9));}log(_0x49c5d0(0x1b4),_0x49c5d0(0x194));const _0x3d10c8=Object[_0x49c5d0(0x1f6)](getAllProfiles[_0x49c5d0(0x197)]);maxTask=parseInt(getAllProfiles[_0x49c5d0(0x18f)]);const _0x3039d9=await processTasks(_0x3d10c8);if(taskQueue[_0x49c5d0(0x173)]>0x0){const _0x1565d2=await getRunningTasks(taskStatus,_0x49c5d0(0x195));log(_0x49c5d0(0x1b4),taskQueue['size']+_0x49c5d0(0x1df),null,'w'),log(_0x49c5d0(0x1b4),taskQueue[_0x49c5d0(0x173)]+_0x49c5d0(0x1c0),null,'w'),log(_0x49c5d0(0x1b4),'Running\x20Task:'+_0x1565d2,null,'w');}else!_0x3039d9&&log(_0x49c5d0(0x1b4),_0x49c5d0(0x1b9),null,'w');log(_0x49c5d0(0x1b4),'[main]\x20Task\x20Status:\x20'+Array[_0x49c5d0(0x1e8)](taskStatus['entries']()),null,'c'),log(_0x49c5d0(0x1b4),_0x49c5d0(0x1ef),null,'i'),await delay(0x7530);}catch(_0x3fb57e){log('main',_0x49c5d0(0x1a6)+_0x3fb57e,null,![]),log('main',_0x49c5d0(0x164),null,'i'),tele_id&&tele_id[_0x49c5d0(0x1eb)]&&await http['tele'](_0x49c5d0(0x1b4),tele_id[_0x49c5d0(0x1eb)],appName+_0x49c5d0(0x1da)+_0x3fb57e+_0x49c5d0(0x1a1)),await delay(0x7530);}}}catch(_0x28ab88){log('main',_0x49c5d0(0x1c8)+_0x28ab88,null,![]),appStatus=0x0;}}main()[a0_0x20b7eb(0x175)](console[a0_0x20b7eb(0x1d9)]);async function processTasks(_0x3c29c1){const _0x3d65d7=a0_0x20b7eb;try{if(firstRun){log(_0x3d65d7(0x1b4),_0x3d65d7(0x1f0),null,'c','*'),taskQueue=new a0_0x27c591({'concurrency':maxTask}),tasksDataBuffer=new SharedArrayBuffer(_0x3c29c1[_0x3d65d7(0x1be)]*0x4),tasksData=new Int32Array(tasksDataBuffer);for(var _0x297fd3=0x0;_0x297fd3<tasksData[_0x3d65d7(0x1be)];_0x297fd3++){Atomics[_0x3d65d7(0x1a0)](tasksData,_0x297fd3,0x2);}firstRun=![],taskStatus=new Map();let _0x330c6e=0x0;for(const [_0x52e58b,_0x4d6386]of _0x3c29c1){_0x52e58b<parseInt(getAllProfiles['maxTask'])&&(_0x330c6e+=parseInt(_0x4d6386[_0x3d65d7(0x1f4)]));}screenDataBuffer=new SharedArrayBuffer((parseInt(_0x330c6e)*0x3+0xd)*0x4),screenData=new Int32Array(screenDataBuffer);let _0x323f9d=[];for(let _0x2950ea=0x0;_0x2950ea<parseInt(getAllProfiles['screens']);_0x2950ea++){const _0x45391b=getAllProfiles[_0x3d65d7(0x1f2)][_0x3d65d7(0x1e6)]('x');_0x323f9d[_0x3d65d7(0x18a)]({'width':parseInt(_0x45391b[0x0]),'height':parseInt(_0x45391b[0x1])});}const _0x1ed64c=getAllProfiles[_0x3d65d7(0x17b)]['split']('x'),_0x3a22b1=parseInt(_0x1ed64c[0x0]),_0x2aba52=parseInt(_0x1ed64c[0x1]),_0x470144=_0x330c6e,_0x3a4399=_0x323f9d[_0x3d65d7(0x1b2)]((_0x29c201,_0x5bd16f)=>_0x29c201+_0x5bd16f['width'],0x0),_0x29d8fb=Math[_0x3d65d7(0x163)](..._0x323f9d['map'](_0x495c63=>_0x495c63['height'])),_0x5cb19a=await calScreenArr(_0x3a22b1,_0x2aba52,_0x3a4399,_0x29d8fb,_0x330c6e);screenData=_0x5cb19a['screenData'],log(_0x3d65d7(0x1b4),'số\x20màn\x20hình:\x20'+getAllProfiles['screens'],null,'w'),log(_0x3d65d7(0x1b4),'Tổng\x20độ\x20phân\x20giải\x20màn\x20hình:\x20'+_0x3a4399+'x'+_0x29d8fb,null,'w'),log('main',_0x3d65d7(0x1bd)+_0x5cb19a[_0x3d65d7(0x1d6)]+',\x20mỗi\x20cột:\x20'+_0x5cb19a[_0x3d65d7(0x1b0)],null,'w'),log(_0x3d65d7(0x1b4),_0x3d65d7(0x187)+_0x5cb19a[_0x3d65d7(0x17d)],null,'w'),log(_0x3d65d7(0x1b4),_0x3d65d7(0x1c9)+getAllProfiles['screens']+_0x3d65d7(0x1d4)+getAllProfiles['screenWidthHeight'],null,'w'),await delay(0x3e8);}const _0x1167ff=[];for(const [_0x191eef,_0xcee579]of _0x3c29c1){_0xcee579[_0x3d65d7(0x167)]=_0x191eef;const _0x53b2a8=await genlogin['nowTime'](_0x3d65d7(0x1b4));log('main',_0x3d65d7(0x1e7)+_0x53b2a8[_0x3d65d7(0x1b6)],null,'i'),log(_0x3d65d7(0x1b4),_0x3d65d7(0x1dd)+_0xcee579[_0x3d65d7(0x15d)],null,'i'),log('main',_0x3d65d7(0x1a8)+_0xcee579[_0x3d65d7(0x1d7)],null,'i'),log(_0x3d65d7(0x1b4),_0x3d65d7(0x1ba)+_0x53b2a8[_0x3d65d7(0x1b6)]+'|'+(parseInt(_0xcee579[_0x3d65d7(0x15d)])+parseInt(_0xcee579[_0x3d65d7(0x1bc)]))+'|'+parseInt(_0xcee579[_0x3d65d7(0x1d7)]),null,'w');if(_0x53b2a8[_0x3d65d7(0x1b6)]>=_0xcee579['nextrunstamp']&&parseInt(_0xcee579[_0x3d65d7(0x1d7)])===0x0){log(_0x3d65d7(0x1b4),_0x3d65d7(0x19b)+_0xcee579[_0x3d65d7(0x1e1)]+'\x20vào\x20hàng\x20đợi',null,'i'),taskStatus[_0x3d65d7(0x178)](_0xcee579['name'],_0x3d65d7(0x173));const _0xfa67aa=await updateTask(_0xcee579['name'],{'status':0x1,'nextRun':0x1});_0x1167ff[_0x3d65d7(0x18a)](taskQueue[_0x3d65d7(0x1a3)](()=>processTask(_0xcee579))),taskStatus[_0x3d65d7(0x178)](_0xcee579[_0x3d65d7(0x1e1)],_0x3d65d7(0x195)),await delay(0x7d0);}else{if(_0x53b2a8['timestamp']>parseInt(_0xcee579[_0x3d65d7(0x15d)])+parseInt(_0xcee579[_0x3d65d7(0x1bc)])&&parseInt(_0xcee579[_0x3d65d7(0x1d7)])===0x1&&(taskStatus[_0x3d65d7(0x17c)](_0xcee579[_0x3d65d7(0x1e1)])===_0x3d65d7(0x1d5)||!taskStatus['has'](_0xcee579[_0x3d65d7(0x1e1)]))){log(_0x3d65d7(0x1b4),_0x3d65d7(0x1c6)+_0xcee579[_0x3d65d7(0x1e1)]+_0x3d65d7(0x15c)+_0xcee579[_0x3d65d7(0x1e2)],null,'w','*');const _0x21f04e=await updateTask(_0xcee579['name'],{'status':0x0,'nextRun':0x1});log('main','[processTasks]:\x20Đã\x20xóa\x20trạng\x20thái\x20đang\x20chạy\x20task\x20'+_0xcee579[_0x3d65d7(0x1e1)],null,'i','*');}}}return _0x1167ff[_0x3d65d7(0x1be)]>0x0?!![]:(log(_0x3d65d7(0x1b4),_0x3d65d7(0x1e9),null,'w'),null);}catch(_0x5e21c3){return log(_0x3d65d7(0x1b4),'[processTasks]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20'+_0x5e21c3,null,![]),null;}}async function processTask(_0x482307){const _0x6e007b=a0_0x20b7eb;try{log(_0x6e007b(0x1b4),_0x6e007b(0x1db)+_0x482307[_0x6e007b(0x1e1)],null,'i','=');if(!_0x482307||typeof _0x482307!==_0x6e007b(0x1dc))throw new Error(_0x6e007b(0x1ae));const _0x576791=createWorkerPromise(_0x482307),_0x2d4d97=await _0x576791;log(_0x6e007b(0x1b4),_0x6e007b(0x1c4)+_0x482307['name'],null,'w','DT');const _0x653209=await updateTask(_0x482307['name'],{'status':0x0,'nextRun':0x1});return taskStatus[_0x6e007b(0x178)](_0x482307[_0x6e007b(0x1e1)],_0x6e007b(0x1d5)),await delay(0x1388),_0x2d4d97;}catch(_0x1d20b3){return log(_0x6e007b(0x1b4),'[processTask]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20'+_0x1d20b3,null,![]),await updateTask(_0x482307[_0x6e007b(0x1e1)],{'status':0x0,'nextRun':0x1}),null;}}async function createWorkerPromise(_0x30daca){const _0x4a3e23=a0_0x20b7eb;return log(_0x4a3e23(0x1b4),_0x4a3e23(0x180)+_0x30daca[_0x4a3e23(0x1e1)],null,'i','-'),new Promise(async(_0xfb3d8f,_0x40fa53)=>{const _0x38b6fb=_0x4a3e23;let _0x273cdc;try{if(!_0x30daca||typeof _0x30daca!==_0x38b6fb(0x1dc))return _0x40fa53(new Error(_0x38b6fb(0x1ae)));const _0x478d86=_0x30daca[_0x38b6fb(0x177)]==='api'?_0x38b6fb(0x16b):_0x38b6fb(0x199);_0x273cdc=await spawn(new Worker(_0x478d86)),log(_0x38b6fb(0x1b4),_0x38b6fb(0x198)+_0x478d86,null,'i');if(!_0x273cdc)return _0x40fa53(new Error(_0x38b6fb(0x1b8)));const _0x77d4d2=parseInt(_0x30daca[_0x38b6fb(0x1bc)])*0x3e8;if(isNaN(_0x77d4d2))return _0x40fa53(new Error(_0x38b6fb(0x192)));const _0x38caf2=setTimeout(async()=>{const _0x5e17b8=_0x38b6fb;log('main',_0x5e17b8(0x17e)+_0x30daca['name'],null,'w',_0x5e17b8(0x1a4)),await eTimeout(_0x30daca[_0x5e17b8(0x167)]),xoaTimeout(_0x38caf2),await _0x273cdc[_0x5e17b8(0x169)]({'timeout':!![],'task':_0x30daca,'tasksDataBuffer':tasksDataBuffer,'screenDataBuffer':screenDataBuffer,'tele_id':tele_id});},_0x77d4d2);log('main',_0x38b6fb(0x198)+_0x30daca['name']+_0x38b6fb(0x15b)+_0x77d4d2+'\x20Timeout\x20ID:\x20'+_0x38caf2,null,'w');const _0x2789b0=async _0x5509d5=>{const _0x56bbbb=_0x38b6fb;try{if(_0x5509d5[_0x56bbbb(0x1e4)]){log(_0x56bbbb(0x1b4),_0x56bbbb(0x1c2)+_0x30daca['name'],null,'i'),xoaTimeout(_0x38caf2),_0xfb3d8f(!![]);return;}else{if(!_0x5509d5['success']){log(_0x56bbbb(0x1b4),_0x56bbbb(0x1cb)+_0x30daca[_0x56bbbb(0x1e1)]+':\x20'+_0x5509d5[_0x56bbbb(0x1d9)],null,![]),_0x40fa53(new Error(_0x5509d5['error']||_0x56bbbb(0x1c1)));return;}else{log(_0x56bbbb(0x1b4),_0x56bbbb(0x19d)+_0x30daca[_0x56bbbb(0x1e1)]+':\x20'+json(_0x5509d5),null,'c','x'),log(_0x56bbbb(0x1b4),_0x56bbbb(0x1ed)+_0x30daca['name']+':\x20'+_0x5509d5[_0x56bbbb(0x1d9)],null,![]),_0x40fa53(new Error(_0x5509d5[_0x56bbbb(0x1d9)]||_0x56bbbb(0x1c1)));return;}}}catch(_0x4c3691){log('main',_0x56bbbb(0x188)+_0x30daca[_0x56bbbb(0x1e1)]+':\x20'+_0x4c3691[_0x56bbbb(0x1a7)],null,![]),xoaTimeout(_0x38caf2),_0x40fa53(_0x4c3691);return;}},_0x55872d=new Promise(async(_0x11819e,_0x192235)=>{const _0x59f19e=_0x38b6fb;try{const _0x7d7cc1=await _0x273cdc[_0x59f19e(0x169)]({'version0':version,'tasksDataBuffer':tasksDataBuffer,'screenDataBuffer':screenDataBuffer,'task':_0x30daca,'dataBrw':getAllProfiles,'GenDataProfile0':GenDataProfile,'timgame0':timgame,'tele_id':tele_id}),_0x4dcb73=await _0x2789b0(_0x7d7cc1);_0x11819e(_0x4dcb73);}catch(_0x5a1f01){_0x192235(_0x5a1f01);}}),_0x21858e=await Promise[_0x38b6fb(0x162)]([_0x55872d]);log(_0x38b6fb(0x1b4),'[createWorkerPromise]:\x20main\x20'+json(_0x21858e),null,'w','@'),log(_0x38b6fb(0x1b4),_0x38b6fb(0x172),null,'w','-'),await Thread[_0x38b6fb(0x19c)](_0x273cdc),_0xfb3d8f(_0x21858e);return;}catch(_0x362bda){log(_0x38b6fb(0x1b4),_0x38b6fb(0x1a2)+_0x362bda[_0x38b6fb(0x1a7)],null,![]),await Thread[_0x38b6fb(0x19c)](_0x273cdc),_0x40fa53(_0x362bda);}});}async function updateTask(_0x37d4ed,_0x35cdcd){const _0x3165b2=a0_0x20b7eb;if(!http||typeof http[_0x3165b2(0x170)]!==_0x3165b2(0x1d1)){log('main','[updateTask]:\x20Lỗi\x20cập\x20nhật\x20task',null,![]);return;}return log(_0x3165b2(0x1b4),_0x3165b2(0x161)+_0x37d4ed+_0x3165b2(0x179)+_0x35cdcd['status']+'|'+_0x35cdcd[_0x3165b2(0x18c)],null,'i'),await http[_0x3165b2(0x170)](_0x3165b2(0x1b4),_0x37d4ed,_0x35cdcd);}async function processProfile(_0x2164d7){const _0x533cb9=a0_0x20b7eb;console[_0x533cb9(0x181)](_0x533cb9(0x1b4),_0x533cb9(0x15f)+_0x2164d7[_0x533cb9(0x1e1)]);const _0x528eef=_0x2164d7['games'];for(const _0x4f217b of _0x528eef){await gameQueue[_0x533cb9(0x1a3)](()=>processGame(_0x4f217b));}}async function getRunningTasks(_0xca6e1e,_0x2819){const _0x236370=a0_0x20b7eb,_0x2c4a5f=[];for(const [_0x116dc9,_0x56d7ac]of _0xca6e1e[_0x236370(0x1f6)]()){_0x56d7ac===_0x56d7ac&&_0x2c4a5f[_0x236370(0x18a)](_0x116dc9);}return _0x2c4a5f;}async function calScreenArr(_0x3d56f2,_0x43ecc7,_0x1bcd25,_0x556c42,_0x282970,_0x3b94dc=0x1){const _0x5440c3=a0_0x20b7eb,_0xf4e091=0x0;let _0x5a2ced=_0x3d56f2,_0xd1eed3=_0x43ecc7,_0x255e6c,_0x6a7683,_0x3595ef=0x1;while(!![]){_0x6a7683=Math[_0x5440c3(0x15e)](_0x1bcd25/_0x5a2ced),_0x255e6c=Math[_0x5440c3(0x1af)](_0x282970/_0x6a7683);if(_0x255e6c*_0xd1eed3<=_0x556c42)break;_0x3595ef*=0.95,_0x5a2ced=Math[_0x5440c3(0x15e)](_0x3d56f2*_0x3595ef),_0xd1eed3=Math[_0x5440c3(0x15e)](_0x43ecc7*_0x3595ef);}_0x5a2ced=Math[_0x5440c3(0x15e)](_0x5a2ced*1.26);const _0x1c362a=[];let _0x20232b=0x0;for(let _0x5d1228=0x0;_0x5d1228<_0x3b94dc;_0x5d1228++){const _0x2de272=Math[_0x5440c3(0x1c7)](_0x3595ef*0xf4240);Atomics[_0x5440c3(0x1a0)](screenData,0x0,_0x5d1228),Atomics[_0x5440c3(0x1a0)](screenData,0x1,_0x2de272),Atomics[_0x5440c3(0x1a0)](screenData,0x2,_0x3d56f2),Atomics[_0x5440c3(0x1a0)](screenData,0x3,_0x43ecc7),Atomics[_0x5440c3(0x1a0)](screenData,0x4,_0x5a2ced),Atomics[_0x5440c3(0x1a0)](screenData,0x5,_0xd1eed3);let _0xec9c9d=0xa;for(let _0x2f7b66=0x0;_0x2f7b66<_0x255e6c;_0x2f7b66++){const _0x137bd9=[];for(let _0x3c96e7=0x0;_0x3c96e7<_0x6a7683;_0x3c96e7++){if(_0x20232b>=_0x282970)break;const _0x584c6d=Math['floor'](_0x3c96e7*_0x5a2ced),_0xedd7f2=Math[_0x5440c3(0x15e)](_0x2f7b66*_0xd1eed3);if(_0x584c6d>_0x1bcd25||_0xedd7f2>_0x556c42)continue;Atomics[_0x5440c3(0x1a0)](screenData,_0xec9c9d++,0x2),Atomics['store'](screenData,_0xec9c9d++,_0x584c6d),Atomics[_0x5440c3(0x1a0)](screenData,_0xec9c9d++,_0xedd7f2),_0x20232b++;}if(_0x20232b>=_0x282970)break;}break;}return{'screenData':screenData,'scale':_0x3595ef,'rows':_0x255e6c,'cols':_0x6a7683,'total':_0x20232b,'positions':_0x1c362a};}async function xoaTimeout(_0x48393b){const _0x367670=a0_0x20b7eb;try{clearTimeout(_0x48393b),log('main','[xoaTimeout]main:\x20Xóa\x20timeout:'+_0x48393b,null,'w',_0x367670(0x1e5));}catch(_0x4b1676){log(_0x367670(0x1b4),_0x367670(0x1ad)+_0x4b1676,null,![]);}}function a0_0x5cff(){const _0x70e535=['Lỗi\x20while:\x20','message','[processTasks]:\x20task.status:\x20','No\x20task\x20found','version','1920x1080','8pUmPGi','[xoaTimeout]main:\x20','Task\x20phải\x20là\x20một\x20đối\x20tượng','ceil','cols','input','reduce','33KYylEr','main','getTeleId','timestamp','getListProfiles','Không\x20thể\x20tạo\x20worker','chưa\x20có\x20task\x20mới','[processTasks]:','tọa\x20độ\x20hiển\x20thị\x20trình\x20duyệt\x20','maxTime','Số\x20trình\x20duyệt\x20trên\x20mỗi\x20hàng:\x20','length','1278490WXvCnK','\x20task\x20đang\x20chạy','Lỗi\x20không\x20xác\x20định','[handleWorkerMessage]:\x20Đã\x20xử\x20lý\x20task\x20','kích\x20thước\x20trinhd\x20duyệt\x20Width\x20x\x20Height\x20','[processTask]:\x20DONE\x20TASK\x20','promises','[processTasks]:\x20Phát\x20Hiện\x20','round','Lỗi\x20chung:\x20','[processTasks]:\x20screens:','1eumFBW','[handleWorkerMessage]0:\x20Lỗi\x20xử\x20lý\x20task\x20','checkbox','username','Stderr:\x20','7953176mbBbqI','Start\x20App:\x20','function','genProfiles','env','|screenWidthHeight:','completed','rows','status','dirname','error','\x20Lỗi\x20','[processTask]:\x20Xử\x20lý\x20task:\x20','object','[processTasks]:\x20task.nextrunstamp:\x20','Lên\x20Web\x20lấy\x20APIKEY\x20nhen\x20Bro','\x20task\x20trong\x20hàng\x20đợi','[eTimeout]main:\x20turn\x20on\x20timeout\x20flag','name','nextrun','userInfo','success','clrTimeout','split','[processTasks]:\x20currentTime.timestamp:\x20','from','[processTasks]:\x20Chưa\x20có\x20task\x20mới\x20nào\x20để\x20xử\x20lý','SERVER_HOST','tele_id','tự\x20động\x20sắp\x20xếp\x20vị\x20trí\x20hiển\x20thị\x20trình\x20duyệt\x20','[handleWorkerMessage]2:\x20Lỗi\x20xử\x20lý\x20task\x20','httpGet','Kiểm\x20tra\x20task\x20sau\x2060\x20giây','[processTasks]:\x20FirstRun','4854605GnRFhW','screenWidthHeight','Hoặc\x20Đăng\x20nhập\x20lại\x20App\x20genlogin\x20nhé\x20bro','profileThreads','Thêm\x20APIKEY\x20vào\x20file\x20.env\x20nhen\x20Bro','entries','profiles','1527303UuNLBo','Lỗi\x20App\x20genlogin\x20nhé\x20bro!','5235630JCmtKB','OK\x20rồi\x20man.\x20tắt\x20genlogin\x20đi\x20bro','\x20set\x20timeout:\x20','\x20treo\x20đang\x20chạy\x20từ\x20','nextrunstamp','floor','Processing\x20profile:\x20','105tjeSul','[updateTask]:\x20update\x20task\x20','race','max','Chờ\x2060\x20giây','genDataProfiles','BYE\x20BYE','taskIndex','[checkUpdate]Lỗi\x20khi\x20đọc\x20file\x20package.json:\x20','worker1','url','./worker-api1.js','400x900','closeGenlogin:\x20','APIKEY','175746JTFyaM','updateTask','\x20nè\x20bro!','[createWorkerPromise]:\x20main\x20kết\x20thúc\x20worker','pending','Tự\x20động\x20tắt\x20genlogin','catch','taskkill\x20/IM\x20genLogin.exe\x20/F','taskMode','set','\x20with\x20data:\x20','APIKEY\x20not\x20found!','browserWidthHeight','get','scale','[createWorkerPromise]:\x20Timeout\x20khi\x20xử\x20lý\x20task\x20','[eTimeout]main:\x20reset\x20timeout','[createWorkerPromise]:\x20createWorkerPromise\x20task:\x20','log','package.json','parse','5233158WlqcMV','LongCAutoAirdrop','tele','Tỷ\x20lệ\x20thu\x20nhỏ:\x20','[handleWorkerMessage]:\x20Lỗi\x20nội\x20bộ\x20khi\x20xử\x20lý\x20task\x20','getAllProfiles','push','0x0','nextRun','join','[checkUpdate]Version:\x20','maxTask','Mở\x20App\x20genlogin\x20trước\x20nhé\x20bro,kiểm\x20tra\x20coi\x20mở\x20chưa\x20bro','Không\x20có\x20task\x20hoặc\x20chưa\x20tới\x20thời\x20gian\x20chạy','Thời\x20gian\x20timeout\x20không\x20hợp\x20lệ','utf-8','getAllProfiles.value\x20OK','running','chờ\x2030\x20giây\x20rồi\x20thử\x20lại','value','[createWorkerPromise]:\x20','./workerBrowser.js','.genlogin','[processTasks]:\x20Thêm\x20task\x20','terminate','[handleWorkerMessage]1:Lỗi\x20xử\x20lý\x20task\x20','tắt\x20genlogin\x20ok','[checkUpdate]Bạn\x20đang\x20chạy\x20phiên\x20bản\x20mới\x20nhất','store','\x20rồi\x20bro!','[createWorkerPromise]:\x20Lỗi\x20không\x20xác\x20định:\x20','add','timeout','readFile'];a0_0x5cff=function(){return _0x70e535;};return a0_0x5cff();}async function delay(_0x5c002f){return new Promise(_0x2f281a=>{setTimeout(_0x2f281a,_0x5c002f);});}async function eTimeout(_0x1f9224){const _0x50da2b=a0_0x20b7eb;return log(_0x50da2b(0x1b4),_0x50da2b(0x1e0),null,'w'),Atomics[_0x50da2b(0x1a0)](tasksData,_0x1f9224,0x1),!![];}async function rstTimeout(_0x4809cd){const _0x2bb004=a0_0x20b7eb;return log(_0x2bb004(0x1b4),_0x2bb004(0x17f),null,'w'),Atomics['compareExchange'](tasksData,_0x4809cd,0x1,0x2),!![];}async function closeGenlogin(){const _0xebbdc8=a0_0x20b7eb;try{log(_0xebbdc8(0x1b4),_0xebbdc8(0x174),null,'w','-'),exec(_0xebbdc8(0x176),(_0x57bb47,_0x48faaa,_0x73315d)=>{const _0x12ed25=_0xebbdc8;if(_0x57bb47){log(_0x12ed25(0x1b4),'Lỗi:\x20'+_0x57bb47[_0x12ed25(0x1a7)],null,![]);return;}if(_0x73315d){log(_0x12ed25(0x1b4),_0x12ed25(0x1ce)+_0x73315d,null,![]);return;}log('main',_0x12ed25(0x19e));});}catch(_0x44f0ea){log('main',_0xebbdc8(0x16d)+_0x44f0ea,null,![]);}}async function checkUpdate(){const _0x21076e=a0_0x20b7eb;try{const _0x3645e6='https://raw.githubusercontent.com/resistor3300/longCTools/refs/heads/main/package.json',_0xb14d9a=a0_0x13b2d9['join'](process['cwd'](),_0x21076e(0x182)),_0x21d5e7=await a0_0x445df6[_0x21076e(0x1c5)][_0x21076e(0x1a5)](_0xb14d9a,_0x21076e(0x193)),_0x58349c=JSON[_0x21076e(0x183)](_0x21d5e7),_0x544f38=_0x58349c[_0x21076e(0x1aa)];log(_0x21076e(0x1b4),_0x21076e(0x18e)+_0x544f38,null,'w','-');const _0x44b30b=await http[_0x21076e(0x1ee)](_0x21076e(0x1b4),_0x3645e6);await delay(0x3e8);if(_0x44b30b)try{const _0x2f55ca=typeof _0x44b30b==='string'?JSON[_0x21076e(0x183)](_0x44b30b):_0x44b30b,_0x366f12=_0x2f55ca[_0x21076e(0x1aa)];await delay(0x3e8),_0x366f12!=_0x544f38?(log(_0x21076e(0x1b4),'[checkUpdate]Có\x20phiên\x20bản\x20mới:\x20'+_0x366f12,null,'w'),tele_id&&tele_id[_0x21076e(0x1eb)]&&await http[_0x21076e(0x186)](_0x21076e(0x1b4),tele_id[_0x21076e(0x1eb)],'Đã\x20có\x20phiên\x20bản\x20mới:\x20'+_0x366f12)):log(_0x21076e(0x1b4),_0x21076e(0x19f),null,'w');}catch(_0x2c69f5){log(_0x21076e(0x1b4),'[checkUpdate]\x20Lỗi\x20parse\x20JSON:\x20'+_0x2c69f5['message'],null,![]);}return _0x544f38;}catch(_0x20cde6){return log(_0x21076e(0x1b4),_0x21076e(0x168)+_0x20cde6,null,![]),null;}}