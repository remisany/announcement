import { Form, Field } from 'react-final-form'
import { useState } from 'react'

//import components
import InputText from './InputText'
import NoGuest from './NoGuest'

//import icons
import question from '../icons/question.png'

//import constants
import {guest, search} from '../constants/guests'
import {required, noSpecialCharacters} from '../constants/form'

function Modal({setIsExist}) {
    const [noExist, setNoExist] = useState(false)

    const submit = values => {
        const valuesToSubmit = {
            firstname: guest(values.firstname),
            lastname: guest(values.lastname)
        }

        const isExist = search(valuesToSubmit)

        if(isExist) {
            localStorage.setItem("guest", JSON.stringify(isExist))
            setIsExist(true)
        } else {
            setNoExist(true)
        }
    }

    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <div className='modal-content-title'>
                    <p>Qui es-tu ?</p>
                    <img src={question} />
                </div>
                <Form
                    onSubmit={submit}
                    render={({ handleSubmit, submitting, hasValidationErrors }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="firstname"
                                component={InputText}
                                placeholder="Prénom"
                                validate={value => required(value)}
                            />
                            <Field
                                name="lastname"
                                component={InputText}
                                placeholder="Nom"
                                validate={required}
                            />

                            <button type="submit" disabled={submitting, hasValidationErrors} className={hasValidationErrors ? 'button button-disabled' : 'button'}>On y va !</button>
                        </form>
                    )}
                />
                {noExist && <NoGuest />}
            </div>
        </div>
    )
}

export default Modal;