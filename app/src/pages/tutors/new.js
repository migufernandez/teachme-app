import React from 'react'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import TutorForm from '../../components/tutorForm'
import { connect } from 'react-redux'
import { createTutor, isActive, setTutors } from '../../action-creators/tutors'

class NewTutor extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <MenuAppBar title="Add Tutor" goBack {...this.props} />
        <TutorForm
          newTutor={this.props.newTutor}
          onSubmit={this.props.onSubmit(
            this.props.newTutor,
            this.props.history
          )}
          isActive={this.props.isActive}
          categories={this.props.tutors}
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
    onSubmit: (data, history) => e => {
      dispatch(createTutor(data, history))
    },
    onMount: () => {
      dispatch(setTutors)
    },
    isSubmitActive: () => dispatch(isActive)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withDrawer(connector(NewTutor))
