export default class Validation {

  /***
   *  Validates if the given object is empty. Returns true if null or undefined.
   * @param text string
   * @returns boolean
   */
  public static(obj: object | null | undefined): boolean {
    return obj == null || Object.keys(obj).length === 0;
  }

}
