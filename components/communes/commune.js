import PropTypes from 'prop-types'

const Commune = ({commune}) => (
  <div>
    <h3>{commune.nom}</h3>
    <div>
      <div>code: {commune.code}</div>
      <div>code département: {commune.codeDepartement}</div>
      <div>code région: {commune.codeRegion}</div>
      <div>population: {commune.population}</div>
      <div>codes postaux:
        {commune.codePostaux && <ul>{commune.codePostaux.map(code => <li key={code}>{code}</li>)}</ul>}
      </div>
    </div>
    <style jsx>{``}</style>
  </div>
)

Commune.propTypes = {
  commune: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    codeDepartement: PropTypes.string.isRequired,
    codeRegion: PropTypes.string.isRequired,
    codePostaux: PropTypes.array.isRequired,
    population: PropTypes.string.isRequired,
    _score: PropTypes.string,
    surface: PropTypes.string,
    center: PropTypes.object,
    contour: PropTypes.object,
    departement: PropTypes.object,
    region: PropTypes.object
  }).isRequired
}

export default Commune
