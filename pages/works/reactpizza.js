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
          An Application made in 2021. Koichi made it according on the Archakov
          blog tutorial as his first <q>big</q> project
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/koichi-sann/react-pizza">
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              ReactJS, React-router-dom, Redux, Redux-thunk, Sass, Axios
            </span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://youtube.com/playlist?list=PL0FGkDGJQjJFMRmP7wZ771m1Nx-m2_qXq">
              Playlist tutorial <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/reactpizza.png" alt="ReactPizza" />
      </Container>
    </Layout>
  )
}

export default Work
