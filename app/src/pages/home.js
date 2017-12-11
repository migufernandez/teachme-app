import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../components/menuAppBar'
import withDrawer from '../components/withDrawer'
import SimpleBottomNavigation from '../components/bottomNavigation'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import harvard from '../images/harvard.jpg'
import overlay from '../images/overlay.png'

const styles = {
  background: {
    flexGrow: 1,
    height: '100vh',
    background: 'no-repeat 20% 60%',
    backgroundImage: `url(${harvard})`,
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
    paddingTop: '10em',
    flexGrow: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    flexGrow: 1,
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none'
  }
}

class Home extends React.Component {
  componentDidMount() {
    this.setState({ open: false })
  }

  handleChange = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <MenuAppBar title="TutorMe" />
          <div style={styles.container}>
            <Typography
              type="headline"
              align="center"
              style={{ color: 'white' }}
            >
              TutorMe
            </Typography>
            <hr style={{ width: '50%' }} />
            <Typography
              type="title"
              align="center"
              gutterBottom
              style={{ color: 'white' }}
            >
              The simple, fast and secure way to book the perfect tutor.
              Instantly.
            </Typography>
          </div>
          <div style={styles.button}>
            <Link to="/departments" style={styles.link}>
              <Button raised>GET STARTED</Button>
            </Link>
          </div>
        </div>
        <SimpleBottomNavigation />
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

export default withDrawer(connector(Home))
