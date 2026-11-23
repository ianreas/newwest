import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Muhammed (Ian) Makhambet. Founding engineer in New York: AI systems, infrastructure and product."
        />
        <meta name="author" content="Muhammed (Ian) Makhambet" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Muhammed (Ian) Makhambet" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://muhammedmakhambet.com/images/muhammedik.jpg"
        />
        <meta property="og:site_name" content="Muhammed (Ian) Makhambet" />
        <meta property="og:title" content="Muhammed (Ian) Makhambet" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://muhammedmakhambet.com/images/muhammedik.jpg"
        />
        <title>Muhammed (Ian) Makhambet</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.sm" pt={14} >
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
