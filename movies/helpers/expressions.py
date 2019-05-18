aboutTesla = 'Teslas mission is to accelerate the worlds transition to sustainable energy.'
elonMuskProfile = {
    'name': 'Elon Musk',
    'age': 48,
    'companies': 'Tesla and SpaceX'
}
teslaCars = ('model 3', ['model s', 'model se'], 'model x')
foundedCompanies = 'Elon Musk has founded the following companies: %s, %s and %s' % ('Pay Pal', 'Tesla', 'Space X')

randomShips = ['Falcon 9', 'M Banks', 'Apollo', 'Discovery']
spacexShips = ['Falcon 9', 'Dragon', 'M Banks']

def times(x, y):
    return x * y

def printUserInfo(age, pets, name='John', surname='Doe', **kwargs):
    sentence = '{name} {surname} has {age} and {pets} pets'.format(name=name, surname=surname, age=age, pets=pets)
    bio = '====== Bio ======\n'
    for key in kwargs:
        bio += key + ': ' + kwargs[key] + '\n'
    return sentence + '\n' + bio

def generateSquares(numberOfItems):
    for item in range(numberOfItems):
        yield item ** 2


# Printing to the terminal:

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
