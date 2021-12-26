import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import CV from "../components/cv"
import Skills from "../components/skills"

const Cara = () => (
  <Layout>
    <Parallax pages={7}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      <About offset={3} factor={1} />
      <Skills offset={4} factor={1}/>
      <CV offset={5} factor={1} />
      <Contact offset={6} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
