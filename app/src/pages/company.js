import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import SimpleBottomNavigation from '../components/bottomNavigation'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { connect } from 'react-redux'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 500
  }
}

function Company(props) {
  const { classes } = props
  return (
    <div>
      <MenuAppBar title="TutorMe" />
      <Card className={styles.card}>
        <CardMedia
          className={styles.media}
          image="http://www.2iwebsitedesign.co.uk/wp-content/uploads/2013/09/image-03.jpg"
          title="Company"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Company
          </Typography>
          <Typography component="p">
            The world is changing all around us. To continue to thrive as a
            business over the next ten years and beyond, we must look ahead,
            understand the trends and forces that will shape our business in the
            future and move swiftly to prepare for what is to come. We must get
            ready for tomorrow today. That is what our 2020 Vision is all about.
            It creates a long term destination for our business and provides us
            with a Roadmap for winning together with our bottling partners.
          </Typography>
          <Typography type="body" style={{ color: 'black', align: 'center' }}>
            <h3>Our Mission</h3>
          </Typography>
          <Typography type="body" style={{ color: 'black', align: 'center' }}>
            <p>
              Our Roadmap starts with our mission, which is enduring. It
              declares our purpose as a company and serves as the standard
              against which we weigh our actions and decisions.
            </p>
          </Typography>
          <Typography type="body" style={{ color: 'black', align: 'center' }}>
            <h3>Our Vision</h3>
          </Typography>
          <Typography type="body" style={{ color: 'black', align: 'center' }}>
            <p>
              Our vision serves as the framework for our Roadmap and guides
              every aspect of our business by describing what we need to
              accomplish in order to continue achieving sustainable, quality
              growth.
            </p>
          </Typography>
          <Typography type="body" style={{ color: 'black', align: 'center' }}>
            <h3>Our Values</h3>
          </Typography>
          <Typography type="body" style={{ color: 'black', align: 'center' }}>
            <p>
              Our values serve as a compass for our actions and describe how we
              behave in the world.
            </p>
          </Typography>
        </CardContent>
      </Card>
      <SimpleBottomNavigation />
    </div>
  )
}

const connector = connect(
  state => state,
  dispatch => {
    return {
      toggleDrawer: () => dispatch({ type: 'TOGGLE_DRAWER' })
    }
  }
)

export default withDrawer(connector(Company))
