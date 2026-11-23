import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a founding engineer based in New York!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Muhammed (Ian) Makhambet
          </Heading>
          <p>Founding Engineer ( AI Systems / Infrastructure / Product )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/muhammedik.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About my work
        </Heading>
        <Paragraph>
          I&apos;m a founding engineer at Probook, where I joined as engineer
          #2. I owned our AI voice agent end to end, starting with customer
          discovery and the spec: I built the LLM harness for live calls, the
          audio pipeline and the GPU serving fleet, and trained its LLM and TTS
          models with RL on production calls. I also built Probook&apos;s
          infrastructure on GCP and Kubernetes from scratch, and a distributed
          AI data pipeline that uses custom-trained models and OCR to clean
          unstructured CRM data.
        </Paragraph>
        <Paragraph>
          Before that I was the first hire at Fiber AI (YC S23), where I built
          the backend, the data platform, and a DAG workflow orchestration
          framework. Outside work, I write problems for ICPC regional contests,
          read classical literature, climb, and play some guitar.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Paragraph></Paragraph>

      <Section>
        <Heading as="h2" variant="page-title">
          Tech Stack, Languages, and Frameworks
        </Heading>
        <Heading as="h3" variant="section-title">
          AI and Machine Learning
        </Heading>
        <Paragraph>
          PyTorch, LLM and TTS fine-tuning, reinforcement learning, OCR and
          vision models, GPU model serving, evals.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Back-End
        </Heading>
        <Paragraph>
          Python, Go, TypeScript, Node.js, C++, SQL, PostgreSQL, Redis.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Infrastructure
        </Heading>
        <Paragraph>
          GCP, AWS, Kubernetes, Docker, Terraform, Helm, CI/CD, GitHub Actions.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Front-End
        </Heading>
        <Paragraph>React, Next.js, Tailwind.</Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Astana, Kazakhstan
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started trading options and built BuildingAlpha, a tool that scans
          options for inflated implied volatility.
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2023</BioYear>
          Worked as an independent software developer: client web applications
          and a Unity game for PrincetonDev.
        </BioSection>
        <BioSection>
          <BioYear>2023 - 2025</BioYear>
          Founding Engineer and first hire at Fiber AI (YC S23).
        </BioSection>
        <BioSection>
          <BioYear>2025 - Present</BioYear>
          Founding Engineer at Probook. Joined as engineer #2.
        </BioSection>
        <BioSection>
          <BioYear>2026</BioYear>
          Judge for the ICPC Rocky Mountain and Mid-Central regional contests.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Rock music, my cat Oliver, math, astronomy, trading options, and
          drawing.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ianreas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ianreas
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/IanCurt83130317" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @IanCurt83130317 (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://instagram.com/ian.thecheesestomper"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ian.thecheesestomper
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
