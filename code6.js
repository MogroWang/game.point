gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDPointObjects1= [];
gdjs.New_32sceneCode.GDPointObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.New_32sceneCode.GDPointObjects1);
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1600, 900, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDPointObjects1.length !== 0 ? gdjs.New_32sceneCode.GDPointObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].setPosition((( gdjs.New_32sceneCode.GDPointObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPointObjects1[0].getPointX("1")),(( gdjs.New_32sceneCode.GDPointObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPointObjects1[0].getPointY("1")));
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDPointObjects1.length = 0;
gdjs.New_32sceneCode.GDPointObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
