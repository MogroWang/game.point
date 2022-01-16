gdjs._21551_21160_31532_20108_30028_38754Code = {};
gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1= [];
gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects2= [];
gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1= [];
gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects2= [];

gdjs._21551_21160_31532_20108_30028_38754Code.conditionTrue_0 = {val:false};
gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0 = {val:false};
gdjs._21551_21160_31532_20108_30028_38754Code.condition1IsTrue_0 = {val:false};
gdjs._21551_21160_31532_20108_30028_38754Code.condition2IsTrue_0 = {val:false};
gdjs._21551_21160_31532_20108_30028_38754Code.conditionTrue_1 = {val:false};
gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_1 = {val:false};
gdjs._21551_21160_31532_20108_30028_38754Code.condition1IsTrue_1 = {val:false};
gdjs._21551_21160_31532_20108_30028_38754Code.condition2IsTrue_1 = {val:false};


gdjs._21551_21160_31532_20108_30028_38754Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("nosound"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("nosoundtext"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1);
{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 45);
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 145);
}
}}

}


{


gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = false;
gdjs._21551_21160_31532_20108_30028_38754Code.condition1IsTrue_0.val = false;
{
gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val ) {
{
{gdjs._21551_21160_31532_20108_30028_38754Code.conditionTrue_1 = gdjs._21551_21160_31532_20108_30028_38754Code.condition1IsTrue_0;
gdjs._21551_21160_31532_20108_30028_38754Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7463844);
}
}}
if (gdjs._21551_21160_31532_20108_30028_38754Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nosound"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("nosoundtext"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1);
{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[i].getBehavior("Tween").addObjectOpacityTween("无声音图标出现透明度", 255, "easeInOutSine", 1500, false);
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[i].getBehavior("Tween").addObjectScaleTween("无声音图标出现放缩", 1.1, 1.1, "easeInOutQuart", 1500, false, true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "");
}}

}


{


gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = false;
gdjs._21551_21160_31532_20108_30028_38754Code.condition1IsTrue_0.val = false;
{
gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.7, "");
}if ( gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val ) {
{
{gdjs._21551_21160_31532_20108_30028_38754Code.conditionTrue_1 = gdjs._21551_21160_31532_20108_30028_38754Code.condition1IsTrue_0;
gdjs._21551_21160_31532_20108_30028_38754Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9520804);
}
}}
if (gdjs._21551_21160_31532_20108_30028_38754Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nosoundtext"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1);
{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].getBehavior("Tween").addObjectOpacityTween("", 255, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].getBehavior("Tween").addObjectScaleTween("2", 1.1, 1.1, "easeInOutQuart", 1000, false, true);
}
}}

}


{


gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = false;
{
gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "");
}if (gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nosound"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("nosoundtext"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1);
{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].getBehavior("Tween").addObjectOpacityTween("4", 0, "easeOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].getBehavior("Tween").addObjectScaleTween("5", 0.5, 0.5, "easeInOutQuart", 1000, false, true);
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[i].getBehavior("Tween").addObjectOpacityTween("无声音图标消失透明度", 0, "easeInOutSine", 1000, false);
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[i].getBehavior("Tween").addObjectScaleTween("无声音图标消失放缩", 0.5, 0.5, "easeInOutQuart", 1000, false, true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nosound"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1);

gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length;i<l;++i) {
    if ( gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[i].getBehavior("Tween").hasFinished("无声音图标消失透明度") ) {
        gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = true;
        gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[k] = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1[i];
        ++k;
    }
}
gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length = k;}if (gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主菜单", false);
}}

}


{


gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = false;
{
gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "English";
}if (gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nosoundtext"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1);
{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].setString("This game does not exist any sound.\nSo you don't need to wear your headphones or turn the sound on.");
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].setTextAlignment("center");
}
}}

}


{


gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = false;
{
gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "简体中文";
}if (gdjs._21551_21160_31532_20108_30028_38754Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nosoundtext"), gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1);
{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].setString("此游戏不包含任何声音\n你无需戴上耳机或是开启声音");
}
}{for(var i = 0, len = gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length ;i < len;++i) {
    gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1[i].setTextAlignment("center");
}
}}

}


};

gdjs._21551_21160_31532_20108_30028_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects1.length = 0;
gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundObjects2.length = 0;
gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects1.length = 0;
gdjs._21551_21160_31532_20108_30028_38754Code.GDnosoundtextObjects2.length = 0;

gdjs._21551_21160_31532_20108_30028_38754Code.eventsList0(runtimeScene);
return;

}

gdjs['_21551_21160_31532_20108_30028_38754Code'] = gdjs._21551_21160_31532_20108_30028_38754Code;
