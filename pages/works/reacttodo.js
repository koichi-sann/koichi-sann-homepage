import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="React-Pizza">
      <Container>
        <Title>
          React-Pizza <Badge>2021</Badge>
        </Title>
        <P>
          An application created in 2021. Koichi made it according on the
          Archakov blog tutorial as his first attempt at learning React.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/koichi-sann/react-todo-app">
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Learning</Meta>
            <span>React Hooks, Styled Components.</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://youtube.com/playlist?list=PL0FGkDGJQjJGBcY_b625HqAKL4i5iNZGs">
              Playlist tutorial <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/reacttodo.png" alt="ReactTodo" />
      </Container>
    </Layout>
  )
}

export default Work
