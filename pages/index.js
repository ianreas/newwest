import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
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
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
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
              src="/images/IMG_3679.jpeg"
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
          I am a freelance and full-stack software developer based in New York with a
          passion for building digital services. I never get tired of coding and I aspire to be a 10X developer. I have made it my life goal to help people and businesses by providing them with world class and professional service. For example, I built a full stack website called
          RaushanLoader
           for a Trucking company called Raushan Logistics which allowed their business to scale and resulted in a $2.1 million revenue increase. I am always very eager to learn new technologies and frameworks, as my number 1 talent is a talent for learning fast and effectively. You can check my works here: 
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
      ㅤ
      ㅤ
      ㅤ
      ㅤ




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
          <BioYear>2020</BioYear>
          Developed a new passion for software development
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working as a freelancer
        </BioSection>
        <BioSection>
        <BioYear>2022</BioYear>
          Worked in PrincetonDev developing games.
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
