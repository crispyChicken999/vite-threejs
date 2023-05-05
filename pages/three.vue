<template>
  <el-button @click="$router.push('/')">Back to homepage</el-button>
  <div class="msg">Hello ThreeJs!</div>
  <div ref="container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
function generateCube() {
  // 添加渲染器
  const renderer = new $THREE.WebGLRenderer({ antialias: true, alpha: true });
  container.value.appendChild(renderer.domElement);
  // container.style.backgroundColor = 'transparent';
  renderer.setSize(1000, 500);
  // 添加透视相机
  const camera = new $THREE.PerspectiveCamera(75, 1000 / 500, 0.1, 1000);
  camera.position.z = 3;

  // 添加场景
  const scene = new $THREE.Scene();
  const geometry = new $THREE.BoxGeometry(2, 2, 2); // 添加盒子几何体
  const material = new $THREE.MeshPhongMaterial({ color: "#1989fa" }); // 添加Phong材质 - 可被光源照射
  const cube = new $THREE.Mesh(geometry, material); // 添加网格模型
  scene.add(cube); // 将网格模型添加到场景中

  // 添加环境光源
  const color = 0xffffff;
  const intensity = 1;
  const light = new $THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // 动起来
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
}
function generateCircle() {
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
  generateCircle();
});
</script>
<style lang="scss" scoped>
.msg {
  color: red;
}
</style>
