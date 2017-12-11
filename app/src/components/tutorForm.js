import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import SaveIcon from 'material-ui-icons/Save'
import { map } from 'ramda'
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form'
import Radio, { RadioGroup } from 'material-ui/Radio'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

class TutorForm extends React.Component {
  render() {
    const { classes } = this.props
    const tutorMenuItem = tutor => {
      return <MenuItem value={tutor.gender}>{tutor.gender}</MenuItem>
    }
    return (
      <form
        style={{ marginTop: 20, paddingTop: 50 }}
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmit()
        }}
      >
        <TextField
          label="Name"
          placeholder="Name"
          value={this.props.newTutor.name}
          onChange={e => {
            this.props.onChange('name', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Gender"
          placeholder="Gender"
          value={this.props.newTutor.gender}
          onChange={e => {
            this.props.onChange('gender', e.target.value)
          }}
          style={styles.input}
          margin="normal"
        />
        <TextField
          label="Birth date"
          placeholder="Birth date"
          value={this.props.newTutor.birthDate}
          onChange={e => {
            this.props.onChange('birthDate', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Email"
          placeholder="Email"
          value={this.props.newTutor.email}
          onChange={e => {
            this.props.onChange('email', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Phone"
          placeholder="Phone"
          value={this.props.newTutor.phone}
          onChange={e => {
            this.props.onChange('phone', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Description"
          placeholder="Description"
          value={this.props.newTutor.shortDesc}
          onChange={e => {
            this.props.onChange('shortDesc', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Country of Birth"
          placeholder="Country of Birth"
          value={this.props.newTutor.countryBirth}
          onChange={e => {
            this.props.onChange('countryBirth', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Current City"
          placeholder="Current City"
          value={this.props.newTutor.currentCity}
          onChange={e => {
            this.props.onChange('currentCity', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Education"
          placeholder="Education"
          value={this.props.newTutor.education}
          onChange={e => {
            this.props.onChange('education', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Institution"
          placeholder="Institution"
          value={this.props.newTutor.institution}
          onChange={e => {
            this.props.onChange('institution', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Subjects you teach"
          placeholder="subjects"
          value={this.props.newTutor.subjects}
          onChange={e => {
            this.props.onChange('subjects', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <Button
          fab
          color="primary"
          type="submit"
          aria-label="add"
          className="fab-button"
          disabled={!this.props.isActive}
        >
          <SaveIcon />
        </Button>
      </form>
    )
  }
}

TutorForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TutorForm)
