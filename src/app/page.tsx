import React from 'react'
import Herosec from './components/Herosec'
import Createbest from './components/Createbest'
import Choosefood from './components/Choosefood'
import Featurecards from './components/Featurecards'
import OurMenu from './components/OurMenu'
import Chef from './components/Chef'
import Stu from './components/Stu'
import Blogcards from './components/Blogcards'

function page() {
  return (
    <div className='bg-black'>
      <Herosec />
      <Createbest />
      <Choosefood />
      <Featurecards />
      <OurMenu />
      <Chef />
      <Stu />
      <Blogcards />
    </div>
  )
}

export default page