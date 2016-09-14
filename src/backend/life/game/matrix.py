from .cell import new_cell

def new_matrix(xSize, ySize, cells):
    matrix = [[new_cell(x, y, 'empty') for x in range(xSize)] for y in range(ySize)]

    for cell in cells:
        draw_cell(matrix, cell)

    return matrix


def duplicate_matrix(old_matrix):
    duplicate_column = lambda c, y: [new_cell(x, y, cell['state']) for x, cell in enumerate(c)]
    return [duplicate_column(column, y) for y, column in enumerate(old_matrix)]


def draw_cell(matrix, cell):
    matrix[cell['y']][cell['x']] = cell
