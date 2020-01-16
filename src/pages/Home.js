import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import BookingCard from '../components/BookingCard/BookingCard'
import Footer from '../components/Footer/Footer'

export default class ChangePassword extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BookingCard />
        <Footer />
      </div>
    )
  }
}
