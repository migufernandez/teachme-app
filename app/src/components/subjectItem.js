import React from 'react'
import { withRouter } from 'react-router-dom'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const SubjectItem = ({ subject, history }) => {
  return (
    <div key={subject._id}>
      <ListItem
        button
        onClick={e => {
          history.push(`/subjects/${subject._id}`)
        }}
      >
        <ListItemText
          primary={subject.subjectName}
          secondary={subject.department}
        />
      </ListItem>
      <Divider />
    </div>
  )
}

export default withRouter(SubjectItem)
