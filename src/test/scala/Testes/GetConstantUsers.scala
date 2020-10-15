package Testes

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class GetConstantUsers extends Simulation {
  val httpConf = http.baseUrl("url")
    .header("Content-Type", "application/json");
  val cenario = scenario("retornaTodosProdutosCadastrados")
    .exec(http("retornaTodosProdutosCadastrados")
      .get("/products")
      .check(status.is(200)))
  setUp(cenario.inject(constantConcurrentUsers(100) during(20 minutes))).protocols(httpConf)
}
