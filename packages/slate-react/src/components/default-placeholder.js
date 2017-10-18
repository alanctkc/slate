
import React from 'react'
import SlateTypes from 'slate-prop-types'
import Types from 'prop-types'

/**
 * Default placeholder.
 *
 * @type {Component}
 */

class DefaultPlaceholder extends React.Component {

  /**
   * Property types.
   *
   * @type {Object}
   */

  static propTypes = {
    editor: Types.object.isRequired,
    isSelected: Types.bool.isRequired,
    node: SlateTypes.node.isRequired,
    parent: SlateTypes.node.isRequired,
    readOnly: Types.bool.isRequired,
    state: SlateTypes.state.isRequired,
  }

  /**
   * Render.
   *
   * @return {Element}
   */

  render() {
    const { editor, state } = this.props
    if (state.document.nodes.size > 1) return false

    const style = {
      pointerEvents: 'none',
      display: 'inline-block',
      width: '0',
      whiteSpace: 'nowrap',
      opacity: '0.333',
    }

    return (
      <span contentEditable={false} style={style}>
        {editor.props.placeholder}
      </span>
    )
  }

}

/**
 * Export.
 *
 * @type {Component}
 */

export default DefaultPlaceholder
