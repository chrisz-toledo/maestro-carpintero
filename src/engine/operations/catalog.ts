// src/engine/operations/catalog.ts

import { Operation } from './types'

export const OPERATION_CATALOG: readonly Operation[] = [
  { id: 'op-mark-layout', type: 'measure' },
  { id: 'op-crosscut-plywood', type: 'crosscut' },
  { id: 'op-rip-plywood', type: 'rip' },
  { id: 'op-drill-pilot-hole', type: 'drill' },
  { id: 'op-countersink', type: 'countersink' },
  { id: 'op-apply-adhesive', type: 'apply' },
  { id: 'op-clamp-assemble', type: 'assemble' },
  { id: 'op-drive-screw', type: 'fasten' },
  { id: 'op-sand-edge', type: 'sand' },
]