import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import FaceIcon from 'material-ui-icons/Face'
import RecordVoiceOverIcon from 'material-ui-icons/RecordVoiceOver'
import FolderIcon from 'material-ui-icons/Folder'
import BookmarkIcon from 'material-ui-icons/Bookmark'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0'
  }
}

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <Link to="/" className="router-link">
          <BottomNavigationButton label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/tutors" className="router-link">
          <BottomNavigationButton
            label="Tutors"
            icon={<RecordVoiceOverIcon />}
          />
        </Link>
        <Link to="/login" className="router-link">
          <BottomNavigationButton label="LogIn" icon={<FaceIcon />} />
        </Link>
      </BottomNavigation>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleBottomNavigation)
