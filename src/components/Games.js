import '../style.css';
import Header from './Header';

const Games = () => {
    return (
        <>
            <Header />
            <section>

                <div className='row'>
                    <div className='title-col'>
                        <h1 className='title'>Games</h1>
                        <p className='title'>Choose your game.</p>

                    </div>
                    <div className='col'>
                        <div className='card card1'>
                            <h5>8-bit Snake</h5>
                            <p>
                                A retro style game in which the player maneuvers a growing line, representing the body moving through space. Apples randomly appear on the gameboard and,
                                when consumed, the body grows to eventually become the primary obstacle.
                            </p>
                            <a href='https://zesty-centaur-003438.netlify.app/'>
                                <button type='button'>Play</button>
                            </a>

                        </div>
                        <div className='card card2'>
                            <h5>Connect Four</h5>
                            <p>
                                A two-player connection rack game, in which the players choose a color and then take turns dropping colored tokens into a six-row, seven-column vertically suspended grid.
                            </p>
                            <a href=''>
                                <button disabled={true} type='button'>Under Construction</button>
                            </a>
                        </div>
                        <div className='card card3'>
                            <h5>Pixel Paint</h5>
                            <p>
                                Anything but a classic coloring book. The point of the game is for you to put your mind at ease, follow the numbers and fill every last pixel with a corresponding color.
                            </p>
                            <a href=''>
                                <button disabled={true} type='button'>Under Construction</button>
                            </a>
                        </div>
                        <div className='card card4'>
                            <h5>Alien Attack</h5>
                            <p>
                                Defend Earth from an alien invasion by whacking aliens with a hammer as they pop up out of holes in the ground.
                            </p>
                            <a href=''>
                                <button disabled={true} type='button'>Under Construction</button>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
};

export default Games;