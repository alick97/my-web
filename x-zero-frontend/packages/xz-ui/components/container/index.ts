import { withInstall } from '@xz-ui/utils'
import Container from './src/container.vue'

const XZContainer = withInstall(Container, {})

export default XZContainer
export type ContainerInstance = InstanceType<typeof Container>
