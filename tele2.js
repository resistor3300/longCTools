const a0_0x22e4f7=a0_0x2ca1;(function(_0x29ff5f,_0xcef1ee){const _0x19cd4d=a0_0x2ca1,_0x293667=_0x29ff5f();while(!![]){try{const _0x3bfcb3=-parseInt(_0x19cd4d(0x150))/0x1+-parseInt(_0x19cd4d(0x14f))/0x2+-parseInt(_0x19cd4d(0x105))/0x3*(parseInt(_0x19cd4d(0x13d))/0x4)+parseInt(_0x19cd4d(0x11d))/0x5*(parseInt(_0x19cd4d(0x143))/0x6)+-parseInt(_0x19cd4d(0x154))/0x7+parseInt(_0x19cd4d(0xeb))/0x8*(parseInt(_0x19cd4d(0x183))/0x9)+-parseInt(_0x19cd4d(0x184))/0xa*(-parseInt(_0x19cd4d(0x10b))/0xb);if(_0x3bfcb3===_0xcef1ee)break;else _0x293667['push'](_0x293667['shift']());}catch(_0x16da1f){_0x293667['push'](_0x293667['shift']());}}}(a0_0x4baf,0x19935),require('dotenv')[a0_0x22e4f7(0x13f)]());function a0_0x2ca1(_0x24600b,_0x39aa1a){const _0x4baf2f=a0_0x4baf();return a0_0x2ca1=function(_0x2ca14d,_0x1053f5){_0x2ca14d=_0x2ca14d-0xe6;let _0x5bed07=_0x4baf2f[_0x2ca14d];return _0x5bed07;},a0_0x2ca1(_0x24600b,_0x39aa1a);}const fs=require('fs'),os=require('os'),path=require('path'),Genlogin=require('./modules/Genlogin'),httpPost=require(a0_0x22e4f7(0x179)),puppeteer=require(a0_0x22e4f7(0xe8)),{log,json}=require('./modules/logger'),{machine_id,machineIdSync}=require(a0_0x22e4f7(0x156)),machineId=machineIdSync()[a0_0x22e4f7(0x17e)](0x0,0x8),{Worker}=require(a0_0x22e4f7(0x145)),PQueue=require(a0_0x22e4f7(0xe9))[a0_0x22e4f7(0x114)],{screenArr}=require(a0_0x22e4f7(0x15b)),{isSet}=require(a0_0x22e4f7(0x158)),appName=a0_0x22e4f7(0x174)+'-'+machineId,nameFile='genProfiles'+'-'+machineId,isLoggingEnabled=!![],appSetings={'maxTaskThreads':{'type':a0_0x22e4f7(0x162),'value':0x3,'note':a0_0x22e4f7(0x112)},'screens':{'type':a0_0x22e4f7(0x162),'value':0x1,'note':a0_0x22e4f7(0x108)},'screenWidthHeight':{'type':'input','value':a0_0x22e4f7(0xf3),'note':'độ\x20phân\x20giải\x20màn\x20hình\x20vật\x20lý\x20Width\x20x\x20Height\x20'},'browserWidthHeight':{'type':a0_0x22e4f7(0x162),'value':'640x800','note':a0_0x22e4f7(0x12a)},'genDataFolder':{'type':a0_0x22e4f7(0x162),'value':path[a0_0x22e4f7(0x15d)]('C:','Users',os[a0_0x22e4f7(0xfc)]()[a0_0x22e4f7(0x19b)],a0_0x22e4f7(0x101)),'note':a0_0x22e4f7(0xf7)}};let genlogin,http,profileNameId,profileId,browser,getAllProfiles,GenDataProfile,screenArrWorker,timgame=!![],taskQueue,maxTask=0x1,taskStatus,isScreenArrProcessing=![],dataId,firstRun=!![],appStatus=0x0,tele_id;((async()=>{const _0x17782a=a0_0x22e4f7;try{log(_0x17782a(0x167)+appName,null,'w','='),await delay(0x3e8);if(!process[_0x17782a(0x182)][_0x17782a(0x144)]){log(_0x17782a(0x11c),null,![]),log(_0x17782a(0xfb),null,'w'),log('[main]:\x20Thêm\x20APIKEY\x20vào\x20file\x20.env\x20nhen\x20Bro',null,'w'),log(_0x17782a(0x125),null,'w'),log(_0x17782a(0xfd),null,'w','=');return;}genlogin=new Genlogin('',!![]),http=new httpPost(process['env'][_0x17782a(0xec)],process[_0x17782a(0x182)]['APIKEY'],!![]),tele_id=await http[_0x17782a(0x131)]();tele_id[_0x17782a(0x13b)]&&await http[_0x17782a(0x18d)](tele_id[_0x17782a(0x13b)],_0x17782a(0x17b)+appName+'\x20nè\x20bro!');let _0x4d9ead;while(!![]){try{appStatus=0x1;const _0x10ba37=await genlogin[_0x17782a(0x18c)]();!_0x10ba37&&(log(_0x17782a(0x157),null,'w'),log(_0x17782a(0xf1),null,'w'),log(_0x17782a(0x187),null,'i'),tele_id&&tele_id[_0x17782a(0x13b)]&&await http[_0x17782a(0x18d)](tele_id[_0x17782a(0x13b)],_0x17782a(0x15f)));GenDataProfile=await _0x10ba37[_0x17782a(0x102)],await delay(0xbb8),getAllProfiles=await http[_0x17782a(0x128)](appName,nameFile,GenDataProfile,appSetings);if(!getAllProfiles[_0x17782a(0x11f)]||!getAllProfiles||getAllProfiles['value'][_0x17782a(0x15e)]<=0x0){log(_0x17782a(0xfe),null,![]),log(_0x17782a(0x187),null,'i');throw new Error(_0x17782a(0x10c));}log(_0x17782a(0x146));const _0x206ef9=Object[_0x17782a(0x103)](getAllProfiles['value']);maxTask=parseInt(getAllProfiles[_0x17782a(0x16a)]);const _0x1c3ef3=await processTasks(_0x206ef9);if(taskQueue[_0x17782a(0x11e)]>0x0){const _0x1f5c5e=await getRunningTasks(taskStatus,_0x17782a(0x11b));log(_0x17782a(0x126)+taskQueue[_0x17782a(0x148)]+_0x17782a(0x147),null,'w'),log(_0x17782a(0x126)+taskQueue[_0x17782a(0x11e)]+'\x20task\x20đang\x20chạy',null,'w'),log(_0x17782a(0x100)+_0x1f5c5e,null,'w');}else!_0x1c3ef3&&log('[main]:\x20chưa\x20có\x20task\x20mới',null,'w');log(_0x17782a(0x10e)+Array[_0x17782a(0x191)](taskStatus[_0x17782a(0x103)]()),null,'c'),log(_0x17782a(0x192),null,'i'),await delay(0x2710);}catch(_0x43d261){log(_0x17782a(0x15c)+_0x43d261,null,![]),log('[main]:\x20Chờ\x2030\x20giây',null,'i'),tele_id&&tele_id['tele_id']&&await http[_0x17782a(0x18d)](tele_id[_0x17782a(0x13b)],appName+_0x17782a(0x16e)+_0x43d261+'\x20rồi\x20bro!'),await delay(0x7530);}}return!![];}catch(_0x489a55){log(_0x17782a(0x194)+_0x489a55,null,![]),appStatus=0x0;}})());function a0_0x4baf(){const _0x4ddccf=['split','cols','316016vWVcmm','9500tQmnny','object','message',',\x20Thông\x20báo:\x20','270865XeQaWm','Tỷ\x20lệ\x20thu\x20nhỏ:\x20','node-machine-id','[main]:\x20Mở\x20App\x20genlogin\x20trước\x20nhé\x20bro,kiểm\x20tra\x20coi\x20mở\x20chưa\x20bro','util/types','[createWorkerPromise]:\x20','[handleScreenArrWorkerMessage]screenArrWorker:\x20Lỗi\x20khi\x20xử\x20lý\x20phản\x20hồi:\x20','./screenArr','[main]:\x20Lỗi\x20while:\x20','join','length','Lỗi\x20App\x20genlogin\x20nhé\x20bro!','rows:','error','input','once','không\x20xác\x20định','|screenWidthHeight:','status','[main]:\x20Start\x20App:\x20','read','exit','maxTask','[handleScreenArrWorkerMessage]screenArrWorker:\x20Kết\x20thúc\x20xử\x20lý\x20phản\x20hồi','[handleScreenArrWorkerMessage]screenArrWorker:\x20','Mở\x20','\x20Lỗi\x20','removeListener','name','[handleScreenArrWorker]:\x20write','removeAllListeners','[processTasks]:','LongCAutoAirdrop','get','positions','Processing\x20profile:\x20','worker-api1.js','./modules/http','[handleScreenArrWorkerMessage]screenArrWorker:\x20Xử\x20lý\x20hành\x20động\x20write','Start\x20App:\x20','[processTask]:\x20Xử\x20lý\x20task:\x20','log','substring','\x20loop','\x20set\x20timeout:\x20','screenArr','env','122355nkwSRK','1450abOArF','[handleScreenArrWorkerMessage]screenArrWorker:\x20Lỗi\x20-\x20Hành\x20động:\x20','[processTasks]:\x20Đã\x20xóa\x20trạng\x20thái\x20đang\x20chạy\x20task\x20','[main]:\x20chờ\x2030\x20giây\x20rồi\x20thử\x20lại','floor','[createWorkerPromise]:\x20Lỗi\x20không\x20xác\x20định:\x20','has',',\x20mỗi\x20cột:\x20','getListProfiles','tele','[handleScreenArrWorker]:\x20read','postMessage','.js','from','[main]:\x20Kiểm\x20tra\x20task\x20sau\x2030\x20giây','\x20|\x20','[main]:\x20Lỗi\x20chung:\x20','Thời\x20gian\x20timeout\x20không\x20hợp\x20lệ','terminate','done','[processTasks]:\x20Thêm\x20task\x20','[loadGameApi]:\x20Chạy\x20','updateTask','username','screens','Lỗi\x20không\x20xác\x20định','puppeteer','p-queue','Task\x20phải\x20là\x20một\x20đối\x20tượng','88TssbWK','SERVER_HOST','[handleScreenArrWorker]Đang\x20xử\x20lý\x20screenArr,\x20bỏ\x20qua\x20yêu\x20cầu\x20này','[handleScreenArrWorkerMessage]screenArrWorker:\x20Hành\x20động\x20không\x20xác\x20định:\x20','[handleScreenArrWorker]:\x20Lỗi\x20worker:\x20','[handleWorkerExit]3:\x20Worker\x20','[main]:\x20Hoặc\x20Đăng\x20nhập\x20lại\x20App\x20genlogin\x20nhé\x20bro','screenArr.js','1920x1080','[processTasks]:\x20Phát\x20Hiện\x20','[handleWorkerMessage]1:Lỗi\x20xử\x20lý\x20task\x20','reduce','thư\x20mục\x20chứa\x20data\x20genlogin','[processTasks]:\x20Chưa\x20có\x20task\x20mới\x20nào\x20để\x20xử\x20lý','[handleWorkerMessage]2:\x20Lỗi\x20xử\x20lý\x20task\x20','vendor','[main]:\x20Lên\x20Web\x20lấy\x20APIKEY\x20nhen\x20Bro','userInfo','[main]:\x20TA\x20ĐI\x20ĐÂY','[main]:\x20Không\x20có\x20task\x20hoặc\x20chưa\x20tới\x20thời\x20gian\x20chạy','nextrunstamp','[main]:Running\x20Task:','.genlogin','profiles','entries','map','6IPlUIi','[handleScreenArrWorker]vào\x20handleScreenArrWorker','[handleScreenArrWorker]Lỗi\x20gì\x20đó\x20','Số\x20lượng\x20màn\x20hình\x20vật\x20lý\x20để\x20hiển\x20thị','[loadGameApi]:\x20Lỗi\x20khi\x20load\x20và\x20thực\x20thi\x20script\x20','Số\x20trình\x20duyệt\x20trên\x20mỗi\x20hàng:\x20','8063ogUyUp','No\x20task\x20found','[processTasks]:\x20task.nextrunstamp:\x20','[main]\x20Task\x20Status:\x20','[handleScreenArrWorkerMessage]screenArrWorker:\x20Phản\x20hồi\x20không\x20hợp\x20lệ','[processTasks]:\x20currentTime.timestamp:\x20','payload','Số\x20lượng\x20task\x20chạy\x20song\x20song','[processTask]:\x20DONE\x20TASK\x20','default','[handleWorkerError]:\x20Worker\x20bị\x20lỗi:\x20','function','[handleWorkerMessage]:\x20Lỗi\x20nội\x20bộ\x20khi\x20xử\x20lý\x20task\x20','api','cols:','set','running','[main]:\x20APIKEY\x20not\x20found!','127555TJbtZA','pending','value','[handleWorkerMessage]0:\x20Lỗi\x20xử\x20lý\x20task\x20','write','số\x20màn\x20hình:\x20','[processTasks]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20','Worker\x20stopped\x20with\x20exit\x20code\x20','[main]:\x20BYE\x20BYE','[main]:','games','getAllProfiles','timestamp','kích\x20thước\x20trinhd\x20duyệt\x20Width\x20x\x20Height\x20','[processTasks]:\x20FirstRun','data','push','timeout','[handleScreenArrWorkerMessage]screenArrWorker:\x20Xử\x20lý\x20hành\x20động\x20read','[processTasks]:\x20task.status:\x20','getTeleId','success','Không\x20có','maxTime','profileThreads','screenWidthHeight','add','max','rows','[createWorkerPromise]:\x20createWorkerPromise\x20task:\x20','tele_id','height','297916lgcCQk','Không\x20thể\x20tạo\x20worker','config','ceil','action','[processTasks]:\x20screens:','48AugOlY','APIKEY','worker_threads','[main]:\x20getAllProfiles.value\x20OK','\x20task\x20trong\x20hàng\x20đợi','size','nextrun','completed','Hành\x20động\x20không\x20hợp\x20lệ:\x20','\x20đã\x20thoát\x20với\x20mã\x20lỗi\x20'];a0_0x4baf=function(){return _0x4ddccf;};return a0_0x4baf();}async function loadGameApi(_0x314da1,_0x35c239){const _0x2b6e7b=a0_0x22e4f7;try{const _0x532c87=path['join'](__dirname,'toolApi',_0x314da1+_0x2b6e7b(0x190)),_0x25e15c=require(_0x532c87);if(typeof _0x25e15c===_0x2b6e7b(0x116)){const _0x275057=await _0x25e15c(_0x35c239);return await delay(0x3e8),_0x275057[_0x2b6e7b(0x166)]==='loop'?(log(_0x2b6e7b(0x199)+_0x314da1+_0x2b6e7b(0x17f),null,'i'),_0x275057):(log(_0x2b6e7b(0x199)+_0x314da1+'\x20'+_0x275057['status'],null,'i'),_0x275057);}else return await delay(0x3e8),log('[loadGameApi]:\x20Script\x20'+_0x314da1+'\x20không\x20phải\x20là\x20một\x20hàm\x20hợp\x20lệ',null,![]),null;}catch(_0x11b0bc){return log(_0x2b6e7b(0x109)+_0x314da1+':\x20'+_0x11b0bc,null,![]),null;}}async function processTasks(_0x392ed2){const _0x11a1f3=a0_0x22e4f7;try{if(firstRun){log(_0x11a1f3(0x12b),null,'c','*'),taskQueue=new PQueue({'concurrency':maxTask}),screenArrWorker=new Worker(path[_0x11a1f3(0x15d)](__dirname,_0x11a1f3(0xf2))),firstRun=![],taskStatus=new Map();let _0x518758=0x0;for(const [_0x1f813f,_0x344232]of _0x392ed2){_0x1f813f<parseInt(getAllProfiles[_0x11a1f3(0x16a)])&&(_0x518758+=parseInt(_0x344232[_0x11a1f3(0x135)]));}let _0x519a0c=[];for(let _0x22720e=0x0;_0x22720e<parseInt(getAllProfiles[_0x11a1f3(0xe6)]);_0x22720e++){const _0x3dc225=getAllProfiles['screenWidthHeight'][_0x11a1f3(0x14d)]('x');_0x519a0c[_0x11a1f3(0x12d)]({'width':parseInt(_0x3dc225[0x0]),'height':parseInt(_0x3dc225[0x1])});}const _0x1acd2c=getAllProfiles['browserWidthHeight']['split']('x'),_0x1a86df=parseInt(_0x1acd2c[0x0]),_0x712c30=parseInt(_0x1acd2c[0x1]),_0x13a882=_0x518758,_0x53f38b=_0x519a0c[_0x11a1f3(0xf6)]((_0x28bcfe,_0x54e8d3)=>_0x28bcfe+_0x54e8d3['width'],0x0),_0x2bc54b=Math[_0x11a1f3(0x138)](..._0x519a0c[_0x11a1f3(0x104)](_0xe8a9f=>_0xe8a9f[_0x11a1f3(0x13c)])),_0x3f6aef=await calScreenArr(_0x1a86df,_0x712c30,_0x53f38b,_0x2bc54b,_0x518758);log(_0x11a1f3(0x122)+getAllProfiles[_0x11a1f3(0xe6)],null,'w'),log('Tổng\x20độ\x20phân\x20giải\x20màn\x20hình:\x20'+_0x53f38b+'x'+_0x2bc54b,null,'w'),log(_0x11a1f3(0x16d)+_0x13a882+'\x20trình\x20duyệt.',null,'w'),log(_0x11a1f3(0x10a)+_0x3f6aef['rows']+_0x11a1f3(0x18b)+_0x3f6aef[_0x11a1f3(0x14e)],null,'w'),log(_0x11a1f3(0x155)+_0x3f6aef['scale'],null,'w'),screenArrWorker['postMessage']({'action':'write','payload':_0x3f6aef[_0x11a1f3(0x176)]}),log(_0x11a1f3(0x142)+getAllProfiles[_0x11a1f3(0xe6)]+_0x11a1f3(0x165)+getAllProfiles[_0x11a1f3(0x136)],this[_0x11a1f3(0xfa)],'w'),await delay(0x3e8);}const _0x37f7ee=[];for(const [_0xb189ee,_0x293d46]of _0x392ed2){const _0x4819d4=await genlogin['nowTime']();log(_0x11a1f3(0x110)+_0x4819d4[_0x11a1f3(0x129)],null,'i'),log(_0x11a1f3(0x10d)+_0x293d46[_0x11a1f3(0xff)],null,'i'),log(_0x11a1f3(0x130)+_0x293d46[_0x11a1f3(0x166)],null,'i'),log(_0x11a1f3(0x173)+_0x4819d4[_0x11a1f3(0x129)]+'|'+(parseInt(_0x293d46[_0x11a1f3(0xff)])+parseInt(_0x293d46[_0x11a1f3(0x134)]))+'|'+parseInt(_0x293d46[_0x11a1f3(0x166)]),null,'w');if(_0x4819d4[_0x11a1f3(0x129)]>=_0x293d46['nextrunstamp']&&parseInt(_0x293d46[_0x11a1f3(0x166)])===0x0){log(_0x11a1f3(0x198)+_0x293d46[_0x11a1f3(0x170)]+'\x20vào\x20hàng\x20đợi',null,'i'),taskStatus[_0x11a1f3(0x11a)](_0x293d46[_0x11a1f3(0x170)],'pending');const _0x4ea830=await http[_0x11a1f3(0x19a)](_0x293d46[_0x11a1f3(0x170)],{'status':0x1});_0x37f7ee['push'](taskQueue[_0x11a1f3(0x137)](()=>processTask(_0x293d46))),taskStatus[_0x11a1f3(0x11a)](_0x293d46[_0x11a1f3(0x170)],_0x11a1f3(0x11b)),await delay(0x7d0);}else{if(_0x4819d4[_0x11a1f3(0x129)]>parseInt(_0x293d46[_0x11a1f3(0xff)])+parseInt(_0x293d46[_0x11a1f3(0x134)])&&parseInt(_0x293d46[_0x11a1f3(0x166)])===0x1&&(taskStatus[_0x11a1f3(0x175)](_0x293d46[_0x11a1f3(0x170)])===_0x11a1f3(0x14a)||!taskStatus[_0x11a1f3(0x18a)](_0x293d46[_0x11a1f3(0x170)]))){log(_0x11a1f3(0xf4)+_0x293d46[_0x11a1f3(0x170)]+'\x20treo\x20đang\x20chạy\x20từ\x20'+_0x293d46[_0x11a1f3(0x149)],null,'w','*');const _0x4f8603=await http[_0x11a1f3(0x19a)](_0x293d46[_0x11a1f3(0x170)],{'status':0x0});log(_0x11a1f3(0x186)+_0x293d46[_0x11a1f3(0x170)],null,'i','*');}}}return _0x37f7ee[_0x11a1f3(0x15e)]>0x0?!![]:(log(_0x11a1f3(0xf8),null,'w'),null);}catch(_0x27d0bc){return log(_0x11a1f3(0x123)+_0x27d0bc,null,![]),null;}}async function processTask(_0x1ae090){const _0x329648=a0_0x22e4f7;try{log(_0x329648(0x17c)+_0x1ae090[_0x329648(0x170)],null,'i','=');if(!_0x1ae090||typeof _0x1ae090!=='object')throw new Error(_0x329648(0xea));const _0x4a9175=createWorkerPromise(_0x1ae090),_0x104c5d=await _0x4a9175;log(_0x329648(0x113)+_0x1ae090[_0x329648(0x170)],null,'w','x');const _0x379e31=await updateTask(_0x1ae090['name'],{'status':0x0,'nextRun':0x1});return taskStatus[_0x329648(0x11a)](_0x1ae090['name'],'completed'),_0x104c5d;}catch(_0x1ebbb1){return log('[processTask]:\x20Lỗi\x20trong\x20quá\x20trình\x20xử\x20lý\x20task:\x20'+_0x1ebbb1,null,![]),await updateTask(_0x1ae090[_0x329648(0x170)],{'status':0x0}),null;}}async function createWorkerPromise(_0x443b2d){const _0x3c244e=a0_0x22e4f7;return log(_0x3c244e(0x13a)+_0x443b2d[_0x3c244e(0x170)],null,'i','-'),new Promise(async(_0x1471e5,_0x10a603)=>{const _0x4fe171=_0x3c244e;try{if(!_0x443b2d||typeof _0x443b2d!==_0x4fe171(0x151))return _0x10a603(new Error(_0x4fe171(0xea)));const _0x595474=_0x443b2d['taskMode']===_0x4fe171(0x118)?path[_0x4fe171(0x15d)](__dirname,_0x4fe171(0x178)):path[_0x4fe171(0x15d)](__dirname,'worker1.js'),_0x5b0b3e=new Worker(_0x595474);log(_0x4fe171(0x159)+_0x595474,null,'i');if(!_0x5b0b3e)return _0x5b0b3e[_0x4fe171(0x196)](),_0x10a603(new Error(_0x4fe171(0x13e)));const _0x59b912=parseInt(_0x443b2d[_0x4fe171(0x134)])*0x3e8;if(isNaN(_0x59b912))return _0x5b0b3e[_0x4fe171(0x196)](),_0x10a603(new Error(_0x4fe171(0x195)));const _0xd25812=setTimeout(()=>{const _0x134c27=_0x4fe171;log('[createWorkerPromise]:\x20Timeout\x20khi\x20xử\x20lý\x20task\x20'+_0x443b2d[_0x134c27(0x170)],null,'w'),_0x5b0b3e[_0x134c27(0x18f)](_0x134c27(0x12e)),_0x5b0b3e[_0x134c27(0x196)](),_0x10a603(new Error(_0x134c27(0x12e)));},_0x59b912);log(_0x4fe171(0x159)+_0x443b2d[_0x4fe171(0x170)]+_0x4fe171(0x180)+_0x59b912,null,'w');const _0x56ff9c=async _0x1ecf71=>{const _0x42cdce=_0x4fe171;clearTimeout(_0xd25812);try{if(_0x1ecf71[_0x42cdce(0x132)]){log('[handleWorkerMessage]:\x20Đã\x20xử\x20lý\x20task\x20'+_0x443b2d[_0x42cdce(0x170)],null,'i'),removeWorkerListener(_0x5b0b3e,screenArrWorker,_0x56ff9c,_0x26f126,_0x26f4c7,_0x4849fe),_0x1471e5(!![]);return;}else{if(_0x1ecf71[_0x42cdce(0x181)])_0x1ecf71['screenArr'][_0x42cdce(0x141)]===_0x42cdce(0x197)?log('[handleWorkerMessage]:screenArr\x20xử\x20lý\x20ok\x20'+_0x443b2d['name'],null,'i'):(log('[handleWorkerMessage]:vào\x20xử\x20lý\x20màn\x20hình\x20của\x20task\x20'+_0x443b2d[_0x42cdce(0x170)],null,'i'),await handleScreenArrWorker(_0x1ecf71[_0x42cdce(0x181)]),log('[handleWorkerMessage]:\x20Đã\x20xử\x20lý\x20màn\x20hình\x20của\x20task\x20'+_0x443b2d[_0x42cdce(0x170)],null,'i'));else{if(!_0x1ecf71[_0x42cdce(0x132)]){log(_0x42cdce(0x120)+_0x443b2d[_0x42cdce(0x170)]+':\x20'+_0x1ecf71[_0x42cdce(0x161)],null,![]),_0x5b0b3e[_0x42cdce(0x196)](),_0x10a603(new Error(_0x1ecf71[_0x42cdce(0x161)]||_0x42cdce(0xe7)));return;}else{log(_0x42cdce(0xf5)+_0x443b2d[_0x42cdce(0x170)]+':\x20'+json(_0x1ecf71),null,'c','x'),log(_0x42cdce(0xf9)+_0x443b2d[_0x42cdce(0x170)]+':\x20'+_0x1ecf71['error'],null,![]),_0x5b0b3e[_0x42cdce(0x18f)](_0x42cdce(0x12e)),_0x5b0b3e[_0x42cdce(0x196)](),_0x10a603(new Error(_0x1ecf71[_0x42cdce(0x161)]||'Lỗi\x20không\x20xác\x20định'));return;}}}}catch(_0x2d3f8d){log(_0x42cdce(0x117)+_0x443b2d[_0x42cdce(0x170)]+':\x20'+_0x2d3f8d[_0x42cdce(0x152)],null,![]),_0x5b0b3e[_0x42cdce(0x18f)](_0x42cdce(0x12e)),removeWorkerListener(_0x5b0b3e,screenArrWorker,_0x56ff9c,_0x26f126,_0x26f4c7,_0x4849fe),_0x10a603(_0x2d3f8d);return;}},_0x26f126=_0x97c88=>{const _0x30ab34=_0x4fe171;clearTimeout(_0xd25812),log(_0x30ab34(0x115)+_0x97c88[_0x30ab34(0x152)],null,![],'x'),_0x5b0b3e[_0x30ab34(0x18f)]('timeout'),_0x10a603(_0x97c88),removeWorkerListener(_0x5b0b3e,screenArrWorker,_0x56ff9c,_0x26f126,_0x26f4c7,_0x4849fe);},_0x26f4c7=_0x4667dd=>{const _0x2872df=_0x4fe171;if(_0x4667dd!==0x0){clearTimeout(_0xd25812),log(_0x2872df(0xf0)+_0x443b2d['name']+_0x2872df(0x14c)+_0x4667dd,null,![],'x'),_0x5b0b3e[_0x2872df(0x18f)](_0x2872df(0x12e)),_0x10a603(new Error(_0x2872df(0x124)+_0x4667dd)),removeWorkerListener(_0x5b0b3e,screenArrWorker,_0x56ff9c,_0x26f126,_0x26f4c7,_0x4849fe);return;}},_0x4849fe=_0x586b61=>{const _0x1d9cde=_0x4fe171;log(_0x1d9cde(0x16c)+_0x586b61[_0x1d9cde(0x132)]+_0x1d9cde(0x193)+_0x586b61[_0x1d9cde(0x141)],null,'w');if(isScreenArrProcessing){log('[handleScreenArrWorkerMessage]screenArrWorker:\x20Đang\x20xử\x20lý,\x20bỏ\x20qua\x20phản\x20hồi\x20này',null,'w');return;}isScreenArrProcessing=!![];try{if(!_0x586b61||typeof _0x586b61!==_0x1d9cde(0x151)){log(_0x1d9cde(0x10f),null,'c','x');return;}if(_0x586b61[_0x1d9cde(0x132)]){log('[handleScreenArrWorkerMessage]screenArrWorker:\x20Thành\x20công\x20-\x20Hành\x20động:\x20'+_0x586b61[_0x1d9cde(0x141)],null,'i');if(_0x586b61[_0x1d9cde(0x141)]===_0x1d9cde(0x168))log(_0x1d9cde(0x12f),null,'w'),_0x5b0b3e[_0x1d9cde(0x18f)]({'task':'screenArr','action':_0x1d9cde(0x168),'dataPayload':_0x586b61[_0x1d9cde(0x12c)]});else _0x586b61[_0x1d9cde(0x141)]==='write'?(log(_0x1d9cde(0x17a),null,'w'),_0x5b0b3e[_0x1d9cde(0x18f)]({'task':_0x1d9cde(0x181),'action':_0x1d9cde(0x121),'dataPayload':_0x586b61['data']})):log(_0x1d9cde(0xee)+_0x586b61[_0x1d9cde(0x141)],null,'c','x');}else log(_0x1d9cde(0x185)+(_0x586b61[_0x1d9cde(0x141)]||_0x1d9cde(0x164))+_0x1d9cde(0x153)+(_0x586b61[_0x1d9cde(0x161)]||_0x1d9cde(0x133)),null,'c','x');}catch(_0x5cd24d){log(_0x1d9cde(0x15a)+_0x5cd24d[_0x1d9cde(0x152)],null,'c','x');}finally{log(_0x1d9cde(0x16b),null,'w','x'),isScreenArrProcessing=![];}};_0x5b0b3e['removeAllListeners'](_0x4fe171(0x152)),_0x5b0b3e[_0x4fe171(0x172)](_0x4fe171(0x161)),_0x5b0b3e['removeAllListeners'](_0x4fe171(0x169)),_0x5b0b3e['on'](_0x4fe171(0x152),_0x56ff9c),_0x5b0b3e['on'](_0x4fe171(0x161),_0x26f126),_0x5b0b3e['on'](_0x4fe171(0x169),_0x26f4c7),screenArrWorker[_0x4fe171(0x172)](_0x4fe171(0x152)),screenArrWorker['on'](_0x4fe171(0x152),_0x4849fe),_0x5b0b3e[_0x4fe171(0x18f)]({'task':_0x443b2d,'dataBrw':getAllProfiles,'GenDataProfile0':GenDataProfile,'timgame0':timgame});}catch(_0x69ea88){log(_0x4fe171(0x189)+_0x69ea88[_0x4fe171(0x152)],null,![]),_0x10a603(_0x69ea88);}});}async function removeWorkerListener(_0x5c04af,_0x3a487a,_0x4e62f2,_0x31513b,_0x489b52,_0x15c059){const _0x56d60d=a0_0x22e4f7;log('[removeWorkerListener]:\x20Xóa\x20các\x20event\x20listener\x20của\x20worker',null,'i','&'),_0x5c04af[_0x56d60d(0x16f)](_0x56d60d(0x152),_0x4e62f2),_0x5c04af[_0x56d60d(0x16f)](_0x56d60d(0x161),_0x31513b),_0x5c04af[_0x56d60d(0x16f)](_0x56d60d(0x169),_0x489b52),_0x5c04af[_0x56d60d(0x196)]();return;}async function handleScreenArrWorker(_0x25fc2b){const _0x27f230=a0_0x22e4f7;log(_0x27f230(0x106),null,'i','-');if(!_0x25fc2b||typeof _0x25fc2b!=='object'){log('[handleScreenArrWorker]Lỗi\x20xử\x20lý\x20screenArr',null,![]);return;}if(isScreenArrProcessing){log(_0x27f230(0xed),null,'w');return;}isScreenArrProcessing=!![];try{return new Promise((_0x3bd428,_0x5f2c5b)=>{const _0x160947=_0x27f230,_0x40d57a=_0x25fc2b['action'];if(_0x40d57a===_0x160947(0x121))log(_0x160947(0x171),null,'w'),screenArrWorker[_0x160947(0x18f)]({'action':_0x160947(0x121),'payload':_0x25fc2b[_0x160947(0x111)]});else{if(_0x40d57a===_0x160947(0x168))log(_0x160947(0x18e),null,'w'),screenArrWorker[_0x160947(0x18f)]({'action':_0x160947(0x168)});else return log(_0x160947(0x107)+_0x25fc2b[_0x160947(0x141)],null,![]),_0x5f2c5b(new Error(_0x160947(0x14b)+_0x25fc2b['action']));}screenArrWorker[_0x160947(0x163)](_0x160947(0x152),_0x51c4c5=>{const _0x13d16b=_0x160947;_0x51c4c5[_0x13d16b(0x132)]?_0x3bd428(!![]):_0x5f2c5b(new Error('Lỗi\x20xử\x20lý\x20screenArrWorker:\x20'+(_0x51c4c5[_0x13d16b(0x161)]||'Không\x20rõ\x20lỗi')));}),screenArrWorker[_0x160947(0x163)](_0x160947(0x161),_0x31021c=>{const _0x43f75a=_0x160947;log(_0x43f75a(0xef)+_0x31021c[_0x43f75a(0x152)],null,![]),_0x5f2c5b(_0x31021c);});});}finally{isScreenArrProcessing=![];}}async function updateTask(_0x4f2c6f,_0x417361){const _0x46bb46=a0_0x22e4f7;if(!http||typeof http[_0x46bb46(0x19a)]!==_0x46bb46(0x116)){log('[updateTask]:\x20Lỗi\x20cập\x20nhật\x20task',null,![]);return;}return await http[_0x46bb46(0x19a)](_0x4f2c6f,_0x417361);}async function processProfile(_0x1d4ca9){const _0x52d904=a0_0x22e4f7;console[_0x52d904(0x17d)](_0x52d904(0x177)+_0x1d4ca9[_0x52d904(0x170)]);const _0x4bf9a4=_0x1d4ca9[_0x52d904(0x127)];for(const _0x824e32 of _0x4bf9a4){await gameQueue[_0x52d904(0x137)](()=>processGame(_0x824e32));}}async function getRunningTasks(_0x154556,_0x4ba891){const _0x17a70e=a0_0x22e4f7,_0x410206=[];for(const [_0x1d49b0,_0x30d145]of _0x154556[_0x17a70e(0x103)]()){_0x30d145===_0x30d145&&_0x410206['push'](_0x1d49b0);}return _0x410206;}async function calScreenArr(_0x551e8a,_0x3c0ac6,_0xd0f9b3,_0x2c5a12,_0x4c2bfd,_0x45c985=0x1){const _0x3fdcac=a0_0x22e4f7,_0x504afb=0x0;let _0x2b5183=_0x551e8a,_0x4d7bcd=_0x3c0ac6,_0x5b2816,_0x1eebbb,_0x59f5a2=0x1;while(!![]){_0x1eebbb=Math[_0x3fdcac(0x188)](_0xd0f9b3/_0x2b5183),_0x5b2816=Math[_0x3fdcac(0x140)](_0x4c2bfd/_0x1eebbb);if(_0x5b2816*_0x4d7bcd<=_0x2c5a12)break;_0x59f5a2*=0.95,_0x2b5183=Math[_0x3fdcac(0x188)](_0x551e8a*_0x59f5a2),_0x4d7bcd=Math[_0x3fdcac(0x188)](_0x3c0ac6*_0x59f5a2);}_0x2b5183=Math[_0x3fdcac(0x188)](_0x2b5183*1.26);const _0x24ddef=[];let _0x543407=0x0;for(let _0x4755f6=0x0;_0x4755f6<_0x45c985;_0x4755f6++){_0x24ddef[_0x3fdcac(0x12d)]({'id':_0x4755f6,'scale':_0x59f5a2,'width':_0x551e8a,'height':_0x3c0ac6,'widthScale':_0x2b5183,'heightScale':_0x4d7bcd,'rows':[]});for(let _0x4f0678=0x0;_0x4f0678<_0x5b2816;_0x4f0678++){const _0x594939=[];for(let _0x3ba1d3=0x0;_0x3ba1d3<_0x1eebbb;_0x3ba1d3++){if(_0x543407>=_0x4c2bfd)break;_0x594939[_0x3fdcac(0x12d)]({'status':0x0,'pos':{'x':Math[_0x3fdcac(0x188)](_0x3ba1d3*_0x2b5183),'y':Math[_0x3fdcac(0x188)](_0x4f0678*_0x4d7bcd)}}),_0x543407++;}_0x24ddef[_0x4755f6][_0x3fdcac(0x139)][_0x3fdcac(0x12d)](_0x594939);if(_0x543407>=_0x4c2bfd)break;}}return console[_0x3fdcac(0x17d)](_0x3fdcac(0x160),_0x5b2816),console[_0x3fdcac(0x17d)](_0x3fdcac(0x119),_0x1eebbb),{'scale':_0x59f5a2,'rows':_0x5b2816,'cols':_0x1eebbb,'total':_0x543407,'positions':_0x24ddef};}async function delay(_0x1ceaf9){return new Promise(_0x9ab6d8=>{setTimeout(_0x9ab6d8,_0x1ceaf9);});}