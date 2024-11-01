/**
 * @swagger
 * components:
 *   schemas:
 *     BikeStation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique ID of the bike station
 *           example: 2
 *         name:
 *           type: string
 *           description: The name of the bike station
 *           example: "(ZPN-067) C. Chimalhuacán / Av. López Mateos"
 *         latitude:
 *           type: number
 *           description: The latitude coordinate of the bike station
 *           example: 20.6515919
 *         longitude:
 *           type: number
 *           description: The longitude coordinate of the bike station
 *           example: -103.4027691
 *         status:
 *           type: string
 *           description: The current status of the bike station
 *           enum: ['IN_SERVICE', 'NOT_IN_SERVICE']
 *           example: 'IN_SERVICE'
 *         distance:
 *           type: number
 *           description: The calculated distance to the bike station from a specified location, in kilometers
 *           example: 1.64
 */
