<template>
  <el-button @click="$router.push('/three')"
    >Back To ThreeJS Playground</el-button
  >
  <div class="controls">
    <el-radio-group v-model="selectedLight">
      <el-radio-button label="ambient">Ambient Light</el-radio-button>
      <el-radio-button label="hemisphere">Hemisphere Light</el-radio-button>
      <el-radio-button label="directional">Directional Light</el-radio-button>
      <el-radio-button label="point">Point Light</el-radio-button>
      <el-radio-button label="spot">Spot Light</el-radio-button>
    </el-radio-group>
  </div>
  <div
    class="container"
    v-loading="isLoading"
    element-loading-text="正在加载材质..."
  >
    <canvas id="lights"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
const { $THREE: THREE } = useNuxtApp();
useHead({
  title: "Lights",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Lights",
    },
  ],
});

// 当前选中的光源
const selectedLight = ref("ambient");

// 是否正在加载材质
let isLoading = ref(true);

// 生成光源
function generateLights() {
  const scene = new THREE.Scene();
  const canvas = document.querySelector("#lights");
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    canvas,
  });
  renderer.setSize(1000, 500);

  const fov = 45;
  const aspect = 2;
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const planeSize = 40;
  const loader = new THREE.TextureLoader();

  const texture = loader.load(
    "https://threejs.org/manual/examples/resources/images/checker.png",
    () => {
      isLoading.value = false;
    },
    () => {
      isLoading.value = true;
    }
  );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  const repeats = planeSize / 2;
  texture.repeat.set(repeats, repeats);

  // 平面
  const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
  const planeMat = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const mesh1 = new THREE.Mesh(planeGeo, planeMat);
  mesh1.rotation.x = Math.PI * -0.5;
  scene.add(mesh1);

  // 立方体
  const cubeSize = 4;
  const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  const cubeMat = new THREE.MeshPhongMaterial({ color: "#8AC" });
  const mesh2 = new THREE.Mesh(cubeGeo, cubeMat);
  mesh2.position.set(cubeSize + 1, cubeSize / 2, 0);
  scene.add(mesh2);

  // 球体
  const sphereRadius = 3;
  const sphereWidthDivisions = 32;
  const sphereHeightDivisions = 16;
  const sphereGeo = new THREE.SphereGeometry(
    sphereRadius,
    sphereWidthDivisions,
    sphereHeightDivisions
  );
  const sphereMat = new THREE.MeshPhongMaterial({ color: "#CA8" });
  const mesh3 = new THREE.Mesh(sphereGeo, sphereMat);
  mesh3.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
  scene.add(mesh3);

  // 光线的基本参数
  const intensity = 1;
  const color = 0xffffff;

  // 定义ColorGUIHelper类
  class ColorGUIHelper {
    constructor(object, prop) {
      this.object = object;
      this.prop = prop;
    }
    get value() {
      return `#${this.object[this.prop].getHexString()}`;
    }
    set value(hexString) {
      this.object[this.prop].set(hexString);
    }
  }

  // 环境光
  const ambientLight = new THREE.AmbientLight(color, intensity);
  const ambientLightGUI = new GUI({
    container: document.querySelector(".container"),
  });
  ambientLightGUI
    .addColor(new ColorGUIHelper(ambientLight, "color"), "value")
    .name("color");
  ambientLightGUI.add(ambientLight, "intensity", 0, 2, 0.01);
  watchEffect(() => {
    if (selectedLight.value === "ambient") {
      ambientLight.visible = true;
      ambientLightGUI.domElement.style.display = "block";
    } else {
      ambientLight.visible = false;
      ambientLightGUI.domElement.style.display = "none";
    }
  });
  scene.add(ambientLight);

  // 半球光
  const skyColor = 0xb1e1ff; // light blue
  const groundColor = 0xb97a20; // brownish orange
  const hemisphereLight = new THREE.HemisphereLight(
    skyColor,
    groundColor,
    intensity
  );
  const hemisphereLightGUI = new GUI({
    container: document.querySelector(".container"),
  });
  hemisphereLightGUI
    .addColor(new ColorGUIHelper(hemisphereLight, "color"), "value")
    .name("skyColor");
  hemisphereLightGUI
    .addColor(new ColorGUIHelper(hemisphereLight, "groundColor"), "value")
    .name("groundColor");
  hemisphereLightGUI.add(hemisphereLight, "intensity", 0, 2, 0.01);
  watchEffect(() => {
    if (selectedLight.value === "hemisphere") {
      hemisphereLight.visible = true;
      hemisphereLightGUI.domElement.style.display = "block";
    } else {
      hemisphereLight.visible = false;
      hemisphereLightGUI.domElement.style.display = "none";
    }
  });
  scene.add(hemisphereLight);

  // 方向光
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(0, 10, 0);
  light.target.position.set(-5, 0, 0);
  light.target.position.set(-5, 0, 0);
  scene.add(light);
  scene.add(light.target);
  const helper = new THREE.DirectionalLightHelper(light);
  scene.add(helper);
  const gui = new GUI({ container: document.querySelector(".container") });
  gui.addColor(new ColorGUIHelper(light, "color"), "value").name("color");
  gui.add(light, "intensity", 0, 2, 0.01);
  gui.add(light.target.position, "x", -10, 10);
  gui.add(light.target.position, "z", -10, 10);
  gui.add(light.target.position, "y", 0, 10);
  watchEffect(() => {
    if (selectedLight.value === "directional") {
      light.visible = true;
      light.target.visible = true;
      helper.visible = true;
      gui.domElement.style.display = "block";
    } else {
      light.visible = false;
      light.target.visible = false;
      helper.visible = false;
      gui.domElement.style.display = "none";
    }
  });

  // 点光源
  const pointLight = new THREE.PointLight(color, intensity);
  pointLight.position.set(0, 10, 0);
  scene.add(pointLight);
  const sphereSize = 1;
  const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
  scene.add(pointLightHelper);
  watchEffect(() => {
    if (selectedLight.value === "point") {
      pointLight.visible = true;
      pointLightHelper.visible = true;
    } else {
      pointLight.visible = false;
      pointLightHelper.visible = false;
    }
  });

  // 聚光灯
  const spotLight = new THREE.SpotLight(color, intensity);
  spotLight.position.set(0, 15, 0);
  spotLight.target.position.set(-5, 0, 0);
  scene.add(spotLight);
  scene.add(spotLight.target);
  const spotLightHelper = new THREE.SpotLightHelper(spotLight);
  scene.add(spotLightHelper);
  watchEffect(() => {
    if (selectedLight.value === "spot") {
      spotLight.visible = true;
      spotLight.target.visible = true;
      spotLightHelper.visible = true;
    } else {
      spotLight.visible = false;
      spotLight.target.visible = false;
      spotLightHelper.visible = false;
    }
  });

  // 渲染
  function render(time) {
    time *= 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    controls.update();
  }
  requestAnimationFrame(render);
}
onMounted(() => {
  generateLights();
});
</script>

<style lang="scss" scoped>
.controls,
.container {
  margin-top: 20px;
  position: relative;
  width: fit-content;
  ::v-deep().lil-gui {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
