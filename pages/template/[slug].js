import React from 'react'
import { useRouter } from 'next/router'
import TemplateSatu from '../../layout/TemplateSatu';
import BottomNavbar from '../../component/BottomNavbar';
import Cover from '../../component/TemplateSatu/Cover';

const TemplateDetail = () => {
    const router = useRouter()
    const { slug } = router.query;
    return (
        <TemplateSatu>
            <div className="template-1" style={{ width: "100%", height: "100%", backgroundColor: "#ccc" }}>
                <Cover />
                <BottomNavbar />
            </div>
        </TemplateSatu>
    )
}

export default TemplateDetail