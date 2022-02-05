function CardRight({data, className}) {
    return (
        <div className={'card card-right ' + className}>
            <div className='card-text'>
                <p className='card-text-title'>{data.time} - {data.title}</p>
                <a href={data.link} target="_blank">{data.place}</a>
                <p>{data.adress}</p>
            </div>

            <div className='card-icon card-icon-right'>
                <img src={data.icon} />
            </div>
        </div>
    )
}

export default CardRight;