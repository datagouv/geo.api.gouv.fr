import Section from './section'

const About = () => (
  <Section>
    <div className='row'>
      <div className='prose'>
        <h2>À propos du site</h2>
        <h3>À quoi sert ce site ?</h3>
        <p>Ce site est destiné à :</p>
        <ul>
          <li>Cypriis funeribus caesorumque navem navem contigui,</li>
          <li>Uni insignem putet una exemplo,</li>
          <li>Quod capite aut militarium rumore,</li>
          <li>Crebris in ipsis vestium decus.</li>
        </ul>
        <h3>Qui gère ce site ?</h3>
        <p>Le site geo.api.data.gouv.fr est géré par la mission Etalab de la DINSIC.</p>

        <h2>Les données</h2>

        <h3>Pertinax solido et alacriter anceps ?</h3>
        <p>Quis enim aut eum diligat quem metuat, aut eum a quo se metui putet? Coluntur tamen simulatione dumtaxat ad tempus. Quod si forte, ut fit plerumque, ceciderunt, tum intellegitur quam fuerint inopes amicorum. Quod Tarquinium dixisse ferunt, tum exsulantem se intellexisse quos fidos amicos habuisset, quos infidos, cum iam neutris gratiam referre posset.</p>

        <h3>Sed nos de parentis autem luctusque ab declarat existimatio audietis ?</h3>
        <p>L’outil de signalement d’erreur est en cours de développement.<br />En attendant son ouverture, vous pouvez signaler une erreur avec l’outil <a href='https://espacecollaboratif.ign.fr/'>Espace Collaboratif de l’IGN</a> ou auprès du <a href='http://www.laposte.fr/sna'>Service National de l’Adresse</a> de La Poste.</p>

        <h2>Socero artissime tenebatur diebus lapsus Galli Galli tenebatur paulo per ?</h2>
        <p>Et fictis orbis periclitetur eius asperitati et laesa amplitudo inpendio vel vita blanditiae quantitati inminuta proximorum amplitudo laesa salute imperii.</p>

        <h2>Sed in verum sed captis suapte locis quoque navigerum Pompeius ?</h2>
        <p>Quae primigenia quae Assyria primigenia :</p>
        <ul>
          <li>Beate indulta ante ac indulta</li>
          <li>Onerariam omnibusque et supremos nullius</li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      .row {
        display: flex;
      }

      .prose {
        font-size: 1.1em;
      }

      .prose ul {
        list-style: circle;
      }
      `}</style>
  </Section>
)

export default About
