import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight } from "@babylonjs/core";
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const ball = MeshBuilder.CreateSphere("ball", { diameter: 3 }, scene);

  const ground = MeshBuilder.CreateGround("ground", {width:10, height: 10}, scene)

  const material = new StandardMaterial("ball-material", scene);
  material.diffuseColor = Color3.Red();
  
  ball.material = material;
  ball.position = new Vector3(0,1,0)

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };