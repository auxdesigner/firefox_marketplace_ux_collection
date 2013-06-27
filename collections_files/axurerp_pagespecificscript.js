for(var i = 0; i < 24; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u20'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	SetPanelState('u4', 'pd1u4','none','',300,'swing','left',300);

	SendToBack("u21");

	BringToFront("u7");

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u13'] = 'center';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','right',300,'swing','right',300);

	BringToFront("u21");

}
});
gv_vAlignTable['u11'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u9'] = 'center';document.getElementById('u22_img').tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('social.html');

}
});
gv_vAlignTable['u23'] = 'center';