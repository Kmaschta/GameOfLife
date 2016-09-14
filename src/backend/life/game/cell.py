STATES = ['empty', 'alive']

def new_cell(x, y, state = 'empty'):
    return {
        'x': x,
        'y': y,
        'state': state,
    }
