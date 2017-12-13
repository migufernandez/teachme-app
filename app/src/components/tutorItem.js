import React from 'react'
import { withRouter } from 'react-router-dom'
import { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { compose, map, split, toLower, join, toUpper, pathOr } from 'ramda'

const firstLetterUpper = string =>
  compose(
    join(' '),
    map(word => toUpper(word[0]) + word.substr(1)),
    split(' '),
    toLower()
  )(string)

const TutorItem = ({ tutor, history }) => {
  return (
    <div key={tutor._id}>
      <ListItem
        button
        onClick={e => {
          history.push(`/tutors/${tutor._id}`)
        }}
      >
        {pathOr(false, ['imageUrl'], tutor) && (
          <ListItemAvatar>
            <Avatar src={tutor.imageUrl} />
          </ListItemAvatar>
        )}
        {!pathOr(false, ['imageUrl'], tutor) && (
          <ListItemAvatar>
            <Avatar>{firstLetterUpper(tutor.name).substring(0, 1)} </Avatar>
          </ListItemAvatar>
        )}
        <ListItemText
          primary={firstLetterUpper(tutor.name)}
          secondary={firstLetterUpper(tutor.institution)}
        />
      </ListItem>

      <Divider />
    </div>
  )
}

export default withRouter(TutorItem)
