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
import { propOr, compose, uniq, map } from 'ramda'
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
    width: 'auto',
    height: 'auto'
  }
})

class Departments extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    const { classes } = this.props
    const subjects = propOr([], 'subjects', this.props)
    const departments = compose(uniq(), map(s => s.department))(subjects)
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
                key={department}
                onClick={e => {
                  this.props.history.push(`/subjects/department/${department}`)
                }}
              >
                <img
                  src="https://s3.amazonaws.com/kajabi-storefronts-production/site/1823/images/3e0gOCzHT3qHKQXmjPw2_algebra_gre.jpg"
                  alt={department}
                />
                <GridListTileBar title={department} />
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
  return { subjects: state.subjects, title: state.subjectListTitle }
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
