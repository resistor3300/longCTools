const a0_0x3cf753=a0_0x4c16;(function(_0xc7b1d8,_0x1bb0bf){const _0x6d2a5b=a0_0x4c16,_0x3b3905=_0xc7b1d8();while(!![]){try{const _0x5bf653=parseInt(_0x6d2a5b(0x107))/0x1*(parseInt(_0x6d2a5b(0x102))/0x2)+-parseInt(_0x6d2a5b(0x155))/0x3+-parseInt(_0x6d2a5b(0x163))/0x4*(parseInt(_0x6d2a5b(0xc6))/0x5)+-parseInt(_0x6d2a5b(0x128))/0x6*(parseInt(_0x6d2a5b(0x135))/0x7)+parseInt(_0x6d2a5b(0x12a))/0x8+parseInt(_0x6d2a5b(0x15c))/0x9*(-parseInt(_0x6d2a5b(0x13b))/0xa)+parseInt(_0x6d2a5b(0xcf))/0xb;if(_0x5bf653===_0x1bb0bf)break;else _0x3b3905['push'](_0x3b3905['shift']());}catch(_0x11c713){_0x3b3905['push'](_0x3b3905['shift']());}}}(a0_0x3b88,0x36255));import'dotenv/config';import a0_0x362635 from'os';import a0_0x22ebf2 from'fs';import a0_0x446024 from'path';import{fileURLToPath}from'url';import a0_0x1be060 from'./modules/Genlogin.js';import a0_0x301b75 from'./modules/http.js';import{log,json}from'./modules/logger.js';import a0_0xd6363a from'node-machine-id';import{spawn,Thread,Worker}from'threads';import{exec}from'child_process';import a0_0x3ed19a from'p-queue';const MIN_FREE_SPACE_MB=0x384;let tasksDataBuffer,tasksData,screenData,screenDataBuffer;const __filename=fileURLToPath(import.meta['url']),__dirname=a0_0x446024['dirname'](__filename),{machine_id,machineIdSync}=a0_0xd6363a,machineId=machineIdSync()[a0_0x3cf753(0x15f)](0x0,0x8),appName=a0_0x3cf753(0x16a)+'-'+machineId,nameFile='genProfiles'+'-'+machineId,genDataFile=a0_0x3cf753(0x144)+'-'+machineId,appSetings={'maxTaskThreads':{'type':a0_0x3cf753(0xe0),'value':0x3,'note':a0_0x3cf753(0x105)},'screens':{'type':'input','value':0x1,'note':'Số\x20lượng\x20màn\x20hình\x20vật\x20lý\x20để\x20hiển\x20thị'},'screenWidthHeight':{'type':'input','value':a0_0x3cf753(0x153),'note':'độ\x20phân\x20giải\x20màn\x20hình\x20vật\x20lý\x20Width\x20x\x20Height\x20'},'browserWidthHeight':{'type':'input','value':a0_0x3cf753(0xeb),'note':a0_0x3cf753(0x12c)},'autoSetBrowserPosition':{'type':'checkbox','value':'y','note':a0_0x3cf753(0x11b)},'customBrowserPosition':{'type':a0_0x3cf753(0xe0),'value':a0_0x3cf753(0xc7),'note':a0_0x3cf753(0xe3)},'genDataFolder':{'type':a0_0x3cf753(0xe0),'value':a0_0x446024[a0_0x3cf753(0x15a)]('C:','Users',a0_0x362635[a0_0x3cf753(0xdf)]()[a0_0x3cf753(0xc2)],a0_0x3cf753(0x12b)),'note':a0_0x3cf753(0x16e)}};let genlogin,http,profileNameId,profileId,browser,getAllProfiles,GenDataProfile,screenArrWorker,timgame=!![],taskQueue,maxTask=0x1,taskStatus,firstRun=!![],appStatus=0x0,tele_id,version,prevTime,prevTimeCkDisk;async function main(){const _0xbd1eb8=a0_0x3cf753;try{log(_0xbd1eb8(0xe2),_0xbd1eb8(0x120)+appName,null,'w','='),await delay(0x3e8);if(!process[_0xbd1eb8(0xee)][_0xbd1eb8(0x14c)]){log('main',_0xbd1eb8(0x10d),null,![]),log(_0xbd1eb8(0xe2),_0xbd1eb8(0x13e),null,'w'),log(_0xbd1eb8(0xe2),'Thêm\x20APIKEY\x20vào\x20file\x20.env\x20nhen\x20Bro',null,'w'),log(_0xbd1eb8(0xe2),_0xbd1eb8(0xd1),null,'w'),log(_0xbd1eb8(0xe2),_0xbd1eb8(0x138),null,'w','=');return;}genlogin=new a0_0x1be060('',!![]),http=new a0_0x301b75(process[_0xbd1eb8(0xee)][_0xbd1eb8(0xe6)],process['env'][_0xbd1eb8(0x14c)],!![]),tele_id=await http['getTeleId'](_0xbd1eb8(0xe2)),version=await checkUpdate(),prevTime=Date[_0xbd1eb8(0xc5)](),prevTimeCkDisk=Date[_0xbd1eb8(0xc5)]();tele_id[_0xbd1eb8(0x143)]&&await http[_0xbd1eb8(0xd3)](_0xbd1eb8(0xe2),tele_id[_0xbd1eb8(0x143)],_0xbd1eb8(0x120)+appName+'\x20nè\x20bro!');let _0x3b1354,_0x4ba3b8=0x1,_0x5d492d=0x1,_0x3ee34b=0x0,_0x5858df;while(!![]){try{appStatus=0x1;if(_0x4ba3b8){if(!_0x3ee34b){GenDataProfile=null;_0x5d492d&&(_0x5858df=null,_0x5858df=await genlogin[_0xbd1eb8(0xf7)](_0xbd1eb8(0xe2)));if(!_0x5858df||!_0x5d492d){const _0x1b5079=await http[_0xbd1eb8(0x144)](_0xbd1eb8(0xe2),genDataFile);!_0x1b5079['value']?(log(_0xbd1eb8(0xe2),_0xbd1eb8(0x15d),null,'w'),log(_0xbd1eb8(0xe2),'Hoặc\x20Đăng\x20nhập\x20lại\x20App\x20genlogin\x20nhé\x20bro',null,'w'),log(_0xbd1eb8(0xe2),''+_0x1b5079[_0xbd1eb8(0x11c)],null,![]),log(_0xbd1eb8(0xe2),_0xbd1eb8(0xe8),null,'i'),tele_id&&tele_id[_0xbd1eb8(0x143)]&&await http[_0xbd1eb8(0xd3)]('main',tele_id[_0xbd1eb8(0x143)],'Lỗi\x20App\x20genlogin\x20nhé\x20bro!')):GenDataProfile=_0x1b5079[_0xbd1eb8(0x124)];}else{GenDataProfile=await _0x5858df[_0xbd1eb8(0xd8)],await http[_0xbd1eb8(0x144)]('main',genDataFile,GenDataProfile),_0x5d492d=0x0;continue;}}if(await genlogin[_0xbd1eb8(0xf7)](_0xbd1eb8(0xe2))){log('main',_0xbd1eb8(0xdb),null,'w'),_0x3ee34b=0x1,await closeGenlogin(),await delay(0xbb8);continue;}_0x4ba3b8=0x0;}await delay(0x3e8),getAllProfiles=await http['getAllProfiles'](_0xbd1eb8(0xe2),appName,nameFile,GenDataProfile,appSetings);if(!getAllProfiles[_0xbd1eb8(0x124)]||!getAllProfiles||getAllProfiles[_0xbd1eb8(0x124)][_0xbd1eb8(0xe9)]<=0x0){log(_0xbd1eb8(0xe2),_0xbd1eb8(0x104),null,![]),log(_0xbd1eb8(0xe2),_0xbd1eb8(0xe8),null,'i');throw new Error(_0xbd1eb8(0xea));}log(_0xbd1eb8(0xe2),_0xbd1eb8(0x12d));const _0x327af2=Object['entries'](getAllProfiles[_0xbd1eb8(0x124)]);maxTask=parseInt(getAllProfiles[_0xbd1eb8(0x109)]);const _0x5411a6=await processTasks(_0x327af2);if(taskQueue[_0xbd1eb8(0xcc)]>0x0){const _0x16f9e7=await getRunningTasks(taskStatus,_0xbd1eb8(0xd7));log(_0xbd1eb8(0xe2),taskQueue['size']+'\x20task\x20trong\x20hàng\x20đợi',null,'w'),log(_0xbd1eb8(0xe2),taskQueue['pending']+_0xbd1eb8(0x15b),null,'w'),log(_0xbd1eb8(0xe2),'Running\x20Task:'+_0x16f9e7,null,'w');}else!_0x5411a6&&log(_0xbd1eb8(0xe2),_0xbd1eb8(0x13d),null,'w');log('main',_0xbd1eb8(0x127)+Array[_0xbd1eb8(0x108)](taskStatus[_0xbd1eb8(0xd5)]()),null,'c'),log('main','Kiểm\x20tra\x20task\x20sau\x2060\x20giây',null,'i'),Date[_0xbd1eb8(0xc5)]()-prevTime>=0x5265c00&&(prevTime=Date[_0xbd1eb8(0xc5)](),checkUpdate()),Date['now']()-prevTimeCkDisk>=0x493e0&&(prevTimeCkDisk=Date[_0xbd1eb8(0xc5)](),checkDisk()),logMemoryUsage(),getAllProfiles=null,await delay(0x7530);}catch(_0x473aca){log(_0xbd1eb8(0xe2),_0xbd1eb8(0x10b)+_0x473aca,null,![]),log(_0xbd1eb8(0xe2),_0xbd1eb8(0xe7),null,'i'),tele_id&&tele_id[_0xbd1eb8(0x143)]&&await http[_0xbd1eb8(0xd3)](_0xbd1eb8(0xe2),tele_id[_0xbd1eb8(0x143)],appName+_0xbd1eb8(0xfa)+_0x473aca+_0xbd1eb8(0x150)),await delay(0x7530);}}}catch(_0x100ab9){log(_0xbd1eb8(0xe2),_0xbd1eb8(0x11d)+_0x100ab9,null,![]),appStatus=0x0;}}main()[a0_0x3cf753(0x10f)](console[a0_0x3cf753(0x11c)]);async function processTasks(_0x33c577){const _0x3972da=a0_0x3cf753;try{if(firstRun){log(_0x3972da(0xe2),_0x3972da(0x152),null,'c','*'),taskQueue=new a0_0x3ed19a({'concurrency':maxTask}),tasksDataBuffer=new SharedArrayBuffer(_0x33c577[_0x3972da(0xe9)]*0x4),tasksData=new Int32Array(tasksDataBuffer);for(var _0x51e64d=0x0;_0x51e64d<tasksData[_0x3972da(0xe9)];_0x51e64d++){Atomics['store'](tasksData,_0x51e64d,0x2);}firstRun=![],taskStatus=new Map();let _0x269f5d=0x0;for(const [_0x3e6522,_0x4df684]of _0x33c577){_0x3e6522<parseInt(getAllProfiles['maxTask'])&&(_0x269f5d+=parseInt(_0x4df684['profileThreads']));}screenDataBuffer=new SharedArrayBuffer((parseInt(_0x269f5d)*0x3+0xd)*0x4),screenData=new Int32Array(screenDataBuffer);let _0x14c94a=[];for(let _0x60c671=0x0;_0x60c671<parseInt(getAllProfiles[_0x3972da(0x137)]);_0x60c671++){const _0x328a12=getAllProfiles[_0x3972da(0x131)][_0x3972da(0x123)]('x');_0x14c94a['push']({'width':parseInt(_0x328a12[0x0]),'height':parseInt(_0x328a12[0x1])});}const _0x481ad7=getAllProfiles[_0x3972da(0x13a)]['split']('x'),_0x3e5db6=parseInt(_0x481ad7[0x0]),_0x1dea29=parseInt(_0x481ad7[0x1]),_0x37c218=_0x269f5d,_0xa39b19=_0x14c94a[_0x3972da(0xc3)]((_0x1630e6,_0x3c8cc9)=>_0x1630e6+_0x3c8cc9[_0x3972da(0xcb)],0x0),_0x52a256=Math[_0x3972da(0xf9)](..._0x14c94a[_0x3972da(0x117)](_0x4696dd=>_0x4696dd[_0x3972da(0xd0)])),_0x2ef879=await calScreenArr(_0x3e5db6,_0x1dea29,_0xa39b19,_0x52a256,_0x269f5d);screenData=_0x2ef879[_0x3972da(0x13c)],log(_0x3972da(0xe2),_0x3972da(0xde)+getAllProfiles[_0x3972da(0x137)],null,'w'),log(_0x3972da(0xe2),'Tổng\x20độ\x20phân\x20giải\x20màn\x20hình:\x20'+_0xa39b19+'x'+_0x52a256,null,'w'),log(_0x3972da(0xe2),_0x3972da(0x164)+_0x2ef879[_0x3972da(0x130)]+_0x3972da(0x12e)+_0x2ef879['cols'],null,'w'),log('main',_0x3972da(0xe1)+_0x2ef879[_0x3972da(0xd2)],null,'w'),log(_0x3972da(0xe2),'[processTasks]:\x20screens:'+getAllProfiles[_0x3972da(0x137)]+'|screenWidthHeight:'+getAllProfiles[_0x3972da(0x131)],null,'w'),await delay(0x3e8);}const _0x4acc2=[];for(const [_0x5144fb,_0xfb5368]of _0x33c577){_0xfb5368[_0x3972da(0x11e)]=_0x5144fb;const _0x20505c=await genlogin[_0x3972da(0x112)](_0x3972da(0xe2));log('main','[processTasks]:\x20currentTime.timestamp:\x20'+_0x20505c['timestamp'],null,'i'),log(_0x3972da(0xe2),_0x3972da(0x100)+_0xfb5368['nextrunstamp'],null,'i'),log('main',_0x3972da(0x119)+_0xfb5368['status'],null,'i'),log('main',_0x3972da(0xec)+_0x20505c['timestamp']+'|'+(parseInt(_0xfb5368[_0x3972da(0x16d)])+parseInt(_0xfb5368[_0x3972da(0x114)]))+'|'+parseInt(_0xfb5368[_0x3972da(0x134)]),null,'w');if(_0x20505c[_0x3972da(0x168)]>=_0xfb5368[_0x3972da(0x16d)]&&parseInt(_0xfb5368['status'])===0x0){log(_0x3972da(0xe2),_0x3972da(0xf8)+_0xfb5368[_0x3972da(0x16f)]+_0x3972da(0xd4),null,'i'),taskStatus['set'](_0xfb5368['name'],_0x3972da(0xcc));const _0x33a540=await updateTask(_0xfb5368[_0x3972da(0x16f)],{'status':0x1,'nextRun':0x1});_0x4acc2[_0x3972da(0x145)](taskQueue[_0x3972da(0xff)](()=>processTask(_0xfb5368))),taskStatus[_0x3972da(0xfb)](_0xfb5368['name'],'running'),await delay(0x7d0);}else{if(_0x20505c[_0x3972da(0x168)]>parseInt(_0xfb5368[_0x3972da(0x16d)])+parseInt(_0xfb5368[_0x3972da(0x114)])&&parseInt(_0xfb5368[_0x3972da(0x134)])===0x1&&(taskStatus[_0x3972da(0x10a)](_0xfb5368[_0x3972da(0x16f)])===_0x3972da(0x103)||!taskStatus[_0x3972da(0x158)](_0xfb5368['name']))){log('main',_0x3972da(0xfe)+_0xfb5368[_0x3972da(0x16f)]+_0x3972da(0xc4)+_0xfb5368[_0x3972da(0x14a)],null,'w','*');const _0x3692da=await updateTask(_0xfb5368['name'],{'status':0x0,'nextRun':0x1});log('main','[processTasks]:\x20Đã\x20xóa\x20trạng\x20thái\x20đang\x20chạy\x20task\x20'+_0xfb5368[_0x3972da(0x16f)],null,'i','*');}}}return _0x4acc2[_0x3972da(0xe9)]>0x0?!![]:(log(_0x3972da(0xe2),_0x3972da(0xc8),null,'w'),null);}catch(_0xfac93f){return log(_0x3972da(0xe2),_0x3972da(0x11f)+_0xfac93f,null,![]),null;}}async function processTask(_0xb91ba0){const _0x36794f=a0_0x3cf753;try{log(_0x36794f(0xe2),_0x36794f(0xfc)+_0xb91ba0['name'],null,'i','=');if(!_0xb91ba0||typeof _0xb91ba0!==_0x36794f(0x148))throw new Error(_0x36794f(0xca));const _0xb36f01=createWorkerPromise(_0xb91ba0),_0x4676ef=await _0xb36f01;log('main',_0x36794f(0x170)+_0xb91ba0[_0x36794f(0x16f)],null,'w','DT');const _0x49595b=await updateTask(_0xb91ba0[_0x36794f(0x16f)],{'status':0x0,'nextRun':0x1});return taskStatus['set'](_0xb91ba0['name'],_0x36794f(0x103)),await delay(0x1388),_0x4676ef;}catch(_0x22d978){return log(_0x36794f(0xe2),_0x36794f(0xcd)+_0x22d978,null,![]),await updateTask(_0xb91ba0['name'],{'status':0x0,'nextRun':0x1}),null;}}async function createWorkerPromise(_0x3cf14b){const _0x3b051c=a0_0x3cf753;return log(_0x3b051c(0xe2),_0x3b051c(0x167)+_0x3cf14b[_0x3b051c(0x16f)],null,'i','-'),new Promise(async(_0x16ed44,_0x4c0c3b)=>{const _0x50a304=_0x3b051c;let _0x2cffcd;try{if(!_0x3cf14b||typeof _0x3cf14b!==_0x50a304(0x148))return _0x4c0c3b(new Error(_0x50a304(0xca)));const _0x305ffa=_0x3cf14b[_0x50a304(0x11a)]===_0x50a304(0x154)?'./worker-api1.js':_0x50a304(0xc1);_0x2cffcd=await spawn(new Worker(_0x305ffa)),log(_0x50a304(0xe2),_0x50a304(0x160)+_0x305ffa,null,'i');if(!_0x2cffcd)return _0x4c0c3b(new Error(_0x50a304(0xe4)));const _0x34856a=parseInt(_0x3cf14b[_0x50a304(0x114)])*0x3e8;if(isNaN(_0x34856a))return _0x4c0c3b(new Error(_0x50a304(0x147)));const _0x37e1c9=setTimeout(async()=>{const _0x53e919=_0x50a304;log(_0x53e919(0xe2),_0x53e919(0x146)+_0x3cf14b[_0x53e919(0x16f)],null,'w',_0x53e919(0xef)),await eTimeout(_0x3cf14b[_0x53e919(0x11e)]),xoaTimeout(_0x37e1c9),await _0x2cffcd['worker1']({'timeout':!![],'task':_0x3cf14b,'tasksDataBuffer':tasksDataBuffer,'screenDataBuffer':screenDataBuffer,'tele_id':tele_id});},_0x34856a);log('main',_0x50a304(0x160)+_0x3cf14b[_0x50a304(0x16f)]+_0x50a304(0x116)+_0x34856a+_0x50a304(0xda)+_0x37e1c9,null,'w');const _0x2c47b2=async _0x51411d=>{const _0x3ec6d5=_0x50a304;try{if(_0x51411d['success']){log(_0x3ec6d5(0xe2),_0x3ec6d5(0x141)+_0x3cf14b[_0x3ec6d5(0x16f)],null,'i'),xoaTimeout(_0x37e1c9),_0x16ed44(!![]);return;}else{if(!_0x51411d[_0x3ec6d5(0xf0)]){log(_0x3ec6d5(0xe2),_0x3ec6d5(0x121)+_0x3cf14b[_0x3ec6d5(0x16f)]+':\x20'+_0x51411d[_0x3ec6d5(0x11c)],null,![]),_0x4c0c3b(new Error(_0x51411d[_0x3ec6d5(0x11c)]||_0x3ec6d5(0xe5)));return;}else{log(_0x3ec6d5(0xe2),'[handleWorkerMessage]1:Lỗi\x20xử\x20lý\x20task\x20'+_0x3cf14b[_0x3ec6d5(0x16f)]+':\x20'+json(_0x51411d),null,'c','x'),log(_0x3ec6d5(0xe2),_0x3ec6d5(0xed)+_0x3cf14b[_0x3ec6d5(0x16f)]+':\x20'+_0x51411d[_0x3ec6d5(0x11c)],null,![]),_0x4c0c3b(new Error(_0x51411d[_0x3ec6d5(0x11c)]||'Lỗi\x20không\x20xác\x20định'));return;}}}catch(_0x28097f){log(_0x3ec6d5(0xe2),_0x3ec6d5(0x113)+_0x3cf14b[_0x3ec6d5(0x16f)]+':\x20'+_0x28097f[_0x3ec6d5(0xfd)],null,![]),xoaTimeout(_0x37e1c9),_0x4c0c3b(_0x28097f);return;}},_0x5bf5eb=new Promise(async(_0x2fbc4a,_0x3c0f1c)=>{const _0x1fc6f5=_0x50a304;try{log('main','[dmdmdmdmdm]:\x20getAllProfiles:\x20'+JSON['stringify'](getAllProfiles),null,'w');const _0x3cb853=await _0x2cffcd[_0x1fc6f5(0x139)]({'version0':version,'tasksDataBuffer':tasksDataBuffer,'screenDataBuffer':screenDataBuffer,'task':_0x3cf14b,'dataBrw':getAllProfiles,'GenDataProfile0':GenDataProfile,'timgame0':timgame,'tele_id':tele_id}),_0x110842=await _0x2c47b2(_0x3cb853);_0x2fbc4a(_0x110842);}catch(_0x2040bc){_0x3c0f1c(_0x2040bc);}}),_0x3a0715=await Promise[_0x50a304(0x159)]([_0x5bf5eb]);log(_0x50a304(0xe2),_0x50a304(0x110)+json(_0x3a0715),null,'w','@'),log(_0x50a304(0xe2),_0x50a304(0x13f),null,'w','-');_0x2cffcd&&Thread['terminate']in _0x2cffcd?await Thread[_0x50a304(0xf1)](_0x2cffcd):log(_0x50a304(0xe2),'[createWorkerPromise]:\x20Worker\x20không\x20hợp\x20lệ\x20hoặc\x20đã\x20bị\x20giải\x20phóng:',null,![],'x');_0x16ed44(_0x3a0715);return;}catch(_0x2f6f31){log(_0x50a304(0xe2),'[createWorkerPromise]:\x20Lỗi\x20không\x20xác\x20định:\x20'+_0x2f6f31[_0x50a304(0xfd)],null,![]),_0x2cffcd&&Thread[_0x50a304(0xf1)]in _0x2cffcd?await Thread['terminate'](_0x2cffcd):log(_0x50a304(0xe2),_0x50a304(0xf4),null,![],'x'),_0x4c0c3b(_0x2f6f31);}});}async function updateTask(_0x1e42b0,_0x372fe2){const _0x1970a5=a0_0x3cf753;if(!http||typeof http[_0x1970a5(0x14d)]!=='function'){log(_0x1970a5(0xe2),_0x1970a5(0x129),null,![]);return;}return log(_0x1970a5(0xe2),_0x1970a5(0x126)+_0x1e42b0+_0x1970a5(0xf3)+_0x372fe2[_0x1970a5(0x134)]+'|'+_0x372fe2['nextRun'],null,'i'),await http[_0x1970a5(0x14d)](_0x1970a5(0xe2),_0x1e42b0,_0x372fe2);}async function processProfile(_0x182f14){const _0x215a42=a0_0x3cf753;console[_0x215a42(0xf5)](_0x215a42(0xe2),'Processing\x20profile:\x20'+_0x182f14[_0x215a42(0x16f)]);const _0x335a3d=_0x182f14[_0x215a42(0x162)];for(const _0x366a8c of _0x335a3d){await gameQueue[_0x215a42(0xff)](()=>processGame(_0x366a8c));}}async function getRunningTasks(_0x11238c,_0x2a3bcb){const _0x36688e=a0_0x3cf753,_0x29737c=[];for(const [_0x5c2479,_0x435efd]of _0x11238c[_0x36688e(0xd5)]()){_0x435efd===_0x435efd&&_0x29737c[_0x36688e(0x145)](_0x5c2479);}return _0x29737c;}async function calScreenArr(_0x2991c8,_0x4fbb92,_0x1e774b,_0x180105,_0x3b4848,_0x1551ab=0x1){const _0x5edad8=a0_0x3cf753,_0x5a2472=0x0;let _0x49c315=_0x2991c8,_0x449e33=_0x4fbb92,_0x4493c6,_0x4c1607,_0x5bfed6=0x1;while(!![]){_0x4c1607=Math[_0x5edad8(0x14b)](_0x1e774b/_0x49c315),_0x4493c6=Math[_0x5edad8(0x15e)](_0x3b4848/_0x4c1607);if(_0x4493c6*_0x449e33<=_0x180105)break;_0x5bfed6*=0.95,_0x49c315=Math['floor'](_0x2991c8*_0x5bfed6),_0x449e33=Math['floor'](_0x4fbb92*_0x5bfed6);}_0x49c315=Math['floor'](_0x49c315*1.26);const _0x10b3b8=[];let _0x39b82b=0x0;for(let _0x46c573=0x0;_0x46c573<_0x1551ab;_0x46c573++){const _0x4bcbe2=Math['round'](_0x5bfed6*0xf4240);Atomics[_0x5edad8(0x133)](screenData,0x0,_0x46c573),Atomics[_0x5edad8(0x133)](screenData,0x1,_0x4bcbe2),Atomics[_0x5edad8(0x133)](screenData,0x2,_0x2991c8),Atomics[_0x5edad8(0x133)](screenData,0x3,_0x4fbb92),Atomics[_0x5edad8(0x133)](screenData,0x4,_0x49c315),Atomics['store'](screenData,0x5,_0x449e33);let _0x584d64=0xa;for(let _0x3b1637=0x0;_0x3b1637<_0x4493c6;_0x3b1637++){const _0x484252=[];for(let _0x336805=0x0;_0x336805<_0x4c1607;_0x336805++){if(_0x39b82b>=_0x3b4848)break;const _0x3afaf4=Math[_0x5edad8(0x14b)](_0x336805*_0x49c315),_0x7225e6=Math[_0x5edad8(0x14b)](_0x3b1637*_0x449e33);if(_0x3afaf4>_0x1e774b||_0x7225e6>_0x180105)continue;Atomics['store'](screenData,_0x584d64++,0x2),Atomics[_0x5edad8(0x133)](screenData,_0x584d64++,_0x3afaf4),Atomics['store'](screenData,_0x584d64++,_0x7225e6),_0x39b82b++;}if(_0x39b82b>=_0x3b4848)break;}break;}return{'screenData':screenData,'scale':_0x5bfed6,'rows':_0x4493c6,'cols':_0x4c1607,'total':_0x39b82b,'positions':_0x10b3b8};}function a0_0x4c16(_0xa4e7af,_0xadf22d){const _0x3b881d=a0_0x3b88();return a0_0x4c16=function(_0x4c16b8,_0x17313b){_0x4c16b8=_0x4c16b8-0xc1;let _0x2f3419=_0x3b881d[_0x4c16b8];return _0x2f3419;},a0_0x4c16(_0xa4e7af,_0xadf22d);}async function xoaTimeout(_0x1f6bf5){const _0x4f98a0=a0_0x3cf753;try{clearTimeout(_0x1f6bf5),log(_0x4f98a0(0xe2),_0x4f98a0(0x10e)+_0x1f6bf5,null,'w',_0x4f98a0(0x118));}catch(_0x14c312){log(_0x4f98a0(0xe2),_0x4f98a0(0x156)+_0x14c312,null,![]);}}async function delay(_0x3089ed){return new Promise(_0x64fbaa=>{setTimeout(_0x64fbaa,_0x3089ed);});}async function eTimeout(_0x581d39){return log('main','[eTimeout]main:\x20turn\x20on\x20timeout\x20flag',null,'w'),Atomics['store'](tasksData,_0x581d39,0x1),!![];}async function rstTimeout(_0x3becdd){const _0x1b9e5f=a0_0x3cf753;return log(_0x1b9e5f(0xe2),_0x1b9e5f(0x157),null,'w'),Atomics['compareExchange'](tasksData,_0x3becdd,0x1,0x2),!![];}async function closeGenlogin(){const _0x2797ba=a0_0x3cf753;try{log('main',_0x2797ba(0x142),null,'w','-'),exec('taskkill\x20/IM\x20genLogin.exe\x20/F',(_0x181036,_0x1a9a5d,_0xf5c8bf)=>{const _0x27d774=_0x2797ba;if(_0x181036){log(_0x27d774(0xe2),_0x27d774(0xd9)+_0x181036[_0x27d774(0xfd)],null,![]);return;}if(_0xf5c8bf){log(_0x27d774(0xe2),'Stderr:\x20'+_0xf5c8bf,null,![]);return;}log(_0x27d774(0xe2),_0x27d774(0xf2));});}catch(_0x4c0cb2){log(_0x2797ba(0xe2),_0x2797ba(0x16c)+_0x4c0cb2,null,![]);}}async function checkUpdate(){const _0x14c2ca=a0_0x3cf753;try{const _0x36ce0f=_0x14c2ca(0x106),_0x7b7dbf=a0_0x446024[_0x14c2ca(0x15a)](process['cwd'](),'package.json'),_0x17240b=await a0_0x22ebf2['promises'][_0x14c2ca(0x14e)](_0x7b7dbf,'utf-8'),_0x359269=JSON[_0x14c2ca(0x101)](_0x17240b),_0x4415aa=_0x359269[_0x14c2ca(0x16b)];log(_0x14c2ca(0xe2),_0x14c2ca(0xd6)+_0x4415aa,null,'w','-');const _0x4c6c9e=await http['httpGet'](_0x14c2ca(0xe2),_0x36ce0f);await delay(0x3e8);if(_0x4c6c9e)try{const _0x2a672f=typeof _0x4c6c9e===_0x14c2ca(0x165)?JSON['parse'](_0x4c6c9e):_0x4c6c9e,_0x261473=_0x2a672f[_0x14c2ca(0x16b)];await delay(0x3e8),_0x261473!=_0x4415aa?(log(_0x14c2ca(0xe2),'[checkUpdate]Có\x20phiên\x20bản\x20mới:\x20'+_0x261473,null,'w'),tele_id&&tele_id['tele_id']&&await http['tele'](_0x14c2ca(0xe2),tele_id[_0x14c2ca(0x143)],_0x14c2ca(0x125)+_0x261473)):log(_0x14c2ca(0xe2),_0x14c2ca(0x122),null,'w');}catch(_0x35378c){log(_0x14c2ca(0xe2),_0x14c2ca(0x166)+_0x35378c[_0x14c2ca(0xfd)],null,![]);}return _0x4415aa;}catch(_0x57e3e3){return log(_0x14c2ca(0xe2),'[checkUpdate]Lỗi\x20khi\x20đọc\x20file\x20package.json:\x20'+_0x57e3e3,null,![]),null;}}function a0_0x3b88(){const _0x241edb=['api','1233444eFZNOj','[xoaTimeout]main:\x20','[eTimeout]main:\x20reset\x20timeout','has','race','join','\x20task\x20đang\x20chạy','17766mHalzs','Mở\x20App\x20genlogin\x20trước\x20nhé\x20bro,kiểm\x20tra\x20coi\x20mở\x20chưa\x20bro','ceil','substring','[createWorkerPromise]:\x20','\x20MB','games','1561292zguDiY','Số\x20trình\x20duyệt\x20trên\x20mỗi\x20hàng:\x20','string','[checkUpdate]\x20Lỗi\x20parse\x20JSON:\x20','[createWorkerPromise]:\x20createWorkerPromise\x20task:\x20','timestamp','rss','LongCAutoAirdrop','version','closeGenlogin:\x20','nextrunstamp','thư\x20mục\x20chứa\x20data\x20genlogin','name','[processTask]:\x20DONE\x20TASK\x20','./workerBrowser.js','username','reduce','\x20treo\x20đang\x20chạy\x20từ\x20','now','5rsCMpJ','0x0','[processTasks]:\x20Chưa\x20có\x20task\x20mới\x20nào\x20để\x20xử\x20lý','exit','Task\x20phải\x20là\x20một\x20đối\x20tượng','width','pending','[processTask]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20','❌\x20Lỗi\x20kiểm\x20tra\x20ổ\x20đĩa:\x20','3895243sfMPhQ','height','BYE\x20BYE','scale','tele','\x20vào\x20hàng\x20đợi','entries','[checkUpdate]Version:\x20','running','profiles','Lỗi:\x20','\x20Timeout\x20ID:\x20','OK\x20rồi\x20man.\x20tắt\x20genlogin\x20đi\x20bro','🟢\x20Dung\x20lượng\x20trống:\x20','Garbage\x20Collector\x20đã\x20chạy!','số\x20màn\x20hình:\x20','userInfo','input','Tỷ\x20lệ\x20thu\x20nhỏ:\x20','main','tọa\x20độ\x20hiển\x20thị\x20trình\x20duyệt\x20','Không\x20thể\x20tạo\x20worker','Lỗi\x20không\x20xác\x20định','SERVER_HOST','Chờ\x2060\x20giây','chờ\x2030\x20giây\x20rồi\x20thử\x20lại','length','No\x20task\x20found','400x900','[processTasks]:','[handleWorkerMessage]2:\x20Lỗi\x20xử\x20lý\x20task\x20','env','timeout','success','terminate','tắt\x20genlogin\x20ok','\x20with\x20data:\x20','[createWorkerPromise]:\x20Worker\x20không\x20hợp\x20lệ\x20hoặc\x20đã\x20bị\x20giải\x20phóng:','log','Heap\x20Used:\x20','getListProfiles','[processTasks]:\x20Thêm\x20task\x20','max','\x20Lỗi\x20','set','[processTask]:\x20Xử\x20lý\x20task:\x20','message','[processTasks]:\x20Phát\x20Hiện\x20','add','[processTasks]:\x20task.nextrunstamp:\x20','parse','678162uMJRff','completed','Không\x20có\x20task\x20hoặc\x20chưa\x20tới\x20thời\x20gian\x20chạy','Số\x20lượng\x20task\x20chạy\x20song\x20song','https://raw.githubusercontent.com/resistor3300/longCTools/refs/heads/main/package.json','1QOWQex','from','maxTask','get','Lỗi\x20while:\x20','Memory','APIKEY\x20not\x20found!','[xoaTimeout]main:\x20Xóa\x20timeout:','catch','[createWorkerPromise]:\x20main\x20','heapUsed','nowTime','[handleWorkerMessage]:\x20Lỗi\x20nội\x20bộ\x20khi\x20xử\x20lý\x20task\x20','maxTime','wmic\x20logicaldisk\x20get\x20caption,freespace','\x20set\x20timeout:\x20','map','clrTimeout','[processTasks]:\x20task.status:\x20','taskMode','tự\x20động\x20sắp\x20xếp\x20vị\x20trí\x20hiển\x20thị\x20trình\x20duyệt\x20','error','Lỗi\x20chung:\x20','taskIndex','[processTasks]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20','Start\x20App:\x20','[handleWorkerMessage]0:\x20Lỗi\x20xử\x20lý\x20task\x20','[checkUpdate]Bạn\x20đang\x20chạy\x20phiên\x20bản\x20mới\x20nhất','split','value','Đã\x20có\x20phiên\x20bản\x20mới:\x20','[updateTask]:\x20update\x20task\x20','[main]\x20Task\x20Status:\x20','12gmRWtq','[updateTask]:\x20Lỗi\x20cập\x20nhật\x20task','3102064ATriXO','.genlogin','kích\x20thước\x20trinhd\x20duyệt\x20Width\x20x\x20Height\x20','getAllProfiles.value\x20OK',',\x20mỗi\x20cột:\x20','trim','rows','screenWidthHeight','Dung\x20lượng\x20trống\x20ổ\x20C:\x20không\x20đủ!\x20','store','status','56861OVYkjI','round','screens','TA\x20ĐI\x20ĐÂY','worker1','browserWidthHeight','210qvePfT','screenData','chưa\x20có\x20task\x20mới','Lên\x20Web\x20lấy\x20APIKEY\x20nhen\x20Bro','[createWorkerPromise]:\x20main\x20kết\x20thúc\x20worker','\x20MB,\x20RSS:\x20','[handleWorkerMessage]:\x20Đã\x20xử\x20lý\x20task\x20','Tự\x20động\x20tắt\x20genlogin','tele_id','genDataProfiles','push','[createWorkerPromise]:\x20Timeout\x20khi\x20xử\x20lý\x20task\x20','Thời\x20gian\x20timeout\x20không\x20hợp\x20lệ','object','❌\x20Dung\x20lượng\x20trống\x20không\x20đủ!','nextrun','floor','APIKEY','updateTask','readFile','toFixed','\x20rồi\x20bro!','checkDisk','[processTasks]:\x20FirstRun','1920x1080'];a0_0x3b88=function(){return _0x241edb;};return a0_0x3b88();}async function checkDisk(){const _0x3131bf=a0_0x3cf753;try{const _0xb487e8=await checkDiskSpace('C:');log(_0x3131bf(0x151),_0x3131bf(0xdc)+_0xb487e8[_0x3131bf(0x14f)](0x2)+'\x20MB',null,'w','+'),_0xb487e8<=MIN_FREE_SPACE_MB&&(log(_0x3131bf(0x151),_0x3131bf(0x149),null,'w','+'),tele_id['tele_id']&&await http['tele'](_0x3131bf(0x151),tele_id[_0x3131bf(0x143)],_0x3131bf(0x132)+_0xb487e8['toFixed'](0x2)+'\x20MB,\x20Ta\x20OUT\x20đây!'),process[_0x3131bf(0xc9)]());}catch(_0x59e3e6){log(_0x3131bf(0x151),_0x3131bf(0xce)+_0x59e3e6[_0x3131bf(0xfd)],null,'w','+');}}function checkDiskSpace(_0x3deeb4='C:'){return new Promise((_0x52e68a,_0x3b488d)=>{const _0x3e2b79=a0_0x4c16;exec(_0x3e2b79(0x115),(_0x258dbf,_0x587ba0)=>{const _0x41598d=_0x3e2b79;if(_0x258dbf){_0x3b488d(_0x258dbf);return;}const _0x162204=_0x587ba0[_0x41598d(0x12f)]()['split']('\x0a');for(const _0x35f531 of _0x162204){const _0x4264fe=_0x35f531[_0x41598d(0x12f)]()['split'](/\s+/);if(_0x4264fe[0x0]===_0x3deeb4){const _0x5dbadd=Math[_0x41598d(0x136)](parseInt(_0x4264fe[0x1],0xa)/0x400/0x400);_0x52e68a(_0x5dbadd);return;}}_0x3b488d(new Error('Drive\x20not\x20found'));});});}async function logMemoryUsage(){const _0x87d539=a0_0x3cf753,_0x23d854=process['memoryUsage']();log(_0x87d539(0x10c),_0x87d539(0xf6)+(_0x23d854[_0x87d539(0x111)]/0x400/0x400)['toFixed'](0x2)+_0x87d539(0x140)+(_0x23d854[_0x87d539(0x169)]/0x400/0x400)['toFixed'](0x2)+_0x87d539(0x161),null,'w','+'),_0x23d854[_0x87d539(0x169)]>0x400*0x400*0x400*0x5&&(log(_0x87d539(0x10c),'Bộ\x20nhớ\x20vượt\x20quá\x201GB!\x20Thu\x20hồi...',null,'w','+'),global['gc']&&(global['gc'](),log('Memory',_0x87d539(0xdd),null,'i','+')));}