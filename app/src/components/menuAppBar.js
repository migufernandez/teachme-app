import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import SearchIcon from 'material-ui-icons/Search'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  firstButton: {
    marginLeft: -12,
    marginRight: 0
  },
  lastButton: {
    marginLeft: 12,
    marginRight: -12
  }
})

const MenuAppBar = props => {
  const { classes } = props
  return (
    <div id="menu-container" className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            {props.title}
          </Typography>
          <IconButton
            className={classes.lastButton}
            color="contrast"
            aria-label="Search"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            className={classes.firstButton}
            color="contrast"
            aria-label="Menu"
            onClick={
              props.goBack
                ? typeof props.goBack === 'string'
                  ? props.lastPage(props.history, props.goBack)
                  : props.lastPage(props.history)
                : props.toggleDrawer
            }
          >
            {props.goBack ? (
              <GoBackIcon style={{ fontSize: 32, marginTop: 0 }} />
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({})
const mapActionsToProps = (dispatch, getState) => ({
  toggleDrawer: () => dispatch({ type: 'TOGGLE_DRAWER' }),
  lastPage: (history, page) => e => {
    e.preventDefault()
    if (page) {
      history.replace(page)
    } else {
      history.goBack()
    }
  }
})

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(MenuAppBar))
