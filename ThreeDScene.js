import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import './ThreeDScene.scss';

const ThreeDScene = () => {
  return (
    <Canvas className="threeDScene">
      <ambientLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </Canvas>
  );
};

export default ThreeDScene;
