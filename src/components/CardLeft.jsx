import Reveal from "react-awesome-reveal";

function CardLeft({ data }) {
    return (
        <Reveal keyframes="appearanceLeft" duration={2000}>
            <div className='card card-left'>
                <div className='card-icon card-icon-left'>
                    <img src={data.icon} />
                </div>

                <div className='card-text'>
                    <p className='card-text-title'>{data.time} - {data.title}</p>
                    <a href={data.link} target="_blank">{data.place}</a>
                    <p>{data.adress}</p>
                </div>
            </div>
        </Reveal>
    )
}

export default CardLeft;