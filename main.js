import * as THREE from "three";

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const boxGeometry = new THREE.BoxGeometry(1, 1,1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Corrected color
const mesh = new THREE.Mesh(boxGeometry, material);

scene.add(mesh);
camera.position.z = 5;

  renderer.render(scene, camera);

