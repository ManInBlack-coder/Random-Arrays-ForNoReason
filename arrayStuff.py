

# codewars task - Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

#Examples:

#range(5) --> 1,2,3,4,5
#range(3, 7) --> 3,4,5,6,7
#range(2, 3, 15) --> 2,5,8,11,14


def my_range(start, step=None, end=None):
  list = []

  if step is None:
    end=start
    start=1
    step=1
  
  elif end is None:
    end=start
    start=1
    step=1
  else:
    start=1
    step=step
    end=end
    
  for i in range(start, end + 1,step):
   list.append(i)
  return list
  

print(my_range(5))
print(my_range(3, 7))
print(my_range(2, 3, 15))

#Pareto principle

import math

rental_table = [
    {"rental_id": 1,  "customer_id": 1},
    {"rental_id": 2,  "customer_id": 3},
    {"rental_id": 3,  "customer_id": 1},
    {"rental_id": 4,  "customer_id": 2},
    {"rental_id": 5,  "customer_id": 4},
    {"rental_id": 6,  "customer_id": 1},
    {"rental_id": 7,  "customer_id": 2},
    {"rental_id": 8,  "customer_id": 3},
    {"rental_id": 9,  "customer_id": 5},
    {"rental_id": 10, "customer_id": 1},
    {"rental_id": 11, "customer_id": 4},
    {"rental_id": 12, "customer_id": 6},
    {"rental_id": 13, "customer_id": 2},
    {"rental_id": 14, "customer_id": 1},
    {"rental_id": 15, "customer_id": 7},
]

def rental_info(table):
  rental_table_directory = {}

  for i in table: 
    customer = i["customer_id"]
    if customer in rental_table_directory:
      rental_table_directory[customer] = rental_table_directory[customer] + 1
    else: 
      rental_table_directory[customer] = 1

  sorted_counts = sorted(rental_table_directory.values(), reverse=True)
  client_count = len(sorted_counts) * 0.2
  client_count_20 = math.ceil(client_count
  
  return client_count_20

print(rental_info(rental_table))
