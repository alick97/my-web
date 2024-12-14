import { withInstall, withNoopInstall } from '@xz-ui/utils'
import Container from './src/container.vue'
import Main from './src/main.vue'
import Header from './src/header.vue'

const XZContainer = withInstall(Container, {
  Main,
  Header,
})

export default XZContainer
export const XZMain = withNoopInstall(Main)
export const XZHeader = withNoopInstall(Header)


export type ContainerInstance = InstanceType<typeof Container>
export type MainInstance = InstanceType<typeof Main>
export type HeaderInstance = InstanceType<typeof Header>
