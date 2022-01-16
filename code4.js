gdjs._24320_22987Code = {};
gdjs._24320_22987Code.GDstarttextObjects1= [];
gdjs._24320_22987Code.GDstarttextObjects2= [];
gdjs._24320_22987Code.GDbacktextObjects1= [];
gdjs._24320_22987Code.GDbacktextObjects2= [];
gdjs._24320_22987Code.GDbackObjects1= [];
gdjs._24320_22987Code.GDbackObjects2= [];
gdjs._24320_22987Code.GDNewObject2Objects1= [];
gdjs._24320_22987Code.GDNewObject2Objects2= [];
gdjs._24320_22987Code.GDNewObject3Objects1= [];
gdjs._24320_22987Code.GDNewObject3Objects2= [];

gdjs._24320_22987Code.conditionTrue_0 = {val:false};
gdjs._24320_22987Code.condition0IsTrue_0 = {val:false};
gdjs._24320_22987Code.condition1IsTrue_0 = {val:false};
gdjs._24320_22987Code.condition2IsTrue_0 = {val:false};
gdjs._24320_22987Code.condition3IsTrue_0 = {val:false};
gdjs._24320_22987Code.condition4IsTrue_0 = {val:false};
gdjs._24320_22987Code.conditionTrue_1 = {val:false};
gdjs._24320_22987Code.condition0IsTrue_1 = {val:false};
gdjs._24320_22987Code.condition1IsTrue_1 = {val:false};
gdjs._24320_22987Code.condition2IsTrue_1 = {val:false};
gdjs._24320_22987Code.condition3IsTrue_1 = {val:false};
gdjs._24320_22987Code.condition4IsTrue_1 = {val:false};


gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs._24320_22987Code.GDNewObject2Objects1});gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs._24320_22987Code.GDNewObject2Objects1});gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs._24320_22987Code.GDNewObject2Objects1});gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._24320_22987Code.GDbackObjects1});gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._24320_22987Code.GDbackObjects1});gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._24320_22987Code.GDbackObjects1});gdjs._24320_22987Code.eventsList0 = function(runtimeScene) {

{


gdjs._24320_22987Code.condition0IsTrue_0.val = false;
gdjs._24320_22987Code.condition1IsTrue_0.val = false;
{
gdjs._24320_22987Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._24320_22987Code.condition0IsTrue_0.val ) {
{
{gdjs._24320_22987Code.conditionTrue_1 = gdjs._24320_22987Code.condition1IsTrue_0;
gdjs._24320_22987Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7467388);
}
}}
if (gdjs._24320_22987Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._24320_22987Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._24320_22987Code.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs._24320_22987Code.GDstarttextObjects1);
{for(var i = 0, len = gdjs._24320_22987Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDstarttextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDbackObjects1[i].setOpacity(0);
}
}}

}


{


gdjs._24320_22987Code.condition0IsTrue_0.val = false;
{
gdjs._24320_22987Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._24320_22987Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._24320_22987Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs._24320_22987Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._24320_22987Code.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs._24320_22987Code.GDstarttextObjects1);
{for(var i = 0, len = gdjs._24320_22987Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDstarttextObjects1[i].getBehavior("Tween").addObjectOpacityTween("st1", 255, "easeOutQuad", 700, false);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].getBehavior("Tween").addObjectOpacityTween("st1", 255, "easeOutQuad", 700, false);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDbackObjects1[i].getBehavior("Tween").addObjectOpacityTween("场景开始淡入", 255, "easeOutQuad", 700, false);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject3Objects1[i].setCenterPositionInScene((( gdjs._24320_22987Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs._24320_22987Code.GDNewObject2Objects1[0].getCenterXInScene()),(( gdjs._24320_22987Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs._24320_22987Code.GDNewObject2Objects1[0].getCenterYInScene()) + 275);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._24320_22987Code.GDNewObject2Objects1);

gdjs._24320_22987Code.condition0IsTrue_0.val = false;
{
gdjs._24320_22987Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs._24320_22987Code.condition0IsTrue_0.val) {
/* Reuse gdjs._24320_22987Code.GDNewObject2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs._24320_22987Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].enableEffect("发光", true);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].getBehavior("Tween").addObjectScaleTween("", 0.7, 0.7, "easeInOutQuad", 100, false, true);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].getBehavior("Tween").addObjectOpacityTween("m1", 245, "easeOutQuad", 700, false);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject3Objects1[i].getBehavior("Tween").addObjectScaleTween("5", 1.1, 1.1, "easeInOutQuad", 100, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._24320_22987Code.GDNewObject2Objects1);

gdjs._24320_22987Code.condition0IsTrue_0.val = false;
{
gdjs._24320_22987Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDNewObject2Objects1Objects, runtimeScene, true, true);
}if (gdjs._24320_22987Code.condition0IsTrue_0.val) {
/* Reuse gdjs._24320_22987Code.GDNewObject2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs._24320_22987Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].enableEffect("发光", false);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].getBehavior("Tween").addObjectScaleTween("2", 0.6, 0.6, "easeInOutQuad", 100, false, true);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject3Objects1[i].getBehavior("Tween").addObjectScaleTween("3", 1, 1, "easeInOutQuad", 100, false, false);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDNewObject2Objects1[i].getBehavior("Tween").addObjectOpacityTween("m2", 255, "easeOutQuad", 700, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._24320_22987Code.GDNewObject2Objects1);

gdjs._24320_22987Code.condition0IsTrue_0.val = false;
gdjs._24320_22987Code.condition1IsTrue_0.val = false;
{
gdjs._24320_22987Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs._24320_22987Code.condition0IsTrue_0.val ) {
{
gdjs._24320_22987Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs._24320_22987Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始_故事模式", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._24320_22987Code.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("backtext"), gdjs._24320_22987Code.GDbacktextObjects1);
gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs._24320_22987Code.GDstarttextObjects1);
{for(var i = 0, len = gdjs._24320_22987Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDstarttextObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,100);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDbackObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 100);
}
}{for(var i = 0, len = gdjs._24320_22987Code.GDbacktextObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDbacktextObjects1[i].setCenterPositionInScene((( gdjs._24320_22987Code.GDbackObjects1.length === 0 ) ? 0 :gdjs._24320_22987Code.GDbackObjects1[0].getPointX("RealCenter")),(( gdjs._24320_22987Code.GDbackObjects1.length === 0 ) ? 0 :gdjs._24320_22987Code.GDbackObjects1[0].getPointY("RealCenter")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._24320_22987Code.GDbackObjects1);

gdjs._24320_22987Code.condition0IsTrue_0.val = false;
{
gdjs._24320_22987Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDbackObjects1Objects, runtimeScene, true, false);
}if (gdjs._24320_22987Code.condition0IsTrue_0.val) {
/* Reuse gdjs._24320_22987Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._24320_22987Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDbackObjects1[i].getBehavior("Tween").addObjectScaleTween("back鼠标移过放大", 0.6, 0.6, "easeInOutQuad", 70, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._24320_22987Code.GDbackObjects1);

gdjs._24320_22987Code.condition0IsTrue_0.val = false;
{
gdjs._24320_22987Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDbackObjects1Objects, runtimeScene, true, true);
}if (gdjs._24320_22987Code.condition0IsTrue_0.val) {
/* Reuse gdjs._24320_22987Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._24320_22987Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDbackObjects1[i].getBehavior("Tween").addObjectScaleTween("back鼠标移过缩小", 0.5, 0.5, "easeInOutQuad", 70, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._24320_22987Code.GDbackObjects1);

gdjs._24320_22987Code.condition0IsTrue_0.val = false;
gdjs._24320_22987Code.condition1IsTrue_0.val = false;
gdjs._24320_22987Code.condition2IsTrue_0.val = false;
gdjs._24320_22987Code.condition3IsTrue_0.val = false;
{
gdjs._24320_22987Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._24320_22987Code.mapOfGDgdjs_46_9524320_9522987Code_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs._24320_22987Code.condition0IsTrue_0.val ) {
{
gdjs._24320_22987Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._24320_22987Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._24320_22987Code.GDbackObjects1.length;i<l;++i) {
    if ( gdjs._24320_22987Code.GDbackObjects1[i].getBehavior("Tween").hasFinished("场景开始淡入") ) {
        gdjs._24320_22987Code.condition2IsTrue_0.val = true;
        gdjs._24320_22987Code.GDbackObjects1[k] = gdjs._24320_22987Code.GDbackObjects1[i];
        ++k;
    }
}
gdjs._24320_22987Code.GDbackObjects1.length = k;}if ( gdjs._24320_22987Code.condition2IsTrue_0.val ) {
{
{gdjs._24320_22987Code.conditionTrue_1 = gdjs._24320_22987Code.condition3IsTrue_0;
gdjs._24320_22987Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7471540);
}
}}
}
}
if (gdjs._24320_22987Code.condition3IsTrue_0.val) {
/* Reuse gdjs._24320_22987Code.GDbackObjects1 */
{for(var i = 0, len = gdjs._24320_22987Code.GDbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987Code.GDbackObjects1[i].getBehavior("Tween").addObjectScaleTween("233", 0.2, 0.2, "easeInOutQuad", 50, false, true);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主菜单", false);
}}

}


};

gdjs._24320_22987Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._24320_22987Code.GDstarttextObjects1.length = 0;
gdjs._24320_22987Code.GDstarttextObjects2.length = 0;
gdjs._24320_22987Code.GDbacktextObjects1.length = 0;
gdjs._24320_22987Code.GDbacktextObjects2.length = 0;
gdjs._24320_22987Code.GDbackObjects1.length = 0;
gdjs._24320_22987Code.GDbackObjects2.length = 0;
gdjs._24320_22987Code.GDNewObject2Objects1.length = 0;
gdjs._24320_22987Code.GDNewObject2Objects2.length = 0;
gdjs._24320_22987Code.GDNewObject3Objects1.length = 0;
gdjs._24320_22987Code.GDNewObject3Objects2.length = 0;

gdjs._24320_22987Code.eventsList0(runtimeScene);
return;

}

gdjs['_24320_22987Code'] = gdjs._24320_22987Code;
