import React from 'react'
import { Link } from 'react-router-dom'
import SimpleBottomNavigation from '../components/bottomNavigation'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import background from '../images/background.jpg'
import overlay from '../images/overlay.png'

const styles = {
  background: {
    flexGrow: 1,
    background: 'no-repeat 45% 50%',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',
    position: 'absolute',
    marginTop: '20',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '-99'
  },
  overlay: {
    height: '100vh',
    width: '100vw',
    flexGrow: 1,
    backgroundImage: `url(${overlay})`,
    zIndex: '-98'
  },
  container: {
    paddingTop: '5em',
    paddingLeft: '1em',
    paddingRight: '1em'
  }
}

class Company extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <MenuAppBar title="Company" />
          <div style={styles.container}>
            <Typography
              type="Title"
              style={{ color: 'black', fontSize: '2em' }}
            >
              TutorMe
            </Typography>

            <Typography type="body" style={{ color: 'black', align: 'center' }}>
              <p>
                The world is changing all around us. To continue to thrive as a
                business over the next ten years and beyond, we must look ahead,
                understand the trends and forces that will shape our business in
                the future and move swiftly to prepare for what is to come. We
                must get ready for tomorrow today. That is what our 2020 Vision
                is all about. It creates a long term destination for our
                business and provides us with a Roadmap for winning together
                with our bottling partners.
              </p>
            </Typography>
            <Typography type="body" style={{ color: 'black', align: 'center' }}>
              <h3>Our Mission</h3>
            </Typography>
            <Typography type="body" style={{ color: 'black', align: 'center' }}>
              <p>
                Our Roadmap starts with our mission, which is enduring. It
                declares our purpose as a company and serves as the standard
                against which we weigh our actions and decisions.
              </p>
            </Typography>
            <Typography type="body" style={{ color: 'black', align: 'center' }}>
              <h3>Our Vision</h3>
            </Typography>
            <Typography type="body" style={{ color: 'black', align: 'center' }}>
              <p>
                Our vision serves as the framework for our Roadmap and guides
                every aspect of our business by describing what we need to
                accomplish in order to continue achieving sustainable, quality
                growth.
              </p>
            </Typography>
            <Typography type="body" style={{ color: 'black', align: 'center' }}>
              <h3>Our Values</h3>
            </Typography>
            <Typography type="body" style={{ color: 'black', align: 'center' }}>
              <p>
                Our values serve as a compass for our actions and describe how
                we behave in the world.
              </p>
            </Typography>
          </div>
          <SimpleBottomNavigation />
        </div>
      </div>
    )
  }
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
