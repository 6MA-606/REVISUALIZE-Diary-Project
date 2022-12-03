// import { useState, useEffect } from "react";
import CornerBtn from '../components/CornerBtn';
import FilmSpin from '../components/FilmSpin';
import styles from './LandingPage.module.css';

export default function LandingPage() {
    return (
        <>
            <div className={ styles.filmArea }>
                <FilmSpin />
            </div>
            <CornerBtn
                id="projectRepo"
                href="https://github.com/6MA-606/REVISUALIZE-Diary-Project"
                target="_blank"
                bg="#fff"
                icon="Github"
                iconColor="#252525"
                iconSize="40"
            />
            <div className={ styles.container }>
                <img className={ styles.camera } src="./src/img/camera.png" alt="Camera" />
                <div className={ styles.landingText }>
                    <div>Welcome to my diary</div>
                    <div>"<span className={ styles.shutter }>Shutter!</span> and come with me."</div>
                </div>
                <div className={ styles.transitionBg }></div>
            </div>
        </>
    );
}