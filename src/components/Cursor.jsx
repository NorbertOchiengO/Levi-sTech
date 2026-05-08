import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    let mx = -100, my = -100, rx = -100, ry = -100;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (dot) {
        dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      }
      if (ring) {
        ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      }
      requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    tick();
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
