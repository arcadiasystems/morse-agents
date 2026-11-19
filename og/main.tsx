import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/tokens.css'
import '../src/styles/base.css'
import '../src/styles/agents.css'
import './card.css'
import './object.css'
import { TraceMark } from '../src/base/TraceMark'
import { Rig } from '../src/components/Hero'
import { Card } from './Card'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card
      product="agents"
      Mark={TraceMark}
      headline={
        <>
          One skeleton.
          <br />
          <em>Swap the brain.</em>
        </>
      }
      tagline="An open agent template for developers."
      domain="agents.morsecms.xyz"
    >
      <Rig />
    </Card>
  </StrictMode>,
)
