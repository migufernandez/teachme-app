import React from 'react'
import SimpleBottomNavigation from '../../components/bottomNavigation'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/withDrawer'
import TutorItem from '../../components/tutorItem'
import List from 'material-ui/List'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { Link } from 'react-router-dom'
import {
  map,
  sortBy,
  prop,
  propOr,
  pathOr,
  filter,
  pluck,
  contains
} from 'ramda'
import { setTutors } from '../../action-creators/tutors'
import { connect } from 'react-redux'

const sorter = sortBy(prop('name'))

class Tutors extends React.Component {
  componentDidMount() {
    console.log('THIS', this.props)
    this.props.onMount()
  }
  render() {
    const { classes } = this.props

    const filterBySubject = pathOr(
      'no filter',
      ['match', 'params', 'id'],
      this.props
    )
    //console.log('filterbysub', filterBySubject)

    const tutors = propOr([], 'tutors', this.props)
    const displayedTutors =
      filterBySubject === 'no filter'
        ? tutors
        : filter(tutor => {
            const subjects = pluck('name', tutor.subjects)
            return contains(filterBySubject, subjects)
          }, tutors)
    //console.log('DISPLAYED', displayedTutors)
    //console.log('TUTORS', tutors)

    return (
      <div>
        <MenuAppBar title="TutorMe" />
        <List style={{ paddingTop: 50, marginBottom: 60 }}>
          {map(
            tutor => <TutorItem key={tutor._id} tutor={tutor} />,
            displayedTutors
          )}
        </List>
        <Link to="/tutors/new">
          <Button fab color="primary" aria-label="add" className="fab-button">
            <AddIcon />
          </Button>
        </Link>
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
