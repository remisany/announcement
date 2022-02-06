import { useState } from "react";

//import components
import Modal from "./Modal";
import Header from "./Header";

function Main() {
    const [isExist, setIsExist] = useState(false)

    return (
        !isExist ?
            <Modal setIsExist={setIsExist} />
            :
            <Header />
    )
}

export default Main;