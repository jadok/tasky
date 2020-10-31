import { arrayOf, string } from 'prop-types'
import React from 'react'

const Labels = ({ labels }) => (
  <span
    style={{ border: '.1rem solid black',
    float: 'right',
    padding: '.3rem'}}
  >
    {labels.join(', ')}
  </span>
);

Labels.propTypes = {
  labels: arrayOf(string).isRequired
}

export default Labels
