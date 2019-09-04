import React from 'react'
import { Layout } from '../components'
import TopoBlueBG from '../images/topo-blue.svg'
import { PageTitle, DividerTop, PageContent, Section } from '../elements'

const CocReporting = ({ location }) => (
  <>
    <Layout showLogo theme="lighten" location={location}>
      <DividerTop bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
      <PageContent height="auto">
        <Section bg="white">
          <PageTitle title="CoC Reporting Procedures" />
          <p>
            This page has been greatly adapted from PyBay's CoC procedures which were in turn adapted from PyCon's CoC
            procedures.
          </p>
          <h2>General Guidelines for all Staff and Attendees</h2>
          <p>
            <strong>All reports are confidential - please do not share them outside of conference staff.</strong>
          </p>
          <p>
            When reporting the event to the Incident Response Team, try to gather as much information as available, but
            do not interview people about the incident - the Incident Response Team will assist you in writing the
            report/collecting information.
          </p>
          <p>
            The important information consists of:
            <ul>
              <li>Identifying information (name/badge number) of the participant doing the harassing.</li>
              <li>The behavior that was in violation.</li>
              <li>The approximate time of the behavior (if different than the time the report was made).</li>
              <li>The circumstances surrounding the incident.</li>
              <li>Other people involved in the incident.</li>
            </ul>
          </p>
          <p>
            If everyone is presently physically safe, only involve law enforcement or security at a victim's request. If
            you do feel your safety is in jeopardy please do not hesitate to contact local law enforcement by dialing
            911.
          </p>
          <h2>CoC Incident Response Team Guidelines</h2>
          <p>
            <strong>
              Be sure to have a good understanding of our <a href="/code-of-conduct">Code of Conduct policy</a>.
            </strong>
          </p>
          <p>
            Understand what is expected from an attendee that wants to report a harassment incident. Try to get as much
            of the incident in written form by the reporter. If you cannot, transcribe it yourself as it was told to
            you.
          </p>
          <p>Gather the important information listed above in the General Guidelines section.</p>
          <h3>Prepare an initial response to the incident.</h3>
          <p>
            This initial response is very important and will set the tone for PyColorado. Depending on the
            severity/details of the incident, please <strong>DO</strong> follow these guidelines:
            <ul>
              <li>
                <strong>DO</strong> summon security or police if there is any general threat to attendees or if the
                safety of anyone including conference staff is in doubt.
              </li>
              <li>
                <strong>DO</strong> offer the victim a private place to sit.
              </li>
              <li>
                <strong>DO</strong> ask them "Is there a friend or trusted person who you would like to be with you?"
                (If so, arrange for someone to fetch this person.)
              </li>
              <li>
                <strong>DO</strong> ask them "How can I help?"
              </li>
              <li>
                <strong>DO</strong> provide them with your list of emergency contacts if they need help later.
              </li>
            </ul>
          </p>
          <p>
            Please <strong>DO NOT</strong> do these things:
            <ul>
              <li>
                Do <strong>NOT</strong> overtly invite them to withdraw the complaint or mention that withdrawal is OK.
                This suggests that you want them to do so, and is therefore coercive. "If you're OK with it [pursuing
                the complaint]" suggests that you are by default pursuing it and is not coercive.
              </li>
              <li>
                Do <strong>NOT</strong> ask for their advice on how to deal with the complaint. This is a staff
                responsibility.
              </li>
              <li>
                Do <strong>NOT</strong> offer them input into penalties. This is a staff responsibility.
              </li>
            </ul>
          </p>
          <h3>Post Report Meeting</h3>
          <p>
            Once a Code of Conduct violation is reported, the CoC Incident Response team should meet. The main
            objectives of this meeting are to find out the following:
            <ul>
              <li>What happened?</li>
              <li>Are we doing anything about it?</li>
              <li>Who is doing those things?</li>
              <li>When are they doing them?</li>
            </ul>
          </p>
          <h3>Enforcement</h3>
          <p>
            After the Incident Response meeting and discussion, an Incident Response Lead (either Zoë or Erin) will
            communicate with the alleged harasser. Make sure to inform them of what has been reported about them. Allow
            the alleged harasser to give their side of the story. After this point, if the report stands, let the
            harasser know what actions will be taken against them.
          </p>
          <h3>Possible Actions</h3>
          <p>
            Below are actions that may be taken as the result of a Code of Conduct violation (note that this list is{' '}
            <strong>NOT</strong> comprehensive):
            <ul>
              <li>
                Warning the harasser to cease their behavior and that any further reports will result in sanctions.
              </li>
              <li>
                Requiring that the harasser avoid any interaction with, and physical proximity to, their victim for the
                remainder of the event.
              </li>
              <li>Ending a talk that violates the policy early.</li>
              <li>Not publishing the video or slides of a talk that violated the policy.</li>
              <li>
                Not allowing a speaker who violated the policy to give (further) talks at the event now or in the
                future.
              </li>
              <li>Immediately ending any event volunteer responsibilities and privileges the harasser holds.</li>
              <li>
                Requiring that the harasser not volunteer for future events your organization runs (either indefinitely
                or for a certain time period).
              </li>
              <li>
                Requiring that the harasser refund any travel grants and similar they received (this would need to be a
                condition of the grant at the time of being awarded).
              </li>
              <li>Requiring that the harasser immediately leave the event and not return.</li>
              <li>Banning the harasser from future events (either indefinitely or for a certain time period).</li>
              <li>Removing a harasser from membership of relevant organizations.</li>
            </ul>
          </p>
          <h3>Post Enforcement Steps</h3>
          <p>
            Give harasser an opportunity to appeal by email to a conference chair, but in the meantime the report
            stands. <strong>DO NOT</strong> encourage an apology from the harasser.
          </p>
          <p>
            It is critically important how we deal with the incident publicly. Our policy is to make sure that everyone
            aware of the initial incident is also made aware that it is not according to policy and that official action
            has been taken - while still respecting the privacy of individual attendees. When speaking to individuals
            (those who are aware of the incident, but were not involved with the incident) about the incident, please
            leave out all but the relevant details.
          </p>
          <p>
            Depending on the incident, the conference chair or their designate may decide to make one or more public
            announcements. If necessary, this will be done with a short announcement before a session and/or through
            other channels. No one other than the conference chair or someone delegated authority from the conference
            chair should make any announcements.
          </p>
          <p>
            If some attendees were angered by the incident, it is best to apologize to them that the incident occurred
            to begin with. If there are residual hard feelings, suggest to them to write an email to the conference
            organizer.
          </p>
          <h2>License</h2>
          <p>
            Much of this content is licensed under CC Attribution-ShareAlike. See
            https://creativecommons.org/licenses/by-sa/3.0/legalcod
          </p>
        </Section>
      </PageContent>
    </Layout>
  </>
)

export default CocReporting
