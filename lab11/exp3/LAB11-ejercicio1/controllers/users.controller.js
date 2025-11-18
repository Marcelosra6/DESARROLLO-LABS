let users = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "María" }
];

module.exports = {

    // GET - listar
    getUsers: (req, res) => {
        res.json(users);
    },

    // POST - crear
    createUser: (req, res) => {
        const { nombre } = req.body;

        if (!nombre) {
            return res.status(400).json({ message: "El nombre es requerido" });
        }

        const newUser = {
            id: users.length + 1,
            nombre
        };

        users.push(newUser);
        res.status(201).json(newUser);
    },

    // PUT - actualizar
    updateUser: (req, res) => {
        const id = parseInt(req.params.id);
        const { nombre } = req.body;

        const user = users.find(u => u.id === id);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        user.nombre = nombre;
        res.json({ message: "Usuario actualizado", user });
    },

    // DELETE - eliminar
    deleteUser: (req, res) => {
        const id = parseInt(req.params.id);
        const index = users.findIndex(u => u.id === id);

        if (index === -1) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        users.splice(index, 1);
        res.json({ message: "Usuario eliminado" });
    }

};
