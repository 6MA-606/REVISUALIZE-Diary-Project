import styles from './FilmSpin.module.css';

export default function FilmSpin() {
    return (
        <div className={ styles.spinFilm }>
            <div className={ styles.spinFilmInner }>
                <div className={ styles.spinFilmFront }>
                    <img className={ styles.film } src="./src/img/polaroid_film.png" alt="polaroid_film" />
                </div>
                <div className={ styles.spinFilmBack }>
                    <img className={ styles.film } src="./src/img/polaroid_film_back.png" alt="polaroid_film" />
                </div>
            </div>
        </div>
    )
}