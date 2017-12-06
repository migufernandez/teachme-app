import React from 'react'
import { Drawer } from 'material-ui'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import HomeIcon from 'material-ui-icons/Home'
import TrendingFlatIcon from 'material-ui-icons/TrendingFlat'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const sideList = (
  <div>
    <List>
      <Link to="/" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/departments" className="router-link">
        <ListItem button>
          <ListItemText primary="Departments" />
          <ListItemIcon>
            <TrendingFlatIcon />
          </ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/subjects" className="router-link">
        <ListItem button>
          <ListItemText primary="Subjects" />
          <ListItemIcon>
            <TrendingFlatIcon />
          </ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/tutors" className="router-link">
        <ListItem button>
          <ListItemText primary="Tutors" />
          <ListItemIcon>
            <TrendingFlatIcon />
          </ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/company" className="router-link">
        <ListItem button>
          <ListItemText primary="Company" />
          <ListItemIcon>
            <TrendingFlatIcon />
          </ListItemIcon>
        </ListItem>
      </Link>
    </List>
  </div>
)

const withDrawer = function(PageComponent) {
  const WrapDrawerComponent = props => {
    return (
      <div>
        <PageComponent {...props} />
        <Drawer open={props.open} onRequestClose={props.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={props.toggleDrawer}
            onKeyDown={props.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
  const mapStateToProps = state => {
    return { open: state.drawer.open }
  }
  const mapActionsToProps = dispatch => {
    return {
      toggleDrawer: () => {
        dispatch({ type: 'TOGGLE_DRAWER' })
      }
    }
  }
  const connector = connect(mapStateToProps, mapActionsToProps)
  return connector(WrapDrawerComponent)
}

export default withDrawer
