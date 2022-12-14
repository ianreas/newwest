import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbvim from "../public/thumbvim1.png"

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to decide how much to charge for your project"
            thumbnail={thumbvim}
            href="https://twitter.com/iandoesitbetter/status/1582895688362299392?s=20&t=8-lEIc0GJlAeamP4sHlwQw"
          />
          
        </SimpleGrid>
      </Section>

      

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
