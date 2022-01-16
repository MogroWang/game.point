gdjs._20027_33756_21333Code = {};
gdjs._20027_33756_21333Code.GDMenuPointObjects1= [];
gdjs._20027_33756_21333Code.GDMenuPointObjects2= [];
gdjs._20027_33756_21333Code.GDMenuPointObjects3= [];
gdjs._20027_33756_21333Code.GDMenulogoObjects1= [];
gdjs._20027_33756_21333Code.GDMenulogoObjects2= [];
gdjs._20027_33756_21333Code.GDMenulogoObjects3= [];
gdjs._20027_33756_21333Code.GDGameVersionObjects1= [];
gdjs._20027_33756_21333Code.GDGameVersionObjects2= [];
gdjs._20027_33756_21333Code.GDGameVersionObjects3= [];
gdjs._20027_33756_21333Code.GDbstartObjects1= [];
gdjs._20027_33756_21333Code.GDbstartObjects2= [];
gdjs._20027_33756_21333Code.GDbstartObjects3= [];
gdjs._20027_33756_21333Code.GDbsettingObjects1= [];
gdjs._20027_33756_21333Code.GDbsettingObjects2= [];
gdjs._20027_33756_21333Code.GDbsettingObjects3= [];
gdjs._20027_33756_21333Code.GDtstartObjects1= [];
gdjs._20027_33756_21333Code.GDtstartObjects2= [];
gdjs._20027_33756_21333Code.GDtstartObjects3= [];
gdjs._20027_33756_21333Code.GDtsettingObjects1= [];
gdjs._20027_33756_21333Code.GDtsettingObjects2= [];
gdjs._20027_33756_21333Code.GDtsettingObjects3= [];
gdjs._20027_33756_21333Code.GDLight_95moveObjects1= [];
gdjs._20027_33756_21333Code.GDLight_95moveObjects2= [];
gdjs._20027_33756_21333Code.GDLight_95moveObjects3= [];
gdjs._20027_33756_21333Code.GDLight_95pinedObjects1= [];
gdjs._20027_33756_21333Code.GDLight_95pinedObjects2= [];
gdjs._20027_33756_21333Code.GDLight_95pinedObjects3= [];
gdjs._20027_33756_21333Code.GDDeveloptestdataObjects1= [];
gdjs._20027_33756_21333Code.GDDeveloptestdataObjects2= [];
gdjs._20027_33756_21333Code.GDDeveloptestdataObjects3= [];

gdjs._20027_33756_21333Code.conditionTrue_0 = {val:false};
gdjs._20027_33756_21333Code.condition0IsTrue_0 = {val:false};
gdjs._20027_33756_21333Code.condition1IsTrue_0 = {val:false};
gdjs._20027_33756_21333Code.condition2IsTrue_0 = {val:false};
gdjs._20027_33756_21333Code.condition3IsTrue_0 = {val:false};
gdjs._20027_33756_21333Code.conditionTrue_1 = {val:false};
gdjs._20027_33756_21333Code.condition0IsTrue_1 = {val:false};
gdjs._20027_33756_21333Code.condition1IsTrue_1 = {val:false};
gdjs._20027_33756_21333Code.condition2IsTrue_1 = {val:false};
gdjs._20027_33756_21333Code.condition3IsTrue_1 = {val:false};


gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbsettingObjects1Objects = Hashtable.newFrom({"bsetting": gdjs._20027_33756_21333Code.GDbsettingObjects1});gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbsettingObjects1Objects = Hashtable.newFrom({"bsetting": gdjs._20027_33756_21333Code.GDbsettingObjects1});gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbstartObjects1Objects = Hashtable.newFrom({"bstart": gdjs._20027_33756_21333Code.GDbstartObjects1});gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbstartObjects1Objects = Hashtable.newFrom({"bstart": gdjs._20027_33756_21333Code.GDbstartObjects1});gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDMenuPointObjects1Objects = Hashtable.newFrom({"MenuPoint": gdjs._20027_33756_21333Code.GDMenuPointObjects1});gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDMenuPointObjects1Objects = Hashtable.newFrom({"MenuPoint": gdjs._20027_33756_21333Code.GDMenuPointObjects1});gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbsettingObjects1Objects = Hashtable.newFrom({"bsetting": gdjs._20027_33756_21333Code.GDbsettingObjects1});gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbstartObjects1Objects = Hashtable.newFrom({"bstart": gdjs._20027_33756_21333Code.GDbstartObjects1});gdjs._20027_33756_21333Code.eventsList0 = function(runtimeScene) {

{


gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "English";
}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tsetting"), gdjs._20027_33756_21333Code.GDtsettingObjects2);
gdjs.copyArray(runtimeScene.getObjects("tstart"), gdjs._20027_33756_21333Code.GDtstartObjects2);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects2.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects2[i].setString("Settings");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtstartObjects2.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtstartObjects2[i].setString("Start");
}
}}

}


{


gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "简体中文";
}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tsetting"), gdjs._20027_33756_21333Code.GDtsettingObjects1);
gdjs.copyArray(runtimeScene.getObjects("tstart"), gdjs._20027_33756_21333Code.GDtstartObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].setString("设置");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtstartObjects1[i].setString("开始");
}
}}

}


};gdjs._20027_33756_21333Code.eventsList1 = function(runtimeScene) {

{


gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
gdjs._20027_33756_21333Code.condition1IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._20027_33756_21333Code.condition0IsTrue_0.val ) {
{
{gdjs._20027_33756_21333Code.conditionTrue_1 = gdjs._20027_33756_21333Code.condition1IsTrue_0;
gdjs._20027_33756_21333Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7763244);
}
}}
if (gdjs._20027_33756_21333Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameVersion"), gdjs._20027_33756_21333Code.GDGameVersionObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuPoint"), gdjs._20027_33756_21333Code.GDMenuPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menulogo"), gdjs._20027_33756_21333Code.GDMenulogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);
gdjs.copyArray(runtimeScene.getObjects("bstart"), gdjs._20027_33756_21333Code.GDbstartObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenuPointObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenuPointObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenulogoObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenulogoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDGameVersionObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDGameVersionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenuPointObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenuPointObjects1[i].setScale(0.4);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].pauseTimer("转场");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].pauseTimer("转场");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].setColor("0;0;0");
}
}}

}


{


gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
gdjs._20027_33756_21333Code.condition1IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._20027_33756_21333Code.condition0IsTrue_0.val ) {
{
{gdjs._20027_33756_21333Code.conditionTrue_1 = gdjs._20027_33756_21333Code.condition1IsTrue_0;
gdjs._20027_33756_21333Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7767172);
}
}}
if (gdjs._20027_33756_21333Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Developtestdata"), gdjs._20027_33756_21333Code.GDDeveloptestdataObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameVersion"), gdjs._20027_33756_21333Code.GDGameVersionObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuPoint"), gdjs._20027_33756_21333Code.GDMenuPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menulogo"), gdjs._20027_33756_21333Code.GDMenulogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);
gdjs.copyArray(runtimeScene.getObjects("bstart"), gdjs._20027_33756_21333Code.GDbstartObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDGameVersionObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDGameVersionObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenuPointObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenuPointObjects1[i].getBehavior("Tween").addObjectOpacityTween("", 255, "easeInOutQuad", 1500, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenulogoObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenulogoObjects1[i].getBehavior("Tween").addObjectOpacityTween("", 255, "easeInOutQuad", 1500, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDGameVersionObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDGameVersionObjects1[i].getBehavior("Tween").addObjectOpacityTween("", 255, "easeInOutQuad", 1500, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDDeveloptestdataObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDDeveloptestdataObjects1[i].setString("计时器：" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].getBehavior("Tween").addObjectOpacityTween("bk", 255, "easeOutQuad", 300, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].getBehavior("Tween").addObjectOpacityTween("bk", 255, "easeOutQuad", 300, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("GameVersion"), gdjs._20027_33756_21333Code.GDGameVersionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Light_move"), gdjs._20027_33756_21333Code.GDLight_95moveObjects1);
gdjs.copyArray(runtimeScene.getObjects("Light_pined"), gdjs._20027_33756_21333Code.GDLight_95pinedObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuPoint"), gdjs._20027_33756_21333Code.GDMenuPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menulogo"), gdjs._20027_33756_21333Code.GDMenulogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);
gdjs.copyArray(runtimeScene.getObjects("bstart"), gdjs._20027_33756_21333Code.GDbstartObjects1);
gdjs.copyArray(runtimeScene.getObjects("tsetting"), gdjs._20027_33756_21333Code.GDtsettingObjects1);
gdjs.copyArray(runtimeScene.getObjects("tstart"), gdjs._20027_33756_21333Code.GDtstartObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenuPointObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenuPointObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 100);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenulogoObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenulogoObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 200);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenulogoObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenulogoObjects1[i].setScale(0.5);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDGameVersionObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDGameVersionObjects1[i].setCenterPositionInScene((( gdjs._20027_33756_21333Code.GDMenulogoObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDMenulogoObjects1[0].getCenterXInScene()),(( gdjs._20027_33756_21333Code.GDMenulogoObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDMenulogoObjects1[0].getCenterYInScene()) + 70);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 350);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].setCenterPositionInScene((( gdjs._20027_33756_21333Code.GDbsettingObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDbsettingObjects1[0].getPointX("text")),(( gdjs._20027_33756_21333Code.GDbsettingObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDbsettingObjects1[0].getPointY("text")));
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDLight_95moveObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDLight_95moveObjects1[i].setCenterPositionInScene(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDLight_95pinedObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDLight_95pinedObjects1[i].setPosition((( gdjs._20027_33756_21333Code.GDMenulogoObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDMenulogoObjects1[0].getCenterXInScene()),(( gdjs._20027_33756_21333Code.GDMenulogoObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDMenulogoObjects1[0].getCenterYInScene()) - 78);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtstartObjects1[i].setCenterPositionInScene((( gdjs._20027_33756_21333Code.GDbstartObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDbstartObjects1[0].getPointX("text")),(( gdjs._20027_33756_21333Code.GDbstartObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDbstartObjects1[0].getPointY("text")));
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].setCenterPositionInScene((( gdjs._20027_33756_21333Code.GDbsettingObjects1.length === 0 ) ? 0 :gdjs._20027_33756_21333Code.GDbsettingObjects1[0].getCenterXInScene()) - 150,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 350);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbsettingObjects1Objects, runtimeScene, true, false);
}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
/* Reuse gdjs._20027_33756_21333Code.GDbsettingObjects1 */
gdjs.copyArray(runtimeScene.getObjects("tsetting"), gdjs._20027_33756_21333Code.GDtsettingObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].getBehavior("Tween").addObjectScaleTween("b1", 0.4, 0.4, "easeInOutQuad", 50, false, true);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].getBehavior("Tween").addObjectColorTween("b2", "255;255;255", "easeInOutQuad", 50, false, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("t1", 18, "easeInOutQuad", 80, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].getBehavior("Tween").addObjectColorTween("6", "0;0;0", "linear", 100, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbsettingObjects1Objects, runtimeScene, true, true);
}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
/* Reuse gdjs._20027_33756_21333Code.GDbsettingObjects1 */
gdjs.copyArray(runtimeScene.getObjects("tsetting"), gdjs._20027_33756_21333Code.GDtsettingObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].getBehavior("Tween").addObjectScaleTween("2", 0.3, 0.3, "easeInOutQuad", 50, false, true);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].getBehavior("Tween").addObjectColorTween("3", "0;0;0", "easeInOutQuad", 50, false, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("t1", 15, "easeInOutQuad", 80, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].getBehavior("Tween").addObjectColorTween("7", "255;255;255", "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bstart"), gdjs._20027_33756_21333Code.GDbstartObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbstartObjects1Objects, runtimeScene, true, false);
}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
/* Reuse gdjs._20027_33756_21333Code.GDbstartObjects1 */
gdjs.copyArray(runtimeScene.getObjects("tstart"), gdjs._20027_33756_21333Code.GDtstartObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].getBehavior("Tween").addObjectScaleTween("b1", 0.4, 0.4, "easeInOutQuad", 50, false, true);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].getBehavior("Tween").addObjectColorTween("b2", "255;255;255", "easeInOutQuad", 50, false, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtstartObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("", 18, "easeInOutQuad", 80, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtstartObjects1[i].getBehavior("Tween").addObjectColorTween("6", "0;0;0", "linear", 100, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bstart"), gdjs._20027_33756_21333Code.GDbstartObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbstartObjects1Objects, runtimeScene, true, true);
}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
/* Reuse gdjs._20027_33756_21333Code.GDbstartObjects1 */
gdjs.copyArray(runtimeScene.getObjects("tstart"), gdjs._20027_33756_21333Code.GDtstartObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].getBehavior("Tween").addObjectScaleTween("2", 0.3, 0.3, "easeInOutQuad", 50, false, true);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].getBehavior("Tween").addObjectColorTween("3", "0;0;0", "easeInOutQuad", 50, false, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtstartObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("", 15, "easeInOutQuad", 80, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtstartObjects1[i].getBehavior("Tween").addObjectColorTween("7", "255;255;255", "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuPoint"), gdjs._20027_33756_21333Code.GDMenuPointObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDMenuPointObjects1Objects, runtimeScene, true, false);
}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
/* Reuse gdjs._20027_33756_21333Code.GDMenuPointObjects1 */
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenuPointObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenuPointObjects1[i].getBehavior("Tween").addObjectScaleTween("4", 0.5, 0.5, "easeInOutQuad", 70, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuPoint"), gdjs._20027_33756_21333Code.GDMenuPointObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDMenuPointObjects1Objects, runtimeScene, true, true);
}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
/* Reuse gdjs._20027_33756_21333Code.GDMenuPointObjects1 */
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenuPointObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenuPointObjects1[i].getBehavior("Tween").addObjectScaleTween("2", 0.4, 0.4, "easeInOutQuad", 70, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);
gdjs.copyArray(runtimeScene.getObjects("bstart"), gdjs._20027_33756_21333Code.GDbstartObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
gdjs._20027_33756_21333Code.condition1IsTrue_0.val = false;
gdjs._20027_33756_21333Code.condition2IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbsettingObjects1Objects, runtimeScene, true, false);
}if ( gdjs._20027_33756_21333Code.condition0IsTrue_0.val ) {
{
gdjs._20027_33756_21333Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._20027_33756_21333Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._20027_33756_21333Code.GDbstartObjects1.length;i<l;++i) {
    if ( gdjs._20027_33756_21333Code.GDbstartObjects1[i].getBehavior("Tween").hasFinished("bk") ) {
        gdjs._20027_33756_21333Code.condition2IsTrue_0.val = true;
        gdjs._20027_33756_21333Code.GDbstartObjects1[k] = gdjs._20027_33756_21333Code.GDbstartObjects1[i];
        ++k;
    }
}
gdjs._20027_33756_21333Code.GDbstartObjects1.length = k;}}
}
if (gdjs._20027_33756_21333Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameVersion"), gdjs._20027_33756_21333Code.GDGameVersionObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuPoint"), gdjs._20027_33756_21333Code.GDMenuPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menulogo"), gdjs._20027_33756_21333Code.GDMenulogoObjects1);
/* Reuse gdjs._20027_33756_21333Code.GDbsettingObjects1 */
gdjs.copyArray(runtimeScene.getObjects("tsetting"), gdjs._20027_33756_21333Code.GDtsettingObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].getBehavior("Tween").addObjectScaleTween("4", 0.2, 0.2, "easeInOutQuad", 50, false, true);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("", 7, "easeInOutQuad", 80, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenuPointObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenuPointObjects1[i].getBehavior("Tween").addObjectOpacityTween("5", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenulogoObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenulogoObjects1[i].getBehavior("Tween").addObjectOpacityTween("3", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDGameVersionObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDGameVersionObjects1[i].getBehavior("Tween").addObjectOpacityTween("3", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].getBehavior("Tween").addObjectOpacityTween("7", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].getBehavior("Tween").addObjectOpacityTween("7", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].resetTimer("转场");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].unpauseTimer("转场");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bstart"), gdjs._20027_33756_21333Code.GDbstartObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
gdjs._20027_33756_21333Code.condition1IsTrue_0.val = false;
gdjs._20027_33756_21333Code.condition2IsTrue_0.val = false;
{
gdjs._20027_33756_21333Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._20027_33756_21333Code.mapOfGDgdjs_46_9520027_9533756_9521333Code_46GDbstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs._20027_33756_21333Code.condition0IsTrue_0.val ) {
{
gdjs._20027_33756_21333Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._20027_33756_21333Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._20027_33756_21333Code.GDbstartObjects1.length;i<l;++i) {
    if ( gdjs._20027_33756_21333Code.GDbstartObjects1[i].getBehavior("Tween").hasFinished("bk") ) {
        gdjs._20027_33756_21333Code.condition2IsTrue_0.val = true;
        gdjs._20027_33756_21333Code.GDbstartObjects1[k] = gdjs._20027_33756_21333Code.GDbstartObjects1[i];
        ++k;
    }
}
gdjs._20027_33756_21333Code.GDbstartObjects1.length = k;}}
}
if (gdjs._20027_33756_21333Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameVersion"), gdjs._20027_33756_21333Code.GDGameVersionObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuPoint"), gdjs._20027_33756_21333Code.GDMenuPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menulogo"), gdjs._20027_33756_21333Code.GDMenulogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);
/* Reuse gdjs._20027_33756_21333Code.GDbstartObjects1 */
gdjs.copyArray(runtimeScene.getObjects("tsetting"), gdjs._20027_33756_21333Code.GDtsettingObjects1);
gdjs.copyArray(runtimeScene.getObjects("tstart"), gdjs._20027_33756_21333Code.GDtstartObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].getBehavior("Tween").addObjectScaleTween("4", 0.2, 0.2, "easeInOutQuad", 50, false, true);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtstartObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("", 7, "easeInOutQuad", 80, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenuPointObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenuPointObjects1[i].getBehavior("Tween").addObjectOpacityTween("5", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDMenulogoObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDMenulogoObjects1[i].getBehavior("Tween").addObjectOpacityTween("3", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDGameVersionObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDGameVersionObjects1[i].getBehavior("Tween").addObjectOpacityTween("3", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].getBehavior("Tween").addObjectOpacityTween("7", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDtsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDtsettingObjects1[i].getBehavior("Tween").addObjectOpacityTween("7", 0, "easeInOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].resetTimer("转场");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbstartObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbstartObjects1[i].unpauseTimer("转场");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._20027_33756_21333Code.GDbsettingObjects1.length;i<l;++i) {
    if ( gdjs._20027_33756_21333Code.GDbsettingObjects1[i].timerElapsedTime("转场", 0.2) ) {
        gdjs._20027_33756_21333Code.condition0IsTrue_0.val = true;
        gdjs._20027_33756_21333Code.GDbsettingObjects1[k] = gdjs._20027_33756_21333Code.GDbsettingObjects1[i];
        ++k;
    }
}
gdjs._20027_33756_21333Code.GDbsettingObjects1.length = k;}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
/* Reuse gdjs._20027_33756_21333Code.GDbsettingObjects1 */
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].pauseTimer("转场");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].resetTimer("转场");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "设置", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bstart"), gdjs._20027_33756_21333Code.GDbstartObjects1);

gdjs._20027_33756_21333Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._20027_33756_21333Code.GDbstartObjects1.length;i<l;++i) {
    if ( gdjs._20027_33756_21333Code.GDbstartObjects1[i].timerElapsedTime("转场", 0.2) ) {
        gdjs._20027_33756_21333Code.condition0IsTrue_0.val = true;
        gdjs._20027_33756_21333Code.GDbstartObjects1[k] = gdjs._20027_33756_21333Code.GDbstartObjects1[i];
        ++k;
    }
}
gdjs._20027_33756_21333Code.GDbstartObjects1.length = k;}if (gdjs._20027_33756_21333Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bsetting"), gdjs._20027_33756_21333Code.GDbsettingObjects1);
{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].pauseTimer("转场");
}
}{for(var i = 0, len = gdjs._20027_33756_21333Code.GDbsettingObjects1.length ;i < len;++i) {
    gdjs._20027_33756_21333Code.GDbsettingObjects1[i].resetTimer("转场");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始", false);
}}

}


{


gdjs._20027_33756_21333Code.eventsList0(runtimeScene);
}


};

gdjs._20027_33756_21333Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20027_33756_21333Code.GDMenuPointObjects1.length = 0;
gdjs._20027_33756_21333Code.GDMenuPointObjects2.length = 0;
gdjs._20027_33756_21333Code.GDMenuPointObjects3.length = 0;
gdjs._20027_33756_21333Code.GDMenulogoObjects1.length = 0;
gdjs._20027_33756_21333Code.GDMenulogoObjects2.length = 0;
gdjs._20027_33756_21333Code.GDMenulogoObjects3.length = 0;
gdjs._20027_33756_21333Code.GDGameVersionObjects1.length = 0;
gdjs._20027_33756_21333Code.GDGameVersionObjects2.length = 0;
gdjs._20027_33756_21333Code.GDGameVersionObjects3.length = 0;
gdjs._20027_33756_21333Code.GDbstartObjects1.length = 0;
gdjs._20027_33756_21333Code.GDbstartObjects2.length = 0;
gdjs._20027_33756_21333Code.GDbstartObjects3.length = 0;
gdjs._20027_33756_21333Code.GDbsettingObjects1.length = 0;
gdjs._20027_33756_21333Code.GDbsettingObjects2.length = 0;
gdjs._20027_33756_21333Code.GDbsettingObjects3.length = 0;
gdjs._20027_33756_21333Code.GDtstartObjects1.length = 0;
gdjs._20027_33756_21333Code.GDtstartObjects2.length = 0;
gdjs._20027_33756_21333Code.GDtstartObjects3.length = 0;
gdjs._20027_33756_21333Code.GDtsettingObjects1.length = 0;
gdjs._20027_33756_21333Code.GDtsettingObjects2.length = 0;
gdjs._20027_33756_21333Code.GDtsettingObjects3.length = 0;
gdjs._20027_33756_21333Code.GDLight_95moveObjects1.length = 0;
gdjs._20027_33756_21333Code.GDLight_95moveObjects2.length = 0;
gdjs._20027_33756_21333Code.GDLight_95moveObjects3.length = 0;
gdjs._20027_33756_21333Code.GDLight_95pinedObjects1.length = 0;
gdjs._20027_33756_21333Code.GDLight_95pinedObjects2.length = 0;
gdjs._20027_33756_21333Code.GDLight_95pinedObjects3.length = 0;
gdjs._20027_33756_21333Code.GDDeveloptestdataObjects1.length = 0;
gdjs._20027_33756_21333Code.GDDeveloptestdataObjects2.length = 0;
gdjs._20027_33756_21333Code.GDDeveloptestdataObjects3.length = 0;

gdjs._20027_33756_21333Code.eventsList1(runtimeScene);
return;

}

gdjs['_20027_33756_21333Code'] = gdjs._20027_33756_21333Code;
