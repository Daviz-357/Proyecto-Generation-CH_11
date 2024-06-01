document.getElementById("searchForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar que se envíe el formulario

            var ubicacion = document.getElementById("ubicacion").value;
            var resultados = buscarBancos(ubicacion);

            mostrarResultados(resultados);
        });

        function buscarBancos(ubicacion) {
            // Simulación de búsqueda con ubicación proporcionada por el usuario
            return [
                { nombre: "Banco de Alimentos Santiago", ubicacion: "Santiago, Chile" },
                { nombre: "Banco de Alimentos Valparaíso", ubicacion: "Valparaíso, Chile" }
            ];
        }

        function mostrarResultados(resultados) {
            var resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = ""; // Limpiar los resultados anteriores

            if (resultados.length === 0) {
                resultsDiv.innerHTML = "<p>No se encontraron resultados.</p>";
            } else {
                var lista = "<ul>";
                resultados.forEach(function(banco) {
                    lista += "<li>" + banco.nombre + " - " + banco.ubicacion + "</li>";
                });
                lista += "</ul>";
                resultsDiv.innerHTML = lista;
            }
        }
