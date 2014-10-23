//	HYPE.documents["pre_web"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "pre_web.hyperesources";
	var documentName = "pre_web";
	var documentLoaderFilename = "preweb_hype_generated_script.js";
	var mainContainerID = "preweb_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"13":{aV:8,w:"is statting in ",a:413,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"10",k:"div",s:"Times,'Times New Roman',Georgia,Serif",aT:8,b:222,t:14,aS:8,aU:8,G:"#000000"},"3":{aV:8,w:"2014 11 07 - 16",a:196,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",b:136,aT:8,aS:8,t:14,aU:8,G:"#000000",v:"bold"},"11":{I:"None",x:"visible",J:"None",a:408,b:238,j:"absolute",K:"None",c:367,k:"div",z:"9",d:80,L:"None",U:"htmlwidget.html",V:"0",W:""},"4":{aU:8,G:"#000000",aE:[{goToURL:"http://hanarart.jp/index.html",type:5,openInNewWindow:true}],aV:8,r:"inline",t:14,Z:"break-word",aP:"pointer",v:"bold",w:"ART FESTIVAL HANARART",j:"absolute",x:"visible",k:"div",y:"preserve",z:"4",aS:8,aT:8,a:196,aD:[{type:4}],b:120},"14":{aV:8,w:"Live Installation",a:198,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"11",k:"div",s:"Times,'Times New Roman',Georgia,Serif",aT:8,b:91,t:14,aS:8,aU:8,G:"#000000"},"5":{aU:8,G:"#000000",aE:[{goToURL:"http://yutauozumi.com",type:5,openInNewWindow:false}],aV:8,r:"inline",t:11,Z:"break-word",aP:"pointer",v:"normal",w:"Yuta Uozumi 2014",aA:[{type:0}],x:"visible",j:"absolute",k:"div",y:"preserve",z:"3",aS:8,aT:8,a:196,b:160},"6":{aV:8,w:"Sound Implementation : \"neume.js\" - mohayonao",a:196,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"5",k:"div",b:175,aT:8,aS:8,t:9,aU:8,G:"#000000",v:"normal"},"10":{aV:8,w:"\u74b0\u5883\u3084\u81ea\u8eab\u3068\u53cd\u5fdc\u3057\u97f3\u3092\u7e54\u308a\u7d9a\u3051\u308b\u88c5\u7f6e\u3002 ",a:534,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"8",k:"div",s:"Times,'Times New Roman',Georgia,Serif",aT:8,b:87,t:14,aS:8,aU:8,G:"#000000"},"2":{aV:8,w:"Cell",a:16,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"1",k:"div",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",aT:8,b:16,t:96,aS:8,aU:8,G:"#000000"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

