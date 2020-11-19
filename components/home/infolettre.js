import {useState} from 'react'

import Section from '../section'
import Button from '../button'

const Infolettre = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Section title='Geo.api.gouv.fr' subtitle='Inscrivez-vous pour suivre nos actualités' background='grey'>
      <div className='newsletter'>
        {isShown ? (
          <iframe height='660' width='100%' src='https://8d772127.sibforms.com/serve/MUIEAA7YkMefu1ab38jjvUgWSHiwoksAqgx2yg_BmpMSVn09EjcN_CUT4CiOXFHvYOcEIX8SICdFjixk2I5p3myaNN0p1pHkTo42aMgXgbiCUIgKMi97rR7zudslcsxYna5lwo5gJFijkx3BUgDFejxp7SHCdpYrKrlURH44yuQ5e7nYyPa59Ryq2rk9--Ead5qK4Kx1p7588xLF' />
        ) : (
          <Button type='button' onClick={() => setIsShown(!isShown)}>M’inscrire</Button>
        )}
      </div>

      <style jsx>{`
        .newsletter {
          display: flex;
          justify-content: center;
          margin: 1em 0;
        }

        iframe {
          border: none;
        }
        `}</style>
    </Section>
  )
}

export default Infolettre
