import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbBuildingAlpha from '../public/iv_surface_new.png'
import thumbMeowPaas from '../public/meowpaas.png'
import thumbGame from '../public/game.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id=""
            title="BuildingAlpha"
            thumbnail={thumbBuildingAlpha}
          >
            BuildingAlpha is a single, integrated platform to search, retrieve,
            visualize and analyze financial options data.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="" title="MeowPaas" thumbnail={thumbMeowPaas}>
            A cloud deployment platform with enterprise-grade performance
            optimization built into its core. Built on top of EC2, it uses
            Kubernetes to deploy applications that require container-level
            optimizations to achieve maximum performance for different
            workloads.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Heading as="h3" fontSize={20} mb={4}>
        Collaborations
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id=""
            title="The Ode of the Times"
            thumbnail={thumbGame}
          >
            An RPG, quest based game. Collaborated with Meta software engineer
            Yermek Ibrayev. Work still in progress.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
