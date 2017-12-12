import React from 'react'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import TutorForm from '../../components/tutorForm'
import { connect } from 'react-redux'
import {
  createTutor,
  checkSaveButtonActive,
  setTutors,
  updateNewForm
} from '../../action-creators/tutors'

class NewTutor extends React.Component {
  componentDidMount() {
    this.props.onMount()
    this.props.checkSaveButtonActive()
  }

  render() {
    console.log('NEW FORM IS ACTIVE', this.props.isActive)
    return (
      <div>
        <MenuAppBar title="Add Tutor" goBack {...this.props} />
        <TutorForm
          isActive={this.props.isActive}
          onChange={this.props.onChange}
          newTutor={this.props.newTutor}
          onSubmit={this.props.onSubmit(
            this.props.newTutor,
            this.props.history
          )}
          checkSaveButtonActive={this.props.checkSaveButtonActive}
          tutors={this.props.tutors}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newTutor: state.newTutor,
    isActive: state.isActive,
    tutors: state.tutors
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(updateNewForm(field, value))
      dispatch(checkSaveButtonActive)
    },
    onSubmit: (data, history) => e => {
      dispatch(createTutor), history.push('/tutors')
    },
    onMount: () => {
      dispatch(setTutors)
    },
    checkSaveButtonActive: () => dispatch(checkSaveButtonActive)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withDrawer(connector(NewTutor))
