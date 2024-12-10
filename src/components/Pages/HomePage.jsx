import React from 'react'
import FirstRow from '../FirstRow/FirstRow'
import SecondRow from '../Second/SecondRow'
import ThirdRow from '../Third/ThirdRow'
import LastRow from '../LastRow/LastRow'
import Footer from '../Footer/Footer'


const HomePage = () => {
  return (
    <div className='bg-white'>
        <FirstRow/>
        <SecondRow/>
        <ThirdRow/>
        <LastRow/>
        <Footer/>
    </div>
  )
}

export default HomePage