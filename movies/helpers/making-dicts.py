headers = 'sku;name;category;price'.split(';')
values = '1234;watch;personal;100,00'.split(';')

result = {}
for headerValue in zip(headers, values):
    result[headerValue[0]] = headerValue[1]

print(result)