declare class Sketch2D {
  /**
   * An array of Path2D objects, JSON received from the toJSON method, or another Sketch2D object. This will not create
   * a copy if a Sketch2D is supplied. Throws exception if JSON not valid
   *
   * @param other
   */
  constructor(other?: [Path2D] | JSON | Sketch2D);

  /**
   * Calculates the bounds of the Sketch2D object
   */
  bounds(): Box2D;

  /**
   * Clones the Sketch2D object
   */
  clone(): Sketch2D;

  /**
   * Combines this sketch with supplied sketch(es) or paths.
   *
   * @param sketches - One or more sketches.
   * @return Sketch2D
   */
  combine(sketches: Sketch2D | [Sketch2D]): Sketch2D;

  /**
   * The array of the Path2D objects.
   */
  paths: [Path2D];

  /**
   *
   * @param boundary - A boundary to project onto the Sketch2D.
   * @param projection - The projection matrix to use for the projection.
   * @return Sketch2D
   */
  projectBoundary(boundary: Mesh3DBoundary, projection: Matrix3D): Sketch2D;

  /**
   * Returns the JSON representation of the object that can be serialized. The resulting JSON can be passed into the
   * constructor later on to reconstruct the object.
   */
  toJSON(): JSON;

  /**
   * Gets an array of connected path outlines for all the paths in the sketch. If the first and last points are the same then the path is closed.
   *
   * @param tolerance - A chord height deviation to use for discretizing nonlinear curves.
   */
  toPolygons(tolerance?: number);

  /**
   * Transforms all the paths in the sketch by the transform.
   *
   * @param matrix - A Matrix or an Array of 9 numbers.
   */
  transform(matrix: Matrix2D | [number]): Sketch2D;

  windingRule: WindingRule;
}

declare class Box2D implements IDebuggable {
  constructor();

  /**
   * Computes and returns the midpoint of the box.
   */
  center(): Point2D;

  /**
   * Clones the Box2D.
   */
  clone();

  /**
   * Instructs the object to present useful debugging information via a series of calls to Debug.point, Debug.line and
   * Debug.triangles.
   */
  debug();

  /**
   * Gets the length of the box. It corresponds to the x dimension.
   */
  length(): number;

  /**
   * Gets the width of the box. It corresponds to the y dimension.
   */
  width(): number;

  /**
   * The bottom left point of the box.
   */
  min: Point2D;

  /**
   * The top right point of the box
   */
  max: Point2D;
}

declare class Point2D implements IDebuggable {
  constructor(x: number, y: number);

  /**
   * Creates a copy of the object and returns it.
   */
  clone(): Point2D;

  /**
   * Instructs the object to present useful debugging information via a series of calls to Debug.point, Debug.line and
   * Debug.triangles.
   */
  debug();

  /**
   * Calculates the distance to another point
   *
   * @param point - the other point
   */
  distanceTo(point: Point2D): number;

  /**
   * Returns true if the objects are equal within tolerance (1e-6), otherwise false.
   * @param other - An object to compare this object to.
   */
  equals(other: Point2D | object): boolean;

  /**
   * Moves the point in the direction specified.
   *
   * @param direction - A direction of movement defined by a Vector2D, an Array with 2 values (X and Y), or a number
   * representing the X offset.
   * @param y - The Y offset to move in, when only the X offset is specified as the first argument.
   */
  move(direction: Vector2D | number | [number], y?: number): Point2D;

  /**
   * Rotates the point around an optionally specified point. If no origin is specified then 0,0 is assumed.
   * Right-handed system is used implying the positive angles result in counter-clockwise orientations.
   *
   * @param angle - The angle of rotation in radians
   * @param origin - An optional origin of rotation defined by a Point2D, an Array with 2 values (X and Y), or a number
   * representing the X value.
   * @param y - The Y position to rotate around, when only the X offset is specified in the previous argument.
   */
  rotate(
    angle: number,
    origin?: Point2D | number | [number],
    y?: number
  ): Point2D;

  /**
   * Scales the location of the point.
   *
   * @param scale - A scale defined by a Vector2D, an Array with 2 values (X and Y), or a number representing the X
   * scale (and Y scale if no additional parameter is specified.)
   * @param y - An option Y scale to use if an X scale was specified as the first argument. If this argument is not
   * specified then uniform scaling is assumed.
   */
  scale(scale: Vector2D | number | [number], y?: number): Point2D;

  /**
   * Transforms the point by a transformation matrix.
   *
   * @param matrix - A Matrix or an Array of 9 numbers.
   */
  transform(matrix: Matrix2D | [number]): Point2D;

  /**
   * The X position of the point
   */
  x: number;

  /**
   * The Y position of the point
   */
  y: number;
}

declare class Mesh3DBoundary {}
declare class Matrix2D {}
declare class Matrix3D {}
declare class Vector2D {}
declare class WindingRule {}

interface IDebuggable {
  /**
   * Instructs the object to present useful debugging information via a series of calls to Debug.point, Debug.line and
   * Debug.triangles.
   */
  debug();
}
