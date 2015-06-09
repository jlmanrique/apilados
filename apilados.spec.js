var Pila = require('./apilados');

describe('Ejercicio de apliados:', function() {
  
  var pila;

  beforeEach(function() {
    
    pila = new Pila();
  });

  it('dado una pila sin elementos al ejecutar obtener este debe ser nulo', function() {
    expect(pila.obtener()).toBeNull();
  });

  it('dado una pila sin elementos al ejecutar longitud este debe ser 0', function() {
    expect(pila.longitud()).toBe(0);
  });

  it('dado una pila con un elemento al ejecutar obtener se debera devolver el elemento y la longitud debe ser 0', function() {
    
    pila.agregar('elemento');

    expect(pila.obtener()).toBe('elemento');
    expect(pila.longitud()).toBe(0);
  });

  it('dado una pila con tres elementos al ejecutar obtener se debera devolver el ultimo elemento ingresado y la longitud debe ser 2', function() {
    
    pila.agregar('uno');
    pila.agregar('dos');
    pila.agregar('tres');

    expect(pila.obtener()).toBe('tres');
    expect(pila.longitud()).toBe(2);
  });

  it('dado una pila con dos elementos al ejecutar limpiar la longitud de la pila debera ser 0', function() {
    
    pila.agregar('uno');
    pila.agregar('dos');
    pila.agregar('tres');

    pila.limpiar();
    expect(pila.longitud()).toBe(0); 
  });

});