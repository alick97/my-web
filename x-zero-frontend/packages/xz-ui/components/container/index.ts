import { withInstall, withNoopInstall } from '@xz-ui/utils'
import Container from './src/container.vue'
import Main from './src/main.vue'
import Header from './src/header.vue'
import Footer from './src/footer.vue'
import Aside from './src/aside.vue'

const XZContainer = withInstall(Container, {
  Main,
  Header,
  Footer,
  Aside,
})

export default XZContainer
export const XZMain = withNoopInstall(Main)
export const XZHeader = withNoopInstall(Header)
export const XZFooter = withNoopInstall(Footer)
export const ElAside = withNoopInstall(Aside)

export type ContainerInstance = InstanceType<typeof Container>
export type MainInstance = InstanceType<typeof Main>
export type HeaderInstance = InstanceType<typeof Header>
export type FooterInstance = InstanceType<typeof Footer>
export type AsideInstance = InstanceType<typeof Aside>
