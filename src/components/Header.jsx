import { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Typewriter from 'typewriter-effect';

import ContainerCard from './ContainerCard';

function Header() {
    const [loading, setLoading] = useState(true)
    const [finish, setFinish] = useState(false)

    const firstname = 'Romain'

    useEffect(() => {
        setTimeout(() => setLoading(false), 1700)
    }, [])

    return (
        loading ?
            <div className='Typewriter cursor'>|</div>
            :
            <Fragment>
                <Typewriter
                    options={{
                        autoStart: true,
                        delay: 40
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('<span>Bonjour <span class="firstname">' + firstname + '</span>, </span>')
                            .pauseFor(650)
                            .typeString('<span>Alexia et Rémi souhaite t\'inviter à célébrer leur union <span class="firstname"> le 22 octobre 2022 !! </span>')
                            .callFunction(() => setFinish(true))
                            .start()
                    }}
                />
                {finish && <ContainerCard />}
            </Fragment>
    )
}

export default Header;