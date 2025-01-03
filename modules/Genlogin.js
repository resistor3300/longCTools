const axios=require("axios");const os=require("os");const path=require("path");const fs=require("fs").promises;const{log:log,json:json}=require("./logger");const puppeteer=require("puppeteer-extra");const StealthPlugin=require("puppeteer-extra-plugin-stealth");puppeteer.use(StealthPlugin());const LOCAL_URL="http://localhost:55550/backend/profiles";class Genlogin{constructor(api_key,debug=false){this.api_key=api_key;this.debug=debug;this.vendor="genlogin"}async getProfile(id){const url=LOCAL_URL+`/${id}`;const res=await axios.get(url).then((res=>res.data.data)).catch((err=>err.response.data));return res}async getProfiles(offset=0,limit=1e3){const url=LOCAL_URL;try{const response=await axios.get(`${url}?limit=${limit}&offset=${offset}`);return{profiles:response.data.data.items,pagination:response.data.data.pagination}}catch(error){if(error.code==="ECONNREFUSED"||error.code==="ETIMEDOUT"){log("[getProfiles]: Không thể kết nối đến Genlogin. Vui lòng kiểm tra xem Genlogin đã được mở chưa.",this.vendor)}else{log(`[getProfiles]: Lỗi khi lấy danh sách profiles: ${error.message}`,this.vendor)}}}async getListProfiles(offset=0,limit=1e3,timeout=1e4){const url=LOCAL_URL;const timeoutPromise=new Promise(((_,reject)=>setTimeout((()=>reject(new Error("Request timed out"))),timeout)));try{const response=await Promise.race([axios.get(`${url}?limit=${limit}&offset=${offset}`),timeoutPromise]);const items=response.data.data.items;const profiles=items.map(((item,index)=>({id:index,user_id:item.user_id,status:item.status,idbrower:item.id,pid:item.profile_data.name+"-"+item.id,browser_version:item.profile_data.browser_version,proxy:item.profile_data.proxy,vendor:this.vendor,updated:(new Date).toLocaleString("en-GB",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).replace(",","")})));return{profiles:profiles,pagination:response.data.data.pagination}}catch(error){if(error.code==="ECONNREFUSED"||error.code==="ETIMEDOUT"){log("[getListProfiles] : Không thể kết nối đến Genlogin. Vui lòng kiểm tra xem Genlogin đã được mở chưa.",this.vendor,false);return null}else{log(`[getListProfiles]: Lỗi khi lấy danh sách profiles: ${error.message}`,this.vendor,false);return null}}}async getWsEndpoint(id){const url=LOCAL_URL+`/${id}/ws-endpoint`;const res=await axios.get(url).then((res=>res.data)).catch((err=>err.response.data));return res}async runProfile(id){let resEndpoint=await this.getWsEndpoint(id);if(!resEndpoint?.data?.wsEndpoint){log(`[runProfile]: No valid WebSocket endpoint found for profile ${id}`,this.vendor,false);const url=LOCAL_URL+`/${id}/start`;const res=await axios.put(url).then((res=>res.data)).catch((err=>err.response.data));if(res.wsEndpoint){log(`[runProfile]: Profile ${id} started successfully. wsEndpoint: ${res.wsEndpoint}`,this.vendor);return{success:true,wsEndpoint:res.wsEndpoint}}else{log(`[runProfile]: Profile ${id} đang chạy trên thiết bị khác, hoặc chưa mở`,this.vendor,"w");return{success:false,message:"Profile is running on another device"}}}else{log(`[runProfile]: WebSocket endpoint found for profile ${id}: ${resEndpoint.data.wsEndpoint}`,this.vendor);return{success:true,...resEndpoint.data}}for(let attempt=1;attempt<=10;attempt++){log(`[runProfile]: Checking for wsEndpoint (Attempt ${attempt})...`,this.vendor);await delay(5e3);resEndpoint=await this.getWsEndpoint(id);if(resEndpoint?.data?.wsEndpoint){log(`[runProfile]: Successfully retrieved wsEndpoint after starting profile ${id}: ${resEndpoint.data.wsEndpoint}`,this.vendor);return{success:true,...resEndpoint.data}}}log(`[runProfile]: Failed to retrieve WebSocket endpoint for profile ${id} after 10 attempts.`,this.vendor);return{success:false,message:"Failed to retrieve wsEndpoint"}}async connectWs(wsEndpoint,getAllProfiles,taskInfo,timeout=2e4){try{log(`[connectWs]: screens:${getAllProfiles.screens}|screenWidthHeight:${getAllProfiles.screenWidthHeight}`,this.vendor,"w");const connectPromise=new Promise((async(resolve,reject)=>{try{const browser=await puppeteer.connect({browserWSEndpoint:wsEndpoint,headless:false,defaultViewport:null,ignoreHTTPSErrors:true,args:["--disable-web-security","--disable-features=IsolateOrigins","--disable-site-isolation-trials","--disable-features=BlockInsecurePrivateNetworkRequests","--no-sandbox","--disable-setuid-sandbox","--disable-popup-blocking"]});resolve(browser)}catch(error){reject(error)}}));const timeoutPromise=new Promise(((_,reject)=>{setTimeout((()=>{reject(new Error(`[connectWs]: Timeout of ${timeout}ms exceeded`))}),timeout)}));const browser=await Promise.race([connectPromise,timeoutPromise]);return browser}catch(error){log(`[connectWs]: Error occurred - ${error.message}`,this.vendor,false);return false}}async connect(getAllProfiles,GenDataProfile,pos,timeout=2e4){let browser;try{let scaleFactor=pos.scale;let windowWidth=pos.width;let windowHeight=pos.height;let xPosition=Math.ceil(pos.x/scaleFactor/scaleFactor);let yPosition=Math.ceil(pos.y/scaleFactor/scaleFactor);let enabledExtPaths;const connectPromise=new Promise((async(resolve,reject)=>{try{log(`[connect]: genDataFolder:${json(getAllProfiles)}`,this.vendor,"w");const userDataDir0=path.join(getAllProfiles.genDataFolder,"profiles",String(GenDataProfile.user_id));const userDataDir=await this.findDirectory(userDataDir0,`${String(GenDataProfile.user_id)}_${String(GenDataProfile.idbrower)}`);const executablePath=`C:\\Users\\${os.userInfo().username}\\.genlogin\\browsers\\titan\\${GenDataProfile.browser_version}\\chrome.exe`;const extPath=path.join(getAllProfiles.genDataFolder,"extensions.json");log(`[connect]:extPath:${extPath}`,this.vendor,"w");const data=await fs.readFile(extPath,"utf8");const extensions=await JSON.parse(data);const enabledExtPaths0=await extensions.filter((extension=>!extension.disabled)).map((extension=>extension.path));enabledExtPaths=await enabledExtPaths0.join(",");log(`[connect]Đường dẫn các extension được bật: ${enabledExtPaths}`,null,"w");const configPath=path.join(userDataDir,"custom_device.json");log(`[connect]:configPath:${configPath}`,this.vendor,"w");const dataConfig0=await fs.readFile(configPath,"utf8");const dataConfig=await JSON.parse(dataConfig0);const userAgent=dataConfig.navigator.userAgent;log(`[connect]: ${userDataDir}`,this.vendor,"w");log(`[connect]: ${executablePath}`,this.vendor,"w");log(`[connect]: ${xPosition}x${yPosition}|scaleFactor;${scaleFactor}|${windowWidth}x${windowHeight}`,this.vendor,"w");const args=[`--user-agent=${userAgent}`,"--mute-audio","--disable-web-security","--disable-features=IsolateOrigins","--disable-site-isolation-trials","--disable-features=BlockInsecurePrivateNetworkRequests","--no-sandbox","--disable-setuid-sandbox","--disable-popup-blocking",`--window-size=${windowWidth},${windowHeight}`,`--window-position=${xPosition},${yPosition}`,`--force-device-scale-factor=${scaleFactor}`,"--disable-blink-features=AutomationControlled","--disable-notifications",`--load-extension=${enabledExtPaths}`,`--disable-extensions-except=${enabledExtPaths}`];log(`[connect]: ${args}`,this.vendor,"w");browser=await puppeteer.launch({headless:false,executablePath:executablePath,defaultViewport:null,ignoreHTTPSErrors:true,args:args,userDataDir:userDataDir});browser.on("targetcreated",(async target=>{const url=target.url();if(url.startsWith("chrome-extension://")){log(`Extension được tải: ${url}`,null,"c")}}));resolve(browser)}catch(error){reject(error)}}));const timeoutPromise=new Promise(((_,reject)=>{setTimeout((()=>{reject(new Error(`[connect]: Timeout of ${timeout}ms exceeded`))}),timeout)}));const browser1=await Promise.race([connectPromise,timeoutPromise]);return browser1}catch(error){log(`[connect]: Error occurred - ${error.message}`,this.vendor,false);browser.close();return false}}async findDirectory(rootDir,searchString){try{const entries=await fs.readdir(rootDir,{withFileTypes:true});for(const entry of entries){if(entry.isDirectory()&&entry.name.includes(searchString)){return path.join(rootDir,entry.name)}}}catch(err){log(`[findDirectory]Error accessing directory: ${err.message}`,null,false)}return null}async stopProfile(id){const url=LOCAL_URL+`/${id}/stop`;const res=await axios.put(url).then((res=>res.data)).catch((err=>err.response.data));log(`[stopProfile]: Stopped profile ${id}`,this.vendor);return res}async getProfilesRunning(){const url=LOCAL_URL+`/running`;const res=await axios.get(url).then((res=>res.data)).catch((err=>err.response.data));if(res.success){return res.data}else{log(`[getProfilesRunning]: Failed to fetch running profiles`,this.vendor);return[]}}async checkProfileIsRun(id){const runningProfiles=await this.getProfilesRunning();const numericId=parseInt(id,10);const profile=runningProfiles.find((p=>p.id===numericId));if(profile){log(`[checkProfileIsRun]: Profile ${id} is running. wsEndpoint: ${profile.wsEndpoint}`,this.vendor);return{success:true,wsEndpoint:profile.wsEndpoint}}else{return{success:false,message:`Profile ${id} is not running.`}}}async setEmulatePage(browser,page,rsl,scale){try{await page.setViewport({width:parseInt(rsl[0]),height:parseInt(rsl[1]),deviceScaleFactor:scale});log(`[setEmulatePage]: ${parseInt(rsl[0])}x${parseInt(rsl[1])}|scale:${scale}`,this.vendor,"w");return page}catch(error){log(`[setEmulatePage]: Error: ${error.message}`,this.vendor,false);return null}}async getCurrentPage0(browser){try{const pages=await browser.pages();const activePages=await pages.filter((page=>!page.isClosed()));if(activePages.length===0){log(`[getCurrentPage]: No active pages found`,this.vendor,false);return null}const activePage=await activePages[activePages.length-1];if(!activePage){log(`[getCurrentPage]: No active page found after filtering`,this.vendor,false);return null}log(`[getCurrentPage]: Active page found with URL: ${await activePage.url()}`,this.vendor);return activePage}catch(error){log(`[getCurrentPage]: Error getting current page: ${error.message}`,this.vendor,false);return null}}async getCurrentPage(browser){try{const pages=await browser.pages();for(let i=0;i<pages.length;i++){const url=await pages[i].url();const title=await pages[i].title();const isFocused=await pages[i].evaluate((()=>document.visibilityState));if(isFocused==="visible"&&!url.startsWith("devtools://")){const parsedUrl=new URL(url);log(`[getCurrentPage]: ${i+1} |${parsedUrl.hostname}|${title}`,null,"w");return pages[i]}}log("[getCurrentPage]: Không tìm thấy page nào đang focus hoặc hợp lệ.",null,false);return null}catch(err){console.error("[getCurrentPage]: Lỗi khi tìm tab đang được focus:",err);return null}}async elementExistsByXPath(page,xpath,timeout=3e4){try{await page.waitForSelector(`xpath/${xpath}`,{timeout:timeout});log(`[elementExistsByXPath]: Element with XPath "${xpath}" exists`);return true}catch(error){if(error.name==="TimeoutError"){log(`[elementExistsByXPath]: Timeout ${timeout} waiting for element with XPath "${xpath}"`,this.vendor,false);return null}log(`[elementExistsByXPath]: Error: ${error.message}`,this.vendor);return null}}async click(page,options){try{if(options.xpath){const initialTargets=await options.browser.targets();await page.waitForFunction((xpath=>{const element=document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;return element!==null}),{timeout:options.timeout||3e4},options.xpath);const elementHandle=await page.evaluateHandle((xpath=>{const element=document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;return element}),options.xpath);if(elementHandle){if(options.tagClick){log(`[click]: TagClick Mode`,this.vendor,"w");await page.evaluate((async(el,opts)=>{el.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});await new Promise((resolve=>setTimeout(resolve,200)));if(opts.dbclick){el.click();await new Promise((resolve=>setTimeout(resolve,100)));el.click()}else{el.click()}}),elementHandle,options)}else{await page.evaluate((el=>{el.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),elementHandle)}await new Promise((resolve=>setTimeout(resolve,1e3)));const boundingBox=await elementHandle.boundingBox();if(boundingBox){if(!options.tagClick){log(`[click]: simulator move Mode`,this.vendor,"w");const{x:x,y:y,width:width,height:height}=boundingBox;const offsetX=x+width/2;const offsetY=y+height/2;await options.mainframe.mouse.move(offsetX,offsetY,{steps:10});await new Promise((resolve=>setTimeout(resolve,Math.floor(Math.random()*100)+50)));if(options.dbclick){await options.mainframe.mouse.click(offsetX,offsetY,{clickCount:2})}else{await options.mainframe.mouse.click(offsetX,offsetY)}}const isClicked=await page.evaluate((el=>new Promise((resolve=>{const observer=new MutationObserver(((mutationsList,observer)=>{for(const mutation of mutationsList){if(mutation.type==="childList"||mutation.type==="attributes"){observer.disconnect();resolve(true)}}resolve(false)}));observer.observe(document.body,{attributes:true,childList:true,subtree:true});if(el.tagName.toLowerCase()==="input"){el.focus();resolve(document.activeElement===el)}else{const initialState=el.innerHTML;setTimeout((()=>{observer.disconnect();resolve(el.innerHTML!==initialState)}),1e3)}}))),elementHandle);const classChanged=await page.evaluate((xpath=>new Promise((resolve=>{const element=document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;if(!element){resolve(false);return}const initialClass=element.className;const observer=new MutationObserver((mutationsList=>{for(const mutation of mutationsList){if(mutation.type==="attributes"&&mutation.attributeName==="class"&&element.className!==initialClass){observer.disconnect();resolve(true);return}}}));observer.observe(element,{attributes:true});setTimeout((()=>{observer.disconnect();resolve(false)}),2e3)}))),options.xpath);let newPage;const newTargets=await options.browser.targets();const openedTarget=await newTargets.find((target=>!initialTargets.includes(target)));if(openedTarget){log(`[click]: A new tab opened with URL ${openedTarget.url()}`,this.vendor,"i");newPage=true}else{log(`[click]: Không mở tab mới ra ${json(openedTarget)}`,this.vendor,"i");newPage=false}if(isClicked||newPage||classChanged){log(`[click]: XPath click thành công`,this.vendor);return true}else{log(`[click]: XPath click không thành công ${options.xpath}`,this.vendor,false);return false}}else{log(`[click]: Không thể xác định XPath: ${options.xpath}`,this.vendor,false);return false}}else{log(`[click]: Không tìm thấy phần tử với XPath: ${options.xpath}`,this.vendor,false);return false}}else if(options.x!==undefined&&options.y!==undefined){await options.mainframe.mouse.click(options.x,options.y);log(`click: Đã click tại tọa độ (${options.x}, ${options.y})`,this.vendor);return true}else{log("click: Khoản chọn click không hợp lệ. Vui lòng cung cấp xpath hoặc tọa độ x và y.",this.vendor);return false}}catch(error){log(`[click]: Lỗi trong quá trình thực hiện click ${options.xpath} : ${error.message}`,this.vendor,false);return false}}async getTextByXPath(page,xpath,timeout=3e4){const getElementPromise=await this.getElementByXPath(page,xpath);const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve(null)),timeout)));try{const elementHandle=await Promise.race([getElementPromise,timeoutPromise]);if(elementHandle){const textResult=await page.evaluate((el=>el.textContent.trim()),elementHandle);log(`[getTextByXPath]: Fetched text: ${textResult}`);return textResult}}catch(error){log(`[getTextByXPath]:Error fetching text: ${error.message}`,this.vendor,false);return null}log(`[getTextByXPath]:Element not found with XPath: ${xpath}`,this.vendor,false);return null}async getElementByXPath(page,xpath,timeout=3e4){try{await page.waitForSelector(`xpath/${xpath}`,{timeout:timeout});const elementHandle=await page.$$(`xpath/${xpath}`,(el=>el.outerHTML));return elementHandle.length?elementHandle[0]:null}catch(error){log(`[getElementByXPath]: Error getting element by XPath: ${error.message}`,this.vendor);return null}}async getHtmlByXPath(page,xpath,timeout=3e4){const elementPromise=page.evaluate((xpath=>{const element=document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;if(element){return element.outerHTML}return null}),xpath);const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve(null)),timeout)));try{const elementHtml=await Promise.race([elementPromise,timeoutPromise]);if(elementHtml){log(`[getHtmlByXPath]: Successfully retrieved HTML for XPath: ${xpath}`,this.vendor);return elementHtml}else{log(`[getHtmlByXPath]: Element not found or timeout occurred for XPath: ${xpath}`,this.vendor);return null}}catch(error){log(`[getHtmlByXPath]: Error getting element by XPath: ${error.message}`,this.vendor);return null}}async getAttributeFromXPath(page,xpath,attribute,timeout=3e4){const getElementPromise=this.getElementByXPath(page,xpath);const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve(null)),timeout)));try{const elementHandle=await Promise.race([getElementPromise,timeoutPromise]);if(elementHandle){return await page.evaluate(((el,attr)=>el.getAttribute(attr)),elementHandle,attribute)}}catch(error){log(`[getAttributeFromXPath]: Error fetching attribute: ${error.message}`,this.vendor,false);return null}log(`[getAttributeFromXPath]: Element not found with XPath: ${xpath}`,this.vendor,false);return null}async switchFrame(page,xpath,timeout=3e4){const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve(null)),timeout)));const switchFramePromise=(async()=>{if(xpath==="mainframe"){await page.bringToFront();return page}else{if(xpath!=""){const frameUrl=await this.getAttributeFromXPath(page,xpath,"src",timeout);if(frameUrl){const subdomain=new URL(frameUrl);const frames=await page.frames();const subframe=await page.waitForFrame((frame=>{try{const frameURL=new URL(frame.url());return frameURL.hostname.endsWith(subdomain.hostname.split(".").slice(-2).join("."))}catch{return false}}),{timeout:5e3});if(subframe){log("[switchFrame]: Switched to subframe",this.vendor);return subframe}else{log(`[switchFrame]: Subframe not found with URL: ${frameUrl}`,this.vendor,false);return null}}else{log("[switchFrame]: Failed to get frame URL",this.vendor,false);return null}}else{log("[switchFrame]: Failed to get frame XPath",this.vendor,false);return null}}})();return Promise.race([switchFramePromise,timeoutPromise])}async clickAndHold(page,options,holdTime=1e3,timeout=3e4){let elementHandle=null;if(options.xpath){elementHandle=await this.getElementByXPath(page,options.xpath,timeout);if(!elementHandle){log(`[clickAndHold]: Element not found with XPath: ${options.xpath}`,this.vendor);return false}}try{if(elementHandle){const boundingBox=await elementHandle.boundingBox();if(boundingBox){const x=boundingBox.x+boundingBox.width/2;const y=boundingBox.y+boundingBox.height/2;await options.mainframe.mouse.move(x,y);await options.mainframe.mouse.down();await new Promise((resolve=>setTimeout(resolve,holdTime)));await options.mainframe.mouse.up();log(`[clickAndHold]: Clicked and hold on element with XPath: ${options.xpath}`,this.vendor);return true}else{log(`[clickAndHold]: Bounding box not found for element with XPath: ${options.xpath}`,this.vendor,false);return false}}else if(options.points){const{x:x,y:y}=options.points;await options.mainframe.mouse.move(x,y);await options.mainframe.mouse.down();await new Promise((resolve=>setTimeout(resolve,holdTime)));await options.mainframe.mouse.up();log(`[clickAndHold]: Clicked and held at coordinates (${x}, ${y})`,this.vendor);return true}else{log(`[clickAndHold]: No valid target specified (XPath or points)`,this.vendor);return false}}catch(error){log(`[clickAndHold]: Error during click and hold: ${error.message}`,this.vendor);return false}}async scroll(page,{xpath:xpath,points:points,direction:direction="down",speed:speed=1},timeout=3e4){let elementHandle=null;if(xpath){elementHandle=await this.getElementByXPath(page,xpath,timeout);if(!elementHandle){log(`[scroll]: Element not found with XPath: ${xpath}`,this.vendor);return false}}try{if(elementHandle){await page.evaluate((el=>{el.scrollIntoView({behavior:"smooth",block:"center"})}),elementHandle);log(`[scroll]: Scrolled to element with XPath: ${xpath}`,this.vendor);return true}else if(points){const{x:x,y:y}=points;const scrollAmount=direction==="down"?100:-100;const scrollInterval=100/speed;await page.evaluate((async({x:x,y:y,scrollAmount:scrollAmount,scrollInterval:scrollInterval})=>{for(let i=0;i<Math.abs(scrollAmount);i+=10){window.scrollBy(x,y+(scrollAmount>0?10:-10));await new Promise((resolve=>setTimeout(resolve,scrollInterval)))}}),{x:x,y:y,scrollAmount:scrollAmount,scrollInterval:scrollInterval});log(`[scroll]: Scrolled ${direction} at coordinates (${x}, ${y}) with speed ${speed}`,this.vendor);return true}else{log(`[scroll]: No valid target specified (XPath or coordinates)`,this.vendor);return false}}catch(error){log(`[scroll]: Error during scroll: ${error.message}`,this.vendor);return false}}async swipe(page,{xpath:xpath,direction:direction="down",distance:distance=200,speed:speed=1},timeout=3e4){let elementHandle=null;if(xpath){elementHandle=await this.getElementByXPath(page,xpath,timeout);if(!elementHandle){console.log(`[swipe]: Element not found with XPath: ${xpath}`);return false}}try{if(elementHandle){const boundingBox=await elementHandle.boundingBox();const startX=boundingBox.x+boundingBox.width/2;const startY=boundingBox.y+boundingBox.height/2;let endX=startX;let endY=direction==="down"?startY+distance:startY-distance;if(direction==="left"||direction==="right"){endX=direction==="right"?startX+distance:startX-distance;endY=startY}await page.mouse.move(startX,startY);await page.mouse.down();await page.mouse.move(endX,endY,{steps:speed});await page.mouse.up();console.log(`[swipe]: Swiped ${direction} from (${startX}, ${startY}) to (${endX}, ${endY}) with distance ${distance} and speed ${speed}`);return true}else{console.log(`[swipe]: No valid target specified (XPath)`);return false}}catch(error){console.log(`[swipe]: Error during swipe: ${error.message}`);return false}}async typeText(page,xpath,text,speed=1,timeout=3e4){const baseDelay=100/speed;const minDelay=baseDelay*.8;const maxDelay=baseDelay*1.2;const typePromise=(async()=>{try{for(const char of text){const delay=Math.random()*(maxDelay-minDelay)+minDelay;await page.keyboard.type(char,{delay:delay})}log(`[typeText]: Đã gõ thành công chuỗi "${text}" với tốc độ ${speed}`,this.vendor);return true}catch(error){log(`[typeText]: Lỗi khi gõ văn bản: ${error.message}`,this.vendor);return false}})();const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve(false)),timeout)));return await Promise.race([typePromise,timeoutPromise])}async selectDropdown(page,xpath,value,timeout=3e4){try{const elementHandle=await this.getElementByXPath(page,xpath,timeout);if(!elementHandle){log(`[selectDropdown]: Element not found with XPath: ${xpath}`,this.vendor);return false}await elementHandle.select(value);log(`[selectDropdown]: Selected value "${value}" in dropdown with XPath "${xpath}"`,this.vendor);return true}catch(error){log(`[selectDropdown]: Error selecting value: ${error.message}`,this.vendor);return false}}async javascript(page,script,...args){try{await page.evaluate(((code,...params)=>{const func=new Function(...params.map(((_,i)=>`arg${i}`)),code);func(...params)}),script,...args);log(`[javascript]: Executed script`,this.vendor);return true}catch(error){log(`[javascript]: Error executing script: ${error.message}`,this.vendor,false);return false}}async sleep(minSeconds,maxSeconds=null,timeout=3e4){let ms;if(maxSeconds!==null){ms=Math.random()*(maxSeconds-minSeconds)*1e3+minSeconds*1e3}else{ms=minSeconds*1e3}const sleepPromise=new Promise((resolve=>setTimeout(resolve,ms)));const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve("timeout")),timeout)));const result=await Promise.race([sleepPromise,timeoutPromise]);if(result==="timeout"){log(`[sleep]: Timeout of ${timeout}ms exceeded`,this.vendor);return false}log(`[sleep]: Slept for ${ms/1e3}s`,this.vendor);return true}async random(min,max,timeout=3e4){const randomPromise=new Promise((resolve=>{const randomValue=Math.random()*(max-min)+min;resolve(Math.floor(randomValue))}));const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve("timeout")),timeout)));const result=await Promise.race([randomPromise,timeoutPromise]);if(result==="timeout"){log(`[random]: Timeout of ${timeout}ms exceeded`,this.vendor);return false}log(`[random]: Generated random value ${result} in range [${min}, ${max}]`,this.vendor);return result}async activateTab(browser,tabIndex,resl,scale){try{const rsl=resl.split("x");const pages=await browser.pages();if(tabIndex<0||tabIndex>=pages.length){log(`[activateTab]: Invalid tab index ${tabIndex}`,this.vendor);return null}await pages[tabIndex].bringToFront();log(`[activateTab]: Activated tab at index ${tabIndex}`,this.vendor);const lastPage=await this.setEmulatePage(browser,pages[tabIndex],rsl,scale);return lastPage}catch(error){log(`[activateTab]: Error activating tab: ${error.message}`,this.vendor);return null}}async closeTab(browser,tabIndex=null,timeout=3e4){try{const pages=await browser.pages();const closePromise=(async()=>{if(tabIndex===null){const page=await pages.find((p=>p.isClosed()===false));if(!page){log(`[closeTab]: No current tab to close`,this.vendor);return null}await page.close();log(`[closeTab]: Closed current tab`,this.vendor);return true}else if(tabIndex<0||tabIndex>=pages.length){log(`[closeTab]: Invalid tab index ${tabIndex}`,this.vendor);return null}await pages[tabIndex].close();log(`[closeTab]: Closed tab at index ${tabIndex}`,this.vendor);return true})();const timeoutPromise=await new Promise((resolve=>setTimeout((()=>resolve("timeout")),timeout)));const result=await Promise.race([closePromise,timeoutPromise]);if(result==="timeout"){log(`[closeTab]: Timeout of ${timeout}ms exceeded`,this.vendor);return null}return result}catch(error){log(`[closeTab]: Error closing tab: ${error.message}`,this.vendor);return null}}async countOpenTabs(browser,timeout=5e3){const timeoutPromise=new Promise(((_,reject)=>setTimeout((()=>reject(new Error("Timeout while counting tabs"))),timeout)));try{const pagesPromise=await browser.pages();const pages=await Promise.race([pagesPromise,timeoutPromise]);const tabCount=pages.length;log(`[countOpenTabs]: Số tab đang được mở: ${tabCount}`,this.vendor,"w");return tabCount}catch(error){log(`[countOpenTabs]: Lỗi trong quá trình đếm số tab: ${error.message}`,this.vendor,false);return 0}}async newTab(browser,timeout=3e4){try{const newTabPromise=browser.newPage();const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve("timeout")),timeout)));const result=await Promise.race([newTabPromise,timeoutPromise]);if(result==="timeout"){log(`[newTab]: Timeout of ${timeout}ms exceeded`,this.vendor);return false}let newTabOpened=false;for(let i=0;i<30;i++){const pages=await browser.pages();if(pages.length>1){newTabOpened=true;break}await new Promise((resolve=>setTimeout(resolve,100)))}if(!newTabOpened){log(`[newTab]: Failed to open new tab within timeout`,this.vendor);return false}const pages=await browser.pages();const tabIndex=pages.length-1;log(`[newTab]: Opened and activated a new tab totaltab: ${pages.length} tabindex: ${tabIndex}`,this.vendor);return tabIndex}catch(error){log(`[newTab]: Error opening new tab: ${error.message}`,this.vendor);return false}}async goBack(page,timeout=3e4){try{const goBackPromise=page.goBack();const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve("timeout")),timeout)));const result=await Promise.race([goBackPromise,timeoutPromise]);if(result==="timeout"){log(`[goBack]: Timeout of ${timeout}ms exceeded`,this.vendor);return false}log(`[goBack]: Navigated back to the previous page`,this.vendor);return true}catch(error){log(`[goBack]: Error navigating back: ${error.message}`,this.vendor);return false}}async reloadPage(page,timeout=3e4,waitUntil="load"){try{const reloadPromise=page.reload({timeout:timeout,waitUntil:waitUntil});const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve("timeout")),timeout)));const result=await Promise.race([reloadPromise,timeoutPromise]);if(result==="timeout"){log(`[reloadPage]: Timeout of ${timeout}ms exceeded`,this.vendor);return false}log(`[reloadPage]: Reloaded the page with waitUntil: ${waitUntil}`,this.vendor);return true}catch(error){log(`[reloadPage]: Error reloading page: ${error.message}`,this.vendor);return false}}async openUrl(page,url,timeout=3e4,waitUntil="load"){try{const openUrlPromise=page.goto(url,{timeout:timeout,waitUntil:waitUntil});const timeoutPromise=new Promise((resolve=>setTimeout((()=>resolve("timeout")),timeout)));const result=await Promise.race([openUrlPromise,timeoutPromise]);if(result==="timeout"){log(`[openUrl]: Timeout of ${timeout}ms exceeded`,this.vendor);return false}log(`[openUrl]: Opened URL ${url} with waitUntil: ${waitUntil}`,this.vendor);return true}catch(error){log(`[openUrl]: Error opening URL ${url}: ${error.message}`,this.vendor);return false}}async countXpath(page,xpath,timeout=3e4){const timeoutPromise=new Promise(((_,reject)=>{setTimeout((()=>reject(new Error("Timeout"))),timeout)}));const elementPromise=page.evaluate((xpath=>{const result=document.evaluate(xpath,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);return result.snapshotLength}),xpath);try{const result=await Promise.race([elementPromise,timeoutPromise]);return parseInt(result)}catch(error){throw new Error(`[countXpath]: Lỗi xảy ra - ${error.message}`)}}async autoCloseDialog(page,timeout=2e4){try{const handledDialogs=new Set;const dialogHandler=async dialog=>{if(!handledDialogs.has(dialog)){log(`[autoCloseDialog]: Closing dialog with message: ${dialog.message()}`,this.vendor);await dialog.dismiss();handledDialogs.add(dialog);return true}};const alertHandler=async dialog=>{if(dialog.type()==="alert"&&!handledDialogs.has(dialog)){log(`[autoCloseDialog]: Closing alert with message: ${dialog.message()}`,this.vendor);await dialog.dismiss();handledDialogs.add(dialog);return true}};page.on("dialog",dialogHandler);page.on("dialog",alertHandler);const timeoutPromise=new Promise((resolve=>setTimeout((()=>{page.off("dialog",dialogHandler);page.off("dialog",alertHandler);resolve("timeout")}),timeout)));const result=await timeoutPromise;if(result==="timeout"){log(`[autoCloseDialog]: Timeout of ${timeout}ms exceeded`,this.vendor);return false}}catch(error){log(`[autoCloseDialog]: Error occurred - ${error.message}`,this.vendor);return false}}async nowTime(){const options={timeZone:"Asia/Ho_Chi_Minh",hour12:false};const now=new Date;const localTime=now.toLocaleString("en-GB",options);const[date,time]=localTime.split(", ");const[day,month,year]=date.split("/");const timestamp=now.getTime()/1e3;return{date:`${day}-${month}-${year} ${time}`,timestamp:timestamp}}async tinhThoiGian(startTimestamp){const nowtimes=await this.nowTime();const elapsedMilliseconds=nowtimes.timestamp*1e3-startTimestamp*1e3;const totalSeconds=Math.floor(elapsedMilliseconds/1e3);const totalMinutes=Math.floor(totalSeconds/60);const hours=Math.floor(totalMinutes/60);const minutes=totalMinutes%60;const seconds=totalSeconds%60;return`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`}}module.exports=Genlogin;