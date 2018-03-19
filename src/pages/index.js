import React from 'react'

import styled from 'react-emotion'

const ColorGroup = styled('div')`
  margin-bottom: 60px;
`

const ColorGrid = styled('div')`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(${props => props.columns ? props.columns : 3}, 1fr);
  
  @media (min-width: 426px) and (max-width: 1028px) {
    grid-gap: 30px;
  }
  
  @media (max-width: 425px) {
    grid-gap: 15px;
  }
`

const ColorCard = styled('div')`
  border: 1px solid #f7f7f7;
  border-radius: 8px;
  overflow: hidden;
  text-transform: uppercase;
`

const Content = styled('div')`
  padding: 20px;
  text-align: center;
  
`

const Color = (props) => (
  <ColorCard>
    <div
      style={{ backgroundColor: props.color, paddingTop: '100%' }}
    />
    <Content>
      {props.color}
    </Content>
  </ColorCard>
)

const IndexPage = () => (
  <div>
    <h1 style={{ margin: '80px 0' }}>Colors</h1>
    <ColorGroup>
      <h2>Primary</h2>
      <ColorGrid>
        <Color color={"#AFB592"} />
        <Color color={"#a6ac7f"} />
        <Color color={"#8f965d"} />
      </ColorGrid>
    </ColorGroup>
    <ColorGroup>
      <h2>Secondary</h2>
      <ColorGrid>
        <Color color={"#B5A491"} />
        <Color color={"#b69f86"} />
        <Color color={"#a38666"} />
      </ColorGrid>
    </ColorGroup>
    <ColorGroup>
      <h2>Tertiary</h2>
      <ColorGrid>
        <Color color={"#8E9A9B"} />
        <Color color={"#7d8d8f"} />
        <Color color={"#5b6f71"} />
      </ColorGrid>
    </ColorGroup>
    <ColorGroup>
      <h2>Quatrinary</h2>
      <ColorGrid>
        <Color color={"#B7B5B4"} />
        <Color color={"#817e7b"} />
        <Color color={"#605c58"} />
      </ColorGrid>
    </ColorGroup>
    <ColorGroup>
      <h2>Light</h2>
      <ColorGrid>
        <Color color={"#FCFAFA"} />
        <Color color={"#F4F3F2"} />
        <Color color={"#E5E0DC"} />
      </ColorGrid>
    </ColorGroup>
    <ColorGroup>
      <h2>Dark</h2>
      <ColorGrid columns="4">
        <Color color={"#777773"} />
        <Color color={"#605c58"} />
        <Color color={"#51514D"} />
        <Color color={"#191919"} />
      </ColorGrid>
    </ColorGroup>
  </div>
)

export default IndexPage
