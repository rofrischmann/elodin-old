/* @flow */
import enforceLonghand from './enforceLonghand'

import type { PluginInterface } from '../../../flowtypes/PluginInterface'

type Options = {
  allowSingle: boolean,
}

// TODO: enable for prefixed shorthand/longhands
export default function shorthandProperty(options: Options): Function {
  return (pluginInterface: Object) => enforceLonghand(pluginInterface, options)
}
