import React from 'react'
import SimpleBottomNavigation from '../../components/bottomNavigation'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'

import { connect } from 'react-redux'
import { map, prop, sortBy, propOr } from 'ramda'
import List from 'material-ui/List'

import SubjectItem from '../../components/subjectItem'
import { setSubjects } from '../../action-creators/subjects'

const sorter = sortBy(prop('subjectName'))

class Subjects extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }

  render() {
    console.log('I RENDERED')
    const subjects = propOr([], 'subjects', this.props)
    return (
      <div>
        <MenuAppBar title="Subjects" />
        <List Style={{ padding: 0, marginBottom: 60 }}>
          {map(
            subject => <SubjectItem key={subject._id} subject={subject} />,
            sorter(subjects)
          )}
        </List>
        <SimpleBottomNavigation />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('STATE', state)
  return { subjects: state.subjects }
}

const mapActionsToProps = dispatch => {
  return {
    onMount: () => {
      console.log('onMount')
      dispatch(setSubjects)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withDrawer(connector(Subjects))
