import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia, CardHeader } from 'material-ui/Card'

import Typography from 'material-ui/Typography'
import withDrawer from '../components/withDrawer'

const styles = {
  card: {
    maxWidth: '100%'
  },
  cardHeader: {
    fontSize: '16px'
  },
  media: {
    height: '27vh'
  },
  avatarColor: {
    backgroundColor: '#607d8b'
  }
}

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card} style={{ marginBottom: 32 }}>
        <CardMedia className={classes.media}>
          <iframe
            title={props.data.subjectName}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env
              .REACT_APP_MAP}&q=${encodeURI(props.data.subjectName)}`}
            allowFullScreen
          />
        </CardMedia>
        <CardHeader className={classes.cardHeader}>
          {props.data.subjectName}
        </CardHeader>
        <CardContent>
          <Typography component="p">{props.data.description}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

// export default withStyles(styles)(SimpleMediaCard);
export default withDrawer(withStyles(styles)(SimpleMediaCard))
