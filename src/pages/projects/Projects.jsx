import './Projects.css';
import './Projects.mobile.css';
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer';
import StickyNote1 from '../../assets/images/sticky-note1.png';
import StickyNote2 from '../../assets/images/sticky-note2.png';
import StickyNote3 from '../../assets/images/sticky-note3.png';
import StickyNote4 from '../../assets/images/sticky-note4.png';
// import StickyNote5 from '../../assets/images/sticky-note5.png';
import StickyNote6 from '../../assets/images/sticky-note6.png';
// import StickyNote7 from '../../assets/images/sticky-note7.png';
// import StickyNote8 from '../../assets/images/sticky-note8.png';
import Sparkles1 from '../../assets/images/corner-sparkle1.png';
import Sparkles2 from '../../assets/images/corner-sparkle2.png';

import { useRef, useState, useEffect } from 'react';


const useFadeInOnView = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return [ref, visible];
};

const Projects = ({ setLang, lang }) => {
    const [note1Ref, note1Visible] = useFadeInOnView();
    const [note2Ref, note2Visible] = useFadeInOnView();
    const [note3Ref, note3Visible] = useFadeInOnView();
    const [note4Ref, note4Visible] = useFadeInOnView();
    const [note5Ref, note5Visible] = useFadeInOnView();

    return (
        <div className="projects-container">
            <div className="header-sticky">
                <NavBar section='project-notes' setLang={setLang} lang={lang} />
            </div>
            <div className="projects-header">
            </div>
            <div className="project-notes">
                <div className="project-notes-row">
                    <a href="https://github.com/stelladeloreyy/neural-network-scratch" target="_blank" rel="noopener noreferrer">
                        <div
                            className={`sticky-note sticky-note-overlay${note1Visible ? ' fade-in-up' : ''}`}
                            ref={note1Ref}
                        >
                            <span className="sticky-note-text note-1">
                                {/* ...existing code... */}
                                {lang === "fr" ? (
                                    <div className="header">
                                        <h1>R</h1><h2>éseau </h2>
                                        <h2>Neuronal</h2> 
                                    </div>
                                ): (
                                    <div className="header">
                                        <h1>N</h1><h2>eural </h2>
                                        <h2>Network</h2> 
                                    </div>
                                    )
                                }
                                {lang === "fr" ? (
                                    <div className="bullet-points">
                                       <p>♡ <b>Classification des images</b> à l'aide d'un réseau neuronal à 2 couches</p>
                                        <p>♡ Utilise ReLu & Softmax comme fonctions d'activation</p>
                                        <p>♡ Créé avec <b>Python</b> en utilisant <b>NumPy, Pandas</b> & <b>MatPlotLib</b></p>
                                    </div>
                                ) : (
                                    <div className="bullet-points">
                                        <p>♡ <b>Image classification</b> using a 2-layer Neural Network</p>
                                        <p>♡ Uses ReLu & Softmax as activation functions</p>
                                        <p>♡ Created with <b>Python</b> using <b>NumPy, Pandas</b> & MatPlotLib</p>
                                    </div>
                                )}
                            </span>
                            <img src={StickyNote1} alt="Sticky Note" className="sticky-img" onLoad={e => e.target.classList.add('loaded')} />
                            <img src={Sparkles1} className="show-grow1 sticky-img" alt="Sticky Note" onLoad={e => e.target.classList.add('loaded')} />
                            <img src={Sparkles2} className="show-grow2 sticky-img" alt="Sticky Note" onLoad={e => e.target.classList.add('loaded')} />
                        </div>
                    </a>
                    <a href="https://github.com/stelladeloreyy/doodles" target="_blank" rel="noopener noreferrer">
                        <div
                            className={`sticky-note${note2Visible ? ' fade-in-up' : ''}`}
                            ref={note2Ref}
                        >
                            <span className="sticky-note-text note-2">
                                <div className="header">
                                    <h1>D</h1><h2>oodle </h2>
                                    <h2>Canvas</h2> 
                                </div>
                                {lang === "fr" ? (
                                    <div className="bullet-points">
                                       <p>♡ Les utilisateurs peuvent dessiner et enregistrer des œuvres d'art, puis admirer une galerie publique stockée dans une base de données <b>Postgres</b></p>
                                        <p>♡ Utilise l'algorithme Chaikin pour les lignes tracées</p>
                                        <p>♡ Créé avec <b>Typescript, NodeJS, Express</b> & <b>Postgres</b></p>
                                    </div>
                                ) : (
                                    <div className="bullet-points">
                                        <p>♡ Lets users draw & save artwork, then check out a public gallery stored in <b>Postgres database</b></p>
                                        <p>♡ Uses Chaikin's Algorithm for smoothing lines drawn</p>
                                        <p>♡ Created with <b>Typescript, NodeJS, Express</b> & <b>Postgres</b></p>
                                    </div>
                                )}
                            </span>
                            <img src={StickyNote2} alt="Sticky Note" className="sticky-img" onLoad={e => e.target.classList.add('loaded')} />
                            <img src={Sparkles1} className="show-grow1 sticky-img" alt="Sticky Note" onLoad={e => e.target.classList.add('loaded')} />
                            <img src={Sparkles2} className="show-grow2 sticky-img" alt="Sticky Note" onLoad={e => e.target.classList.add('loaded')} />
                        </div>
                    </a>
                    <a href="https://github.com/stelladeloreyy/personal-website" target="_blank" rel="noopener noreferrer">
                        <div
                            className={`sticky-note${note3Visible ? ' fade-in-up' : ''}`}
                            ref={note3Ref}
                        >
                            <span className="sticky-note-text note-3">
                                {lang === "fr" ? (
                                    <div className="header">
                                        <h1>S</h1><h2>ite </h2>
                                        <h2>Portefeuille</h2> 
                                    </div>
                                ): (
                                    <div className="header">
                                        <h1>P</h1><h2>orfolio </h2>
                                        <h2>Website</h2> 
                                    </div>
                                    )
                                }
                                {lang === "fr" ? (
                                    <div className="bullet-points">
                                       <p>♡ Le site que vous consultez maintenant!</p>
                                        <p>♡ Conçu en <b>Figma</b>, tout est dessiné par moi-même</p>
                                        <p>♡ Créé avec <b>Javascript, React, HTML</b> & <b>CSS</b></p>
                                    </div>
                                ) : (
                                    <div className="bullet-points">
                                        <p>♡ The website you're looking at now!</p>
                                        <p>♡ Designed in <b>Figma</b>, everything drawn by yours truly</p>
                                        <p>♡ Created with <b>Javascript, React, HTML</b> & <b>CSS</b></p>
                                    </div>
                                )}
                            </span>
                            <img src={StickyNote6} alt="Sticky Note" className="sticky-img" onLoad={e => e.target.classList.add('loaded')} />
                            <img src={Sparkles1} className="show-grow1 sticky-img" alt="Sticky Note" onLoad={e => e.target.classList.add('loaded')} />
                            <img src={Sparkles2} className="show-grow2 sticky-img" alt="Sticky Note" onLoad={e => e.target.classList.add('loaded')} />
                        </div>
                    </a>
                </div>
                <div className="project-notes-row">
                    <a href="https://github.com/stelladeloreyy/biquadris" target="_blank" rel="noopener noreferrer">
                        <div
                            className={`sticky-note${note4Visible ? ' fade-in-up' : ''}`}
                            ref={note4Ref}
                        >
                            <span className="sticky-note-text note-4">
                                <div className="header">
                                    <h1>B</h1><h2>iquadris </h2>
                                </div>
                                {lang === "fr" ? (
                                    <div className="bullet-points">
                                    <p>♡ Jeu de blocs tombants à deux joueurs inspiré par Tetris</p>
                                        <p>♡ Exécuté sous forme de texte ou de graphique à l'aide de <b>X11</b></p>
                                        <p>♡ Créé avec <b>C++</b> en utilisant seulement la bibliothèque STD</p>
                                    </div>
                                ) : (
                                    <div className="bullet-points">
                                        <p>♡ Two-player falling-block game inspired by Tetris</p>
                                        <p>♡ Can be run as text or graphically using <b>X11</b></p>
                                        <p>♡ Created with <b>C++</b> using only STD library</p>
                                    </div>
                                )}
                            </span>
                            <img src={StickyNote3} alt="Sticky Note" />
                            <img src={Sparkles1} className="show-grow1" alt="Sticky Note" />
                            <img src={Sparkles2} className="show-grow2" alt="Sticky Note" />
                        </div>
                    </a>
                    <a href="https://github.com/stelladeloreyy/game-remakes" target="_blank" rel="noopener noreferrer">
                        <div
                            className={`sticky-note${note5Visible ? ' fade-in-up' : ''}`}
                            ref={note5Ref}
                        >
                            <span className="sticky-note-text note-5">
                                {lang === "fr" ? (
                                    <div className="header">
                                        <h1>R</h1><h2>emakes </h2>
                                        <h2>Rétro</h2> 
                                    </div>
                                ): (
                                    <div className="header">
                                        <h1>R</h1><h2>etro </h2>
                                        <h2>Remakes</h2> 
                                    </div>
                                    )
                                }
                                {lang === "fr" ? (
                                    <div className="bullet-points">
                                    <p>♡ Collection de remakes de jeux classiques: Space Invaders, Doodle Jump & Dungeon Crawler</p>
                                        <p>♡ Suit les principes de la<b>POO</b></p>
                                        <p>♡ Créé avec <b>Java</b>, plusieurs utilisant l'IDE de Processing</p>
                                    </div>
                                ) : (
                                    <div className="bullet-points">
                                        <p>♡ Collection of classic game remakes: Space Invaders, Doodle Jump & Dungeon Crawler</p>
                                        <p>♡ Follows <b>OOP</b> principles</p>
                                        <p>♡ Created with <b>Java</b>, several using the Processing IDE</p>
                                    </div>
                                )}
                            </span>
                            <img src={StickyNote4} alt="Sticky Note" />
                            <img src={Sparkles1} className="show-grow1" alt="Sticky Note" />
                            <img src={Sparkles2} className="show-grow2" alt="Sticky Note" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="footer">
                <Footer lang={lang} />
            </div>
        </div>
    );
};

export default Projects;