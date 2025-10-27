import reflex as rx

class EstadoTareas(rx.State):
    tareas: list[str] = ["Tarea 1", "Tarea 2"]
    texto: str = ""

    def set_texto(self, texto: str):
        self.texto = texto

    def agregar(self):
        nueva = (self.texto or "").strip()
        if nueva:
            self.tareas.append(nueva)
            self.texto = ""

    def eliminar(self, indice: int):
        if 0 <= indice < len(self.tareas):
            self.tareas.pop(indice)

def AgregarTarea():
    return rx.hstack(
        rx.input(
            value=EstadoTareas.texto,
            placeholder="Agregar tarea...",
            on_change=EstadoTareas.set_texto,
            style={"width": "300px"},
        ),
        rx.button("Agregar", on_click=EstadoTareas.agregar),
        spacing="4",
    )


def ListaTareas():
    lista_render = rx.foreach(
        EstadoTareas.tareas,
        lambda tarea, i: rx.hstack(
            rx.text(f"{i+1}."),
            rx.text(tarea),
            rx.button("Eliminar", on_click=lambda _ev, idx=i: EstadoTareas.eliminar(idx)),
            spacing="3",
        ),
    )

    return rx.fragment(
        rx.heading("Lista de Tareas"),
        rx.vstack(lista_render, spacing="2"),
    )


def index():
    return rx.box(
        rx.vstack(
            AgregarTarea(),
            rx.divider(),
            ListaTareas(),
            spacing="6",
            padding="4",
        )
    )

app = rx.App()
app.add_page(index)