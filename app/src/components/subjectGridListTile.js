import React from 'react'
import { withRouter } from 'react-router-dom'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'

const SubjectGridListTile = ({ subject, history }) => {
  return (
    <GridListTile key={tile.img}>
      <img
        src="https://s3.amazonaws.com/kajabi-storefronts-production/site/1823/images/3e0gOCzHT3qHKQXmjPw2_algebra_gre.jpg"
        alt={subject.subjectName}
      />
      <GridListTileBar title={subject.subjectName} />
    </GridListTile>
  )
}

export default withRouter(SubjectGridListTile)
