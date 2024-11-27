import React from 'react'
import Awardssection from '../components/awardssection'
import Maintitle from '../components/maintitle'
const Awards = () => {
    Maintitle('Social panga - awards')
    return (
        <div className='pt-[60px] md:pt-[100px]' >
            <Awardssection />
        </div>
    )
}

export default Awards