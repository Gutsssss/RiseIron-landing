<template>
  <!-- nav -->
  <div class="nav">
    <img src="@/assets/header_logo.png" />
    <ul class="nav-ul">
      <a class="ref" href="https://www.youtube.com"
        ><li class="nav-li">Тарифы</li></a
      >
      <a class="ref" href="https://www.youtube.com"
        ><li class="nav-li">FAQ</li></a
      >
      <a class="ref" href="https://www.youtube.com"
        ><li class="nav-li">Контакты</li></a
      >
      <a class="ref" href="https://www.youtube.com"
        ><li class="nav-li">База знаний</li></a
      >
      <a class="ref" href="https://www.youtube.com"
        ><li class="nav-li">Отзывы</li></a
      >
    </ul>
    <button class="nav-btn">Личный кабинет</button>
  </div>
  <!-- tarifs? -->
  <div class="tarifs">
    <div class="tarifs-info">
      <p class="tarifs-info-host">
        Надежный хостинг игровых серверов,<br />VDS и Dedicadted
      </p>
      <p class="tarifs-info-speed">
        С большой скоростью и легкой панелью управления
      </p>
      <button class="tarifs-info-btn">К тарифам</button>
    </div>
    <img class="tarifs-img" src="@/assets/image2.png" />
  </div>
  <!-- about -->
  <div class="aboutUs">
    <h1 class="aboutUs-info">Почему мы?</h1>
    <div class="aboutUs-server">
      <img src="@/assets/server-removebg-preview1.png" />
      <div class="aboutUs-server-info">
        <h1>Производительные сервера</h1>
        <p>
          Процессор<b> Ryzen 7 3800X</b> с частотой<b> 4.5 ГГц, быстрые NVME</b>
          диски и высокочастотная ОЗУ DDR4 ECC. Защита Anti-DDoS Game L2-L7.
          Сервера в Польше, маленький пинг.
        </p>
      </div>
    </div>
    <div class="aboutUs-server1">
      <img
        src="@/assets/152-1523189_ggdslogo-gaming-console-vector-free-hd-png-download-removebg-preview1.png"
      />
      <div class="aboutUs-server-info">
        <h1>Удобно для игр</h1>
        <p>
          Быстрая настройка сервера за<b> несколько минут.</b> Разрешено
          запускать <b>любое ядро, плагины или моды. Бесплатный</b> сервер
          Bungeecord и<b> буквенный</b>
          IP. Слоты бесконечны
        </p>
      </div>
    </div>
    <div class="aboutUs-server2">
      <img
        src="@/assets/png-transparent-call-logo-customer-service-technical-support-purchasing-service-quality-business-call-centre-selfservice-removebg-preview2.png"
      />
      <div class="aboutUs-server-info">
        <h1>Качественная техподдержка</h1>
        <p>
          Отвечаем<b> быстро.</b> Помощь при переезде с другого<b> хостинга.</b>
          Системный администратор с<b> 15-летним опытом.</b> Обширная<b>
            база знаний.</b
          >
          Есть<b> тестовый</b>
          период
        </p>
      </div>
    </div>
  </div>
  <!-- services -->
  <div class="services">
    <div class="services-info">
      <p class="service-info-top">
        Поддерживаемые<br />
        сервисы
      </p>
      <p class="service-info-bottom">
        В будущем мы планируем пополнить этот<br />
        список
      </p>
    </div>
    <div class="services-games">
      <div class="service-games-one">
        <img class="service-games-one-img" src="@/assets/image4.png" />
        <p class="service-games-one-tag">Minecraft</p>
        <ul class="service-games-once">
          <li>Vanilla</li>
          <li>Sponge</li>
          <li>Spigot</li>
          <li>Forge</li>
        </ul>
      </div>
      <div class="service-games-one">
        <img
          class="service-games-one-img"
          src="@/assets/84c9Q4N3bJM-removebg-preview1.png"
        />
        <p class="service-games-one-tag">Minecraft</p>
        <ul class="service-games-once">
          <li>CS</li>
          <li>Garrys Mod</li>
          <li>GTA</li>
          <li>Forge</li>
        </ul>
      </div>
      <div class="service-games-one">
        <img class="service-games-one-img" src="@/assets/image4.png" />
        <p class="service-games-one-tag">Minecraft</p>
        <ul class="service-games-once">
          <li>Vanilla</li>
          <li>Sponge</li>
          <li>Spigot</li>
          <li>Forge</li>
        </ul>
      </div>
      <div class="service-games-one">
        <img class="service-games-one-img" src="@/assets/image4.png" />
        <p class="service-games-one-tag">Minecraft</p>
        <ul class="service-games-once">
          <li>Vanilla</li>
          <li>Sponge</li>
          <li>Spigot</li>
          <li>Forge</li>
        </ul>
      </div>
      <button class="service-btn">
        Посмотреть полный список
      </button>
    </div>
  </div>
  <!-- plans -->
  <div class="tarifPlans">
    <p class="tarifPlans-tag">Тарифные планы</p>
    <div class="tarifPlans-buttons">
      <input checked type="radio" id="one" value="1" v-model="picked" />
      <label for="one">Игровые сервера</label>
      <input type="radio" id="two" value="2" v-model="picked" />
      <label for="two">VDS</label>
      <input type="radio" id="three" value="3" v-model="picked" />
      <label for="three">Выделенный сервер</label>
    </div>
    <div class="tarifPlans-table">
      <tableTarifs :inTarifs="inTarifs" />
    </div>
    <div class="uniqueOffers">
      <p class="uniqueOffers-text">Уникальные предложения</p>
      <div class="uniqueOffers-div">
        <p class="uniqueOffers-div-text">Скидка 5% при оплате за три месяца</p>
        <p class="uniqueOffers-div-text">15% за приглашенного друга</p>
        <p class="uniqueOffers-div-text">Если найдете дешевле,сделаем скидку</p>
      </div>
    </div>
  </div>
  <div class="questions">
      <div class="questions-info">
        <p class="questions-info-top">Часто задаваемые вопросы</p>
        <p class="questions-info-bottom">
          Не нашли ответа на вопрос?<br> Загляните в нашу базу знаний или<br> напишите
          нам, мы будем рады помочь!
        </p>
      </div>
    <div class="text-subtitle-2 mt-4 mb-2"></div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
          Как долго активируется мой сервер?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
          Сколько человек выдержит мой игровой сервер?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
          Могу ли я создать сервер по другой игре, кроме Minecraft?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    </div>
    <div class="footer">
      <div class="footer-left">
      <img src="@/assets/header_logo.png">
      <p>Клиентоорентированный<br> хостинг, которому нет<br> равных!</p>
      <p class="footer-left-p">2023 All right reserved. SrvUP</p>
      </div>
      <div class="footer-middle">
      <ul class="footer-middle-list">
      <p>Ссылки</p>
      <li>База знаний</li>
      <li>Отзывы</li>
      <li>Личный кабинет</li>
      </ul>
      <ul class="footer-middle-list">
      <p>Документы</p>
        <li>Пользовательское соглашение</li>
      <li>Политика конфиденциальности</li>
      </ul>
      </div>
      <div class="footer-right">
      <ul>
      <p>Контакты</p>
      <li><img class="footer-right-img" src="@/assets/email_icon.png">support@srvup.ru</li>
      <li><img class="footer-right-img" src="@/assets/tg_icon.png">@srvup_ru</li>
      <li><img class="footer-right-img" src="@/assets/vk_icon.png">@srvup_ru</li>
      </ul>
      </div>
    </div>
</template>

<script>
import tableTarifs from "@/components/TableTarifs.vue";

export default {
  components: { tableTarifs },
  data() {
    return {
      picked: "",
      plans: [
        {
          name: "Игровые сервера",
        },
        {
          name: "VDS",
        },
        {
          name: "Выделенный сервер",
        },
      ],
      inTarifs: [
        {
          id: 1,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 1,
          priceRub: 0,
        },
        {
          id: 2,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 2,
          priceRub: 10,
        },
        {
          id: 3,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 1,
          priceRub: 10,
        },
        {
          id: 4,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 2,
          priceRub: 10,
        },
        {
          id: 5,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 3,
          priceRub: 10,
        },
        {
          id: 6,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 2,
          priceRub: 10,
        },
        {
          id: 7,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 4,
          priceRub: 10,
        },
        {
          id: 8,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 3,
          priceRub: 10,
        },
        {
          id: 9,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 2,
          priceRub: 10,
        },
        {
          id: 10,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 3,
          priceRub: 10,
        },
        {
          id: 11,
          tarifName: "Bungeecord",
          cpu: "1 vCore",
          ram: "1 GB DDR4",
          container: "5 GB NVMe",
          connect: "100 MB",
          priceEuro: 10,
          priceRub: 10,
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
li {
  list-style-type: none;
  color: rgba(18, 18, 18, 0.6);
  font-size: 16px;
  font-weight: 600;
}
/* nav */
.nav {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 88px;
  align-items: center;
  gap: 150px;
}
.nav-ul {
  text-decoration: none;
  display: flex;
  padding: 0;
}
.nav-li {
  margin-right: 50px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(18, 18, 18, 0.6);
  gap: 14px;
}
.ref {
  text-decoration: none;
}
.ref:visited {
  color: rgba(18, 18, 18, 0.6);
}
.nav-btn {
  width: 208px;
  height: 60px;
  background-color: rgba(22, 115, 255, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  border: 0px;
  font-size: 16px;
  font-weight: 600;
}
/* tarifs */
.tarifs {
  display: flex;
  width: 100%;
  height: 434px;
  justify-content: center;
  margin-top: 28px;
  align-items: center;
}
.tarifs-img {
  width: 520px;
  height: 491px;
  padding-top: 38px;
}
.tarifs-info-host {
  width: 645px;
  height: 95px;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 600;
  color: rgba(17, 17, 17, 1);
  margin-top: 0;
  line-height: 48px;
  margin-right: 20px;
}
.tarifs-info-speed {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  color: rgba(18, 18, 18, 0.6);
}
.tarifs-info-btn {
  padding-top: 3px;
  width: 150px;
  height: 40px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(22, 115, 255, 1);
  border-radius: 30px;
  border: 0px;
  font-weight: 600;
  padding-bottom: 5px;
}
/* why we */
.aboutUs {
  width: 100%;
  align-items: center;
  margin-top: 74px;
}
.aboutUs-info {
  text-align: center;
  font-size: 52px;
  font-weight: 600;
}
.aboutUs-server {
  display: flex;
  width: 100%;
  gap: 90px;
  justify-content: center;
  align-items: center;
}
.aboutUs-server1 {
  display: flex;
  width: 100%;
  gap: 90px;
  justify-content: center;
  flex-direction: row-reverse;
  margin-top: 57px;
  align-items: center;
}
.aboutUs-server2 {
  display: flex;
  width: 100%;
  gap: 90px;
  justify-content: center;
  margin-top: 57px;
  align-items: center;
}
.aboutUs-server-info {
  width: 565px;
  height: 129px;
  font-size: 15px;
}
/* services */
.services {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 20px;
}
.services-info {
  height: 377px;
  padding-left: 20px;
}
.service-info-top {
  width: 441px;
  height: 76px;
}
.services-games {
  display: grid;
  grid-template-columns: 288px 288px;
  column-gap: 70px;
  padding-top: 65px;
  row-gap: 10px;
}
.service-games-once {
  display: grid;
  grid-template-columns: 40px 90px;
  column-gap: 13px;
  row-gap: 6px;
  padding-right: 40px;
  float: right;
}
.service-games-one {
  border: 1px solid rgba(43, 43, 43, 1);
  border-radius: 5px;
  position: relative;
  height: 120px;
}
.service-games-one-tag {
  padding-left: 104px;
  margin: 0;
  padding-top: 14px;
  font-size: 24px;
  font-weight: 600;
  left: 10px;
}
.service-info-top {
  font-size: 36px;
  font-weight: 700;
}
.service-info-bottom {
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 35px;
}
.service-games-one-img {
  position: absolute;
  top: 39px;
  left: 30px;
}
.service-btn {
  margin-top: 25px;
  background-color: rgba(22, 115, 255, 1);
  width: 267px;
  height: 40px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  border: none;
}
/* tables */
input[type="radio"] {
  display: none;
}
input[type="radio"] + label {
  width: 200px;
  height: 50px;
  background-color: #e7e7e7;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: rgba(18, 18, 18, 0.7);
  text-align: center;
  padding: 13px;
}
input[type="radio"]:checked + label {
  background-color: #1673ff;
  color: #ffffff;
}

.tarifPlans {
  align-items: center;
  padding: 20px;
  width: 1069px;
  margin: auto;
}
.tarifPlans-tag {
  text-align: center;
  font-size: 59px;
  font-weight: 600;
  margin-bottom: 27px;
}
.tarifPlans-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 678px;
  height: 78px;
  background-color: #f5f5f5;
  border-radius: 30px;
  margin: auto;
}
/* offers */
.uniqueOffers {
  height: 345px;
  margin-top: 100px;
  text-align: center;
  width: 100%;
}
.uniqueOffers-text {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 52px;
}
.uniqueOffers-div {
  display: flex;
  gap: 31px;
}
.uniqueOffers-div-text {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid #000000;
}
.questions {
  display: flex;
  width: 1300px;
  margin: auto;
  align-items: center;
  gap: 100px;
}
.questions-info {
  width: 370px;
}
.v-expansion-panel-title {
  font-size: 24px;
  font-weight: 600;
}
.v-expansion-panel {
  width: 760px;
}
.questions-info-top {
  font-size: 59px;
  font-weight: 600;
}
.questions-info-bottom {
  padding-top: 27px;
  font-size: 17px;
  font-weight: 400;
}
.footer {
  margin-top: 120px;
  align-items: center;
  justify-content: center;
  gap: 170px;
  display: grid;
  grid-template-columns: 263px 500px 235px;
}
.footer-left p {
  font-size: 14px;
  color: rgba(18, 18, 18, 0.7);
  padding-left: 30px;
  margin-top: 40px;
  font-weight: 500;
}
.footer-left-p {
  font-size: 14px;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 20px;
  color:rgba(17, 17, 17, 1) !important;
}
.footer-middle {
  display: flex;
  line-height: 40px;
}
.footer-middle p {
  font-size: 22px;
  font-weight: 600;
}
.footer-right {
  line-height: 40px;
  text-align: start;
}
.footer-right p {
  font-size: 22px;
  font-weight: 600;
}
.footer-right li {
  color: rgba(17, 17, 17, 1);
  font-size: 21px;
  font-weight: 500;
  position: relative;
  padding-left: 40px;
}
.footer-right-img {
 position: absolute;
 top: 8px;
 right: 208px;
}
.footer-middle-list {
  width: 250px;
}
</style>
