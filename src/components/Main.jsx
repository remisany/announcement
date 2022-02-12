import { Fragment, useEffect, useState } from "react";

//import components
import Modal from "./Modal";
import Header from "./Header";

function Main() {
    const [isExist, setIsExist] = useState(false)
    const [close, setClose] = useState(false)

    useEffect(() => {
        isExist && setTimeout(() => setClose(true), 1000)
    },[isExist])

    return (
        <Fragment>
            {!close && <Modal setIsExist={setIsExist} isExist={isExist}/>}
            <Header isExist={isExist}/>
        </Fragment>
    )
}

export default Main;