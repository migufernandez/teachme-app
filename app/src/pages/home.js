import React from 'react'
import MenuAppBar from '../components/menuAppBar'
import withDrawer from '../components/withDrawer'
import { connect } from 'react-redux'
import { filter, contains, map } from 'ramda'
import List from 'material-ui/List'

class Home extends React.Component {
  componentDidMount() {
    this.props.toggleDrawer()
  }
  render() {
    return (
      <div>
        <MenuAppBar title="TutorMe" />
        <h1>Home</h1>
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
