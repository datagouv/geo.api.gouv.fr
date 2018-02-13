import PropTypes from 'prop-types'

import theme from '../../styles/theme'

import Code from '../code'

const ParamsTable = ({params}) => (
  <div className='container'>
    <table>
      <tbody>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Type</th>
          {params.find(arg => arg.model) && <th>Modèle</th>}
        </tr>
      </tbody>
      {params.map(param => (
        <tbody key={`nom-${param.name}`}>
          <tr>
            <td>{param.name}</td>
            <td>{param.description}</td>
            <td>{param.type}</td>
            {param.model &&
              <td>
                <Code code={JSON.stringify(param.model, null, 2)} />
              </td>
            }
          </tr>

          {param.data &&
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      {param.data.map(data =>
                        <td key={`list-${data}`} className='data'>{data}</td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>}
        </tbody>
        ))}
    </table>
    <style jsx>{`
      .container {
        padding: 0.5em;
        background: ${theme.colors.white};
        border-radius: 3px;
        color: ${theme.darkText};
        margin: 0.5em 0;
      }

      table {
        text-align: left;
        width: 100%;
      }

      table tr:nth-child(odd) td {
        background-color: ${theme.colors.lighterGrey};
      }

      table td {
        padding: 0.5em;
      }

      .data {
        background-color: ${theme.colors.lighterBlue} !important;
      }

      @media (max-width: 549px) {
        table {
          display: block;
          overflow: scroll;
        }
      }

      `}</style>
  </div>
)

ParamsTable.propTypes = {
  params: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      model: PropTypes.object,
      data: PropTypes.array
    })
  ).isRequired
}

export default ParamsTable
