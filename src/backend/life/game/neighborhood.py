def find_neighbours_or_dead(matrix, y, x):
    try:
        return matrix[y][x]
    except IndexError:
        return { 'state': 'empty' }

def count_neighbours(matrix, cell):
    x, y = cell['x'], cell['y']
    north, south = y - 1, y + 1
    east, west = x + 1, x - 1

    neighbours = [
        find_neighbours_or_dead(matrix, north, west),
        find_neighbours_or_dead(matrix, north, x),
        find_neighbours_or_dead(matrix, north, east),
        find_neighbours_or_dead(matrix, y, east),
        find_neighbours_or_dead(matrix, south, east),
        find_neighbours_or_dead(matrix, south, x),
        find_neighbours_or_dead(matrix, south, west),
        find_neighbours_or_dead(matrix, y, west),
    ]

    is_alive = lambda c: c['state'] == 'alive'
    return len([n for n in neighbours if is_alive(n)])
