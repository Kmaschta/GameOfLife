from .cell import new_cell
from .matrix import new_matrix
from .evolution import evolve
from .fixtures import load_fixture

class Board:
    generations = []

    def __init__(self, xSize, ySize, fixture = 'eyes'):
        self.initial_cells = load_fixture(fixture)
        self.xSize = xSize
        self.ySize = ySize
        self.new_generation()

    @property
    def current_generation(self):
        if not self.generations:
            return None

        return self.generations[-1]

    def new_generation(self):
        generation = {
            'id': len(self.generations),
        }

        if self.current_generation:
            generation['matrix'] = evolve(self.current_generation)
        else: # First generation
            generation['matrix'] = new_matrix(self.xSize, self.ySize, self.initial_cells)

        self.generations.append(generation)

        return self.current_generation
