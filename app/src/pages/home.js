import React from 'react'
import MenuAppBar from '../components/menuAppBar'
import withDrawer from '../components/withDrawer'
import SimpleBottomNavigation from '../components/bottomNavigation'
import { connect } from 'react-redux'
import { Button } from 'material-ui'
import harvard from '../images/harvard.jpg'

const styles = {
  image: {
    flexGrow: 1,
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
    opacity: '0.9'
  }
}

class Home extends React.Component {
  componentDidMount() {
    this.setState({ open: false })
  }

  handleChange = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div style={styles.image}>
        <MenuAppBar title="TutorMe" />
        <Button raised style={{ position: 'center' }}>
          GET STARTED
        </Button>
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
