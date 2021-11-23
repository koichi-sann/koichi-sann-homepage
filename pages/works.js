import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbReactPizza from '../public/images/works/reactpizza.png'
import thumbReactTodo from '../public/images/works/reacttodo.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="reactpizza"
              title="React-Pizza"
              thumbnail={thumbReactPizza}
            >
              The first project of Koichi. Techologies: React, Redux,
              Redux-thunk, Sass, React-router-dom, PropTypes, Axios
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="reacttodo"
              title="React-Todo"
              thumbnail={thumbReactTodo}
            >
              The second project of Koichi. Techologies: React, Redux,
              Redux-saga, Sass, React-router-dom, TypeScript, Axios
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
