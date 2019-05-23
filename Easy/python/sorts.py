
def swap(i, j, arr):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


# Bubble
arr = [8, 5, 2, 9, 5, 6, 3]


def bubbleSort(arr):
    swapped = False
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            swap(i, i + 1, arr)
            swapped = True
    return bubbleSort(arr) if swapped else arr


print('bubble', bubbleSort(arr))

# Insertion
arr = [8, 5, 2, 9, 5, 6, 3]


def insertionSort(arr):
    for i in range(1, len(arr)):
        j = i
        while (j > 0 and arr[j] < arr[j - 1]):
            swap(j, j - 1, arr)
            j -= 1
    return arr


print('insertion', insertionSort(arr))

# Selection
arr = [8, 5, 2, 9, 5, 6, 3]


def selectionSort(arr):
    for i in range(len(arr)):
        minIndex = i
        for j in range(i + 1, len(arr)):
            if (arr[j] < arr[minIndex]):
                minIndex = j
        swap(i, minIndex, arr)
    return arr


print('selection', selectionSort(arr))
