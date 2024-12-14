import { withInstall, withNoopInstall } from '@xz-ui/utils'
import Container from './src/container.vue'
import Main from './src/main.vue'

const XZContainer = withInstall(Container, {
  Main
})

export default XZContainer
export const XZMain = withNoopInstall(Main)


export type ContainerInstance = InstanceType<typeof Container>
export type MainInstance = InstanceType<typeof Main>

