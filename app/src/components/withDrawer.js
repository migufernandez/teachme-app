import React from 'react'
import { Drawer } from 'material-ui'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import HomeIcon from 'material-ui-icons/Home'
import FaceIcon from 'material-ui-icons/Face'
import RecordVoiceOverIcon from 'material-ui-icons/RecordVoiceOver'
import FolderIcon from 'material-ui-icons/Folder'
import BookmarkIcon from 'material-ui-icons/Bookmark'
import BusinessIcon from 'material-ui-icons/Business'
import Divider from 'material-ui/Divider'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const sideList = (
  <div>
    <List>
      <Link to="/" className="router-link" style={{ textDecoration: 'none' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Divider />
      <Link
        to="/departments"
        className="router-link"
        style={{ textDecoration: 'none' }}
      >
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItem>
      </Link>
      <Link
        to="/subjects"
        className="router-link"
        style={{ textDecoration: 'none' }}
      >
        <ListItem button>
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Subjects" />
        </ListItem>
      </Link>
      <Link
        to="/tutors"
        className="router-link"
        style={{ textDecoration: 'none' }}
      >
        <ListItem button>
          <ListItemIcon>
            <RecordVoiceOverIcon />
          </ListItemIcon>
          <ListItemText primary="Tutors" />
        </ListItem>
      </Link>
      <Divider />
      <Link
        to="/company"
        className="router-link"
        style={{ textDecoration: 'none' }}
      >
        <ListItem button>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Company" />
        </ListItem>
      </Link>
      <Link
        to="/login"
        className="router-link"
        style={{ textDecoration: 'none' }}
      >
        <ListItem button>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="LogIn" />
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
