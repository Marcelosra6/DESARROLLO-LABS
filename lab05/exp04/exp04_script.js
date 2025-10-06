document.querySelectorAll('a[href^="#"]').forEach(a=>
    {
        a.addEventListener('click', function(e)
        {
            const href = this.getAttribute('href');
            if(!href || href === '#') 
            {
                return
            };
            e.preventDefault();
        });
    });
    
    (function()
    {
        const form = document.getElementById('formulario');
        if(!form) 
            {
            return;
        }
        form.addEventListener('submit', function(e)
        {
            e.preventDefault();
            if(!form.checkValidity())
                {
                    form.classList.add('was-validated');
                    return;
                }
            const alertBox = document.createElement('div');
            alertBox.className = 'alert alert-success mt-3';
            alertBox.textContent = 'Mensaje enviado. ';
            form.appendChild(alertBox);
            form.reset();
            form.classList.remove('was-validated');
            setTimeout(()=> alertBox.remove(), 3500);
        });
    })
();