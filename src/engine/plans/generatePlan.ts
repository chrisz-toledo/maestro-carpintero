// src/engine/plans/generatePlan.ts

import type { Plan } from './type'
import { OperationId } from '../operations/types'

export function generateSimpleBoxPlan(): Plan {
  return {
    id: 'simple-box',
    steps: [
      { id: 'layout', operationIds: ['op-mark-layout'] as OperationId[] },
      { id: 'cut', operationIds: ['op-crosscut-plywood', 'op-rip-plywood'] },
      { id: 'assemble', operationIds: ['op-apply-adhesive', 'op-clamp-assemble', 'op-drive-screw'] },
      { id: 'finish', operationIds: ['op-sand-edge'] },
    ],
  }
}