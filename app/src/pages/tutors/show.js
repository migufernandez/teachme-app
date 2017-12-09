import React from 'react'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

import { setCurrentTutor } from '../../action-creators/tutors'
import TutorCard from '../../components/tutorCard'

class ShowTutor extends React.Component {
  state = { expanded: false }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.setCurrentTutor(id)
  }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }
  render() {
    console.log('THIS', this.props)
    console.log('THIS', this.props.match.params.id)
    console.log('CURRENTID', currentID)
    const currentID = pathOr('', ['currentTutor', '_id'], this.props)
    if (this.props.match.params.id === currentID) {
      return (
        <div>
          <MenuAppBar title="TutorMe" goBack={'/tutors'} {...this.props} />
          <TutorCard />
        </div>
      )
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  console.log('STATE', state)
  return {
    currentTutor: state.currentTutor
  }
}

const mapActionsToProps = dispatch => {
  return {
    setCurrentTutor: id => dispatch(setCurrentTutor(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default withDrawer(connector(ShowTutor))
