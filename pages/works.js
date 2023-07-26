import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbBuildingAlpha from "../public/iv_surface_new.png"
import thumbRecipeBook from "../public/recipe1.png"
import thumbWeather from "../public/weather.png"
import thumbRaushan from "../public/raushan.png"
import thumbGame from '../public/game.png'



const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="" title="BuildingAlpha" thumbnail={thumbBuildingAlpha}>
            BuildingAlpha is a single, integrated platform to search, retrieve, visualize and analyze financial options data.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id=""
            title="Foodnote"
            thumbnail={thumbRecipeBook}
          >
            A website where people can post, share, and discover new recipes, cooks, images, videos and how-to&apos;s based on the food they like and the friends they follow.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id=""
            title="RaushanLoads"
            thumbnail={thumbRaushan}
          >
            A freight shipping services platform where people and businesses can work with logistical companies to arrange the delivery of loads.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="" thumbnail={thumbWeather} title="Weatherio">
            A simple weather website that does it&apos;s job.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Heading as="h3" fontSize={20} mb={4}>
        Collaborations
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="" title="The Ode of the Times" thumbnail={thumbGame}>
            An RPG, quest based game. Collaborated with Meta software engineer Yermek Ibrayev. Work still in progress.
          </WorkGridItem>
        </Section>
        
        </SimpleGrid>
      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
