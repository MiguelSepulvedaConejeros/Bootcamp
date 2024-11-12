    // Palabras a reemplazar y sus colores
    const palabras = {
        "sed":          { color: "#FF5500", contador: 0 },
        "vehicula":     { color: "#FF99B2", contador: 0 },
        "vivamus":      { color: "#FF99F5", contador: 0 },
        "nam":          { color: "#FF99FF", contador: 0 },
        "eros":         { color: "#99C5FE", contador: 0 },
        "vestibulum":   { color: "#00CEFF", contador: 0 },
        "quam":         { color: "#01FFFE", contador: 0 },
        "sollicitudin": { color: "#00FF9F", contador: 0 },
        "finibus":      { color: "#B6FF01", contador: 0 },
        "dictum":       { color: "#FFFF00", contador: 0 },
        "morbi":        { color: "#FFB600", contador: 0 }
    };

    // Mapa de números a palabras
    const numerosEnPalabras = {
        1: 'uno',
        2: 'dos',
        3: 'tres',
        4: 'cuatro',
        5: 'cinco',
        6: 'seis',
        7: 'siete',
        8: 'ocho',
        9: 'nueve',
        10: 'diez',
        11: 'once',
    };
    // Mostrar el texto original
    textoRelleno = document.getElementById('text').innerText

    // Reemplazo de palabras
    let textoModificado = textoRelleno;

    for (const palabra in palabras) {
        const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
        const matches = textoModificado.match(regex);
        const cantidad = matches ? matches.length : 0;

        // Reemplazar la palabra por su número correspondiente
        const numero = Object.keys(palabras).indexOf(palabra) + 1;
        const numeroEnPalabra = numerosEnPalabras[numero] || numero; // Convertir a palabra
        textoModificado = textoModificado.replaceAll(regex, `<strong>${numeroEnPalabra}</strong>`);

        // Contar las veces que se reemplaza
        palabras[palabra].contador += cantidad;
        palabras[palabra].contador ||= (palabras[palabra].contador === cantidad);
    }
    
    // Actualizar el contenido del HTML
    document.getElementById('text').innerHTML = textoModificado;
    
    // Imprimir resultados en la consola
    for (const palabra in palabras) {
        const { contador, color } = palabras[palabra];
        if (contador) {
            console.log(`%c${palabra}: ${contador}`, `color: ${color}`);
        }
    }