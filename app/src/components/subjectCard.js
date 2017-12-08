import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from 'material-ui/Card'
import { compose, toUpper, slice, join, split, toLower, pathOr } from 'ramda'
import Avatar from 'material-ui/Avatar'
import { Button } from 'material-ui'

import SimpleBottomNavigation from '../components/bottomNavigation'
import Typography from 'material-ui/Typography'
import withDrawer from '../components/withDrawer'
import { connect } from 'react-redux'

const styles = {
  card: {
    maxWidth: '100%'
  },
  cardHeader: {
    fontSize: '16px'
  },
  media: {
    height: '30vh'
  },
  avatarColor: {
    backgroundColor: '#607d8b'
  }
}

class SubjectCard extends React.Component {
  render() {
    const subjectName = pathOr('', ['subjectName', 'subjectName'], this.props)
    const description = pathOr('', ['subjectName', 'description'], this.props)
    console.log('this', this.props)
    const { classes } = this.props
    return (
      <div>
        <Card className={classes.card} style={{ marginBottom: 32 }}>
          <CardMedia className={classes.media}>
            <iframe
              title={subjectName}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              image
              src="https://s3.amazonaws.com/kajabi-storefronts-production/site/1823/images/3e0gOCzHT3qHKQXmjPw2_algebra_gre.jpg"
              allowFullScreen
            />
          </CardMedia>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar
                aria-label="Subject"
                classes={{
                  colorDefault: classes.avatarColor
                }}
              >
                {compose(
                  toUpper(),
                  slice(0, 1),
                  join(' '),
                  split(' '),
                  toLower()
                )(subjectName)}
              </Avatar>
            }
            title={subjectName}
          />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              dense
              color="primary"
              onClick={e => {
                this.props.history.push(`/tutors/subjects/${subjectName}`)
              }}
            >
              Find Tutors
            </Button>
          </CardActions>
        </Card>
        <SimpleBottomNavigation />
      </div>
    )
  }
}

SubjectCard.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  console.log('STATE', state)
  return { subjects: state.subjects, subjectName: state.currentSubject }
}

const connector = connect(mapStateToProps)

export default withDrawer(withStyles(styles)(connector(SubjectCard)))
