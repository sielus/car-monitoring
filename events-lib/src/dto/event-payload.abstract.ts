/**
 * Main level of each event
 * @interface
 * @example
 * // Example JSON structure:
 * {
 *     "createdAt": "2024-05-01T12:00:00Z",
 *     "data": eventData
 * }
 */
export interface EventPayloadAbstract {
    createdAt: Date;
}
