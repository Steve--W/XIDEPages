var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="uncertainties.data";var REMOTE_PACKAGE_BASE="uncertainties.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","uncertainties",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/uncertainties","unumpy",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/uncertainties","lib1to2",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/uncertainties/lib1to2","fixes",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","uncertainties-3.1.2-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:191813,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1387,2831,4245,5396,6776,8160,9447,10789,12110,13497,14852,16282,17811,19203,20546,21825,23150,24567,25764,26952,28277,29557,30926,32055,33338,34555,35680,37035,37823,39297,40683,42175,43729,45098,46274,47522,48731,49972,51037,52279,53437,54747,56140,57461,58814,60139,61467,62840,64269,65587,66934,68165,69328,70391,71593,72649,73797,75101,76406,77826,79165,80324,81540,82868,84309,85599,86777,88113,89465,90775,92005,93337,94695,95825,97119,98323,99614,100622,101847,103267,104492,105699,106789,107715,108964,109672,110905,112200,113668,115e3,116054,117269,118433,119300,120202,120951,121675,122746,124002,124962,126046,126958,128029,129234,130382,131460,132429,133514,134718,135696,136466,137260,138493,139811,140904,142169,143148,144216,145307,146487,147780,149055,150457,151609,152780,153877,154966,156359,157720,158642,159979,161295,162522,163749,164963,166290,167477,168724,170022,171435,172762,174168,175574,176459,177277,178443,179305,180423,181855,183091,184453,185848,187021,188383,189634,190678,191472],sizes:[1387,1444,1414,1151,1380,1384,1287,1342,1321,1387,1355,1430,1529,1392,1343,1279,1325,1417,1197,1188,1325,1280,1369,1129,1283,1217,1125,1355,788,1474,1386,1492,1554,1369,1176,1248,1209,1241,1065,1242,1158,1310,1393,1321,1353,1325,1328,1373,1429,1318,1347,1231,1163,1063,1202,1056,1148,1304,1305,1420,1339,1159,1216,1328,1441,1290,1178,1336,1352,1310,1230,1332,1358,1130,1294,1204,1291,1008,1225,1420,1225,1207,1090,926,1249,708,1233,1295,1468,1332,1054,1215,1164,867,902,749,724,1071,1256,960,1084,912,1071,1205,1148,1078,969,1085,1204,978,770,794,1233,1318,1093,1265,979,1068,1091,1180,1293,1275,1402,1152,1171,1097,1089,1393,1361,922,1337,1316,1227,1227,1214,1327,1187,1247,1298,1413,1327,1406,1406,885,818,1166,862,1118,1432,1236,1362,1395,1173,1362,1251,1044,794,341],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_uncertainties.data")}Module["addRunDependency"]("datafile_uncertainties.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{start:0,audio:0,end:1319,filename:"/lib/python3.7/site-packages/uncertainties/umath.py"},{start:1319,audio:0,end:16092,filename:"/lib/python3.7/site-packages/uncertainties/umath_core.py"},{start:16092,audio:0,end:25422,filename:"/lib/python3.7/site-packages/uncertainties/__init__.py"},{start:25422,audio:0,end:149953,filename:"/lib/python3.7/site-packages/uncertainties/core.py"},{start:149953,audio:0,end:161852,filename:"/lib/python3.7/site-packages/uncertainties/test_umath.py"},{start:161852,audio:0,end:245382,filename:"/lib/python3.7/site-packages/uncertainties/test_uncertainties.py"},{start:245382,audio:0,end:245766,filename:"/lib/python3.7/site-packages/uncertainties/1to2.py"},{start:245766,audio:0,end:248596,filename:"/lib/python3.7/site-packages/uncertainties/unumpy/test_ulinalg.py"},{start:248596,audio:0,end:248967,filename:"/lib/python3.7/site-packages/uncertainties/unumpy/ulinalg.py"},{start:248967,audio:0,end:259638,filename:"/lib/python3.7/site-packages/uncertainties/unumpy/test_unumpy.py"},{start:259638,audio:0,end:262479,filename:"/lib/python3.7/site-packages/uncertainties/unumpy/__init__.py"},{start:262479,audio:0,end:290476,filename:"/lib/python3.7/site-packages/uncertainties/unumpy/core.py"},{start:290476,audio:0,end:290476,filename:"/lib/python3.7/site-packages/uncertainties/lib1to2/__init__.py"},{start:290476,audio:0,end:297408,filename:"/lib/python3.7/site-packages/uncertainties/lib1to2/test_1to2.py"},{start:297408,audio:0,end:298445,filename:"/lib/python3.7/site-packages/uncertainties/lib1to2/fixes/fix_std_dev.py"},{start:298445,audio:0,end:301486,filename:"/lib/python3.7/site-packages/uncertainties/lib1to2/fixes/fix_ufloat.py"},{start:301486,audio:0,end:304042,filename:"/lib/python3.7/site-packages/uncertainties/lib1to2/fixes/fix_uarray_umatrix.py"},{start:304042,audio:0,end:304042,filename:"/lib/python3.7/site-packages/uncertainties/lib1to2/fixes/__init__.py"},{start:304042,audio:0,end:304532,filename:"/lib/python3.7/site-packages/uncertainties/lib1to2/fixes/fix_std_devs.py"},{start:304532,audio:0,end:320243,filename:"/lib/python3.7/site-packages/uncertainties-3.1.2-py3.7.egg-info/PKG-INFO"},{start:320243,audio:0,end:322252,filename:"/lib/python3.7/site-packages/uncertainties-3.1.2-py3.7.egg-info/SOURCES.txt"},{start:322252,audio:0,end:322330,filename:"/lib/python3.7/site-packages/uncertainties-3.1.2-py3.7.egg-info/requires.txt"},{start:322330,audio:0,end:322344,filename:"/lib/python3.7/site-packages/uncertainties-3.1.2-py3.7.egg-info/top_level.txt"},{start:322344,audio:0,end:322345,filename:"/lib/python3.7/site-packages/uncertainties-3.1.2-py3.7.egg-info/dependency_links.txt"}],remote_package_size:195909,package_uuid:"fec58c64-c13d-4a49-bc2e-453d8bb86a08"})})();