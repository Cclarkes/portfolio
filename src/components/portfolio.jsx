import React from 'react';
import '../styles/portfolio.css';
import '../media/overflow.jpg';

export default function Portfolio() {
    return(
        <div className='portfolio-container'>
            <p className='projects-header'>
                Projects
            </p>
            <div className='projects'>

                <div className="project">
                    <img className='proj-image' src='https://picsum.photos/200' alt='project screenshot' />
                    <p className='proj-title'>
                        Placeholder<br/>
                        <div className='icons'>

                        </div>
                    </p>
                </div>

                <div className="project">
                    <img className='proj-image' src='https://picsum.photos/200' alt='project screenshot' />
                    <p className='proj-title'>
                        Placeholder<br/>
                        <div className='icons'>

                        </div>
                    </p>
                </div>

                <div className="project">
                    <img className='proj-image' src='https://picsum.photos/200' alt='project screenshot' />
                    <p className='proj-title'>
                        Placeholder<br/>
                        <div className='icons'>

                        </div>
                    </p>
                </div>

                <div className="project">
                    <img className='proj-image' src='https://picsum.photos/200' alt='project screenshot' />
                    <p className='proj-title'>
                        Placeholder<br/>
                        <div className='icons'>

                        </div>
                    </p>
                </div>

                <div className="project">
                    <img className='proj-image' src='https://picsum.photos/200' alt='project screenshot' />
                    <p className='proj-title'>
                        Placeholder<br/>
                        <div className='icons'>

                        </div>
                    </p>
                </div>

                <div className="project">
                    <img className='proj-image' src='https://picsum.photos/200' alt='project screenshot' />
                    <p className='proj-title'>
                        Placeholder<br/>
                        <div className='icons'>

                        </div>
                    </p>
                </div>

            </div>

        </div>
    )
}