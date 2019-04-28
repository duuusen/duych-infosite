import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Duy Bui`, `Interaction Design`]} />
    <h1>Duy Bui</h1>
    <p className={'shake-crazy iad'}>
      <span className={'i'}>I</span>
      <span className={'n'}>n</span>
      <span className={'t'}>t</span>
      <span className={'e'}>e</span>
      <span className={'r'}>r</span>
      <span className={'a'}>a</span>
      <span className={'c'}>c</span>
      <span className={'t2'}>t</span>
      <span className={'i2'}>i</span>
      <span className={'o'}>o</span>
      <span className={'n2'}>n</span>
      <span> </span>
      <span className={'d'}>D</span>
      <span className={'e2'}>e</span>
      <span className={'s'}>s</span>
      <span className={'i3'}>i</span>
      <span className={'g'}>g</span>
      <span className={'n3'}>n</span>
      <span className={'e3'}>e</span>
      <span className={'r2'}>r</span>
    </p>
    <br/>
    <a href="mailto:hello@duy.ch">hello@duy.ch</a>
    <br/>
    <a href="https://github.com/duuusen">github.com/duuusen</a>
    <br/>
    <a href="https://instagram.com/duuusen">instagram.com/duuusen</a>
    <ul class="links">
      <li><a href="https://blog.duy.ch"><Emoji symbol="✏️" label="pencil"/> interaction design blog</a></li>
    <li><a href="https://bdc.iad17.wtf"><Emoji symbol="🍏" label="apple"/> biodesign challenge</a></li>
    <li><a href="https://biologicalcomputinglab.com"><Emoji symbol="🧫" label="petri dish"/> biological computing lab</a></li>
      <li><a href="https://playground.duy.ch"><Emoji symbol="🤪" label="zany face"/> playground</a></li>
    </ul>
  </Layout>
)

export default IndexPage
