import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

// A work card. With `href` the title links to the project in a new tab.
// Without `href` the card is plain text and an image, with no link.
export const WorkGridItem = ({ children, href, title, thumbnail }) => {
  const titleColor = useColorModeValue('pink.500', 'pink.700')
  const titleText = (
    <Text mt={2} fontSize={20} color={titleColor}>
      {title}
    </Text>
  )
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor={href ? 'pointer' : 'default'}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        {href ? (
          <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
            {titleText}
          </LinkOverlay>
        ) : (
          titleText
        )}
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
