const a0_0x42d44d=a0_0x410d;(function(_0x3bb88f,_0x3c372d){const _0x52e41f=a0_0x410d,_0x3e5620=_0x3bb88f();while(!![]){try{const _0x2d4382=parseInt(_0x52e41f(0xdb))/0x1*(-parseInt(_0x52e41f(0xb7))/0x2)+-parseInt(_0x52e41f(0xb4))/0x3+parseInt(_0x52e41f(0xcd))/0x4+-parseInt(_0x52e41f(0xe7))/0x5*(-parseInt(_0x52e41f(0xf8))/0x6)+-parseInt(_0x52e41f(0xc7))/0x7+-parseInt(_0x52e41f(0xec))/0x8+-parseInt(_0x52e41f(0xbe))/0x9*(-parseInt(_0x52e41f(0xe9))/0xa);if(_0x2d4382===_0x3c372d)break;else _0x3e5620['push'](_0x3e5620['shift']());}catch(_0x2a5097){_0x3e5620['push'](_0x3e5620['shift']());}}}(a0_0x5825,0x45bc3));import a0_0x484988 from'axios';function a0_0x410d(_0x2834e1,_0xa0bd0e){const _0x5825e8=a0_0x5825();return a0_0x410d=function(_0x410dfd,_0xded9b2){_0x410dfd=_0x410dfd-0xb4;let _0x2a1ffc=_0x5825e8[_0x410dfd];return _0x2a1ffc;},a0_0x410d(_0x2834e1,_0xa0bd0e);}import a0_0x22370f from'querystring';import a0_0x2be4dd from'qs';import{log,json}from'./logger.js';class HttpClient{constructor(_0x5e8e58,_0x22275c,_0x5bc375=![]){const _0x5665c2=a0_0x410d;this[_0x5665c2(0xcf)]=_0x5e8e58,this[_0x5665c2(0xd5)]=_0x22275c,this['debug']=_0x5bc375,this[_0x5665c2(0xc9)]=_0x5665c2(0xdc);}async[a0_0x42d44d(0xbb)](_0x5380bd='',_0x5c0055,_0x41b839,_0xa70339=0x7530){const _0x19a863=a0_0x42d44d;try{const _0x19c88f=a0_0x22370f['stringify'](_0x41b839),_0x3141a5=await a0_0x484988[_0x19a863(0xef)](''+this[_0x19a863(0xcf)]+_0x5c0055,_0x19c88f,{'headers':{'Content-Type':_0x19a863(0xf5),'Dkm-Api-Key':this[_0x19a863(0xd5)]},'timeout':_0xa70339});return _0x3141a5[_0x19a863(0xce)];}catch(_0x426ab2){return _0x426ab2['code']===_0x19a863(0xd6)?log(_0x5380bd,'[httpPost]\x20Yêu\x20cầu\x20POST\x20bị\x20timeout\x20sau\x20'+_0xa70339+_0x19a863(0xe4)+_0x426ab2[_0x19a863(0xbc)],this['vendor'],![]):log(_0x5380bd,_0x19a863(0xf3)+_0x426ab2['message'],this[_0x19a863(0xc9)],![]),![];}}async['httpPostJson'](_0x1230b9='',_0x16cb0f,_0x55f128,_0x47332d=0x7530){const _0x5ec13e=a0_0x42d44d;try{const _0x4108db=await a0_0x484988[_0x5ec13e(0xef)](''+this['baseURL']+_0x16cb0f,_0x55f128,{'headers':{'Content-Type':'application/json','Dkm-Api-Key':this[_0x5ec13e(0xd5)]},'timeout':_0x47332d});return _0x4108db[_0x5ec13e(0xce)];}catch(_0x368227){return _0x368227[_0x5ec13e(0xf6)]===_0x5ec13e(0xd6)?log(_0x1230b9,_0x5ec13e(0xc1)+_0x47332d+_0x5ec13e(0xe4)+_0x368227[_0x5ec13e(0xbc)],this[_0x5ec13e(0xc9)],![]):log(_0x1230b9,_0x5ec13e(0xe3)+_0x368227[_0x5ec13e(0xbc)],this[_0x5ec13e(0xc9)],![]),![];}}async[a0_0x42d44d(0xb5)](_0x3c3c7d='',_0x1e9803,_0x322340){const _0x1afe0c=a0_0x42d44d,_0x239784={'username':this[_0x1afe0c(0xbf)],'password':this['password'],'action':_0x1afe0c(0xb5),'pid':_0x1e9803,'index':_0x322340};try{const _0x3c838e=await this[_0x1afe0c(0xbb)](_0x3c3c7d,_0x1afe0c(0xe8),_0x239784);return _0x3c838e;}catch(_0x10ba11){return log(_0x3c3c7d,_0x1afe0c(0xca)+_0x10ba11,this[_0x1afe0c(0xc9)],![]),![];}}async['getBotAll'](_0x348ab9='',_0x46f1a8,_0x3a7c0f){const _0x53d408=a0_0x42d44d,_0x380281={'username':this[_0x53d408(0xbf)],'password':this[_0x53d408(0xc4)],'action':_0x53d408(0xea),'pid':_0x46f1a8};try{const _0x373e7a=await this['httpPost'](_0x348ab9,_0x53d408(0xe8),_0x380281);if(_0x373e7a['value']==='error')return log(_0x348ab9,_0x53d408(0xe0),this[_0x53d408(0xc9)],![]),null;return _0x373e7a;}catch(_0x43abd0){return log(_0x348ab9,_0x53d408(0xd4)+_0x43abd0,this[_0x53d408(0xc9)],![]),null;}}async['nextRunTime'](_0x3a1429='',_0x519bfe,_0x58b475,_0x16e9f3=0x0,_0xef6a7f=0x0){const _0x2c446e=a0_0x42d44d,_0x9a6c5a={'username':this['username'],'password':this[_0x2c446e(0xc4)],'action':'nextRunTime','pid':_0x519bfe,'botid':_0x58b475,'nextRun':_0x16e9f3,'nextRunStamp':_0xef6a7f};try{const _0x5b6a2d=await this['httpPost'](_0x3a1429,'/bot/api.php',_0x9a6c5a);return _0x5b6a2d;}catch(_0x4e45da){return log(_0x3a1429,'[nextRunTime]Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20nextRunTime:\x20'+_0x4e45da,this[_0x2c446e(0xc9)],![]),![];}}async[a0_0x42d44d(0xd7)](_0x5c7d93='',_0x3e9ecd,_0x48f209,_0x2c0304,_0x134b83,_0x57fe91){const _0x3f3ffe=a0_0x42d44d,_0x3e86e7={'username':this[_0x3f3ffe(0xbf)],'password':this[_0x3f3ffe(0xc4)],'action':_0x3f3ffe(0xd7),'pid':_0x3e9ecd,'cid':_0x48f209,'key':_0x2c0304,'taskName':_0x134b83,'status':_0x57fe91};try{const _0x5c458d=await this[_0x3f3ffe(0xbb)](_0x5c7d93,_0x3f3ffe(0xee),_0x3e86e7);return _0x5c458d;}catch(_0x39d4b6){return log(_0x5c7d93,'[saveCode]Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20saveCode:'+_0x39d4b6+')',this[_0x3f3ffe(0xc9)],![]),![];}}async[a0_0x42d44d(0xd3)](_0x2fb2e2='',_0x4cd0bb,_0x3e6480,_0x53ec2a,_0x52aeda){const _0x583d9b=a0_0x42d44d,_0x464ad1={'username':this[_0x583d9b(0xbf)],'password':this[_0x583d9b(0xc4)],'action':_0x583d9b(0xd3),'pid':_0x4cd0bb,'key':_0x3e6480,'taskName':_0x53ec2a,'status':_0x52aeda};try{const _0x4393f4=await this[_0x583d9b(0xbb)](_0x2fb2e2,_0x583d9b(0xee),_0x464ad1);return _0x4393f4;}catch(_0x4fa4b0){return log(_0x2fb2e2,_0x583d9b(0xc6)+_0x4fa4b0+')',this['vendor'],![]),![];}}async['updateData'](_0x8faf3c='',_0x3a524b,_0x5249b4,_0x2a0c93,_0x6d5155='running',_0x1864c6=null,_0x45c3be){const _0x1b4ad8=a0_0x42d44d,_0x594331={'username':this[_0x1b4ad8(0xbf)],'password':this['password'],'action':_0x1b4ad8(0xf4),'fileName':_0x3a524b,'ID':_0x5249b4,'Note':_0x2a0c93,'Status':_0x6d5155,'coin':_0x1864c6,'NextRun':_0x45c3be};try{const _0x351ccd=await this[_0x1b4ad8(0xbb)](_0x8faf3c,_0x1b4ad8(0xee),_0x594331);return _0x351ccd;}catch(_0x33cf4d){return log(_0x8faf3c,_0x1b4ad8(0xc0)+_0x33cf4d,this['vendor'],![]),![];}}async[a0_0x42d44d(0xd2)](_0x4d3a68='',_0x53911f,_0x11d7a0,_0x1a0ab5,_0x5c26ba,_0x479fc0,_0x8a53e7){const _0x3a98a8=a0_0x42d44d,_0x317c69={'username':this[_0x3a98a8(0xbf)],'password':this[_0x3a98a8(0xc4)],'action':'addData','fileName':_0x53911f,'TenGame':_0x11d7a0,'StartTime':_0x1a0ab5,'StopTime':_0x5c26ba,'Note':_0x479fc0,'Status':_0x8a53e7};try{const _0x4e1c9e=await this[_0x3a98a8(0xbb)](_0x4d3a68,'/api.php',_0x317c69);return _0x4e1c9e;}catch(_0xc0bfde){return log(_0x4d3a68,_0x3a98a8(0xe5)+_0xc0bfde,this[_0x3a98a8(0xc9)],![]),![];}}async[a0_0x42d44d(0xc3)](_0x186640='',_0x437309){const _0x575249=a0_0x42d44d;try{log(_0x186640,_0x575249(0xed)+_0x437309,this[_0x575249(0xc9)],'i');const _0xef4b57={'username':this['username'],'password':this['password'],'action':_0x575249(0xc3),'aks':_0x437309},_0x522855=await this['httpPost'](_0x186640,_0x575249(0xe8),_0xef4b57);return _0x522855;}catch(_0x14fef5){return log(_0x186640,'[getAks]Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20getAks:\x20'+_0x14fef5,this[_0x575249(0xc9)],![]),![];}}async[a0_0x42d44d(0xe6)](_0x3c3c4a='',_0x4c215e,_0x1cffeb,_0x3b1d58=0x7530){const _0x80def4=a0_0x42d44d,_0x1d9131={'username':this[_0x80def4(0xbf)],'password':this['password'],'action':_0x80def4(0xe6),'appName':_0x1cffeb,'pid':_0x4c215e},_0x5a8873=new Promise((_0x106dcb,_0x4ca66d)=>setTimeout(()=>_0x4ca66d(new Error(_0x80def4(0xcc))),_0x3b1d58));try{const _0xa509b6=await Promise['race']([this[_0x80def4(0xbb)](_0x3c3c4a,_0x80def4(0xee),_0x1d9131),_0x5a8873]);return log(_0x3c3c4a,_0x80def4(0xde)+JSON['stringify'](_0xa509b6,null,0x2),this[_0x80def4(0xc9)]),_0xa509b6;}catch(_0x5b2d7e){return log(_0x3c3c4a,_0x80def4(0xc5)+_0x5b2d7e['message'],this[_0x80def4(0xc9)],![]),![];}}async['getAllProfiles'](_0x212687='',_0x5a5a62,_0x55b047,_0x368477,_0x47abe1,_0x593a69=0x7530){const _0xc4e720=a0_0x42d44d,_0x2c1a20={'username':this[_0xc4e720(0xbf)],'password':this[_0xc4e720(0xc4)],'action':_0xc4e720(0xc8),'nameFile':_0x55b047,'appName':_0x5a5a62,'appsetings':a0_0x2be4dd[_0xc4e720(0xb6)](_0x47abe1),'profiles':a0_0x2be4dd[_0xc4e720(0xb6)](_0x368477)},_0x1da6c=new Promise((_0x596cbb,_0x1f891d)=>setTimeout(()=>_0x1f891d(new Error(_0xc4e720(0xcc))),_0x593a69));try{const _0x4435af=await Promise[_0xc4e720(0xdd)]([this[_0xc4e720(0xbb)](_0x212687,_0xc4e720(0xee),_0x2c1a20),_0x1da6c]);return log(_0x212687,_0xc4e720(0xd8),this[_0xc4e720(0xc9)]),_0x4435af;}catch(_0x152fe3){return log(_0x212687,_0xc4e720(0xcb)+_0x152fe3[_0xc4e720(0xbc)],this['vendor'],![]),![];}}async[a0_0x42d44d(0xd9)](_0xebdbf5='',_0x39cbe3,_0x138775=null,_0x355afa=0x7530){const _0x401aa0=a0_0x42d44d;_0x138775&&(_0x138775=JSON[_0x401aa0(0xb6)](_0x138775));const _0x362489={'username':this[_0x401aa0(0xbf)],'password':this[_0x401aa0(0xc4)],'action':'genDataProfiles','nameFile':_0x39cbe3,'genDataProfile':_0x138775},_0xab8380=new Promise((_0x592544,_0x3b42e6)=>setTimeout(()=>_0x3b42e6(new Error('Request\x20timed\x20out')),_0x355afa));try{const _0x233a4d=await Promise[_0x401aa0(0xdd)]([this['httpPost'](_0xebdbf5,_0x401aa0(0xee),_0x362489),_0xab8380]);return log(_0xebdbf5,_0x401aa0(0xf1),this[_0x401aa0(0xc9)]),_0x233a4d;}catch(_0xd33d0d){return log(_0xebdbf5,_0x401aa0(0xba)+_0xd33d0d[_0x401aa0(0xbc)],this[_0x401aa0(0xc9)],![]),![];}}async[a0_0x42d44d(0xf0)](_0x2a303a='',_0x43a779,_0x59c9c8=0x7530){const _0x1cce9b=a0_0x42d44d,_0x209469={'username':this[_0x1cce9b(0xbf)],'password':this[_0x1cce9b(0xc4)],'action':_0x1cce9b(0xf0),'taskName':_0x43a779},_0x2111df=new Promise((_0x177585,_0x39b515)=>setTimeout(()=>_0x39b515(new Error(_0x1cce9b(0xcc))),_0x59c9c8));try{const _0x4c2384=await Promise[_0x1cce9b(0xdd)]([this[_0x1cce9b(0xbb)](_0x2a303a,_0x1cce9b(0xee),_0x209469),_0x2111df]);return log(_0x2a303a,_0x1cce9b(0xb8),this[_0x1cce9b(0xc9)]),_0x4c2384;}catch(_0x17e9bc){return log(_0x2a303a,_0x1cce9b(0xf2)+_0x17e9bc[_0x1cce9b(0xbc)],this[_0x1cce9b(0xc9)],![]),![];}}async[a0_0x42d44d(0xc2)](_0x237ba6='',_0x31a647,_0x320819,_0xee77ae=0x7530){const _0x494fa5=a0_0x42d44d;try{const _0x162b86={'username':this['username'],'password':this[_0x494fa5(0xc4)],'action':'updateTask','taskName':_0x31a647,'status':_0x320819[_0x494fa5(0xe1)],'nextRun':_0x320819[_0x494fa5(0xd0)]},_0x9bef62=new Promise((_0x50f3ac,_0x4f5157)=>setTimeout(()=>_0x4f5157(new Error(_0x494fa5(0xcc))),_0xee77ae)),_0x3d77e0=await Promise[_0x494fa5(0xdd)]([this[_0x494fa5(0xbb)](_0x237ba6,_0x494fa5(0xee),_0x162b86),_0x9bef62]);return log(_0x237ba6,'[updateTask]:\x20Response\x20data\x20ok\x20'+json(_0x320819[_0x494fa5(0xe1)])+'|'+json(_0x320819[_0x494fa5(0xd0)]),this[_0x494fa5(0xc9)],'w'),_0x3d77e0;}catch(_0x4d2e6e){return log(_0x237ba6,_0x494fa5(0xe2)+_0x4d2e6e['message'],this[_0x494fa5(0xc9)],![]),![];}}async[a0_0x42d44d(0xdf)](_0x26d0a8='',_0x5f135f=0x7530){const _0x178bc7=a0_0x42d44d,_0x43c2c3={'username':this[_0x178bc7(0xbf)],'password':this['password'],'action':_0x178bc7(0xdf)},_0x540c5f=new Promise((_0x19fe74,_0x44b68b)=>setTimeout(()=>_0x44b68b(new Error(_0x178bc7(0xcc))),_0x5f135f));try{const _0x1872f0=await Promise[_0x178bc7(0xdd)]([this[_0x178bc7(0xbb)](_0x26d0a8,'/api.php',_0x43c2c3),_0x540c5f]);return log(_0x26d0a8,'[getTeleId]:\x20Response\x20data\x20ok\x20'+json(_0x1872f0),this[_0x178bc7(0xc9)]),_0x1872f0;}catch(_0x271416){return log(_0x26d0a8,_0x178bc7(0xeb)+_0x271416[_0x178bc7(0xbc)],this[_0x178bc7(0xc9)],![]),![];}}async[a0_0x42d44d(0xda)](_0x4fb801='',_0x4a142b,_0x3942dc,_0x9c2bfe=0x7530){const _0x3dc200=a0_0x42d44d,_0x4aa165={'chat_id':_0x4a142b,'tinnhan':_0x3942dc},_0x512749=new Promise((_0x2a229b,_0x1e6842)=>setTimeout(()=>_0x1e6842(new Error(_0x3dc200(0xcc))),_0x9c2bfe));try{const _0x5db87a=await Promise[_0x3dc200(0xdd)]([this[_0x3dc200(0xbd)](_0x4fb801,_0x3dc200(0xf7),_0x4aa165),_0x512749]);return log(_0x4fb801,_0x3dc200(0xd1),this[_0x3dc200(0xc9)]),_0x5db87a;}catch(_0x5b8855){return log(_0x4fb801,_0x3dc200(0xb9)+_0x5b8855[_0x3dc200(0xbc)],this[_0x3dc200(0xc9)],![]),![];}}}function a0_0x5825(){const _0x5ad427=['[httpPostJson]\x20Yêu\x20cầu\x20POST\x20bị\x20timeout\x20sau\x20','updateTask','getAks','password','[checkProfile]:\x20Error\x20checking\x20profile:\x20','[getCode]Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20getCode:','3218894qmQNue','getAllProfiles','vendor','[getBot]Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20getBot:\x20','[getAllProfiles]:\x20Error\x20checking\x20profile:\x20','Request\x20timed\x20out','2246168JIKwUD','data','baseURL','nextRun','[tele]:\x20ok','addData','getCode','[getBotAll]:\x20Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20getBotAll:\x20','apikey','ECONNABORTED','saveCode','[getAllProfiles]:\x20Response\x20data\x20ok','genDataProfiles','tele','1iybCbi','http','race','[checkProfile]:\x20Response\x20data:\x20','getTeleId','[getBotAll]:\x20Lỗi\x20Get\x20Bot:\x20chờ\x20lần\x20chạy\x20kế\x20tiếp','status','[updateTask]:\x20Error\x20checking\x20task:\x20','[httpPostJson]\x20Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20POST\x20(JSON):\x20','ms:\x20','[addData]Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20addData:\x20','checkProfile','5BXnbkC','/bot/api.php','4566430WQVAJL','getBotAll','[getTeleId]:\x20Error\x20checking\x20task:\x20','1464360yNcpWg','[getAks]Yêu\x20cầu\x20getAks:\x20','/api.php','post','getTask','[genDataProfiles]:\x20Response\x20data\x20ok','[getTask]:\x20Error\x20checking\x20task:\x20','[httpPost]\x20Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20POST\x20(URL-encoded):\x20','updateData','application/x-www-form-urlencoded','code','/botTele/tele.php','3165042QChQpe','599637PMgLEY','getBot','stringify','834582ZgthyZ','[getTask]:\x20Response\x20data\x20ok','[tele]:\x20Error\x20checking\x20task:\x20','[genDataProfiles]:\x20Error\x20checking\x20genDataFile:\x20','httpPost','message','httpPostJson','9OQHbzV','username','[updateData]Lỗi\x20khi\x20gửi\x20yêu\x20cầu\x20updateData:\x20'];a0_0x5825=function(){return _0x5ad427;};return a0_0x5825();}export default HttpClient;