import reflex as rx
from .data import todas_las_tareas

def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        if estado in contadores:
            contadores[estado] += 1
        else:
            contadores[estado] = 1
    return contadores


def tablero_kanban():
    contadores = contar_tareas_por_estado(todas_las_tareas)

    # Podrías simular columnas de Kanban aquí, pero nos centramos en los contadores
    return rx.box(
        rx.heading("Tablero Kanban", size="6", margin_bottom="1em"),

        # Aquí se mostrarían las columnas (opcional)
        rx.flex(
            rx.box("📋 Columna Pendientes", padding="1em", border="1px solid gray"),
            rx.box("⚙️ Columna En Progreso", padding="1em", border="1px solid gray"),
            rx.box("✅ Columna Completadas", padding="1em", border="1px solid gray"),
            spacing="2em"
        ),

        # Contadores mostrados debajo
        rx.divider(margin_y="1em"),
        rx.text(f"Pendientes: {contadores.get('Pendiente', 0)}"),
        rx.text(f"En Progreso: {contadores.get('En Progreso', 0)}"),
        rx.text(f"Completadas: {contadores.get('Completada', 0)}"),
        padding="2em"
    )
