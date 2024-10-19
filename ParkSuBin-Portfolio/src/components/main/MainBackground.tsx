import { Canvas } from "@react-three/fiber"
import { Color } from "three/webgpu";
import { OrbitControls } from "@react-three/drei";

type Vector3 = [number, number, number];

const CAMERA_POSITION: Vector3 = [0, 2000, 2000];
const CAMERA_ROTATION: Vector3 = [-0.5, 0, 0];
const CAMERA_FAR = 100000;

export default function MainBackground() {
    const camera = {
        position: CAMERA_POSITION,
        rotation: CAMERA_ROTATION,
        far: CAMERA_FAR,
    };

  return (
    <Canvas camera={camera} style={{ height: '100vh', width: '100vw' }}>
        <primitive object={new Color('#100')} attach="background" />
        <ambientLight color="#fff" intensity={5}/>
        <OrbitControls />
    </Canvas>
  )
}
