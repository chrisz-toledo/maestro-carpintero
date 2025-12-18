// src/engine/plans/types.ts

import { OperationId } from '../operations/types'

export type PlanStep = {
  id: string
  operationIds: OperationId[]
}

export type Plan = {
  id: string
  steps: PlanStep[]
}