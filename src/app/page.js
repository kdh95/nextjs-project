import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <img src="/hello.png"></img>
      // public 폴더 밑에 위치시키면 사용가능하다.
    </>
  );
}
