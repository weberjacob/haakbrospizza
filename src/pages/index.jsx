import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'


const Index = () => (
  <>
    <Layout />
    <Parallax pages={1}>
      <Hero offset={0}>
        <BigTitle>
          Welcome to,<br /> Haak Bros Pizza.
        </BigTitle>
        <Subtitle>2 brothers with all you need to know about<br /> <em>frozen</em> pizza 🍕 .</Subtitle>
      </Hero>
    </Parallax>
  </>
)

export default Index
