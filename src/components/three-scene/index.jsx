import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

function ThreeScene() {
  const sceneRef = useRef(null);
  useEffect(() => {
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // 创建渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 设置背景颜色为白色
    renderer.setClearColor(0x000000, 0);
    sceneRef.current.appendChild(renderer.domElement);

    // 添加一个3D模型到场景中
    const loader = new GLTFLoader();

    loader.load(
      "../public/shiba.glb",
      function (gltf) {
        const model = gltf.scene;

        // 设置模型的位置、旋转等属性
        model.position.set(0, 0, 0);
        // model.rotation.set(0, Math.PI, 0);
        // model.scale.set(1, 1, 1);

        // 将模型添加到场景中
        scene.add(gltf.scene);

        animate();
      },

      // 加载进度回调函数
      function (xhr) {
        // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // 加载出错时的回调函数
      function (error) {
        console.log("An error happened", error);
      }
    );
    camera.position.z = 5;

    const textLoader = new FontLoader();
    let textMesh;
    let textGeo;
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xe5d371 });
    textLoader.load(
      "../public/fonts/STKaiti_Regular2.json",
      (respones) => {
        textGeo = new TextGeometry("杨慧", {
          font: respones,
          size: 0.5,
          height: 0.1,
          curveSegments: 12,
          align: 'center', // 设置水平居中
          // bevelSize: 8,
          bevelEnabled: false,
        });
        textGeo.computeBoundingBox();
        const centerOffset =
          -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);
        textMesh = new THREE.Mesh(textGeo, textMaterial);
        textMesh.position.set(-0.7, 1, 0); // 设置文字位置，这里将文字放在立方体上方
        scene.add(textMesh); // 将文字添加到场景中
      }
    );

    // 添加鼠标按下事件处理函数
    function onMouseDown(event) {
      isDragging = true;
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    }

    // 添加鼠标移动事件处理函数
    function onMouseMove(event) {
      if (isDragging) {
        const deltaX = event.clientX - previousMouseX;
        const deltaY = event.clientY - previousMouseY;
        previousMouseX = event.clientX;
        previousMouseY = event.clientY;
        scene.rotation.y += deltaX * 0.01;
        scene.rotation.x += deltaY * 0.01;
      }
    }

    // 添加鼠标松开事件处理函数
    function onMouseUp() {
      isDragging = false;
    }

    document.addEventListener("mousedown", onMouseDown, false);
    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("mouseup", onMouseUp, false);

    // 动画函数
    function animate() {
      requestAnimationFrame(animate);
      // console.log(scene.children[0]);

      // Rotate the model
      if (!isDragging) {
        scene.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    }

    // animate();

    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={sceneRef} />;
}

export default ThreeScene;
