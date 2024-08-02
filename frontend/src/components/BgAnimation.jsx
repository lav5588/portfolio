// src/ThreeCircle.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Circle component
function Circle() {
  const circleRef = useRef();
  const { camera } = useThree(); // Access the camera from the context
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3());
  const speed = 0.01;
  const rotationSpeedX = 0.001;
  const rotationSpeedY = 0.001;
  const rotationSpeedZ = 0.001;
  const circleRadius = 1; // Adjust according to the circle's size
  const [texture,setTexture] = useState(new THREE.TextureLoader().load('design.jpg'));
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('stone.jpg');
    setTexture(texture);
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates to range [-1, 1]
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Convert mouse coordinates to 3D space
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Create a large invisible plane positioned at the camera's near plane
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), camera.near);
      const intersect = raycaster.ray.intersectPlane(plane, new THREE.Vector3());
      setTargetPosition(intersect);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [camera]);

  useFrame(() => {
    // Calculate the direction vector from the circle to the target position
    const direction = new THREE.Vector3().subVectors(targetPosition, circleRef.current.position);
    const distance = direction.length();

    // Check if the distance to the target position is less than the speed
    if (distance > speed) {
      direction.normalize();
      direction.multiplyScalar(speed);
      circleRef.current.position.add(direction);
    } else {
      circleRef.current.position.copy(targetPosition); // Snap to the target if close enough
    }

    // Update the rotation of the circle
    circleRef.current.rotation.x += rotationSpeedX;
    circleRef.current.rotation.y += rotationSpeedY;
    circleRef.current.rotation.z += rotationSpeedZ;
  });

  return (
    <mesh ref={circleRef}>
      <sphereGeometry args={[circleRadius, 30,30]} />
      <meshBasicMaterial  opacity={0.5} map={texture}   side={THREE.DoubleSide} />
    </mesh>
  );
}

// Main component
export default function App() {
  return (
    <Canvas >
      <ambientLight />
      <Circle />
    </Canvas>
  );
}
