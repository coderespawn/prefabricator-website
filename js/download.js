function HandleDownload(base_url, version) {
	var PlatformValue = $("input[name='BuildPlatform']:checked").val();
	if(PlatformValue){
		var filename = "Prefabricator-UE4-" + PlatformValue + "-" + version + ".zip"
		var url = base_url + "/builds/" + filename;
		window.location = url;
	}
}
