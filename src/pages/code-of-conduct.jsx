import React from 'react'
import { Layout } from '../components'
import TopoBlueBG from '../images/topo-blue.svg'
import { PageTitle, DividerTop, PageContent, Section } from '../elements'

const Coc = ({ location }) => (
  <>
    <Layout showLogo theme="lighten" location={location}>
      <DividerTop bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
      <PageContent height="auto">
        <Section bg="white">
          <PageTitle title="Code of Conduct" />
          <h2>Need help?</h2>
          <p>
            <strong>Preferred!</strong> Call or text 720-789-PYCO (7926). This rings staff phones and alerts the CoC
            Response Team via Slack.
          </p>
          <p>
            Alternatively contact staff personnel in person or by email - Zoë Farmer (
            <a href="mailto:zoe@dataleek.io">zoe@dataleek.io</a>) or Erin O'Connell (
            <a href="mailto:Erinocon5@gmail.com">Erinocon5@gmail.com</a>). All staff are prepared to handle the incident
            - just look for a crew member wearing a PyColorado STAFF shirt! All of our staff members are informed of the
            code of conduct policy and guide for handling harassment at the conference.
          </p>
          <h2>Who We Are</h2>
          <p>
            PyColorado is a community conference. It serves as a place to learn, grow, network and collaborate in the
            developer community.
          </p>
          <p>
            <strong>We value the participation of each member of the Python community</strong> and want all attendees to
            have an enjoyable and fulfilling experience. All attendees are expected to show respect and courtesy to
            other attendees throughout the conference and at all conference events, whether officially part of
            PyColorado or not.
          </p>
          <p>
            To make clear what is expected, all staff, attendees, speakers, exhibitors, organizers, and volunteers at
            any PyColorado event are required to conform to the following Code of Conduct. Organizers will enforce this
            code throughout the event.
          </p>

          <h2>Our Standards</h2>
          <p>
            PyColorado is dedicated to providing a positive conference experience for everyone, regardless of age,
            gender identity and expression, sexual orientation, disability, physical appearance, body size, ethnicity,
            nationality, race, or religion (or lack thereof), education or socio-economic status.
          </p>
          <p>
            <strong>Examples of behavior that contributes to creating a positive environment include:</strong>
            <ul>
              <li>Being kind to others.</li>
              <li>Behaving professionally.</li>
              <li>Assuming positive intent in others.</li>
              <li>Using welcoming and inclusive language.</li>
              <li>Being respectful of differing viewpoints and experiences.</li>
              <li>Gracefully accepting constructive criticism.</li>
              <li>Focusing on what is best for the community.</li>
              <li>Showing empathy towards other community members.</li>
            </ul>
          </p>
          <p>
            <strong>Examples of unacceptable behavior by participants include:</strong>
            <ul>
              <li>Harassment of conference participants in any form.</li>
              <li>Deliberate intimidation, stalking or following. </li>
              <li>Violent threats or language directed against another person.</li>
              <li>Sexual language and imagery in any conference venue, including talks. </li>
              <li>Insults or put downs.</li>
              <li>Sexist, racist, homophobic, transphobic or ableist jokes.</li>
              <li>Unwelcome sexual attention or advances.</li>
              <li>Unwelcome physical contact.</li>
              <li>Sustained disruption of talks or other events.</li>
              <li>Other conduct that is inappropriate for a professional audience.</li>
            </ul>
          </p>
          <p>
            <strong>Participants asked to stop any inappropriate behavior are expected to comply immediately.</strong>
            <br />
            <br />
            If a participant engages in behavior that violates this code of conduct, the conference organizers may take
            any action they deem appropriate. This will typically begin with a warning. If the behavior continues, the
            participant will be removed from the conference with no refund.
            <br />
            <br />
            Thank you for helping make this a welcoming, friendly event for all.
          </p>

          <h2>Reporting</h2>
          <p>
            <strong>
              If you feel this Code of Conduct has been violated, or have any other concerns, please immediately call or
              text 720-789-PYCO (7926). This rings staff phones and alerts the CoC Response Team via Slack.
            </strong>
          </p>
          <p>
            Alternatively contact staff personnel in person or by email - Zoë Farmer (
            <a href="mailto:zoe@dataleek.io">zoe@dataleek.io</a>) or Erin O'Connell (
            <a href="mailto:Erinocon5@gmail.com">Erinocon5@gmail.com</a>). All staff are prepared to handle the incident
            - just look for a crew member wearing a PyColorado STAFF shirt! All of our staff members are informed of the
            code of conduct policy and guide for handling harassment at the conference.
          </p>
          <p>
            Any Conference staff will be happy to help participants contact hotel/venue security or local law
            enforcement, provide escorts, or assist anyone experiencing harassment to feel safe for the duration of the
            conference.
          </p>
          <p>
            Please see the <a href="/coc-reporting">comprehensive CoC reporting procedures</a> for more details.
          </p>

          <h2>Weapons Policy</h2>
          <p>
            No weapons are allowed at conference venues, including but not limited to explosives (including fireworks),
            guns, and large knives such as those used for hunting or display, as well as any other item used for the
            purpose of causing injury or harm to others. Anyone seen in possession of one of these items will be asked
            to leave immediately, and will only be allowed to return without the weapon. Attendees are further expected
            to comply with all state and local laws on this matter.
          </p>

          <h2>Scope</h2>
          <p>
            All PyColorado attendees and participants are subject to this code of conduct. This includes PyColorado
            organizers and volunteers, as well as attendees of the tutorials, workshops, summits, poster sessions,
            receptions and sponsored or unofficial events.
            <br />
            <br />
            Exhibitors in the expo hall, sponsor or vendor booths or similar activities are also subject to the code of
            conduct. In particular, exhibitors should not use sexualized images, activities, or other material. Booth
            staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a
            sexualized environment.
          </p>

          <h2>License</h2>
          <p>
            This Code of Conduct is based heavily on the{' '}
            <a href="https://github.com/python/pycon-code-of-conduct/blob/master/code_of_conduct.md">
              PyCon Code of Conduct
            </a>{' '}
            licensed under a{' '}
            <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.
            <br />
            <br />
            It pulls language from the{' '}
            <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
              Geek Feminism wiki, created by the Ada Initiative and other volunteers
            </a>
            , which is under a Creative Commons Zero license as well as{' '}
            <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct">
              {' '}
              Contributor Covenant version 1.4
            </a>{' '}
            (licensed{' '}
            <a href="https://github.com/ContributorCovenant/contributor_covenant/blob/master/LICENSE.md">
              CC BY 4.0
            </a>), <a href="https://www.djangoproject.com/conduct/">Django Project Code of Conduct</a> (licensed{' '}
            <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY 3.0</a>),{' '}
            <a href="https://www.rust-lang.org/en-US/conduct.html">Rust Code of Conduct</a>, Citizen Code of Conduct
            (licensed <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY SA 3.0</a>),{' '}
            <a href="https://affectconf.com/coc/">Affect Conf Code of Conduct</a> (licensed{' '}
            <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY 3.0</a>).
          </p>
        </Section>
      </PageContent>
    </Layout>
  </>
)

export default Coc
