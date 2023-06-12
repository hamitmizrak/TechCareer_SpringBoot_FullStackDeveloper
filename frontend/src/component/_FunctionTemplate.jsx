// react function
import React from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// FUNCTION
function _FunctionTemplate(props) {

    // RETURN
    return (
        <React.Fragment>
            Function Template
        </React.Fragment>
    )
}

// export default ResuabilityBlogInput
export default withTranslation()(_FunctionTemplate)