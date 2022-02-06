import surprise from '../icons/surprise.png'

function NoGuest () {
    return (
        <div className='guest'>
            <p>Es-tu sûr que l'on se connait ?</p>
            <img src={surprise} />
        </div>
    )
}

export default NoGuest