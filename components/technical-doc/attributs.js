import PropTypes from 'prop-types'

import Code from '../code'
import ExpandableMenu from '../expandable-menu'

import ParamsTable from './params-table'

const Attributs = ({model, defaults, optionals}) => (
  <ExpandableMenu title='Attributs'>
    <div>
      <ParamsTable params={defaults} />
      {optionals && <ParamsTable params={optionals} />}
    </div>

    <b>Modèle de réponse (par défaut)</b>
    <Code code={JSON.stringify(model, null, 2)} />
  </ExpandableMenu>
)

Attributs.propTypes = {
  model: PropTypes.array.isRequired,
  defaults: PropTypes.array.isRequired,
  optionals: PropTypes.array
}

Attributs.defaultProps = {
  optionals: null
}

export default Attributs
