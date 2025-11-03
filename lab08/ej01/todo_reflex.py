import reflex as rx

class State(rx.State):
    mostrar_solo_pendientes: bool = False

    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True

    def mostrar_todas(self):
        self.mostrar_solo_pendientes = False

    def activar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes

def tarjeta_tarea(tarea):
    return rx.box(
        rx.heading(tarea["titulo"], size="4"),
        rx.text(f"Estado: {tarea['estado']}"),
        padding="4",
        border="1px",
        border_radius="md",
        margin_bottom="2",
    )

tareas_progreso = [
    {"id": 1, "titulo": "Comunicacion", "estado": "Pendiente"},
    {"id": 2, "titulo": "Computacion", "estado": "Pendiente"},
]
tareas_completadas = [
    {"id": 3, "titulo": "Matematica", "estado": "Completado"},
    {"id": 4, "titulo": "Ciencias Sociales", "estado": "Completado"},
]

def columna_kanban(nombre, tareas):
    pendientes = [t for t in tareas if t["estado"] == "Pendiente"]
    ui_pendientes = rx.vstack(*[tarjeta_tarea(t) for t in pendientes], spacing="2")
    ui_todas = rx.vstack(*[tarjeta_tarea(t) for t in tareas], spacing="2")

    return rx.box(
        rx.heading(nombre, size="3"),
        rx.box(
            rx.cond(
                State.mostrar_solo_pendientes,
                ui_pendientes,
                ui_todas,
            ),
            margin_top="2",
        ),
        padding="3",
        width="300px",
    )

def index():
    return rx.box(
        rx.hstack(
            rx.button("Mostrar pendientes", on_click=State.activar_pendientes),
            rx.button("Mostrar todo", on_click=State.mostrar_todas),
            spacing="3",
            margin_bottom="4",
        ),
        rx.hstack(
            columna_kanban("Pendientes", tareas_progreso),
            columna_kanban("Completados", tareas_completadas),
            spacing="6",
        ),
        padding="6",
    )

app = rx.App()
app.add_page(index, route="/")