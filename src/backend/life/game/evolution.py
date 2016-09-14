from .cell import new_cell
from .matrix import duplicate_matrix
from .neighborhood import count_neighbours

def evolve(precedent_generation):
    old_matrix = precedent_generation['matrix']
    new_matrix = duplicate_matrix(old_matrix)

    for y, column in enumerate(old_matrix):
        for x, cell in enumerate(column):
            nb_neighbours = count_neighbours(old_matrix, cell)

            if cell['state'] == 'alive':
                # < 2 - Die of under-population
                # > 3 - Die of over-population
                if nb_neighbours < 2 or nb_neighbours > 3:
                    new_matrix[y][x] = new_cell(x, y, 'empty')

            if cell['state'] == 'empty':
                # = 3 - New-born cell from reproduction
                if nb_neighbours == 3:
                    new_matrix[y][x] = new_cell(x, y, 'alive')

    return new_matrix
