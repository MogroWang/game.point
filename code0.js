gdjs._21551_21160logo_30028_38754Code = {};
gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1= [];
gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects2= [];
gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1= [];
gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects2= [];
gdjs._21551_21160logo_30028_38754Code.GDNewObject3Objects1= [];
gdjs._21551_21160logo_30028_38754Code.GDNewObject3Objects2= [];
gdjs._21551_21160logo_30028_38754Code.GDMovepoint2Objects1= [];
gdjs._21551_21160logo_30028_38754Code.GDMovepoint2Objects2= [];
gdjs._21551_21160logo_30028_38754Code.GDMovepoint1Objects1= [];
gdjs._21551_21160logo_30028_38754Code.GDMovepoint1Objects2= [];

gdjs._21551_21160logo_30028_38754Code.conditionTrue_0 = {val:false};
gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0 = {val:false};
gdjs._21551_21160logo_30028_38754Code.condition1IsTrue_0 = {val:false};
gdjs._21551_21160logo_30028_38754Code.condition2IsTrue_0 = {val:false};
gdjs._21551_21160logo_30028_38754Code.conditionTrue_1 = {val:false};
gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_1 = {val:false};
gdjs._21551_21160logo_30028_38754Code.condition1IsTrue_1 = {val:false};
gdjs._21551_21160logo_30028_38754Code.condition2IsTrue_1 = {val:false};


gdjs._21551_21160logo_30028_38754Code.eventsList0 = function(runtimeScene) {

{


gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = false;
{
gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1);
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1600, 900, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].resetTimer("显示");
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1[i].setTextAlignment("center");
}
}}

}


{


gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = false;
gdjs._21551_21160logo_30028_38754Code.condition1IsTrue_0.val = false;
{
gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val ) {
{
{gdjs._21551_21160logo_30028_38754Code.conditionTrue_1 = gdjs._21551_21160logo_30028_38754Code.condition1IsTrue_0;
gdjs._21551_21160logo_30028_38754Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7459788);
}
}}
if (gdjs._21551_21160logo_30028_38754Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("1", 255, "easeInOutQuad", 2000, false);
}
}{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].getBehavior("Tween").addObjectPositionTween("2", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 1000, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 550, "easeInOutExpo", 1500, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs._21551_21160logo_30028_38754Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 56,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 50);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber((( gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1[0].getX()));
}{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObject3Objects1[i].setString("测试数据\n" + "底部文字logoX位置：" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + "\n底部文字logoY位置：" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber((( gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1[0].getY()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1);

gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].timerElapsedTime("显示", 3) ) {
        gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = true;
        gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[k] = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length = k;}if (gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val) {
/* Reuse gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeOutQuad", 500, false);
}
}{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1[i].getBehavior("Tween").addObjectOpacityTween("", 0, "easeOutQuad", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1);

gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].timerElapsedTime("显示", 5) ) {
        gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = true;
        gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[k] = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length = k;}if (gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "启动第二界面", false);
}}

}


{


gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val = false;
{
{gdjs._21551_21160logo_30028_38754Code.conditionTrue_1 = gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0;
}
}if (gdjs._21551_21160logo_30028_38754Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 1000,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 550);
}
}}

}


};

gdjs._21551_21160logo_30028_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects1.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDNewObjectObjects2.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects1.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDNewObject2Objects2.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDNewObject3Objects1.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDNewObject3Objects2.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDMovepoint2Objects1.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDMovepoint2Objects2.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDMovepoint1Objects1.length = 0;
gdjs._21551_21160logo_30028_38754Code.GDMovepoint1Objects2.length = 0;

gdjs._21551_21160logo_30028_38754Code.eventsList0(runtimeScene);
return;

}

gdjs['_21551_21160logo_30028_38754Code'] = gdjs._21551_21160logo_30028_38754Code;
