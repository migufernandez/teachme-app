import React from 'react'
import { Button } from 'material-ui'
import SimpleBottomNavigation from '../components/bottomNavigation'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import PaperSheet from '../components/paperSheet'
import { connect } from 'react-redux'
import { CardMedia } from 'material-ui/Card'
import { Link } from 'react-router-dom'
import background from '../images/background.jpg'

const companyText = [
  {
    text: (
      <CardMedia
        style={{
          height: '20vh',
          maxHeight: '128px',
          maxWidth: '357px',
          margin: '0 auto',
          display: 'block'
        }}
        image={background}
        title="TutorMe"
      />
    ),
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text:
      'Our Roadmap starts with our mission, which is enduring. It declares our purpose as a company and serves as the standard against which we weigh our actions and decisions.',
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text:
      'Our vision serves as the framework for our Roadmap and guides every aspect of our business by describing what we need to accomplish in order to continue achieving sustainable, quality growth.',
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text:
      'Our values serve as a compass for our actions and describe how we behave in the world.',
    style: 'paragraph',
    bottomMargin: true
  }
]

const Company = props => {
  return (
    <div>
      <MenuAppBar title="Company" />
      <PaperSheet data={companyText} />
      <SimpleBottomNavigation />
    </div>
  )
}

const connector = connect(
  state => state,
  dispatch => {
    return {
      toggleDrawer: () => dispatch({ type: 'TOGGLE_DRAWER' })
    }
  }
)

export default withDrawer(connector(Company))
