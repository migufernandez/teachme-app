import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import SimpleBottomNavigation from '../../components/bottomNavigation'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/withDrawer'
// import IconButton from 'material-ui/IconButton'
// import InfoIcon from 'material-ui-icons/Info'

import { connect } from 'react-redux'
import { propOr, compose, uniq, map, pluck } from 'ramda'
import { setSubjects } from '../../action-creators/subjects'

//import SubjectGridListTile from '../../component/subjectGridListTile'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  gridList: {
    height: '100vh',
    paddingBottom: theme.spacing.unit * 15
  }
})

class Departments extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    const { classes } = this.props
    const subjects = propOr([], 'subjects', this.props)
    const departments = compose(
      uniq(),
      map(s => ({ department: s.department, image: s.imageUrl }))
    )(subjects)

    return (
      <div className={classes.container}>
        <MenuAppBar title="TutorMe" />
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Subheader component="div">{'Departments'}</Subheader>
          </GridListTile>
          {map(
            department => (
              <GridListTile
                key={department.department}
                onClick={e => {
                  this.props.history.push(
                    `/subjects/department/${department.department}`
                  )
                }}
              >
                <img src={department.image} alt={department.department} />
                <GridListTileBar title={department.department} />
              </GridListTile>
            ),
            departments
          )}
        </GridList>
        <SimpleBottomNavigation />
      </div>
    )
  }
}

Departments.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  console.log('STATE', state)
  return { subjects: state.allSubjects, title: state.subjectListTitle }
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

export default withStyles(styles)(withDrawer(connector(Departments)))
