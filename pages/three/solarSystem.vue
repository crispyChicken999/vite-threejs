<template>
  <el-button @click="$router.push('/three')"
    >Back To ThreeJS Playground</el-button
  >
  <div class="controllers">
    <div>
      <span>Camera's x</span>
      <el-slider
        :max="100"
        :min="-100"
        :step="0.001"
        v-model="options.camera.x"
      ></el-slider>
    </div>
    <div>
      <span>Camera's y</span>
      <el-slider
        :max="100"
        :min="-100"
        :step="0.001"
        v-model="options.camera.y"
      ></el-slider>
    </div>
    <div>
      <span>Camera's z</span>
      <el-slider
        :max="100"
        :min="-100"
        :step="0.001"
        v-model="options.camera.z"
      ></el-slider>
    </div>
  </div>
  <div class="color-pickers">
    <div class="picker">
      <span>Canvas backgroundColor is:</span>
      <el-color-picker v-model="bgColor"></el-color-picker>
    </div>
    <div class="picker">
      <span>Sun emissive color is:</span>
      <el-color-picker v-model="sunColor"></el-color-picker>
    </div>
  </div>
  <div class="solar-system">
    <canvas id="solar-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const { $THREE: THREE } = useNuxtApp();
const options = ref({
  camera: {
    x: 0,
    y: 50,
    z: 0,
  },
});
const bgColor = ref("#3b3a39");
const sunColor = ref("#FFFF00");
useHead({
  title: "Solar System",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Solar System",
    },
  ],
});
function generateSolarSystem() {
  const scene = new THREE.Scene();
  // 设置场景的背景颜色为黑色
  watchEffect(() => {
    scene.background = new THREE.Color(bgColor.value);
  });
  const camera = new THREE.PerspectiveCamera(75, 1000 / 500, 0.1, 1000);
  watchEffect(() => {
    camera.position.set(
      options.value.camera.x,
      options.value.camera.y,
      options.value.camera.z
    );
    camera.lookAt(0, 0, 0);
    camera.up.set(0, 0, 1);
  });
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("solar-canvas"),
    antialias: true,
    alpha: true,
  });
  renderer.setSize(1000, 500);
  const controls = new OrbitControls(camera, renderer.domElement);

  // 设置相机垂直旋转的角度范围
  // controls.maxPolarAngle = Math.PI / 3; // 最大角度为 60 度
  // controls.minPolarAngle = -Math.PI / 3; // 最小角度为 -60 度

  // 添加点状光源
  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.PointLight(color, intensity);
  scene.add(light);

  // 要更新旋转角度的对象数组
  const objects = [];
  const geometry = new THREE.SphereGeometry(2, 36, 36);

  const solarSystem = new THREE.Object3D();
  scene.add(solarSystem);
  objects.push(solarSystem);

  const earthOrbit = new THREE.Object3D();
  solarSystem.add(earthOrbit);
  objects.push(earthOrbit);

  const moonOrbit = new THREE.Object3D();
  earthOrbit.add(moonOrbit);
  objects.push(moonOrbit);

  // 添加太阳
  const sunMaterial = new THREE.MeshPhongMaterial({ emissive: sunColor.value });
  watchEffect(() => {
    sunMaterial.emissive = new THREE.Color(sunColor.value);
  });
  const sunMesh = new THREE.Mesh(geometry, sunMaterial);
  sunMesh.scale.set(5, 5, 5);
  solarSystem.add(sunMesh);
  solarSystem.add(earthOrbit);
  objects.push(sunMesh);

  // 添加地球
  const earthMaterial = new THREE.MeshPhongMaterial({
    color: 0x2233ff,
    emissive: 0x112244,
  });
  const earthMesh = new THREE.Mesh(geometry, earthMaterial);
  earthOrbit.position.x = 20;
  earthOrbit.add(earthMesh);
  objects.push(earthMesh);

  // 添加月球
  const moonMaterial = new THREE.MeshPhongMaterial({
    color: 0x888888,
    emissive: 0x222222,
  });
  const moonMesh = new THREE.Mesh(geometry, moonMaterial);
  moonMesh.scale.set(0.5, 0.5, 0.5);
  moonOrbit.position.x = 4;
  moonOrbit.add(moonMesh);
  objects.push(moonMesh);

  // 创建一个太阳系圆环
  const torusGeometry = new THREE.TorusGeometry(20, 0.1, 64, 128);
  const torusMaterial = new THREE.MeshBasicMaterial({
    color: "#fff",
    side: THREE.DoubleSide,
  });
  const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
  solarSystem.add(torusMesh);

  // 创建一个地球轨道圆环
  const earthTorusGeometry = new THREE.TorusGeometry(4.4, 0.1, 64, 128);
  const earthTorusMaterial = new THREE.MeshBasicMaterial({
    color: "#fff",
    side: THREE.DoubleSide,
  });
  const earthTorusMesh = new THREE.Mesh(earthTorusGeometry, earthTorusMaterial);
  earthMesh.add(earthTorusMesh);

  function render(time) {
    time *= 0.001;
    objects.forEach((obj) => {
      obj.rotation.z = time;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    controls.update();
  }
  requestAnimationFrame(render);
}
onMounted(() => {
  generateSolarSystem();
});
</script>

<style lang="scss" scoped>
.solar-system {
  margin-top: 10px;
}

.controllers {
  gap: 10px;
  display: flex;
  margin: 10px;
  align-items: center;
  padding: 30px 10px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  > div {
    flex: 1;
    gap: 10px;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
}

.color-pickers {
  display: flex;
  gap: 10px;
  .picker {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}

@media screen and (max-width: 768px) {
  .controllers {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
}
</style>
