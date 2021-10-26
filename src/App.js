import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import LinkList, { FormatLink } from "./components/ListFormater";

const links = [
  {
    href: "https://www.linkedin.com/in/maicol-ospina-bedoya/",
    subtitle: "Working with you",
    title: "LinkedIn",
  },
  {
    href: "https://github.com/MigrantCaravan",
    subtitle: "Coding",
    title: "GitHub",
  },
  {
    href: "https://twitter.com/migrantxcaravan",
    subtitle: "For better or worse",
    title: "Twitter",
  },
  {
    href: "https://www.stream-cred.com/",
    subtitle: "Free beats",
    title: "Stream-Cred",
  },
];

function Model(props) {
  const model = useGLTF(props.path);
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.001;
    ref.current.rotation.z += 0.001;
  });

  return <primitive ref={ref} object={model.scene} {...props} />;
}

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Wrapper>
        <TextBackground>
          <Saludo>Hola, salut, hi!</Saludo>
          <Intro>
            <h1>
              I'm <Pregunta title="pronounced MICHAEL">Maicol Ospina</Pregunta>{" "}
              – a&nbsp; web developer, music producer, biologist, coffee drinker
              and overall enthusiast for tech.
            </h1>
            I want to help to make the
            <Pregunta title="Please check my LinkedIn">&nbsp; web</Pregunta>
            &nbsp; an awesome place. Also&nbsp;in my free time, I do other
            things that might interest you:
          </Intro>
          <Lista>
            <LinkList>
              {links.map((link) => (
                <FormatLink key={link.href} {...link} />
              ))}
            </LinkList>
          </Lista>
        </TextBackground>
      </Wrapper>
      <Canvas
        camera={{ position: [0, 1, 14], fov: 50 }}
        performance={{ min: 0.1 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.3} position={[5, 25, 20]} />
        <color attach="background" args={["green"]} />
        <fog attach="fog" args={["#101010", 10, 50]} />
        {/* <axesHelper args={[5]}></axesHelper> */}
        <Suspense fallback={null}>
          <Environment preset="apartment"></Environment>
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Cubone.glb"
            scale={new Array(3).fill(3)}
            position={[0, -4, 1]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Cassette.glb"
            scale={new Array(3).fill(0.04)}
            position={[0, 4, 0]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Effects_Pedal.glb"
            scale={new Array(3).fill(10)}
            position={[0, 0, -4]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Microscope.glb"
            scale={new Array(3).fill(2)}
            position={[0, 0, 4]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Bulbasaur.glb"
            scale={new Array(3).fill(1.8)}
            position={[-4, 0, 0]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Videogame.glb"
            scale={new Array(3).fill(0.2)}
            position={[4, 0, 0]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Acoustic_guitar.glb"
            scale={new Array(3).fill(0.15)}
            position={[8, 0, 0]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Guitar_Amp.glb"
            scale={new Array(3).fill(0.005)}
            position={[-8, 0, 0]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Keyboard.glb"
            scale={new Array(3).fill(0.007)}
            position={[0, 0, -8]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Laptop.glb"
            scale={new Array(3).fill(4)}
            position={[8, -8, 0]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/AVOCADO.glb"
            scale={new Array(3).fill(4)}
            position={[-8, -4, 0]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Model
            path="/Pot.glb"
            scale={new Array(3).fill(0.2)}
            position={[8, 4, 0]}
          />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 5%;
  top: 15%;
`;

const TextBackground = styled.div`
  height: 800px;
  width: 700px;
  color: white;
  font-size: 15px;
  /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
  /* background-color: blue; */
  /* opacity: 0.5; */
`;

const Saludo = styled.p`
  background: red;
  color: whitesmoke;
  padding: 0.5em 0.75em;
  font-weight: 400;
  display: inline-flex;
  text-transform: uppercase;
  font-size: 1em;
  border-radius: 2px;
  letter-spacing: 0.1em;
`;

const Intro = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.1;
  letter-spacing: -0.05em;
  /* overflow-x: hidden; */
  will-change: scroll-position;
  font-size: 1.5em;
  margin: 5vmin 0;
`;

const Pregunta = styled.strong`
  cursor: help;
  color: red;
`;

const Lista = styled.div`
  margin: 1vmin 0;
  box-shadow: inset -6px 0 0 0 red;
  background: var(--fg);
  color: var(--bg);
  display: inline-flex;
  padding: 0.5em 0.75em;
`;

export default App;
