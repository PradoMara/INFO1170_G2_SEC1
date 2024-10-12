app.post('/delete', (req, res) => {
    const id = req.body.id;
    const query = 'DELETE FROM tabla WHERE id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) throw error;
        res.send('Registro eliminado exitosamente');
    });
});
