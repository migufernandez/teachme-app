import React from 'react'
import SimpleBottomNavigation from '../../components/bottomNavigation'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/withDrawer'
import TutorItem from '../../components/tutorItem'
import List from 'material-ui/List'
import { map, sortBy, prop } from 'ramda'
import { setTutors } from '../../action-creators/tutors'
import { connect } from 'react-redux'

const sorter = sortBy(prop('name'))

class Tutors extends React.Component {
  componentDidMount() {
    console.log('THIS', this.props)
    this.props.onMount()
  }
  render() {
    return (
      <div>
        <MenuAppBar title="TutorMe" />
        <List style={{ paddingTop: 50, marginBottom: 60 }}>
          {map(
            tutor => <TutorItem key={tutor._id} tutor={tutor} />,
            sorter(this.props.tutors)
          )}
        </List>
        <SimpleBottomNavigation />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('STATE', state.tutors)
  return { tutors: state.tutors }
}
const mapActionsToProps = dispatch => {
  return {
    onMount: () => {
      dispatch(setTutors)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withDrawer(connector(Tutors))
