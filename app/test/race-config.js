var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('Race-config', function() {
  it('should list all race-configs race-config/ GET');
  it('should create race-config /race-config POST');
  it('should get a default race-config /race-config/default GET');
  it('should get an existing race-config /race-config/<id> GET');
});
