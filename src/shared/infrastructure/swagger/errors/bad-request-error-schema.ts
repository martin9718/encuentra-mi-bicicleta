/**
 * @swagger
 * components:
 *   schemas:
 *     BadRequestError:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *           description: HTTP status code
 *           example: 400
 *         errorCodeName:
 *           type: string
 *           description: Internal error code name
 *           example: "BAD_REQUEST_ERROR"
 *         message:
 *           type: string
 *           description: Description of the error
 *           example: "Validation failed. Some fields did not pass validation."
 *         details:
 *           type: array
 *           description: Additional details about the error
 *           items:
 *             type: object
 *             properties:
 *               property:
 *                 type: string
 *                 description: The parameter that did not pass validation
 *                 example: parentId
 *               constraints:
 *                 type: array
 *                 description: Details of why the validation did not pass
 *                 items:
 *                   type: string
 *                   example: "has to be a valid integer"
 */
