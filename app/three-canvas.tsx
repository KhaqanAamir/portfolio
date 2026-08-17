"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";

const SceneCanvas = dynamic(() => import("./scene-canvas"), {
  ssr: false,
  loading: () => (
    <div className={styles.sceneLoader}>
      <span />
      Initializing 3D world
    </div>
  ),
});

export default function ThreeCanvas() {
  return (
    <div className={styles.sceneLayer} aria-hidden="true">
      <SceneCanvas />
    </div>
  );
}
