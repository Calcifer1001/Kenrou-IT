/*
  world -> dlrow
  Kenrou IT -> TI uorneK
*/

export const EXAMPLE = "TI uorneK"

export function reverse(str: string): string { // str = world
  let output = "" // output = ""
  for(let i = 0; i < str.length; i++) { // i = 1; 1 < 5
    output = output + str[str.length - 1 - i] // output = "d" + "l"
  } // output = "dlrow"
  return output
}

export function reverse2(str: string): string {
  let output = "" // output = ""
  for(let i = str.length - 1; i >= 0; i--) { // i = 1; 1 < 5
    output = output + str[i] // output = "d" + "l"
  } // output = "dlrow"
  return output
}