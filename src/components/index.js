import React from 'react';
import Particles from 'react-particles-js';
import Navbar from './Navbar';
import Header from './Header';
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  particlesStyle: {
    position: "absolute",
    opacity: "0.4"
  }
})

const Home = () => {

  const classes = useStyles()

  return (
    <div>
      <Navbar />
      <Header />
      <Particles canvasClassName={classes.particlesStyle}
        params={{
          particles: {
            number: {
                value: 8,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                speed: 1,
                out_mode: "out"
            },
            shape: {
                type: [
                    "image"
                ],
                image: [
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png",
                        height: 20,
                        width: 20
                    }
                ]
            },
            color: {
                value: "#CCC"
            },
            size: {
                value: 30,
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 10,
                    sync: false
                }
            }
        },
        retina_detect: false
        }} />
    </div>
  )
}

export default Home;
