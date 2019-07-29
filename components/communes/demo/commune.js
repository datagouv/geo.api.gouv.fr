import React from 'react'
import PropTypes from 'prop-types'
import FaLocationArrow from 'react-icons/lib/fa/location-arrow'

import theme from '../../../styles/theme'

import Button from '../../button'

class Commune extends React.Component {
  render() {
    const {commune, onClick} = this.props

    return (
      <div>
        {commune ? (
          <div className='commune'>
            <h2>{commune.nom}</h2>
            <div><b>Code INSEE :</b> <span>{commune.code}</span></div>
            <div><b>Codes postaux :</b> <span>{commune.codesPostaux.join(', ')}</span></div>
            <div><b>Population municipale :</b> <span>{commune.population}</span></div>
            <div><b>Surface en hectare :</b> <span>{commune.surface}</span></div>
            <div className='coords'>
              <div><b>Coordonnées</b></div>
              <div>
                <div>longitude : <span>{commune.centre.coordinates[1]}</span></div>
                <div>latitude : <span>{commune.centre.coordinates[0]}</span></div>
              </div>
            </div>
          </div>
        ) : (
          <Button onClick={onClick}>
            <FaLocationArrow /> <span>Trouver ma commune</span>
          </Button>
        )}

        <style jsx>{`
          .commune {
            text-align: center;
          }

          h2 {
            padding: 1em 2em;
            text-align: center;
            background: white;
            border: 5px solid red;
            border-radius: 5px;
          }

          .commune span {
            color: ${theme.darkText};
          }

          .coords {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0.5em 0;
          }
          `}</style>
      </div>
    )
  }
}

Commune.propTypes = {
  commune: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

Commune.defaultProps = {
  commune: null
}

export default Commune
