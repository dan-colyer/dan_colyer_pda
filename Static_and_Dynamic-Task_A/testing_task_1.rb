### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  if val = 1
  return true
  else
  return false
  end
end
# incorrect indentation

# dif max a b
  if a > b
      return a
  else
  b
  end
end
# end
# too many 'ends', 'dif' should be 'def'

def looper
  for i in 1..10
  puts i
  end
end
# incorrect indentation

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# Missing an 'end' statement

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  # puts "func1(3) failed"
  # failrues = failures + 1
end


# if failures
  puts "Test Failed"
else
  puts "Test Passed"
end
