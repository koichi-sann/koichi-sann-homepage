import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  Link,
  Icon,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin
} from 'react-icons/io5'
const Page = () => {
  return (
    <Layout title="Homepage">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a beginner web developer based in Belarus!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Koichi Sakikabara
            </Heading>
            <p>Digital Artificer ( Artist / Developer / Gamer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/Koichi.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Koichi is a freelance and react developer based in Grodno who wants
            to develop applications that help people. He learns to plan, design
            and launch products. When not online, he loves listen to hardcore
            music and play videogames. Currently, he is learing ReactJS,
            TypeScript, Redux/Redux-saga.{' '}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Grodno, Belarus.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Completed the Gymnasium №9
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed program of Specialty 2-40 01 01 Information Technology
            Software at Grodno State Polytechnic College
          </BioSection>
          <BioSection>
            <BioYear>2019 to present</BioYear>
            Self-study technologies: React, Redux, Recoil, TypeScript
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Videogames , Web Development, React , Svelta, Machine
            Learning
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/koichi-sann" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @koichi-sann
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/mark-vasilyev-49570921b/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/cooptedcod/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @cooptedcod
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discordapp.com/users/273096544599670784"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @幸一 (Kōichi)#7522
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
