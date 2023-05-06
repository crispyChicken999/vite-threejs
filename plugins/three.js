import { defineNuxtPlugin } from "#app";
import * as THREE from "three";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$THREE = THREE;
});
