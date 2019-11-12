import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as Styles from './styles'

const _TextField = styled.input`
  ${Styles.field}
`

const TextField = ({ value, handleChange, ...props }) => {
  return <_TextField value={value} onChange={handleChange} {...props} />
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
}

TextField.defaultProps = {
  handleChange: () => '',
}

export default TextField
