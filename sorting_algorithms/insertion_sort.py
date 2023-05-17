def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        
        # Move elements greater than key to the right
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        # Place the key in its sorted position
        arr[j + 1] = key
    
    return arr

# Example usage:
arr = [5, 2, 9, 1, 7, 6, 3]
sorted_arr = insertion_sort(arr)
print(sorted_arr)