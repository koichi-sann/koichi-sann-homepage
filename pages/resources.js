import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbReactJS from '../public/images/contents/reactjs.png'
import thumbReduxSaga from '../public/images/contents/ReduxSaga.png'
import thumbNext from '../public/images/contents/Next.png'
import thumbTypeScript from '../public/images/contents/TypeScript.png'

const Resources = () => (
  <Layout title="Resources">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Resources
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ReactJS"
            thumbnail={thumbReactJS}
            href="https://reactjs.org/"
          >
            A JavaScript library for building user interfaces
          </GridItem>
          <GridItem
            title="Redux-Saga"
            thumbnail={thumbReduxSaga}
            href="https://redux-saga.js.org/"
          >
            An intuitive Redux side effect manager. Easy to manage, easy to
            test, and executes efficiently.
          </GridItem>
          <GridItem
            title="Next"
            thumbnail={thumbNext}
            href="https://nextjs.org/"
          >
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more. No
            config needed.
          </GridItem>
          <GridItem
            title="TypeScript"
            thumbnail={thumbTypeScript}
            href="https://www.typescriptlang.org/"
          >
            TypeScript is a strongly typed programming language that builds on
            JavaScript, giving you better tooling at any scale.
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Resources
