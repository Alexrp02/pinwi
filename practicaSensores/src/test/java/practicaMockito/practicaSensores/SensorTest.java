package practicaMockito.practicaSensores;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;

public class SensorTest {
	GestorSensores gestor;

	@BeforeEach
	public void init() {
		gestor = new GestorSensores();
	}
	
	@AfterEach
	public void terminate() {
		gestor = null;
	}

	@Test
	public void inicialmenteElNumeroDeSensoresDelGestorEsCero() {
		fail("Implemente este caso de prueba");
	}

	@Test
	public void siSeBorraUnSensorNoExistenteSeElevaExcepcion() throws SensorExcepcion {
		fail("Implemente este caso de prueba");
	}

	@Test
	public void siSeObtieneLaTemperaturaMediaEnUnGestorVacioSeElevaExcepcion() throws SensorExcepcion {
		fail("Implemente este caso de prueba");
	}

	// el numero maximo de sensores permitido es 100
	@Test
	public void siSeIntroduceUnSensorEnUnGestorLlenoSeElevaExcepcion() throws SensorExcepcion {
		int max_sensores = 100;
		for (int i = 0; i < max_sensores; i++) {
			ISensorTemperatura sensorMock = mock(ISensorTemperatura.class);
			gestor.introducirSensor(sensorMock);
		}
		assertEquals(gestor.getNumeroSensores(), max_sensores);

		ISensorTemperatura sensorMock = mock(ISensorTemperatura.class);
		Exception exception = assertThrows(SensorExcepcion.class, () -> gestor.introducirSensor(sensorMock));
	    assertEquals("No se puede introducir en un gestor de sensores lleno", exception.getMessage());
	}

	@Test
	public void siSeBorraUnSensorDelGestorSeDecrementaEnUnoElNumeroDeSensores() {
		fail("Implemente este caso de prueba");
	}

	// se considera temperatura fuera de rango si la temperatura es menor que -90 o
	// mayor que 60
	@Test
	public void siAlgunSensorTieneTemperaturaFueraDeRangoObtenerLaTemperaturaMediaElevaUnaExcepcion() throws SensorExcepcion {
		fail("Implemente este caso de prueba");
	}

	// prueba con tres valores a tu eleccion
	@Test
	public void laTemperaturaMediaDeTresSensoresObtenidaATravesDelGestorEsCorrecta() {
		fail("Implemente este caso de prueba");
	}

	@Test
	public void siSeContactaTresVecesConSensoresDisponiblesNoSeBorraNinguno() {
		fail("Implemente este caso de prueba");
	}

	@Test
	public void siSeContactaTresVecesConUnSensorNoDisponibleSeBorraDelGestor() {
		fail("Implemente este caso de prueba");
	}
}