import { TestBed } from '@angular/core/testing';

import { PlaceAppointment } from './placeappointment.service';

describe('placeappointmentservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceAppointment = TestBed.get(PlaceAppointment);
    expect(service).toBeTruthy();
  });
});
