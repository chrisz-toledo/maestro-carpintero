// src/engine/operations/types.ts

/**
 * OperationType
 * --------------
 * Canonical set of atomic operation types.
 * These are domain-only verbs. No UI meaning.
 */
export type OperationType =
  | 'measure'
  | 'crosscut'
  | 'rip'
  | 'drill'
  | 'countersink'
  | 'apply'
  | 'assemble'
  | 'fasten'
  | 'sand'

/**
 * OperationId
 * -----------
 * Stable identifier for a specific operation definition.
 * Must be deterministic and human-readable.
 *
 * Format recommendation:
 *   op-<verb>-<material?>-<qualifier?>
 * Example:
 *   op-crosscut-plywood
 */
export type OperationId = string

/**
 * Operation
 * ---------
 * Atomic, domain-only unit of work.
 * No UI, no steps, no project knowledge.
 */
export interface Operation {
  id: OperationId
  type: OperationType
}

/**
 * OperationList
 * -------------
 * Ordered list of operations produced by the Plan Engine
 * for a given project family.
 */
export type OperationList = Operation[]

/**
 * Invariants (ENFORCED BY ENGINE, NOT TYPES)
 * ------------------------------------------
 * - An Operation is atomic and indivisible
 * - An Operation performs exactly ONE technical transformation
 * - Operations do NOT know about:
 *   - UI
 *   - IKEA-style steps
 *   - Projects or users
 *   - Files or persistence
 */