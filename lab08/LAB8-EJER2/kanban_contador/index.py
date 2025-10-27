import reflex as rx
from .kanban import tablero_kanban

def index():
    return rx.center(
        tablero_kanban()
    )

app = rx.App()
app.add_page(index)
