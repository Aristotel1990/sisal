import { replace } from "lodash";
import numeral from "numeral";

// ----------------------------------------------------------------------

export function fNumber(number) {
  return numeral(number).format("0.00");
}
export function fNumberValue(number) {
  return numeral(number).format("0");
}
