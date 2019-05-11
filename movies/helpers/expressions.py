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

