from flask import Flask
from movies.helpers.expressions import *

# Create an app to serve views to the browser:

app = Flask(__name__)

import movies.views

# Logging things in the console:

for key in elonMuskProfile:
    print(key, '\t', elonMuskProfile[key])

teslaCars[1][1] = 'model sp'

print('\nTesla cars:')
print(teslaCars)
print(foundedCompanies)

for spacexShip in spacexShips:
    if spacexShip in randomShips:
        print(spacexShip, 'was found!')
    else:
        print(spacexShip, 'was not found!')

randomNumbers = [1, 2, 3, 4]

for i in range(len(randomNumbers)):
    randomNumbers[i] += 1

print(randomNumbers)

randomDict = {}
randomKeys = ['firstName', 'lastName', 'age']
randomValues = ['Marcelo', 'Pinto', 36]

for (key, value) in zip(randomKeys, randomValues):
    randomDict[key] = value

print(randomDict)
print(times(2, 5))
print(printUserInfo(
    name='Marcelo',
    surname='Pinto',
    age=36,
    pets=2,
    occupation='web developer',
    graduation='engineer'
))

print('Using map for list iteration:')
print(map(lambda x: x + 5, [0, 5, 10, 15]))

print('Using list coverage:')
print([x**2 for x in range(10) if x % 2 == 0])

print('Using list coverage with nested loops:')
print([(x, y)
    for x in range(5) if x % 2 == 0
    for y in range(5) if y % 2 == 1
])

print('Generator functions:')
for square in generateSquares(5):
    print(square)

print('Using map:')
for x in map(lambda x: x**2, range(5)):
    print(x)

print('Using list coverage:')
for x in [x**2 for x in range(5)]:
    print(x)
