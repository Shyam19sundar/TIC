import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Section } from "./section.js";
import { Html, useGLTF, OrbitControls } from "@react-three/drei";

function ThreeDModel({ url }) {
  const Model = () => {
    const gltf = useGLTF(url);
    return <primitive object={gltf.scene} dispose={null} />;
  };

  const Lights = () => {
    return (
      <>
        <ambientLight intensity={0.3} />
        <directionalLight position={[100, 100, 0]} />{" "}
        <directionalLight position={[0, 100, 100]} />{" "}
        <directionalLight position={[100, 0, 100]} />{" "}
        {/* <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} /> */}
        {/* <spotLight intensity={1} position={[0, 300, 0]} /> */}
      </>
    );
  };
  const Htmlcontent = () => {
    const ref = useRef();
    useFrame(() => {
      if (ref.current != null) ref.current.rotation.y -= 0.004;
    });
    return (
      <Section factor={1.5} offset={1}>
        <group position={[0, 250, 0]}>
          <mesh ref={ref} position={[0, -35, 0]} scale={[7.5, 7.5, 7.5]}>
            {" "}
            <Model />
          </mesh>
        </group>
      </Section>
    );
  };
  return (
    <Canvas
      colorManagement
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 100, 0], fov: 70 }}
    >
      <Lights />
      <Suspense fallback={null}>
        <Htmlcontent />
      </Suspense>{" "}
      <OrbitControls />
    </Canvas>
  );
}

export default ThreeDModel;
