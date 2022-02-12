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
                        <CardRight data={cardData[1]}/>
                        <CardLeft data={cardData[2]}/>
                        <CardRight data={cardData[3]}/>
                        <CardLeft data={cardData[4]}/>
                    </Fragment>
                    :
                    <Fragment>
                        <CardLeft data={cardData[1]} />
                        <CardRight data={cardData[2]}/>
                        <CardLeft data={cardData[3]}/>
                    </Fragment>
                }
            </div>


            <Response />
        </Fragment>
    )
}

export default ContainerCard;