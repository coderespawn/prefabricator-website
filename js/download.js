function HandleDownload(version) {
	var platform = $("input[name='BuildPlatform']:checked").val();
	if(platform){
		var url = "https://github.com/coderespawn/prefabricator-ue4/releases/download/" + version + "/Binaries-" + platform + "-Prefabricator.zip";
		window.location = url;
	}
}
