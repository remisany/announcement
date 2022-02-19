import Reveal from "react-awesome-reveal";

function CardRight({ data }) {
    return (
        <Reveal keyframes="appearanceRight" duration={2000}>
            <div className='card card-right'>
                <div className='card-text'>
                    <p className='card-text-title'>{data.time} - {data.title}</p>
                    <a href={data.link} target="_blank" rel="noopener noreferrer">{data.place}</a>
                    <p>{data.adress}</p>
                </div>

                <div className='card-icon card-icon-right'>
                    <img src={data.icon} alt={data.alt}/>
                </div>
            </div>
        </Reveal>
    )
}

export default CardRight;