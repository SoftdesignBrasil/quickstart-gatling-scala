package Testes
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class Post extends Simulation {
    val httpConf = http.baseUrl("Url")
      .header("Content-Type", "application/json");

    val cenario = scenario("CriarProduto")
      .exec(http("CriarProduto")
        .post("/products")
        .body(StringBody(
            """{"name":"Produto","value": 5,"shortDescription": "Descrição curta", "longDescription":"Descrição longa", "active": true}"""
              .stripMargin))
        .asJson.check(status.is(201)))
    setUp(cenario.inject(constantConcurrentUsers(100) during(20 minutes))).protocols(httpConf);
}