import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia, CardHeader } from 'material-ui/Card'
import { compose, toUpper, slice, join, split, toLower, pathOr } from 'ramda'
import Avatar from 'material-ui/Avatar'

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
  // const findTutorsButton = this.props.currentTutor.subjects === this.prop.currentSubject.subjectName)) ? (
  //   <Button
  //     dense
  //     color="primary"
  //     onClick={e => {
  //       this.props.history.push(`${/tutors/tutor._id}`)
  //   >
  //     Find tutors
  //   </Button>
  // ) : null
  subjectName = () => pathOr('', ['subjectName', 'subjectName'], this.props)
  description = () => pathOr('', ['subjectName', 'description'], this.props)

  render() {
    console.log('this', this.props)
    const { classes } = this.props
    return (
      <div>
        <Card className={classes.card} style={{ marginBottom: 32 }}>
          <CardMedia className={classes.media}>
            <iframe
              title={this.subjectName()}
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
                )(this.subjectName())}
              </Avatar>
            }
            title={this.subjectName()}
          />
          <CardContent>
            <Typography component="p">{this.description()}</Typography>
          </CardContent>
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
