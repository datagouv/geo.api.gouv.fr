import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'

import piwik from '../lib/piwik'

import Meta from '../components/meta'
import MainStyle from '../components/main-style'
import Header from '../components/header'
import Footer from '../components/footer'

import theme from '../styles/theme'

class Layout extends React.Component {
  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string
  }

  static defaultProps = {
    children: null,
    title: null,
    description: null
  }

  componentDidMount() {
    const {router} = this.props

    setTimeout(() => {
      piwik.track(router)
    }, 400)
  }

  render() {
    const {title, description, children} = this.props

    return (
      <div>
        <Meta title={title} description={description} />
        <MainStyle />
        <Header />
        <main>
          { children }
        </main>
        <Footer />
        <style jsx>{`
          div {
             display: flex;
             flex-direction: column;
             min-height: 100vh;
             background-color: ${theme.colors.white};
           }

           main {
             flex: 1;
           }
        `}</style>
      </div>
    )
  }
}

export default withRouter(Layout)
