function CardLeft({data, className}) {
    return (
        <div className={'card card-left ' + className}>
            <div className='card-icon card-icon-left'>
                <img src={data.icon} />
            </div>

            <div className='card-text'>
                <p className='card-text-title'>{data.time} - {data.title}</p>
                <a href={data.link} target="_blank">{data.place}</a>
                <p>{data.adress}</p>
            </div>
        </div>
    )
}

export default CardLeft;