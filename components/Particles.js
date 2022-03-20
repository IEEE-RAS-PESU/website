import Particles from 'react-tsparticles'

const ParticlesWrapper = () => {
    const particlesInit = (main) => {
      console.log(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // fullScreen: {
          //   enable: false,
          //   zIndex: -1
          // },
          // "interactivity": {
          //   "events": {
          //     "onClick": {
          //       "enable": true,
          //       "mode": "absorber"
          //     },
          //     "onHover": {
          //       "enable": true,
          //       "mode": "repulse"
          //     }
          //   },
          //   "modes": {
          //     "bubble": {
          //       "distance": 400,
          //       "duration": 2,
          //       "opacity": 0.8,
          //       "size": 40
          //     },
          //     "grab": {
          //       "distance": 400
          //     },
          //     "absorbers": {
          //       "color": {
          //         "value": "#ff0000"
          //       },
          //       "draggable": false,
          //       "opacity": 1,
          //       "destroy": true,
          //       "orbits": false,
          //       "size": {
          //         "random": {
          //           "enable": true,
          //           "minimumValue": 5
          //         },
          //         "value": {
          //           "min": 5,
          //           "max": 10
          //         },
          //         "density": 5,
          //         "limit": {
          //           "radius": 50,
          //           "mass": 0
          //         }
          //       }
          //     }
          //   }
          // },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "links": {
              "color": {
                "value": "#ffffff"
              },
              "distance": 150,
              "enable": true,
              "opacity": 0.4
            },
            "move": {
              "attract": {
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "enable": true,
              "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              }
            },
            "number": {
              "value": 15
            },
            "opacity": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 0.1,
                "max": 0.5
              },
              "animation": {
                "enable": true,
                "speed": 3,
                "minimumValue": 0.1
              }
            },
            "size": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 1,
                "max": 50
              },
              "animation": {
                "speed": 20,
                "minimumValue": 0.1
              }
            }
          },
          // "absorbers": {
          //   "color": {
          //     "value": "#000000"
          //   },
          //   "draggable": false,
          //   "opacity": 1,
          //   "destroy": true,
          //   "orbits": false,
          //   "size": {
          //     "random": {
          //       "enable": true,
          //       "minimumValue": 5
          //     },
          //     "value": {
          //       "min": 5,
          //       "max": 10
          //     },
          //     "density": 5,
          //     "limit": {
          //       "radius": 100,
          //       "mass": 0
          //     }
          //   },
          //   "position": {
          //     "x": 50,
          //     "y": 50
          //   }
          // }
        }}
      />
    );
  };

export default ParticlesWrapper