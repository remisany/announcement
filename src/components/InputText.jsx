import { useState } from "react"

import exclamation from '../icons/exclamation.svg'

function InputText({ placeholder, meta, input, ...rest }) {
    const [label, setLabel] = useState(false)

    return (
        <div className='modal-content-form-container'>
            <div className='modal-content-form'>
                {label && <label>{placeholder}</label>}
                <input
                    {...rest}
                    {...input}
                    onFocus={() => setLabel(true)}
                    onBlur={(event) => {
                        input.onBlur(event)
                        return !event.target.value && setLabel(false)
                    }}
                    placeholder={placeholder}
                />
            </div>
            {meta.touched && meta.error &&
                <div className='modal-content-form-error'>
                    <img src={exclamation}></img>
                    <p>{meta.error}</p>
                </div>
            }
        </div>
    )
}

export default InputText