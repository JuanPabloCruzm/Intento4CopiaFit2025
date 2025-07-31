function obtenerRutinaPersonalizada(deporte, disciplina, tipoCuerpo, imcCategoria) {
  const rutinas = {
    MTB: {
      Downhill: {
        endomorfo: {
          sobrepeso: [
            "Día 1: Rodillo 40 min + movilidad de cadera",
            "Día 2: Core y espalda baja (30 min)",
            "Día 3: Bicicleta técnica 1h suave + bajada controlada",
            "Día 4: Fuerza tren inferior con peso corporal",
            "Día 5: Descanso activo (caminar o yoga)",
            "Día 6: Enduro suave + estiramientos",
            "Día 7: Técnica en curvas + 30 min rodillo"
          ],
          normal: [
            "Día 1: Técnica de curvas + 1h XC",
            "Día 2: Core + fuerza funcional",
            "Día 3: Descanso activo",
            "Día 4: Técnica de descenso + fuerza tren inferior",
            "Día 5: Rodillo + movilidad articular",
            "Día 6: Salida enduro 2h",
            "Día 7: Rodillo suave + foam roller"
          ]
        },
        ectomorfo: {
          bajo: [
            "Día 1: Técnica en pista + fuerza tren superior",
            "Día 2: Descanso activo + estiramientos",
            "Día 3: Subidas intensas 45 min",
            "Día 4: Core + trabajo de hombros",
            "Día 5: Técnica descenso + bajadas cronometradas",
            "Día 6: Gym (pesas para pierna y espalda)",
            "Día 7: Salida suave + técnica en curvas"
          ]
        }
      }
    },
    gimnasio: {
      fuerza: {
        endomorfo: {
          sobrepeso: [
            "Día 1: Tren inferior (sentadillas, peso muerto)",
            "Día 2: Cardio HIIT 30 min + core",
            "Día 3: Tren superior (pecho, espalda)",
            "Día 4: Descanso activo (bicicleta o caminata)",
            "Día 5: Full body con peso moderado",
            "Día 6: Cardio suave + estiramientos",
            "Día 7: Rutina metabólica + foam roller"
          ]
        },
        mesomorfo: {
          normal: [
            "Día 1: Pecho y tríceps",
            "Día 2: Piernas",
            "Día 3: Espalda y bíceps",
            "Día 4: Cardio 30 min",
            "Día 5: Full body",
            "Día 6: Core + hombros",
            "Día 7: Descanso total"
          ]
        }
      }
    },
    atletismo: {
      fondo: {
        ectomorfo: {
          bajo: [
            "Día 1: Trote continuo 5 km",
            "Día 2: Técnica de carrera + estiramiento",
            "Día 3: Series 4×800m ritmo medio",
            "Día 4: Core + propiocepción",
            "Día 5: 6 km fondo lento",
            "Día 6: Subidas cortas + bajadas controladas",
            "Día 7: Descanso activo (bicicleta suave)"
          ]
        }
      }
    },
    yoga: {
      vinyasa: {
        mesomorfo: {
          normal: [
            "Día 1: Vinyasa fluido 45 min",
            "Día 2: Power yoga",
            "Día 3: Posturas de equilibrio",
            "Día 4: Yin yoga",
            "Día 5: Vinyasa + pranayama",
            "Día 6: Ashtanga yoga",
            "Día 7: Meditación + estiramientos"
          ]
        }
      }
    },
    natacion: {
      pecho: {
        endomorfo: {
          sobrepeso: [
            "Día 1: Técnica de patada + 500m suave",
            "Día 2: Resistencia: 3×200m",
            "Día 3: Técnica respiratoria + flotación",
            "Día 4: Libre + 600m continuo",
            "Día 5: Estilo pecho + virajes",
            "Día 6: Cardio fuera del agua (bicicleta 30 min)",
            "Día 7: Piscina libre + estiramientos"
          ]
        }
      }
    },
    sedentario: {
      general: {
        endomorfo: {
          sobrepeso: [
            "Día 1: Caminata 30 min",
            "Día 2: Movilidad y estiramientos",
            "Día 3: Ejercicio en casa (sentadillas, abdominales)",
            "Día 4: Caminata larga (1h)",
            "Día 5: Yoga suave",
            "Día 6: Cardio bajo impacto",
            "Día 7: Descanso + respiración consciente"
          ]
        }
      }
    }
  };

  try {
    return rutinas[deporte][disciplina][tipoCuerpo][imcCategoria];
  } catch {
    return ["No hay rutina disponible para esta combinación."];
  }
}
