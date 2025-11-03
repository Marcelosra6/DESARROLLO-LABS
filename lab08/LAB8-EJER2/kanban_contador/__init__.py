# kanban_contador/__init__.py

# Este archivo indica que la carpeta "kanban_contador"
# es un paquete de Python que puede ser importado.
# En este caso no se requiere inicialización especial,
# pero se puede usar para exponer componentes del módulo.

from .kanban import tablero_kanban
from .data import todas_las_tareas

__all__ = ["tablero_kanban", "todas_las_tareas"]
