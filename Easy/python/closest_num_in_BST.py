def findClosestValueInBst(tree, target):
    if not tree or not target:
        return null
    return sub_routine_iterative(tree, target, float("inf"))


def sub_routine_iterative(tree, target, closest):
    current_node = tree
    while current_node is not None:
        # set new closest
        curr_abs = abs(target - closest)
        pot_abs = abs(target - current_node.value)

        if pot_abs < curr_abs:
            closest = current_node.value

        if current_node.value < target:
            current_node = current_node.right
        elif current_node.value > target:
            current_node = current_node.left
        else:
            break  # exact match
    return closest


def sub_routine_recursive(tree, target, closest):
    # base case
    if tree is None:
        return closest

    # set new closest
    curr_abs = abs(target - closest)
    pot_abs = abs(target - tree.value)

    if pot_abs < curr_abs:
        closest = tree.value

    if tree.value < target:
        return sub_routine_recursive(tree.right, target, closest)
    elif tree.value > target:
        return sub_routine_recursive(tree.left, target, closest)
    else:
        return closest  # exact match
