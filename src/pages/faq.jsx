import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Layout, NavBar } from '../components'
import TopoBlueBG from '../images/topo-blue.svg'
import { PageTitle, DividerTop, PageContent, Section } from '../elements'
import faq from '../data/faq.json'

const Wrapper = styled.div`
  ${tw`relative no-underline mb-8 text-white`};
  background: white;
  border: solid 5px #1f506e;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  &:hover {
    ${tw`shadow-lg`};
    transform: translateY(-1px);
    transition: all 250ms ease-in;
  }

  div.answer {
    opacity: 0;
    max-height: 0px;
    overflow: hidden;
    transition: all 250ms ease-in-out;

    &.expanded {
      ${tw`p-6`};
      opacity: 1;
      overflow: auto;
      max-height: 100%;
    }
  }

  &.expanded {
    ${tw`shadow-lg`};
    transform: translateY(-1px);
  }
`

const Question = styled.div`
  ${tw`text-white text-xl md:text-2xl font-serif font-bold p-6`};
  background: #1f506e;
`

const Text = styled.div`
  ${tw`text-black font-sans text-xl leading-normal`};
`

const FAQCard = ({ question, children, expand, className }) => (
  <Wrapper onClick={expand} className={className}>
    <Question>{question}</Question>
    <Text className={`answer ${className}`}>{children}</Text>
  </Wrapper>
)

class FAQ extends Component {
  state = {
    expandedQuestionKey: null,
  }

  toggleExpandedQuestion = key => {
    console.log(key)
    this.setState(prevState => ({
      expandedQuestionKey: prevState.expandedQuestionKey === key ? null : key,
    }))
    this.setState({ expandedQuestionKey: key })
  }

  render() {
    const { expandedQuestionKey } = this.state
    const { location } = this.props

    return (
      <>
        <Layout>
          <NavBar showLogo theme="lighten" location={location} />
          <DividerTop bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
          <PageContent height="auto">
            <Section bg="white">
              <PageTitle title="FAQ" />

              {faq.map(section => (
                <div key={section.name}>
                  <h2>{section.name}</h2>
                  {section.questions.map(q => (
                    <FAQCard
                      key={q.question}
                      question={q.question}
                      expand={() => this.toggleExpandedQuestion(q.question)}
                      className={expandedQuestionKey === q.question ? 'expanded' : null}
                    >
                      <div dangerouslySetInnerHTML={{ __html: q.answer }} />
                    </FAQCard>
                  ))}
                </div>
              ))}
            </Section>
          </PageContent>
        </Layout>
      </>
    )
  }
}

export default FAQ
