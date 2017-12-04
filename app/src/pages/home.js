import React from 'react'
import MenuAppBar from '../components/menuAppBar'
import withDrawer from '../components/withDrawer'
import SimpleBottomNavigation from '../components/bottomNavigation'
import { connect } from 'react-redux'
import { filter, contains, map } from 'ramda'
import List from 'material-ui/List'

class Home extends React.Component {
  componentDidMount() {
    this.state = { open: false }
  }

  handleChange = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <MenuAppBar title="TutorMe" />
        <h1>Home</h1>
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
