import CardLeft from "./CardLeft";
import CardRight from "./CardRight";
import Response from "./Response";

import { cardData } from "../data/cardData";
import { Fragment } from "react/cjs/react.production.min";

function ContainerCard() {
    const meal = JSON.parse(localStorage.getItem("guest")).meal

    return (
        <Fragment>
            <div className="card-container">
                {meal ?
                    <Fragment>
                        <CardLeft data={cardData[0]} />
                        <CardRight data={cardData[1]} className='two' />
                        <CardLeft data={cardData[2]} className='three' />
                        <CardRight data={cardData[3]} className='four' />
                        <CardLeft data={cardData[4]} className='five' />
                    </Fragment>
                    :
                    <Fragment>
                        <CardLeft data={cardData[1]} />
                        <CardRight data={cardData[2]} className='two' />
                        <CardLeft data={cardData[3]} className='three' />
                    </Fragment>
                }
            </div>


            <Response />
        </Fragment>
    )
}

export default ContainerCard;