import React from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import NavBar from '../../components/Nav/NavBar'


const LandingPage = (props) => {
  const handleStart = () => {
    const {history} = props 
    history.push('./create-student')
  }

  return (
    <div>
      <Header />
      <NavBar />
      <section className="landing">
        <p>Experience the magic of preparing for your first year of Hogwarts School of Witchcraft and Wizardry! Choose your wand, your pet, and get sorted! The journey begins...</p>
       <button className="here-button" onClick={() => handleStart()}>HERE</button>
      </section>
    </div>
    )
  }


export default LandingPage
