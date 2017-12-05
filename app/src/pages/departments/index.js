import React from 'react'
import SimpleBottomNavigation from '../components/bottomNavigation'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'

import { connect } from 'react-redux'
import {} from 'ramda'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import List from 'material-ui/List'
import Button from 'material-ui/Button'
import AddIcon from 'material-iu-icons/Add'
import { Link } from 'react router dom'

import SubjectItem from '../../components/subjectItem'
import { setSubjects } from '../../action-creators/subjects'

const sorter = sortBy(prop('department'))

class Departments extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }

  render() {
    return (
      <div>
        <MenuAppBar title="Departments">
          <List Style={{ padding: 0, marginBottom: 60 }}>
            {map(
              subject => <SubjectItem key={subject._id} subject={subject} />,
              sorter(this.props.subject)
            )}
          </List>
        </MenuAppBar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { subjects: state.subjects }
}

const mapActionsToProps = dispatch => {
  return {
    onMount: () => {
      dispatch(setSubjects)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withDrawer(connector(Departments))
