import Section from './section'

const Cgu = () => (
  <Section>
    <div className='row'>
      <div>
        <h2>Conditions Générales d’Utilisation</h2>
        <p>Tout utilisateur de la plateforme reconnaît expressément souscrire sans réserve aux présentes conditions générales d’utilisation (CGU). L’utilisation de la plateforme suppose le respect total des lois, règlements et tous les autres textes juridiques en vigueur. Il conviendra de respecter l’ensemble de ces dispositions et règles en toutes circonstances. A défaut, l’utilisateur est conscient qu’il risque des sanctions civiles, pénales et/ou disciplinaires.</p>

        <h4>Disponibilité du site</h4>
        <p>
          Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet; illud potius praecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare inciperemus eum, quem aliquando odisse possemus. Quin etiam si minus felices in diligendo fuissemus, ferendum id Scipio potius quam inimicitiarum tempus cogitandum putabat.
        </p>

        <h4>Accès aux données personnelles</h4>
        <p>
          Quid? qui se etiam nunc subsidiis patrimonii aut amicorum liberalitate sustentant, hos perire patiemur? An, si qui frui publico non potuit per hostem, hic tegitur ipsa lege censoria; quem is frui non sinit, qui est, etiamsi non appellatur, hostis, huic ferri auxilium non oportet? Retinete igitur in provincia diutius eum, qui de sociis cum hostibus, de civibus cum sociis faciat pactiones, qui hoc etiam se pluris esse quam collegam putet, quod ille vos tristia voltuque deceperit, ipse numquam se minus quam erat, nequam esse simularit. Piso autem alio quodam modo gloriatur se brevi tempore perfecisse, ne Gabinius unus omnium nequissimus existimaretur.
        </p>

        <h4>Stockage des données soumises à l’API</h4>
        <p>Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas poterat in solido locari cunctorum.</p>
        <p>Fuerit toto in consulatu sine provincia, cui fuerit, antequam designatus est, decreta provincia. Sortietur an non? Nam et non sortiri absurdum est, et, quod sortitus sis, non habere. Proficiscetur paludatus? Quo? Quo pervenire ante certam diem non licebit. ianuario, Februario, provinciam non habebit; Kalendis ei denique Martiis nascetur repente provincia.</p>

      </div>
      <div>
        <h2>Nous contacter</h2>
        <p><a href='mailto:contact@geo.api.gouv.fr'>contact@geo.api.gouv.fr</a></p>

        <h2>Mentions légales</h2>
        <h4>Editeur</h4>
        <p>Direction interministérielle du numérique et du système d’information et de communication de l’État (DINSIC)<br />
        20, avenue de Ségur<br />
        75007 Paris<br />
        dinsic-sec.sgmap [à] modernisation.gouv.fr</p>

        <p>Directeur de la publication : M. Henri Verdier, DINSIC</p>

        <h4>Hébergeur</h4>
        <p>Société OVH<br />
        SAS au capital de 10 059 500 €<br />
        RCS Lille Métropole 424 761 419 00045<br />
        Code APE 6311Z<br />
        Siège social : 2 rue Kellermann - 59100 Roubaix - France.</p>
      </div>

    </div>
    <style jsx>{`
      .row {
        display: flex;
      }

      .row > div:nth-child(2) {
        width: 80%
        margin-left: 3em;
      }

      @media (max-width: 749px) {
        .row {
          flex-wrap: wrap;
        }

        .row > div:nth-child(2) {
          width: 100%;
          margin-left: 0;
        }
      }
      `}</style>
  </Section>
)

export default Cgu
