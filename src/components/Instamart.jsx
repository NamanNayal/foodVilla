import React, { useState } from 'react'

const Section = ({title, description, isVisible, setVisibleSection}) =>{

  return (
  <div className='border border-black p-2 m-2'>
    <h3 className='font-bold text-xl'>{title}</h3>
    {
      isVisible ?( <button onClick={()=>setVisibleSection("")
      } className='cursor-pointer underline'>Hide
      </button> )
      : (
      <button onClick={()=>setVisibleSection(title.toLowerCase())} className='cursor-pointer underline'>Show</button>)
    }
    {isVisible && <p>{description}</p>}
  </div>
  )
}
//optimise this {isVisible && <p>{description}</p>}

// here we are handling all the components which carry their own state, and if any change happens in one component we are updating the state for all the child components through parent state, which is not a good idea as we should focus on what is to be shown

const Instamart = () => {
  const [ visibleSection, setVisibleSection] = useState("")
  return (
    <div>

      <h1 className='text-3xl p-2 m-2 font-bold'>InstaMart</h1>
      <Section 
      title={"About InstaMart"}
      description={"This is the about section of InstaMart"}
      isVisible={visibleSection === "about instamart"}
      setVisibleSection={setVisibleSection}
      />

      <Section 
      title = {"About Team"}
      description={"This is the about section of Team"}
      isVisible={visibleSection === "about team"}
      setVisibleSection={setVisibleSection}
      />
      <Section 
      title = {"About Careers"}
      description={"This is the about section of Career"}
      isVisible={visibleSection === "about careers"}
      setVisibleSection={setVisibleSection}
      />
      
    </div>
  )
}

export default Instamart;
