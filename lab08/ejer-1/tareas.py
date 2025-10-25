import reflex as rx

class EstadoTareas(rx.State):
    tareas: list = ["Tarea 1", "Tarea 2"]

    def agregar_tarea(self, nueva_tarea):
        self.tareas.append(nueva_tarea)

def lista_tareas():
    return rx.fragment(
        rx.heading("Lista de Treas"),
        rx.ul ([rxli(tarea) for tarea in EstadoTareas.tareas]),
    )

def agregar_tarea():
    nueva_tarea = rx.input(placeholder="Aregar tarea")
    return rx.fragment(
        nueva_tarea,
        rx.button("Agregar", on_click = lambda: EstadoTareas.agregar_tarea(nueva_tarea.value))
    )

def index() ->rx.Component:
    return rx.vstack(
            lista_tareas(),
            agregar_tarea(),
        )
    


app = rx.App()
app.add_page(index)