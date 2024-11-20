import React, { useState } from 'react'

const Section = ({title, description, isVisible, setIsVisible}) =>{

  return (
  <div className='border border-black p-2 m-2'>
    <h3 className='font-bold text-xl'>{title}</h3>
    {
      isVisible ?( <button onClick={()=>setIsVisible(false)
      } className='cursor-pointer underline'>Hide
      </button> )
      : (
      <button onClick={()=>setIsVisible(true)} className='cursor-pointer underline'>Show</button>)
    }
    {isVisible && <p>{description}</p>}
  </div>
  )
}

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout : false,
    showTeam : false,
    showCareers :false,
  })
  return (
    <div>
      <h1 className='text-3xl p-2 m-2 font-bold'>InstaMart</h1>
      <Section 
      title={"About InstaMart"}
      description={"This is the about section of InstaMart"}
      isVisible={sectionConfig.showAbout}
      setIsVisible={()=>
        setSectionConfig({
          showAbout : true,
          showTeam : false,
          showCareers :false,

        })
      }/>

      <Section 
      title = {"About Team"}
      description={"This is the about section of Team"}
      isVisible={sectionConfig.showTeam}
      setIsVisible={()=>
        setSectionConfig({
          showAbout : false,
          showTeam : true,
          showCareers :false,
        })
      }
      />
            <Section 
      title = {"About Team"}
      description={"This is the about section of Team"}
      isVisible={sectionConfig.showCareers}
      setIsVisible={()=>
        setSectionConfig({
          showAbout : false,
          showTeam : false,
          showCareers :true,
        })
      }
      />
      
    </div>
  )
}

export default Instamart;
