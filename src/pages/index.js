import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Duy Bui`, `Interaction Design`]} />
    <h1>Duy Bui</h1>
    <p className={'shake-crazy iad'}>Interaction Designer</p>
    <br/>
    <a href="mailto:hello@duy.ch">hello@duy.ch</a>
    <ul class="links">
      <li><a href="https://blog.duy.ch"><Emoji symbol="✏️" label="pencil"/> interaction design blog</a></li>
    <li><a href="https://bdc.iad17.wtf"><Emoji symbol="🍏" label="apple"/> biodesign challenge</a></li>
    <li><a href="https://biologicalcomputinglab.com"><Emoji symbol="🧫" label="petri dish"/> biological computing lab</a></li>
      <li><a href="https://playground.duy.ch"><Emoji symbol="🤪" label="zany face"/> playground</a></li>
    </ul>
  </Layout>
)

export default IndexPage
