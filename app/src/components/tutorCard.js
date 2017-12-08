import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from 'material-ui/Card'
import {
  compose,
  toUpper,
  slice,
  join,
  split,
  toLower,
  pathOr,
  map
} from 'ramda'
import Avatar from 'material-ui/Avatar'
import { ListItemAvatar } from 'material-ui/List'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import CallIcon from 'material-ui-icons/Call'
import SmsIcon from 'material-ui-icons/Sms'
import EmailIcon from 'material-ui-icons/Email'

import SimpleBottomNavigation from '../components/bottomNavigation'
import Typography from 'material-ui/Typography'
import withDrawer from '../components/withDrawer'
import { connect } from 'react-redux'

const firstLetterUpper = string =>
  compose(
    join(' '),
    map(word => toUpper(word[0]) + word.substr(1)),
    split(' '),
    toLower()
  )(string)

const styles = {
  card: {
    maxWidth: '100%',
    paddingTop: '10%'
  },
  cardHeader: {
    fontSize: '16px'
  },
  media: {
    height: '30vh',
    paddingTop: '40%'
  },
  avatarColor: {
    backgroundColor: '#607d8b'
  }
}

class TutorCard extends React.Component {
  tutorName = () => pathOr('', ['name', 'name'], this.props)
  description = () => pathOr('', ['name', 'shortDesc'], this.props)
  image = () => pathOr('', ['name', 'imageUrl'], this.props)

  render() {
    console.log('this', this.props)
    const { classes } = this.props
    return (
      <div>
        <Card className={classes.card} style={{ marginBottom: 32 }}>
          <CardMedia className={classes.media} image={this.image()} />
          <CardHeader
            className={classes.cardHeader}
            title={firstLetterUpper(this.tutorName())}
            subheader={this.props.name.currentLocation.city}
          />
          <CardActions>
            <IconButton className={classes.button} aria-label="Call">
              <CallIcon />
            </IconButton>
            <IconButton className={classes.button} aria-label="Email">
              <EmailIcon />
            </IconButton>
            <IconButton className={classes.button} aria-label="SMS">
              <SmsIcon />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography type="headline" component="h1">
              Description
            </Typography>
            <Typography component="p">{this.props.name.sorthDesc}</Typography>
          </CardContent>
        </Card>
        <SimpleBottomNavigation />
      </div>
    )
  }
}

TutorCard.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  console.log('STATE', state)
  return { tutors: state.tutors, name: state.currentTutor }
}

const connector = connect(mapStateToProps)

export default withDrawer(withStyles(styles)(connector(TutorCard)))
