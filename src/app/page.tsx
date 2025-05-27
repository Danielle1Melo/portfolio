import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import TechStack from "@/components/techStack/TechStack";
import Projects from "@/components/project/Projects";
import Footer from "@/components/footer/Footer";
import Experience from "@/components/experience/Experience";

export default function Home() {
  return (
    <div className={styles.container}>
      < Navbar />
      <main>
        < Hero />
        < TechStack />
        < Experience />
        < Projects />
      </main>
      < Footer />
    </div>
  );
}
