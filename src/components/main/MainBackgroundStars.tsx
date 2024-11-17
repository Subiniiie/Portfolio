import { useMemo } from 'react';
import * as THREE from 'three';

const BACKFROUND_STARS_NUM = 500;
const BACKGROUND_STARS_SIZE = 1.5;
const BACKGROUND_STARS_COLORS = [
    '#8fa8f6',
    '#b4ffb8',
    '#ffdd8f',
    '#ff8fba'
];

const SPACE_MIN_SIZE = -50000;
const SPACE_MAX_SIZE = 50000;
const DIMENSION = 3;

const getRandomInt = (min: number, max: number) => {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.ceil(max);

    return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil;
};

const getRandomFloat = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

const getBackgroundStarsInfo = () => {
    const positions = Array.from(
        { length: BACKFROUND_STARS_NUM + DIMENSION},
        () => getRandomFloat(SPACE_MIN_SIZE, SPACE_MAX_SIZE),
    );

    const colors = Array.from({ length: BACKFROUND_STARS_NUM}, () => {
        const color = new THREE.Color(
            BACKGROUND_STARS_COLORS[getRandomInt(0, BACKGROUND_STARS_COLORS.length)],
        );

        return [color.r, color.g, color.b];
    }).flat();

    return [new Float32Array(positions), new Float32Array(colors)];
};


export default function MainBackgroundStars() {
    const [positions, colors] = useMemo(() => getBackgroundStarsInfo(), [])
  return (
    <points>
        <bufferGeometry attach="geometry">
            <bufferAttribute 
                attach="attributes-position"
                count={BACKFROUND_STARS_NUM}
                array={positions}
                itemSize={3}
            />
            <bufferAttribute 
                attach="attributes-color"
                count={BACKFROUND_STARS_NUM}
                array={colors}
                itemSize={3}
            />
        </bufferGeometry>
        <pointsMaterial 
            attach="material" 
            size={BACKGROUND_STARS_SIZE}
            vertexColors={true}
            sizeAttenuation={false}
            />
    </points>
  );
}
