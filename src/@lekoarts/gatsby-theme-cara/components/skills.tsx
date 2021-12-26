import * as React from "react"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import SkillsMDX from "../sections/skills"
import Image from "./common/image"

const icon_style = {
    padding: '10px', 
    width: '80px', 
    height: '80px'
}

const Skills = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <Svg icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <SkillsMDX />
      </Inner>
      <div className="skillset__languages">
        <link href="https://languages.abranhe.com/logos.css" rel="stylesheet"/>
          <table>
              <tr>
                <td><i className="programming lang-cpp" style={icon_style}></i></td>
                <td><i className="programming lang-c" style={icon_style}></i></td>
                <td><i className="programming lang-python" style={icon_style}></i></td>
                <td><i className="programming lang-javascript" style={icon_style}></i></td>
                <td><i className="programming lang-html" style={icon_style}></i></td>
                <td><i className="programming lang-css" style={icon_style}></i></td>
              </tr>
              <tr>
                <td><i><Image src="bash.png" style={icon_style} /></i></td>
                <td><i><Image src="mongodb.png" style={icon_style} /></i></td>
                <td><i><Image src="oracle.png" style={icon_style} /></i></td>
                <td><i><Image src="redis.png" style={icon_style} /></i></td>
                <td><i><Image src="mysql.png" style={icon_style} /></i></td>
                <td><i><Image src="postgresql.png" style={icon_style} /></i></td>
              </tr>
              <tr>
                <td><i><Image src="amazon.png" style={icon_style} /></i></td>
                <td><i><Image src="bitbucket.png" style={icon_style} /></i></td>
                <td><i><Image src="docker.png" style={icon_style} /></i></td>
                <td><i><Image src="git.png" style={icon_style} /></i></td>
                <td><i><Image src="github.png" style={icon_style} /></i></td>
                <td><i><Image src="gitlab.png" style={icon_style} /></i></td>
              </tr>
              <tr>
                <td><i><Image src="boostrap.png" style={icon_style} /></i></td>
                <td><i><Image src="django.png" style={icon_style} /></i></td>
                <td><i><Image src="flask.png" style={icon_style} /></i></td>
                <td><i><Image src="jquery.png" style={icon_style} /></i></td>
                <td><i><Image src="nodejs.png" style={icon_style} /></i></td>
                <td><i><Image src="react.png" style={icon_style} /></i></td>
              </tr>
              <tr>
                <td><i><Image src="atom.png" style={icon_style} /></i></td>
                <td><i><Image src="clion.png" style={icon_style} /></i></td>
                <td><i><Image src="eclipse.png" style={icon_style} /></i></td>
                <td><i><Image src="pycharm.png" style={icon_style} /></i></td>
                <td><i><Image src="vscode.png" style={icon_style} /></i></td>
              </tr>
          </table>
      </div>
    </Content>
  </div>
)

export default Skills
