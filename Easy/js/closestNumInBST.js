/*
	Prompt: Find closest value in BST

	You are given a BST data structure consiting of BST nodes. Each BST node has an integer value stored in a property called "value" and two child nodes stored in properties called "left" and "right". You are also given a targen integer value; write a funtion that finds the closest value to that target. Assume there will only be one closest value.

	Input: 				10				, 12
							/			\
						5					15
					/		\			/		\
				2				5	13			22
			/							\
		1									14

	Output: 13
*/

const findClosestValueInBst = (tree, target) => {
  if (!tree || target === undefined) {
    return null;
  }
  return subRoutineIterative(tree, target, Infinity);
};

const subRoutineIterative = (tree, target, closest) => {
  let currNode = tree;
  while (currNode !== null) {
    // handle setting new closest
    let currAbs = Math.abs(target - closest);
    let potAbs = Math.abs(target - currNode.value);
    if (potAbs < currAbs) {
      closest = currNode.value;
    }

    // directional logic
    if (target < currNode.value) {
      currNode = currNode.left;
    } else if (target > currNode.value) {
      currNode = currNode.right;
    } else {
      break; // exact match
    }
  }
  return closest;
};

const subRoutineRecursive = (tree, target, closest) => {
  let currNode = tree;
  // base case
  if (currNode === null) {
    return closest;
  }

  // handle setting new closest
  let currAbs = Math.abs(target - closest);
  let potAbs = Math.abs(target - currNode.value);
  if (potAbs < currAbs) {
    closest = currNode.value;
  }

  // directional logic
  if (target < currNode.value) {
    return subRoutineRecursive(currNode.left, target, closest);
  } else if (target > currNode.value) {
    return subRoutineRecursive(currNode.right, target, closest);
  } else {
    return closest; // exact match
  }
};
