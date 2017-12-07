import React from 'react'
import { withRouter } from 'react-router-dom'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const TutorItem = ({ tutor, history }) => {
  return (
    <div key={tutor._id}>
      <ListItem
        button
        onClick={e => {
          history.push(`/tutors/${tutor._id}`)
        }}
      >
        <ListItemText
          primary={tutor.name}
          secondary={tutor.education.institution}
        />
      </ListItem>
      <Divider />
    </div>
  )
}

export default withRouter(TutorItem)
