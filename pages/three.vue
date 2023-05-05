<template>
  <el-button @click="$router.push('/')">Back to homepage</el-button>
  <div class="msg">Hello ThreeJs!</div>
  <div ref="container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

onMounted(() => {
  // 添加渲染器
  const renderer = new $THREE.WebGLRenderer({ antialias: true });
  container.value.appendChild(renderer.domElement);
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
});
</script>
<style lang="scss" scoped>
.msg {
  color: red;
}
</style>
