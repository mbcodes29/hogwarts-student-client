import React from 'react'
import './CreatePage.css'
import Header from '../../components/Header/Header'
import CreatePageForm from '../../components/CreatePageForm/CreatePageForm'
import NavBar from '../../components/Nav/NavBar'

export default class CreatePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <CreatePageForm />
      </div>
    );
  }
}