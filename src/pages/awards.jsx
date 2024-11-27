import React from 'react'
import Awardssection from '../components/awardsection/awardssection'
import Maintitle from '../components/maintitle'
import Awardsilder from '../components/awardsection/awardsilder'
const Awards = () => {
    Maintitle('Social panga - awards')
    return (
        <div className='pt-[60px] md:pt-[100px]' >
            <Awardssection />
            <Awardsilder />
        </div>
    )
}

export default Awards