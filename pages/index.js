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
        Hello!!! I&apos;m a software developer based in New York!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Muhammed Makhambet
          </Heading>
          <p>Software Developer (Web-Developer / Software Engineer / Data Scientist)</p>
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
          Work
        </Heading>
        <Paragraph>
        As a freelance and full-stack software developer based in New York, I am passionate about building digital services that help businesses thrive.
         With an unwavering love for coding, I strive to become a 10X developer and provide world-class, professional service to my clients. My ultimate goal is to leverage my skills and expertise to make a positive impact on the world, one project at a time. In order to stay at the forefront of my field, I am constantly seeking out new technologies and frameworks, and my ability to learn quickly and effectively is one of my greatest strengths. I take pride in producing high-quality work and delivering exceptional results for my clients. You can check out my portfolio to see some of my past projects and get a sense of my capabilities.
           
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Paragraph>
      




      </Paragraph>

      <Section>
      <Heading as="h2" variant="page-title">
            Tech Stack, Languages, and Frameworks
          </Heading>
          <Heading as="h3" variant="section-title">
          Front-End
        </Heading>
        <Paragraph>
          JavaScript, TypeScript, Next.js, React, ChakraUI, Flutter, Tailwind, Bootstrap, CSS, HTML, Angular, Sass, Python, C#, Java, Blender, three.js, numpy, Matplotlib.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Back-End
        </Heading>
        <Paragraph>
          Firebase, GraphQL, Express.js, mongoDB, Flask, Node.js, Apache, SQL, PostgreSQL.
        </Paragraph>
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
          Started trading options and using statistical modeling to develop trading algorithms in order to analyze investment opportunities.  
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked as a freelancer
        </BioSection>
        <BioSection>
        <BioYear>2022</BioYear>
          Worked in PrincetonDev developing games.
        </BioSection>
        <BioSection>
        <BioYear>2023 - Present</BioYear>
          Working as a Full Stack Engineer for Fiber AI (YC S23).
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Rock music, my cat Oliver, math, astronomy, trading options, and drawing.
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
            <Link href="https://instagram.com/ian.thecheesestomper" target="_blank">
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
