import React from 'react'
import Autocomplete from 'react-autocomplete'
import PropTypes from 'prop-types'

import theme from '../styles/theme'

class SearchInput extends React.Component {
  constructor(props) {
    super(props)

    this.getItemValue = this.getItemValue.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.renderInput = this.renderInput.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
  }

  getItemValue(item) {
    return item.nom
  }

  handleSearch(event) {
    const {search} = this.props
    search(event.target.value)
  }

  handleSelect(item) {
    const {handleSelect} = this.props
    handleSelect(item)
  }

  renderInput(props) {
    const {placeholder} = this.props
    return (
      <div>
        <input className='search' {...props} placeholder={placeholder} />
        <style jsx>{`
          .search {
            background-color: ${theme.colors.white};
            border: 1px solid ${theme.border};
            border-radius: 2px 2px 2px 2px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
            color: rgba(0, 0, 0, 0.75);
            display: block;
            font-family: inherit;
            font-size: 14px;
            height: 56px;
            padding: 7px;
            width: 100%;
          }
        `}</style>
      </div>
    )
  }

  renderMenu(items, value) {
    const {loading} = this.props

    return (
      <div className={`menu ${value.length > 0 ? '' : 'hidden'}`}>
        {loading && !items.length > 0 ? (
          <div className='item'><img src='../static/loader.gif' /></div>
        ) : items.length === 0 ? (
          <div className='item'>Aucun résultat</div>
        ) : items}
        <style jsx>{`
          .menu {
            margin-right: 100%;
            float: left;
            width: 100%;
            background-color: ${theme.colors.white};
            border: 1px solid ${theme.border};
            border-radius: 5px;
            margin-bottom: 1em;
            outline: none;
          }

          .item {
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
            padding: 1em;
          }

          .hidden {
            display: none;
          }
        `}</style>
      </div>
    )
  }

  render() {
    const {value, results, renderItem} = this.props
    return (
      <div>
        <Autocomplete
          value={value}
          inputProps={{id: 'states-autocomplete'}}
          wrapperStyle={null}
          items={results}
          getItemValue={this.getItemValue}
          onSelect={this.handleSelect}
          onChange={this.handleSearch}
          renderItem={renderItem}
          renderInput={this.renderInput}
          renderMenu={this.renderMenu} />

        <style jsx>{`
          @media (max-width: 550px) {
            .wrap {
              width: 100%;
              top: 98px;
            }
          }
          `}</style>
      </div>
    )
  }
}

SearchInput.propTypes = {
  results: PropTypes.array,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  handleSelect: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired
}

SearchInput.defaultProps = {
  results: [],
  value: '',
  placeholder: '',
  loading: false
}

export default SearchInput
