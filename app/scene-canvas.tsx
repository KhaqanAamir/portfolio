"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import type { MutableRefObject } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform float uEnergy;

  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vLocalPosition;

  void main() {
    vec3 displaced = position;
    float waveA = sin(position.y * 5.0 + uTime * 1.25);
    float waveB = sin(position.x * 4.0 - uTime * 0.85);
    float waveC = cos(position.z * 6.0 + uTime * 0.65);
    float displacement = (waveA + waveB + waveC) * 0.022 * uEnergy;
    displaced += normal * displacement;

    vec4 modelViewPosition = modelViewMatrix * vec4(displaced, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewPosition = -modelViewPosition.xyz;
    vLocalPosition = displaced;

    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform float uEnergy;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vLocalPosition;

  void main() {
    vec3 viewDirection = normalize(vViewPosition);
    float fresnel = pow(1.0 - max(dot(vNormal, viewDirection), 0.0), 2.4);
    float bands = sin((vLocalPosition.y + vLocalPosition.x * 0.28) * 13.0 - uTime * 1.35);
    float scan = smoothstep(0.72, 1.0, bands);
    float pulse = 0.5 + 0.5 * sin(uTime * 1.8);
    vec3 base = mix(uColorA, uColorB, vLocalPosition.y * 0.34 + 0.5);
    vec3 color = base * (0.38 + fresnel * 1.7);
    color += uColorA * scan * (0.12 + pulse * 0.18) * uEnergy;
    float alpha = 0.2 + fresnel * 0.72 + scan * 0.08;

    gl_FragColor = vec4(color, alpha);
  }
`;

type MotionRefs = {
  scroll: MutableRefObject<number>;
  pointer: MutableRefObject<{ x: number; y: number }>;
  motion: MutableRefObject<boolean>;
};

function pseudoRandom(index: number, seed: number) {
  const value = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleField({ count = 850 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 4 + pseudoRandom(index, 1) * 12;
      const angle = pseudoRandom(index, 2) * Math.PI * 2;
      const spread = (pseudoRandom(index, 3) - 0.5) * 10;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = spread;
      values[index * 3 + 2] = Math.sin(angle) * radius - 4;
    }

    return values;
  }, [count]);

  useFrame(({ clock }, delta) => {
    points.current.rotation.y += delta * 0.012;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.08) * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#8fa3ff"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.62}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function OrbitalDust() {
  const points = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const values = new Float32Array(180 * 3);

    for (let index = 0; index < 180; index += 1) {
      const angle = (index / 180) * Math.PI * 2;
      const radius = 1.7 + Math.sin(index * 1.7) * 0.34;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = Math.sin(index * 2.15) * 0.62;
      values[index * 3 + 2] = Math.sin(angle) * radius;
    }

    return values;
  }, []);

  useFrame((_, delta) => {
    points.current.rotation.y -= delta * 0.08;
    points.current.rotation.z += delta * 0.025;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#d2ff4d"
        size={0.035}
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Core({ scroll, pointer, motion }: MotionRefs) {
  const root = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Mesh>(null!);
  const ringOne = useRef<THREE.Mesh>(null!);
  const ringTwo = useRef<THREE.Mesh>(null!);
  const shader = useRef<THREE.ShaderMaterial>(null!);
  const accent = useRef(new THREE.Color("#c8ff3d"));
  const violet = useRef(new THREE.Color("#7357ff"));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uEnergy: { value: 1 },
      uColorA: { value: new THREE.Color("#c8ff3d") },
      uColorB: { value: new THREE.Color("#6875ff") },
    }),
    [],
  );

  useFrame(({ clock }, delta) => {
    const animated = motion.current;
    const progress = scroll.current;
    const time = animated ? clock.elapsedTime : 1.5;
    const targetHue = (0.22 + progress * 0.52) % 1;

    accent.current.setHSL(targetHue, 0.9, 0.62);
    violet.current.setHSL((targetHue + 0.19) % 1, 0.82, 0.63);
    shader.current.uniforms.uTime.value = time;
    shader.current.uniforms.uEnergy.value = animated ? 1 + Math.sin(time * 0.8) * 0.15 : 0.5;
    shader.current.uniforms.uColorA.value.lerp(accent.current, delta * 1.8);
    shader.current.uniforms.uColorB.value.lerp(violet.current, delta * 1.8);

    const targetRotationX = pointer.current.y * 0.24 + progress * Math.PI * 1.5;
    const targetRotationY = pointer.current.x * 0.32 + progress * Math.PI * 4.2;
    root.current.rotation.x = THREE.MathUtils.damp(
      root.current.rotation.x,
      targetRotationX,
      animated ? 2.6 : 8,
      delta,
    );
    root.current.rotation.y = THREE.MathUtils.damp(
      root.current.rotation.y,
      targetRotationY,
      animated ? 2.2 : 8,
      delta,
    );
    root.current.rotation.z = Math.sin(time * 0.24) * 0.16;

    if (animated) {
      inner.current.rotation.x -= delta * 0.32;
      inner.current.rotation.y += delta * 0.46;
      ringOne.current.rotation.z += delta * 0.2;
      ringTwo.current.rotation.x -= delta * 0.17;
    }
  });

  return (
    <group ref={root}>
      <mesh>
        <icosahedronGeometry args={[1.32, 4]} />
        <shaderMaterial
          ref={shader}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh scale={1.015}>
        <icosahedronGeometry args={[1.32, 2]} />
        <meshBasicMaterial
          color="#baff32"
          wireframe
          transparent
          opacity={0.32}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh ref={inner} scale={0.48}>
        <octahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#0d1021"
          emissive="#755cff"
          emissiveIntensity={3.4}
          metalness={0.72}
          roughness={0.12}
        />
      </mesh>

      <mesh ref={ringOne} rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[1.82, 0.013, 8, 180]} />
        <meshBasicMaterial
          color="#c8ff3d"
          transparent
          opacity={0.8}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh ref={ringTwo} rotation={[0.45, Math.PI / 2, 0.45]}>
        <torusGeometry args={[2.12, 0.008, 8, 180]} />
        <meshBasicMaterial
          color="#7d68ff"
          transparent
          opacity={0.52}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh rotation={[0.2, 0.5, 0]}>
        <torusKnotGeometry args={[1.58, 0.009, 200, 6, 2, 3]} />
        <meshBasicMaterial
          color="#66d9ff"
          transparent
          opacity={0.46}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <OrbitalDust />
    </group>
  );
}

function FloatingModules({ motion }: Pick<MotionRefs, "motion">) {
  const group = useRef<THREE.Group>(null!);
  const modules = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => {
        const angle = (index / 14) * Math.PI * 2;
        const radius = 2.7 + (index % 4) * 0.44;

        return {
          position: [
            Math.cos(angle) * radius,
            Math.sin(index * 2.13) * 1.8,
            Math.sin(angle) * radius,
          ] as [number, number, number],
          rotation: [index * 0.28, angle, index * 0.17] as [number, number, number],
          scale: 0.08 + (index % 3) * 0.035,
        };
      }),
    [],
  );

  useFrame(({ clock }, delta) => {
    if (!motion.current) return;
    group.current.rotation.y -= delta * 0.045;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.16) * 0.08;
  });

  return (
    <group ref={group}>
      {modules.map((module, index) => (
        <mesh
          key={index}
          position={module.position}
          rotation={module.rotation}
          scale={module.scale}
        >
          {index % 2 === 0 ? <octahedronGeometry args={[1, 0]} /> : <boxGeometry />}
          <meshBasicMaterial
            color={index % 3 === 0 ? "#c8ff3d" : "#7182ff"}
            wireframe
            transparent
            opacity={0.72}
          />
        </mesh>
      ))}
    </group>
  );
}

function GroundGrid() {
  const grid = useRef<THREE.GridHelper>(null!);

  useEffect(() => {
    const materials = Array.isArray(grid.current.material)
      ? grid.current.material
      : [grid.current.material];

    materials.forEach((material) => {
      material.transparent = true;
      material.opacity = 0.1;
      material.depthWrite = false;
    });
  }, []);

  return (
    <gridHelper
      ref={grid}
      args={[32, 40, "#7182ff", "#27283c"]}
      position={[0, -3.4, -2]}
    />
  );
}

function World({ scroll, pointer, motion }: MotionRefs) {
  const world = useRef<THREE.Group>(null!);
  const lastScroll = useRef(0);
  const scrollVelocity = useRef(0);

  useFrame(({ camera, clock, viewport }, delta) => {
    const progress = scroll.current;
    const isCompact = viewport.width < 7;
    const animated = motion.current;

    scrollVelocity.current = THREE.MathUtils.damp(
      scrollVelocity.current,
      Math.abs(progress - lastScroll.current) / Math.max(delta, 0.001),
      4,
      delta,
    );
    lastScroll.current = progress;

    const desktopX = Math.cos(progress * Math.PI * 4.5) * 2.15;
    const targetX = isCompact ? Math.cos(progress * Math.PI * 3) * 0.45 : desktopX;
    const targetY = isCompact
      ? -1.25 + Math.sin(progress * Math.PI * 5) * 0.35
      : Math.sin(progress * Math.PI * 4) * 0.62;
    const baseScale = isCompact ? 0.72 : 1;
    const velocityScale = animated ? Math.min(scrollVelocity.current * 0.022, 0.18) : 0;

    world.current.position.x = THREE.MathUtils.damp(
      world.current.position.x,
      targetX,
      2.4,
      delta,
    );
    world.current.position.y = THREE.MathUtils.damp(
      world.current.position.y,
      targetY,
      2.4,
      delta,
    );
    const scale = THREE.MathUtils.damp(
      world.current.scale.x,
      baseScale + velocityScale,
      3.5,
      delta,
    );
    world.current.scale.setScalar(scale);
    world.current.rotation.z = Math.sin(progress * Math.PI * 3) * 0.09;

    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      pointer.current.x * (isCompact ? 0.08 : 0.28),
      3,
      delta,
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      pointer.current.y * (isCompact ? 0.06 : 0.2),
      3,
      delta,
    );
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      7.6 + Math.sin(progress * Math.PI * 2) * 0.45,
      2.4,
      delta,
    );
    camera.lookAt(0, 0, 0);

    if (!animated) {
      world.current.rotation.y = 0.35;
    } else {
      world.current.rotation.y +=
        delta * (0.025 + Math.min(scrollVelocity.current * 0.006, 0.16));
      world.current.position.z = Math.sin(clock.elapsedTime * 0.34) * 0.12;
    }
  });

  return (
    <>
      <fog attach="fog" args={["#05050a", 8, 23]} />
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 4, 5]} color="#c8ff3d" intensity={18} distance={12} />
      <pointLight position={[-4, -2, 3]} color="#6f5cff" intensity={22} distance={12} />
      <pointLight position={[0, 3, -4]} color="#52cfff" intensity={16} distance={10} />

      <ParticleField />
      <group ref={world}>
        <Core scroll={scroll} pointer={pointer} motion={motion} />
        <FloatingModules motion={motion} />
      </group>
      <GroundGrid />
    </>
  );
}

export default function SceneCanvas() {
  const scroll = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const motion = useRef(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateScroll = () => {
      const maximum = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      scroll.current = Math.min(window.scrollY / maximum, 1);
    };

    const updatePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const updateMotionPreference = () => {
      motion.current = !reducedMotion.matches;
    };

    updateScroll();
    updateMotionPreference();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    reducedMotion.addEventListener("change", updateMotionPreference);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      reducedMotion.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7.6], fov: 42, near: 0.1, far: 50 }}
      dpr={[1, 1.75]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.12;
      }}
    >
      <World scroll={scroll} pointer={pointer} motion={motion} />
    </Canvas>
  );
}
