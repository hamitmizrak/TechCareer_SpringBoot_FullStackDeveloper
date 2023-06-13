// react function
import React from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// FUNCTION => Props
function ResuabilityBlogInput(props) {

    //object destructing
    const { label, type, className, id, name, placeholder, isAutoFocus, isRequired, isInputOnChange, error,value} = props;

    // Hataları göster 
    const errorClassName = name && "is-invalid text-danger mb-3";

    // RETURN
    return (
        <React.Fragment>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor={id}>{label}</label>
                <input
                    type={type}
                    className={className}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    autoFocus={isAutoFocus}
                    required={isRequired}
                    onChange={isInputOnChange} 
                    value={value}/>
                <div className={errorClassName}>{error}</div>
            </div>
        </React.Fragment>
    ) //end return
} //end Function

// export default ResuabilityBlogInput
export default withTranslation()(ResuabilityBlogInput)