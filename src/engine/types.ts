// src/engine/plans/types.ts

import { OperationId } from './operations/types'

export interface PlanStep {
  id: string
  operationIds: OperationId[]
}

export interface Plan {
  id: string
  steps: PlanStep[]
}