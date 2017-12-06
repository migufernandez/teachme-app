import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
// import IconButton from 'material-ui/IconButton'
// import InfoIcon from 'material-ui-icons/Info'

import { connect } from 'react-redux'
import { map, propOr } from 'ramda'
import { setSubjects, setSubjectFilter } from '../../action-creators/subjects'

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
    width: 500,
    height: 450
  }
})

class Subjects extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    const { classes } = this.props
    const subjects = propOr([], 'subjects', this.props)
    return (
      <div className={classes.container}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Subheader component="div">{this.props.title}</Subheader>
          </GridListTile>
          {map(
            subject => (
              <GridListTile
                key={subject._id}
                onClick={e => {
                  this.props.history.push(`/subjects/${subject._id}`)
                }}
              >
                <img
                  src="https://s3.amazonaws.com/kajabi-storefronts-production/site/1823/images/3e0gOCzHT3qHKQXmjPw2_algebra_gre.jpg"
                  alt={subject.subjectName}
                />
                <GridListTileBar title={subject.subjectName} />
              </GridListTile>
            ),
            subjects
          )}
        </GridList>
      </div>
    )
  }
}

Subjects.propTypes = {
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
    },
    setSubjectFilter: id => dispatch(setSubjectFilter(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withStyles(styles)(connector(Subjects))
