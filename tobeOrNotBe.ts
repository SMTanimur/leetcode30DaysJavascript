
/**
 * 
 * Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
 */

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
  };
 

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (value: any) => {
      if (value === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (value: any) => {
      if (value !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */