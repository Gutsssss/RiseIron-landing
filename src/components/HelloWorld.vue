<template>
  <!-- nav -->
  <div class="nav">
    <img src="@/assets/header_logo.png" />
    <ul class="nav-ul">
      <a class="ref" href="#tarifPlans"
        ><li class="nav-li">Тарифы</li></a
      >
      <a class="ref" href="#questions"
        ><li class="nav-li">FAQ</li></a
      >
      <a class="ref" href=" https://wiki.srvup.ru/support"
      target="_blank"
        ><li class="nav-li">Поддержка</li></a
      >
      <a class="ref" href="https://wiki.srvup.ru/"
      target="_blank"
        ><li class="nav-li">База знаний</li></a
      >
      <a class="ref" href="https://vk.com/topic-200598401_49056856"
      target="_blank"
        ><li class="nav-li">Отзывы</li></a
      >
    </ul>
    <button class="nav-btn">Биллинг</button>
  </div>
  <!-- tarifs? -->
  <container class="tarifs">
    <div class="tarifs-info">
      <p class="tarifs-info-host">
        Мощный хостинг с Anti-DDoS Game защитой для проектов любых сложностей
      </p>
      <p class="tarifs-info-speed">
        Чтобы вы могли убедиться в качестве нашего хостинга, мы предлагаем<br />
        тестовый период. Вы сможете оценить нашу производительность и<br />
        функциональность перед принятием окончательного решения.
      </p>
      <div class="tarifs-btns">
      <button id="btn_1" class="tarifs-info-btn" style="color: white">
        <a href=" https://bill.srvup.ru/billing.php?do=order2&tarif_id=58" target="_blank">Протестировать сервер</a>
      </button>
      <button
      id="btn_2"
        class="tarifs-info-btn"
        style="
          color: rgba(29, 86, 236, 1);
          background: white;
          border: 2px solid rgba(29, 86, 236, 1);
        "
      >
      <a href="#tarifPlans">
        Посмотреть тарифы
      </a>
      </button>
    </div>
    </div>
    <img class="tarifs-img" src="@/assets/image2.png" />
  </container>
  <!-- about -->
  <container class="about">
  <div><p>Почему выбирают нас?</p></div>
  <div><img src="@/assets/Lists.png"></div>
  </container>
  <!-- services -->
  <container class="services">
    <div class="services-info">
      <div><p>Поддерживаемые игры и программы</p></div>
      <div class="services-games"><img src="@/assets/games.png"></div>
    </div>
  </container>
  <!-- plans -->
  <div class="tarifPlans">
    <p class="tarifPlans-tag" id="tarifPlans">Тарифные планы</p>
    <div class="tarifPlans-buttons">
      <input checked type="radio" id="one" value="1" v-model="picked" />
      <label for="one">Игровые сервера</label>
      <input type="radio" id="two" value="2" v-model="picked" />
      <label for="two">VDS</label>
      <input type="radio" id="three" value="3" v-model="picked" />
      <label for="three">Выделенный сервер</label>
    </div>
    <div class="tarifPlans-table">
      <tableTarifs :table="table1" :inTarifs="inTarifs" v-if="picked == 1" />
      <tableTarifs :table="table2" :inTarifs="inTarifs2" :deleteConnect="false" v-if="picked == 2" />
    </div>
    <div class="stepform_8vGLfm7 rnd_1271651571"></div>
    <div class="uniqueOffers">
      <p class="uniqueOffers-text">Уникальные предложения</p>
      <div class="uniqueOffers-div">
        <p class="uniqueOffers-div-text">Скидка 5% при оплате за три месяца</p>
        <p class="uniqueOffers-div-text">15% за приглашенного друга</p>
        <p class="uniqueOffers-div-text">Если найдете дешевле,сделаем скидку</p>
      </div>
    </div>
  </div>
  <container class="questions" id="questions">
    <div class="questions-info">
      <p class="questions-info-top">Часто задаваемые вопросы</p>
      <p class="questions-info-bottom">
        Не нашли ответа на вопрос?<br />
        Загляните в нашу базу знаний или<br />
        напишите нам, мы будем рады помочь!
      </p>
    </div>
    <div class="text-subtitle-2 mt-4 mb-2"></div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title
          expand-icon="mdi-plus"
          collapse-icon="mdi-minus"
        >
          Как долго активируется мой сервер?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title
          expand-icon="mdi-plus"
          collapse-icon="mdi-minus"
        >
          Сколько человек выдержит мой игровой сервер?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title
          expand-icon="mdi-plus"
          collapse-icon="mdi-minus"
        >
          Могу ли я создать сервер по другой игре, кроме Minecraft?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </container>
  <container class="footer">
    <div class="footer-left">
      <img src="@/assets/header_logo.png" />
      <p>
        Клиентоорентированный<br />
        хостинг, которому нет<br />
        равных!
      </p>
      <p class="footer-left-p">2023 All right reserved. SrvUP</p>
    </div>
    <div class="footer-middle">
      <ul class="footer-middle-list">
        <p>Ссылки</p>
        <li><a href=" https://wiki.srvup.ru/" target="_blank">База знаний</a></li>
        <li><a href="https://vk.com/topic-200598401_49056856" target="_blank">Отзывы</a></li>
        <li>Личный кабинет</li>
      </ul>
      <ul class="footer-middle-list">
        <p>Документы</p>
        <li><a href="https://wiki.srvup.ru/terms-of-use" target="_blank">Пользовательское соглашение</a></li>
        <li>Политика конфиденциальности</li>
      </ul>
    </div>
    <div class="footer-right">
      <div>
      <p>Мы в социальных<br> сетях</p>
      <img src="@/assets/tg_icon.png">
      <img src="@/assets/vk_icon.png">
      <img src="@/assets/discord_icon.png">
      </div>
      <div>
      <p>Принимаем к оплате</p>
      <img src="@/assets/oplata_mir.png">
      <img src="@/assets/oplata_sbp.png">
      <img src="@/assets/oplata_icon.png">
      <img src="@/assets/oplata_qiwi.png">
      </div>
    </div>
  </container>
</template>

<script>
import tableTarifs from "@/components/TableTarifs.vue";
export default {
  components: { tableTarifs },
  data() {
    return {
      toggle:true,
      picked: 1,
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
          priceEuro: 1.2,
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
      inTarifs2:[
        {
          id:1,
          tarifName:"VM-2",
          cpu: 1,
          ram:4,
          container:20,
          priceEuro:4.1,
          priceRub:431
        },
        {
          id:2,
          tarifName:"VM-2",
          cpu: 1,
          ram:4,
          container:20,
          priceEuro:4.1,
          priceRub:431
        },{
          id:3,
          tarifName:"VM-4",
          cpu: 1,
          ram:4,
          container:20,
          priceEuro:4.1,
          priceRub:431
        },{
          id:4,
          tarifName:"VM-5",
          cpu: 1,
          ram:4,
          container:20,
          priceEuro:4.1,
          priceRub:431
        },{
          id:5,
          tarifName:"VM-6",
          cpu: 1,
          ram:4,
          container:20,
          priceEuro:4.1,
          priceRub:431
        }
      ],
      table1:[
        'Тариф','CPU','RAM','Накопитель','Подключение'
      ],
      table2:[
        'Название','CPU','RAM','SSD NVMe',
      ],
      computed:{
        toggleTarifs() {
          if(this.picked === 1) {
            return this.toggle = true
          }
          else {
            return this.toggle = false
          }
        }
      }
    };
  },
};

(function (s, t, e, p, f, o, r, m) {
  s[t] = s[t] || {};
  s[t][1271651571] = {
    id: "8vGLfm7",
    rnd: 1271651571,
  };
  e.async = true;
  e.src = p + f;
  document[m](o)[r](e);
})(
  window,
  "stepFORM_params",
  document.createElement("script"),
  document.location.protocol === "https:" ? "https:" : "http:",
  "//u027902.stepform.io/api.js?id=8vGLfm7",
  "head",
  "appendChild",
  "querySelector"
);
</script>
<style scoped>
template {
  display: flex;
  gap: 100px;
  scroll-behavior: smooth;
}
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  align-items: center;
}
a {
  text-decoration: none;
  color: rgba(18, 18, 18, 0.6);
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
  justify-content: space-between;
  width: 100%;
  height: 82px;
  align-items: center;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 50px;
}
.nav-ul {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 28px;
}
.nav-li {
  font-size: 20px;
  font-weight: 600;
  color: rgba(63, 77, 99, 1);
  font-style: normal;
  font-weight: 700;
}
.ref {
  text-decoration: none;
}
.ref:visited {
  color: rgba(18, 18, 18, 0.6);
}
.nav-btn {
  display: flex;
height: 40px;
min-height: 40px;
max-height: 40px;
padding: 13px 15.97px 13px 16px;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;
background: #1D56EC;
color: rgba(238, 238, 238, 1);
border-radius: 8px;
font-style: normal;
font-weight: 700;
}
/* tarifs */
.tarifs {
  display: flex;
width: 1313px;
height: 462px;
justify-content: center;
align-items: center;
gap: 100px;
flex-shrink: 0;
border-radius: 50px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin: 0 auto;
}
#btn_1 a{
  color: white
}
#btn_2 a{
  color: rgba(22, 115, 255, 1)
}
.tarifs-info {
  display: flex;
  width: 532px;
  min-width: 532px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.tarifs-img {
  width: 417.654px;
  height: 389.095px;
  padding-top: 38px;
}
.tarifs-info-host {
  color: var(--t-1, #172944);
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.tarifs-info-speed {
  color: var(--t-2, #3F4D63);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
}
.tarifs-btns {
  display: flex;
  gap: 30px;
}
.tarifs-info-btn {
  padding-top: 3px;
  width: 200px;
  height: 48px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(22, 115, 255, 1);
  border-radius: 8px;
  border: 0px;
  font-weight: 600;
  padding-bottom: 5px;
}
/* why we */
.about {
  margin: 0 auto;
  text-align: center;
}
.about p {
  color: var(--t-2, #3F4D63);
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 0%;
margin: 50px;
}
/* services */
.services {
  margin: 0 auto;
  text-align: center;
  margin: 50px;
}
.services p {
  color: var(--t-2, #3F4D63);
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 0%;
margin: 50px;
}
.services-games {
  margin-left: 150px;
  margin-top: 50px;
}
/* tables */
input[type="radio"] {
  display: none;
}
input[type="radio"] + label {
  width: 200px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-style: normal;
font-weight: 700;
  color: rgba(18, 18, 18, 0.7);
  text-align: center;
  padding: 13px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
input[type="radio"]:checked + label {
  background-color: #1673ff;
  color: #ffffff;
}

.tarifPlans {
  align-items: center;
  padding: 20px;
  margin: 0 auto;
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
  border-radius: 30px;
  margin: auto;
}
/* offers */
.uniqueOffers {
  height: 345px;
  margin-top: 100px;
  text-align: center;
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.uniqueOffers-text {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 52px;
}
.uniqueOffers-div {
  display: flex;
  gap: 31px;
  align-items: stretch;
  justify-content: center;
}
.uniqueOffers-div-text {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  width: 371px;
  padding-bottom: 10px;
  border-bottom: 3px solid #1D56EC;
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
  margin: 20px;
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
  color: rgba(17, 17, 17, 1) !important;
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
  color: var(--t-1, #172944);
  font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px;
}
.footer-right li {
  color: rgba(17, 17, 17, 1);
  font-size: 21px;
  font-weight: 500;
  position: relative;
  padding-left: 40px;
}
.footer-right img {
  margin: 10px 10px 10px 0px;
}
.footer-middle-list {
  width: 250px;
}
</style>
