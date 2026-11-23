import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
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

      <Section>
        <Box
          borderRadius="lg"
          mb={6}
          p={4}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Text fontSize={20} color={useColorModeValue('pink.500', 'pink.700')}>
            Agent Fleet
          </Text>
          <Text fontSize={14}>
            Runs Claude Code and Codex sessions across a laptop and VMs with no
            central server. Daemons claim tasks from a Postgres queue with
            leases, and an iOS app answers agent prompts by push.
          </Text>
        </Box>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            href="https://www.meowpaas.com/"
            title="MeowPaas"
            thumbnail={thumbMeowPaas}
          >
            Heroku-style deploys on Kubernetes, in Go. One request builds a
            repo into a container, runs it on EKS in a per-user namespace,
            opens a PR with a generated CI workflow, and streams logs and a
            live service map.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            href="https://building-alpha-new-ui.vercel.app"
            title="BuildingAlpha"
            thumbnail={thumbBuildingAlpha}
          >
            A tool that scans options for inflated implied volatility on the 3D
            volatility surface. I used it to run short-volatility strategies
            based on statistical models.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        Collaborations
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem title="The Ode of the Times" thumbnail={thumbGame}>
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
