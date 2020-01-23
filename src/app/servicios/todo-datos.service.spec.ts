import { TestBed } from '@angular/core/testing';

import { TodoDatosService } from './todo-datos.service';

describe('TodoDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDatosService = TestBed.get(TodoDatosService);
    expect(service).toBeTruthy();
  });
});
