import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import SaveIcon from 'material-ui-icons/Save'
import { map } from 'ramda'

const genders = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Undefined', label: 'Undefined' }
]
const educationLevel = [
  { value: 'High School', label: 'High School' },
  { value: 'Bachelor Degree', label: 'Bachelor Degree' },
  { value: 'Masters Degree', label: 'Masters Degree' },
  { value: 'PhD', label: 'PhD' }
]
const subjectsAvailable = [
  { value: 'Algebra', label: 'Algebra' },
  { value: 'Calculus', label: 'Calculus' },
  { value: 'Statistics', label: 'Statistics' },
  { value: 'Geometry', label: 'Geometry' },
  { value: 'Anthropology', label: 'Anthropology' },
  { value: 'Basic First Aid and Safety', label: 'Basic First Aid and Safety' },
  { value: 'Biology', label: 'Biology' },
  { value: 'Coding', label: 'Coding' },
  { value: 'Drafting', label: 'Drafting' },
  { value: 'Dance', label: 'Dance' },
  { value: 'French', label: 'French' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'German', label: 'German' },
  { value: 'Grammar', label: 'Grammar' },
  { value: 'Health', label: 'Health' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Keyboarding', label: 'Keyboarding' },
  { value: 'Metal Work', label: 'Metal Work' },
  { value: 'Nutrition', label: 'Nutrition' },
  { value: 'Painting', label: 'Painting' },
  { value: 'Philosophy', label: 'Philosophy' },
  { value: 'Photoshop', label: 'Photoshop' },
  { value: 'Physics', label: 'Physics' },
  { value: 'Poetry', label: 'Poetry' },
  { value: 'Programming', label: 'Programming' },
  { value: 'Psychology', label: 'Psychology' },
  { value: 'Sculture', label: 'Sculture' },
  { value: 'Sociology', label: 'Sociology' },
  { value: 'Speech', label: 'Speech' },
  { value: 'Videography', label: 'Videography' },
  { value: 'Vocabulary', label: 'Vocabulary' },
  { value: 'Zoology', label: 'Zoology' }
]

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
        style={{ marginTop: 20, paddingTop: 50, paddingBottom: 20 }}
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmit()
        }}
      >
        <TextField
          required
          fullWidth
          label="Name"
          placeholder="Name"
          helperText="Tell us your name"
          value={this.props.newTutor.name}
          onChange={e => {
            this.props.onChange('name', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          select
          label="Gender"
          placeholder="Gender"
          helperText="Please select your gender"
          value={this.props.newTutor.gender}
          onChange={e => {
            this.props.onChange('gender', e.target.value)
          }}
          style={styles.input}
          margin="normal"
        >
          {genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          fullWidth
          id="date"
          type="date"
          defaultValue="2017-05-24"
          label="Birth date"
          placeholder="Birth date"
          helperText="When did you born?"
          value={this.props.newTutor.birthDate}
          onChange={e => {
            this.props.onChange('birthDate', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          label="Email"
          placeholder="Email"
          helperText="What is your email address"
          value={this.props.newTutor.email}
          onChange={e => {
            this.props.onChange('email', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          label="Phone"
          placeholder="Phone"
          helperText="What is your phone number"
          value={this.props.newTutor.phone}
          onChange={e => {
            this.props.onChange('phone', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          label="Description"
          placeholder="Description"
          helperText="Tell us about yourself"
          value={this.props.newTutor.shortDesc}
          onChange={e => {
            this.props.onChange('shortDesc', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          label="Country of Birth"
          placeholder="Country of Birth"
          helperText="Where you were born?"
          value={this.props.newTutor.countryBirth}
          onChange={e => {
            this.props.onChange('countryBirth', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          label="Current City"
          placeholder="Current City"
          helperText="What is your current city?"
          value={this.props.newTutor.currentCity}
          onChange={e => {
            this.props.onChange('currentCity', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          select
          label="Education"
          placeholder="Education"
          helperText="What is your education level?"
          value={this.props.newTutor.education}
          onChange={e => {
            this.props.onChange('education', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        >
          {educationLevel.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          fullWidth
          label="Institution"
          placeholder="Institution"
          helperText="Where did you studied?"
          value={this.props.newTutor.institution}
          onChange={e => {
            this.props.onChange('institution', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          select
          label="Subjects you teach"
          placeholder="subjects"
          helperText="What subject do you teach?"
          value={this.props.newTutor.subjects}
          onChange={e => {
            this.props.onChange('subjects', e.target.value)
          }}
          className={styles.input}
          margin="normal"
        >
          {subjectsAvailable.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
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
