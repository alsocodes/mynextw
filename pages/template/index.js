import React from 'react'
import LandingSingleHeader from '../../component/LandingSingleHeader'
import TemplateList from '../../component/TemplateList'
import Landing from '../../layout/Landing'

const Template = () => {
    return (
        <Landing title={`Templates | MyNextW`}>
            <LandingSingleHeader title={`Template`} />
            <TemplateList />
        </Landing>
    )
}

export default Template