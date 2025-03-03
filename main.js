import * as THREE from 'three';

// 1. Create Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);


// 2. Create Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Create Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, metalness: 0.5, roughness: 0.2 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
 scene.add(ambientLight) 

 const directLight = new THREE.DirectionalLight(0xffffff, 1)
directLight.position.set(5,5,5);
scene.add(directLight)
// 5. Animation Loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
