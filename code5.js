gdjs._24320_22987_95_25925_20107_27169_24335Code = {};
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1= [];
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects2= [];
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1= [];
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects2= [];
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1= [];
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects2= [];
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1= [];
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects2= [];

gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_0 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition2IsTrue_0 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition3IsTrue_0 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_1 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_1 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition2IsTrue_1 = {val:false};
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition3IsTrue_1 = {val:false};


gdjs._24320_22987_95_25925_20107_27169_24335Code.mapOfGDgdjs_46_9524320_9522987_9595_9525925_9520107_9527169_9524335Code_46GDbbackObjects1Objects = Hashtable.newFrom({"bback": gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1});gdjs._24320_22987_95_25925_20107_27169_24335Code.eventsList0 = function(runtimeScene) {

{


gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = false;
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val = false;
{
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val ) {
{
{gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1 = gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9582572);
}
}}
if (gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Movepoint1"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1);
gdjs.copyArray(runtimeScene.getObjects("bback"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("storymodetext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1);
{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,100);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i].setCenterPositionInScene(110,110);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i].pauseTimer("转场");
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,100);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1[i].setOpacity(0);
}
}}

}


{


gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = false;
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val = false;
{
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val ) {
{
{gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1 = gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9585916);
}
}}
if (gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("storymodetext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1);
{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i].getBehavior("Tween").addObjectPositionTween("", 175, 70, "easeInOutQuart", 1000, false);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i].getBehavior("Tween").addObjectColorTween("2", "104;104;104", "easeInQuad", 700, false, false);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("3", 25, "easeOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 200,135);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1);

gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = false;
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length;i<l;++i) {
    if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i].getBehavior("Tween").hasFinished("") ) {
        gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = true;
        gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[k] = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i];
        ++k;
    }
}
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length = k;}if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val ) {
{
{gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1 = gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9578076);
}
}}
if (gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val) {
/* Reuse gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("storymodetext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1);
{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1[i].getBehavior("Tween").addObjectPositionTween("", (( gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length === 0 ) ? 0 :gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[0].getX()), (( gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length === 0 ) ? 0 :gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[0].getY()) + 35, "easeOutQuart", 500, false);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1[i].getBehavior("Tween").addObjectOpacityTween("2", 255, "easeOutQuad", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("storymodetext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1);

gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = false;
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1.length;i<l;++i) {
    if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1[i].getBehavior("Tween").hasFinished("") ) {
        gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = true;
        gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1[k] = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1[i];
        ++k;
    }
}
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1.length = k;}if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val ) {
{
{gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1 = gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9582804);
}
}}
if (gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bback"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1);
{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i].getBehavior("Tween").addObjectOpacityTween("", 255, "easeOutQuad", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bback"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1);

gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = false;
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val = false;
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition2IsTrue_0.val = false;
{
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._24320_22987_95_25925_20107_27169_24335Code.mapOfGDgdjs_46_9524320_9522987_9595_9525925_9520107_9527169_9524335Code_46GDbbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val ) {
{
gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.condition1IsTrue_0.val ) {
{
{gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1 = gdjs._24320_22987_95_25925_20107_27169_24335Code.condition2IsTrue_0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9588100);
}
}}
}
if (gdjs._24320_22987_95_25925_20107_27169_24335Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Movepoint1"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1);
/* Reuse gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1 */
gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("storymodetext"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1);
{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i].unpauseTimer("转场");
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i].resetTimer("转场");
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i].getBehavior("Tween").addObjectPositionTween("", (( gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1.length === 0 ) ? 0 :gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1[0].getPointX("")), (( gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1.length === 0 ) ? 0 :gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1[0].getPointY("")), "easeOutQuart", 500, false);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i].getBehavior("Tween").addObjectColorTween("4", "31;31;31", "easeOutQuart", 500, false, false);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween("3", 36, "easeOutQuad", 200, false);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1[i].getBehavior("Tween").addObjectOpacityTween("3", 0, "easeOutQuad", 500, false);
}
}{for(var i = 0, len = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length ;i < len;++i) {
    gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i].getBehavior("Tween").addObjectOpacityTween("2", 0, "easeOutQuad", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bback"), gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1);

gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length;i<l;++i) {
    if ( gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i].timerElapsedTime("转场", 0.5) ) {
        gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val = true;
        gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[k] = gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1[i];
        ++k;
    }
}
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length = k;}if (gdjs._24320_22987_95_25925_20107_27169_24335Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "开始", false);
}}

}


};

gdjs._24320_22987_95_25925_20107_27169_24335Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects1.length = 0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstorymodetextObjects2.length = 0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects1.length = 0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDstarttextObjects2.length = 0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects1.length = 0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDMovepoint1Objects2.length = 0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects1.length = 0;
gdjs._24320_22987_95_25925_20107_27169_24335Code.GDbbackObjects2.length = 0;

gdjs._24320_22987_95_25925_20107_27169_24335Code.eventsList0(runtimeScene);
return;

}

gdjs['_24320_22987_95_25925_20107_27169_24335Code'] = gdjs._24320_22987_95_25925_20107_27169_24335Code;
