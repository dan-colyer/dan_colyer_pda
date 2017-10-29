array1 = [1, 2, 3]
hash1 = {a: 1, b: 2, c: 3}

def sort_desc(array)
  result = array.sort.reverse
  return result
end

puts sort_desc(array1)

def search_for_mulipliers_of_3(array)
  result = array.find {|num| num % 3 == 0}
  puts result
end

# puts search_for_mulipliers_of_3(array1)

def length(array)
  puts array.length()
end

# puts length(array1)

def show(hash)
  puts hash
end

# puts show(hash1)
