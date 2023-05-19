<template>
  <el-button @click="$router.push('/')">Back to homepage</el-button>
  <el-button @click="$router.push('/three/tank')">Switch To Tank Playground</el-button>
  <el-button @click="$router.push('/three/solarSystem')">Switch To SolarSystem Playground</el-button>
  <el-button @click="$router.push('/three/lights')">Switch To Lights Playground</el-button>
  <div class="msg">Hello ThreeJs!</div>
  <div class="controls">
    <div class="first-control">
      <p>
        <span>Light's x:</span
        ><el-slider :min="-100" :max="100" v-model="controls.first.x" /><span>{{
          controls.first.x
        }}</span>
      </p>
      <p>
        <span>Light's y:</span
        ><el-slider :min="-100" :max="100" v-model="controls.first.y" /><span>{{
          controls.first.y
        }}</span>
      </p>
      <p>
        <span>Light's z:</span
        ><el-slider :min="-100" :max="100" v-model="controls.first.z" /><span>{{
          controls.first.z
        }}</span>
      </p>
      <p>
        <el-button @click="resetSetting"
          ><el-icon color="#1989fa"><RefreshRight /></el-icon
        ></el-button>
        <el-button @click="addCubes">Add Cubes</el-button>
        <el-checkbox v-model="isFogEnable">Enable Fog</el-checkbox>
      </p>
    </div>
  </div>
  <div ref="container" id="container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import GUI from "lil-gui";

useHead({
  title: "ThreeJs Playground",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "ThreeJs Playground",
    },
  ],
});

const container = ref(null);
const { $THREE } = useNuxtApp();
const controls = ref({
  first: {
    x: 0,
    y: 0,
    z: 4,
  },
});
const cubes = ref([
  [-5, 0, 0],
  [0, 0, 0],
  [5, 0, 0],
]);
const isFogEnable = ref(false);

function resetSetting() {
  controls.value.first.x = 0;
  controls.value.first.y = 0;
  controls.value.first.z = 4;
}

function generateCube() {
  // 添加渲染器
  const renderer = new $THREE.WebGLRenderer({ antialias: true, alpha: true });
  container.value.appendChild(renderer.domElement);

  renderer.setSize(1000, 500);
  // 添加透视相机
  const camera = new $THREE.PerspectiveCamera(75, 1000 / 500, 0.1, 1000);
  camera.position.z = 10;
  // 添加控制器
  const controlsCamera = new OrbitControls(camera, renderer.domElement);

  // 添加场景
  const scene = new $THREE.Scene();
  const geometry = new $THREE.BoxGeometry(2, 2, 2); // 添加盒子几何体
  const material = new $THREE.MeshPhongMaterial({ color: "#1989fa" }); // 添加Phong材质 - 可被光源照射
  const cubeGroup = [];

  // 添加雾化效果
  class FogGUIHelper {
    constructor(fog, backgroundColor) {
      this.fog = fog;
      this.backgroundColor = backgroundColor;
    }
    get near() {
      return this.fog.near;
    }
    set near(v) {
      this.fog.near = v;
      this.fog.far = Math.max(this.fog.far, v);
    }
    get far() {
      return this.fog.far;
    }
    set far(v) {
      this.fog.far = v;
      this.fog.near = Math.min(this.fog.near, v);
    }
    get color() {
      return `#${this.fog.color.getHexString()}`;
    }
    set color(hexString) {
      this.fog.color.set(hexString);
      this.backgroundColor.set(hexString);
    }
  }
  let gui;
  watchEffect(() => {
    if (isFogEnable.value) {
      scene.fog = new $THREE.Fog("lightblue", 2, 20);
      scene.background = new $THREE.Color("lightblue");
      gui = new GUI({ container: container.value });
      const fogGUIHelper = new FogGUIHelper(scene.fog, scene.background);
      gui.add(fogGUIHelper, "near", 0, 100).listen();
      gui.add(fogGUIHelper, "far", 0, 100).listen();
      gui.addColor(fogGUIHelper, "color");
    } else {
      scene.fog = null;
      scene.background = null;
      gui && gui.destroy();
    }
  });

  // 添加环境光源
  const color = 0xffffff;
  const intensity = 1;
  const light = new $THREE.DirectionalLight(color, intensity);
  watchEffect(() => {
    light.position.set(
      controls.value.first.x,
      controls.value.first.y,
      controls.value.first.z
    );
  });

  watchEffect(() => {
    cubes.value.forEach((item) => {
      const cube = new $THREE.Mesh(geometry, material); // 添加网格模型
      cubeGroup.push(cube);
      cube.position.set(...item);
      scene.add(cube); // 将网格模型添加到场景中
    });
  });

  scene.add(light);

  // 动起来
  const animate = () => {
    requestAnimationFrame(animate);
    cubeGroup.forEach((cube) => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    });
    controlsCamera.update();
    renderer.render(scene, camera);
  };
  animate();
}

function addCubes() {
  // 生成-30到30的x
  const randomX = Math.floor(Math.random() * 60 - 30);
  // 生成-30到30的y
  const randomY = Math.floor(Math.random() * 60 - 30);
  // 生成-30到30的z
  const randomZ = Math.floor(Math.random() * 60 - 30);
  cubes.value.splice(0, cubes.value.length, [randomX, randomY, randomZ]);
}

function generateHeart() {
  // 添加渲染器
  const renderer = new $THREE.WebGLRenderer({ antialias: true, alpha: true });
  container.value.appendChild(renderer.domElement);
  // container.style.backgroundColor = 'transparent';
  renderer.setSize(1000, 500);
  // 添加透视相机
  const camera = new $THREE.PerspectiveCamera(75, 1000 / 500, 0.1, 1000);
  camera.position.z = 15;

  // 添加控制器
  const controls = new OrbitControls(camera, renderer.domElement);

  // 添加场景
  const scene = new $THREE.Scene();
  const shape = new $THREE.Shape();
  const x = -2.5;
  const y = -5;
  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const extrudeSettings = {
    steps: 10,
    depth: 4.0,
    bevelEnabled: true,
    bevelThickness: 0.77,
    bevelSize: 1.29,
    bevelSegments: 4,
  };

  const geometry = new $THREE.ExtrudeGeometry(shape, extrudeSettings);
  const material = new $THREE.MeshPhongMaterial({ color: "#f40" }); // 添加Phong材质 - 可被光源照射
  const heart = new $THREE.Mesh(geometry, material); // 添加网格模型
  scene.add(heart); // 将网格模型添加到场景中

  // 添加环境光源
  const color = 0xffffff;
  const intensity = 1;
  const light = new $THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // 动起来
  const animate = () => {
    requestAnimationFrame(animate);
    heart.rotation.x += 0.01;
    heart.rotation.y += 0.01;
    renderer.render(scene, camera);
    controls.update();
  };

  animate();
}
onMounted(() => {
  generateCube();
  generateHeart();
});
</script>
<style lang="scss" scoped>
.msg {
  color: red;
}
.controls {
  margin: 20px;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .first-control {
    gap: 30px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    p {
      gap: 30px;
      flex: 1;
      display: flex;
      white-space: nowrap;
      align-items: center;
    }
  }
}

#container {
  width: 100%;
  height: 100%;
  position: relative;
  ::v-deep().lil-gui {
    position: absolute;
    top: 0;
    left: 755px;
  }
}
</style>
