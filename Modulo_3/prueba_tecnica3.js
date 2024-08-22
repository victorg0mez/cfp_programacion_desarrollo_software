function probabilidades(distancia) {
    const combinaciones = [];
    const pasos = [1, 2, 3]; // pasos que se pueden usar
  
    function recursiva(distancia_Restante, combinacion_Actual) {
      if (distancia_Restante === 0) {
        combinaciones.push(combinacion_Actual.slice());
      } else {
        for (let i = 0; i < pasos.length; i++) {
          if (distancia_Restante >= pasos[i]) {
                    combinacion_Actual.push(pasos[i]);
                    recursiva(distancia_Restante - pasos[i], combinacion_Actual);
                    combinacion_Actual.pop();
          }
        }
      }
    }
  
    recursiva(distancia, []);
    return combinaciones;
  }
  
  
  const distancia = 3;
  const combinaciones = probabilidades(distancia);
  
  console.log(`Combinaciones para recorrer ${distancia} unidades:`);
  for (let i = 0; i < combinaciones.length; i++) {
    console.log(`Combinación ${i + 1}: ${combinaciones[i].join(' , ')}`);
  }