import Components from './component'
import { makeInstaller } from './make-installer'
import Plugins from './plugin'

export default makeInstaller([...Components, ...Plugins])
