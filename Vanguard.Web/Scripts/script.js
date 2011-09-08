/* Author: 

*/

//debug assistant...
var DBG = function (c, x) {
    var dbg = $('#dbg'), len, ct;
    if (!dbg.length) {
        dbg = $('body')
					.append('<div id="dbg" style="width:350px; position:absolute; top:160px; left:160px; color:#ff0000; font-size:10px; background-color:#ffffff; border:1px solid #000000; z-index:50;"></div>')
					.find('#dbg');
    }
    len = dbg.children().length;
    if (!len) {
        dbg.append('<div style="border-bottom:1px solid;"><span id="dbgxy" style="float:right;"></span><a id="dbgclear" href="#">Clear</a>&nbsp;/&nbsp;<a id="dbgdisable" href="#">Disable</a><input type="text" id="dbgct" value="" style="padding:0;margin-left:20px;font-size:10px;width:24px;" /></div>')
					.find('#dbgclear').click(function (e) { dbg.children().slice(1).remove(); return false; }).end()
					.find('#dbgdisable').click(function (e) { DBG = function () { }; dbg.remove(); return false; }).end();
    }
    ct = $('#dbgct').val() || 0;
    if (x || (ct && len > ct)) {
        dbg.children().slice(1, x ? len : len + 1 - ct).remove();
    }
    dbg.append('<div>' + c + '</div>');
}
//default click handler for examples...
	, exampleClicks = function (ev) {
	    $('#appContactManager').AeroWindow({
	        WindowTitle: $(this).parent().find('img').jqDock('get').Title,
	        WindowPositionTop: 'center',
	        WindowPositionLeft: 'center',
	        WindowWidth: 700,
	        WindowHeight: 500,
	        WindowAnimation: 'easeOutCubic'
	    });
	    this.blur();
	    return false;
	};






















