import React from 'react'
import PropTypes from 'prop-types'
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import FaceIcon from 'material-ui-icons/Face'
import RecordVoiceOverIcon from 'material-ui-icons/RecordVoiceOver'
import FolderIcon from 'material-ui-icons/Folder'
import BookmarkIcon from 'material-ui-icons/Bookmark'

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    // const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        style={{ position: 'fixed', bottom: '0', width: '100%' }}
      >
        <BottomNavigationButton label="Home" icon={<HomeIcon />} />
        <BottomNavigationButton label="Tutors" icon={<RecordVoiceOverIcon />} />
        <BottomNavigationButton label="LogIn" icon={<FaceIcon />} />
      </BottomNavigation>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default SimpleBottomNavigation
