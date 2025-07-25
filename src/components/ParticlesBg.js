import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

function ParticlesBg() {
    const particlesInit = async(main) => {
        await loadFull(main);
    };

    return ( <
        Particles id = "tsparticles"
        init = { particlesInit }
        options = {
            {
                background: {
                    color: { value: "#000" },
                },
                fullScreen: { enable: true, zIndex: -1 },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                    },
                },
                particles: {
                    color: { value: "#ffffff" },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                    collisions: { enable: true },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 50,
                    },
                    opacity: { value: 0.5 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 5 } },
                },
                detectRetina: true,
            }
        }
        />
    );
}

export default ParticlesBg;