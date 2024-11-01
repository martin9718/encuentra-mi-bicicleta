/**
 * @swagger
 * components:
 *   schemas:
 *     UnexpectedError:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *           description: HTTP status code
 *           example: 500
 *         errorCodeName:
 *           type: string
 *           description: Internal error code name
 *           example: "UNEXPECTED_ERROR"
 *         message:
 *           type: string
 *           description: Description of the error
 *           example: "An unexpected error occurred. Please try again later."
 */
