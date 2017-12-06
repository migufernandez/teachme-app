import React from 'react'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

import { setCurrentSubject } from '../../action-creators/subjects'
import subjectCard from '../../components/subjectCard'

class ShowSubject extends React.Component {
  state = { expanded: false }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.setCurrentSubject(id)
  }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }
  render() {
    const currentID = pathOr('', ['currentSubject', 'id'], this.props)
    if (this.props.match.params.id === currentID) {
      return (
        <div>
          <MenuAppBar
            title={this.props.currentSubject.name}
            search={true}
            goBack={'/subjects'}
          />\
          <subjectCard data={this.props.currentSubject} />
        </div>
      )
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    currentSubject: state.currentSubject
  }
}

const mapActionsToProps = dispatch => {
  return {
    setCurrentSubject: id => dispatch(setCurrentSubject(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default withDrawer(connector(ShowSubject))
