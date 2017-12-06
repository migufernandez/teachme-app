import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import { Typography } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import SearchIcon from 'material-ui-icons/Search'

import { connect } from 'react-redux'
import { propOr } from 'ramda'

// const styles = theme => ({
//   root: {
//     width: '100%'
//   },
//   flex: {
//     flex: 1
//   },
//   firstButton: {
//     marginLeft: -12,
//     marginRight: 12
//   },
//   lastButton: {
//     marginLeft: 12,
//     marginRight: -12
//   }
// })

const MenuAppBar = props => {
  // const { classes } = props
  const secondaryMenu = propOr(null, 'secondaryMenu', props)
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit" onClick={props.toggleDrawer}>
            {props.title}
          </Typography>
          <IconButton color="contrast" aria-label="Search">
            <SearchIcon />
          </IconButton>
          <IconButton
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
          {secondaryMenu}
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

export default connector(MenuAppBar)
